let started = false;

window.addEventListener('click', () => {
  if (started) return;
  started = true;

  // Redă sunetul
  const audio = new Audio('audio/title.mp3');
  audio.play();

  // Așteaptă 4 secunde și apoi schimbă spre desktop
  setTimeout(() => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
  }, 4000);
});
