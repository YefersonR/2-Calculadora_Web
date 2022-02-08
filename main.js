var input = document.getElementById("dato")
var historial = document.getElementById("historialcontent")
var clear = document.getElementById("clear")
var clearvalue = document.getElementById("c")
var nums = document.querySelectorAll('button')
var res = document.getElementById("res")
arrayhistorial = []
var operaciones = {
    numero1 :0,
    numero2:0,
    operador : ''
}

const resultado =()=> {
    if(operaciones.operador == '+'){
        return parseInt(operaciones.numero1) + parseInt(operaciones.numero2)
    }
    if(operaciones.operador == '-'){
        return operaciones.numero1 - operaciones.numero2
    }
    if(operaciones.operador == '/'){
        return operaciones.numero1 / operaciones.numero2
    }
    if(operaciones.operador == '*'){
        return operaciones.numero1 * operaciones.numero2
    }
    
}
//Asignar valores para la operacion
var valores = ()=>{
    if(operaciones.numero1 == 0)
    {
        operaciones.numero1 =input.value
    }
    else{
        operaciones.numero2 =input.value
    }
}
//Asignar la operacion que se mostrara en pantalla
var crearOperacion=()=>{
    var operacionesres = {
        'operacion': `${operaciones.numero1} ${operaciones.operador} ${operaciones.numero2} = ${resultado()}`
    }
    arrayhistorial.push(operacionesres)
}

//Reiniciar valores
var limpiar = ()=>{
    input.value = 0
    operaciones.numero1 = 0 
    operaciones.numero2 = 0
    operaciones.operador = ''
}

//Asignarle los datos al LocalStorage
var guardarLS = ()=>{
    localStorage.setItem('historial',JSON.stringify(arrayhistorial))
    mostrarLS()
}
//Tomar datos del LocalStorage y mostrarlos en pantalla
var mostrarLS=()=>{
    historial.innerHTML = ''
    arrayhistorial=JSON.parse(localStorage.getItem("historial"))
    if (arrayhistorial == null){
        arrayhistorial = []
    }else{
        arrayhistorial.forEach(e => {
            historial.innerHTML += `<div><p>${e.operacion}</p></div>`
        });
    }
}
//Functions
// add Event Listener


//aqui esta la magia XD
nums.forEach(button => {
    button.addEventListener('click',()=>{
        const operator = button.innerHTML
        if(operator == 'C'){
            limpiar()
        }
        else if(operator == '+' ){
            
            valores()
            input.value = 0
           operaciones.operador = operator

            console.log(resultado)
        }
        else if(operator == '-' ){
            valores()        
            input.value = 0
            operaciones.operador = operator
    
        }
        else if(operator == '*' ){
            valores()
            input.value = 0
           operaciones.operador = operator
            
        }
        else if(operator == '/' ){            
            valores()
            input.value = 0
            operaciones.operador = operator
           
        }
        else if(operator == '='){
            if(input.value != 0 ){
                valores()
                crearOperacion()
                console.log(operaciones)
                limpiar()
                guardarLS()

            }
        }
        else{
            if(operator !== 0){
                input.value += operator
            }
        }
    })
    
});


// Limpiar el historial
clear.addEventListener('click',()=>{
    historialcontent.innerText =''
    arrayhistorial = []
    guardarLS()
})

//Cargar el historial al iniciar la pagina
document.addEventListener('DOMContentLoaded',mostrarLS())
