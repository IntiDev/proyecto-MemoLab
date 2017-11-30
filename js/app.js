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
  // Validamos que la carta se pueda voltear
  if(!this.classList.contains('disabled')) {
    if ( this.classList.contains('rotation-efect') ) {
      /*
      * Agregamos el atributo selected para interactuar con los estilos
      * En caso de que no exista el atributo se fija en true
      */
      this.setAttribute("selected", !(this.getAttribute("selected") === "true"));
      this.classList.remove('rotation-efect');
      flipped--;
    }
    else {
      // Limitamos las cartas volteadas a 2
      if(flipped <= 2) {
        this.setAttribute("selected", !(this.getAttribute("selected") === "true"));
        this.classList.add('rotation-efect');
        flipped++;
        if(flipped == 2) {
          // Obtenemos las cartas volteadas para compararlas
          var flippedCards = document.getElementsByClassName('rotation-efect');
          var firstFlipped = flippedCards[0];
          var secondFlipped = flippedCards[1];
          if(hasEqualClasses(firstFlipped, secondFlipped)) {
            // Deshabilitamos las cartas
            firstFlipped.classList.add("disabled");
            secondFlipped.classList.add("disabled");
            // Les quitamos la clase que usamos para validar
            firstFlipped.classList.remove('rotation-efect');
            secondFlipped.classList.remove('rotation-efect');
            flipped = 0;
            // Validamos si ha ganado
            if(++pairs == 4) {
              // Agregamos una pausa para que se pueda ver la animacion
              setTimeout(function() {
                alert("Has ganado!");
              }, 1000);
            }
          } else {
            // Agregamos una pausa para que se pueda ver la animacion
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
  var firstElementClasses = firstElement.classList.value.split(" ");
  var secondElementClasses = secondElement.classList.value.split(" ");
  if(firstElementClasses.length == secondElementClasses.length) {
    return firstElementClasses.every(function(value, iterator) { return value == secondElementClasses[iterator]})
  } else {
    return false;
  }
}
