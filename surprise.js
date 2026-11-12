const openLetterButton = document.getElementById("openLetter");
const birthdayLetter = document.getElementById("birthdayLetter");
const envelope = document.getElementById("envelope");

openLetterButton.addEventListener("click", () => {

    birthdayLetter.classList.remove("hidden");

    openLetterButton.style.display = "none";
    envelope.style.animation = "none";

    envelope.style.animation = "none";

    birthdayLetter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});