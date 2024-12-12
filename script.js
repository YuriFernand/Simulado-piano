// Mapeando as teclas para os sons correspondentes
const sounds = {
    "C": "sounds/C.mp3",
    "C#": "sounds/C_sharp.mp3",
    "D": "sounds/D.mp3",
    "D#": "sounds/D_sharp.mp3",
    "E": "sounds/E.mp3",
    "F": "sounds/F.mp3",
    "F#": "sounds/F_sharp.mp3",
    "G": "sounds/G.mp3",
    "G#": "sounds/G_sharp.mp3",
    "A": "sounds/A.mp3",
    "A#": "sounds/A_sharp.mp3",
    "B": "sounds/B.mp3",
    "C2": "sounds/C2.mp3"
};

// Função para tocar o som de uma tecla
function playSound(key) {
    const audio = new Audio(sounds[key]);
    audio.play();
}

// Adicionando evento de click para as teclas
document.querySelectorAll('.key').forEach(keyElement => {
    keyElement.addEventListener('click', () => {
        const key = keyElement.dataset.key;
        playSound(key);
        animateKey(keyElement);
    });
});

// Adicionando evento para o teclado físico
document.addEventListener('keydown', (event) => {
    const keyMap = {
        "a": "C",
        "w": "C#",
        "s": "D",
        "e": "D#",
        "d": "E",
        "f": "F",
        "t": "F#",
        "g": "G",
        "y": "G#",
        "h": "A",
        "u": "A#",
        "j": "B",
        "k": "C2"
    };

    const key = keyMap[event.key];
    if (key) {
        const keyElement = document.getElementById(key);
        playSound(key);
        animateKey(keyElement);
    }
});

// Função para animar a tecla quando pressionada
function animateKey(keyElement) {
    keyElement.classList.add('active');
    setTimeout(() => {
        keyElement.classList.remove('active');
    }, 200);
}
