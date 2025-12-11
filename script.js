//
// document.addEventListener('DOMContentLoaded', () => {
//   // Ваш код здесь
//   console.log('DOM полностью загружен!');
// });




// Функции для переключения кнопок меню
const buttonSimple = document.querySelector('.button_simple');
const buttonPatina = document.querySelector('.button_patina');
const buttonSkin = document.querySelector('.button_skin');
const menuSimple = document.querySelector('.menu_simple');
const menuPatina = document.querySelector('.menu_patina');
const menuSkin = document.querySelector('.menu_skin');
const imageSkin = document.querySelectorAll('.image_skin');
const imageSimple = document.querySelectorAll('.image_simple');
const imagePatina = document.querySelectorAll('.image_patina');
const defaultImages = document.querySelectorAll('.image_default');

function updateDefaultImages() {
  const allActive = buttonSimple.classList.contains('active') && 
                    buttonPatina.classList.contains('active') && 
                    buttonSkin.classList.contains('active');
  
  defaultImages.forEach(img => {
    if (allActive) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}



function togglePatina(){
  menuPatina.classList.toggle('active');
  buttonPatina.classList.toggle('active');
  imagePatina.forEach(patina => {
    patina.classList.toggle('active');
  });  
  updateDefaultImages();
}
buttonPatina.addEventListener('click', togglePatina);

function toggleSimple(){
  menuSimple.classList.toggle('active');
  buttonSimple.classList.toggle('active');
  imageSimple.forEach(simple => {
    simple.classList.toggle('active');
  }); 
  updateDefaultImages(); 
}
buttonSimple.addEventListener('click', toggleSimple);

function toggleSkin(){
  menuSkin.classList.toggle('active');
  buttonSkin.classList.toggle('active');
  imageSkin.forEach(skin => {
    skin.classList.toggle('active');
  });  
  updateDefaultImages();
}
buttonSkin.addEventListener('click', toggleSkin);


// Функция для переключения меню
const burgerMenu = document.getElementById('burgerMenu');
const menuContainer = document.querySelector('.menu_containerLink');
const mainShadow = document.querySelector('.main');
function toggleMenu() {
  menuContainer.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  mainShadow.classList.toggle('active');

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
    mainShadow.classList.remove('active')
    document.body.style.overflow = '';
  });
});

// Закрытие меню при клике вне области меню
document.addEventListener('click', (e) => {
  if (!menuContainer.contains(e.target) && !burgerMenu.contains(e.target) && menuContainer.classList.contains('active')) {
    toggleMenu();
    mainShadow.classList.remove('active')
  }
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuContainer.classList.contains('active')) {
    toggleMenu();
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Получаем все карточки с изображениями
  const imageCards = document.querySelectorAll('.main_imageCard');
  
  // Для каждой карточки добавляем обработчик клика
  imageCards.forEach(card => {
      card.addEventListener('click', function() {
          // Находим изображения внутри текущей карточки
          const image1 = this.querySelector('.main_image1');
          const image2 = this.querySelector('.main_image2');
          
          // Переключаем видимость изображений
          if (image1.style.opacity !== '0') {
              image1.style.opacity = '0';
              image2.style.opacity = '1';
          } else {
              image1.style.opacity = '1';
              image2.style.opacity = '0';
          }
      });
  });
});