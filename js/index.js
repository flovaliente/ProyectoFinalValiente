const carrito = []
const prendas = [{id: 1, nombre: "Camisa Mango", precio: 2100, categoria:"camisa", imagen: "img/prod1.jpg",stock: 2},
                    {id: 2, nombre: "Pantalon Hanna", precio: 3200, categoria:"pantalon", imagen: "img/prod2.jpg",stock: 4},
                    {id: 3, nombre: "Campera Nala", precio: 3600, categoria:"campera", imagen: "img/prod3.jpg", stock: 5},
                    {id: 4, nombre: "Blusa Flowers", precio: 2800, categoria:"blusa", imagen: "img/prod4.jpg", stock: 4},
                    {id: 5, nombre: "Camisa Colors", precio: 3250, categoria:"camisa", imagen: "img/prod5.jpg", stock: 2},
                    {id: 6, nombre: "Red Brisa", precio: 3450, categoria:"buzo", imagen: "img/prod6.jpg", stock: 3},
                    {id: 7, nombre: "Pantalon Leah", precio: 4500, categoria:"pantalon", imagen: "img/prod7.jpg", stock: 6},
                    {id: 8, nombre: "Jean Cava", precio: 3900, categoria:"pantalon", imagen: "img/prod8.jpg", stock: 7},
                    {id: 9, nombre: "Vestido Shan", precio: 8100, categoria:"vestido", imagen: "img/prod9.jpg", stock: 5},
                    {id: 10, nombre: "Vestido Lio", precio: 7650, categoria:"vestido", imagen: "img/prod10.jpg", stock: 5},
                    {id: 11, nombre: "Chaleco Amade", precio: 3900, categoria:"chaleco", imagen: "img/prod21.jpg", stock: 4},
                    {id: 12, nombre: "Buzo Ibiza", precio: 3590, categoria:"buzo", imagen: "img/prod22.jpg", stock: 7},
                    {id: 13, nombre: "Pollera Alma", precio: 2990, categoria:"pollera", imagen: "img/prod23.jpg", stock: 7},
                    {id: 14, nombre: "Pantalon Chick", precio: 4200, categoria:"pantalon", imagen: "img/prod25.jpg", stock: 4},
                    {id: 15, nombre: "Bermuda Golden", precio: 4550, categoria:"bermuda", imagen: "img/prod11.jpg", stock: 5},
                    {id: 16, nombre: "Chaleco Denver", precio: 3350, categoria:"chaleco", imagen: "img/prod26.jpg", stock: 7},
                    {id: 17, nombre: "Bota Tracto", precio: 8200, categoria:"bota", imagen: "img/prod13.jpg", stock: 6},
                    {id: 18, nombre: "Bota Flanco", precio: 9100, categoria:"bota", imagen: "img/prod24.jpg", stock: 5},
                    {id: 19, nombre: "Bota Cairo", precio: 7150, categoria:"bota", imagen: "img/prod14.jpg", stock: 5},
                    {id: 20, nombre: "Sandalia Red - Rojo", precio: 6990, categoria:"sandalia", imagen: "img/prod16.jpg", stock: 4},
                    {id: 21, nombre: "Sandalia Red - Marrón", precio: 6990, categoria:"sandalia", imagen: "img/prod17.jpg", stock: 6},
                    {id: 22, nombre: "Sandalia Gigi", precio: 6250, categoria:"sandalia", imagen: "img/prod18.jpg", stock: 4},
                    {id: 23, nombre: "Bota Tracto Mini", precio: 7800, categoria:"bota", imagen: "img/prod19.jpg", stock: 2},
                    {id: 24, nombre: "Bota Plata", precio: 9590, categoria:"bota", imagen: "img/prod20.jpg", stock: 8}]



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

//Función que muestra en pantalla la card de una prenda
function retornoCard(prenda){
    return  `<div class="container-products" id="${prenda.id}">
                <div class="products">
                    <a href="./producto.html"><img src="${prenda.imagen}" alt="${prenda.nombre}"></a>
                    <div class="product-description">
                        <h3>${prenda.nombre}</h3>
                        <span >$ ${prenda.precio}</span>
                    </div>
                    <button class="buy-button" id="${prenda.id}">Comprar</button>
                </div>
            </div>`
}

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
    const buttons = document.querySelectorAll("button.buy-button")
    for(boton of buttons){
        boton.addEventListener("click", (e) => {
            agregarAlCarrito(e.target.id)
            guardarCarrito()
        })
    }
}

//Función que guarda en el local storage lo que está en el carrito
function guardarCarrito(){
    if(carrito.length > 0){
        localStorage.setItem("LSCarrito", JSON.stringify(carrito))
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

/*function retornoMenu(){
    return `<nav class="main-nav" id="main-nav">
                <ul class="menu">
                    <li class="menu__item"><a href="" class="menu__link">HOME</a> </li>
                    <li class="menu__item"><a href="" class="menu__link">NEW</a> </li>
                    <li class="menu__item"><a href="" class="menu__link">SALE</a> </li>
                    <li class="menu__item"><a href="" class="menu__link">SHOP</a> </li>
                </ul>
            </nav>`
}

function activarClickFilter(){
    const filtro = document.getElementById("btnFilter")
    filtro.addEventListener("click", (e)=>{
        retornoMenu(e)
    })
}*/
mostrarCardsPrendas(prendas)