const spanTotCarr = document.querySelector("span#amount");
const spanTotCarr2 = document.querySelector("span#amounts");


function retornoCarritoVacio(){
    return `<h3 class="vacio">El carrito está vacío</h3>`
}



function mostrarCarrito(carrito){
    console.log("Ejecutando mostrarCarrito. Carrito actual:", carrito);
    cartItems.innerHTML = "";
    if(carrito.length != 0){
        carrito.forEach(prenda => {
            cartItems.innerHTML += retornoCheckout(prenda);
        });
        activarClickBorrarDelCarrito();
        spanTotCarr.innerHTML = mostrarTotalCarrito();
        spanTotCarr2.innerHTML = mostrarTotalCarrito();
    }else{
        cartItems.innerHTML= retornoCarritoVacio()
        spanTotCarr.innerHTML = "0";
        spanTotCarr2.innerHTML = "0";
    }
    
}
mostrarCarrito(carrito);




function activarClickBorrarDelCarrito(){
    const buttons = document.querySelectorAll("#cart-data i.fa-regular");
    console.log(buttons);
    for(boton of buttons){
        boton.addEventListener("click", (e) => {
            let indice = carrito.findIndex(prenda => prenda.id === parseInt(e.target.id))
            carrito.splice(indice,1)
            guardarCarrito()
            console.log(carrito)
            mostrarCarrito(carrito)
        })
    }
}

// Funcion que suma el precio de todos los productos en el carrito
function mostrarTotalCarrito(){
    return carrito.reduce((acc, prenda) => acc + prenda.precio, 0)
}

function finCompra(){
    const buttons = document.querySelectorAll("a.continue-btn ")
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