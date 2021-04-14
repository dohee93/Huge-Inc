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