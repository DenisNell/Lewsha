
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
const mainShadow = document.querySelector('.main');
const burgerMenu = document.getElementById('burgerMenu');
const menuContainer = document.querySelector('.menu_containerLink');
const menuLinks = document.querySelectorAll('.menu_link');
const menuGame = document.querySelector('.menu_game')

// Функции для переключения кнопок меню и скрыть картинки по выбору
function updateDefaultImages() {
  const allActive = buttonSimple.classList.contains('active') &&
    buttonPatina.classList.contains('active') &&
    buttonSkin.classList.contains('active');

  defaultImages.forEach(img => {
    if (allActive) {
      img.classList.add('active');
      mainShadow.classList.remove('active');
    } else {
      img.classList.remove('active');
      mainShadow.classList.add('active');
    }
  });
}

function togglePatina() {
  menuPatina.classList.toggle('active');
  buttonPatina.classList.toggle('active');
  imagePatina.forEach(patina => {
    patina.classList.toggle('active');
  });
  updateDefaultImages();
}
buttonPatina.addEventListener('click', togglePatina);

function toggleSimple() {
  menuSimple.classList.toggle('active');
  buttonSimple.classList.toggle('active');
  imageSimple.forEach(simple => {
    simple.classList.toggle('active');
  });
  updateDefaultImages();
}
buttonSimple.addEventListener('click', toggleSimple);

function toggleSkin() {
  menuSkin.classList.toggle('active');
  buttonSkin.classList.toggle('active');
  imageSkin.forEach(skin => {
    skin.classList.toggle('active');
  });
  updateDefaultImages();
}
buttonSkin.addEventListener('click', toggleSkin);


// Функция для переключения меню
function toggleMenu() {
  menuContainer.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  mainShadow.classList.toggle('active');
  menuGame.classList.toggle('active')
  // Блокировка прокрутки body при открытом меню
  document.body.style.overflow = menuContainer.classList.contains('active') ? 'hidden' : '';
}
burgerMenu.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuContainer.classList.remove('active');
    burgerMenu.classList.remove('active');
    mainShadow.classList.remove('active')
    menuGame.classList.remove('active')
    document.body.style.overflow = '';
  });
});

// Закрытие меню при клике вне области меню
document.addEventListener('click', (e) => {
  if (!menuContainer.contains(e.target) && !burgerMenu.contains(e.target) && !menuGame.contains(e.target) && menuContainer.classList.contains('active')) {
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

document.addEventListener('DOMContentLoaded', function () {
  // Получаем все карточки с изображениями
  const imageCards = document.querySelectorAll('.main_imageCard');

  // Для каждой карточки добавляем обработчик клика
  imageCards.forEach(card => {
    card.addEventListener('click', function () {
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

// Игра

const buttonGame = document.getElementById('burgerGame');
const form = document.querySelector('.form_box')
const answerRigth = document.querySelector('.answer_rigth')
const answerNotRigth = document.querySelector('.answer_not-rigth')

menuGame.addEventListener('click', () => {
  buttonGame.classList.add('active')
  burgerMenu.setAttribute('style', 'display: none;');
  buttonGame.setAttribute('style', 'display: flex;');
  menuContainer.classList.remove('active');
  mainShadow.classList.remove('active');
  form.setAttribute('style', 'display: block;');
})

buttonGame.addEventListener('click', () => {
  location.reload();
});

menuGame.addEventListener('click', () => {
  // Показываем только случайную дверь (только main_image1)
  const doorImages1 = document.querySelectorAll('.main_image1');
  const doorImages2 = document.querySelectorAll('.main_image2');
  const allImagesArray = [...doorImages1, ...doorImages2];
  const doorsArray = [...new Set(allImagesArray)];

  if (doorsArray.length === 0) return;

  // Скрываем все карточки
  document.querySelectorAll('.main_imageCard').forEach(card => {
    card.style.display = 'none';
  });

  // Скрываем текст карточки
  document.querySelectorAll('.title').forEach(text => {
    text.style.display = 'none';
  });

  // Показываем случайную дверь
  const randomDoor = doorsArray[Math.floor(Math.random() * doorsArray.length)];
  const doorCard = randomDoor.closest('.main_imageCard');
  console.log(doorCard)

  // Показываем только эту карточку
  let doorName = '';
  if (doorCard) {
    // Получаем имя двери из тега p
    const titleElement = doorCard.querySelector('.title');
    if (titleElement) {
      doorName = titleElement.textContent.trim();
      console.log('Имя выбранной двери:', doorName);
    }
    //применяем стили
    doorCard.style.display = 'block';
    doorCard.style.margin = '0 auto';
    doorCard.style.maxWidth = '400px';
    doorCard.style.padding = '25px'

    // Скрываем иконку пальца если она есть
    const icon = doorCard.querySelector('.main_icon');
    if (icon) icon.style.display = 'none';

    // Скрываем default изображение
    const defaultImages = doorCard.querySelector('.pic_default');
    if (defaultImages) defaultImages.style.display = 'none';

    // Скрываем unknown изображение
    const mainUnknown = doorCard.querySelector('.main_unknown');
    if (mainUnknown) defaultImages.style.display = 'none';
  }

  // const nameInput = document.getElementById('name');
  
  function checkUserInput(event) {
    // Предотвращаем отправку формы и перезагрузку страницы
    if (event) event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const userInput = nameInput.value.trim();

    if (userInput.toLowerCase() === doorName.toLowerCase()) {
      console.log('Правильно! Пользователь угадал дверь:', doorName);
      nameInput.value = '';
      answerRigth.setAttribute('style', 'display: block;');
      setTimeout(() => {
        answerRigth.setAttribute('style', 'display: none;');
    }, 2000);
      return true;
    } else {
      console.log('Неправильно. Ожидалось:', doorName, 'Получено:', userInput);
      nameInput.value = '';
      answerNotRigth.setAttribute('style', 'display: block');
      setTimeout(() => {
        answerNotRigth.setAttribute('style', 'display: none;');
    }, 2000);
      return false;
    }
  }
  
  // Удаляем старый обработчик и добавляем новый
  const checkButton = document.getElementById('checkButton');
  
  // Удаляем все предыдущие обработчики
  const newCheckButton = checkButton.cloneNode(true);
  checkButton.parentNode.replaceChild(newCheckButton, checkButton);
  
  // Добавляем обработчик на кнопку
  document.getElementById('checkButton').addEventListener('click', function(event) {
    // Предотвращаем поведение по умолчанию для кнопки в форме
    event.preventDefault();
    checkUserInput(event);
  });
  
  // Также предотвращаем отправку формы по нажатию Enter
  nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      checkUserInput(event);
    }
  });

});
