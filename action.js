function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


function replacepage() {
  window.location = "https://mimibirthday.ga/wishes.html"
}



function myFunction1() {
  var video = document.getElementById("myVideo");
  var btn = document.getElementById("myBtn");
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
