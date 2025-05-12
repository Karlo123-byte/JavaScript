//Vjeđba 1:

let name = "Admin";

name = name.toLowerCase();

if(name === "admin") {
    console.log("Pozdrav Admine");
}
else {
    console.log("Niste administrator");
}

//Greska u ovom kodu je što Admin i admin nisu isti.
//napisani u varijabli name i u uvijetu if zato ce svaki put ispisati.
//Niste administrator

//Ako korisniku ime započinje sa slovom "a"
//ispisati ime započinje sa samloglasnikom

/**
let ime = "Admin";
let firstCaracter = 1;
let result = ime.slice(0,1);
result = result.toLowerCase();

if (result === "a"){
    console.log("Tvoje ime započinje samoglasnikom a ");
}

else {
    console.log("Tvoje ime ne započinje samoglasnikom a ","Ali započinje slovom",result);
}
*/

//Ovaj zadatak sam riješio na svoj način bez gledanja u video
//Malo je duži zadatak.

let ime = "Admin";
ime = ime.toLowerCase();
if(ime[0] === "a") {
    console.log("Tvoje ime započinje samoglasnikom a");
}

//Uvod u loops

