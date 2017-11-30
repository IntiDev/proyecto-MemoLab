//trae los elementos correspomndientes a la clase 'card' del HTML
// var cards = document.getElementsByClassName('card');
// // console.log(cards);
// for (var i = 0; i < cards.length; i++){
//   var item = cards[i];
//   // console.log(cards[i]);
//   item.classList.add('efects') //iteramos sobre cada elemento del arreglo cards en la posición i
//   item.addEventListener('mouseover', rotation);
// }
//
// function rotation() {
//   if (this.classList.contains('rotation-efect')) {
//     this.classList.remove('rotation-efect');
//   }
//   else{
//     this.classList.add('rotation-efect');
//   }
// }

var cards = document.getElementsByClassName('card');
var arrayCardsSize = cards.length;
console.log(cards);

for ( var i = 0; i < arrayCardsSize; i++ ) {
  var item = cards[i];
  item.classList.add('efects');
  item.addEventListener('click', rotation);
}

// Contador de cartas volteadas
var flipped = 0;
var pairs = 0;

function rotation() {
  // Validamos que la carta se puedan voltear CASO PARA OCULTAR LAS CARTAS
  if(!this.classList.contains('disabled')) {//Se usa como indicador para desabilitar efecto de rotacion
    if ( this.classList.contains('rotation-efect') ) {
      /*
      * Agregamos el atributo selected para interactuar con los estilos
      * En caso de que no exista el atributo se fija en true
      */
      this.setAttribute("selected", !(this.getAttribute("selected") === "true"));
      this.classList.remove('rotation-efect');
      flipped--; //se resta para las cartas que pasan de boca aariba a boca abajo
    }
    else {
      // Limitamos las cartas volteadas a 2 (CASO PARA MOSTRAR CARTAS)
      if(flipped <= 2) {
        this.setAttribute("selected", !(this.getAttribute("selected") === "true"));
        this.classList.add('rotation-efect');
        flipped++;
        if(flipped == 2) {
          // Obtenemos las cartas volteadas para compararlas
          var flippedCards = document.getElementsByClassName('rotation-efect');
          var firstFlipped = flippedCards[0];
          var secondFlipped = flippedCards[1];
          if(hasEqualClasses(firstFlipped, secondFlipped)) { //se llama a la funcion hasEqualClasses que de cumplir la concion regresa TRUE
            // Deshabilitamos las cartas
            firstFlipped.classList.add("disabled");
            secondFlipped.classList.add("disabled");
            // Les quitamos la clase que usamos para rotar
            firstFlipped.classList.remove('rotation-efect');
            secondFlipped.classList.remove('rotation-efect');
            flipped = 0; //reiniciamos el contador de cartas volteadas (PARA SOLO TRABAJAR CON PARES)
            // Validamos si ha ganado
            // var x = i ++ primero asignas el valor de i y luego la incremetnas
            // var x = ++i primero incrementas i y luego se asigna a x
            if(++pairs == 4) {//realizamos 2 intrucciones en una misma linea (el incremento y la comparacion)
              // Agregamos una pausa para que se pueda ver la animacion
              setTimeout(function() {
                var response = confirm("You win!\n Do u wanna play again?");
                if(response) {
                  restart();
                } else {
                  alert("Ok :(");
                }
              }, 1000);
            }
          } else {
            // Agregamos una pausa para que se pueda ver la animacion de la segunda carta que selecionamos
            setTimeout(function() {
              firstFlipped.setAttribute("selected", false);
              firstFlipped.classList.remove('rotation-efect');
              secondFlipped.setAttribute("selected", false);
              secondFlipped.classList.remove('rotation-efect');
              flipped = 0;
            }, 1000);
          }
        }
      }
    }
  }
}

/*
* Validamos que las listas de atributos sean iguales,
* primero por tamano y luego por elementos.
* Si son iguales las deshabilitamos
*/
function hasEqualClasses(firstElement, secondElement) {
  var firstElementClasses = firstElement.classList.value.split(" ");//devuelve un arreglo de strings con todas las clases
  var secondElementClasses = secondElement.classList.value.split(" ");
  if(firstElementClasses.length == secondElementClasses.length) { //validamos tamanio
    return firstElementClasses.every(function(value, iterator) { //validamos que TODAS las clases sean iguales
      return value == secondElementClasses[iterator]})//VALUE = todas las clases del 1er elemento
  } else {
    return false;
  }
}

function restart() {
  pairs = 0;// para reiniciar el juego infinitamente
  for(var i = 0; i < arrayCardsSize; i++) {
    cards[i].classList.remove("disabled");
    cards[i].setAttribute("selected", false);
  }
}
