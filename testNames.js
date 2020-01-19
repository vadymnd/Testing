const allTestNames = Array.from(document.querySelectorAll(".card-name"));
allTestNames.splice(0, 2);

const testNames = [
  "Первый",
  "Второй",
  "Третий",
  "Четвертый",
  "Пятый",
  "Шестой",
  "Седьмой",
  "Восьмой"
];

if (language === "uk" || language === "ru") {
  testNames.map(name => {
    let num = testNames.indexOf(name);
    allTestNames[num].innerHTML = name;
  });
};