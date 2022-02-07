var input = document.getElementById("dato")
var historial = document.getElementById("historial")
var clear = document.getElementById("clear")
var nums = document.getElementById("nums")
arrayhistorial = []


//Functions

var limpiar = ()=>{
    input.value = ''
}

// add Event Listener
clear.addEventListener('click',()=>{
    limpiar()
})

document.addEventListener('DOMContentLoaded',mostrarLS())
