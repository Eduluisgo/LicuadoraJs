let estadoLicuadora = "apagada" ;
let sonidoLicuadora = document.getElementById ("blender-sound");
let botonLicuadora =document.getElementById ("blender-botton-sound");
let licuadora = document.getElementById("blender");

function controlarLicuadora () {
    if ( estadoLicuadora == "apagada"){
        hacerSonido();
        estadoLicuadora = "encendido";
        licuadora.classList.add("active");
       /*  console.log("estoy prendido"); */
    } else {
        estadoLicuadora = "apagada"
        hacerSonido();
        licuadora.classList.remove("active");
        /* console.log("estoy apagada"); */
    }
}

function hacerSonido(){
    if(sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currenTime = 0;
    }
}