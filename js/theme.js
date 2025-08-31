const flashbang = document.getElementById("flashbang");
const themeToggle = document.getElementById("toggle");
const themeToggleBackground = document.querySelector(".toggle-label");

const storedTheme = localStorage.getItem("theme") || document.documentElement.dataset.theme;

// Turn on/off theme toggle switch based on the stored theme
if (storedTheme == "dark") {
    themeToggle.setAttribute("checked", "checked");
}

// Toggle between light/dark theme and trigger flashbang with sound effect
themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme;

    if (theme === "light") {
        animateThemeToggle()
        document.documentElement.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
        flashbang.classList.remove("active");
    } else {
        animateThemeToggle()
        playAudio();
        flashbang.classList.add("fadeout");
        flashbang.classList.add("active");
        document.documentElement.dataset.theme = "light";
        localStorage.setItem("theme", "light");
    }
});

// Create Audio object and load audio file
const audio = new Audio("/audio/flashbang.ogg");

function playAudio() {
    audio.play().catch((error) => {
        console.error("Error playing audio:", error);
        alert("Error playing audio file");
    });
}

function animateThemeToggle() {
    themeToggle.classList.add("animate");
    themeToggleBackground.classList.add("animate");
}
