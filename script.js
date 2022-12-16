const doc = document.querySelector("body")

let checked;
const darkon = () => {
    check = doc.querySelector(".navbar input").value
    checked = checked !== true;

    if (checked === true) {
        document.documentElement.style
            .setProperty('--background', '#d4d2d2');
        document.documentElement.style
            .setProperty('--text', '#2a2a2a');
    } else {
        document.documentElement.style
            .setProperty('--background', '#2a2a2a');
        document.documentElement.style
            .setProperty('--text', '#d4d2d2');
    }
}

let menushow;
const menuon = () => {
    menu = doc.querySelector(".menu")
    span = menu.querySelector("span")
    menuitems = doc.querySelector(".navbar .navitems")
    menuitem = doc.querySelectorAll(".navitem")

    menushow = menushow !== true;

    if (menushow === true) {
        span.innerText = "close"
        menuitems.style.display = "flex"
        menuitems.style.flexDirection = 'column'
        for (let i=0; i<5; i++){
            menuitem[i].style.display = 'block'
            menuitem[i].style.display = 'block'
        }
    } else {
        span.innerText = "menu"
        for (let i=0; i<5; i++){
            menuitem[i].style.display = 'flex'
        }
        menuitems.style.display = "none"
        menuitems.style.flexDirection = 'row'
    }

}