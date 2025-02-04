const headerBtn = document.querySelector(".header__btn");
const headerMenu = document.querySelector(".menu__list");

headerBtn.addEventListener("click", onHeaderBtnClick);

function onHeaderBtnClick() {
  headerMenu.classList.toggle("menu__list--active");
}
