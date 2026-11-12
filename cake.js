// ==========================================
// BIRTHDAY CAKE MISSION
// ==========================================

const cakeState = {
    base: null,
    frosting: null,
    decorations: [],
    candles: false,
    candlesLit: false,
    complete: false
};


// Elements
const cake = document.getElementById("cake");
const frosting = document.getElementById("frosting");
const cakeDecorations = document.getElementById("cakeDecorations");
const candles = document.getElementById("candles");

const cakeMessage = document.getElementById("cakeMessage");

const currentStep = document.getElementById("currentStep");
const progressFill = document.getElementById("progressFill");


// ==========================================
// STEP CONTROL
// ==========================================

function showStep(stepNumber) {

    document.querySelectorAll(".cake-step").forEach(step => {
        step.classList.remove("active");
    });

    document.getElementById(`step${stepNumber}`)
        .classList.add("active");

    currentStep.textContent = stepNumber;

    progressFill.style.width =
        `${(stepNumber / 5) * 100}%`;
}


// ==========================================
// MESSAGE
// ==========================================

function showMessage(message) {
    cakeMessage.textContent = message;

    cakeMessage.classList.remove("message-pop");

    void cakeMessage.offsetWidth;

    cakeMessage.classList.add("message-pop");
}


// ==========================================
// STEP 1 — CAKE BASE
// ==========================================

document.querySelectorAll(".cake-choice").forEach(button => {

    button.addEventListener("click", () => {

        const base = button.dataset.base;

        cakeState.base = base;

        cake.classList.remove(
            "chocolate",
            "strawberry",
            "vanilla"
        );

        cake.classList.add(base);

        document.querySelectorAll(".cake-choice")
            .forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        showMessage(
            "Good choice... I knew you'd pick that one 😌"
        );

        setTimeout(() => {
            showStep(2);
        }, 800);

    });

});


// ==========================================
// STEP 2 — FROSTING
// ==========================================

document.querySelectorAll(".frosting-choice").forEach(button => {

    button.addEventListener("click", () => {

        const frostingType = button.dataset.frosting;

        cakeState.frosting = frostingType;

        frosting.classList.remove(
            "pink",
            "white",
            "red"
        );

        frosting.classList.add(frostingType);

        document.querySelectorAll(".frosting-choice")
            .forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        showMessage(
            "Okayyyy chef 👨‍🍳✨"
        );

        setTimeout(() => {
            showStep(3);
        }, 800);

    });

});


// ==========================================
// STEP 3 — DECORATIONS
// ==========================================

const decorationEmojis = {
    web: "🕸️",
    heart: "❤️",
    strawberry: "🍓",
    chocolate: "🍫"
};


document.querySelectorAll(".decoration-choice")
    .forEach(button => {

        button.addEventListener("click", () => {

            const decoration =
                button.dataset.decoration;

            cakeState.decorations.push(decoration);

            const decorationElement =
                document.createElement("span");

            decorationElement.className =
                "cake-decoration";

            decorationElement.textContent =
                decorationEmojis[decoration];

            cakeDecorations.appendChild(
                decorationElement
            );

            button.classList.add("selected");

            showMessage(
                "That's a cute cake !"
            );

        });

    });


// Finish decorating

document.getElementById("finishDecorating")
    .addEventListener("click", () => {

        if (cakeState.decorations.length === 0) {

            showMessage(
                "Ummm... you forgot to decorate it 😭"
            );

            return;
        }

        showMessage(
            "Okay. THAT is a birthday cake. 😭❤️"
        );

        setTimeout(() => {
            showStep(4);
        }, 900);

    });


// ==========================================
// STEP 4 — ADD CANDLES
// ==========================================

document.getElementById("addCandles")
    .addEventListener("click", () => {

        cakeState.candles = true;

        candles.innerHTML = "";

        // Five cute candles
        for (let i = 0; i < 5; i++) {

            const candle =
                document.createElement("div");

            candle.className = "candle";

            candle.innerHTML = `
                <div class="flame hidden">🔥</div>
                <div class="candle-stick"></div>
            `;

            candles.appendChild(candle);
        }

        showMessage(
            "Make a wish... but don't tell me what it is. 🤭"
        );

        setTimeout(() => {
            showStep(5);
        }, 900);

    });


// ==========================================
// STEP 5 — LIGHT CANDLES
// ==========================================

document.getElementById("lightCandles")
    .addEventListener("click", () => {

        cakeState.candlesLit = true;

        document.querySelectorAll(".flame")
            .forEach(flame => {
                flame.classList.remove("hidden");
            });

        document.getElementById("lightCandles")
            .classList.add("hidden");

        document.getElementById("blowCandles")
            .classList.remove("hidden");

        document.getElementById("candleTitle")
            .textContent =
            "MAKE A WISH, ACHUUUUU ✨";

        document.getElementById("candleMessage")
            .textContent =
            "Okay... now blow them out! 💨";

        showMessage(
            "Close your eyes... make your wish... ✨"
        );

    });


// ==========================================
// BLOW OUT CANDLES
// ==========================================

document.getElementById("blowCandles")
    .addEventListener("click", () => {

        cakeState.candlesLit = false;
        cakeState.complete = true;

        document.querySelectorAll(".flame")
            .forEach(flame => {
                flame.classList.add("hidden");
            });

        document.getElementById("candleTitle")
            .textContent =
            "MISSION COMPLETE! 🕷️❤️";

        document.getElementById("candleMessage")
            .textContent =
            "Cake successfully baked. Birthday boy successfully spoiled.";

        showMessage(
            "YOU DID IT! 🎂❤️ Now there's something else waiting for you..."
        );

        document.getElementById("blowCandles")
            .classList.add("hidden");

        document.getElementById("continueButton")
            .classList.remove("hidden");

        // Save progress
        localStorage.setItem(
            "cakeComplete",
            "true"
        );

        createConfetti();

    });


// ==========================================
// CONTINUE TO BALLOONS
// ==========================================

document.getElementById("continueButton")
    .addEventListener("click", () => {

        window.location.href = "balloons.html";

    });


// ==========================================
// SIMPLE CONFETTI
// ==========================================

function createConfetti() {

    for (let i = 0; i < 35; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.textContent =
            Math.random() > 0.5 ? "♥" : "✦";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}