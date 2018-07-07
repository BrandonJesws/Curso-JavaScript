'use strict'

var numero=100;

//for
/*
for(var i=0; i<=100; i++){
    console.log(i);

   // debugger;//Debugea 
}*/
//while
var year = 2018;
while (year <= 2051) {
    console.log("Estamos en el año:" +year);
    if(year == 2030){
        break;
    }
    year++;//si no seria infinito
}
//Do while
var years=30;
do{
    alert("solo cuando sea diferente a 20"),
    years--;
}while(years > 27)