

// nav inyeccion home

const navContainer = document.getElementById("navInner") 

let navCont = document.createElement("div") 
navCont.className = "container-fluid";
navCont.innerHTML = `
<a class="navbar-brand" href="./register.html">
<img src="./img/167 sin título_20230903190706.png" class="logoNav" alt="">
</a>
<button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item m-xl-2">
      <a class="nav-link active text-light " aria-current="page" href="./register.html">Registrarse🖊️</a>
    </li>
    <li class="nav-item m-xl-2">
      <a class="nav-link active text-light" aria-current="page" href="./login.html">Inciar sesion🖊️</a>
    </li>
  </ul>
</div>`
navContainer.appendChild(navCont);