var hamburguer = document.querySelector('.hamburguer');
var menu = document.querySelector('.navegation');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('aparecer')
}); 

window.addEventListener('click', e=>{
    if(menu.classList.contains('aparecer') && e.target != menu
    && e.target != hamburguer){
        
        menu.classList.toggle('aparecer')

    };
});

