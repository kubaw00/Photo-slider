// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/

const slideList = [{
    img: "images/img1.jpg",
    txt: "Pierwszy tekst"
},
{
    img: "images/img2.jpg",
    txt: "Drugi tekst"
},
{
    img: "images/img3.jpg",
    txt: "Trzeci tekst"
}];
const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];
let index = 0;

//zmiana kropek
function changeDot(){
const active = dots.findIndex(dot => dot.classList.contains('active'));
dots[active].classList.remove('active');
dots[index].classList.add('active');
};

//zmiana zdjęć i h1
function changeImgs(){
    index++;
if(index === slideList.length) {
    index = 0;
} else if (index <0) index = slideList.length - 1;
img.src = slideList[index].img;
h1.textContent = slideList[index].txt;
changeDot();
}


let indexInterval = setInterval(changeImgs, 2000);

function keyChangeSlide(e){

     if (e.keyCode === 37) {
    clearInterval(indexInterval);
    index -= 2;

    changeImgs();
    indexInterval = setInterval(changeImgs, 2000);
    } 
       


    else if(e.keyCode ===39 ){
        clearInterval(indexInterval);
        changeImgs();
        indexInterval = setInterval(changeImgs, 2000)
    }    

}
// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)




























// const slideList = [{
//  img: "images/img1.jpg",
//  text: 'Pierwszy tekst'
// },
// {
//  img: "images/img2.jpg",
//  text: 'Drugi tekst'
// },
// {
//  img: "images/img3.jpg",
//  text: 'Trzeci tekst'
// }];

// const image = document.querySelector('img.slider');
// const h1 = document.querySelector('h1.slider');
// // Interfejs
// const time = 3000;
// let active = 0;

// const changeSlide = () => {
//  active++;
//  if (active === slideList.length) {
//   active = 0;
//  }
//  image.src = slideList[active].img;
//  h1.textContent = slideList[active].text;

// }
// setInterval(changeSlide, time)

// // Implementacje