alert("Dobrodosli u sajt");

let name = prompt("Upišite svoje ime:").toLowerCase();

let names = ["admin", "administrador","karlo"];

//Da li je ime koje je korisnik unio u prompt u nizu names?
//Ako se nalazi ispisati preko alerta ("Dobrodosao Aministratore");
//Ako nije ispisati nemate pristup sajtu

if(names.includes(name)) {
    alert("Dobrodosao Admnistratore");
} else {
    alert("nemate pristup sajtu");
}

//Evo vjezbe

let grade = Number(prompt("Unesite broj bodova na prošlom ispitu: "));

if(grade >= 85) {
    alert("Vaša ocjena iz ispita je 5");
}
else if(grade >=70 && grade <85) {
    alert("Vaša ocjena iz ispita je 4")
}
else if(grade >= 60 && grade <70) {
    alert("Vaša ocjena iz ispita je 3")
}
else if(grade >= 50 && grade <60){
    alert("Vaša ocjena iz ispita je 2");
}
else if(grade < 50){
    alert("Niste položili ispit");
}
else {
    alert("Niste unjeli ispravan broj bodova");
}


