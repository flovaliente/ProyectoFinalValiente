const spanTotCarr = document.querySelector("span#totCarr")

function retornoCarritoVacio(){
    return `<h3 class="vacio">El carrito está vacío</h3>`
}

function mostrarCarrito(carrito){
    contCarr.innerHTML = ""
    if(carrito.length != 0){
        carrito.forEach(prenda => {
            contCarr.innerHTML += retornoCheckout(prenda) 
        });
        activarClickBorrarDelCarrito()
        spanTotCarr.innerHTML = "$ " + mostrarTotalCarrito()
    }else{
        contCarr.innerHTML= retornoCarritoVacio()
        spanTotCarr.innerHTML = "$ 0"
    }
    
}
mostrarCarrito(carrito);

//Activo el click para volver a la pantalla de tienda
const buttons = document.querySelector("i.back-to-store")
buttons.addEventListener("click", (e)=> {location.href = "index.html"})



function activarClickBorrarDelCarrito(){
    const buttons = document.querySelectorAll("button.fa-regular")
    for(boton of buttons){
        boton.addEventListener("click", (e) => {
            let indice = carrito.findIndex(prenda => prenda.id === parseInt(e.target.id))
            carrito.splice(indice,1)
            almacenarCarrito()
            mostrarCarrito(carrito)
        })
    }
}

function mostrarTotalCarrito(){
    return carrito.reduce((acc, prenda) => acc + prenda.precio, 0)
}
function finCompra(){
    const buttons = document.querySelectorAll("button.fin")
    for(boton of buttons){
        boton.addEventListener("click", (e) => {
            if(carrito.length > 0){
                Swal.fire(
                    'Compra realizada con éxito',
                    'Se le enviará un correo con el detalle',
                    'success'
                )
            }else{
                Swal.fire(
                    'El carrito está vacío',
                    'Primero debe agregar productos al carrito',
                    'error'
                )
            }
            
            localStorage.removeItem("LSCarrito")
            carrito = []
            mostrarCarrito(carrito)
            spanTotCarr.innerHTML = "$ 0"
        })
    }
}
finCompra()