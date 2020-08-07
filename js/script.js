var prezzoKilometro = 0.21;

// tasto genera
var genera = document.getElementById("genera");

genera.addEventListener("click",
function() {
  var display = document.getElementById("none");
  display.className = display.classList + " block";
  var nome = document.getElementById("nome").value;
  document.getElementById("nome-inserito").innerHTML = nome;
  var km = document.getElementById("km").value;
  var prezzo = km * prezzoKilometro;
  var fascia = document.getElementById("fascia").value;
  if (fascia == "minorenne") {
    prezzo = prezzo - ((prezzo / 100) * 20);
    document.getElementById("offerta").innerHTML = "Baby";
  } else if (fascia == "over65") {
    prezzo = prezzo - ((prezzo / 100) * 40);
    document.getElementById("offerta").innerHTML = "Silver";
  } else {
    document.getElementById("offerta").innerHTML = "Classic";
  }
  var prezzoFinale = prezzo.toFixed(2);
  document.getElementById("prezzo-finale").innerHTML = prezzoFinale + " &euro;";
  var carrozza = Math.floor((Math.random() * 9) + 1);
  document.getElementById("carrozza").innerHTML = carrozza;
  var cp = Math.floor((Math.random() * 9998) + 90001);
  document.getElementById("cp").innerHTML = "9" + cp;
}
);

// tasto annulla
// var annulla = document.getElementById("annulla");
//
// annulla.addEventListener("click",
// function() {
// document.getElementById('')
// }
// );
