const allAnswerButtons = Array.from(document.querySelectorAll("button.answer"));
const allTests = Array.from(document.querySelectorAll("div.testing-content"));
const startTestButton = document.querySelector("#start-test");

let testShow = 0;

const chooseAnswer = () => {
  if (testShow !== allTests.length - 1) {
    allTests[testShow].style.display = "none";
    testShow = testShow + 1;
    return (allTests[testShow].style.display = "block");
  } else {
    window.location.href = "result.html";
  }
};

const startTest = () => {
  window.scrollTo(0, 0);
  document.querySelector(".swiper-container").style.display = "none";
  allTests[0].style.display = "block";
};

startTestButton.addEventListener("click", startTest);

allAnswerButtons.forEach(button => {
  button.addEventListener("click", chooseAnswer);
});

const testData = [
    {
      0: ["1. Aaa", "like", "dislike", "Ыыы"]
    },
    {
      1: ["2. Ббб", "like", "dislike", "Ыыы"]
    },
    {
      2: ["3. Ввв", "like", "dislike", "okay"]
    },
    {
      3: ["4. Aaa", "like", "dislike", "okay"]
    },
    {
      4: ["5. Aaa", "like", "dislike", "okay"]
    },
    {
      5: ["6. Aaa", "like", "dislike", "okay"]
    },
    {
      6: ["7. Aaa", "like", "dislike", "okay"]
    },
    {
      7: ["8. Aaa", "like", "dislike", "okay"]
    },
    {
      8: ["9. Aaa", "like", "dislike", "okay"]
    }
  ];

let language = window.navigator
  ? window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage
  : "en";

language = language.substr(0, 2).toLowerCase();

if (language === "uk" || language === "ru") {
  document.querySelector('.card-name').innerHTML = 'Ваша удача станет лучше после того, как вы влюбитесь?';
  document.querySelector('.desc-content.show').innerHTML = 'Многим людям не повезло, и им не везет, когда они сталкиваются с вещами, которые не подходят для их жизни или работы. Однако после того, как я влюбился, мне стало очень повезло. Вот почему у некоторых людей хорошее настроение, но это потому, что любовь изменила некоторые из ваших подсознательных умов и мнений, сделав вас более комфортными, а удача - лучше. Так будет ли удача влюбиться лучше? Проверьте это, и вы будете знать ответ. Давайте вместе проведем тест на любовь!'
  startTestButton.innerHTML = 'Начать тест';
  document.querySelector(".next_tit").innerHTML = "Продолжить просмотр";
  document.querySelector(".copyright.font-noto-regular").innerHTML = "Copyright © 2020 Funtest. Все права защищены.";
  document.title = 'Funtest - давайте исследовать вашу интересную душу вместе';

  testData.map(test => {
    let num = testData.indexOf(test);
    allTests[num].children[0].children[0].innerText = test[num][0];
    for (let i = 1; i < 4; i++) {
      allTests[num].children[0].children[i].children[1].innerText = test[num][i];
    }
  });
}