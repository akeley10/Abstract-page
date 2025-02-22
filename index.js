document.addEventListener('DOMContentLoaded',()=>{
    const menuIcon = document.getElementById('menuIcon');


    menuIcon.addEventListener('click',()=>{
        document.body.classList.toggle('menu-visible');
    })

});