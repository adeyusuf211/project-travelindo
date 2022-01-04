// script for active links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        for(const link of links) {
            link.classList.remove('active');
        }
        link.classList.add('active');
    });
});
// end active links script

const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    nav.classList.toggle('fixed', scrollY > 500)
});

const search        = document.getElementById('search');
const modalSearch   = document.querySelector('.modal-search');
const searchClose   = document.querySelector('.modal-search span');

search.addEventListener('click', function(e) {
    e.preventDefault();
    modalSearch.classList.add('show');
});

searchClose.addEventListener('click', function() {
    modalSearch.classList.remove('show');
});

const account       = document.getElementById('account');
const accountModal  = document.querySelector('.modal-account');
const accountClose  = document.querySelector('.modal-account span');

account.addEventListener('click', function(e) {
    e.preventDefault();
    accountModal.classList.add('show');
});

accountClose.addEventListener('click', function() {
    accountModal.classList.remove('show');
});

// script for smooth scrolling
const link = document.querySelectorAll("nav ul li a");

link.forEach(l => {
    l.addEventListener('click', clickHandler);
});

function clickHandler(e) {
  e.preventDefault();
  const href        = this.getAttribute("href");
  const offsetTop   = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// end smooth scrolling script

// Script for auto updating a year in footer
const getTahunCopyright = (copyright) => {
    const year = new Date().getFullYear();
    return `Created By ${copyright} @ ${year}`;
}

const footerCopy = document.querySelector('.footer-copy p');
const content    = `<a href="https://www.instagram.com/adeyusuf.official" target="_blank">Ade Yusuf</a>`;

footerCopy.innerHTML = getTahunCopyright(content);
// End auto updating year in footer script