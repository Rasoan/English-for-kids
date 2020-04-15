let main_menu_switch = document.getElementById("main-menu-switch-js");
let main_menu_container = document.getElementById("main-menu-container-js");


main_menu_switch.addEventListener("click", element => {
  main_menu_switch.classList.toggle("main-menu-switch-active");
  main_menu_container.classList.toggle("main-menu-container-active");
});