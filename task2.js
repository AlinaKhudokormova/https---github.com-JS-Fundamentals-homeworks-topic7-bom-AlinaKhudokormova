function changeCSS() {
  const btn = document.querySelector("button");
  const paragraph = document.querySelector("p");
  btn.addEventListener('click', function () {
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontStyle = 'Comic Sans MS';
  });
  }
changeCSS();