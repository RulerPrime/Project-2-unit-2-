import musicTools from "./MusicTools.js";

const myHTMLpage = document;

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
const mySpecialbutton = document.getElementById("theButton");
//access the HTML page eith the document object, uses the .getElementById()
//method to return the html element that has the id "result"
//assigns it to a new const call mySpecialButton
//grabs the button thing we made and stores in the const so we can do stuff
const resultText = document.getElementById("result");
/**
helloFunction updates the inner text scale inside of resultText to be a new random number 
*/
const helloFunction = function () {
  resultText.innerText = `${Math.random()}`;
};
//use the .addEventListener()to call the helloFunction everytime we "click" the mySpecialButton.

mySpecialbutton.addEventListener("click", helloFunction);

// document.getElementById("freqToMidi").addEventListener("click", () => {
//   const frequency = parseFloat(document.getElementById("freqInput").value);
//   const resultElement = document.getElementById("midiResult");
//   if (!isNaN(frequency) && frequency > 0) {
//     resultElement.textContent = musicTools
//       .frequencyToMidiPitch(frequency)
//       .toFixed(2);
//   } else {
//     resultElement.textContent = "Invalid Input";
//   }
// });

// document.getElementById("dbfsToLinear").addEventListener("click", () => {
//   const dbfs = parseFloat(document.getElementById("dbfsInput").value);
//   const resultElement = document.getElementById("linearResult");
//   if (!isNaN(dbfs)) {
//     resultElement.textContent = musicTools
//       .dbfsToLinearAmplitude(dbfs)
//       .toFixed(4);
//   } else {
//     resultElement.textContent = "Invalid Input";
//   }
// });

// document.getElementById("linearToDbfs").addEventListener("click", () => {
//   const linear = parseFloat(document.getElementById("linearInput").value);
//   const resultElement = document.getElementById("dbfsResult");
//   if (!isNaN(linear) && linear > 0) {
//     resultElement.textContent =
//       musicTools.linearAmplitudeTodBFS(linear).toFixed(2) + " dBFS";
//   } else {
//     resultElement.textContent = "Invalid Input";
//   }
// });
