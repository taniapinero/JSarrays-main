//variables-> nombre , utililza un espacio de memoria para guardar un valor

let alumno1="Juan Perez";
let alumno2="Marina Torres";
//..... para estructuras de datos -> se guardan en memoria como las variales
// se utilizan ARRAYS

//declaracion de un Array
let profesores=new Array(); //declarando la estructura de un array sin valores
let alumnos=["Juan Rodriguez","Marina Torres","Dani Lopez", "Tania Pinero", "Sergio Castro"]; 
alumnos[5]="Arantxa Gonzalez";
console.log(alumnos[3]);
console.log(alumnos);
//reemplazar un valor de en posicion específica, con invocarlo se puede cambiar.
alumnos[5]="Arantxa González García";
console.log(alumnos);

/**
 * ACTIVIDAD RESUELTA 3.1
 Crear un Array con 6 localidades y mostrar solo las de posiciones impares
 */

let localidades=["Alcázar de San Juan", "Argamasilla de Alba", "Mota del Cuervo", "Cinco Casas", "Quintanar de la Orden", "Tomelloso"];
let indice=0;
//para conocer en programacion JS la longitud (numero de elementos) de un array utilizamos el nombreArray.length.
while(indice<localidades.length){
    if (indice%2!=0){//si indice dividido entre dos el resto es diferente a 0, el indice es impar
        console.log(localidades[indice]); //se muestra la localidad de 
    }
    indice++;
}

/**
    RECORRER TODO EL ARRAY LOCALIDADES
*/
for (let index = 0; index < localidades.length; index++) {
    console.log(`Localidad ${index+1}-> ${localidades[index]}`);   
}



//Crear un Array Bidimensionales ...valores random del 1 al 10 (Notas);
//Crear 5 filas y 4 columnas
let arrayFC=new Array(5); //  el (5) indica la longitud del array que estamos definiendo
for (let i = 0; i < arrayFC.length; i++) {//recorremos las filas
    arrayFC[i]=new Array(4); //en este punto se crean las columnas a la fila i
    for (let y = 0; y < arrayFC[i].length; y++) {      //se recorren las columnas por esa fila 
        arrayFC[i][y]=parseInt(Math.random()*10);//crear un valor aleatorio y asignarlo al [fila][columna]
    }
}
console.log(arrayFC);


/**
 crea un cuadro (div) y un desplegable indicando los colores, y segun selecciones...va al array con
 el índice y cambia el color....
*/

let coloresRGB=["#f39c12", "#C0F312", "#12F3E5","#F312AF", "#F31212"];
let nombreRGB=["Naranja","Lima","Turquesa","Rosa", "Rojo"];
let colores=document.querySelector("#colores");
for (let i = 0; i < nombreRGB.length; i++) {
    let opcion=document.createElement("option");//creamos el option del select que tenemos en el HTML
    //le indicas con textContent que muestra en el select por 
    //cada opcion
    opcion.textContent=nombreRGB[i];
    //Se le agrega atributos
    opcion.setAttribute("value",i);
    colores.appendChild(opcion);
}
let contenedor=document.querySelector(".container");
//escuchamos el evento de cambio dentro del select para que cambie el color de fondo
colores.addEventListener("change",function(){
    contenedor.style.backgroundImage="none";
    contenedor.style.backgroundColor=coloresRGB[colores.value];
    contenedor.style.border="1px solid #fff";
    contenedor.style.borderRadius="35px";
    //si se selcciona el option de value=""...dale color y forma
    if (colores.value==""){
        contenedor.style.backgroundImage="url(../img/fondo.jpeg)"
    }    
})














