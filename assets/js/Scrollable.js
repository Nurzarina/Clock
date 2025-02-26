import { applyTheme } from "./themeSwitcher";

let currentIndex = 1;               // To start at the second button.

// Function to make the selection scroll up the theme buttons.
function scrollUp() {
    let activeButton = document.querySelector(".button.active");
    let prevButton = activeButton.previousElementSibling;

    if (prevButton) {
        activeButton.classList.remove("active");
        prevButton.classList.add("active");
        applyTheme(prevButton.dataset.theme);                   // Change the theme based on button.
    }
}

// Function to make selection scrolled down the theme buttons.
function scrollDown() {
    let activeButton = document.querySelector(".button.active");
    let nextButton = activeButton.nextElementSibling;

    if (nextButton) {
        activeButton.classList.remove("active");
        nextButton.classList.add("active");
        applyTheme(nextButton.dataset.theme);                  // Change theme based on button.
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