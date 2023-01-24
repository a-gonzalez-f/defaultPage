const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');
bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
});

function modo() {
    var modo = document.getElementById("bdark");
    if (modo.innerHTML === "MODO OSCURO") {
      modo.innerHTML = "MODO CLARO";
    } else {
      modo.innerHTML = "MODO OSCURO";
    }
  }


function mostrari (){
    var info =document.getElementById('infotexto');
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
        alert('AVISO: \n Se mostrará la información personal');
    }
    var botoni = document.getElementById("mostrari");
    if (botoni.innerHTML === "Mostrar") {
        botoni.innerHTML = "Ocultar";
    }
    else {
        botoni.innerHTML = "Mostrar"
    }
}

function mostrart (){
    var infot =document.getElementById('terciariotext');
    if (infot.style.display === "block") {
        infot.style.display = "none";
    } else {
        infot.style.display = "block";
    }
    var flechat = document.getElementById("flechat");
    if (flechat.style.rotate === "180deg") {
        flechat.style.rotate = "0deg";
    }
    else {
        flechat.style.rotate = "180deg"
    }
}

function mostrarp (){
    var infop =document.getElementById('posgradostext');
    if (infop.style.display === "block") {
        infop.style.display = "none";
    } else {
        infop.style.display = "block";
    }
    var flechap = document.getElementById("flechap");
    if (flechap.style.rotate === "180deg") {
        flechap.style.rotate = "0deg";
    }
    else {
        flechap.style.rotate = "180deg"
    }
}

const btnMenu =document.querySelector("#btnMenu")
const menu = document.querySelector("#menu")
btnMenu.addEventListener("click",function(){
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");   
            }   else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }   
        }
    });
}