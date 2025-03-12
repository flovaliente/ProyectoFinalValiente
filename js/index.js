
const URL = "prendas.json"
const prendas = []
function obtenerPrendas(){
    fetch(URL)
    .then(response => response.json())
    .then(data => prendas.push(...data))
    .then(data => mostrarCardsPrendas(prendas))
}
obtenerPrendas()
/*
-------------------------------FUNCIONES AUXILIARES----------------------------
*/

//Función que busca una prenda por su id y la retorna
function buscarPrenda(id){
    let buscar = prendas.find(prenda =>prenda.id === parseInt(id))
    return buscar
}
/*
--------------------------------------FIN--------------------------------------
*/



//Función que nos carga las cards de las prendas que le pasamos
function mostrarCardsPrendas(prendas){
    prendas.forEach(prenda => {
        if(prenda.stock > 0){
            tableresponsive.innerHTML += retornoCard(prenda) 
        }
    })
    activarClickCarrito()
}



//Función que agrega prenda al carrito
function agregarAlCarrito(id){
    let prenda = buscarPrenda(id)
    if(prenda !== undefined){
        carrito.push(prenda)
        console.table(carrito)
    }
}

//Función que activa el click para agregar una prenda al carrito
function activarClickCarrito(){
    const buttons = document.querySelectorAll("button.btn-secondary")
    for(boton of buttons){
        boton.addEventListener("click", (e) => {
            agregarAlCarrito(e.target.id)
            guardarCarrito()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito.',
                timer: 1500
            })
        })
    }
}



function filtroNombre(){
    do{
        let buscar = prompt("Ingrese el nombre que desea buscar:").trim().toLowerCase()
        if(buscar != null){
            let resultado = prendas.filter((prenda) => prenda.nombre.toLowerCase().includes(buscar))
            if(resultado.length === 0){
                alert("❌El nombre ingresado no existe.")
            }else{
                console.table(resultado)
            }
        }else{
            alert("‼️Debe ingresar un nombre.")
        }
    }while(confirm("¿Desea filtrar nuevamente productos por su nombre?"))
}
