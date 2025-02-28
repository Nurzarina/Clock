function updateClock() {

    const now = new Date();                                                                 // Gets the current time.

    const seconds = now.getSeconds();                                                       // Extracts the seconds (0-59).
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const tickSound = new Audio("assets/sounds/ticking-clock_1-27477.mp3");
    tickSound.volume = 0.05;

    // To convert time to rotation angles for seconds-hand, minute-hand and hour-hand.
    const secondDeg = seconds * 6;                                                          // For each second, the second-hand moves 6 degrees (360°/60seconds).
    const secondHand = document.querySelector('.second-hand');
    const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30);

    // When seconds reset to 0, disable the transition to avoid the jump glitch.
    if (seconds === 0) {
        secondHand.style.transition = 'none';                                               // Disable the transition for an instantaneous update.
        secondHand.style.transform = `rotate(${secondDeg}deg)`;                             // Set the rotation to 0° (visually equivalent to 360°).
        secondHand.offsetWidth;                                                             // Force reflow to ensure the previous style change is applied immediately.
        secondHand.style.transition = 'transform 0.05s linear';                             // Re-enable the transition for 1-59 seconds.
    } else {
        secondHand.style.transform = `rotate(${secondDeg}deg)`;                             // So that the rotation is updated normally for 1-59 seconds.
    }

    document.querySelector(".minute-hand").style.transform = `rotate(${minutesDeg}deg)`;    // To move the minute-hand to the correct position based on the calculated angles.
    document.querySelector(".hour-hand").style.transform = `rotate(${hoursDeg}deg)`;        // To move the hour-hand to the correct position based on the calculated angles.

    // Play ticking sound
    tickSound.currentTime = 0;                                                              // Rewind ticking sound to start to prevent delay.
    tickSound.play();
}

setInterval(updateClock, 1000);                                                             // To update the hands rotation every 1000 milliseconds (1 second).
updateClock();                                                                              // Call it once immediately to prevent delay.