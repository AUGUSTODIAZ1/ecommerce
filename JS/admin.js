//Obtener productos del localStorage
const storageProductsList = localStorage.getItem('products')
// Obtener productos del localStorage o establecer un arreglo vacío si no existe
let productsList = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

//Obtener usuarios del localStorage
const storageUserLogIn = localStorage.getItem('userLogIn')

// Función para cargar productos del Local Storage al cargar la página
function loadProductsFromLocalStorage() {
    const storageProductsList = localStorage.getItem('products');
    if (storageProductsList) {
        productsList = JSON.parse(storageProductsList);
        displayProducts();
    }
}
// Llama a la función para cargar productos al cargar la página
loadProductsFromLocalStorage();

// Función para mostrar los productos en la tabla
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';

    for (const product of productsList) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="d-none d-xl-table-cell"><img src="${product.image}"  alt="ProductImage" width="100" height="100"></td>
            <td class="d-none d-xl-table-cell">${product.id}</td>
            <td>${product.name}</td>
            <td class="d-none d-md-table-cell">${product.description}</td>
            <td>${product.price}</td>
            <td class="d-none d-xl-table-cell">${product.category}</td>
            <td class="d-none d-xl-table-cell">${product.stock}</td>
            <td>
            <button type="button" class="btn btn-secondary m-2" onclick="editProduct(${product.id})">
                <i class="fas fa-edit"></i> <!-- Icono de lápiz (editar) -->
            </button>
            <button type="button" class="btn btn-danger m-2" onclick="deleteProduct(${product.id})">
                <i class="fas fa-trash-alt"></i> <!-- Icono de tacho de basura (borrar) -->
            </button>
        </td>
        `;
        productList.appendChild(row);
    }
}

// Función para eliminar un producto
function deleteProduct(productId) {
    const index = productsList.findIndex(product => product.id === productId);
    if (index !== -1) {
        productsList.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(productsList));
        displayProducts();
    }
}

// Variable para rastrear el estado de edición o adición de productos
let isEditing = false;
let editProductIndex = -1

// Función para cargar los datos del producto en el formulario de agregar/editar producto
function editProduct(productId) {
    const productToEditIndex = productsList.findIndex(product => product.id === productId);
    if (productToEditIndex !== -1) {
        isEditing = true;
        editProductIndex = productToEditIndex;
        const productToEdit = productsList[editProductIndex];
        document.getElementById("product-name").value = productToEdit.name;
        document.getElementById("product-price").value = productToEdit.price;
        document.getElementById("product-category").value = productToEdit.category;
        document.getElementById("product-image").value = productToEdit.image;
        document.getElementById("product-description").value = productToEdit.description;
        document.getElementById("product-stock").value = productToEdit.stock;
        document.getElementById("submit-button").textContent = "Guardar Cambios";
        console.log(productToEdit); // Esto mostrará los datos del producto en la consola
    }
}

document.getElementById("add-product-form").addEventListener("submit", function (e) {
    const form = document.getElementById("add-product-form");
    if (!form.checkValidity()) {
        // Bootstrap se encargará de mostrar los mensajes de error.
        e.preventDefault();
        e.stopPropagation();
    } else {
        e.preventDefault();
        const productNameDOM = document.getElementById("product-name").value;
        const productPriceDOM = parseFloat(document.getElementById("product-price").value);
        const productCategoryDOM = document.getElementById("product-category").value;
        const productImageDOM = document.getElementById("product-image").value;
        const productDescriptionDOM = document.getElementById("product-description").value;
        const productStockDOM = parseFloat(document.getElementById("product-stock").value);

        if (isEditing && editProductIndex !== -1) {
            const updatedProduct = {
                id: productsList[editProductIndex].id,
                name: productNameDOM,
                price: productPriceDOM,
                category: productCategoryDOM,
                image: productImageDOM,
                description: productDescriptionDOM,
                stock: productStockDOM
            };
            productsList[editProductIndex] = updatedProduct;
            localStorage.setItem('products', JSON.stringify(productsList));
            isEditing = false;
            editProductIndex = -1;
            document.getElementById("submit-button").textContent = "Agregar Producto";
        } else {
            const productIdDOM = Math.floor(Math.random() * 1000);

            const newProduct = {
                id: productIdDOM,
                name: productNameDOM,
                price: productPriceDOM,
                category: productCategoryDOM,
                image: productImageDOM,
                description: productDescriptionDOM,
                stock: productStockDOM
            };
            productsList.push(newProduct);
            localStorage.setItem('products', JSON.stringify(productsList));
        }
        document.getElementById("add-product-form").reset();
        displayProducts();
    }
});
