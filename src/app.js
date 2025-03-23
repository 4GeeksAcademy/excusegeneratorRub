import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  let who = ['Batman ', 'Perry the Platypus ', 'My cat ', 'Ironman '];

  let action = ['bit ', 'ate ', 'crushed ', 'stole '];

  let what = ['my wallet ', 'my phone ', 'my car ', 'my laptop '];

  let when = ['before work.', 'while I was exercising.', 'during my lunch.', 'while I was doing my homework.'];

  function alltogether () {

    function whogenerator () {
        return who[Math.floor(Math.random() * who.length)];
      }
    
      function actiongenerator () {
        return action[Math.floor(Math.random() * action.length)];
      }
      function whatgenerator () {
        return what[Math.floor(Math.random() * what.length)];
      }
    
      function whengenerator () {
        return when[Math.floor(Math.random() * when.length)];
      }
    
      let concat = whogenerator().concat(actiongenerator(), whatgenerator(), whengenerator())
      return concat
    }

  window.onload = function() {
    document.getElementById("excuse").innerText = alltogether();
  }