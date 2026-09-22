(function () {
  'use strict';

  var GENTE = [
    { n: 'Lucía Márquez',   r: 'Asesora',     e: '07:56', s: '',      st: 'in' },
    { n: 'Andrés Soler',    r: 'Asesor',      e: '07:58', s: '',      st: 'in' },
    { n: 'Nuria Tejedor',   r: 'Asesora',     e: '08:24', s: '',      st: 'late' },
    { n: 'Julio Reátegui',  r: 'Asesor',      e: '07:51', s: '',      st: 'in' },
    { n: 'Paula Cifuentes', r: 'Asesora',     e: '08:41', s: '',      st: 'late' },
    { n: 'Kiara Anglas',    r: 'Asesora',     e: '07:49', s: '16:02', st: 'out' },
    { n: 'Nicol Farfán',    r: 'Back office', e: '07:45', s: '',      st: 'in' },
    { n: 'Jhoselin Prado',  r: 'Back office', e: '07:59', s: '',      st: 'in' },
    { n: 'Aarón Peralta',   r: 'Coordinador', e: '07:40', s: '',      st: 'in' },
    { n: 'Dayanna Quiroz',  r: 'Asesora',     e: '',      s: '',      st: 'no' },
    { n: 'Darling Ruiz',    r: 'Asesor',      e: '',      s: '',      st: 'no' }
  ];

  var ETIQ = { in: 'Dentro', late: 'Tarde', out: 'Jornada cerrada', no: 'Sin fichar' };

  function horas(e, s) {
    if (!e) return '—';
    var fin = s || '12:30';
    function min(h) { var p = h.split(':'); return +p[0] * 60 + +p[1]; }
    var d = min(fin) - min(e);
    return Math.floor(d / 60) + 'h ' + String(d % 60).padStart(2, '0') + 'm' + (s ? '' : '…');
  }

  var cont = document.getElementById('asist');
  GENTE.forEach(function (p) {
    var ini = p.n.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
    var row = document.createElement('div');
    row.className = 'att-row att-body';
    row.innerHTML =
      '<div style="display:flex;align-items:center;gap:11px;min-width:0">' +
        '<span class="av" style="width:30px;height:30px;background:var(--wash);color:var(--mute-fg);font-size:11px">' + ini + '</span>' +
        '<span class="lname">' + p.n + '</span></div>' +
      '<span class="sub">' + p.r + '</span>' +
      '<span class="num" style="font-size:13px">' + (p.e || '—') + '</span>' +
      '<span class="num" style="font-size:13px">' + (p.s || '—') + '</span>' +
      '<span class="num" style="font-size:13px">' + horas(p.e, p.s) + '</span>' +
      '<span class="chip chip-' + p.st + '">' + ETIQ[p.st] + '</span>';
    cont.appendChild(row);
  });
})();
