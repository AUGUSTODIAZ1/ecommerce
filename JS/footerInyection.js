const footerContainer = document.getElementById("footerInyeccion") 

let footerCont = document.createElement("div") 
 footerCont.innerHTML = `<div class="logo">
 <a href="./index.html"><img src="./Images/167 sin título_20230903190706.png" alt=""></a>
</div>
<div class="container__footer">
 <div class="box__footer">
     <div class="terms">
         <p>Nuestro principal objetivo de nuestra tienda ecommerce es ofrecer a los clientes la comodidad de comprar productos o servicios en línea de manera rápida y segura. Esto incluye: <b>Accesibilidad</b> Permitir a los clientes acceder a una variedad de productos en cualquier momento a través de Internet.</p>
     </div>
 </div>
 <div class="box__footer">
     <h2>Sugerencias</h2>
     <a href="./error.html">Productos estrellas</a>
     <a href="./error.html">Cursos Marketing</a>
     <a href="./error.html">IOS Productos</a>
     <a href="./error.html">Android Productos</a>
 </div>
 <div class="box__footer">
     <h2>Compañia</h2>
     <a href="./nosotros.html">Acerca de Nosotross</a>
     <a href="./error.html">Almacenes</a>
     <a href="./error.html">Envios Full</a>
     <a href="./error.html">Servicios</a>              
 </div>
 <div class="box__footer">
     <h2>Redes Sociales</h2>
     <a href="https://www.facebook.com/" class="face" target="_blank"><i class="fab fa-facebook-square"></i> Facebook</a>
     <a href="https://twitter.com/?lang=es" class="twitter" target="_blank"><i class="fab fa-twitter-square"></i> Twitter</a>
     <a href="https://www.linkedin.com/feed/" class="link" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
     <a href="https://www.instagram.com/" class="insta" target="_blank"><i class="fab fa-instagram-square"></i> Instagram</a>
 </div>
</div>
<div class="box__copyright">
 <a href="./error.html">
         <img src="./Images/payment.png" alt="Pagos">
 </a>
 <hr>
 <p>Todos los derechos reservados © 2023 <b>AllWaveCommerce</b></p>
</div>
    
 `
footerContainer.appendChild(footerCont);
