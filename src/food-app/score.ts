import { Foods } from "./foods";
import { Scorable } from "./interfaces";
export class Score implements Scorable {
  private static instance: Score;
  get totalScore() {
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce(
      (sum: number, element: number) => sum + element,
      0
    );
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
