function startGame(): void {
    // starting a new game
    const messageElement = document.getElementById('messages')
    messageElement!.innerText = 'Welcome to MultiMath ! Starting a new game...'
}

document.getElementById('startGame')!.addEventListener('click', startGame)
