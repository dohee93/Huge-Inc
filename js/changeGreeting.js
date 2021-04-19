var greetings = ['Hello.', 'Hola.','Buenas.', 'Ola.', 'Ei.', "E'yo.", 'Ello.', 'Aye.'];
var greetNum = greetings.length;
var currentIdx = 0;
var heroTitle = document.getElementById('hero-title');

function changeGreeting() {
   if(currentIdx==greetNum) currentIdx = 0;
   heroTitle.innerHTML = greetings[currentIdx];
   currentIdx++;
}

function init() {
   setInterval(changeGreeting, 1000);
}
init();
