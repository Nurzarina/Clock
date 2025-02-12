function updateClock() {
    const now = new Date();                                       // To get the current time.
    const seconds = now.getSeconds();                             // To extract the seconds (0-59).
    const secondDeg = seconds * 6;                                // For each second, the second-hand moves 6 degrees (360°/60seconds).

    const secondHand = document.querySelector('.second-hand');

    // When seconds reset to 0, disable the transition to avoid the jump glitch.
    if (seconds === 0) {
        secondHand.style.transition = 'none';                     // Disable the transition for an instantaneous update.
        secondHand.style.transform = `rotate(${secondDeg}deg)`;   // Set the rotation to 0° (visually equivalent to 360°).
        secondHand.offsetWidth;                                   // Force reflow to ensure the previous style change is applied immediately.
        secondHand.style.transition = 'transform 0.05s linear';   // Re-enable the transition for 1-59 seconds.
    }   else {
        secondHand.style.transform = `rotate(${secondDeg}deg)`;   // So that the rotation is updated normally for 1-59 seconds.
    }
}

setInterval(updateClock, 1000);                                 // To update the hands rotation every 1000 milliseconds (1 second).
updateClock();                                                  // Call updateClock once immediately on page load to prevent delay.