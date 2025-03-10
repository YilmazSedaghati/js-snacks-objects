// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
// alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a
// benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

// Input logico: creare tramite array i vari oggetti: infine creare delle variabili vuote e riempirle con gli oggetti con determinate caratteristiche

const cars = [
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "Ford", modello: "Fiesta", alimentazione: "benzina" },
    { marca: "Bmw", modello: "Serie 5", alimentazione: "diesel" },
    { marca: "Audi", modello: "A6", alimentazione: "diesel" },
    { marca: "Dacia", modello: "Duster", alimentazione: "gpl" },
    { marca: "Reanult", modello: "Clio", alimentazione: "gpl" },
    { marca: "Seat", modello: "Leon", alimentazione: "metano" },
    { marca: "Skoda", modello: "Octavia", alimentazione: "metano" },
    { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
    { marca: "BYD", modello: "Atto III", alimentazione: "elettrico" },
];
console.log(cars);

const benzinaCar = [];
const dieselCar = [];
const otherCar = [];

for (let i = 0; i < cars.length; i++) {
    const currentCar = cars[i];
    const motorCar = currentCar.alimentazione;
    
    if ( motorCar === "benzina" ) {
        benzinaCar.push(currentCar);
    } else if (motorCar === "diesel" ) {
        dieselCar.push(currentCar);    
    }    else {
        otherCar.push(currentCar);
    }
}

console.log("Le auto a benzina sono:", benzinaCar);
console.log("Le auto a diesel sono:", dieselCar);
//console.log(`Le altre auto hanno diverse tipologie di alimentazione ${otherCar}`); <=== scritto così stampa la lista con object
console.log("Le auto con altri tipi di alimentazione sono", otherCar);


