
// Office Time

var presentTime = new Date();

var utcHour = presentTime.getUTCHours();
var utcMinute = presentTime.getUTCMinutes();

var cityHour = [];
var cityAmPm = [];
var cityHourOffset = [-4, -5, -4, -5, -4, -4, 1, -7, -5, -7, +8, -4, +9];

var officeCard = document.getElementsByClassName('office-card');
var officeTime = document.getElementsByClassName('office-time');
var officeDay = document.getElementsByClassName('time-sign__day');
var officeNight = document.getElementsByClassName('time-sign__night');

for(var i = 0; i < cityHourOffset.length; i++){
   cityHour[i] = utcHour + cityHourOffset[i];

   if (cityHour[i] <= 0) { cityHour[i] += 24;}

   cityHour[i] > 11 ? cityAmPm[i] = "PM" : cityAmPm[i] = "AM";

   if (cityHour[i] >= 6 && cityHour[i] <= 18) { 
      officeCard[i].classList.remove('office-card--night');
      officeDay[i].style.display = 'block';
      officeNight[i].style.display = 'none';
   } 
   else { 
      officeCard[i].classList.add('office-card--night');
      officeDay[i].style.display = 'none';
      officeNight[i].style.display = 'block';
   }
   if (cityHour[i] > 12) { cityHour[i] -= 12; };
   
   officeTime[i].innerHTML = `${cityHour[i]}:${utcMinute < 10 ? '0' + utcMinute : utcMinute} ${cityAmPm[i]}`;
}

// var presentTime = new Date();
// var utcHour = presentTime.getUTCHours();
// var utcMinute = presentTime.getUTCMinutes();

// var officeCard = document.getElementsByClassName('office-card');
// var officeTime = document.getElementsByClassName('office-time');
// var officeDay = document.getElementsByClassName('time-sign__day');
// var officeNight = document.getElementsByClassName('time-sign__night');

// function getDayNight(nation, hour) {
//    console.log(nation, hour);
//    if (hour[nation] > 5 && hour[nation] < 17) { 
//       officeCard[nation].classList.remove('office-card--night');
//       officeDay[nation].style.display = 'block';
//       officeNight[nation].style.display = 'none';
//    } 
//    else { 
//       officeCard[nation].classList.add('office-card--night');
//       officeDay[nation].style.display = 'none';
//       officeNight[nation].style.display = 'block';
//    }

// }

// function getTime() {
//    var cityHour = [];
//    var cityMinute = utcMinute;
//    var cityAmPm = [];
//    var cityHourOffset = [-4, -5, -4, -5, -4, -4, 1, -7, -5, -7, +8, -4, +9];
//    for(var i = 0; i < cityHourOffset.length; i++) {
//       if(cityHour[i] <= 0) cityHour[i] += 24;
//       cityHour[i] > 11 ? cityAmPm[i] = "PM" : cityAmPm[i] = "AM";
//       getDayNight(i, cityHour[i]);
//       if (cityHour[i] > 12) cityHour[i] -= 12;
//       officeTime[i].innerHTML = `${cityHour[i]}:${cityMinute < 10 ? '0' + cityMinute : cityMinute} ${cityAmPm[i]}`;
//    }
// }

// function init() {
//    getTime();
// }
// init();
