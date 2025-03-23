import musicTools from "./MusicTools.js";

// ------------------------- Get HTML Elements --------------------------
let midiInput = document.getElementById("midiInput");
let midiToFreqButton = document.getElementById("midiToFreq");
let freqResult = document.getElementById("freqResult");

let freqInput = document.getElementById("freqInput");
let freqToMidiButton = document.getElementById("freqToMidi");
let midiResult = document.getElementById("midiResult");

let dbfsInput = document.getElementById("dbfsInput");
let dbfsToLinearButton = document.getElementById("dbfsToLinear");
let linearResult = document.getElementById("linearResult");

let linearInput = document.getElementById("linearInput");
let linearToDbfsButton = document.getElementById("linearToDbfs");
let dbfsResult = document.getElementById("dbfsResult");

// ------------------------- Add Event Listeners --------------------------
midiToFreqButton.addEventListener("click", () => {
  let midiPitch = parseFloat(midiInput.value);
  if (!isNaN(midiPitch)) {
    freqResult.innerText =
      musicTools.midiPitchToFrequency(midiPitch).toFixed(2) + " Hz";
  } else {
    freqResult.innerText = "Invalid Input";
  }
});

freqToMidiButton.addEventListener("click", () => {
  let frequency = parseFloat(freqInput.value);
  if (!isNaN(frequency) && frequency > 0) {
    midiResult.innerText = musicTools
      .frequencyToMidiPitch(frequency)
      .toFixed(2);
  } else {
    midiResult.innerText = "Invalid Input";
  }
});

dbfsToLinearButton.addEventListener("click", () => {
  let dbfs = parseFloat(dbfsInput.value);
  if (!isNaN(dbfs)) {
    linearResult.innerText = musicTools.dbfsToLinearAmplitude(dbfs).toFixed(4);
  } else {
    linearResult.innerText = "Invalid Input";
  }
});

linearToDbfsButton.addEventListener("click", () => {
  let linear = parseFloat(linearInput.value);
  if (!isNaN(linear) && linear > 0) {
    dbfsResult.innerText =
      musicTools.linearAmplitudeTodBFS(linear).toFixed(2) + " dBFS";
  } else {
    dbfsResult.innerText = "Invalid Input";
  }
});
