const balloons = document.querySelectorAll(".balloon");
const message = document.getElementById("balloonMessage");
const continueButton = document.getElementById("continueButton");

let poppedCount = 0;

balloons.forEach(balloon => {

    balloon.addEventListener("click", () => {

        if (balloon.classList.contains("popped")) return;

        balloon.classList.add("popped");

        const balloonMessage = balloon.dataset.message;
        message.textContent = balloonMessage;

        poppedCount++;

        balloon.style.transform = "scale(0)";
        balloon.style.opacity = "0";
        balloon.style.pointerEvents = "none";

        if (poppedCount === balloons.length) {

            message.textContent =
                "🎉 YOU FOUND THEM ALL! MISSION #02 COMPLETE ❤️";

            continueButton.classList.remove("hidden");
        }
    });

});

continueButton.addEventListener("click", () => {

    window.location.href = "surprise.html";

});