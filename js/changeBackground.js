var magentaBg = ['bg_1.png', 'bg_2.jpg', 'bg_3.jpeg', 'bg_4.png'];
var magentaTitles = [
   'Voice Assistants Need Ethics.', 
   'Should Logo Designers Fear the Internet’s Id?', 
   'Balancing Careers in Art and Design.',
   'Greatly simplified to focus on accessible design.'];
var magentaDescs = [
   'It’s the responsibility of designers to craft strong brand personalities with values.', 
   'When a company rebrands, one thing nearly always follows: backlash. But can designers always avoid the criticism? Should they?', 
   'Alison Kudlow is a UX designer by day, a sculptor by night. Here’s how she makes it work.',
   'Her technical expertise launched a billion phone calls, yet now she is routinely thwarted by what many hail as one of the most accessible UIs on the planet.'];

var magentaNum = Math.floor(Math.random() * magentaBg.length);

var bg = document.getElementById('magenta');
var magentaTitle = document.getElementsByClassName('magenta-title')[0];
var magentaDetail = document.getElementsByClassName('magenta-detail')[0];

bg.style.backgroundImage = 'url(../images/' + magentaBg[magentaNum] + ')';
magentaTitle.innerHTML = magentaTitles[magentaNum];
magentaDetail.innerHTML = magentaDescs[magentaNum];



// Voice Assistants Need Ethics.
// It’s the responsibility of designers to craft strong brand personalities with values.

// Should Logo Designers Fear the Internet’s Id?
// When a company rebrands, one thing nearly always follows: backlash. But can designers always avoid the criticism? Should they?

// Balancing Careers in Art and Design.
// Alison Kudlow is a UX designer by day, a sculptor by night. Here’s how she makes it work.

// Greatly simplified to focus on accessible design.
// Her technical expertise launched a billion phone calls, yet now she is routinely thwarted by what many hail as one of the most accessible UIs on the planet.