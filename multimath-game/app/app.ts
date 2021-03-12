import { Game } from "./game.js";
import { Player } from "./player.js";
import Utils from "./utils.js";

document.addEventListener("DOMContentLoaded", (event) => {
  let newGame: Game;
  document.getElementById("startGame")!.addEventListener("click", function () {
    const player = new Player();
    player.name = Utils.getInputValue("playerName");

    const problemCount: number = Number(Utils.getInputValue("problemCount"));
    const factor: number = Number(Utils.getInputValue("factor"));

    newGame = new Game(player, problemCount, factor);
    newGame.render();
  });

  document.getElementById("calculate-btn")!.addEventListener("click", () => {
    newGame.calculateScore();
  });

  document.getElementById("formGame")!.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
