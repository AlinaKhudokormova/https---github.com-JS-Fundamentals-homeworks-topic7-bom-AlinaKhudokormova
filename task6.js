function displayWindowSize() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  document.getElementById('windowSize').innerHTML = 'Width: ' + width + ', Height: ' + height;
}

window.onload = displayWindowSize;
window.onresize = displayWindowSize;