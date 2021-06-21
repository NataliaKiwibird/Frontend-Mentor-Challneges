(() => {
    const button = document.querySelector(".accordion__list--button");
    const answer = document.querySelector(".accordion__list--answer")

    const toggleClass = () => {
        answer.classList.toggle("accordion__list--answer-active");
        button.classList.toggle("accordion__list--button--active")
    };

    button.addEventListener("click", toggleClass);
    
    menu.addEventListener("click", toggleClass);
    
    
})();