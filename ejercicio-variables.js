// 1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
const nombreDeTienda = "Viajá conmigo";
const producto1 = "Londres";
const producto2 = "Madrid";
const precio1 = "15000";
const precio2 = "10000";
const descuento = "millas";
let uniProd1 = 0;
let uniProd2 = 0;
let cuotas = 0;
let tarjetaCredito = 0;
let codDescuento = 0;

let nombreUsuario = prompt(`¡Bienvenida a ${nombreDeTienda}✈! 

Por favor, ingresá tu nombre:`);

// 2. Mostrarle los productos en promoción (2 productos)
alert(`¡Hola, ${nombreUsuario}! 

Tenemos los siguiente pasajes en promoción️️: 

✔️ ${producto1} 

✔️ ${producto2}`);

//  3. Preguntarle si quiere comprar el producto 1
let respuestaUsuario = prompt(`Si desea viajar a Londres 🔥, por favor, ingrese 'SI':`);
// a. si responde sí, preguntarle cuántas unidades va a llevar
respuestaUsuario == "si" && (uniProd1 = prompt(`¿Cuántas personas van a viajar?👨‍👨‍👧‍👦`));
 
// 4. Preguntarle si quiere comprar el producto 2
respuestaUsuario = prompt(`Si desea viajar a Madrid 🔥, por favor, ingrese 'SI':`);
// a. si responde sí, preguntarle cuántas unidades va a llevar
respuestaUsuario == "si" && (uniProd2 = prompt(`¿Cuantás personas van a viajar?👩‍👩‍👧‍👧`));

//  5. Mostrar el detalle de la compra con:
//  - subtotales de cada producto (precio x cantidad)
//  - total (suma subtotales)

(uniProd1 && uniProd2) && 
alert(`El detalle de tu compra es: 

${uniProd1} pasajes de avión con destino a ${producto1} = $${uniProd1 * precio1}
y
${uniProd2} pasajes de avión con destino a ${producto2} = $${uniProd2 * precio2}

💲 El total es: $${uniProd1 * precio1 + uniProd2 * precio2}` );


// (uniProd1 != 0 && uniProd2 == 0) &&
// alert(`El detalle de tu compra es: 

// ${uniProd1} pasajes de avión con destino a ${producto1} = $${uniProd1 * precio1}

// 💲 El total es: $${uniProd1 * precio1}`)

// (uniProd1 == 0 && uniProd2 != 0) &&
// alert(`El detalle de tu compra es: 

// ${uniProd2} pasajes de avión con destino a ${producto2} = $${uniProd2 * precio2}.

// 💲 El total es: $${uniProd2 * precio2}`)


// 6. Pregunta si desea abonar con tarjeta de crédito 
(respuestaUsuario == "si") && (tarjetaCredito = prompt(`¿Desea abonar con tarjeta de crédito?`));

tarjetaCredito == "si" && (cuotas = prompt(`¿En cuántas cuotas desea abonar?`));
//  Si responde sí, preguntar en cuántas cuotas desea abonar

//  7. Mostrar el detalle de la compra con:
//  - subtotales de cada cada producto (precio x cantidad)
//  - total (suma de subtotales)
//  - si abona con tarjeta de crédito, cantidad de cuotas y monto de cada cuota a pagar
let totalFinal = (uniProd1 * precio1 + uniProd2 * precio2);
let montoCuota = totalFinal / cuotas;

tarjetaCredito == "si" && (uniProd1 && uniProd2) && 
alert(`El detalle de tu compra es: 

${uniProd1} pasajes de avión con destino a ${producto1} = $${uniProd1 * precio1}
y
${uniProd2} pasajes de avión con destino a ${producto2} = $${uniProd2 * precio2}

💲 El total es: $${totalFinal}

Deberá abonar ${cuotas} cuotas de $${montoCuota}`);

tarjetaCredito == "si" && (uniProd1 != 0 && uniProd2 == 0) &&
alert(`El detalle de tu compra es:
${uniProd1} pasajes de avión con destino a ${producto1} = $${uniProd1 * precio1}

💲 El total es $${totalFinal}

Deberá abonar ${cuotas} cuotas de $${montoCuota}`);

tarjetaCredito == "si" && (uniProd1 == 0 && uniProd2 != 0) &&
alert(`El detalle de tu compra es:
${uniProd2} pasajes de avión con destino a ${producto2} = $${uniProd2 * precio2}

💲 El total es $${totalFinal}

Deberá abonar ${cuotas} cuotas de $${montoCuota}`);


//  8. Preguntar si tiene un código de descuento 
(uniProd1 && uniProd2) &&
(codDescuento = prompt(`¿Tiene un código de descuento?`))
//  - si la respuesta es "SI", pedir que ingrese el código de descuento 
codDescuento == "si" &&
(descuento = prompt(`Por favor, ingresá el código de descuento:`));

//  - Mostrar si el código ingresado es correcto o incorrecto
descuento === "millas" &&
alert(`El código ingresado es correcto`)

descuento !== "millas" &&
alert(`El código de descuento es incorrecto`)
//  9. Mostrar el detalle de la compra con: 
//  - subtotales de cada producto (precio x cantidad)
//  - total (suma de subtotales)
//  - si tiene código y lo ingresó bien, mostrar el descuento y el total final
(uniProd1 !== 0 && uniProd2 !== 0) &&
alert(`El detalle de tu compra es: 

${uniProd1} pasajes de avión con destino a ${producto1} = $${uniProd1 * precio1}
y
${uniProd2} pasajes de avión con destino a ${producto2} = $${uniProd2 * precio2}

💲 El total es: $${uniProd1 * precio1 + uniProd2 * precio2}` );






