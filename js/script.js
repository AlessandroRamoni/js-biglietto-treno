console.log("ciao");

const km = 0.21;

let question1 = parseInt(
  prompt("Quanti chilometri vuoi percorrere oggi con noi?")
);

let question2 = parseInt(prompt("Quanti anni hai?"));

console.log(question1, question2);

let totale = km * question1;
console.log(totale);

let sconto20;
let sconto40;

if (question2 < 18) {
  sconto20 = (totale * 20) / 100;

  console.log(totale - sconto20);
}

if (question2 > 65) {
  sconto40 = (totale * 40) / 100;

  console.log(totale - sconto40);
}
