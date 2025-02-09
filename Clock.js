function updateClock() {

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    // To calculate angles for seconds-hand, minute-hand and hour-hand.
    const secondsDeg = ((seconds / 60) * 360);
    const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30);

    document.querySelector(".second-hand").style.transform = `rotate(${secondsDeg}deg)`;
    document.querySelector(".minute-hand").style.transform = `rotate(${minutesDeg}deg)`;
    document.querySelector(".hour-hand").style.transform = `rotate(${hoursDeg}deg)`;

    // console.log(`Time: ${hours}:${minutes}:${seconds}`);
    // console.log(`Hour hand: ${hoursDeg}°`);
    // console.log(`Minutes hand: ${minutesDeg}°`);
    // console.log(`Seconds hand: ${secondsDeg}°`);
}

setInterval(updateClock, 1000);             // To update clock every 1 second.
updateClock();                              // Initial call.