interface Scorable {
  readonly totalScore: number;
  render(): void;
}
interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}
interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}

class Score implements Scorable {
  private static instance: Score;
  get totalScore() {
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((sum, element) => sum + element, 0);
  }
  render() {
    document.querySelector(".score__number")!.textContent! = String(
      this.totalScore
    );
  }

  private constructor() {}

  static getInstance() {
    if (Score.instance) return Score.instance;
    Score.instance = new Score();
    return Score.instance;
  }
}
class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler);
  }
  clickEventHandler = () => {
    this.element.classList.toggle("food--active");
    const score = Score.getInstance();
    score.render();
  };
}
class Foods implements Foodsable {
  private static instance: Foods;
  elements = document.querySelectorAll<HTMLDivElement>(".food");
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach((element) => {
      if (element.classList.contains("food--active")) {
        this._activeElements.push(element);
      }
    });
    return this._activeElements;
  }

  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach((element) => {
      this._activeElementsScore.push(
        Number(element.querySelector(".food__score")!.textContent)
      );
    });
    return this._activeElementsScore;
  }
  private constructor() {
    this.elements.forEach((element) => {
      new Food(element);
    });
  }

  static getInstance(): Foods {
    if (Foods.instance) return Foods.instance;
    Foods.instance = new Foods();
    return Foods.instance;
  }
}

const foods = Foods.getInstance();
