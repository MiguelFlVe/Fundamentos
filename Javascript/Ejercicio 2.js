// Solicitar base y altura al usuario
let base = prompt("Ingresa la base del rectángulo:");
let altura = prompt("Ingresa la altura del rectángulo:");

// Convertir los valores a números
base = parseFloat(base);
altura = parseFloat(altura);

// Calcular el área
let area = base * altura;

// Mostrar el resultado en consola
console.log("El área del rectángulo es: " + area);
