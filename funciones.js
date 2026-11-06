function calcularprecio (precioUnitario, cantidad){
    const total =precioUnitario * cantidad;
    return total;
}
console.log (calcularprecio (5, 2));
console.log (calcularprecio (3, 4));
console.log (calcularprecio (7, 1));

//funciones que deciden 

function puedeReservar (cantidad ){
    if (cantidad <=2){
        return true;
        
    }else {
        return false;
    }
}
if (puedeReservar(2)) {
    console.log( " Reserva confirmada ");
} else {
    console.log (" lo siento, Maximo 2 tazas por persona yaper");
}
