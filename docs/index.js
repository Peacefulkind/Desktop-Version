const humburgerBtn = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menue');
const Portfolio = document.querySelectorAll('.card');
const Modal = document.querySelector('.modal-container');
const form = document.querySelector('#contactme');
const userName = document.getElementById('name');
const Email = document.getElementById('email');
const Msg = document.getElementById('message');

humburgerBtn.addEventListener('click', () => {
  humburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menue > a').forEach((n) => n.addEventListener('click', () => {
  humburgerBtn.classList.remove('active');
  navMenu.classList.remove('active');
}));
