const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

// console.log(hourElement, minuteElement, secondElement); // test

function updateClock(){
  const currentDate = new Date();
//   console.log(currentDate); // test

    setTimeout(updateClock, 1000); // run every second
    //console.log(currentDate); // test

    const hour = currentDate.getHours(); // 0-23
    const minute = currentDate.getMinutes(); // 0-59
    const second = currentDate.getSeconds(); // 0-59
    //console.log(hour, minute, second); // test

    const hourDeg = (hour / 12) * 360; // 360 degrees in a circle
    hourElement.style.transform = `rotate(${hourDeg}deg)`;
    //console.log(hourDeg); // test

    const minuteDeg = (minute / 60) * 360; // 360 degrees in a circle
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    //console.log(minuteDeg); // test

    const secondDeg = (second / 60) * 360; // 360 degrees in a circle
    secondElement.style.transform = `rotate(${secondDeg}deg)`;
    //console.log(secondDeg); // test
}

// updateClock(); // run once on page load

setInterval(updateClock, 1000); // run every second