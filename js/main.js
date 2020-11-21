let switcher = document.getElementById('switcher__button')

switcher.addEventListener('click', function(e){
    e.preventDefault();
    let body = document.getElementById('body');
    let buttonBg = document.getElementById('switcher__button');
    let buttonText = document.getElementById('switcher__text');

    if (body.className == "white"){
        buttonBg.style.justifyContent = "flex-start";
        buttonText.textContent = "Light Mode"
        body.classList = "dark";
    } else {
        body.classList = "white";
        buttonBg.style.justifyContent = "flex-end";
        buttonText.textContent = "Dark Mode"
    }
})