/*1- Realizar un programa en el que el usuario introduzca el número del mes (1 al 12)
y se muestra al final si ese mes es de 30 o 31 días.*/

let month = prompt ("Ingresa un numero del 1 al 12 para saber los dias que tiene el mes")

if (month===4 || month===6 || month===9 || month===11 ){
    console.log("el mes es de 30 días")
    alert("el mes es de 30 días")

}else if (month===1 || month===3 || month===7 || month===8 || month===10 || month===12){
    alert("el mes es de 31 días")
    console.log("el mes es de 31 días")
}else if(month===2){
    alert("el mes es de 28 días")
    console.log("el mes es de 28 días")
}