let language = window.navigator
  ? window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage
  : "en";

language = language.substr(0, 2).toLowerCase();

if (language === "uk" || language === "ru") {
  document.querySelector(".rec").innerHTML = "Возможно понравится";
  document.querySelector(".copyright.font-noto-regular").innerHTML = "Copyright © 2020 Funtest. Все права защищены.";
  document.querySelector(".desc").innerHTML = "С, тебе меньше всего нравится другая половина. Вам не нравится другая половина. Другая половина груба. Вы уделяете большое внимание личным качествам. Я надеюсь, что я квалифицированный цивилизованный человек. Я также надеюсь, что другая половина моей жизни такая же. Людям, которые хотят смешаться в этом мире, вежливость является очень необходимым условием. Никому не понравится иметь дело с неполитическими человек. Поэтому, пока вы видите другую половину грубо, вы не будете счастливы.";
  document.querySelector(".repeat_btn.repeat_tit").innerHTML = "Пройти тест заново";
  document.querySelector(".nextTopic_btn.nextTopic_tit").innerHTML = "Следующий тест";
  document.title = 'Funtest - давайте исследовать вашу интересную душу вместе';
}
