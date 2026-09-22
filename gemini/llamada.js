var seg = 154;
var clockEl = document.getElementById('call-clock');
setInterval(function() {
  seg++;
  var m = String(Math.floor(seg / 60)).padStart(2, '0');
  var s = String(seg % 60).padStart(2, '0');
  clockEl.textContent = m + ':' + s;
}, 1000);

var muted = false;
function toggleMute() {
  muted = !muted;
  var b = document.getElementById('btn-mute');
  b.textContent = muted ? 'Silenciado' : 'Mute';
  b.style.background = muted ? 'var(--gold-vibrant)' : '';
  b.style.color = muted ? '#FFFFFF' : '';
}
