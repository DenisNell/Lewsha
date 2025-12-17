
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


function toggleCardImage(event) {
  const card = event.currentTarget;
  // Находим изображения внутри текущей карточки
  const image1 = card.querySelector('.main_image1');
  const image2 = card.querySelector('.main_image2');
  // Переключаем видимость изображений
  if (image1.style.opacity !== '0') {
    image1.style.opacity = '0';
    image2.style.opacity = '1';
  } else {
    image1.style.opacity = '1';
    image2.style.opacity = '0';
  }
}
// Функция добавления обработчиков для всех изображений функции toggleCardImage
function setupImageCards() {
  const imageCards = document.querySelectorAll('.main_imageCard');
  imageCards.forEach(card => {
    card.addEventListener('click', toggleCardImage);
  });
}
document.addEventListener('DOMContentLoaded', setupImageCards);

// Игра
// Игра -----------------------------------------------------
// Игра


const buttonGame = document.getElementById('burgerGame');
const form = document.querySelector('.form_box')
const answerRigth = document.querySelector('.answer_rigth')
const answerNotRigth = document.querySelector('.answer_not-rigth')
const counterBox = document.querySelector('.counter_box')
const menuLogo = document.querySelector('.menu_logo')

menuGame.addEventListener('click', () => {
  activateGameMode();
});

function activateGameMode() {
  counterBox.style.display = 'flex';
  document.getElementById('afina').scrollIntoView({ behavior: 'smooth' });
  buttonGame.classList.add('active');
  burgerMenu.setAttribute('style', 'display: none;');
  buttonGame.setAttribute('style', 'display: flex;');
  menuContainer.classList.remove('active');
  mainShadow.classList.remove('active');
  form.setAttribute('style', 'display: block;');
  menuLogo.style.display = 'none';
  menuGame.style.display = 'none';

  // Отключить обработчик клика на всех картах
  function removeImageCardHandlers() {
    const imageCards = document.querySelectorAll('.main_imageCard');
    imageCards.forEach(card => {
      card.removeEventListener('click', toggleCardImage);
    });
  }
  removeImageCardHandlers();
}

buttonGame.addEventListener('click', () => {
  location.reload();
});

menuGame.addEventListener('click', () => {
  if (!isGameActive) {
    activateGame();
  }
});

let isGameActive = false;
const formText = document.querySelector('.form_text')
const rigthCounter = document.querySelector('.rigth_counter')
const wrongCounter = document.querySelector('.wrong_counter')
const questionCounter = document.querySelector('.question_counter')

let rigth = 0;
let wrong = 0;
let question = 0;



//-------------------------------------------------

function activateGame() {

  isGameActive = true;
  const formButton = document.querySelector('.form_button')
  formButton.innerText = `Подсказка`

  const nameInput = document.getElementById('name');

  rigthCounter.innerText = `${rigth}`
  wrongCounter.innerText = `${wrong}`
  questionCounter.innerText = `${question}`

  const allDoorImages = document.querySelectorAll('.main_image1, .main_image2');
  const doorsArray = Array.from(allDoorImages);
  console.log(doorsArray)

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
    if (mainUnknown) mainUnknown.style.display = 'none';
  }

  let counter = 0
  let counterButton = 0;


  // Функции добавления подсказки
  function handleInput(event) {
    const formButton = document.querySelector('.form_button')
    const value = event.target.value.trim()

    if (value.length === 0 && counterButton === 0) {
      formButton.innerText = 'Подсказка'
    } else {
      formButton.innerText = 'Проверить'
    }
  }
  nameInput.addEventListener('input', handleInput);
  function handleOutFocus(event) {
    const formButton = document.querySelector('.form_button')
    const value = event.target.value.trim()

    if (counterButton !== 1 && value.length === 0) {
      formButton.innerText = 'Подсказка';
    }
  }
  nameInput.addEventListener('blur', handleOutFocus);


  // Функция логики ответов и удаляет стандартное поведение поля input
  function checkUserInput(event) {
    const formButton = document.querySelector('.form_button')

    // Предотвращаем отправку формы и перезагрузку страницы
    if (event) event.preventDefault();
    const userInput = nameInput.value.trim();

    // Логика игры на действия игрока
    if (userInput === '' && counter === 0) {
      formText.innerText = `Первая буква: ${doorName[0]}`;
      formButton.innerText = `Проверить`;
      counter += 1;
      question += 1;
      counterButton += 1;
    }
    // Код второй подсказки (слишком легко)
    // else if (userInput === '' && counter === 1) {
    //   question += 1;
    //   let result = '';
    //   for (let i = 1; i < doorName.length - 1; i++) {
    //     if (doorName[i] === ' ') {
    //       result += '  ';
    //     } else {
    //       result += '.';
    //     }
    //   }
    //   formText.innerText = `${doorName[0]}${result}${doorName[doorName.length - 1]}`;
    //   counter += 1
    // }

    else if (userInput === '' && counter === 1) {
      wrong += 1
      formText.innerText = `${doorName}`;
      answerNotRigth.setAttribute('style', 'display: block');
      setTimeout(() => {
        answerNotRigth.setAttribute('style', 'display: none;');
        activateGameMode();
        activateGame()
        formText.innerText = `Угадай дверь:`;
      }, 2000);
    }
    else if (userInput.toLowerCase() === doorName.toLowerCase()) {
      rigth += 1
      nameInput.value = '';
      answerRigth.setAttribute('style', 'display: block;');
      setTimeout(() => {
        answerRigth.setAttribute('style', 'display: none;');
        activateGameMode();
        activateGame()
        formText.innerText = `Угадай дверь:`;
      }, 2000);

    } else {
      wrong += 1
      formText.innerText = `${doorName}`;
      console.log('Неправильно. Ожидалось:', doorName, 'Получено:', userInput);
      nameInput.value = '';
      answerNotRigth.setAttribute('style', 'display: block');
      setTimeout(() => {
        answerNotRigth.setAttribute('style', 'display: none;');
        activateGameMode();
        activateGame()
        formText.innerText = `Угадай дверь:`;
      }, 2000);
    }
  }


  const checkButton = document.getElementById('checkButton');
  const newCheckButton = checkButton.cloneNode(true);
  checkButton.parentNode.replaceChild(newCheckButton, checkButton);
  // Добавляем обработчик на кнопку
  document.getElementById('checkButton').addEventListener('click', function (event) {
    // Предотвращаем поведение по умолчанию для кнопки в форме
    event.preventDefault();
    checkUserInput(event);
  });
  // Также предотвращаем отправку формы по нажатию Enter
  nameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      checkUserInput(event);
    }
  });
};
