const menubarBtn = document.querySelector('.header-top i')
menubarBtn.addEventListener("click",function(){
    document.querySelector('.header-top ul').classList.toggle('active')
})

/* Hotline */
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
const root = document.querySelector(':root');

c1.addEventListener('click',function(){
    root.style.setProperty('--color2','#009943');
    localStorage.setItem('pickColor','#009943');
})
c2.addEventListener('click',function(){
    root.style.setProperty('--color2','#edbb10');
    localStorage.setItem('pickColor','#edbb10');
})
c3.addEventListener('click',function(){
    root.style.setProperty('--color2','#0fe3ea');
    localStorage.setItem('pickColor','#0fe3ea');
})

function loadTheme(){
    if (localStorage.getItem('pickColor') != '') {
        root.style.setProperty('--color2', localStorage.getItem('pickColor'));
    }
}