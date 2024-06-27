console.log("Welcome to our music player...");
var currentSong = songs[0];
var currentTime = 0;

// Adding eventlistner to the mediaplayer logo..
let logo = document.body.querySelector(".Logo");
logo.addEventListener("click", () => {
  alert("Redirecting you to our website...");
  window.location.href = "http://127.0.0.1:3000/MediaPlayer.html";
});

// These are the song details..
let songs = [
  { songName: "Warriyo - Mortals [NCS Release]", filePath: "Songs/1.mp3" },
  { songName: "Cielo - Huma-Huma", filePath: "Songs/2.mp3" },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "Songs/3.mp3",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "Songs/4.mp3",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "Songs/5.mp3",
  },
  { songName: "Rabba - Salam-e-Ishq", filePath: "Songs/6.mp3" },
  { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "Songs/7.mp3" },
  { songName: "Bhula Dena - Salam-e-Ishq", filePath: "Songs/8.mp3" },
  { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "Songs/9.mp3" },
  { songName: "Na Jaana - Salam-e-Ishq", filePath: "Songs/10.mp3" },
];

// getting the songs in the division of songplace...
async function getSongs() {
  try {
    for (let i = 0; i < songs.length; i++) {
      const elem_ent = songs[i];
      let Song_Place = document.querySelector(".Left_BottomBox").querySelectorAll(".Songs")[i];
      Song_Place.innerHTML = elem_ent['songName'];
      Song_Place.style.fontSize = '13px'
    }
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
}

getSongs();

// Define audioElement globally
let audioElement;

// funtion for playing the songs..
function PlaySong(number) {
  if (number >= 1 && number <= songs.length) {
    audioElement = new Audio(songs[number - 1]['filePath']);
    audioElement.play();
  } else {
    console.log("Please enter a valid number");
  }
}

// adding eventlisteners to Play and Pause button...
let video = document.getElementById('Wallpaper');
let Play = document.getElementById("Another");
let Pause = document.getElementById("Pause");
Pause.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    console.log("Audio is already PAUSED...");
  } else {
    audioElement.pause();
    Play.style.opacity = "0.2";
  }
});

Play.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    PlaySong(1);
    video.autoplay = true;
    video.loop = true;
    Pause.style.opacity = "0.2";
  } else {
    console.log("Audio is already playing...");
  }
});


// adding eventlistener to BackMove button..
let BackMove = document.getElementById('BackMove');
BackMove.addEventListener('click', () => {
  let currentIndex = songs.findIndex(song => song === currentSong);
  if (currentIndex === 0) {
    PlaySong(songs.length);
    currentSong = songs[songs.length - 1];
    console.log("Last song is now getting played...")
  } else {
    PlaySong(currentIndex);
    currentSong = songs[currentIndex - 1];
    console.log("Previous song is getting Played...")
  }
});

// adding eventlisteners to FrontMove button...
let FrontMove = document.getElementById('FrontMove');
FrontMove.addEventListener('click', () => {
  let currentIndex = songs.findIndex(song => song === currentSong);
  if (currentIndex === songs.length - 1) {
    PlaySong(1);
    currentSong = songs[0];
    console.log("First song is now getting played...")
  } else {
    PlaySong(currentIndex + 2);
    currentSong = songs[currentIndex + 1];
    console.log("Next song is now getting played...")
  }
});

//adding event listeners to audioElement..
audioElement.addEventListener('timeupdate', () => {
  // Update Seekbar
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  ProgressBar.value = progress;
});

// adding eventlistener to progressbar...
let ProgressBar = document.querySelector('.ProgressBar');
ProgressBar.addEventListener('input', () => {
  audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
});
