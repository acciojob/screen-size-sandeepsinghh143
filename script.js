function updateWindowSize() {
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const div = document.getElementById('sizeInfo');
  const heading=document.createElement("h1");
  heading.innerText = 'Width: ' + width +' and Height: ' + height;
	div.append(heading);
}

// Initial window size
window.addEventListener('load', updateWindowSize);

// Update window size on resize
window.addEventListener('resize', updateWindowSize);
