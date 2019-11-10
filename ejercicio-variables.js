// 1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
const nombreDeTienda = "Viajá conmigo";
const producto1 = "Londres";
const producto2 = "Madrid";
const precio1 = "15000";
const precio2 = "10000";
const codigoDescuento = "millas";
let unidadesProd1 = 0;
let unidadesProd2 = 0;
let cuotas = 0;
let tarjetaCredito;


let nombreUsuario = prompt(`¡Bienvenida a ${nombreDeTienda}✈! 

Por favor, ingresá tu nombre:`);

// 2. Mostrarle los productos en promoción (2 productos)
alert(`¡Hola, ${nombreUsuario}! 

Tenemos los siguiente pasajes en promoción️️: 

✔️ ${producto1} 

✔️ ${producto2}`);

//  3. Preguntarle si quiere comprar el producto 1
let respuestaUsuario1 = prompt(`Si desea viajar a Londres 🔥, por favor, ingrese "si":`);
// a. si responde sí, preguntarle cuántas unidades va a llevar
respuestaUsuario1 === "si" && (unidadesProd1 = prompt(`¿Cuántas personas van a viajar?👨‍👨‍👧‍👦`));

// 4. Preguntarle si quiere comprar el producto 2
let respuestaUsuario2 = prompt(`Si desea viajar a Madrid 🔥, por favor, ingrese "si":`);
// a. si responde sí, preguntarle cuántas unidades va a llevar
respuestaUsuario2 === "si" && (unidadesProd2 = prompt(`¿Cuantás personas van a viajar?👩‍👩‍👧‍👧`));

//  5. Mostrar el detalle de la compra con:
//  - subtotales de cada producto (precio x cantidad)
//  - total (suma subtotales)

(unidadesProd1 && unidadesProd2) &&
alert(`El detalle de tu compra es: 

${unidadesProd1} pasajes de avión con destino a ${producto1} = $${unidadesProd1 * precio1}
y
${unidadesProd2} pasajes de avión con destino a ${producto2} = $${unidadesProd2 * precio2}

💲 El total es: $${unidadesProd1 * precio1 + unidadesProd2 * precio2}`);

// !!!!!! no sé cómo hacer que esto me funcione
// (unidadesProd1 !== 0  && unidadesProd2 === 0) &&
// alert(`El detalle de tu compra es: 

// ${unidadesProd1} pasajes de avión con destino a ${producto1} = $${unidadesProd1 * precio1}

// 💲 El total es: $${unidadesProd1 * precio1}`)


// (unidadesProd1 === 0  && unidadesProd2 !== 0)&&
// alert(`El detalle de tu compra es: 

// ${unidadesProd2} pasajes de avión con destino a ${producto2} = $${unidadesProd2 * precio2}

// 💲 El total es: $${unidadesProd2 * precio2}`)


// 6. Pregunta si desea abonar con tarjeta de crédito 
(unidadesProd1 != 0 || unidadesProd2 != 0) && (tarjetaCredito = prompt(`¿Desea abonar con tarjeta de crédito?`));

tarjetaCredito === "si" && (cuotas = prompt(`¿En cuántas cuotas desea abonar?`));
//  Si responde sí, preguntar en cuántas cuotas desea abonar

//  7. Mostrar el detalle de la compra con:
//  - subtotales de cada cada producto (precio x cantidad)
//  - total (suma de subtotales)
//  - si abona con tarjeta de crédito, cantidad de cuotas y monto de cada cuota a pagar
let totalFinal = (unidadesProd1 * precio1 + unidadesProd2 * precio2);
let montoCuota = totalFinal / cuotas;

tarjetaCredito == "si" && (unidadesProd1 && unidadesProd2) && 
alert(`El detalle de tu compra es: 

${unidadesProd1} pasajes de avión con destino a ${producto1} = $${unidadesProd1 * precio1}
y
${unidadesProd2} pasajes de avión con destino a ${producto2} = $${unidadesProd2 * precio2}

💲 El total es: $${totalFinal}

Deberá abonar ${cuotas} cuotas de $${montoCuota}`);

tarjetaCredito == "si" && (unidadesProd1 != 0 && unidadesProd2 == 0) &&
alert(`El detalle de tu compra es:
${unidadesProd1} pasajes de avión con destino a ${producto1} = $${unidadesProd1 * precio1}

💲 El total es $${totalFinal}

Deberá abonar ${cuotas} cuotas de $${montoCuota}`);

tarjetaCredito == "si" && (unidadesProd1 == 0 && unidadesProd2 != 0) &&
alert(`El detalle de tu compra es:
${unidadesProd2} pasajes de avión con destino a ${producto2} = $${unidadesProd2 * precio2}

💲 El total es $${totalFinal}

Deberá abonar ${cuotas} cuotas de $${montoCuota}`);


//  8. Preguntar si tiene un código de descurnto 
let descuento;
(unidadesProd1 || unidadesProd2) &&
(descuento = prompt(`¿Tiene un código de código de descuento?`))
//  - si la respuesta es "SI", pedir que ingrese el código de descuento 
let codigoIngresado;
descuento == "si" &&
(codigoIngresado = prompt(`Por favor, ingresá el código de descuento:`));

//  - Mostrar si el código ingresado es correcto o incorrecto
codigoIngresado === codigoDescuento &&
alert(`El código ingresado es correcto`)

codigoIngresado !== codigoDescuento &&
alert(`El código de codigoDescuento es incorrecto`)

//  9. Mostrar el detalle de la compra con: 
//  - subtotales de cada producto (precio x cantidad)
//  - total (suma de subtotales)
//  - si tiene código y lo ingresó bien, mostrar el codigoDescuento y el total final
((codigoIngresado === codigoDescuento) && 
(unidadesProd1 !== 0 && unidadesProd2 !== 0)) &&
alert(`El detalle de tu compra es: 

${unidadesProd1} pasajes de avión con destino a ${producto1} = $${unidadesProd1 * precio1}
y
${unidadesProd2} pasajes de avión con destino a ${producto2} = $${unidadesProd2 * precio2}

💲 El total es: $${unidadesProd1 * precio1 + unidadesProd2 * precio2}

Con el 10% de descuento de su cupón. 

Precio Final: $ ${(totalFinal) * 0.1}`)


// (unidadesProd1 === 0  && unidadesProd2 !== 0)&&
// alert(`El detalle de tu compra es: 

// ${unidadesProd2} pasajes de avión con destino a ${producto2} = $${unidadesProd2 * precio2}

// 💲 El total es: $${unidadesProd2 * precio2}`)





