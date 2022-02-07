var dato = document.getElementById("dato")
var dato1 = document.getElementById("dato1")

var mostrarHistorial= document.getElementById("historial")
var igual = document.getElementById("igual")
historial = []
nums = []
let values = 0
//BototnesOperaciones
var suma= document.getElementById('suma')
var resta = document.getElementById('resta')
var mult= document.getElementById('mult')
var division = document.getElementById('division')
//


//Operaciones

 var opSuma = ()=>{
    if(dato1.textContent == ''){
        dato1.textContent += `${dato.value}`
    }
    else{
        dato1.textContent += ` + ${dato.value}`
    }
    values += parseInt(dato.value)
    
    return values
    };
var opResta = ()=>{
    
    dato1.textContent += `- ${dato.value}`
    values -= parseInt(dato.value) 
    return values

}

var opMult =()=>{
    if(dato1.textContent == ''){
        dato1.textContent += `${dato.value}`
    }
    else{
        dato1.textContent += `* ${dato.value}`
    }
    values *= parseInt(dato.value)
    return values
}
var opDiv =()=>{
    if(dato1.textContent == ''){
        dato1.textContent += `${dato.value}`
    }
    else{
        dato1.textContent += `/ ${dato.value}`
    }
    values /= parseInt(dato.value)
    return values
}




//
var limpiar = ()=>{
    dato.value = ''
}


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
    if (historial == null){
        historial = []
    }else{
        historial.forEach(e => {
            mostrarHistorial.innerHTML += `<div><p>${e.operacion}</p></div>`
        });

    }
}

var guardarLS = ()=>{
    localStorage.setItem('historial',JSON.stringify(historial))
    mostrarLS()
}


//EventListeners
suma.addEventListener('click',()=>{
    opSuma()
    limpiar()

})
resta.addEventListener('click',()=>{
    opResta()
    limpiar()
})
mult.addEventListener('click',()=>{
    opMult()
    limpiar()
})
division.addEventListener('click',()=>{
    opDiv()
    limpiar()
})



igual.addEventListener('click',()=>{
    crearOperacion(`${dato1.textContent} = ${values}`)
    values = 0
    guardarLS()
    limpiar()
    dato1.textContent = ''
})


document.addEventListener('DOMContentLoaded',mostrarLS())