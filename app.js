    const button = document.querySelector(".accordion__list--button");
    const answer = document.querySelector(".accordion__list--answer");
    const ul = document.querySelector(".accordion__list");
    const header = document.querySelector(".accordion__list--header");
    const paragraph = document.querySelector(".accordion__list--paragraph");
    const main = document.querySelector(".card");

    const toggleClass = (e) => {
        e.target.closest('button').classList.toggle("accordion__list--button--active");
        e.target.closest('button').parentElement.nextSibling.nextSibling.classList.toggle("accordion__list--answer-active");

        };


    ul.addEventListener('click', toggleClass)    
    