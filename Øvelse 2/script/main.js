window.onload = function () {
  // velger h1-elementet
  const overskrift = document.querySelector("h1");
  overskrift.textContent = "Eksempel på rødlisteart";

  // legger til en "click" event listener
  //   overskrift.addEventListener("click", function () {
  //     alert("Au");
  //   });

  let antall = 0;

  overskrift.addEventListener("click", function () {
    antall = antall + 1;
    alert("Au! Du har trykket meg " + antall + " ganger");
  });

  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    alert(
      "Dette er et nettsted som handler om ærfugler, og det er laget av Siri"
    );
  });

  // svar til øvelse 2, påbegynt 15. august 2023
};
