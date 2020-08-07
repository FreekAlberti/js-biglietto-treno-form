var prezzoKilometro = 0.21;

// tasto genera
var genera = document.getElementById("genera");

genera.addEventListener("click",
function() {
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
  document.getElementById("prezzo-finale").innerHTML = prezzoFinale;
}
);

// tasto annulla
// var annulla = document.getElementById("annulla");
//
// annulla.addEventListener("click",
// function() {
//
// }
// );
