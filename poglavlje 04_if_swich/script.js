//Napraviti varijablu ime i dati joj ime po želji
//Napraviti uvijet ako je ime admin ispisati Pozdrav admin
//Ako ime nije admin ispisati niste administrator

let name = "admin";

if (name === "admin") {
    console.log("Pozdrav Admin");
}
else {
    console.log("Niste administrator");
}

//Napraviti varijablu password i dati joj naziv po želji
//Napraviti uvijet ako je password točan ispisati Dobrodošli
//Ako ime nije unijeli ste pogresnu lozinku

let password = 12345678;

if(password === 12345678) {
    console.log("Dobrodošli");
}
else {
    console.log("Pogrešna lozinka");
}


//Kombinaciju ova dva zadatka

if(name === "admin" && password === 12345678) {
    console.log("Dobrodošli Admine")
}

else {
    console.log("Unjeli ste pogrešnu ime ili lozinku");
}

//Napraviti varijablu userType i dati vrijednost admin
//Napraviti uvijet ako je userType admin ili moderator ispisati vi ste administrator
//Ako nije ispisati Vi ste običan korisnik

let userType = "admin";

if (userType === "admin" || userType === "moderator") {
    console.log("Vi ste administrator");
}
else {
    console.log("Vi ste običan korisnik");
}

let allowedTypes = ["admin","moderator"]

//Da li usertype se nalazi u allowedTypes
//Hint Includes

let typeCheck = allowedTypes.includes(userType);
console.log(typeCheck);

if(typeCheck){
    console.log("Vi ste administrator");
}

else {
    console.log("Vi niste administrator");
}

let dayOfWeeks = "nedjelja";

if(dayOfWeeks === "subota"||"nedjelja" ){
    console.log("Weekend")
}

else if(dayOfWeeks === "petak") {
    console.log("Weekend is comming");
}
else {
    console.log("Working Days");
}


let day=8;

switch (true) {
    case day <5:
        console.log("Radni dani");
        break;
}
switch (true) {
    case day ===5:
        console.log("Uskoro vikend");
        break;
}
switch (true) {
    case day >5 && day <=7:
        console.log("Vikend je");
        break;

    default:
        console.log("Nisi unio broj od 1-7");
        break;
}










