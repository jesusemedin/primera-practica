
var m3 = {
    hp: 430,
    topspeed: 280,
    weight: 1657,
    torque: 406,
    price: 90000,
    acceleration: 41,
    country: "germany",
    yearmodel: 2014,
    awd: false,
    nombre: "BMW M3"
};
var camarozl1 = {
    hp: 660,
    topspeed: 300,
    Weight: 1761,
    torque: 600,
    price: 65000,
    acceleration: 35,
    country: "usa",
    yearmodel:2018,
    awd: false,
    nombre: "CAMARO ZL1"
};
var mustanggt = {
    hp: 640,
    topspeed: 300,
    Weight: 1761,
    torque: 600,
    price: 63000,
    acceleration: 35,
    country: "usa",
    yearmodel:2018,
    awd: false,
    nombre: "Mustang GT"
};
var carro = m3;
var puntos = 0;

if(carro.hp > 500){
    puntos ++;
}

if(carro.topspeed > 300){
    puntos ++;
}

if(carro.weight < 1700){
    puntos ++;
}

if(carro.torque > 500){
    puntos ++;
}

if(carro.price < 100000){
    puntos ++;
}

if(carro.acceleration < 40){
    puntos ++;
}

if(carro.country == "germany"){
    puntos = puntos + 2
}

if(carro.yearmodel > 2016 & carro.yearmodel < 2018){
    puntos ++;
}

if(carro.awd == true){
    puntos ++;
}

alert("Tu carro " + carro.nombre +"año: " + carro.yearmodel+ " tiene " + puntos);

function generarNumeroBingo(){

    var letra = Math.floor((Math.random() * 5) + 1);

    //DEBERIAMOS PREGUNTARNOS ¿QUE PASARIA SI SALE UNA LETRA QUE YA DIJE TODOS SUS NUMEROS?
    //¿COMO EVITO QUE LLAME UNA LETRA QUE YA SE DIJO TODOS SUS NUMEROS?

    if(letra==1){
        console.log("B");
        generarNumeroLetra(1,15);
    }else{

        if(letra==2){
           console.log("I");
           generarNumeroLetra(16,31);
       }else{
        //asi hasta llegar a la O
       }
   }

}

function generarNumeroLetra(min,max){
    //¿QUE PASARIA SI UNA LETRA REPITE EL MISMO NUMERO?
     //¿COMO EVITO QUE SALGA EL MISMO NUMERO EN UNA LETRA ?
    var numeroLetra=Math.floor((Math.random() * max) + min);

    console.log(numeroLetra) 
}
