
// let menuList = document.getElementById("menuList")
// menuList.style.maxHeight="0px"

// function toggleMenu(){
//     if (menu.style.maxHeight == "0px") {
//         menu.style.maxHeight="300px";
//     }
//     else{
//         menu.style.maxHeight="0px";
//     }
// }

hamburger = document.querySelector(".bx-menu");
hamburger.onclick = function () {
    menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}