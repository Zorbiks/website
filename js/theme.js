const themeToggle = document.getElementById("toggle");

const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
    document.documentElement.dataset.theme = storedTheme;
    if (storedTheme == "dark") {
        themeToggle.setAttribute("checked", "checked");
    }
}

themeToggle.addEventListener("click", event => {
    const theme = document.documentElement.dataset.theme;
    if (theme === "light") {
        document.documentElement.dataset.theme = "dark"
        localStorage.setItem("theme", "dark")
    } else {
        document.documentElement.dataset.theme = "light"
        localStorage.setItem("theme", "light")
    }
});
