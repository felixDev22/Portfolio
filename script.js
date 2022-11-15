const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("closeMenu");
const menu = document.getElementById("menu");



menu.onclick = function showMenu(){
  mobileMenu.style.display='block';
};
closeBtn.onclick = function closeMenu(){
  mobileMenu.style.display='none';
};
mobileMenu.onclick = function close(){
  mobileMenu.style.display='none';
};