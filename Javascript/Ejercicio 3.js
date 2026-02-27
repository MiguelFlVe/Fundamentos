 // Solicitar las tres calificaciones
    let nota1 = prompt("Ingresa la primera calificación:");
    let nota2 = prompt("Ingresa la segunda calificación:");
    let nota3 = prompt("Ingresa la tercera calificación:");

    // Convertir a números
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    // Calcular promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar resultado en consola
    console.log("El promedio de las tres notas es: " + promedio);