let contain = document.querySelector('.contain');
let imgs = document.querySelectorAll('img');

imgs.forEach(eventoImg)

function eventoImg(img){
  img.addEventListener('click', changeImg);
}
function changeImg(event){
  let itemImg = event.currentTarget;
  contain.prepend(itemImg);
}


