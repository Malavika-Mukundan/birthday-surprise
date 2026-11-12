function checkPassword() {

    const passwordInput =
        document.getElementById("password");

    const message =
        document.getElementById("message");

    const card =
        document.querySelector(".card");

    const password =
        passwordInput.value.trim();

    // Sandeep's birthday
    const correctPassword = "16/11/2003";


    /* =========================
       CORRECT PASSWORD
    ========================= */

    if (password === correctPassword) {

        message.innerHTML =
            "🕷️ IDENTITY CONFIRMED...";

        message.style.color = "#ff394d";

        card.classList.add("success");


        setTimeout(() => {

            message.innerHTML =
                "Welcome, Achuu ❤️";

        }, 800);


        /*
         * TEMPORARY
         *
         * Later we will replace this
         * with:
         *
         * window.location.href = "hero.html";
         *
         * when Page 2 is ready.
         */

        setTimeout(() => {

            alert(
                "🕷️ THWIP! 🎉\n\n" +
                "Welcome, birthday boy!\n\n" +
                "Your mission is about to begin..."
            );

        }, 1700);

        setTimeout(() => {
    window.location.href = "cake.html";
}, 1700);

    }


    /* =========================
       WRONG PASSWORD
    ========================= */

    else {

        message.innerHTML =
            "❌ ACCESS DENIED... Nice try, birthday boy 👀";

        message.style.color =
            "#ff4659";


        passwordInput.style.animation =
            "shake 0.4s";


        setTimeout(() => {

            passwordInput.style.animation = "";

        }, 400);

    }
}


/* =========================
   ENTER KEY SUPPORT
========================= */

document
    .getElementById("password")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    });