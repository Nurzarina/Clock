function updateClock() {

    const now = new Date();                         // Gets the current time.

    const seconds = now.getSeconds();               // Extracts the seconds (0-59).
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    // To convert time to rotation angles for seconds-hand, minute-hand and hour-hand.
    const secondsDeg = ((seconds / 60) * 360);
    const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30);

    document.querySelector(".second-hand").style.transform = `rotate(${secondsDeg}deg)`;    // To move the second-hand to the correct position based on the calculated angles.
    document.querySelector(".minute-hand").style.transform = `rotate(${minutesDeg}deg)`;    // To move the minute-hand to the correct position based on the calculated angles.
    document.querySelector(".hour-hand").style.transform = `rotate(${hoursDeg}deg)`;        // To move the hour-hand to the correct position based on the calculated angles.

    // For debugging purpose:
    // console.log(`Time: ${hours}:${minutes}:${seconds}`);
    // console.log(`Hour hand: ${hoursDeg}°`);
    // console.log(`Minutes hand: ${minutesDeg}°`);
    // console.log(`Seconds hand: ${secondsDeg}°`);
}

setInterval(updateClock, 1000);                     // To update the hands rotation every 1000 milliseconds (1 second).
updateClock();                                      // Call it once immediately to prevent delay.