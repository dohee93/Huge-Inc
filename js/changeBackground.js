var magentaBg = ['bg_1.png', 'bg_2.jpg', 'bg_3.jpeg', 'bg_4.png', 'bg_5.jpg','bg_6.jpg', 'bg_7.png', 'bg_8.jpg', 'bg_9.jpeg'];
var magentaTitles = [
   'Voice Assistants Need Ethics.', 
   'Should Logo Designers Fear the Internet’s Id?', 
   'Balancing Careers in Art and Design.',
   'Greatly simplified to focus on accessible design.',
   'I Invented a Smart Tampon Dispenser',
   'Fighting for Progress.',
   'Good Content Isn’t Enough.',
   'Let\'s get emotional.',
   'Predictions for the Year Ahead'];
var magentaDescs = [
   'It’s the responsibility of designers to craft strong brand personalities with values.', 
   'When a company rebrands, one thing nearly always follows: backlash. But can designers always avoid the criticism? Should they?', 
   'Alison Kudlow is a UX designer by day, a sculptor by night. Here’s how she makes it work.',
   'Her technical expertise launched a billion phone calls, yet now she is routinely thwarted by what many hail as one of the most accessible UIs on the planet.',
   'Because who wants coin slots, broken knobs, and period shame?',
   'How the New York Civil Liberties Union and Huge harnessed the power of retro technology to publicize the limits of arcane legislation.',
   'How to find — and grow — audience in 2018 and beyond.',
   'The opportunity for brands to forge deep relationships with their users has never been greater.',
   'Huge strategists, technologists, UX designers, and creatives weigh in on what’s really relevant in 2019.'];

var magentaNum = Math.floor(Math.random() * magentaBg.length);

var bg = document.getElementById('magenta');
var magentaTitle = document.getElementsByClassName('magenta-title')[0];
var magentaDetail = document.getElementsByClassName('magenta-detail')[0];

bg.style.backgroundImage = 'url(../images/' + magentaBg[magentaNum] + ')';
magentaTitle.innerHTML = magentaTitles[magentaNum];
magentaDetail.innerHTML = magentaDescs[magentaNum];


// 1.
// Voice Assistants Need Ethics.
// It’s the responsibility of designers to craft strong brand personalities with values.
// 2.
// Should Logo Designers Fear the Internet’s Id?
// When a company rebrands, one thing nearly always follows: backlash. But can designers always avoid the criticism? Should they?
// 3.
// Balancing Careers in Art and Design.
// Alison Kudlow is a UX designer by day, a sculptor by night. Here’s how she makes it work.
// 4.
// Greatly simplified to focus on accessible design.
// Her technical expertise launched a billion phone calls, yet now she is routinely thwarted by what many hail as one of the most accessible UIs on the planet.
// 5.
// I Invented a Smart Tampon Dispenser
// Because who wants coin slots, broken knobs, and period shame?
// 6.
// Fighting for Progress.
// How the New York Civil Liberties Union and Huge harnessed the power of retro technology to publicize the limits of arcane legislation.
// 7.
// Good Content Isn’t Enough.
// How to find — and grow — audience in 2018 and beyond.
// 8.
// Let's get emotional.
// The opportunity for brands to forge deep relationships with their users has never been greater.
// 9.
// Predictions for the Year Ahead
// Huge strategists, technologists, UX designers, and creatives weigh in on what’s really relevant in 2019.