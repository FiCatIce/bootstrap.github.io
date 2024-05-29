const navEl = document.querySelector('.navbar');
const canva = document.querySelector('.offcanvas');
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 56){
        navEl.classList.add('nav-scroll')
        canva.classList.add('new-canva')
    }else{
        navEl.classList.remove('nav-scroll')
        canva.classList.remove('new-canva')
    }
});