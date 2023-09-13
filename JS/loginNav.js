

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
  <div class="input-wrapper">
  <button class="icon"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
    </svg>
  </button>
  <input placeholder="search.." class="input" name="text" type="text">
</div>

</div>`
navContainer.appendChild(navCont);