// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// Crea un nuovo array con la lista dei mammiferi.

const animals = [
    { nome: "Leone", famiglia: "Felidae", classe: "Mammiferi" },
    { nome: "Aquila reale", famiglia: "Accipitridae", classe: "Uccelli" },
    { nome: "Squalo bianco", famiglia: "Lamnidae", classe: "Pesci" },
    { nome: "Cobra reale", famiglia: "Elapidae", classe: "Rettili" },
    { nome: "Rana verde", famiglia: "Ranidae", classe: "Anfibi" },
    { nome: "Orso polare", famiglia: "Ursidae", classe: "Mammiferi" },
    { nome: "Pinguino imperatore", famiglia: "Spheniscidae", classe: "Uccelli" },
    { nome: "Medusa luminosa", famiglia: "Pelagiidae", classe: "Cnidari" },
    { nome: "Polpo comune", famiglia: "Octopodidae", classe: "Molluschi" },
    { nome: "Coccodrillo del Nilo", famiglia: "Crocodylidae", classe: "Rettili" }
];

console.log(animals);


const mammiferi = animals.filter(currentAnimal => currentAnimal.classe === "Mammiferi");
console.log("I seguenti appartengono alla classe dei mammiferi", mammiferi);
