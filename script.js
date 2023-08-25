const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

// console.log(hourElement, minuteElement, secondElement); // test

function updateClock(){
  const currentDate = new Date();
//   console.log(currentDate); // test

    setTimeout(updateClock, 1000); // run every second
    //console.log(currentDate); // test

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    //console.log(hour, minute, second); // test
}

updateClock(); // run once on page load