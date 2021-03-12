export default class ScoreBoard {
  private results: Result[] = [];

  addResult(newResult: Result): ScoreBoard {
    this.results.push(newResult);
    return this;
  }

  render(): void {
    let output: string = "<h2>ScoreBoard</h2>";

    this.results.forEach((result) => {
      output +=
        `<h4>${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}</h4>`;
    });

    const scoreElement: HTMLElement | null = document.getElementById("scores");
    scoreElement!.innerHTML = output;
  }
}
