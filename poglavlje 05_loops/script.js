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

let ime = "Email";
ime = ime.toLowerCase();
if(ime[0] === "a") {
    console.log("Tvoje ime započinje samoglasnikom a");
}
else {
    console.log("Tvoje ime ne započinje sa samoglasnikom a");
}

//Tomin način dosta lakši
if (ime[0] === "a") {
    console.log("Tvoje ime započinje sa samoglasnikom a");
}
else {
    console.log("Tvoje ime ne započinje sa samoglasnikom a");
}

//Novi zadatak provjeriti jel prvo slovo iz samoglasnika a,e,i,o,u
//Zadatak sam riješio prije gledanja i radi!

if (ime[0] === "a" || "e" || "i" || "o" || "u") {
    me = ime.toLowerCase();
    console.log("Tvoje ime započinje sa samoglasnikom",ime[0]);
}
else {
    console.log("Tvoje ime ne započinje sa samoglasnikom");
}

let samoglasnici = ["a", "e", "i", "o", "u"];
ime = ime.toLowerCase();
if (samoglasnici.includes(name[0])) {
console.log("Tvoje ime započinje sa samoglasnikom",ime[0]);
}
else{
    console.log("Tvoje ime ne započinje sa samoglasnikom");
}

//Prvi način je moj i izgleda dosta kraći ali recimo kada bi smo includali neku listu
//koja ima recimo 100 imena mislim da je Tomin način učinkovitiji

let number = "2";

if(number === 2) {
    console.log("broj je 2");
}
else {
    console.log("broj nije 2");
}

//Pitanje je bilo zasto ispisuje broj je 2 za == a za === ispisuje broj nije 2
//Zato sto ako usporedjujemo sa == njega zanima brojevi sa kojima usporedjujemo
//=== nije brojeva provjerava jesu li isti type ako nije odma ce ispisati da to nije broj 2

//-------------------------------------------------------------------------------------------------

//Prvi argument od čega kreće
//Drugi argument do kada će petlja trajati.
//Treći argument sluzi da mu dajemo zapovijed ako je uvijet ispunjen sto ce raditi.



//Domaći ako automobil počinje sa slovom a nemoj ga ispisati

let cars = [
    "Toyota", "Honda", "Ford", "Chevrolet", "BMW",
    "Mercedes-Benz", "Audi", "Volkswagen", "Hyundai", "Kia",
    "Nissan", "Mazda", "Subaru", "Lexus", "Jeep",
    "Dodge", "Ram", "GMC", "Cadillac", "Buick",
    "Chrysler", "Infiniti", "Acura", "Lincoln", "Volvo",
    "Porsche", "Jaguar", "Land Rover", "Mini", "Fiat",
    "Alfa Romeo", "Peugeot", "Renault", "Citroën", "Skoda",
    "Seat", "Tesla", "Mitsubishi", "Suzuki", "Genesis",
    "Saab", "Isuzu", "Hummer", "Pontiac", "Oldsmobile",
    "Lancia", "Opel", "Daewoo", "Bentley", "Ferrari"
];

for (let i = 0; i < cars.length; i++) {

let firstLetter = cars[i][0].toLowerCase();

if(firstLetter === "a") {
    continue;
}
    console.log(cars[i]);
}

//pogledati do sljedeceg predavanja
//for in
//break;
//Rad sa HTML








