// datos de la condición
const cupoCata = 8;
const inscritos = 8;

// condicion de cata abierta o llena 
// si el numero de cupos es mayor que el nunero de inscritos devuelve "Hay cupos, abrir reserva"
//  si no devuelve "cata llena, ofrecer lista de epserar "

if (cupoCata > inscritos) {
    console.log("hay cupos, abrir reserva");
    }else{
        console.log("cata llena, ofrecer lista de espera");
    }

    //operadores de comparación
    8 > 5 // true
    3 < 10 // true
    8<= 8 // true
    4 <= 9 // true 
    5 === 5 // true
    5!==3 // true  

    // revisar codigo para predecir el resultado

    const tazasreservadasHoy = 57;
    const maxTazasDia = 50;

    if (tazasreservadasHoy>=maxTazasDia) {
        console.log ("cerrar reserva del dia");
    } else {
        console.log(" Aún hay dispononiblidad")
    }

    // un pedazo de codigo que corre, pero esta mal 

    const cantidadTazas = 0;

    if (cantidadTazas > 2){
        console.log ("solo puedes reservar maximo 2 tazas");
    } else {
        console.log("reserva confirmada");
    }

     
    