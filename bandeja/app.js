(function () {
  'use strict';

  // El cliente está en España y el asesor en Lima: la franja se guarda en hora
  // de Madrid y se muestra también en hora de Lima, que es la que él vive.
  var LEADS = [
    { n: 'Marta Ibáñez',  a: 'Vídeo oferta abril · Madrid 35-55',   t: '+34 610 44 21 08', fr: '16:00–19:00', esp: '7m 12s', sla: true,  e: 'Sin contactar', c: 'warm' },
    { n: 'Carlos Bravo',  a: 'Carrusel testimonios · Levante',      t: '+34 655 90 13 74', fr: '10:00–13:00', esp: '6m 03s', sla: true,  e: 'Sin contactar', c: 'warm' },
    { n: 'Rosa Quintana', a: 'Formulario corto · Andalucía',        t: '+34 687 22 16 40', fr: '17:00–20:00', esp: '5m 41s', sla: true,  e: 'Sin contactar', c: 'warm' },
    { n: 'Jorge Salazar', a: 'Reels promoción · Madrid centro',     t: '+34 654 11 83 02', fr: '09:00–12:00', esp: '3m 18s', sla: false, e: 'Llamando',      c: 'calm' },
    { n: 'Nuria Tejedor', a: 'Vídeo oferta abril · Barcelona',      t: '+34 622 77 45 19', fr: '15:00–18:00', esp: '2m 05s', sla: false, e: 'Interesado',    c: 'blue' },
    { n: 'Diego Ramos',   a: 'Formulario corto · Zaragoza',         t: '+34 631 66 01 55', fr: '11:00–14:00', esp: '1m 47s', sla: false, e: 'No contesta',   c: 'mute' },
    { n: 'Alicia Fuster', a: 'Carrusel testimonios · Madrid 35-55', t: '+34 691 30 88 62', fr: '18:00–21:00', esp: '52s',    sla: false, e: 'Sin contactar', c: 'warm' }
  ];

  // Madrid va 7 h por delante de Lima (CEST). Se calcula, no se teclea.
  function aLima(franja) {
    return franja.split('–').map(function (h) {
      var p = h.split(':');
      return String((parseInt(p[0], 10) + 24 - 7) % 24).padStart(2, '0') + ':' + p[1];
    }).join('–');
  }

  function iniciales(n) {
    return n.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
  }

  var tel = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/></svg>';
  var lista = document.getElementById('lista');

  LEADS.forEach(function (l) {
    var row = document.createElement('div');
    row.className = 'lrow lbody' + (l.sla ? ' sla' : '');
    row.innerHTML =
      '<div class="av av-es">' + iniciales(l.n) + '</div>' +
      '<div><span class="lname">' + l.n + '</span><span class="lad">' + l.a + '</span></div>' +
      '<span class="ltel">' + l.t + '</span>' +
      '<div><span class="lname num" style="font-size:13px">' + l.fr + '</span>' +
        '<span class="lad num">' + aLima(l.fr) + ' en Lima</span></div>' +
      '<span class="lwait">' + l.esp + '</span>' +
      '<span class="pill p-' + l.c + '">' + l.e + '</span>' +
      '<a class="call" href="/llamada.html">' + tel + 'Llamar</a>';
    lista.appendChild(row);
  });
})();
