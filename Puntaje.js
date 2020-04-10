
var m3 = {
    hp: 425,
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
    hp: 650,
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
var carro = camarozl1;
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

alert("Tu carro " + carro.nombre + " tiene " + puntos);
