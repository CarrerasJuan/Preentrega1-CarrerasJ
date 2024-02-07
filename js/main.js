const precioUnidad = 10000;
const descuentoDosPorUno = 0.1;
const descuentoDosPorCuatro = 0.15;
const mensajeBienvenida = `¡Bienvenido a CoderJauz!
Precios:
- Por Curso $${precioUnidad}.
- Promo contrata 1 lleva 2 ${descuentoDosPorUno * 100}% off.
- Promo contrata 2 lleva 4 ${descuentoDosPorCuatro * 100}% off.
Ingresa el/los cursos que quiere contratar.`;
const mensajeMenu = `Menu:
1. Java Script (JS)    4. CSS (CSS)
2. Python (P)  5. HTML (H)
3. GitHub (GH)        6. ReactJS (RJS)
`;
// ----- Inicio del programa -----
alert(mensajeBienvenida);
// ----- Ingreso y verificación de cantidad de cursos -----
let cantidadDeCursos = Number(prompt('Elegí a continuación cuantos curso deseas tomar:'));
let cantidadEsCorrecta = false;
while (cantidadEsCorrecta === false) {
    if (cantidadDeCursos <= 0 || cantidadDeCursos === null) {
        alert('No se ingresó cantidad.');
        cantidadDeCursos = Number(prompt('Elegí a continuación cuantos curso deseas tomar:'));
    } else if (isNaN(cantidadDeCursos)) {
        alert('Datos incorrectos.');
        cantidadDeCursos = Number(prompt('Elegí a continuación cuantos curso deseas tomar:'));
    } else if (cantidadDeCursos > 8) {
        alert('Para carreras completas mas de 6 cursos comunicate el 0800-TELEFONO-AQUI');
        cantidadDeCursos = Number(prompt('Elegí a continuación cuantos curso deseas tomar:'));
    } else {
        cantidadEsCorrecta = true;
    }
}
alert(`Elegí los ${cantidadDeCursos} cursos que vas a contratar.`)
console.log(`El cliente ingresó ${cantidadDeCursos} cursos.`);
// ----- Proceso de elección cursos varios -----
let cursillos = `Los cursos seleccionados son:`;
let esIngresoCorrecto = false;
let pedidoCompleto = 0;
while (pedidoCompleto < cantidadDeCursos) {
    let cursilloIngresado = Number(prompt(`${mensajeMenu} Ingresa el número de opción elegida:`));
    let verificarValor = cursilloIngresado > 0 && cursilloIngresado <= 6 && cursilloIngresado !== null && !isNaN(cursilloIngresado);
    if (verificarValor) {
        if (cursilloIngresado === 1) {
            cursillos += `
            - JavaScript`;
            pedidoCompleto++;
        } else if (cursilloIngresado === 2) {
            cursillos += `
            - Python`;
            pedidoCompleto++;
        } else if (cursilloIngresado === 3) {
            cursillos += `
            - GitHub`;
            pedidoCompleto++;
        } else if (cursilloIngresado === 4) {
            cursillos += `
            - CSS`;
            pedidoCompleto++;
        } else if (cursilloIngresado === 5) {
            cursillos += `
            - HTML`;
            pedidoCompleto++;
        } else if (cursilloIngresado === 6) {
            cursillos += `
            - REACJS`;
            pedidoCompleto++;
        } 
    } else {
        alert('Ingreso incorrecto');
    }
    if (pedidoCompleto === cantidadDeCursos) {
        esIngresoCorrecto = true;
        break;
    }
}
alert(`${cursillos}
Continua con tu pago.`);
console.log(`Ingreso correcto: ${esIngresoCorrecto}.`);
console.log(cursillos);
// ----- Proceso de pago -----
const totalSinDescuentos = cantidadDeCursos * precioUnidad;
function aplicarDescuento(precio, descuento) {
    
}
const determinarDescuento = (cantidad, total) => {
    let totalAPagar;
    let descuento;
    if (cantidad < 2) {
        totalAPagar = total;
    } else if (cantidad >= 2 && cantidad < 8) {
        const descuento = totalSinDescuentos * descuentoDosPorUno;
        totalDelPedido = totalSinDescuentos - descuento;
    } else if (cantidadDeCursos >= 8) {
        const descuento = totalSinDescuentos * descuentoDosPorCuatro;
        totalDelPedido = totalSinDescuentos - descuento;
    }
    return totalAPagar;
}
let totalDelPedido;
if (cantidadDeCursos < 2) {
    totalDelPedido = totalSinDescuentos;
} else if (cantidadDeCursos >= 2 && cantidadDeCursos < 8) {
    const descuento = totalSinDescuentos * descuentoDosPorUno;
    totalDelPedido = totalSinDescuentos - descuento;
} else if (cantidadDeCursos >= 8) {
    const descuento = totalSinDescuentos * descuentoDosPorCuatro;
    totalDelPedido = totalSinDescuentos - descuento;
}
alert(`Tu total es $${totalDelPedido}.`);
console.log(`El cliente abonó $${totalDelPedido}.`);
// ----- Fin del programa -----
console.log('Fin del programa.');