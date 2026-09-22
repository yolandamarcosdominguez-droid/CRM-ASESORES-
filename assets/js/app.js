/* CRM Campaña — armazón común
   Equipo en Perú (America/Lima) · mercado España (Europe/Madrid)
   El carril, el fichaje y los dos relojes se construyen aquí para que
   las cinco pantallas no se desincronicen. El carril se pliega a 66 px
   y recuerda cómo lo dejaste. */

(function () {
  'use strict';

  var ROLES = {
    asesor:      { nombre: 'Asesora',     quien: 'Lucía Márquez', ini: 'LM', sede: 'Lima', casa: '/bandeja.html' },
    backoffice:  { nombre: 'Back office', quien: 'Nicol Farfán',  ini: 'NF', sede: 'Lima', casa: '/backoffice.html' },
    coordinador: { nombre: 'Coordinador', quien: 'Aarón Peralta', ini: 'AP', sede: 'Lima', casa: '/equipo.html' },
    supervisor:  { nombre: 'Supervisora', quien: 'Allyson Vega',  ini: 'AV', sede: 'Lima', casa: '/equipo.html' },
    gerencia:    { nombre: 'Gerencia',    quien: 'Darling Ruiz',  ini: 'DR', sede: 'Lima', casa: '/campana.html' }
  };

  var ICON = {
    bandeja: '<path d="M4 13h4l2 3h4l2-3h4"/><path d="M5 5h14l1 8v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z"/>',
    llamada: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    deck:    '<path d="M3 17h18"/><path d="M5 17V9l7-4 7 4v8"/><path d="M9 17v-4h6v4"/>',
    equipo:  '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 5M17.5 20a6 6 0 0 0-2-4.5"/>',
    campana: '<path d="M4 19V10M10 19V5M16 19v-6M21 19H3"/>'
  };

  // Quién ve qué. El asesor entra a la cubierta pero solo ve SUS ventas.
  var NAV = [
    { id: 'bandeja', href: '/bandeja.html',    txt: 'Bandeja',     icon: 'bandeja', roles: ['asesor', 'coordinador', 'supervisor', 'gerencia'], count: '14' },
    { id: 'llamada', href: '/llamada.html',    txt: 'Llamada',     icon: 'llamada', roles: ['asesor', 'coordinador', 'supervisor', 'gerencia'] },
    { id: 'deck',    href: '/backoffice.html', txt: 'La cubierta', icon: 'deck',    roles: ['asesor', 'backoffice', 'coordinador', 'supervisor', 'gerencia'] },
    { id: 'equipo',  href: '/equipo.html',     txt: 'Equipo',      icon: 'equipo',  roles: ['coordinador', 'supervisor', 'gerencia'] },
    { id: 'campana', href: '/campana.html',    txt: 'Campaña',     icon: 'campana', roles: ['supervisor', 'gerencia'] }
  ];

  function leer(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function guardar(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* modo privado */ } }

  var rol = leer('crm-rol', document.body.dataset.rolDefecto || 'asesor');
  if (!ROLES[rol]) rol = 'asesor';

  function svg(d, t) {
    return '<svg width="' + (t || 17) + '" height="' + (t || 17) + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  }

  /* ---------- carril ---------- */

  function pintarCarril() {
    var el = document.getElementById('rail');
    if (!el) return;
    var actual = document.body.dataset.pagina;
    var yo = ROLES[rol];

    var links = NAV.filter(function (n) { return n.roles.indexOf(rol) !== -1; }).map(function (n) {
      var on = n.id === actual;
      var cuenta = (n.count && rol !== 'backoffice') ? '<span class="nav-count">' + n.count + '</span>' : '';
      return '<a href="' + n.href + '" title="' + n.txt + '"' + (on ? ' aria-current="page"' : '') + '>' +
        svg(ICON[n.icon]) + '<span class="txt">' + n.txt + '</span>' + cuenta + '</a>';
    }).join('');

    el.innerHTML =
      '<div class="brand">' +
        '<div class="brand-mark">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17h18"/><path d="M5 17V9l7-4 7 4v8"/></svg>' +
        '</div>' +
        '<div class="brand-text"><span class="brand-name">Portaaviones</span>' +
        '<span class="brand-sub">LIMA → ESPAÑA</span></div>' +
        '<button type="button" class="rail-toggle" id="rail-toggle" aria-label="Plegar o desplegar el menú"></button>' +
      '</div>' +
      '<div class="nav">' + links + '</div>' +
      '<div class="rail-gap"></div>' +
      '<div class="rail-foot">' +
        '<div class="punch">' +
          '<span class="punch-k">Asistencia de hoy</span>' +
          '<button type="button" class="punch-btn" id="punch"></button>' +
          '<div class="punch-log" id="punch-log"></div>' +
        '</div>' +
        '<div class="me">' +
          '<div class="me-av" title="' + yo.quien + '">' + yo.ini + '</div>' +
          '<div class="me-text"><span class="me-name">' + yo.quien + '</span>' +
          '<span class="me-role">' + yo.nombre + ' · ' + yo.sede + '</span></div>' +
        '</div>' +
      '</div>';

    montarPlegado();
    montarFichaje();
  }

  function montarPlegado() {
    var b = document.getElementById('rail-toggle');
    if (!b) return;
    function pinta() {
      var min = document.body.classList.contains('rail-min');
      b.innerHTML = svg(min ? '<path d="M9 6l6 6-6 6"/>' : '<path d="M15 6l-6 6 6 6"/>', 16);
      b.setAttribute('aria-expanded', String(!min));
    }
    b.addEventListener('click', function () {
      var min = document.body.classList.toggle('rail-min');
      guardar('crm-rail', min ? '1' : '0');
      pinta();
    });
    pinta();
  }

  /* ---------- fichaje: entrada y salida ---------- */

  function hoyClave() { return 'crm-ficha-' + rol + '-' + new Date().toISOString().slice(0, 10); }
  function horaLima() {
    return new Intl.DateTimeFormat('es-PE', {
      timeZone: 'America/Lima', hour: '2-digit', minute: '2-digit', hour12: false
    }).format(new Date());
  }

  function montarFichaje() {
    var btn = document.getElementById('punch');
    var log = document.getElementById('punch-log');
    if (!btn) return;

    var IN  = '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l5-5-5-5M15 12H3"/>';
    var OUT = '<path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>';
    var OK  = '<path d="m5 13 4 4L19 7"/>';

    function estado() {
      var p = leer(hoyClave(), '').split('|');
      return { entrada: p[0] || '', salida: p[1] || '' };
    }

    function pinta() {
      var s = estado();
      btn.className = 'punch-btn';
      if (!s.entrada) {
        btn.innerHTML = svg(IN, 15) + '<span class="txt">Fichar entrada</span>';
        btn.title = 'Fichar entrada';
        btn.disabled = false;
      } else if (!s.salida) {
        btn.innerHTML = svg(OUT, 15) + '<span class="txt">Fichar salida</span>';
        btn.title = 'Fichar salida';
        btn.classList.add('out');
        btn.disabled = false;
      } else {
        btn.innerHTML = svg(OK, 15) + '<span class="txt">Jornada cerrada</span>';
        btn.title = 'Jornada cerrada';
        btn.disabled = true;
      }
      log.innerHTML =
        '<span><b>Entrada</b> ' + (s.entrada || '—') + '</span>' +
        '<span><b>Salida</b> ' + (s.salida || '—') + '</span>';
    }

    btn.addEventListener('click', function () {
      var s = estado(), h = horaLima();
      if (!s.entrada) guardar(hoyClave(), h + '|');
      else if (!s.salida) guardar(hoyClave(), s.entrada + '|' + h);
      pinta();
    });

    pinta();
  }

  /* ---------- los dos relojes ---------- */

  function hora(tz) {
    return new Intl.DateTimeFormat('es-ES', {
      timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false
    }).format(new Date());
  }

  function pintarRelojes() {
    var el = document.getElementById('clocks');
    if (!el) return;
    function tic() {
      var lima = hora('America/Lima'), madrid = hora('Europe/Madrid');
      // Franja legal de llamada comercial en España: 09:00–21:00
      var hEs = parseInt(madrid.slice(0, 2), 10);
      var abierto = hEs >= 9 && hEs < 21;
      el.innerHTML =
        '<div class="clock here"><span class="z">LIMA · TÚ</span><span class="t">' + lima + '</span></div>' +
        '<div class="clock' + (abierto ? '' : ' shut') + '"><span class="z">MADRID · CLIENTE</span>' +
        '<span class="t">' + madrid + '</span></div>' +
        (abierto ? '' : '<div class="clock shut" style="min-width:auto;justify-content:center">' +
          '<span class="z">FUERA DE HORARIO</span>' +
          '<span class="t" style="font-size:12px;font-family:var(--sans);font-weight:700">No se llama</span></div>');
    }
    tic();
    setInterval(tic, 10000);
  }

  /* ---------- selector de puesto (solo maqueta) ---------- */

  function pintarSelector() {
    var el = document.getElementById('rolebar');
    if (!el) return;
    var ops = Object.keys(ROLES).map(function (k) {
      return '<option value="' + k + '"' + (k === rol ? ' selected' : '') + '>' + ROLES[k].nombre + '</option>';
    }).join('');
    el.innerHTML =
      '<span class="tagline">Maqueta</span>' +
      '<label class="lbl" for="rolsel">Viendo como</label>' +
      '<select id="rolsel">' + ops + '</select>' +
      '<span class="note" id="rolnota"></span>' +
      '<a class="lbl" href="/index.html" style="margin-left:auto;font-weight:700;white-space:nowrap">Cambiar de puesto</a>';

    var NOTA = {
      asesor:      'Recibe leads, llama y ve el estado de SUS ventas. No mueve estaciones.',
      backoffice:  'Única mano sobre la ruta. Verifica y hace avanzar cada venta.',
      coordinador: 'Ve las ventas de su equipo, manda correos y puede reclamar revisión.',
      supervisor:  'Todo lo del coordinador más la gestión de asistencias.',
      gerencia:    'Lo ve todo. También ficha.'
    };
    document.getElementById('rolnota').textContent = NOTA[rol];
    document.getElementById('rolsel').addEventListener('change', function (e) {
      guardar('crm-rol', e.target.value);
      location.reload();
    });
  }

  window.CRM = { rol: rol, roles: ROLES };

  // Se aplica antes de pintar para que no haya salto visual al cargar.
  if (leer('crm-rail', '0') === '1') document.body.classList.add('rail-min');

  document.addEventListener('DOMContentLoaded', function () {
    pintarCarril();
    pintarRelojes();
    pintarSelector();

    document.querySelectorAll('.segmented').forEach(function (g) {
      g.addEventListener('click', function (e) {
        var b = e.target.closest('.seg');
        if (!b) return;
        g.querySelectorAll('.seg').forEach(function (x) {
          x.setAttribute('aria-pressed', String(x === b));
        });
      });
    });
  });
})();
