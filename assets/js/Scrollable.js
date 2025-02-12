import { applyTheme } from "./themeSwitcher";

let currentIndex = 1;               // To start at the second button.

// Function to make a button get classed as ".active"
function updateActiveButton() {
    const buttons = document.querySelectorAll(".theme-button");
    buttons.forEach((btn, index) => {
        btn.classList.remove("active");
        if (index === currentIndex) {
            btn.classList.add("active");
        }
    });

    // Move the buttons container up/down to center the active button
    const buttonsContainer = document.querySelector(".buttons");
    const offset = -currentIndex * 50;
    buttonsContainer.style.transform = `translateY(${offset})px`;
}

// Function to make the selection scroll up the theme buttons.
function scrollUp() {
    if (currentIndex > 0) {
        currentIndex--;
        updateActiveButton();
    }
}

// Function to make selection scrolled down the theme buttons.
function scrollDown() {
    const buttons = document.querySelectorAll(".theme-button");
    if (currentIndex < buttons.length - 1) {
        currentIndex++;
        updateActiveButton();
    }
}

// Set initial active button.
updateActiveButton();

// Add smooth scrolling with mouse wheel.
document.querySelector(".scroll-wrapper").addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        scrollDown();
    } else {
        scrollUp();
    }
});