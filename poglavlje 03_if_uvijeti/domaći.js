/**
 1) Napraviti dvije varijable name i password
 2) vrijednost za name je admin, za password 12345678
 3) ako je name admin i lozinka 12345678 ispisati: Admin, dobrodošao nazad
 4) ako je name karlo i lozinka 12345678 ispisati: Karlo, dobrodošao nazad
 5) ako nije nesto od ova dva ispisati pogresno ime ili lozinka
 * */

let name = "Admin";
let password = 12345678;

if (name === "Admin" && password === 12345678) {
    console.log("Admin, dobrodošao nazad!")
}

else if (name === "Karlo" && password === 12345678) {
    console.log("Karlo, dobrodošao nazad");
}

else {
    console.log("pogresno ime ili lozinka");
}