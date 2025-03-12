import MusicTools from "./MusicTools.js";

document.getElementById("midiToFreq").addEventListener("click", () => {
  const midiPitch = parseFloat(document.getElementById("midiInput").value);
  if (!isNaN(midiPitch)) {
    document.getElementById("freqResult").textContent =
      MusicTools.midiPitchToFrequency(midiPitch).toFixed(2);
  }
});

document
  .getElementById("frequencyToMidiPitch")
  .addEventListener("click", () => {
    const frequency = parseFloat(document.getElementById("freqInput").value);
    if (!isNaN(frequency)) {
      document.getElementById("midiResult").textContent =
        MusicTools.frequencyToMidiPitch(frequency).toFixed(2);
    }
  });

document.getElementById("dbfsToLinear").addEventListener("click", () => {
  const dbfs = parseFloat(document.getElementById("dbfsInput").value);
  if (!isNaN(dbfs)) {
    document.getElementById("linearResult").textContent =
      MusicTools.dbfsToLinearAmplitude(dbfs).toFixed(4);
  }
});

document.getElementById("linearToDbfs").addEventListener("click", () => {
  const linear = parseFloat(document.getElementById("linearInput").value);
  if (!isNaN(linear) && linear > 0) {
    document.getElementById("dbfsResult").textContent =
      MusicTools.linearAmplitudeTodBFS(linear).toFixed(2);
  }
});
