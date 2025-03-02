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

// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota", "Melodica", "Piano de Juguete","Bicicleta", 
    "Patin del Diablo", "Patines", "Juego de Mesa", "Pistola de Juguete", "Figura de Accion", "Padelbol"];

let giftToFind = "Camionsito";
let index = 0;

findGift(gifts, giftToFind, index);
// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) 
{
        // Caso base: Si llegamos al final de la lista
        if(index >= gifts.length){
            console.log(`El regalo, ${giftName}, no está en la lista`);
            return; //return explicito importante
        }

        if(gifts[index] === giftName){
            console.log(`El regalo, ${giftName}, se encuentra en esta posición ${index + 1}`);
            return;// return explicito importante
        }
        
  // TODO: Incluye el caso base donde se llega al final de la lista.
  // TODO: Incluye el caso base donde se encuentra el regalo.
  // TODO: Realiza la llamada recursiva para seguir buscando el regalo.

  findGift(gifts, giftToFind, index + 1);
  return;// return explicito para asegurarnos el fin de la funcion. 
}
