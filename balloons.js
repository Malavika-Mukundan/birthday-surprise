
const balloons = document.querySelectorAll(".balloon");
const message = document.getElementById("balloonMessage");
const continueButton = document.getElementById("continueButton");

let poppedCount = 0;

balloons.forEach((balloon) => {

    balloon.addEventListener("click", function () {

        if (this.classList.contains("popped")) return;

        this.classList.add("popped");

        // Display the message
        message.innerText = this.getAttribute("data-message");

        // Make sure the message is visible
        message.style.display = "block";
        message.style.visibility = "visible";
        message.style.opacity = "1";

        // Pop the balloon
        this.style.display = "none";

        poppedCount++;

        if (poppedCount === balloons.length) {
            message.innerText =
                "🎉 YOU FOUND THEM ALL! MISSION #02 COMPLETE ❤️";

            continueButton.classList.remove("hidden");
        }

    });

});

continueButton.addEventListener("click", function () {
    window.location.href = "surprise.html";
});
