export default class ScoreBoard {
    constructor() {
        this.results = [];
    }
    addResult(newResult) {
        this.results.push(newResult);
        return this;
    }
    render() {
        let output = "<h2>ScoreBoard</h2>";
        this.results.forEach((result) => {
            output +=
                `<h4>${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}</h4>`;
        });
        const scoreElement = document.getElementById("scores");
        scoreElement.innerHTML = output;
    }
}
