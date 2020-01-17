const allAnswerButtons = Array.from(document.querySelectorAll('button.answer'));
const allTests = Array.from(document.querySelectorAll('div.testing-content'));
const startTestButton = document.querySelector('#start-test');

let testShow = 0;

const chooseAnswer = () => {
  if (testShow !== allTests.length - 1) {
    allTests[testShow].style.display = 'none';
    testShow = testShow + 1;
    return allTests[testShow].style.display = 'block';
  } else {
    window.location.href = 'result.html';
  }
}

const startTest = () => {
  document.querySelector('.swiper-container').style.display = 'none';
  allTests[0].style.display = 'block';
}

startTestButton.addEventListener('click', startTest)

allAnswerButtons.forEach((button) => {
  button.addEventListener('click', chooseAnswer)
})