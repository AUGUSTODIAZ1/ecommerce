//Menu lateral
let menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(let x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=14;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let Boostrap = document.getElementById("Boostrap");
crearBarra(Boostrap);
let Git = document.getElementById("git");
crearBarra(Git);
let css = document.getElementById("Css");
crearBarra(css);
let react = document.getElementById("react");
crearBarra(react);

// cantidad de barritas que se van a ir pintando 
let contadores = [-1,-1,-1,-1,-1,-1];
// ejecutar animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    let habilidades = document.getElementById("habilidades");
    let distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 14, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 8, 1, intervalJavascript);
        },100);
        const intervalBoostraps = setInterval(function(){
            pintarBarra(Boostrap, 14, 2, intervalBoostraps);
        },100);
        const intervalGit = setInterval(function(){
            pintarBarra(Git, 13, 3, intervalGit);
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 14, 4, intervalCss);
        },100);
        const intervalreact = setInterval(function(){
            pintarBarra(react, 1, 5, intervalreact);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#409dc9";
    }else{
        clearInterval(interval)
    }
}

//scrol del mouse para aplicar la animación 
window.onscroll = function(){
    efectoHabilidades();
}