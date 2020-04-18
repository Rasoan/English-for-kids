const main_menu_switch = document.getElementById("main-menu-switch-js"); // указатель на квадратик для обработчика клика для отображения меню
const main_menu_container = document.getElementById("main-menu-container-js"); // указатель на выдвижное меню

const cards_container = document.getElementById("cards-container-js"); // указатель на контейнер карточек
const default_class_card = "card"; // стандартный класс карточек
const default_class_img_card = "card-image";
const default_class_text = "card-text";
const default_class_container_img = "rotate-button";
const default_class_arrow = "rotate-button__img";
const default_class_main_card = "item";


function add_cards(category) { // функция которая добавит карточки определённой категории

  // цикл по массиву объектов карточек
  array_objects_cards.forEach(element => {

    if (element.categories == category && category != "category-card") { // все карточки кроме главных

      let card = document.createElement("figure"); // создали карточку
      card.classList.add(default_class_card, element.categories) // присвоили ей 2 класса
      card.setAttribute("name", element.categories); // накинули атрибут name

      let img = document.createElement("img"); // создали картинку
      img.classList.add(default_class_img_card); // добавили картинке класс
      img.setAttribute("src", element.image); // дали ей путь
      card.append(img); // положили картинку в карточку

      let text = document.createElement("figcaption"); // создали figcaption Для текста
      text.classList.add(default_class_text); // добавили ему класс
      text.innerText = element.word; // пооложили туда текст
      card.append(text); // положили текст в карточку

      let container_arrow = document.createElement("div"); // создали
      container_arrow.classList.add(default_class_container_img);


      let img_arrow = document.createElement('img'); // создаём стрелку
      img_arrow.classList.add('hand-drawn-arrow');
      img_arrow.setAttribute("src", "images/hand-drawn-arrow.png");

      container_arrow.appendChild(img_arrow); // положим её в её обёртку

      card.appendChild(container_arrow); // положим стрелку в карточку

      cards_container.appendChild(card); // положим готовую карточку в контейнер карточек
    }

  });

}

function add_main_cards(category) { // функция которая добавит главные карточки
  array_objects_cards.forEach(element => {

    if (element.categories == category && category == "category-card") { // если карточка та самая и главная

      let card = document.createElement("figure"); // создали карточку
      card.classList.add(default_class_card, default_class_main_card, element.categories) // присвоили ей 2 класса
      card.setAttribute("name", element.name); // накинули атрибут name

      let img = document.createElement("img"); // создали картинку
      img.classList.add(default_class_img_card); // добавили картинке класс
      img.setAttribute("src", element.image); // дали ей путь
      card.append(img); // положили картинку в карточку

      let text = document.createElement("figcaption"); // создали figcaption Для текста
      text.classList.add(default_class_text); // добавили ему класс
      text.innerText = element.word; // пооложили туда текст
      card.append(text); // положили текст в карточку

      let container_arrow = document.createElement("div"); // создали
      container_arrow.classList.add(default_class_container_img);

      cards_container.appendChild(card); // положим готовую карточку в контейнер карточек
    }

  });


}

// функция которая удалит карточки
function delete_cards() { 
  while (cards_container.firstChild) {
    cards_container.removeChild(cards_container.firstChild);
  }
}

// функция для воспроизведения аудио
function soundPlay(src) {
  let audio = new Audio(); // Создаём новый элемент Audio
  audio.src = src; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}


const array_objects_cards = [{
    categories: 'category-card',
    word: 'Action (set A)',
    image: 'images/cry.jpg',
    name: 'action-set-a',
  },
  {
    categories: 'category-card',
    word: 'Action (set B)',
    image: 'images/open.jpg',
    name: 'action-set-b',
  },
  {
    categories: 'category-card',
    word: 'Animal (set A)',
    image: 'images/cat.jpg',
    name: 'animal-set-a',
  },
  {
    categories: 'category-card',
    word: 'Animal (set B)',
    image: 'images/bird.jpg',
    name: 'animal-set-b',
  },
  {
    categories: 'category-card',
    word: 'Clothes',
    image: 'images/skirt.jpg',
    name: 'clothes',
  },
  {
    categories: 'category-card',
    word: 'Emotions',
    image: 'images/sad.jpg',
    name: 'emotions',
  },
  {
    categories: 'category-card',
    word: 'Study',
    image: 'images/book.jpg',
    name: 'study',
  },
  {
    categories: 'category-card',
    word: 'Equipment',
    image: 'images/elevator.jpg',
    name: 'equipment',
  },
  {
    categories: 'action-set-a',
    word: 'cry',
    translation: 'плакать',
    image: 'images/cry.jpg',
    audioSrc: 'audio/cry.mp3'
  },
  {
    categories: 'action-set-a',
    word: 'dance',
    translation: 'танцевать',
    image: 'images/dance.jpg',
    audioSrc: 'audio/dance.mp3'
  },
  {
    categories: 'action-set-a',
    word: 'dive',
    translation: 'нырять',
    image: 'images/dive.jpg',
    audioSrc: 'audio/dive.mp3'
  },
  {
    categories: 'action-set-a',
    word: 'draw',
    translation: 'рисовать',
    image: 'images/draw.jpg',
    audioSrc: 'audio/draw.mp3'
  },
  {
    categories: 'action-set-a',
    word: 'fish',
    translation: 'ловить рыбу',
    image: 'images/fish.jpg',
    audioSrc: 'audio/fish.mp3'
  },
  {
    categories: 'action-set-a',
    word: 'fly',
    translation: 'летать',
    image: 'images/fly.jpg',
    audioSrc: 'audio/fly.mp3'
  },
  {
    categories: 'action-set-a',
    word: 'hug',
    translation: 'обнимать',
    image: 'images/hug.jpg',
    audioSrc: 'audio/hug.mp3'
  },
  {
    categories: 'action-set-a',
    word: 'jump',
    translation: 'прыгать',
    image: 'images/jump.jpg',
    audioSrc: 'audio/jump.mp3'
  },
  {
    categories: 'action-set-b',
    word: 'open',
    translation: 'открывать',
    image: 'images/open.jpg',
    audioSrc: 'audio/open.mp3'
  },
  {
    categories: 'action-set-b',
    word: 'play',
    translation: 'играть',
    image: 'images/play.jpg',
    audioSrc: 'audio/play.mp3'
  },
  {
    categories: 'action-set-b',
    word: 'point',
    translation: 'указывать',
    image: 'images/point.jpg',
    audioSrc: 'audio/point.mp3'
  },
  {
    categories: 'action-set-b',
    word: 'ride',
    translation: 'ездить',
    image: 'images/ride.jpg',
    audioSrc: 'audio/ride.mp3'
  },
  {
    categories: 'action-set-b',
    word: 'run',
    translation: 'бегать',
    image: 'images/run.jpg',
    audioSrc: 'audio/run.mp3'
  },
  {
    categories: 'action-set-b',
    word: 'sing',
    translation: 'петь',
    image: 'images/sing.jpg',
    audioSrc: 'audio/sing.mp3'
  },
  {
    categories: 'action-set-b',
    word: 'skip',
    translation: 'пропускать, прыгать',
    image: 'images/skip.jpg',
    audioSrc: 'audio/skip.mp3'
  },
  {
    categories: 'action-set-b',
    word: 'swim',
    translation: 'плавать',
    image: 'images/swim.jpg',
    audioSrc: 'audio/swim.mp3'
  },
  {
    categories: 'animal-set-a',
    word: 'cat',
    translation: 'кот',
    image: 'images/cat.jpg',
    audioSrc: 'audio/cat.mp3'
  },
  {
    categories: 'animal-set-a',
    word: 'chick',
    translation: 'цыплёнок',
    image: 'images/chick.jpg',
    audioSrc: 'audio/chick.mp3'
  },
  {
    categories: 'animal-set-a',
    word: 'chicken',
    translation: 'курица',
    image: 'images/chicken.jpg',
    audioSrc: 'audio/chicken.mp3'
  },
  {
    categories: 'animal-set-a',
    word: 'dog',
    translation: 'собака',
    image: 'images/dog.jpg',
    audioSrc: 'audio/dog.mp3'
  },
  {
    categories: 'animal-set-a',
    word: 'horse',
    translation: 'лошадь',
    image: 'images/horse.jpg',
    audioSrc: 'audio/horse.mp3'
  },
  {
    categories: 'animal-set-a',
    word: 'pig',
    translation: 'свинья',
    image: 'images/pig.jpg',
    audioSrc: 'audio/pig.mp3'
  },
  {
    categories: 'animal-set-a',
    word: 'rabbit',
    translation: 'кролик',
    image: 'images/rabbit.jpg',
    audioSrc: 'audio/rabbit.mp3'
  },
  {
    categories: 'animal-set-a',
    word: 'sheep',
    translation: 'овца',
    image: 'images/sheep.jpg',
    audioSrc: 'audio/sheep.mp3'
  },
  {
    categories: 'animal-set-b',
    word: 'bird',
    translation: 'птица',
    image: 'images/bird.jpg',
    audioSrc: 'audio/bird.mp3'
  },
  {
    categories: 'animal-set-b',
    word: 'fish',
    translation: 'рыба',
    image: 'images/fish1.jpg',
    audioSrc: 'audio/fish.mp3'
  },
  {
    categories: 'animal-set-b',
    word: 'frog',
    translation: 'жаба',
    image: 'images/frog.jpg',
    audioSrc: 'audio/frog.mp3'
  },
  {
    categories: 'animal-set-b',
    word: 'giraffe',
    translation: 'жирафа',
    image: 'images/giraffe.jpg',
    audioSrc: 'audio/giraffe.mp3'
  },
  {
    categories: 'animal-set-b',
    word: 'lion',
    translation: 'лев',
    image: 'images/lion.jpg',
    audioSrc: 'audio/lion.mp3'
  },
  {
    categories: 'animal-set-b',
    word: 'mouse',
    translation: 'мышь',
    image: 'images/mouse.jpg',
    audioSrc: 'audio/mouse.mp3'
  },
  {
    categories: 'animal-set-b',
    word: 'turtle',
    translation: 'черепаха',
    image: 'images/turtle.jpg',
    audioSrc: 'audio/turtle.mp3'
  },
  {
    categories: 'animal-set-b',
    word: 'dolphin',
    translation: 'дельфин',
    image: 'images/dolphin.jpg',
    audioSrc: 'audio/dolphin.mp3'
  },
  {
    categories: 'clothes',
    word: 'skirt',
    translation: 'юбка',
    image: 'images/skirt.jpg',
    audioSrc: 'audio/skirt.mp3'
  },
  {
    categories: 'clothes',
    word: 'pants',
    translation: 'брюки',
    image: 'images/pants.jpg',
    audioSrc: 'audio/pants.mp3'
  },
  {
    categories: 'clothes',
    word: 'blouse',
    translation: 'блузка',
    image: 'images/blouse.jpg',
    audioSrc: 'audio/blouse.mp3'
  },
  {
    categories: 'clothes',
    word: 'dress',
    translation: 'платье',
    image: 'images/dress.jpg',
    audioSrc: 'audio/dress.mp3'
  },
  {
    categories: 'clothes',
    word: 'boot',
    translation: 'ботинок',
    image: 'images/boot.jpg',
    audioSrc: 'audio/boot.mp3'
  },
  {
    categories: 'clothes',
    word: 'shirt',
    translation: 'рубашка',
    image: 'images/shirt.jpg',
    audioSrc: 'audio/shirt.mp3'
  },
  {
    categories: 'clothes',
    word: 'coat',
    translation: 'пальто',
    image: 'images/coat.jpg',
    audioSrc: 'audio/coat.mp3'
  },
  {
    categories: 'clothes',
    word: 'shoe',
    translation: 'туфли',
    image: 'images/shoe.jpg',
    audioSrc: 'audio/shoe.mp3'
  },
  {
    categories: 'emotions',
    word: 'sad',
    translation: 'грустный',
    image: 'images/sad.jpg',
    audioSrc: 'audio/sad.mp3'
  },
  {
    categories: 'emotions',
    word: 'angry',
    translation: 'сердитый',
    image: 'images/angry.jpg',
    audioSrc: 'audio/angry.mp3'
  },
  {
    categories: 'emotions',
    word: 'happy',
    translation: 'счастливый',
    image: 'images/happy.jpg',
    audioSrc: 'audio/happy.mp3'
  },
  {
    categories: 'emotions',
    word: 'tired',
    translation: 'уставший',
    image: 'images/tired.jpg',
    audioSrc: 'audio/tired.mp3'
  },
  {
    categories: 'emotions',
    word: 'surprised',
    translation: 'удивлённый',
    image: 'images/surprised.jpg',
    audioSrc: 'audio/surprised.mp3'
  },
  {
    categories: 'emotions',
    word: 'scared',
    translation: 'испуганный',
    image: 'images/scared.jpg',
    audioSrc: 'audio/scared.mp3'
  },
  {
    categories: 'emotions',
    word: 'smile',
    translation: 'улыбка',
    image: 'images/smile.jpg',
    audioSrc: 'audio/smile.mp3'
  },
  {
    categories: 'emotions',
    word: 'laugh',
    translation: 'смех',
    image: 'images/laugh.jpg',
    audioSrc: 'audio/laugh.mp3'
  },
  {
    categories: 'study',
    word: 'book',
    translation: 'книга',
    image: 'images/book.jpg',
    audioSrc: 'audio/book.mp3'
  },
  {
    categories: 'study',
    word: 'pencil',
    translation: 'карандаш',
    image: 'images/pencil.jpg',
    audioSrc: 'audio/pencil.mp3'
  },
  {
    categories: 'study',
    word: 'pen',
    translation: 'ручка',
    image: 'images/pen.jpg',
    audioSrc: 'audio/pen.mp3'
  },
  {
    categories: 'study',
    word: 'school',
    translation: 'школа',
    image: 'images/school.jpg',
    audioSrc: 'audio/school.mp3'
  },
  {
    categories: 'study',
    word: 'diary',
    translation: 'дневник',
    image: 'images/diary.jpg',
    audioSrc: 'audio/diary.mp3'
  },
  {
    categories: 'study',
    word: 'class',
    translation: 'класс',
    image: 'images/class.jpg',
    audioSrc: 'audio/class.mp3'
  },
  {
    categories: 'study',
    word: 'blackboard',
    translation: 'доска',
    image: 'images/blackboard.jpg',
    audioSrc: 'audio/blackboard.mp3'
  },
  {
    categories: 'study',
    word: 'teacher',
    translation: 'учитель',
    image: 'images/teacher.jpg',
    audioSrc: 'audio/teacher.mp3'
  },
  {
    categories: 'study',
    word: 'student',
    translation: 'студент',
    image: 'images/student.jpg',
    audioSrc: 'audio/student.mp3'
  },
  {
    categories: 'study',
    word: 'computer',
    translation: 'компъютер',
    image: 'images/computer.jpg',
    audioSrc: 'audio/computer.mp3'
  },
  {
    categories: 'equipment',
    word: 'elevator',
    translation: 'лифт',
    image: 'images/elevator.jpg',
    audioSrc: 'audio/elevator.mp3'
  },
  {
    categories: 'equipment',
    word: 'rocket',
    translation: 'ракета',
    image: 'images/rocket.jpg',
    audioSrc: 'audio/rocket.mp3'
  },
  {
    categories: 'equipment',
    word: 'kettle',
    translation: 'чайник',
    image: 'images/kettle.jpg',
    audioSrc: 'audio/kettle.mp3'
  },
  {
    categories: 'equipment',
    word: 'tank',
    translation: 'танк',
    image: 'images/tank.jpg',
    audioSrc: 'audio/tank.mp3'
  },
  {
    categories: 'equipment',
    word: 'fan',
    translation: 'вентилятор',
    image: 'images/fan.jpg',
    audioSrc: 'audio/fan.mp3'
  },
  {
    categories: 'equipment',
    word: 'hoover',
    translation: 'пылесос',
    image: 'images/hoover.jpg',
    audioSrc: 'audio/hoover.mp3'
  },
  {
    categories: 'equipment',
    word: 'helicopter',
    translation: 'вертолёт',
    image: 'images/helicopter.jpg',
    audioSrc: 'audio/helicopter.mp3'
  },
  {
    categories: 'equipment',
    word: 'aircraft',
    translation: 'самолёт',
    image: 'images/aircraft.jpg',
    audioSrc: 'audio/aircraft.mp3'
  },
  {
    categories: 'equipment',
    word: 'pistol',
    translation: 'пистолет',
    image: 'images/pistol.jpg',
    audioSrc: 'audio/pistol.mp3'
  },
  {
    categories: 'equipment',
    word: 'motorcycle',
    translation: 'мотоцикл',
    image: 'images/motorcycle.jpg',
    audioSrc: 'audio/motorcycle.mp3'
  },
];



add_main_cards('category-card'); // добавить главные карточки при загрузке страницы


// обработчик событий клика по любому месту
document.addEventListener("click", element => {

// если был клик по любому месту кроме 
 if( !element.target.classList.toString().includes("main-menu-list") && !element.target.parentNode.classList.toString().includes("main-menu-switch") ) {

  main_menu_switch.classList.remove("main-menu-switch-active"); // повернуть обратно квадратик
  main_menu_container.classList.remove("main-menu-container-active"); // убрать меню
 } 
});



// обработчик событий для клика по квадратику, отображаем меню или прячем его
main_menu_switch.addEventListener("click", element => {
  main_menu_switch.classList.toggle("main-menu-switch-active");
  main_menu_container.classList.toggle("main-menu-container-active");
});

// обработчик собитий клика по меню
main_menu_container.addEventListener("click", element => { 

  if ( !element.target.classList.toString().includes(default_class_main_card) ) return;

  delete_cards(); // удалить все карточки 
  
  add_main_cards( element.target.getAttribute("name").toString() ); // добавить главные карточки

  add_cards(element.target.getAttribute("name").toString()); // добавить карточки определённой категории

  main_menu_switch.classList.remove("main-menu-switch-active"); // повернуть обратно квадратик
  main_menu_container.classList.remove("main-menu-container-active"); // убрать меню

});

// обработчик событий клика по контейнеру карточек для карточек меню
cards_container.addEventListener("click", element => { 
  
  if ( !element.target.parentNode.classList.toString().includes("item") ) return;

  delete_cards(); // удалить все карточки
  
  add_cards( element.target.parentNode.getAttribute("name") ); // добавить карточки той самой категории


  main_menu_switch.classList.remove("main-menu-switch-active"); // повернуть обратно квадратик
  main_menu_container.classList.remove("main-menu-container-active"); // убрать меню

});

// обработчик событий клика по карточке, тоесть её картинке (воспроизвести аудио)
cards_container.addEventListener("click", element => { 
  let text_this;// переменная в которой текст текущей карточки
  let src; // путь к аудиозаписи
  // если кликнули по клавной карточке или не по картинке карточки то сразу завершить досрочно
  if ( element.target.parentNode.classList.toString().includes("item") || !element.target.classList.toString().includes("card-image") ) { 
    return; 
  }
  
  // в этом цикле перебираем всё содержимое карточки, находим текст и присваиваем его переменной
  for( let i of element.target.parentNode.children ) {
    if (i.tagName == "FIGCAPTION") {
      text_this = i.innerText.toString();
    } 
  };
 
  // перебираем массив объектов и находим текущую карточку
  for( let i = 0; i < array_objects_cards.length; i++ ) {
    src = array_objects_cards[i].audioSrc;
    if ( array_objects_cards[i].word == text_this ) break;
  }
  
  soundPlay(src);
});



