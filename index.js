
let brandList = document.querySelector('.brand-list');
let brandButton = document.querySelector('.brand-button');
let brandSwiper;

brandButton.addEventListener('click', function () {
    if (brandButton.textContent === 'Показать все') {
        brandList.classList.add('brand-list--expanded');
        brandButton.textContent = 'Скрыть';
    } else {
        brandList.classList.remove('brand-list--expanded');
        brandButton.textContent = 'Показать все';
    }
});

function toggleSwiper() {
    if (window.innerWidth <= 767) {
        if (!brandSwiper) {
            brandSwiper = new Swiper('.brand-list', {
                slidesPerView: 'auto',
                spaceBetween: 16
            });
        }
    } else {
        if (brandSwiper) {
            brandSwiper.destroy(true, true);
            brandSwiper = undefined;
        }
    }
}

toggleSwiper();

window.addEventListener('resize', toggleSwiper);
