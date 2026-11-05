const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const robot = document.getElementById("robot");
const cake = document.getElementById("cake");
const birthday = document.getElementById("birthday");
const music = document.getElementById("music");

startBtn.addEventListener("click", async function() {

    // Start music
    music.currentTime = 0;

    try {
        await music.play();
    } catch(error) {
        console.log("Music could not start:", error);
    }

    // Hide intro
    intro.style.display = "none";

    // Robot starts walking
    robot.classList.add("walk");

    // Robot reaches destination
    setTimeout(function() {
        robot.classList.remove("walk");
    }, 6000);

    // Cake appears
    setTimeout(function() {
        cake.classList.add("show");
    }, 6000);

    // Birthday title appears
    setTimeout(function() {
        birthday.style.transition = "opacity 2s";
        birthday.style.opacity = "1";
    }, 8500);

    // Confetti
    setTimeout(function() {
        createConfetti();
    }, 9000);

});

function createConfetti() {

    const container = document.getElementById("confetti");

    for(let i = 0; i < 60; i++) {

        const item = document.createElement("div");

        item.className = "confetti";

        item.innerHTML = ["🎉","✨","💖","🎊"][
            Math.floor(Math.random() * 4)
        ];

        item.style.left = Math.random() * 100 + "%";

        item.style.animationDelay = Math.random() * 3 + "s";

        container.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 8000);
    }

}
