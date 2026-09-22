(function () {
  'use strict';

  var seg = 154;
  var reloj = document.getElementById('reloj');
  function pinta() {
    reloj.textContent = String(Math.floor(seg / 60)).padStart(2, '0') + ':' + String(seg % 60).padStart(2, '0');
  }
  pinta();
  setInterval(function () { seg += 1; pinta(); }, 1000);

  // Medidor de voz: barras verdes = el asesor, grises = el cliente
  var alturas = [9,17,26,14,31,22,12,28,19,34,24,11,20,30,16,25,13,29,21,33,15,23,10,27,18,12];
  var onda = document.getElementById('onda');
  alturas.forEach(function (a, i) {
    var b = document.createElement('i');
    b.style.height = a + 'px';
    if (i < 13) b.className = 'on';
    onda.appendChild(b);
  });

  // La misma ruta que ve Back Office, para que asesor y verificador hablen
  // del mismo mapa. Esta venta va por Atención, km 120.
  var ESTACIONES = [
    { n: 'Lead', km: 0 }, { n: 'Atención', km: 120 }, { n: 'Grabación', km: 320 },
    { n: 'Seguimiento', km: 620 }, { n: 'Móviles', km: 1100 }, { n: 'Fibra', km: 1800 }
  ];
  var DESTINO = 1800, AQUI = 1;
  var JET = '<svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>';
  var CHECK = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>';
  function pc(km) { return (km / DESTINO) * 100; }

  document.getElementById('mini-head').innerHTML = ESTACIONES.map(function (e) {
    return '<span style="left:' + pc(e.km) + '%"><b>' + e.n + '</b><i>km ' +
      e.km.toLocaleString('es-ES') + '</i></span>';
  }).join('');

  var marcas = ESTACIONES.map(function (e, i) {
    if (i === AQUI) return '';
    return '<span class="stopmark ' + (i < AQUI ? 'sm-ok' : 'sm-todo') + '" style="left:' +
      pc(e.km) + '%" title="' + e.n + '">' + (i < AQUI ? CHECK : '') + '</span>';
  }).join('');

  document.getElementById('mini-route').innerHTML =
    '<span class="asphalt"></span><span class="covered"></span><span class="wake"></span>' +
    marcas + '<span class="finish"></span><span class="jet-slot"><span class="jet volando" aria-label="En Atención, km 120">' + JET + '</span></span>';

  setTimeout(function () {
    var d = pc(ESTACIONES[AQUI].km);
    document.querySelector('#mini-route .covered').style.width = d + '%';
    document.querySelector('#mini-route .jet-slot').style.left = d + '%';
  }, 120);

  var mic = document.getElementById('mic');
  var micTxt = document.getElementById('mic-txt');
  mic.addEventListener('click', function () {
    var on = mic.getAttribute('aria-pressed') === 'true';
    mic.setAttribute('aria-pressed', String(!on));
    mic.classList.toggle('muted', !on);
    micTxt.textContent = !on ? 'Silenciado' : 'Micrófono';
  });
})();
