document.getElementById("pig").addEventListener("click", function () {
    const audio = new Audio("discord.mp3");
    const container = document.getElementById("image-container");

    container.style.backgroundImage = "url('johnpork.jpg')";
    container.style.transition = "opacity 2s ease-in-out";
    container.style.pointerEvents = "auto";
    container.style.opacity = "1";

    audio.play();

    audio.onplaying = function () {
        const fadeOutStartTime = audio.duration - 1;

        setTimeout(() => {
            container.style.opacity = "0";

            setTimeout(() => {
                container.style.pointerEvents = "none";
            }, 1000);
        }, fadeOutStartTime * 1000);
    };
});

document.getElementById("schmurfcat").addEventListener("click", function () {
    const audio = new Audio("smurfsound.mp3");
    const container = document.getElementById("image-container");

    container.style.backgroundImage = "url('smurfcat.jpg')";
    container.style.transition = "opacity 3s ease-in-out";
    container.style.pointerEvents = "auto";
    container.style.opacity = "1";

    audio.play();

    audio.onplaying = function () {
        const fadeOutStartTime = audio.duration - 3;

        setTimeout(() => {
            container.style.opacity = "0";
            fadeOutAudio(audio);

            setTimeout(() => {
                container.style.pointerEvents = "none";
            }, 3000);
        }, fadeOutStartTime * 1000);
    };
});

function fadeOutAudio(audio) {
    let fadeOutInterval = setInterval(function () {
        if (audio.volume > 0) {
            audio.volume -= 0.1;
        } else {
            clearInterval(fadeOutInterval);
            audio.pause();
        }
    }, 300);
}

document.getElementById("fisch").addEventListener("click", function () {
    const audio = new Audio("vineboom.mp3");
    const container = document.getElementById("image-container");

    container.style.backgroundImage = "url('spezifisch.jpg')";
    container.style.transition = "opacity 2s ease-in-out";
    container.style.pointerEvents = "auto";
    container.style.opacity = "1";

    audio.play();

    audio.onplaying = function () {
        const fadeOutStartTime = audio.duration - 1;

        setTimeout(() => {
            container.style.opacity = "0";

            setTimeout(() => {
                container.style.pointerEvents = "none";
            }, 1000);
        }, fadeOutStartTime * 1000);
    };
});
