(function () {
  'use strict';

  var MAX = 60, ALTO = 170;
  var dias = [
    { d: '12/9', a: 24, b: 6 },
    { d: '13/9', a: 28, b: 5 },
    { d: '14/9', a: 26, b: 8 },
    { d: '15/9', a: 33, b: 7 },
    { d: '16/9', a: 31, b: 9 },
    { d: '17/9', a: 38, b: 6 },
    { d: '18/9', a: 41, b: 8 },
    { d: '19/9', a: 36, b: 5 },
    { d: '20/9', a: 45, b: 9 },
    { d: '21/9', a: 49, b: 8 }
  ];

  var bars = document.getElementById('bars');
  var xaxis = document.getElementById('xaxis');
  var tabla = document.getElementById('tabla-datos');
  var tip = document.getElementById('tip');
  var tipD = document.getElementById('tip-d');
  var tipA = document.getElementById('tip-a');
  var tipB = document.getElementById('tip-b');

  function alto(v) { return Math.round((v / MAX) * ALTO) + 'px'; }

  dias.forEach(function (row, i) {
    var ultimo = i === dias.length - 1;
    var g = document.createElement('div');
    g.className = 'bgroup';
    g.innerHTML =
      '<div class="bslot">' + (ultimo ? '<b>' + row.a + '</b>' : '') +
        '<i class="bar" style="height:' + alto(row.a) + ';background:#0E7A50"></i></div>' +
      '<div class="bslot">' + (ultimo ? '<b>' + row.b + '</b>' : '') +
        '<i class="bar" style="height:' + alto(row.b) + ';background:#2a78d6"></i></div>';
    g.addEventListener('mouseenter', function () {
      tipD.textContent = row.d;
      tipA.textContent = row.a;
      tipB.textContent = row.b;
      tip.style.left = ((i + 0.5) / dias.length * 100) + '%';
      tip.classList.add('on');
    });
    g.addEventListener('mouseleave', function () { tip.classList.remove('on'); });
    bars.appendChild(g);

    var x = document.createElement('span');
    x.textContent = row.d;
    xaxis.appendChild(x);

    var tr = document.createElement('tr');
    tr.innerHTML = '<th scope="row">' + row.d + '</th><td>' + row.a + '</td><td>' + row.b + '</td>';
    tabla.appendChild(tr);
  });

  // Las seis puertas como embudo. Rampa de un solo tono, claro a oscuro.
  var ANCHO = 190;
  var puertas = [
    { n: 'Lead',        v: 1240, p: '100 %',  c: '#dbe8f8' },
    { n: 'Atención',    v: 892,  p: '71,9 %', c: '#b3cdf0' },
    { n: 'Grabación',   v: 641,  p: '71,9 %', c: '#8ab1e7' },
    { n: 'Seguimiento', v: 498,  p: '77,7 %', c: '#6295de' },
    { n: 'Móviles',     v: 402,  p: '80,7 %', c: '#3a79d5' },
    { n: 'Fibra',       v: 331,  p: '82,3 %', c: '#1f5aa8' }
  ];
  var funnel = document.getElementById('funnel');
  puertas.forEach(function (e) {
    var w = Math.max(8, Math.round((e.v / 1240) * ANCHO));
    var row = document.createElement('div');
    row.className = 'frow';
    row.style.height = '40px';
    row.innerHTML =
      '<div class="frow-k"><span class="n">' + e.n + '</span><span class="p">' + e.p + '</span></div>' +
      '<div class="frow-bar"><i style="width:' + w + 'px;background:' + e.c + '"></i></div>' +
      '<span class="frow-v">' + e.v.toLocaleString('es-ES') + '</span>';
    funnel.appendChild(row);
  });
})();
