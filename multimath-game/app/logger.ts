const logPlayer = function (name: string | undefined = "anonymous"): void {
    console.log(`New game starting for player: ${name}`);
  };


const logMessage = (message: string) => console.log(message);
const logError = (err: string) => console.error(err);

export { logPlayer, logMessage, logError };