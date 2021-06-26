    const button = document.querySelector(".accordion__list--button");
    const ul = document.querySelector(".accordion__list");
    const box = document.querySelector(".illustration__box");

    const toggleClass = (e) => {
        e.target.closest('button').classList.toggle("accordion__list--button--active");
        e.target.closest('button').parentElement.nextSibling.nextSibling.classList.toggle("accordion__list--answer-active");
        e.target.closest('button').previousSibling.previousSibling.classList.toggle("accordion__list--question-active");
        box.classList.toggle("illustration__box-active");
};


    ul.addEventListener('click', toggleClass)    
    