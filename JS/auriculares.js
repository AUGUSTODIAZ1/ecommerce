const cardContainer = document.getElementById("container")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
let carrito = []

//metodo para recorrer el array de los productos
auriculares.forEach((zapas) => {
  //crear cards de los productos e inyectarlas en un div
  let content = document.createElement("div");
  content.className = "animate__animated animate__zoomIn"
  content.innerHTML = `
  <div class="row mb-5 articulo">
  <div class="divPrinc d-flex align-items-center bg-white col-lg-6 mt-5 ">
  <img class="imagenPrinc m-auto" src="${zapas.imagen1}" alt="">
  </div>
  <div id="divText" class="mt-5 divSecond col-lg-6 text-center">
      <h1 class="text-dark text-bold mt-5"> ${zapas.nombre} </h1>
      <p class="text-dark"> ${zapas.descripcion}</p>
      <h5> ${zapas.precio} USD </h5>
      
      <div class="row container align-items-center">
          <div class="col-lg-5 m-2"> <img class="images" src="${zapas.imagen2}" alt="">
          </div>
          <div class="col-lg-5 m-2"> <img class="images " src="${zapas.imagen3}" alt="">
          </div>
          <div class="col-lg-5 m-2"> <img class="images " src="${zapas.imagen4}" alt="">
          </div>
          <div class="col-lg-5 m-2"> <img class="images " src="${zapas.imagen5}" alt="">
          </div>
          <div class="text-center">
          <button id="btn-comprar" class="comprar mt-5 mb-4 btn btn-primary w-50">Comprar</button>
          </div>
          </div>
          </div>
          </div>
          `
  cardContainer.appendChild(content);

  let comprar = content.querySelector("#btn-comprar")

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatZapas) => repeatZapas.id === zapas.id);
    if(repeat) {
      carrito.map((prod) => {
        if (prod.id === zapas.id) {
          prod.cantidad++;
        }
      }); 
    } else {
      carrito.push({
        id: zapas.id,
        img: zapas.imagen2,
        nombre: zapas.nombre,
        precio: zapas.precio,
        cantidad: zapas.cantidad,
      });
    }
    console.log(carrito);
  });
});

// SECCION CARRITO

const pintarCarrito = () => {
  
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex"
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-title fs-4 mt-3"> Tu carrito de compras </h1> 
  `;
  //boton para cerrar el modal del carrito
  modalContainer.append(modalHeader);
  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button fs-4 mt-3";

  modalbutton.addEventListener("click", () =>{
    modalContainer.style.display = "none";
  })
  modalHeader.append(modalbutton);
  
  //inyectamos los productos al modal del carrito
  carrito.forEach((product) => {

    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content animate__animated animate__zoomIn"
    carritoContent.innerHTML = `
      <img  src="${product.img}">
      <h3 class="fs-6">${product.nombre}</h3>
      <p>${product.precio} USD</p>
      <p>Cantidad: ${product.cantidad}</p>
      <p>Total: ${product.cantidad * product.precio} USD </p>
    `;
    modalContainer.append(carritoContent);

    //creamos el boton para eliminar los productos
    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar)
    eliminar.addEventListener("click", eliminarProducto);
  })
  //creamos el footer del modal que lleva el total a pagar
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  
  const totalBuying = document.createElement("div")
  totalBuying.className = "total-content"
  totalBuying.innerHTML = `
    Total a pagar: ${total}USD
    <br>
    <button class="btn btn-primary"> <a href="./error.html" class="text-decoration-none text-light"> Realizar compra </a> </button>  
  `
   modalContainer.append(totalBuying) 
}
// al boton de carrito de asignamos la funcion de pintar el carrito
verCarrito.addEventListener("click", pintarCarrito);

//le asignamos la funcion al boton de eliminar los productos
const eliminarProducto = () => {
  const founId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== founId
  });
    
  pintarCarrito()
};