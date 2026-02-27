// ============================================
// EJERCICIO 4 - Conversión de Monedas
// COP (Pesos Colombianos) a USD (Dólares)
// ============================================

// --- DECLARACION DE VARIABLES ---
let valorCOP;
let tasaCambio;
let valorDolares;

// --- DATOS DE ENTRADA (ingresados por el usuario) ---
valorCOP = parseFloat(prompt("Ingresa el valor en pesos colombianos (COP):"));
tasaCambio = 4000; // 1 USD = 4000 COP

// --- OPERACION ---
valorDolares = valorCOP / tasaCambio;

// --- DATOS DE SALIDA ---
console.log("=== Conversión de Monedas ===");
console.log("Valor en COP  : $" + valorCOP);
console.log("Tasa de cambio: 1 USD = " + tasaCambio + " COP");
console.log("Valor en USD  : $" + valorDolares.toFixed(2));
alert("$" + valorCOP + " COP = $" + valorDolares.toFixed(2) + " USD")