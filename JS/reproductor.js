const botonPlay = document.getElementById("play-button");
let imagenCambiada = false;
let audio = document.getElementById("audio-player")


/*
event listeners para que cuando se de click al boton de play cambie la imagen del mismo y comience
la musica
*/
botonPlay.addEventListener("click", () => {

    if (imagenCambiada === false) {
        audio.play()
        botonPlay.src = "IMG/pause-button.png";
        imagenCambiada = true;

    } else { //si la cancion esta pausada el boton sera el de play

        audio.pause()
        botonPlay.src = "IMG/play-button.png";
        imagenCambiada = false;

    }

    audio.onended = function() { //cuando se acabe la cancion el boton regresara al de play 

        botonPlay.src = "IMG/play-button.png";
        imagenCambiada = true;

    }

});

//Event Listener para que cuando se le de click al boton de play el mensaje del nav diga reproduciendo
let textoMenu = document.getElementById("textoMenu");

botonPlay.addEventListener("click", () => {

    textoMenu.innerHTML = `<h2 class="titulo-playlist">Reproduciendo...</h2>`;

})
//Event Listener para que cuando se acabe la cancion el mensaje del nav diga reproducir
audio.addEventListener("ended", function() {

    textoMenu.innerHTML = `<h2 class="titulo-playlist">Reproducir</h2>`;

});
//Event Listener para que cuando se pause la cancion el mensaje del nav diga reproducir
audio.addEventListener("pause", function() {

    textoMenu.innerHTML = `<h2 class="titulo-playlist">Reproducir</h2>`;

})





