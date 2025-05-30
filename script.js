function startTour() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("desktop").style.display = "block";

  const audio = document.getElementById("welcome-audio");
  audio.volume = 1.0;
  audio.play(); // Redare imediată, fără avertismente
}

// Ceasul
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById("clock").textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Ferestre
function openWindow(id) {
  document.getElementById("window-" + id).style.display = "block";
}

function closeWindow(id) {
  document.getElementById("window-" + id).style.display = "none";
}

function toggleStartMenu() {
  alert("Start Menu not implemented (yet).");
}
