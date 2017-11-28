var cards = document.getElementsByClassName('card');
var arrayCardsSize = cards.length;
console.log(cards);

for ( var i = 0; i < arrayCardsSize; i++ ) {
  var item = cards[i];
  item.classList.add('efects');
  item.addEventListener('mouseover', rotation);
}

function rotation() {
  // console.log(this);
    this.classList.add('rotation-efect');
}
