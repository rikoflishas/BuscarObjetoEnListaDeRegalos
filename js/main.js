/**
 * Objetivo
El objetivo es que se practique cómo usar recursión para buscar un objeto específico en un arreglo. Practicará cómo dividir un problema en partes más pequeñas y detener la recursión en un caso base.

Problema: Buscar un objeto en una lista de regalos
Es Navidad y estás buscando un regalo específico en una lista de regalos 
que te dio tu familia. La lista puede ser bastante larga, 
y para encontrar el regalo que buscas, necesitas usar recursión. 
Este proyecto se enfoca únicamente en usar recursión para buscar un elemento en un arreglo
 simple.
 */

 // Copy code
// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        index += 1;
        return `${giftName} no está en la lista.`;
    }
  // TODO: Incluye el caso base donde se llega al final de la lista.
  // TODO: Incluye el caso base donde se encuentra el regalo.
  // TODO: Realiza la llamada recursiva para seguir buscando el regalo.
}
// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

if(gifts[index] === giftName){
    console.log(`El regalo esta en esta posición`);
    return findGift(gifts, giftName, index + 1);
}

// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
// Salida esperada:
// "Camión no está en la lista."