console.log ("v60");
console.log("Kyoto drip ");
console.log("Smphone");
console.log("Presna francesa");

// lista de metodos se llama arrays
const metodos = ["v60", "Kyoto drip", "Siphone", "prensa francesa"];

// intrucción que recorre la lista y que hace algo con cada elemento

for (const metodo of metodos){
    console.log(metodo);
}

console.log(" fin del programa")

// ejemplo de bucle de reservas en un dia 

const reservasDelDía =[2, 1, 2, 1, 2];
let totalTazas = 0;

for (const cantidad of reservasDelDía){
    totalTazas =totalTazas+ cantidad;
}
console.log(totalTazas)

