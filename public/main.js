// Обработчик для скролла
window.addEventListener("scroll", () => {
    let goTopBtn = document.querySelector('.go_top');

    if (goTopBtn) { // Проверяем, что элемент существует
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        goTopBtn.classList.toggle("hide", scrollTop < 10);
    }
});

window.onload = function () {
    const goTopBtn = document.querySelector('.go_top');
    goTopBtn.addEventListener("click", () =>{
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
};