// import prompts
import { prompts } from "./prompts.js";

// buttons
const promptBtn = document.getElementById("newPromptBtn");
const lightModeBtn = document.getElementById("lightModeBtn");
const backgroundBtn = document.getElementById("changeBg");
const copyBtn = document.getElementById("copyBtn");
const musicBtn = document.getElementById("musicBtn");
const ambientBtn = document.getElementById("ambientBtn");

// audio elements
const ambientPlayer = document.getElementById("ambientAudio");
const musicPlayer = document.getElementById("musicAudio");

// text elements
const textarea = document.getElementById("shoutBoxTxt");

// changing the background on refresh
const backgroundVids = [
  "videos/background.flowers.mp4",
  "videos/background.vase.mp4",
  "videos/background.tea.mp4",
  "videos/background.swayingLeaves.mp4",
  "videos/background.sunset.mp4",
  "videos/background.sea.mp4",
  "videos/background.purpleFlowers.mp4",
  "videos/background.nightThunder.mp4",
  "videos/background.hangingFlowers.mp4",
  "videos/background.flowers.mp4",
  "videos/background.fireplaceStones.mp4",
  "videos/background.darkRain.mp4",
  "videos/background.bookMoving.mp4",
  "videos/background.book.mp4",
  "videos/background.blueDroplets.mp4",
  "videos/background.blackWater.mp4",
  "videos/background.dog.mp4",
  "videos/background.desert.mp4",
  "videos/background.flame.mp4",
  "videos/background.reeds.mp4",
  "videos/background.window.mp4",
  "videos/background.sun.mp4",
  "videos/background.bonfire.mp4",
  "videos/background.cafe.mp4",
  "videos/background.windmill.mp4",
  "videos/background.cherryBlossoms.mp4",
];

//changing the music when a button is clicked
const musicSources = [
  "music/music.clavier-calm1.mp3",
  "music/music.clavier-sad.mp3",
  "music/music.FASSOUNDS-lofi.mp3",
  "music/music.flybirdaudio.mp3",
  "music/music.folkacoustic.mp3",
];

//changing the rain sound effect when a button is clicked
const ambientSources = [
  "ambientSounds/ambient.rain1.mp3",
  "ambientSounds/ambient.rain2.mp3",
  "ambientSounds/ambient.rainRoof.mp3",
  "ambientSounds/ambient.garden.mp3",
  "ambientSounds/ambient.grass.mp3",
  "ambientSounds/ambient.starbucks.mp3",
  "ambientSounds/ambient.fireplace.mp3",
  "ambientSounds/ambient.waves.mp3",
  "ambientSounds/ambient.gentleWaves.mp3",
  "ambientSounds/ambient.river.mp3",
  "ambientSounds/ambient.birds.mp3",
  "ambientSounds/ambient.sea.mp3",
];

// display only month and day
let date = new Date();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22nd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31st",
];

// generate a random number
function randomNumber(listItems) {
  let randomNumber = Math.floor(Math.random() * listItems.length);
  return randomNumber;
}

// function to generate a random prompt
function newPrompt() {
  let i = randomNumber(prompts);
  document.getElementById("journalPrompt").innerHTML = prompts[i];
}

// function that changes the video background on reload
function newBackground() {
  let i = randomNumber(backgroundVids);
  document.getElementById("backgroundVideo").src = backgroundVids[i];
  console.log(backgroundVids[i]);
}

// function that plays a random song
function newMusic() {
  let i = randomNumber(musicSources);
  musicPlayer.src = musicSources[i];
  musicPlayer.play();
  console.log(musicSources[i]);
}

// function that plays a random ambient sound
function newAmbient() {
  let i = randomNumber(ambientSources);
  ambientPlayer.src = ambientSources[i];
  ambientPlayer.play();
  console.log(ambientSources[i]);
}

function formatDay(date) {
  let month = date.getMonth();
  let monthName = months[month];
  let day = date.getDate() - 1;
  let dayNum = days[day];

  return `${monthName} ${dayNum}`;
}

// display only hours:minutes and am/pm
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let dayOrNight = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  minutes = addZero(minutes);

  return `${hours}:${minutes} ${dayOrNight}`;
}
// add appropriate zeroes to time
function addZero(time) {
  time = time.toString();
  return time.length < 2 ? "0" + time : time;
}

//event listeners
promptBtn.addEventListener("click", newPrompt);
backgroundBtn.addEventListener("click", newBackground);
copyBtn.addEventListener("click", function () {
  textarea.select();
  document.execCommand("copy");
});

lightModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  document.footer.classList.toggle("light-mode");
});

musicBtn.addEventListener("click", function () {
  newMusic();
});

ambientBtn.addEventListener("click", function () {
  newAmbient();
});

document.getElementById("dateTxt").innerHTML = formatDay(date);
document.getElementById("timeTxt").innerHTML = formatTime(date);
newBackground(); // run once a day
