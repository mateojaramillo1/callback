function crearEstudiante(nombre,planeta,edad,estatura,clasificarEstudiante) {
    setTimeout(function(){
        let estudiante={
            nombre :nombre,
            planeta: planeta,
            edad:edad,
            estatura:estatura
        }
        clasificarEstudiante(estudiante.edad)
    },2000)
}


crearEstudiante("mateo", "marte", "11", "1.40", function(edad){
    if(edad<15){
        console.log(`su edad es ${edad} tu clase sera manejo de fuerza`);
    }else{
        console.log(`su edad es ${edad} tu clase sera uso sable`);
    }
});
