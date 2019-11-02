// 1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
const nombreDeTienda = "Viajá conmigo";
const producto1 = "Londres";
const producto2 = "Madrid";
const precio1 = "15000";
const precio2 = "10000";
const descuento = "viajamillas";
let uniProd1 = 0;
let uniProd2 = 0;
let cuotas = 0;

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
${uniProd2} pasajes de avión con destino a ${producto2} = $${uniProd2 * precio2}.

💲 El total es: $${uniProd1 * precio1 + uniProd2 * precio2}`) ;

(uniProd1 != 0 && uniProd2 == 0) &&
alert(`El detalle de tu compra es: 

${uniProd1} pasajes de avión con destino a ${producto1} = $${uniProd1 * precio1}

💲 El total es: $${uniProd1 * precio1}`)

(uniProd1 == 0 && uniProd2 != 0) &&
alert(`El detalle de tu compra es: 

${uniProd2} pasajes de avión con destino a ${producto2} = $${uniProd2 * precio2}

💲 El total es: $${uniProd2 * precio2}`)


// 6. Pregunta si desea abonar con tarjeta de crédito 


