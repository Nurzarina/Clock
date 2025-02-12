function changeTheme(cssFile) {
    document.getElementById("theme-stylesheet").setAttribute("href", cssFile);
    localStorage.setItem("selectedTheme", cssFile);                             // To save selection in localStorage.
}

// Load saved theme on page reload from localStorage.
window.onload = function() {
    const savedTheme = localStorage.getItem(selectedTheme);
    if (savedTheme) {
        document.getElementById("theme-stylesheet").setAttribute("href", savedTheme);
    } else {
        console.log("No saved theme detected. Loading default theme.")
    }
};