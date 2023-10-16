/**
1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
 */
function changeCSS() {
  const btnFirst = document.getElementsByTagName("button")[0];
  const btnSecond = document.getElementsByTagName("button")[1];
  const btnThird = document.getElementsByTagName("button")[2];
  const body = document.querySelector("body");
  const link = document.querySelector("a");
  btnFirst.addEventListener('click', function () {
    body.style.backgroundColor = "blue";
  });
  btnSecond.addEventListener('dblclick', function () {
    body.style.backgroundColor = "pink";
  });
  btnThird.addEventListener('mousedown', function () {
    body.style.backgroundColor = "brown";
  });
  btnThird.addEventListener('mouseup', function () {
    body.style.backgroundColor = "white";
  });
  link.addEventListener('mouseover', function () {
    body.style.backgroundColor = "yellow";
  });
  link.addEventListener('mouseout', function () {
    body.style.backgroundColor = "white";
  });
};
changeCSS();