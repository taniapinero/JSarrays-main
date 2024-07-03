let equipos=["R. Madrid","Girona","Barcelona","Atlético","Villarreal","Athletic","Real Sociedad","Betis","Sevilla","Celta"]; //Nombre 
let datosEquipo=[[87,26,598,368,67,4],[85,46,484,406,75,1],[79,44,595,412,85,2],[70,43,481,438,82,5],[65,65,469,488,102,8],[61,37,463,511,75,5],[51,39,461,604,98,2],[48,45,492,429,85,3],[48,54,490,477,108,4],[46,57,472,462,62,5]];
let equipoGanador=0;
for (let i = 0; i < datosEquipo.length; i++) {
    if (datosEquipo[i][0]>datosEquipo[equipoGanador][0]){  
    //se compara los datos de la columna 0 que es la de los puntos de cada uno equipos y se almacena los puntos mas altos en la variable equipoGanador
    equipoGanador=i;
    }    
}

//una vez definido todo, lo muestro en una tabla en el front
let tabla=document.querySelector("table");
for (let index = 0; index < equipos.length; index++) {
    let fila = document.createElement("tr");
    tabla.appendChild(fila);
    // Añade el nombre del equipo en la primera columna
    let columnaEquipo = document.createElement("td");
    columnaEquipo.textContent = equipos[index];
    fila.appendChild(columnaEquipo);

    // Añade los datos del equipo en las siguientes columnas
    for (let c = 0; c < datosEquipo[index].length; c++) {
        let columna = document.createElement("td");
        columna.textContent = datosEquipo[index][c];//insertamos en el html en la fila(index) columan(c)
        fila.appendChild(columna);
    }
}
document.querySelector("#equipoGanador").textContent=equipos[equipoGanador];
document.querySelector("#")



