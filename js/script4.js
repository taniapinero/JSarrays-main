//para insertar al final del array un elmento
// push-> nombreArray.push(elementoNuevo)

let equipos=["R. Madrid","Girona","Barcelona","Atlético","Villarreal","Athletic","Real Sociedad","Betis","Sevilla","Celta"]; //Nombre 
equipos.push("Tomelloso");

console.log(equipos);
//insertar al principio......
equipos.unshift("Alcazar de San Juan");

//crear multiplos de 5 del 0 al 100
for (let index = 0; index < 15; index++) {
   let numero=parseInt(Math.random()*21)*5;
console.log(numero);    
}

