let html =document.querySelector("html");
let header = document.querySelector(".rubrique");
let logo = document.querySelector("#logo");
let boutonLangue = document.querySelector("#pastille");
let section = document.querySelector(".section");
var buton = document.querySelector(".buton");
let slogan = document.querySelector("#slogan");
let compteur = document.querySelector(".chiffres");
let btn2 = document.querySelectorAll(".btn");
let sometxt = document.querySelector(".sometxt");
let fond1 = document.querySelector(".fond1");
let fond2 = document.querySelector(".fond2");
let fond3 = document.querySelector(".fond3");
let actu = document.querySelectorAll(".actu");
let column = document.querySelector(".column");
let burger = document.querySelector("#burger");
let defilant = document.querySelector(".defilant");
let burgeract = document.querySelector("#burgeract");
let actumob = document.querySelectorAll(".actumob");


burgeract.addEventListener("click", ()=>{
  defilant.classList.remove("active");
  html.classList.remove("activeunscroll");
})

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 2100) {
    sometxt.style.opacity = "1";
    sometxt.style.transform = "translateY(100%)";
    document.querySelector(".circlecontainer").classList.add("circleactive");
  } else {
    document.querySelector(".circlecontainer").classList.remove("circleactive");
    sometxt.style.opacity = "0";
    sometxt.style.transform = "translateY(-100%)";
  }
});


burger.addEventListener("click", ()=>{
  defilant.classList.add("active");
  html.classList.add("activeunscroll");
})

slogan.style.opacity = "1";
slogan.style.transform = "translateY(0)";

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 800) {
    header.style.backgroundColor = "rgba(255,255, 255, 1)";
    header.style.filter = "drop-shadow(0 0 0.75rem #CFCDCE)";
    header.style.color = "black";
    header.style.transform = "scale(0.7)";
    header.style.borderRadius = "10px";
    logo.src = "M2ilogo.png";
  }
  if (window.scrollY < 800) {
    header.style.backgroundColor = "rgba(255,255,255,0)";
    header.style.filter = "none";
    header.style.color = "white";
    header.style.transform = "scale(1)";
    header.style.borderRadius = "0px";
    logo.src = "logoblanc.png";
  }
});

var onvavoir = true;

boutonLangue.addEventListener("click", () => {
  if (onvavoir == true) {
    boutonLangue.style.left = "65%";
    onvavoir = false;
    console.log(onvavoir);
  } else {
    boutonLangue.style.left = "5%";
    onvavoir = true;
  }
});

buton.addEventListener("mouseenter", () => {
  buton.classList.add("butonhover");
});

buton.addEventListener("mouseleave", () => {
  buton.classList.remove("butonhover");
});

//ceci est pour le carousel

//var angle = 0;
//function galleryspin(sign) {
//spinner = document.querySelector("#spinner");
//if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
//spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
//}

//ceci est pour le carousel

//ceci est pour le compteur

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 1500) {
    compteur.style.opacity = "1";
    compteur.style.transform = "translateY(0)";
    document.documentElement.style.setProperty("--x", "50%");

    var i = 9000;
    var timer1 = setInterval(function () {
      document.querySelector("#compteur1").textContent = i++;
      if (i > 30) {
        clearInterval(timer1);
      }
    }, 0.00001);

    var o = 0;
    var timer2 = setInterval(function () {
      document.querySelector("#compteur2").textContent = o++;
      if (o > 30) {
        clearInterval(timer2);
      }
    }, 10);

    var y = 0;
    var timer3 = setInterval(function () {
      document.querySelector("#compteur3").textContent = y++;
      if (y > 60) {
        clearInterval(timer3);
      }
    }, 10);
  }
});
//ceci est pour le compteur

//ceci est pour le bouton 2
btn2.forEach((btns) => {
  let traitbtn = btns.querySelector(".traitbouton");
  btns.addEventListener("mouseover", () => {
    traitbtn.style.transform = "translateX(-10%)";
  });

  btns.addEventListener("mouseout", () => {
    traitbtn.style.transform = "translateX(-110%)";
  });
});

//ceci est pour le bouton 2

//test

//test

document.documentElement.style.setProperty("--x", "0vw");
document.documentElement.style.setProperty("--y", "0");

window.addEventListener("scroll", () => {
    let {scrollTop, clientHeight} = document.documentElement;

    let topElementToTopViewport = fond1.getBoundingClientRect().top;
    if (scrollTop>(scrollTop + topElementToTopViewport).toFixed()-clientHeight*0.5) {
      document.documentElement.style.setProperty("--x", "100vw");
    ;
    } else {
      document.documentElement.style.setProperty("--x", "0vw");
    }
  });

actu.forEach((actus) => {
  actus.addEventListener("mouseenter", () => {
    let two = actus.querySelector(".column");
    actus.classList.add("active");
    two.classList.add("columnactive");
    console.log("ca focntionne");
  });

  actus.addEventListener("mouseleave", () => {
    let two = actus.querySelector(".column");

    actus.classList.remove("active");
    two.classList.remove("columnactive");
    console.log("ca focntionne pas");
  });
});

// ceci est la version actu pour le mobile

actumob.forEach((actumobs) => {
  actumobs.addEventListener("mouseenter", () => {
    let two = actumobs.querySelector(".columnmob");
    actumobs.classList.add("activemob");
    two.classList.add("activemob");
    console.log("ca focntionne");
  });

  actumobs.addEventListener("mouseleave", () => {
    let two = actumobs.querySelector(".columnmob");
  actumobs.classList.remove("activemob");
  two.classList.remove("activemob");
    console.log("ca focntionne pas");
  });
});

//ceci est la version actu pour le mobile

document.documentElement.style.setProperty("--w", "0%");
document.documentElement.style.setProperty("--z", "0%");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 4500) {
    document.documentElement.style.setProperty("--w", "100%");
    document.documentElement.style.setProperty("--z", "100%");
  } else {
    document.documentElement.style.setProperty("--w", "0%");
    document.documentElement.style.setProperty("--z", "0%");
  }
});