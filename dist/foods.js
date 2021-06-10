import { Food } from "./food";
export class Foods {
    constructor() {
        this.elements = document.querySelectorAll(".food");
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach((element) => {
            new Food(element);
        });
    }
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
            this._activeElementsScore.push(Number(element.querySelector(".food__score").textContent));
        });
        return this._activeElementsScore;
    }
    static getInstance() {
        if (Foods.instance)
            return Foods.instance;
        Foods.instance = new Foods();
        return Foods.instance;
    }
}
