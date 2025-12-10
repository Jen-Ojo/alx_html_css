// 8-script.js — simple accessible hamburger toggle
(function(){
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');


if(!hamburger || !mobileMenu) return;


function openMenu(){
hamburger.classList.add('open');
hamburger.setAttribute('aria-expanded','true');
mobileMenu.classList.add('open');
mobileMenu.setAttribute('aria-hidden','false');
// trap focus could be added for full accessibility; keep simple for this task
}


function closeMenu(){
hamburger.classList.remove('open');
hamburger.setAttribute('aria-expanded','false');
mobileMenu.classList.remove('open');
mobileMenu.setAttribute('aria-hidden','true');
}


function toggleMenu(){
const isOpen = hamburger.classList.contains('open');
if(isOpen) closeMenu(); else openMenu();
}


hamburger.addEventListener('click', function(e){
e.stopPropagation();
toggleMenu();
});


// Close when clicking outside
document.addEventListener('click', function(e){
const target = e.target;
if(!mobileMenu.contains(target) && !hamburger.contains(target)){
closeMenu();
}
});


// Close on ESC
document.addEventListener('keydown', function(e){
if(e.key === 'Escape') closeMenu();
});


// Close on resize if desktop view
window.addEventListener('resize', function(){
if(window.innerWidth > 480) closeMenu();
});


// Improve link behavior: close menu when a mobile link is clicked
mobileMenu.addEventListener('click', function(e){
const el = e.target;
if(el.tagName === 'A') closeMenu();
});
})();