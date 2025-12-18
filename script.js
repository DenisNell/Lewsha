
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
// Игра
// Игра -----------------------------------------------------
// Игра
// Игра
// Игра -----------------------------------------------------
// Игра

const buttonGame = document.getElementById('burgerGame');
const form = document.querySelector('.form_box')
const answerRigth = document.querySelector('.answer_rigth')
const answerNotRigth = document.querySelector('.answer_not-rigth')
const counterBox = document.querySelector('.counter_box')
const menuLogo = document.querySelector('.menu_logo')
const rulesGame = document.querySelector('.rules_game')
const rulesButton = document.querySelector('.rules_button')

menuGame.addEventListener('click', () => {
  rulesGame.style.display = 'block'
  rulesButton.addEventListener('click', () => {
    rulesGame.style.display = 'none'
    mainShadow.classList.remove('active');    
  })
  activateGameMode();
});

function activateGameMode() {
  counterBox.style.display = 'flex';
  document.getElementById('afina').scrollIntoView({ behavior: 'smooth' });
  buttonGame.classList.add('active');
  burgerMenu.setAttribute('style', 'display: none;');
  buttonGame.setAttribute('style', 'display: flex;');
  menuContainer.classList.remove('active');
  // mainShadow.classList.remove('active');
  form.setAttribute('style', 'display: block;');
  menuLogo.style.display = 'none';
  menuGame.style.display = 'none';
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

  // Скрываем все карточки
document.querySelectorAll('.main_imageCard').forEach(card => {
  card.style.display = 'none';
});

// Скрываем текст карточки
document.querySelectorAll('.title').forEach(text => {
  text.style.display = 'none';
});

  const imagePool = [
    // Афина
    { src: 'img/afina-dg.jpg', door: 'Афина' },
    // Афродита
    { src: 'img/afrodita-pg.jpg', door: 'Афродита' },
    { src: 'img/afrodita-po.jpg', door: 'Афродита' },
    // Бельгия
    { src: 'img/belgia-dg.jpg', door: 'Бельгия' },
    // Аккорд
    { src: 'img/akkord-dg.jpg', door: 'Аккорд' },
    { src: 'img/akkord-do.jpg', door: 'Аккорд' },
    // Аврора
    { src: 'img/avrora-dg.jpg', door: 'Аврора' },
    { src: 'img/avrora-do.jpg', door: 'Аврора' },
    // Бордо
    { src: 'img/bordo-pg.jpg', door: 'Бордо' },
    // Гамбург
    { src: 'img/gamburg-pg.jpg', door: 'Гамбург' },
    { src: 'img/gamburg-po.jpg', door: 'Гамбург' },
    // Грандорс
    { src: 'img/grandors-pg.jpg', door: 'Грандорс' },
    // Гланта
    { src: 'img/glanta-dg.jpg', door: 'Гланта' },
    { src: 'img/glanta-do.jpg', door: 'Гланта' },
    // Джаз
    { src: 'img/dzhaz-dg.jpg', door: 'Джаз' },
    { src: 'img/dzhaz-do.jpg', door: 'Джаз' },
    // Имидж
    { src: 'img/imidzh-dg.jpg', door: 'Имидж' },
    { src: 'img/imidzh-do.jpg', door: 'Имидж' },
    // Кантри
    { src: 'img/kantri-pg.jpg', door: 'Кантри' },
    // Кьянти
    { src: 'img/kyanti-dg.jpg', door: 'Кьянти' },
    { src: 'img/kyanti-do.jpg', door: 'Кьянти' },
    // Лира
    { src: 'img/lira-dg.jpg', door: 'Лира' },
    { src: 'img/lira-do.jpg', door: 'Лира' },
    // Ларго
    { src: 'img/largo-pg.jpg', door: 'Ларго' },
    // Лайн1
    { src: 'img/lajn-1-pg.jpg', door: 'Лайн1' },
    { src: 'img/lajn-1-po.jpg', door: 'Лайн1' },
    // Лайн2
    { src: 'img/lajn-2-po.jpg', door: 'Лайн2' },
    // Мередиан
    { src: 'img/meridian-dg.jpg', door: 'Мередиан' },
    // Монте Карло
    { src: 'img/monte-karlo-pg.jpg', door: 'Монте Карло' },
    { src: 'img/monte-karlo-po.jpg', door: 'Монте Карло' },
    // Моцарт
    { src: 'img/mocart-dg.jpg', door: 'Моцарт' },
    { src: 'img/mocart-do.jpg', door: 'Моцарт' },
    // Рондо
    { src: 'img/rondo-pg.jpg', door: 'Рондо' },
    { src: 'img/rondo-po.jpg', door: 'Рондо' },
    // Ретро
    { src: 'img/retro-dg.jpg', door: 'Ретро' },
    { src: 'img/retro-do.jpg', door: 'Ретро' },
    // Сан Ремо
    { src: 'img/san-remo-pg.jpg', door: 'Сан Ремо' },
    // Сан Тропе
    { src: 'img/san_trope-do.jpg', door: 'Сан Тропе' },
    // Соло
    { src: 'img/solo-pg.jpg', door: 'Соло' },
    // Сюита
    { src: 'img/syuita-dg.jpg', door: 'Сюита' },
    { src: 'img/syuita-do.jpg', door: 'Сюита' },
    // Орлеан
    { src: 'img/orlean-pg.jpg', door: 'Орлеан' },
    // Флоренция
    { src: 'img/floren-pg.jpg', door: 'Флоренция' },
    // Челси
    { src: 'img/chelsi-dg.jpg', door: 'Челси' },
    { src: 'img/chelsi-do.jpg', door: 'Челси' },
    // Урбан
    { src: 'img/urban-pg.jpg', door: 'Урбан' },
    // Элегия
    { src: 'img/elegiya-dg.jpg', door: 'Элегия' },
    { src: 'img/elegiya-do.jpg', door: 'Элегия' },
    // Ультра С1
    { src: 'img/ultra-c1-dg.jpg', door: 'Ультра С1' },
    { src: 'img/ultra-c1-do.jpg', door: 'Ультра С1' },
    // Ультра С2
    { src: 'img/ultra-c2-dg.jpg', door: 'Ультра С2' },
    { src: 'img/ultra-c2-do.jpg', door: 'Ультра С2' },
    // Ультра С3
    { src: 'img/ultra-c3-dg.jpg', door: 'Ультра С3' },
    { src: 'img/ultra-s3-do.jpg', door: 'Ультра С3' },
    // Ультра С5
    { src: 'img/ultra-s5-pg.jpg', door: 'Ультра С5' },
    { src: 'img/ultra-s5-po.jpg', door: 'Ультра С5' }
  ];  

  // Переменные для хранения текущего состояния игры
  let currentRandomImage = null;
  let doorName = '';  
  
  // Получаем случайное изображание
  function getRandomImageFromPool() {
    const randomIndex = Math.floor(Math.random() * imagePool.length);
    return imagePool[randomIndex];
  }

  // Заполняем div случайным изображением
  function displayInExistingElement() {
    const displayDiv = document.getElementById('randomImageDisplay');
    if (!displayDiv) return;

    currentRandomImage = getRandomImageFromPool();
    doorName = currentRandomImage.door;

    displayDiv.innerHTML = `
    <div style="display: inline-block; text-align: center;">
      <img src="${currentRandomImage.src}" 
          alt="${doorName}" 
          style="max-width: 400px;
          height: auto;          
          margin-top: 15px;">          
    </div>
  `;
  }
  displayInExistingElement()
  
  const formButton = document.querySelector('.form_button')
  formButton.innerText = `Подсказка`

  const nameInput = document.getElementById('name');

  rigthCounter.innerText = `${rigth}`
  wrongCounter.innerText = `${wrong}`
  questionCounter.innerText = `${question}`

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
        //activateGameMode();
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
        //activateGameMode();
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
        //activateGameMode();
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
