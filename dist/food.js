import { Score } from "./score";
export class Food {
    constructor(element) {
        this.element = element;
        this.clickEventHandler = () => {
            this.element.classList.toggle("food--active");
            const score = Score.getInstance();
            score.render();
        };
        element.addEventListener("click", this.clickEventHandler);
    }
}
