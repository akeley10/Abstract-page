document.addEventListener('DOMContentLoaded',()=>{
    const menuIcon = document.getElementById('menuIcon');
    const formQuery = document.getElementById('formQuery').value;
    const query = document.getElementById('query').value;
    

    formQuery.addEventListener('onsubmit',()=>{
        event.preventDefault();

        console.log(query);

    });


    menuIcon.addEventListener('click',()=>{
        document.body.classList.toggle('menu-visible');
    })

});