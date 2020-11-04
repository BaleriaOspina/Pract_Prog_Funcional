//Función Pura

/* function multiplicar(num) {
  return num * 5;
}

let result = multiplicar(10);
console.log(result);
 */

//Comportamiento de la función

/* let ttcompra = 0;
function sumarPrecios(cantidad, valor) {
  return (ttcompra = ttcompra + cantidad * valor);
}

console.log(sumarPrecios(1, 100));
console.log(sumarPrecios(1, 100));
console.log(sumarPrecios(1, 100));
console.log(sumarPrecios(1, 100));
console.log(sumarPrecios(1, 100));
 */

//Función Normal

/* function multi(nume) {
  return nume*nume
}
console.log(multi(5));

 */

//Función con Composición Funcional

/* function multiplicar(numero) {
  return numero * numero;
}
function suma(num1, num2) {
  return multiplicar(num1) + multiplicar(num2);
}

console.log(suma(4, 5));
 */

//Función Recursiva

/* function saludar() {
  console.log("Hola mundo, hola chicos");
  saludar();
}

saludar();
 */

//Arreglo o iniciar elementos de cada arreglo

const listaNumeros = [2, 4, 6, 8, 10];
const nuevaLista = [];
for (numero in listaNumeros) {
  console.log(listaNumeros[numero]);
  nuevaLista.push(listaNumeros[numero] * 2);
}

console.log(nuevaLista);
