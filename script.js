const doc = document.querySelector("body")
let check;
const darkon = () => {
    if (check === "true"){
        check = true
    } else if (check === "false") {
        check = false
    }
    console.log(check)
    check = check !== true;
    console.log(check)
    let logo = doc.querySelector(".navlogo img")
    if (check === true) {
        document.documentElement.style
            .setProperty('--background', '#d4d2d2');
        document.documentElement.style
            .setProperty('--text', '#2a2a2a');
        document.documentElement.style
            .setProperty('--shadow', '#a6a5a2');
        logo.src="/slike/logoDark.png";

    } else {
        document.documentElement.style
            .setProperty('--background', '#2a2a2a');
        document.documentElement.style
            .setProperty('--text', '#d4d2d2');
        document.documentElement.style
            .setProperty('--shadow', '#424242');
        logo.src="/slike/logoLight.png";
    }
    localStorage.setItem("checked", check);
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

const seechecked = () => {
    check = localStorage.getItem("checked");
    let logo = doc.querySelector(".navlogo img")
    let che = document.querySelector('.switch input')
    if (check === "true") {
        che.checked = true
        document.documentElement.style
            .setProperty('--background', '#d4d2d2');
        document.documentElement.style
            .setProperty('--text', '#2a2a2a');
        document.documentElement.style
            .setProperty('--shadow', '#7c7c7c');
        logo.src="/slike/logoDark.png";
    } else {
        che.checked = false
        document.documentElement.style
            .setProperty('--background', '#2a2a2a');
        document.documentElement.style
            .setProperty('--text', '#d4d2d2');
        document.documentElement.style
            .setProperty('--shadow', '#424242');
        logo.src="/slike/logoLight.png";
    }
}

