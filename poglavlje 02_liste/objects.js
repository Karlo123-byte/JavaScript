personalID = {
    name: "Karlo",
    lastName: "Jozić",
    dateOfBirth: "2004-15-02",
};

//dodati novi element u objekt koji se zove height

personalID.Height = 181.5;


personalID.hobbies = ["Programming","Chess","learning","JavaScript"];


//name has gone programming nova varijabla sentance
let sentence = (personalID.name+" has gone "+personalID.hobbies[0]);
console.log(sentence);

/**
 * Napraviti objekat pod nazivom shop
 * Unutar objekta Shop napraviti elemente: name,prozvode(lista),openingHourse,ClosingHourse
 */
//--------------------------------------------------------
shop = {
    name: "Trgovina.doo",
    products: ["Kruh","Mlijeko","Jogurt","Noviine"],
    openingHourse: 8,
    closedHourse: 23,
}

console.log(shop);
//---------------------------------------------------------