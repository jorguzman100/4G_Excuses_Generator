/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  // Event listeners
  document.getElementById("excBtn").addEventListener("click", displayExcuse);

  function displayExcuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    // Randoms
    let rndWho = Math.floor(Math.random() * 4);
    let rndAction = Math.floor(Math.random() * 4);
    let rndWhat = Math.floor(Math.random() * 3);
    let rndWhen = Math.floor(Math.random() * 5);
    // Generate the excuse
    let excuse = `${who[rndWho]} ${action[rndAction]} ${what[rndWhat]} ${when[rndWhen]}`;
    // Print to the DOM
    document.querySelector("#excuse").innerHTML = excuse;
  }
};
