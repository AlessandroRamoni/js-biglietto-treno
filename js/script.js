console.log("ciao");

const costoKm = 0.21;

let chilometriTotali = parseInt(
  prompt("Quanti chilometri vuoi percorrere oggi con noi?")
);

let eta = parseInt(prompt("Quanti anni hai?"));

console.log(chilometriTotali, eta);

let totale = costoKm * chilometriTotali;
console.log(totale);

let sconto20;
let sconto40;

if (eta < 18) {
  sconto20 = (totale * 20) / 100;

  console.log(totale - sconto20);
  document.getElementById("result20").innerHTML =
    //`${parseFloat(totale - sconto40)} €`

    parseFloat(totale - sconto20) + "€";
} else if (eta > 65) {
  sconto40 = (totale * 40) / 100;

  console.log(totale - sconto40);
  document.getElementById("result40").innerHTML =
    parseFloat(totale - sconto40) + "€";
} else {
  document.getElementById("result").innerHTML = parseFloat(totale) + "€";
}
