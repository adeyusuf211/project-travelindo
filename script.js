const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    nav.classList.toggle('fixed', scrollY > 500)
});

const search = document.getElementById('search');
const modalSearch = document.querySelector('.modal-search');
const closeModal  = document.querySelector('.search-title span');

search.addEventListener('click', function(e) {
    e.preventDefault();
    modalSearch.classList.add('show');
});

closeModal.addEventListener('click', function() {
    modalSearch.classList.remove('show');
});
