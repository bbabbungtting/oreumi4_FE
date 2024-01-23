function startConfetti() {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confettiContainer.appendChild(confetti);
    }

    confettiContainer.classList.remove('hidden');
    setTimeout(() => {
        confettiContainer.classList.add('hidden');
        confettiContainer.innerHTML = '';
    }, 5000);
}