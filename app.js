var dato = document.getElementById("dato")
var dato1 = document.getElementById("dato1")
var mostrarHistorial= document.getElementById("historial")
var igual = document.getElementById("igual")
historial = []



//FuncionesGuardado
var crearOperacion=(operacion)=>{
    var operaciones = {
        'operacion':operacion
    }
    historial.push(operaciones)
    return operaciones
}
var mostrarLS=()=>{
    mostrarHistorial.innerHTML = ''
    historial=JSON.parse(localStorage.getItem("historial"))
    historial.forEach(e => {
        mostrarHistorial.innerHTML += `<div><p>${e.operacion}</p></div>`
    });
}

var guardarLS = ()=>{
    localStorage.setItem('historial',JSON.stringify(historial))
    mostrarLS()
}






//EventListeners
igual.addEventListener('click',()=>{
    crearOperacion(dato.value)
    guardarLS()
})


document.addEventListener('DOMContentLoaded',mostrarLS())