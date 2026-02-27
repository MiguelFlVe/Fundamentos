// ============================================
// EJERCICIO 5 - Conversión de Temperatura
// Celsius a Fahrenheit
// ============================================

// --- DECLARACION DE VARIABLES ---
let tempCelsius;
let tempFahrenheit;

// --- DATOS DE ENTRADA (ingresados por el usuario) ---
tempCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius (°C):"));

// --- OPERACION ---
// Fórmula: F = (C × 9/5) + 32
tempFahrenheit = (tempCelsius * 9 / 5) + 32;

// --- DATOS DE SALIDA ---
console.log("=== Conversión de Temperatura ===");
console.log("Temperatura en Celsius   : " + tempCelsius + " °C");
console.log("Temperatura en Fahrenheit: " + tempFahrenheit.toFixed(2) + " °F");
alert(tempCelsius + " °C = " + tempFahrenheit.toFixed(2) + " °F");


