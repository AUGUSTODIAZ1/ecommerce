const cardContainer = document.getElementById("container")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
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
    carritoCounter();
    saveLocal();
  });
});
      // LOCAL STORAGE
// set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
// SECCION CARRITO 
//creacion del modal del carrito
const pintarCarrito = () => {
  
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex"
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-title"> Carrito </h1> 
  `;
  //boton para cerrar el modal del carrito
  modalContainer.append(modalHeader);
  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "X";
  modalbutton.className = "modal-header-button";

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
      <h3 class="fs-4">${product.nombre}</h3>
      <p class="fs-3">${product.precio} USD</p>
      <span class="restar fs-3">-</span> 
      <p class="fs-4">Cantidad: ${product.cantidad}</p>
      <span class="sumar fs-3">+</span>
      <p class="fs-4">Total: ${product.cantidad * product.precio} USD </p>
      <span class="delete-product fs-3"> ✖ </span>

      
    `;
      // SUMA Y RESTA DE UNIDADES
    modalContainer.append(carritoContent);
    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (product.cantidad !==1 ){
        product.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    })
    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveLocal();
      pintarCarrito();
    });
    let eliminar = carritoContent.querySelector(".delete-product");
    eliminar.addEventListener("click", () =>{
       eliminarProducto(product.id);
    });
  });
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
const eliminarProducto = (id) => {
  const founId = carrito.find((element) => element.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== founId
  });
  carritoCounter();
  saveLocal();
  pintarCarrito();
  };

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
  cantidadCarrito.innerHTML = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();