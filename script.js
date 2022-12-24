const burger = document.getElementById('burger');
const nav = document.querySelector('nav');

burger.addEventListener('click',() =>{
    nav.classList.toggle('geser');
});