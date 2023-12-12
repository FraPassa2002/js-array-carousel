/*
    M1:
1) usare HTML per creare il progetto statico ed inserire gli stili
2) Rimuovere il markup statico
3) Costruire il container
4) inserire un'immagine grande al centro
    (abbiamo così struttura base e stili pronti)


    M2:
5) Rimuovere il markup statico
6) Inseriamoci tutte le immagini con display none
7) Creare una classe active che faccia vedere l'immagine
    (servendoci dell')
8) array
9) ciclo for
    (che concatena un)
10) template literal
    (ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript)


    M3:
11)click frecce 

*/


const imgList = [
'./img/01.webp',     // 0
'./img/02.webp',     // 1
'./img/03.webp',     // 2
'./img/04.webp',     // 3
'./img/05.webp',     // 4
];

const imgContainer = document.querySelector ('.img-container');
console.log (imgContainer);

let currentSlideIndex = 0;
console.log (currentSlideIndex);

for (let i = 0; i < imgList.length; i++) {
  console.log (imgList[i]);

  imgContainer.innerHTML += 
  `
    <div class= "item">
      <img src=${imglist[i]}>
    </div>
  `;

  console.log(imgContainer);
};

let displayPics = document.getElementsByClassName("item");
displayPics[currentSlideIndex].classList.add("activate");
console.log (displayPics);

const buttonDown = document.querySelector (".button-down");
console.log (buttonDown);
buttonDown.addEventListener ("click", function() {
  console.log(currentSlideIndex);
  if (currentSlideIndex < (displayPics.length - 1)) {
    displayPics[currentSlideIndex].classList.remove("activate");
    currentSlideIndex++;
    displayPics[currentSlideIndex].classList.add("activate");
  }
});

const buttonUp = document.querySelector (".button-up");
console.log (buttonUp);
buttonUp.addEventListener ("click", function() {
  if (currentSlideIndex > 0) {
    displayPics[currentSlideIndex].classList.remove("activate");
    currentSlideIndex--;
    displayPics[currentSlideIndex].classList.add("activate");
  }
})

