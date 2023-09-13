nav
document.addEventListener("keyup", e=> {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll(".articulo").forEach(product =>{
            product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?product.classList.remove("filtro")
            :product.classList.add("filtro")
        })
    }
  })

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    document.querySelectorAll(".articulo").forEach((product) => {
      product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? product.classList.remove("filtro")
        : product.classList.add("filtro");
    });
  }
});


