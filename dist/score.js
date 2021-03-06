import { Foods } from "./foods.js";
export class Score {
    constructor() { }
    get totalScore() {
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((sum, element) => sum + element, 0);
    }
    render() {
        document.querySelector(".score__number").textContent = String(this.totalScore);
    }
    static getInstance() {
        if (Score.instance)
            return Score.instance;
        Score.instance = new Score();
        return Score.instance;
    }
}
