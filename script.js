const main_menu_switch = document.getElementById("main-menu-switch-js"); // указатель на квадратик для обработчика клика для отображения меню
const main_menu_container = document.getElementById("main-menu-container-js");  // указатель на выдвижное меню


// обработчик событий для клика по квадратику, отображаем меню или прячем его
main_menu_switch.addEventListener("click", element => {
  main_menu_switch.classList.toggle("main-menu-switch-active");
  main_menu_container.classList.toggle("main-menu-container-active");
});


const array_objects_cards = [
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
    }
];

//asfdsf

// указатель на контейнер карточек                            
const cards_container = document.getElementById("cards-container-js"); // указатель на контейнер карточек
const default_class_card = "card"; // стандартный класс карточек
const default_class_img_card = "card-image";
const default_class_text = "card-text";
const default_class_container_svg = "rotate-button";
const default_class_svg = "rotate-button__svg";


// цикл по массиву объектов карточек
array_objects_cards.forEach( element => {

   let card = document.createElement("figure"); // создали карточку
   card.classList.add( default_class_card, element.categories ) // присвоили ей 2 класса
   card.setAttribute( "name", element.categories ); // накинули атрибут name

   let img = document.createElement("img");  // создали картинку
   img.classList.add(default_class_img_card); // добавили картинке класс
   img.setAttribute("src", element.image); // дали ей путь
   card.append(img);  // положили картинку в карточку
   
   let text = document.createElement("figcaption"); // создали figcaption Для текста
   text.classList.add( default_class_text ); // добавили ему класс
   text.innerText = element.word; // пооложили туда текст
   card.append( text ); // положили текст в карточку
   
   let container_svg = document.createElement("div");
   container_svg.classList.add(default_class_container_svg);


   let img_arrow = document.createElement('img');
   img_arrow.classList.add('hand-drawn-arrow');
   img_arrow.setAttribute("src", "images/hand-drawn-arrow.png");
   
   container_svg.appendChild(img_arrow);

   
  

 
   
   card.appendChild(container_svg);

   cards_container.appendChild(card);
});



                          
              