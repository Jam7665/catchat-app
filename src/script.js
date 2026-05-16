const container = document.getElementById('appContainer');
const frame = document.getElementById('appFrame');

// Toggle fullscreen when the iframe element is clicked (user gesture).
frame.addEventListener('click', async () => {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }
  try {
    if (container.requestFullscreen) await container.requestFullscreen();
    else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
    else if (container.mozRequestFullScreen) container.mozRequestFullScreen();
    else if (container.msRequestFullscreen) container.msRequestFullscreen();
  } catch (err) {
    console.warn('Fullscreen request failed', err);
  }
});