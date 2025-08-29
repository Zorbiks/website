const articleCards = document.querySelectorAll(".article-card-preview");

articleCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const cardRect = card.getBoundingClientRect();
        card.style.setProperty("--opacity", 1)
        if (cardRect.left < e.clientX && e.clientX < cardRect.right) {
            card.style.setProperty("--light-x", (e.clientX - cardRect.x) + "px");
        }
        if (cardRect.top < e.clientY && e.clientY < cardRect.bottom) {
            card.style.setProperty("--light-y", (e.clientY - cardRect.y) + "px");
        }
    })
    card.addEventListener("mouseleave", () => {
        card.style.setProperty("--opacity", 0)
    })
})

const articleBorders = document.querySelectorAll(".article-border");

articleBorders.forEach(border => {
    border.addEventListener("mousemove", (e) => {
        const borderRect = border.getBoundingClientRect();
        border.style.setProperty("--opacity", 1)
        if (borderRect.left < e.clientX && e.clientX < borderRect.right) {
            border.style.setProperty("--glow-x", (e.clientX - borderRect.x) + "px");
        }
        if (borderRect.top < e.clientY && e.clientY < borderRect.bottom) {
            border.style.setProperty("--glow-y", (e.clientY - borderRect.y) + "px");
        }
    })
    border.addEventListener("mouseleave", () => {
        border.style.setProperty("--opacity", 0)
    })
})
