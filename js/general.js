let carrito = JSON.parse(localStorage.getItem("LSCarrito")) || [];

//Función que muestra en pantalla la card de una prenda
function retornoCard(prenda){
    return  `<div class="container-products" id="${prenda.id}">
                <div class="products">
                    <a href="./producto.html"><img src="${prenda.imagen}" alt="${prenda.nombre}"></a>
                    <div class="product-description">
                        <h3>${prenda.nombre}</h3>
                        <span >$ ${prenda.precio}</span>
                    </div>
                    <button class="btn-secondary" id="${prenda.id}">COMPRAR</button>
                </div>
            </div>`
}

//Función que muestra la lista de productos en el carrito con su respectiva info.
function retornoCheckout(carrito){
    console.log(carrito);
    return `<li class="cart-item" id="${carrito.id}">
              <div class="cart-item-info">
                <img src="${carrito.imagen}" alt="Camisa Mango" class="cart-item-img">
                <div class="cart-item-description">
                  <h3>${carrito.nombre}</h3>
                  <span>Art: CAM-MANG-554</span>
                </div>
              </div>
              <div class="cart-item-quantity">
                <button class="quantity-btn">-</button>
                <span>1</span>
                <button class="quantity-btn">+</button>
              </div>

              <div class="cart-item-price">
                <span class="sim">$ UYU </span>
                <span class="amount" id="amount">${carrito.precio}</span>
                <a id="cart-data"><i class="fa-regular fa-trash-can" id="${carrito.id}"></i></a>
              </div>
            </li>`
}

//Función que guarda en el local storage lo que está en el carrito
function guardarCarrito(){
    if(carrito.length > 0){
        localStorage.setItem("LSCarrito", JSON.stringify(carrito))
    }else{
        localStorage.clear()
    }
}

//Función que lee el contenido del carrito de local storage y lo recupera, guardandolo en carrito
function recuperarCarrito(){
    const carritoARecuperar = JSON.parse(localStorage.getItem("LSCarrito"))
    if(carritoARecuperar.length !== 0){
        carrito.push(...carritoARecuperar)
        console.table(carrito)
    }
}