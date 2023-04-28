const mediaQuery = window.matchMedia('(max-width: 470px)');
const mediaQuery2 = window.matchMedia('(max-width: 450px)');
const element = document.querySelectorAll(".evaluation-cards div h4 br");
const element2 = document.querySelectorAll(".evaluation-heading h2 br");
console.log(element2);

mediaQuery.addEventListener('change', function () {
    if(mediaQuery.matches){
        for (let elem of element) {
            console.log(elem);
            elem.remove();
        }
    }
})

mediaQuery2.addEventListener('change', function () {
    if(mediaQuery2.matches){
        for (let elem of element2) {
            console.log(elem);
            elem.remove();
        }
    }
})

const translationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('translation-show');
        } else {
            entry.target.classList.remove('translation-show');
        }
    });
});

const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('scale-show');
        } else {
            entry.target.classList.remove('scale-show');
        }
    });
});

const translationElements = document.querySelectorAll(".translation-animation");
const scaleElements = document.querySelectorAll(".scale-animation");
translationElements.forEach((el) => translationObserver.observe(el));
scaleElements.forEach((el) => scaleObserver.observe(el));
