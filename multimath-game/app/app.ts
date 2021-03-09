function startGame(): void {

    const playerName = 'Andy';
    logPlayer(playerName);

    const messageElement: HTMLElement | null = document.getElementById('messages')
    if(typeof messageElement !== null) {
        messageElement.innerText = 'Welcome to MultiMath ! Starting a new game...'
    }
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame)
