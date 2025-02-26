import refs from "./Js/refs";

const { btnClose, btnOpen, menuLink, menuList, menu } = refs;

btnOpen.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)

if (menuList) {
    menuList.addEventListener('click', onLinkClickClose);
}

if (menuLink) {
    menuLink.addEventListener('click', onLinkClickClose);
}

function openMenu() {
    menu.classList.add("open");
    document.body.style.overflow = "hidden"; 
}

function closeMenu() {
    menu.classList.remove("open");
    document.body.style.overflow = ""; 
}

function onLinkClickClose(e) {
    if(e.target.tagName === "A") {
        closeMenu();
    }
}