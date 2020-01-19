let language = window.navigator
  ? window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage
  : "en";

language = language.substr(0, 2).toLowerCase();

if (language === "uk" || language === "ru") {  
  let text = Array.from(document.querySelectorAll("p.text"));
  text[0].innerHTML = "Горячие тесты";
  text[1].innerHTML = "Эмоциональные тесты";
  text[2].innerHTML = "Веселые тесты";
  text[3].innerHTML = "Тесты на персонажей";
  document.querySelector(".rec").innerHTML = "Рекомендуем";
  document.querySelector(".next_tit").innerHTML = "Продолжить просмотр";
  document.querySelector(".copyright.font-noto-regular").innerHTML = "Copyright © 2020 Funtest. Все права защищены.";
  document.title = 'Funtest - давайте исследовать вашу интересную душу вместе';
}
