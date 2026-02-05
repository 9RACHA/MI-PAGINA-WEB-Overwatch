
    // 1. Verificamos que los nombres coincidan con tu HTML
    const botonMenu = document.querySelector('.menu-boton');
    const menu = document.querySelector('.menu');

    // 2. Añadimos el evento
    botonMenu.addEventListener('click', () => {
        console.log("Click detectado"); // Esto te servirá para ver si funciona en la consola
        menu.classList.toggle('menu-activo');
    });

    // 3. Cerrar al hacer click en un enlace (Extra opcional valorado [cite: 71, 72])
    const enlacesMenu = document.querySelectorAll('.menu a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            menu.classList.remove('menu-activo');
        });
    });
