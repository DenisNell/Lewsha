// Получаем элементы
const burgerMenu = document.getElementById('burgerMenu');
const menuContainer = document.querySelector('.menu_containerLink');

// Функция для переключения меню
function toggleMenu() {
  menuContainer.classList.toggle('active');
  burgerMenu.classList.toggle('active');

  // Блокировка прокрутки body при открытом меню
  document.body.style.overflow = menuContainer.classList.contains('active') ? 'hidden' : '';
}

// Событие клика по бургер-меню
burgerMenu.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('.menu_link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuContainer.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Закрытие меню при клике вне области меню
document.addEventListener('click', (e) => {
  if (!menuContainer.contains(e.target) && !burgerMenu.contains(e.target) && menuContainer.classList.contains('active')) {
    toggleMenu();
  }
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuContainer.classList.contains('active')) {
    toggleMenu();
  }
});


function toggleImages() {
  const img1 = document.getElementById('image1');
  const img2 = document.getElementById('image2');
  
  if (img1.style.opacity !== '0') {
      img1.style.opacity = '0';
      img2.style.opacity = '1';
  } else {
      img1.style.opacity = '1';
      img2.style.opacity = '0';
  }
}