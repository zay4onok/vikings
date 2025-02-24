$(".heroes__list").slick({
  nextArrow: '<button type="button" class="slick-next"><img src="./img/arrow-right.svg" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="./img/arrow-left.svg" alt=""></button>',
});

const headerBtn = document.querySelector(".header__btn");
const headerMenu = document.querySelector(".menu__list");

headerBtn.addEventListener("click", onHeaderBtnClick);

function onHeaderBtnClick() {
  headerMenu.classList.toggle("menu__list--active");
}
