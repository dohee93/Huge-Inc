

// Office Time
let presentTime = new Date(),
   utcHour = presentTime.getUTCHours(),
   utcMinute = presentTime.getUTCMinutes(),
   officeCard = document.getElementsByClassName('office-card'),
   officeTime = document.getElementsByClassName('office-time'),
   officeDay = document.getElementsByClassName('time-sign__day'),
   officeNight = document.getElementsByClassName('time-sign__night');
console.log(utcHour, utcMinute);
let cityAmPm = [],
   cityHourOffset = [-4, -5, -4, -5, -4, -4, 1, -7, -5, -7, +8, -4, +9],
   cityCount = cityHourOffset.length;
let cityHour;

function getTime() {
   for(var i = 0; i < cityCount; i++) {
      cityHour = utcHour + cityHourOffset[i];
      if(cityHour < 0) cityHour += 24;
      
      if(cityHour >= 0 && cityHour < 12) cityAmPm = 'AM';
      else cityAmPm = 'PM';
      if (cityHour >= 6 && cityHour <= 18) {
         officeCard[i].classList.remove('office-card--night');
         officeDay[i].style.display = 'block';
         officeNight[i].style.display = 'none';
      } else {
         officeCard[i].classList.add('office-card--night');
         officeDay[i].style.display = 'none';
         officeNight[i].style.display = 'block';
      }
      if(cityHour > 12) cityHour -= 12;
      officeTime[i].innerHTML = `${cityHour}:${utcMinute < 10 ? '0' + utcMinute : utcMinute} ${cityAmPm}`;
   }
}
function init(){
   getTime();
}

init();
