let nombreJugador = prompt ("Ingresa tu nombre");
    alert ("Bienvenido " + nombreJugador + ", adivinare tu signo zodiacal. Debes responder con 'S' (mayuscula) en caso afirmativo o 'N' (mayuscula) en caso negativo.");

let mesNacimiento = prompt ("¿Naciste entre los meses de Marzo y Abril?")
if (mesNacimiento == "S") {
    alert ("¡Eres de Aries!")
}

while (mesNacimiento == "N") {
    mesNacimiento = prompt ("¿Naciste entre los meses de Abril y Mayo?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Tauro!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Mayo y Junio?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Geminis!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Junio y Julio?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Cancer!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Julio y Agosto?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Leo!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Agosto y Septiembre?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Virgo!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Septiembre y Ocutbre?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Libra!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Octubre y Noviembre?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Escorpio!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Noviembre y Diciembre?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Sagitario!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Diciembre y Enero?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Capricornio!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Enero y Febrero?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Acuario!")
        break;
    }
    mesNacimiento = prompt ("¿Naciste entre los meses de Febrero y Marzo?")
    if (mesNacimiento == "S") {
        alert ("¡Eres de Piscis!")
        break;
    }
}  
