//your JS code here. If required.
function getWindowSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return { width, height };
}

function updateWindowSize() {
  const windowSize = getWindowSize();
  const div = document.getElementById('sizeInfo');
  div.innerText = 'Width: ' + windowSize.width +'Height: ' + windowSize.height;
}

// Initial window size
window.addEventListener('load', updateWindowSize);

// Update window size on resize
window.addEventListener('resize', updateWindowSize);
