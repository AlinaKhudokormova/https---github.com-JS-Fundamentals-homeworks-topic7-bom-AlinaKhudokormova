const newWindow = window.open("", "Hello", "width=300, height=300");
setTimeout(function () {
  newWindow.resizeTo(500, 500);
  setTimeout(function () {
    newWindow.moveTo(200, 200);
    setTimeout(function () {
      newWindow.close();
    }, 2000);
  }, 2000);
}, 2000);
