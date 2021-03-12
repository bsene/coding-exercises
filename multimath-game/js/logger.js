const logPlayer = function (name = "anonymous") {
    console.log(`New game starting for player: ${name}`);
};
const logMessage = (message) => console.log(message);
const logError = (err) => console.error(err);
export { logPlayer, logMessage, logError };
