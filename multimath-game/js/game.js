import ScoreBoard from "./scoreBoards.js";
import Utils from "./utils.js";
export class Game {
    constructor(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreBoard = new ScoreBoard();
    }
    calculateScore() {
        let currentScore = 0;
        // loop thru the text boxes and calculate the number that are correct
        for (let i = 1; i <= this.problemCount; i++) {
            const answerID = `answer${i}`;
            const answer = Number(Utils.getInputValue(answerID));
            const correctAnswer = i * this.factor;
            if (answer == correctAnswer) {
                currentScore += 1;
            }
        }
        // create a new result object to pass to the score board
        const currentResult = {
            playerName: this.player.name,
            score: currentScore,
            problemCount: this.problemCount,
            factor: this.factor,
        };
        // add the result to the score board and render it
        this.scoreBoard.addResult(currentResult).render();
        // disable the calculate button
        this.toggleCalculateBtn();
    }
    render() {
        const element = document.getElementById("game");
        element.innerHTML = this.getTemplate();
        this.toggleCalculateBtn();
    }
    getTemplate() {
        let tpl = "";
        for (let i = 1; i <= this.problemCount; i++) {
            const answerID = `answer${i}`;
            tpl += `<div class="form-group row">`;
            tpl += `<label for="${answerID}" class="col-3 control-label">${String(this.factor)}x${i}</label>`;
            tpl +=
                `<div class="col"><input type="text" class="form-control" id="${answerID}" size="5" /></div>`;
            tpl += "</div>";
        }
        return tpl;
    }
    toggleCalculateBtn() {
        const element = document.getElementById("calculate-btn");
        if (element.hasAttribute("disabled")) {
            element.removeAttribute("disabled");
            return;
        }
        element.setAttribute("disabled", "true");
    }
}
