// ============================================
// EJERCICIO 6 - Perímetro de un Cuadrado
// ============================================

// --- DECLARACION DE VARIABLES ---
let lado;
let numeroDeLados;
let perimetro;

// --- DATOS DE ENTRADA (ingresados por el usuario) ---
lado = parseFloat(prompt("Ingresa la longitud del lado del cuadrado:"));
numeroDeLados = 4; // Un cuadrado siempre tiene 4 lados

// --- OPERACION ---
// Fórmula: Perímetro = lado × 4
perimetro = lado * numeroDeLados;

// --- DATOS DE SALIDA ---
console.log("=== Perímetro de un Cuadrado ===");
console.log("Longitud del lado: " + lado + " unidades");
console.log("Número de lados  : " + numeroDeLados);
console.log("Perímetro        : " + perimetro + " unidades");
alert("Lado: " + lado + " | Perímetro = " + lado + " × 4 = " + perimetro + " unidades");