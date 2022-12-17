const doc = document.querySelector("body")

let checked;
const darkon = () => {
    checked = checked !== true;
    let logo = doc.querySelector(".navlogo img")
    if (checked === true) {
        document.documentElement.style
            .setProperty('--background', '#d4d2d2');
        document.documentElement.style
            .setProperty('--text', '#2a2a2a');
        logo.src="/slike/logoDark.png";

    } else {
        document.documentElement.style
            .setProperty('--background', '#2a2a2a');
        document.documentElement.style
            .setProperty('--text', '#d4d2d2');
        logo.src="/slike/logoLight.png";
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
            if (i===0) {
                menuitem[i].style.display = 'flex'
            } else {
                menuitem[i].style.display = 'block'
            }
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

