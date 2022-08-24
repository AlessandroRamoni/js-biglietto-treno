console.log("ciao");

const costoKm = 0.21;

let chilometriTotali = prompt(
  "Quanti chilometri vuoi percorrere oggi con noi?"
);
let eta = prompt("Quanti anni hai?");

console.log(chilometriTotali, eta);

let totale = costoKm * chilometriTotali;
console.log(totale);

let sconto20;
let sconto40;

//if (!isNaN(chilometriTotali) && !isNaN(eta){}

if (eta < 18) {
  sconto20 = (totale * 20) / 100;

  console.log(totale - sconto20);
  document.getElementById("result20").innerHTML =
    //`${parseFloat(totale - sconto40)} €`

    (totale - sconto20).toFixed(2) + "€";
} else if (eta > 65) {
  sconto40 = (totale * 40) / 100;

  console.log(totale - sconto40);
  document.getElementById("result40").innerHTML =
    (totale - sconto40).toFixed(2) + "€";
} else {
  document.getElementById("result").innerHTML = totale.toFixed(2) + "€";
}

var d = new Date();
console.log(d);

d.getHours();
console.log(d.getHours());

d.getMilliseconds();
console.log(d.getMilliseconds());

d.getFullYear();
console.log(d.getFullYear());
