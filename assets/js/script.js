let mobileMenu = document.querySelector('.mobile--menu--area');
let navBar = document.querySelector('nav');
let menuIcon = document.querySelector('.menu--icon');
let menuClose = document.querySelector('.menu--close');
let blurArea = document.querySelector('.dark--blur');
let cta = document.querySelector('.cta');

let openMenu = () => {
    mobileMenu.style.opacity = '0';
    blurArea.style.opacity = '0';
    setTimeout(() => {
        mobileMenu.style.opacity = '1';
        blurArea.style.opacity = '1';
    }, 200);
    mobileMenu.style.display = 'flex';
    blurArea.style.display = 'block';
    menuIcon.style.display = 'none';
    menuClose.style.display = 'block';
    cta.style.display = 'flex';
}

let closeMenu = () => {
    mobileMenu.style.opacity = '1';
    blurArea.style.opacity = '1';
    setTimeout(() => {
        mobileMenu.style.opacity = '0';
        blurArea.style.opacity = '0';
    }, 200);
    mobileMenu.style.display = 'none';
    blurArea.style.display = 'none';
    menuIcon.style.display = 'block';
    menuClose.style.display = 'none';
    cta.style.display = 'none';
}