let botonPlay = document.getElementById("play-button");
let textoMenu = document.getElementById("textoMenu");

/*
Event Listener para que cuando se le de click al boton de play en el index te diga que debes de entrar a una cancion
para reproducirla 
*/
botonPlay.addEventListener("click", () => {

    textoMenu.innerHTML = `<h2 class="titulo-playlist">Debes de entrar a alguna cancion para reproducirla</h2>`;


})