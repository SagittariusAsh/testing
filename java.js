document.getElementById('open-card').addEventListener('click', function() {
    document.querySelector('.card').classList.add('open');
    startConfetti();
    startHearts();
});

document.getElementById('close-card').addEventListener('click', function() {
    document.querySelector('.card').classList.remove('open');
    stopConfetti();
    stopHearts();
});

function startConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }
}

function stopConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    while (confettiContainer.firstChild) {
        confettiContainer.removeChild(confettiContainer.firstChild);
    }
}

function startHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
        heartsContainer.appendChild(heart);
    }
}

function stopHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    while (heartsContainer.firstChild) {
        heartsContainer.removeChild(heartsContainer.firstChild);
    }
}

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}