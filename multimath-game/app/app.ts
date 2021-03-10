const logMessage = (message: string) => console.log(message);
const logError = (err: string) => console.error(err);
function startGame(): void {
  const playerName: string = getInputValue("playerName") as string;

  logPlayer(playerName);
  postScore(1000, playerName);
  postScore(-3, playerName);
}

function logPlayer(name = "anonymous"): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string {
  const element: HTMLInputElement =
    (document.getElementById(elementID) as HTMLInputElement);

  if (element.value === "string") return "";

  return element.value;
}

function postScore(score: number, playerName: string): void {
  if (playerName.length === 0) return;

  let logger: (value: string) => void;

  logger = logMessage;
  if (score < 0) logger = logError;

  const scoreElement: HTMLElement =
    (document.getElementById("postedScores") as HTMLElement);
  scoreElement.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`);
}

const startGameElement: HTMLElement | null = document.getElementById(
  "startGame",
);
if (startGameElement instanceof HTMLElement) {
  startGameElement.addEventListener("click", startGame);
}
const formGameElement: HTMLElement | null = document.getElementById("formGame");
if (formGameElement instanceof HTMLElement) {
  formGameElement.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}
