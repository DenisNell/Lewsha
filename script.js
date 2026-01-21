
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
const menuLogo = document.querySelector('.menu_logo')

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
  menuLogo.classList.toggle('active')

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
const rulesGame = document.querySelector('.rules_game')
const rulesButton = document.querySelector('.rules_button')
const main = document.querySelector('.main')
const formText = document.querySelector('.form_text')
const rigthCounter = document.querySelector('.rigth_counter')
const wrongCounter = document.querySelector('.wrong_counter')
const questionCounter = document.querySelector('.question_counter')
const loseGame = document.querySelector('.lose_game')
const gameShadow = document.querySelector('.game')
const heartsContainer = document.querySelector('.hearts-container')
const winGame = document.querySelector('.win_game')
const gameStartMenu = document.querySelector('.game_startMenu')
const gameTraining = document.querySelector('.game_training')
const gameGame = document.querySelector('.game_game')
const menuBox = document.querySelector('.menubox')
const gameInfo = document.querySelector('.game_info')
const gameExit = document.querySelector('.game_exit')
const element = document.getElementById('afina');
const background = document.querySelector('.background')

gameInfo.addEventListener('click', () => {
  rulesGame.style.display = 'block'
  // gameShadow.style.display = 'block'
  rulesButton.addEventListener('click', () => {
    rulesGame.style.display = 'none'
    // gameShadow.style.display = 'none'
  })
})

let isGameActive = false;
let rigth = 0;
let wrong = 0;
let question = 0;
let doorName = ''
let finish
let life = 3

//Массив дверей
const imagePool = [
  // Афина
  { src: 'img/afina-dg.jpg', door: 'Афина' },
  // Афродита
  { src: 'img/afrodita-dg.jpg', door: 'Афродита' },
  { src: 'img/afrodita-do.jpg', door: 'Афродита' },
  // Бельгия
  { src: 'img/belgia-dg.jpg', door: 'Бельгия' },
  // Аккорд
  { src: 'img/akkord-dg.jpg', door: 'Аккорд' },
  { src: 'img/akkord-do.jpg', door: 'Аккорд' },
  // Аврора
  { src: 'img/avrora-dg.jpg', door: 'Аврора' },
  { src: 'img/avrora-do.jpg', door: 'Аврора' },
  // Бордо
  { src: 'img/bordo-dg.jpg', door: 'Бордо' },
  // Гамбург
  { src: 'img/gamburg-dg.jpg', door: 'Гамбург' },
  { src: 'img/gamburg-do.jpg', door: 'Гамбург' },
  // Грандорс
  { src: 'img/grandors-dg.jpg', door: 'Грандорс' },
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
  { src: 'img/kantri-dg.jpg', door: 'Кантри' },
  // Кьянти
  { src: 'img/kyanti-dg.jpg', door: 'Кьянти' },
  { src: 'img/kyanti-do.jpg', door: 'Кьянти' },
  // Лира
  { src: 'img/lira-dg.jpg', door: 'Лира' },
  { src: 'img/lira-do.jpg', door: 'Лира' },
  // Ларго
  { src: 'img/largo-dg.jpg', door: 'Ларго' },
  // Лайн1
  { src: 'img/lajn_1-dg.jpg', door: 'Лайн1' },
  { src: 'img/lajn_1-do.jpg', door: 'Лайн1' },
  // Лайн2
  { src: 'img/lajn_2-do.jpg', door: 'Лайн2' },
  // Лайн4
  { src: 'img/lajn_4-dg.jpg', door: 'Лайн4' },
  // Лайн4
  { src: 'img/lajn_5-dg.jpg', door: 'Лайн5' },
  // Мередиан
  { src: 'img/meridian-dg.jpg', door: 'Мередиан' },
  // Монте Карло
  { src: 'img/monte_karlo-dg.jpg', door: 'Монте Карло' },
  { src: 'img/monte_karlo-do.jpg', door: 'Монте Карло' },
  // Моцарт
  { src: 'img/mocart-dg.jpg', door: 'Моцарт' },
  { src: 'img/mocart-do.jpg', door: 'Моцарт' },
  // Рондо
  { src: 'img/rondo-dg.jpg', door: 'Рондо' },
  { src: 'img/rondo-do.jpg', door: 'Рондо' },
  // Ретро
  { src: 'img/retro-dg.jpg', door: 'Ретро' },
  { src: 'img/retro-do.jpg', door: 'Ретро' },
  // Сан Ремо
  { src: 'img/san_remo-dg.jpg', door: 'Сан Ремо' },
  // Сан Тропе
  { src: 'img/san_trope-do.jpg', door: 'Сан Тропе' },
  // Соло
  { src: 'img/solo-dg.jpg', door: 'Соло' },
  // Сюита
  { src: 'img/syuita-dg.jpg', door: 'Сюита' },
  { src: 'img/syuita-do.jpg', door: 'Сюита' },
  // Орлеан
  { src: 'img/orlean-dg.jpg', door: 'Орлеан' },
  // Флоренция
  { src: 'img/floren-dg.jpg', door: 'Флоренция' },
  // Челси
  { src: 'img/chelsi-dg.jpg', door: 'Челси' },
  { src: 'img/chelsi-do.jpg', door: 'Челси' },
  // Урбан
  { src: 'img/urban-dg.jpg', door: 'Урбан' },
  // Элегия
  { src: 'img/elegiya-dg.jpg', door: 'Элегия' },
  { src: 'img/elegiya-do.jpg', door: 'Элегия' },
  // Ультра С1
  { src: 'img/ultra_c1-dg.jpg', door: 'Ультра С1' },
  { src: 'img/ultra_c1-do.jpg', door: 'Ультра С1' },
  // Ультра С2
  { src: 'img/ultra_c2-dg.jpg', door: 'Ультра С2' },
  { src: 'img/ultra_c2-do.jpg', door: 'Ультра С2' },
  // Ультра С3
  { src: 'img/ultra_c3-dg.jpg', door: 'Ультра С3' },
  { src: 'img/ultra_s3-do.jpg', door: 'Ультра С3' },
  // Ультра С5
  { src: 'img/ultra_s5-dg.jpg', door: 'Ультра С5' },
  { src: 'img/ultra_s5-do.jpg', door: 'Ультра С5' },
  // Ультра БС4
  { src: 'img/ultra_bs4-dg.jpg', door: 'Ультра БС4' },
  { src: 'img/ultra_bs4-do.jpg', door: 'Ультра БС4' },
  // Женева
  { src: 'img/geneva-dg.jpg', door: 'Женева' },
  { src: 'img/geneva-do.jpg', door: 'Женева' }
];

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
shuffleArray(imagePool)

let newArray = shuffleArray(imagePool);
let nextCard = 0;
formText.innerText = `Дверь: ${nextCard + 1} из ${newArray.length + 1}`

class HeartsSystem {
  constructor(totalHearts = 3) {
    this.totalHearts = totalHearts;
    this.currentHearts = totalHearts;
    this.hearts = document.querySelectorAll('.heart');
  }

  loseHeart() {
    if (this.currentHearts > 0) {
      const heartToRemove = this.hearts[this.currentHearts - 1];
      heartToRemove.classList.add('fade-out');
      this.currentHearts--;
      return this.currentHearts;
    }
    return 0;
  }

  resetHearts() {
    this.currentHearts = this.totalHearts;
    this.hearts.forEach(heart => {
      heart.classList.remove('lost', 'fade-out');
    });
  }
}
const hearts = new HeartsSystem();

//Обнуляем счетчики
function resetGame() {
  rigth = 0;
  wrong = 0;
  question = 0;
  nextCard = 0;
  life = 3;
  isGameActive = false;
  counter = 0;
  counterButton = 0;
  newArray = shuffleArray(imagePool); // Перемешиваем карточки заново
}

gameExit.addEventListener('click', () => {
  location.reload();
});

const gameDoorsNameBox = document.querySelector('.game_doorsNameBox')
buttonGame.addEventListener('click', () => {
  resetGame()
  hearts.resetHearts()
  gameDoorsNameBox.style.display ='none'
  counterBox.style.display = 'none';
  heartsContainer.style.display = 'none'
  form.setAttribute('style', 'display: none;');
  element.scrollIntoView();
  activateGameMode();
  menuBox.style.display = 'none'
  gameStartMenu.style.display = 'block'

  gameTraining.addEventListener('click', () => {
    background.classList.add('active')
    menuBox.style.display = 'block'
    counterBox.style.display = 'flex';
    form.setAttribute('style', 'display: block;');
    gameStartMenu.style.display = 'none'
    activateTraining()
    menuBox.style.background = '#f0dfc8'
  })

  gameGame.addEventListener('click', () => {
    background.classList.add('active')
    menuBox.style.display = 'block'
    heartsContainer.style.display = 'flex'
    form.setAttribute('style', 'display: block;');
    gameStartMenu.style.display = 'none'
    activateGame()
    menuBox.style.background = '#f0dfc8'
  })
});

menuGame.addEventListener('click', () => {
  element.scrollIntoView();
  activateGameMode();
  menuBox.style.display = 'none'
  gameStartMenu.style.display = 'block'

  gameTraining.addEventListener('click', () => {
    background.classList.add('active')
    menuBox.style.display = 'block'
    counterBox.style.display = 'flex';
    form.setAttribute('style', 'display: block;');
    gameStartMenu.style.display = 'none'
    activateTraining()
    menuBox.style.background = '#f0dfc8'
  })

  gameGame.addEventListener('click', () => {
    background.classList.add('active')
    menuBox.style.display = 'block'
    heartsContainer.style.display = 'flex'
    form.setAttribute('style', 'display: block;');
    gameStartMenu.style.display = 'none'
    activateGame()
    menuBox.style.background = '#f0dfc8'
  })
});

//Активация игрового режима
function activateGameMode() {
  menuBox.style.background = 'black'
  main.style.display = 'none'
  menuLogo.style.display = 'none';
  menuGame.style.display = 'none';
  buttonGame.classList.add('active');
  burgerMenu.setAttribute('style', 'display: none;');
  buttonGame.setAttribute('style', 'display: flex;');
  menuContainer.classList.remove('active');
}

//Активация игры
//Активация игры
//Активация игры

function activateGame() {
  isGameActive = true;
  formText.innerText = `Дверь: ${nextCard + 1} из ${newArray.length + 1}`

  // Заполняем div случайным изображением
  function displayInExistingElement() {
    const displayDiv = document.getElementById('randomImageDisplay');
    if (!displayDiv) return;
    let imageObject = newArray[nextCard];
    let imagePath = imageObject.src;  // Путь к изображению
    doorName = imageObject.door;  // Название двери
    displayDiv.innerHTML = `
    <div>
      <img src="${imagePath}" alt="">          
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

  let counter = 0;
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
      // Первая подсказка
      formText.innerText = `Первая буква: ${doorName[0]}`;
      formButton.innerText = `Проверить`;
      counter += 1;
      question += 1;
      counterButton += 1;
    }

    else if (userInput === '' && counter === 1) {
      // Вторая подсказка (неправильный ответ)
      wrong += 1
      nextCard += 1
      life -= 1
      hearts.loseHeart();
      if (life === 0) {
        loseGame.setAttribute('style', 'display: block;');
        formButton.style.pointerEvents = 'none';
        setTimeout(() => {
          formButton.style.pointerEvents = 'auto';
          loseGame.setAttribute('style', 'display: none;');
          resetGame();
          hearts.resetHearts()
          activateGame();
          formText.innerText = `Дверь: ${nextCard + 1} из ${newArray.length + 1}`
        }, 2000);
      }
      else {
        formText.innerText = `${doorName}`;
        answerNotRigth.setAttribute('style', 'display: block');
        formButton.style.pointerEvents = 'none';
        setTimeout(() => {
          formButton.style.pointerEvents = 'auto';
          answerNotRigth.setAttribute('style', 'display: none;');
          activateGame()
          formText.innerText = `Дверь: ${nextCard + 1} из ${newArray.length + 1}`
        }, 2000);
      }
    }
    else if (userInput.toLowerCase() === doorName.toLowerCase()) {
      // Правильный ответ
      rigth += 1
      nextCard += 1
      nameInput.value = '';
      if (nextCard === newArray.length) {
        formButton.style.pointerEvents = 'none';
        winGame.setAttribute('style', 'display: block;');
        setTimeout(() => {
          formButton.style.pointerEvents = 'auto';
          winGame.setAttribute('style', 'display: none;');
          resetGame();
          hearts.resetHearts();
          activateGame();
          formText.innerText = `Дверь: ${nextCard + 1} из ${newArray.length + 1}`
        }, 2000);
      }
      else {
        formButton.style.pointerEvents = 'none';
        answerRigth.setAttribute('style', 'display: block;');
        setTimeout(() => {
          formButton.style.pointerEvents = 'auto';
          answerRigth.setAttribute('style', 'display: none;');
          activateGame()
          formText.innerText = `Дверь: ${nextCard + 1} из ${newArray.length + 1}`
        }, 2000);
      }

    }
    else {
      // Неправильный ответ
      wrong += 1
      life -= 1
      nextCard += 1
      hearts.loseHeart();
      nameInput.value = '';
      if (life === 0) {
        formButton.style.pointerEvents = 'none';
        loseGame.setAttribute('style', 'display: block;');
        setTimeout(() => {
          formButton.style.pointerEvents = 'auto';
          loseGame.setAttribute('style', 'display: none;');
          resetGame();
          hearts.resetHearts()
          activateGame();
          formText.innerText = `Дверь: ${nextCard + 1} из ${newArray.length + 1}`
        }, 2000);
      }
      else {
        formButton.style.pointerEvents = 'none';
        formText.innerText = `${doorName}`;
        answerNotRigth.setAttribute('style', 'display: block');
        setTimeout(() => {
          formButton.style.pointerEvents = 'auto';
          answerNotRigth.setAttribute('style', 'display: none;');
          activateGame()
          formText.innerText = `Дверь: ${nextCard + 1} из ${newArray.length + 1}`
        }, 2000);
      }
    }
  }

  //---------------------------------------
  const checkButton = document.getElementById('checkButton');
  const newCheckButton = checkButton.cloneNode(true);
  checkButton.parentNode.replaceChild(newCheckButton, checkButton);

  // Предотвращаем поведение по умолчанию для кнопки в форме
  document.getElementById('checkButton').addEventListener('click', function (event) {
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

// Тренировка
// Тренировка
// Тренировка

function activateTraining() {
  isGameActive = true;
  form.style.display = 'none'

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
    <div>
      <img src="${currentRandomImage.src}" alt="">          
    </div>
  `;
  }
  displayInExistingElement()

  // Получаем 5 случайных названия из массива с текущей дверью
  const result = [];
  function getRandomDoorNames() {
    const allDoors = [...new Set(imagePool.map(item => item.door))];
    result.push(doorName);
    // Удаляем текущую дверь из доступных
    const availableDoors = allDoors.filter(door => door !== doorName);
    // Выбираем еще 5 случайных названия
    for (let i = 0; i < Math.min(4, availableDoors.length); i++) {
      const randomIndex = Math.floor(Math.random() * availableDoors.length);
      result.push(availableDoors.splice(randomIndex, 1)[0]);
    }
    return result.sort(() => Math.random() - 0.5);
  }
  getRandomDoorNames()

  // добавляем текущие двери в HTML
  // const gameDoorsNameBox = document.querySelector('.game_doorsNameBox')
  gameDoorsNameBox.style.display = 'flex'

  const doorsNameBox = document.querySelector('.game_doorsNameBox');
  doorsNameBox.innerHTML = result.map(doorName =>
    `<div class="door-name-item" data-door-name="${doorName}">${doorName}</div>`).join('');

  rigthCounter.innerText = `${rigth}`
  wrongCounter.innerText = `${wrong}`
  questionCounter.innerText = `${question}`


  const doorNameItem = document.querySelector('.door-name-item')
  // Добавляем обработчики событий для каждой двери
  document.querySelectorAll('.door-name-item').forEach(item => {
    item.addEventListener('click', function () {
      const selectedDoorName = this.getAttribute('data-door-name');

      // doorNameItem.style.backgroundColor = 'white'

      this.style.backgroundColor = 'white';
      // Сравниваем выбранное название с текущим doorName
      if (selectedDoorName === doorName) {
        rigth += 1
        this.style.backgroundColor = '#4CAF50';
        this.style.color = 'white';
        document.querySelectorAll('.door-name-item').forEach(doorItem => {
          doorItem.style.pointerEvents = 'none';
        });
        answerRigth.setAttribute('style', 'display: block;');
        setTimeout(() => {
          answerRigth.setAttribute('style', 'display: none;');
          document.querySelectorAll('.door-name-item').forEach(doorItem => {
            doorItem.style.pointerEvents = 'auto';
          });
          activateTraining()
        }, 2000);

      } else {
        wrong += 1
        this.style.backgroundColor = '#F44336';
        this.style.color = 'white';
        document.querySelectorAll('.door-name-item').forEach(doorItem => {
          doorItem.style.pointerEvents = 'none';
        });
        answerNotRigth.setAttribute('style', 'display: block');
        setTimeout(() => {
          answerNotRigth.setAttribute('style', 'display: none;');
          // activateTraining()
          document.querySelectorAll('.door-name-item').forEach(doorItem => {
            doorItem.style.pointerEvents = 'auto';
          });
        }, 2000);
      }
    });
  });

};
