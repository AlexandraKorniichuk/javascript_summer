"use strict";
//варианты получения доступа к документу
//1 through name of tage
const title = document.querySelector("h1");
title.textContent = "Hello";
title.style.color = "yellow";
title.style.background = "red";

const list = document.querySelector("ul");
list.classList.add("myNewClass");
list.classList.remove("myNewClass");
const image = document.querySelector("img");
image.setAttribute("alt", "value");
image.src =
  "https://images.pexels.com/photos/1558916/pexels-photo-1558916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
image.width = 250;
// image.removeAttribute("width");

//2 through class
// const title = document.querySelector(".Main_Title");
// const title = document.getElementsByClassName("item");

//3 through identifier
// const title = document.querySelector("#title");
// const title = document.getElementById("title");

//4 through data atribute
// const title = document.querySelector('[data-action="action"]');
console.log(title);
console.dir(title);

//создание элементов
const newLi = document.createElement("li");
newLi.textContent = "4";
console.log(newLi);
list.appendChild(newLi); //добавился глобально
// list.prepend("some new elements in the begining");
// list.append("some new elements in the end");
// list.removeChild(newLi);
list.remove();

const newImage = image.cloneNode(true);
list.insertAdjacentElement("afterend", newImage);
