//let arrayCoches=new Array(10);//creas las estructura y la logintud inicial...

let arrayCoches=["Opel","Mazda", "Citroen","Ford","Seat","Audi","Alfa Romeo"];

arrayCoches.sort(); //UNICODE
console.log(arrayCoches);
for (let i = 0; i < arrayCoches.length; i++) {
    if (arrayCoches[i]==="Citroen"){
        //continue;//salta el citroen
        break; //termina el for
    }    
        console.log(arrayCoches[i]);
}
let parrafo1=document.querySelector("#parrafo1") //llamo el elemento por id
let parrafo2=document.querySelector(".parrafo") //llamo el elemento por clase

//document.getElementById -> id             ----> document.querySelector("#id")
//document.getElementsByClassName ->clase   ----> document.querySelector(".clase")
//document.getElementsByName-> name         ----> document.querySelector('[name="nombreA"]')
//document.getElementsByTagName ->etiqueta  ----> document.querySelector("p")

//Mostrar texto -> innerHTML    o textContent
//aplicacion
parrafo1.innerHTML="Muestra lo que sale en el parrafo 1";
parrafo2.textContent="Muestra lo que sale en el parrafo 2";

//sin variable
document.querySelector("#parrafo2").innerHTML=arrayCoches[2];
document.querySelector("#parrafo2").style.backgroundColor="#000098";
document.querySelector("#parrafo2").style.color="azure";
parrafo1.style.color="#009900";
parrafo1.style.fontSize="30px";
parrafo1.style.fontFamily="Arial";

document.querySelector("#miDiv").classList.add("cuadro");

/*
document.querySelector("#parrafo2").classList.add("quitarFondo","cuadro") -> se puede agregar mas 
de una clase 
*/

/*
Crear hijos desde JavaScript  
*/
let flag=false;  //SUPER IMPORTANTE!!!
document.querySelector("#boton").addEventListener("click",function(){
if (!flag){
    let imagen=document.createElement("img");
    imagen.setAttribute("src","img/fondo.jpeg");  
    parrafo1.appendChild(imagen); //hasta que no se dice esta linea no se crea el elemento
 //   this.remove();//quitar el boton despues de ser precionado...  
    this.textContent="Quitar Imagen";
    flag=true;
}else{
    document.querySelector("img").remove();
    this.textContent="Ver Imagen";
    flag=false;
}
}); //en el caso de que solo se pulse a boton una sola vez



//crear elementos en un select
let select=document.querySelector("#losCoches");
for (let i = 0; i < arrayCoches.length; i++) {
    let option=document.createElement("option");
    option.textContent=arrayCoches[i];
    option.setAttribute("id",arrayCoches[i]);
    select.appendChild(option);    
}

let imagenC=document.querySelector("#imgCoche");
select.addEventListener("change",function(){
    document.querySelector("#selecionada").innerHTML="Opcion seleccionada->"+select.value;
    switch(select.value){
    case "Ford":{
               imagenC.setAttribute("src","img/coche-ford.webp");
               break;
               
        }
    }

})

//crear una coleccion
//Conjunto
let coleccion1=new Set([1,2,3,4,5,1]);

console.log(coleccion1);
//Mapa
let mapa1=new Map([[1,"Irina"],[2,"Manuel"],[3,"Juan"]]);
console.log(mapa1);

//recorrer un mapa para mostrar los valores

for (let [indice,valor] of mapa1) { //correcto
    console.log(`El índice es ${indice} y el nombre es ${valor}`);
}
for (let valor of mapa1) {//muestra todo el contenido de cada interaccion
    console.log(`El  nombre es ${valor}`);
}

//insertar un elemento al mapa
mapa1.set(4,"Tania");
for (let [indice,valor] of mapa1) { //correcto
    console.log(`El índice es ${indice} y el nombre es ${valor}`);
}
//eliminar elemento

mapa1.delete(1);

for (let [indice,valor] of mapa1) { //correcto
    console.log(`El índice es ${indice} y el nombre es ${valor}`);
}

//buscar
if(mapa1.has(3)){
    console.log("Encontro el 3");
}else{
    console.log("no lo encontro");
}
//Concatenar Arrays
let otrosCoches=["MG","Tesla","Lexus"]

let todosCoches=otrosCoches.concat(arrayCoches);
todosCoches.sort();
console.log(todosCoches);

//Copiar un arra-> copiarlo completo, o una parte, indicando desde donde y el numero de elementos

let cochesRaros=otrosCoches.slice();
console.log(cochesRaros);
let cochesRaros2=arrayCoches.slice(2,5); //ver libro pagina 92 oJo
console.log(cochesRaros2);
let indiceBuscado=arrayCoches.indexOf("Seat");
//te da como resultado el indice del buscado
console.log(indiceBuscado);
//lastIndexOf...devuelve el ultimo encontrado
let numeros=[1,2,3,2,4,5,2,7,6,4,5,2,10,11,15]; // el primero i=1 y el ultimo i=8
console.log("lastIndexOf "+numeros.lastIndexOf(2));

//si lo que buscas como resultado es si existe o no..true o false
console.log(arrayCoches.includes("Mercedes"));

//En los Arrays para conocer su longitud ...array.length.....pero en conjuntos es 
console.log(mapa1.size);

