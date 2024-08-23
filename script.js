let isMusicPlaying = false;

document.querySelector('.birthdayCard').addEventListener('mouseover', function () {
    if (!isMusicPlaying) {
        playMusic();
        triggerFireworks();
    }
});

function playMusic() {
    const audio = document.getElementById("birthdayMusic");
    audio.play();
    document.getElementById("musicToggleButton").textContent = "Stop Music";
    isMusicPlaying = true;
}

function toggleMusic() {
    const audio = document.getElementById("birthdayMusic");
    if (isMusicPlaying) {
        audio.pause();
        document.getElementById("musicToggleButton").textContent = "Play Music";
    } else {
        audio.play();
        document.getElementById("musicToggleButton").textContent = "Stop Music";
    }
    isMusicPlaying = !isMusicPlaying;
}

function triggerFireworks() {
    const fireworkLocations = [
        { top: '20%', left: '50%' },
        { top: '30%', left: '70%' },
        { top: '50%', left: '40%' },
        { top: '60%', left: '60%' },
        { top: '80%', left: '50%' },
        { top: '40%', left: '20%' },  // New firework location 1
        { top: '70%', left: '80%' },  // New firework location 2
    ];

    fireworkLocations.forEach(location => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.top = location.top;
        firework.style.left = location.left;
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1500); // Remove the firework after the animation
    });
}


