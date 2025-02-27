import refs from "./Js/refs";

const { btnClose, btnOpen, menuLink, menuList, menu } = refs;

btnOpen.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)

function openMenu() {
    menuList.addEventListener('click', onLinkClickClose);
    menuLink.addEventListener('click', onLinkClickClose);
    menu.classList.add("open");
    document.body.style.overflow = "hidden"; 
}

function closeMenu() {
    menuList.removeEventListener('click', onLinkClickClose);
    menuLink.removeEventListener('click', onLinkClickClose);
    menu.classList.remove("open");
    document.body.style.overflow = ""; 
}

function onLinkClickClose(e) {
    if(e.target.tagName === "A") {
        closeMenu();
    }
}