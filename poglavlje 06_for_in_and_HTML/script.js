let products = ["Kruh", "Mlijeko", "Jogurt"];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

//for (let i = 0; i < products.length; i++) {
// ===
//for (let oneProduct in products) {

for (let oneProduct in products) {
    //console.log(products[oneProduct]);
}

//for in petlju koristimo za nizove

let korpa = [
    {
        name: "Kruh",
        amount: 2,
        price: 100,
    },
    {
        name: "luk",
        amount: 3,
        price: 150,
    },
    {
        name: "Mlijeko",
        amount: 3,
        price: 210,
    }
];

//kako ispisati cijenu prvog proizvoda.
//console.log(korpa[0]);
//ispisuje prvi objekat
//trebam ispisati cijenu zato koristim.price


//Pomoću petlje ispisati sve cijene proizvoda

//Moj način kako sam riješio zadatak.
//for(let prices in korpa) {
//console.log(korpa[0].price);

//Tomin način.
//for(let prices in korpa){
//    console.log(korpa[prices]['price']);
//}

//Novi zadatak
//ako je cijena proizvoda veca od 200, zaustaviti petlju.
for (let prices in korpa) {
    if (korpa[prices]['price'] > 200) {
        break;
    }
    console.log(korpa[prices]['price']);
}



