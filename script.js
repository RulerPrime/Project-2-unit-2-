import musicTools from "./MusicTools.js";

document.getElementById("midiToFreq").addEventListener("click", () => {
  const midiPitch = parseFloat(document.getElementById("midiInput").value);
  const resultElement = document.getElementById("freqResult");
  if (!isNaN(midiPitch)) {
    resultElement.textContent =
      musicTools.midiPitchToFrequency(midiPitch).toFixed(2) + " Hz";
  } else {
    resultElement.textContent = "Invalid Input";
  }
});

document.getElementById("freqToMidi").addEventListener("click", () => {
  const frequency = parseFloat(document.getElementById("freqInput").value);
  const resultElement = document.getElementById("midiResult");
  if (!isNaN(frequency) && frequency > 0) {
    resultElement.textContent = musicTools
      .frequencyToMidiPitch(frequency)
      .toFixed(2);
  } else {
    resultElement.textContent = "Invalid Input";
  }
});

document.getElementById("dbfsToLinear").addEventListener("click", () => {
  const dbfs = parseFloat(document.getElementById("dbfsInput").value);
  const resultElement = document.getElementById("linearResult");
  if (!isNaN(dbfs)) {
    resultElement.textContent = musicTools
      .dbfsToLinearAmplitude(dbfs)
      .toFixed(4);
  } else {
    resultElement.textContent = "Invalid Input";
  }
});

document.getElementById("linearToDbfs").addEventListener("click", () => {
  const linear = parseFloat(document.getElementById("linearInput").value);
  const resultElement = document.getElementById("dbfsResult");
  if (!isNaN(linear) && linear > 0) {
    resultElement.textContent =
      musicTools.linearAmplitudeTodBFS(linear).toFixed(2) + " dBFS";
  } else {
    resultElement.textContent = "Invalid Input";
  }
});
