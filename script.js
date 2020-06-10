const container = document.querySelector('.container');
const text = document.querySelector('.text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerHTML = 'Breath In';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breath Out';
      container.className = 'container shrink';
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);

// functions for play / stop music, and display btn text
function playStopMusic() {
  var player = document.getElementById('player');

  player.paused == true ? toggle(0) : toggle(1);
}

function toggle(state) {
  var player = document.getElementById('player');
  var btnText = document.getElementById('btn-audioPlay');
  var src = '/audio/relaxsound.mp3';

  switch (state) {
    case 0:
      player.src = src;
      player.load();
      player.play();
      btnText.innerHTML = 'Pause Music';
      btnText.className = 'btn btn-pause';
      player_state = 1;
      break;
    case 1:
      player.pause();
      player.currentTime = 0;
      player.src = '';
      btnText.innerHTML = 'Play Music';
      btnText.className = 'btn btn-play';
      player_state = 0;
      break;
  }
}

// show mobile nav
function openSideMenu() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function openMenu() {
  var menuClassName = document.getElementById('menu-links').className;
  var menu = document.getElementById('menu-links');

  if (menuClassName.includes('dropdown')) {
    closeMenu();
  } else {
    menu.className = 'navbar-nav-dropdown';
  }
}

function closeMenu() {
  var menu = document.getElementById('menu-links');
  menu.className = 'navbar-nav';
}
