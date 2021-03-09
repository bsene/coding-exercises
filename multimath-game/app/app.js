function startGame() {
    const playerName = 'Andy';
    logPlayer(playerName);
    const messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath ! Starting a new game...';
}
function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
