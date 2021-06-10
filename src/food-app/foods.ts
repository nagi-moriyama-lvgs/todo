import { Foodsable } from "./interfaces";
import { Food } from "./food";
export class Foods implements Foodsable {
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
