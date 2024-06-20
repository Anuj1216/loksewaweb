const navLinkEls = document.querySelectorAll('.nav-links a');
const windowPathname = window.location.pathname;


navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    if((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')){
        navLinkEl.classList.add('active');
    }
})