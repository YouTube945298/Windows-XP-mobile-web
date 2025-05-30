// Deschide fereastra cu id-ul window-notepad sau window-media
function openWindow(id) {
  document.getElementById('window-' + id).style.display = 'flex';
}

// Închide fereastra
function closeWindow(id) {
  document.getElementById('window-' + id).style.display = 'none';
}

// Funcție placeholder pentru butonul Start
function toggleStartMenu() {
  alert('Start Menu clicked (not implemented)');
}

// Ceas digital în taskbar
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
