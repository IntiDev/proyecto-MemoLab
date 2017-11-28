//trae los elementos correspomndientes a la clase 'card' del HTML
var cards = document.getElementsByClassName('card');
// console.log(cards);
for (var i = 0; i < cards.length; i++){
  var item = cards[i];
  // console.log(cards[i]);
  item.classList.add('efects') //iteramos sobre cada elemento del arreglo cards en la posición i
  item.addEventListener('mouseover', rotation);
}

function rotation() {
  if (this.classList.contains('rotation-efect')) {
    this.classList.remove('rotation-efect');
  }
  else{
    this.classList.add('rotation-efect');
  }
}
























// var cards = document.getElementsByClassName('card');
// var arrayCardsSize = cards.length;
// console.log(cards);
//
// for ( var i = 0; i < arrayCardsSize; i++ ) {
//   var item = cards[i];
//   item.classList.add('efects');
//   item.addEventListener('mouseover', rotation);
// }
//
// function rotation() {
//   // console.log(this);
//     //this.classList.add('rotation-efect');
//     if ( this.classList.contains('rotation-efect') ) {
//       this.classList.remove('rotation-efect');
//     }
//     else {
//       this.classList.add('rotation-efect');
//     }
// }
