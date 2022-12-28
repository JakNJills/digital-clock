const updateHour = document.getElementById("hours");
const updateMinutes = document.getElementById("minutes");
const updateSeconds = document.getElementById("seconds");
const updateNightday = document.getElementById("day-night");
const updateMonth = document.getElementById("Month");
const updateDate = document.getElementById("Date");
const updateYear = document.getElementById("Year");

function updateClock() {
  let hr = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();
  let timeOfDay = "AM";

  if (hr > 12) {
    hr = hr - 12;
    timeOfDay = "PM";
  }

  updateHour.innerText = hr;
  updateSeconds.innerText = secs;  
  updateMinutes.innerText = mins;
  updateNightday.innerText = timeOfDay;

  setTimeout ( ()  => {
    updateClock()
  }, 1000);
}

function updateTodaysDate() {
  let month = new Date().getMonth();
  let date = new Date().getDate();
  let theYears = new Date().getFullYear();
  


  updateMonth.innerText = month + 1;
  updateDate.innerHTML = date;
  updateYear.innerHTML = theYears;
}

updateClock();
updateTodaysDate();