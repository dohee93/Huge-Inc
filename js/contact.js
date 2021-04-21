// Talk Form

function talkInputFocus(target) {
   document.getElementsByClassName('talk-eyebrow')[target].style.display = "block";
   document.getElementsByClassName('input-label')[target].style.display = "none";
   document.getElementsByClassName('input')[target].style.borderColor = "#3a97f5";
   document.getElementsByClassName('talk-eyebrow')[target].style.color = "#3a97f5";
}
function talkInputBlur(target) {
   if(document.getElementsByClassName('input')[target].value == "") {
      document.getElementsByClassName('talk-eyebrow')[target].style.display = "none";
      document.getElementsByClassName('input-label')[target].style.display = "block";
      document.getElementsByClassName('input-field-message')[target].style.display = "block";
      document.getElementsByClassName('input')[target].style.borderColor = "#EA178C";
   } else {
      document.getElementsByClassName('talk-eyebrow')[target].style.color = "black";
      document.getElementsByClassName('input-field-message')[target].style.display = "none";
      document.getElementsByClassName('input')[target].style.borderColor = "black";
   }
}

function talkSend() {
   document.getElementsByClassName('talk-headline')[0].style.maxWidth = "100%";
   document.getElementsByClassName('talk-headline')[0].innerHTML = "Thanks for reaching out! We'll get back to youo as soon as possible.";
   document.getElementById('talk-items').style.display = "none";
}

// Menu Button hover 시 border 생성
var LogoBtn = document.getElementById('header-logo');
var frameBox = document.getElementsByClassName('framebox')[0];
var hLogo = document.getElementsByClassName('h-logo')[0];
var open = false;
var svgH = document.querySelector('.h-logo__svg');
var svgHuge = document.querySelector('.huge-logo__svg');
var mainContent = document.getElementsByTagName('main')[0];
var gnb = document.getElementsByClassName('gnb-wrapper')[0];
var foot = document.getElementsByTagName('footer')[0];
var didScroll;
var lastScrollTop = 0;
var delta = 5;
window.onscroll = function(e) {
   didScroll = true;
};
//0.25초마다 스크롤 여부 체크, hasScrolled() 함수 호출
setInterval(function(){
   if(didScroll){
      hasScrolled();
      didScroll = false;
   }
}, 250);

function hasScrolled() {
   var nowScrollTop = window.pageYOffset;
   var pageH = window.pageYOffset;
   if(Math.abs(lastScrollTop - nowScrollTop) <= delta) {
      return;
   }
   if(nowScrollTop > lastScrollTop) {
      LogoBtn.style.top = '-74px';
   } else {
      LogoBtn.style.top = '50px';
   } 
   lastScrollTop = nowScrollTop;
}

// Menu Button Click 시 Drop Menu 생성
LogoBtn.addEventListener('click', function(){
   if(!open){
      hLogo.style.backgroundColor = '#F4F4F4';
      svgH.style.display = 'none';
      svgHuge.style.display = 'block';
      mainContent.classList.add('content-vertical-fix');
      foot.classList.add('content-vertical-fix');
      frameBox.style.borderBottom = '0px solid #F4F4F4';
      gnb.style.height = '440px';
      gnb.style.display = 'block';
      open = true;
   } else {
      hLogo.style.backgroundColor = '#000';
      svgH.style.display = 'block';
      svgH.style.fill = '#fff';

      svgHuge.style.display = 'none';
      mainContent.classList.remove('content-vertical-fix');
      foot.classList.remove('content-vertical-fix');
      gnb.style.height = '0';
      gnb.style.display = 'none';
      open = false;
   }
});

LogoBtn.addEventListener('mouseover', function(){
   if(!open) {
      frameBox.style.borderTop = '85px solid #F4F4F4';
      frameBox.style.borderBottom = '85px solid #F4F4F4';
      frameBox.style.borderRight = '50px solid #F4F4F4';
      frameBox.style.borderLeft = '50px solid #F4F4F4';
   }
});
LogoBtn.addEventListener('mouseout', function(){
   if(!open) {
      frameBox.style.borderTop = '0px solid #F4F4F4';
      frameBox.style.borderBottom = '0px solid #F4F4F4';
      frameBox.style.borderRight = '0px solid #F4F4F4';
      frameBox.style.borderLeft = '0px solid #F4F4F4';
   }
});
