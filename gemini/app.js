// Relojes Madrid & Lima
function tickClocks() {
  var d = new Date();
  var m = d.toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid', hour12: false });
  var l = d.toLocaleTimeString('es-ES', { timeZone: 'America/Lima', hour12: false });
  var elM = document.getElementById('madrid-clock');
  var elL = document.getElementById('lima-clock');
  if (elM) elM.textContent = m;
  if (elL) elL.textContent = l;
}
setInterval(tickClocks, 1000);
tickClocks();

// Diccionario oficial de operadores
var OPERADORES = {
  MERCED:   { id: 'MERCED',   n: 'Merced Fibra', c: '#1D4ED8', f: '/assets/logos/merced.svg', prod: 'Fibra 1Gbps + Móvil 50GB', precio: '34,90 €/mes' },
  DIGI:     { id: 'DIGI',     n: 'Digi Smart',   c: '#0E4A6F', f: '/assets/logos/digi.svg',   prod: 'Fibra Smart 1Gbps + Pro', precio: '30,00 €/mes' },
  LOWI:     { id: 'LOWI',     n: 'Lowi Simple',  c: '#7A9E00', f: '/assets/logos/lowi.svg',   prod: 'Fibra Fit 600Mb + 2 SIMs', precio: '29,95 €/mes' },
  O2:       { id: 'O2',       n: 'O2 España',    c: '#0033A0', f: '/assets/logos/o2.svg',     prod: 'Fibra 1Gbps + 100GB 5G', precio: '38,00 €/mes' },
  VODAFONE: { id: 'VODAFONE', n: 'Vodafone',     c: '#E60000', f: '/assets/logos/vodafone.svg', prod: 'Vodafone One Ilimitada', precio: '45,00 €/mes' },
  MOVISTAR: { id: 'MOVISTAR', n: 'Movistar',     c: '#009EF7', f: '/assets/logos/movistar.svg', prod: 'Movistar Fusión Base', precio: '52,00 €/mes' },
  ORANGE:   { id: 'ORANGE',   n: 'Orange',       c: '#FF7900', f: '/assets/logos/orange.svg',   prod: 'Love Cine y Series', precio: '59,00 €/mes' },
  MASMOVIL: { id: 'MASMOVIL', n: 'MásMóvil',     c: '#E6B800', f: '/assets/logos/masmovil.svg', prod: 'Fibra + Líneas Familia', precio: '39,90 €/mes' },
  YOIGO:    { id: 'YOIGO',    n: 'Yoigo',        c: '#400B81', f: '/assets/logos/yoigo.svg',    prod: 'Sinfín Fibra + GB', precio: '42,00 €/mes' }
};

function renderOpChip(opKey, isInteractive, leadId) {
  var op = OPERADORES[opKey] || { n: opKey, c: '#8792A4', f: '' };
  var dblClickAttr = isInteractive ? ' ondblclick="abrirSelectorOperador(' + leadId + ', event)" title="Doble clic para cambiar operador"' : '';
  return '<div class="op-chip-modern' + (isInteractive ? ' op-clickable' : '') + '"' + dblClickAttr + '>' +
    '<span class="op-dot" style="background:' + op.c + ';"></span>' +
    (op.f ? '<img src="' + op.f + '" alt="' + op.n + '" class="op-svg-logo">' : '') +
    '<span class="op-chip-title">' + op.n + '</span>' +
  '</div>';
}

var LEADS_ENCUESTA = [
  {
    id: 1,
    nombre: 'Marta Ibáñez',
    telefono: '+34 610 44 21 08',
    ciudad: 'Madrid (28013)',
    opDestino: 'MERCED',
    opOrigen: 'VODAFONE',
    espera: '7m 12s',
    sla: true,
    intentosNC: 0,
    estado: 'Sin contactar',
    wspEnviado: false,
    encuesta: {
      metaId: 'META-2026-98124',
      fechaEnvio: 'Hoy, hace 7 minutos',
      campana: 'Meta Ads · Fibra 1Gbps Madrid Ahorro',
      anuncio: 'Vídeo Ahorro Fibra Hogar (Instagram)',
      opActual: 'Vodafone',
      facturaActual: '68,00 €/mes',
      serviciosDeseados: 'Fibra 1Gbps + 2 Líneas móviles (50GB c/u)',
      permanencia: 'Cumplida (Libre de penalización)',
      codigoPostal: '28013',
      direccion: 'Calle Gran Vía 42, 4º B, Madrid',
      horarioContacto: 'Tarde (16:00 a 19:00)',
      dispositivo: 'iPhone 15 · iOS Safari'
    }
  },
  {
    id: 2,
    nombre: 'Carlos Bravo',
    telefono: '+34 655 90 13 74',
    ciudad: 'Valencia (46002)',
    opDestino: 'DIGI',
    opOrigen: 'MOVISTAR',
    espera: '6m 03s',
    sla: true,
    intentosNC: 1,
    estado: 'No contestó (1)',
    wspEnviado: false,
    encuesta: {
      metaId: 'META-2026-98119',
      fechaEnvio: 'Hoy, hace 18 minutos',
      campana: 'Meta Ads · Portabilidad Levante Ahorro',
      anuncio: 'Carrusel Testimonios Fibra Smart',
      opActual: 'Movistar',
      facturaActual: '74,50 €/mes',
      serviciosDeseados: 'Portabilidad 3 Líneas + Fibra 600Mb',
      permanencia: 'Menos de 2 meses restantes',
      codigoPostal: '46002',
      direccion: 'Carrer de Colón 18, Valencia',
      horarioContacto: 'Mañana (10:00 a 13:00)',
      dispositivo: 'Samsung Galaxy S23 · Android Chrome'
    }
  },
  {
    id: 3,
    nombre: 'Rosa Quintana',
    telefono: '+34 687 22 16 40',
    ciudad: 'Sevilla (41001)',
    opDestino: 'LOWI',
    opOrigen: 'ORANGE',
    espera: '5m 41s',
    sla: true,
    intentosNC: 2,
    estado: 'No contestó (2)',
    wspEnviado: true,
    encuesta: {
      metaId: 'META-2026-98103',
      fechaEnvio: 'Hoy, hace 32 minutos',
      campana: 'Meta Ads · Formulario Corto Andalucía',
      anuncio: 'Imagen Estática Fibra Low Cost',
      opActual: 'Orange',
      facturaActual: '62,00 €/mes',
      serviciosDeseados: 'Solo Fibra 600Mb sin teléfono fijo',
      permanencia: 'Sin permanencia',
      codigoPostal: '41001',
      direccion: 'Calle Sierpes 29, Sevilla',
      horarioContacto: 'Cualquier momento',
      dispositivo: 'Xiaomi Redmi Note 12 · Chrome'
    }
  },
  {
    id: 4,
    nombre: 'Jorge Salazar',
    telefono: '+34 654 11 83 02',
    ciudad: 'Zaragoza (50001)',
    opDestino: 'MERCED',
    opOrigen: 'MASMOVIL',
    espera: '3m 18s',
    sla: false,
    intentosNC: 0,
    estado: 'Llamando',
    wspEnviado: false,
    encuesta: {
      metaId: 'META-2026-98098',
      fechaEnvio: 'Hoy, hace 45 minutos',
      campana: 'Meta Ads · Reels Promoción Fibra 1Gbps',
      anuncio: 'Reel Demostración Velocidad',
      opActual: 'MásMóvil',
      facturaActual: '55,00 €/mes',
      serviciosDeseados: 'Fibra 1Gbps + 1 Móvil con datos ilimitados',
      permanencia: 'Sin permanencia',
      codigoPostal: '50001',
      direccion: 'Paseo de la Independencia 14, Zaragoza',
      horarioContacto: 'Mañana (09:00 a 12:00)',
      dispositivo: 'iPhone 13 · Instagram Browser'
    }
  },
  {
    id: 5,
    nombre: 'Nuria Tejedor',
    telefono: '+34 622 77 45 19',
    ciudad: 'Barcelona (08001)',
    opDestino: 'O2',
    opOrigen: 'VODAFONE',
    espera: '2m 05s',
    sla: false,
    intentosNC: 0,
    estado: 'Interesado',
    wspEnviado: false,
    encuesta: {
      metaId: 'META-2026-98082',
      fechaEnvio: 'Hoy, hace 1h 10m',
      campana: 'Meta Ads · Vídeo Oferta Abril Barcelona',
      anuncio: 'Vídeo Familia Conectada',
      opActual: 'Vodafone',
      facturaActual: '81,20 €/mes',
      serviciosDeseados: 'Pack Familiar Fibra + 3 SIMs 50GB',
      permanencia: 'Finaliza este mes',
      codigoPostal: '08001',
      direccion: 'Rambla del Raval 12, Barcelona',
      horarioContacto: 'Tarde (15:00 a 18:00)',
      dispositivo: 'Google Pixel 7 · Android Chrome'
    }
  },
  {
    id: 6,
    nombre: 'Diego Ramos',
    telefono: '+34 631 66 01 55',
    ciudad: 'Málaga (29001)',
    opDestino: 'MERCED',
    opOrigen: 'YOIGO',
    espera: '1m 47s',
    sla: false,
    intentosNC: 3,
    estado: 'No contestó (3)',
    wspEnviado: true,
    encuesta: {
      metaId: 'META-2026-98071',
      fechaEnvio: 'Hoy, hace 1h 45m',
      campana: 'Meta Ads · Formulario Corto Costa del Sol',
      anuncio: 'Story Oferta Exclusiva Andalucía',
      opActual: 'Yoigo',
      facturaActual: '59,00 €/mes',
      serviciosDeseados: 'Fibra 300Mb + Móvil 30GB',
      permanencia: 'Sin permanencia',
      codigoPostal: '29001',
      direccion: 'Calle Larios 5, Málaga',
      horarioContacto: 'Mediodía (13:00 a 15:00)',
      dispositivo: 'iPhone 14 Pro · iOS Safari'
    }
  }
];

var leadActualLlamando = LEADS_ENCUESTA[0];
var leadSeleccionadoParaOperador = null;

function renderTablaLeads(arr) {
  var contenedor = document.getElementById('lista-leads');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  arr.forEach(function(l) {
    var row = document.createElement('div');
    row.className = 'leads-grid-row' + (l.sla ? ' sla' : '');

    var pillClass = 'p-warm';
    var dotClass = 'dot-amber';
    if (l.intentosNC >= 3) { pillClass = 'p-mute'; dotClass = 'dot-gray'; }
    else if (l.estado === 'Interesado') { pillClass = 'p-emerald'; dotClass = 'dot-emerald'; }
    else if (l.estado === 'Sin contactar') { pillClass = 'p-rose'; dotClass = 'dot-rose'; }
    else if (l.intentosNC > 0) { pillClass = 'p-amber'; dotClass = 'dot-amber'; }
    else if (l.estado === 'Llamando') { pillClass = 'p-blue'; dotClass = 'dot-blue'; }

    var wspBadge = l.wspEnviado ? '<span class="pill-wsp-modern" title="WhatsApp enviado">WSP</span>' : '';

    row.innerHTML =
      '<div class="cell-op">' +
        renderOpChip(l.opDestino, true, l.id) +
        '<div class="op-hint-txt">Viene de: <b>' + (OPERADORES[l.opOrigen] ? OPERADORES[l.opOrigen].n : l.opOrigen) + '</b></div>' +
      '</div>' +

      '<div class="cell-client">' +
        '<span class="lname-txt">' + l.nombre + '</span>' +
        '<span class="lcity-txt">' + l.ciudad + '</span>' +
      '</div>' +

      '<div class="cell-tel num">' + l.telefono + '</div>' +

      '<div class="cell-survey">' +
        '<span class="lsurvey-req">' + l.encuesta.serviciosDeseados + '</span>' +
        '<span class="lsurvey-pay">Paga: <b>' + l.encuesta.facturaActual + '</b></span>' +
      '</div>' +

      '<div class="cell-wait num">' + l.espera + '</div>' +

      '<div class="cell-status">' +
        '<span class="pill-modern ' + pillClass + '"><span class="dot-indicator ' + dotClass + '"></span>' + l.estado + '</span>' +
        wspBadge +
      '</div>' +

      '<div class="cell-actions">' +
        '<button type="button" class="btn-act btn-act-call" onclick="iniciarLlamadaConControl(' + l.id + ')" title="Llamar con softphone">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/></svg>' +
          '<span>Llamar</span>' +
        '</button>' +
        '<button type="button" class="btn-act btn-act-wsp" onclick="enviarWhatsAppDirecto(' + l.id + ')" title="Enviar WhatsApp">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' +
          '<span>WSP</span>' +
        '</button>' +
        '<button type="button" class="btn-act btn-act-info" onclick="abrirModalInfoEncuesta(' + l.id + ')" title="Ver encuesta completa">' +
          '<span>+ Info</span>' +
        '</button>' +
      '</div>';

    contenedor.appendChild(row);
  });
}
renderTablaLeads(LEADS_ENCUESTA);

// Modal +Info
window.abrirModalInfoEncuesta = function(id) {
  var lead = LEADS_ENCUESTA.find(function(item) { return item.id === id; });
  if (!lead) lead = LEADS_ENCUESTA[0];

  document.getElementById('info-modal-name').textContent = lead.nombre;
  document.getElementById('info-modal-tel').textContent = lead.telefono;
  document.getElementById('info-modal-city').textContent = lead.ciudad;
  document.getElementById('info-modal-meta-id').textContent = lead.encuesta.metaId;
  document.getElementById('info-modal-timestamp').textContent = lead.encuesta.fechaEnvio;
  document.getElementById('info-modal-campaign').textContent = lead.encuesta.campana;

  document.getElementById('info-q-operador').textContent = lead.encuesta.opActual;
  document.getElementById('info-q-factura').textContent = lead.encuesta.facturaActual;
  document.getElementById('info-q-servicios').textContent = lead.encuesta.serviciosDeseados;
  document.getElementById('info-q-permanencia').textContent = lead.encuesta.permanencia;
  document.getElementById('info-q-cp').textContent = lead.encuesta.codigoPostal + ' · ' + lead.ciudad;
  document.getElementById('info-q-horario').textContent = lead.encuesta.horarioContacto;
  document.getElementById('info-q-device').textContent = lead.encuesta.dispositivo;

  var opTarget = OPERADORES[lead.opDestino] || { n: lead.opDestino, c: '#1D4ED8' };
  document.getElementById('info-target-op-box').innerHTML =
    '<div style="display:flex; align-items:center; gap:10px;">' +
      renderOpChip(lead.opDestino, false, lead.id) +
      '<div>' +
        '<div style="font-size:12.5px; font-weight:700; color:#0F172A;">' + opTarget.prod + '</div>' +
        '<div style="font-size:11px; color:#64748B;">Tarifa asignada: <b>' + opTarget.precio + '</b></div>' +
      '</div>' +
    '</div>';

  var btnCall = document.getElementById('info-modal-btn-call');
  var btnWsp = document.getElementById('info-modal-btn-wsp');
  var btnNc = document.getElementById('info-modal-btn-nc');

  if (btnCall) btnCall.onclick = function() { cerrarModalInfoEncuesta(); iniciarLlamadaConControl(lead.id); };
  if (btnWsp) btnWsp.onclick = function() { enviarWhatsAppDirecto(lead.id); };
  if (btnNc) btnNc.onclick = function() { marcarNoContestoPorId(lead.id); };

  document.getElementById('modal-encuesta-completa').style.display = 'flex';
};

window.cerrarModalInfoEncuesta = function() {
  document.getElementById('modal-encuesta-completa').style.display = 'none';
};

// Selector Operador Doble Clic
window.abrirSelectorOperador = function(leadId, e) {
  if (e) e.stopPropagation();
  var lead = LEADS_ENCUESTA.find(function(item) { return item.id === leadId; });
  if (!lead) return;
  leadSeleccionadoParaOperador = lead;

  document.getElementById('pop-op-lead-name').textContent = lead.nombre;
  document.getElementById('pop-op-origin').textContent = (OPERADORES[lead.opOrigen] ? OPERADORES[lead.opOrigen].n : lead.opOrigen);

  var contenedorOpciones = document.getElementById('pop-op-grid-options');
  contenedorOpciones.innerHTML = '';

  var opcionesDisponibles = ['MERCED', 'DIGI', 'LOWI', 'O2', 'VODAFONE', 'ORANGE', 'MASMOVIL'];
  opcionesDisponibles.forEach(function(opKey) {
    var op = OPERADORES[opKey];
    var isCurrent = (lead.opDestino === opKey);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'op-choice-btn' + (isCurrent ? ' selected' : '');
    btn.innerHTML =
      '<img src="' + op.f + '" alt="' + op.n + '">' +
      '<span class="choice-txt">' + op.n + '</span>' +
      (isCurrent ? '<span class="choice-active-dot">✓</span>' : '');
    btn.onclick = function() {
      lead.opDestino = opKey;
      renderTablaLeads(LEADS_ENCUESTA);
      actualizarConsolaLlamadaActiva();
      cerrarSelectorOperador();
    };
    contenedorOpciones.appendChild(btn);
  });

  document.getElementById('modal-selector-operador').style.display = 'flex';
};

window.cerrarSelectorOperador = function() {
  document.getElementById('modal-selector-operador').style.display = 'none';
};

// =========================================================
// CONSOLA DE LLAMADA PROFESIONAL Y COCKPIT DE CIERRE
// =========================================================
var softphoneTimer = null;
var softphoneSegundos = 0;
var waveInterval = null;

function formatChrono(s) {
  var m = Math.floor(s / 60);
  var sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

window.iniciarLlamadaConControl = function(id) {
  var lead = LEADS_ENCUESTA.find(function(item) { return item.id === id; });
  if (lead) leadActualLlamando = lead;

  window.navegarA('llamada');
  actualizarConsolaLlamadaActiva();
  iniciarSoftphoneLlamada();
};

function actualizarConsolaLlamadaActiva() {
  var lead = leadActualLlamando || LEADS_ENCUESTA[0];
  document.getElementById('cockpit-lead-name').textContent = lead.nombre;
  document.getElementById('cockpit-lead-tel').textContent = lead.telefono;
  document.getElementById('cockpit-lead-city').textContent = lead.ciudad;
  document.getElementById('cockpit-lead-bill').textContent = lead.encuesta.facturaActual;
  document.getElementById('cockpit-lead-wants').textContent = lead.encuesta.serviciosDeseados;
  document.getElementById('cockpit-lead-op-box').innerHTML = renderOpChip(lead.opDestino, false, lead.id);
  document.getElementById('cockpit-donor-op-name').textContent = (OPERADORES[lead.opOrigen] ? OPERADORES[lead.opOrigen].n : lead.opOrigen);
}

window.iniciarSoftphoneLlamada = function() {
  var lead = leadActualLlamando || LEADS_ENCUESTA[0];
  var elTimer = document.getElementById('cockpit-timer');
  var elStatPill = document.getElementById('cockpit-status-pill');
  var elBtnHang = document.getElementById('cockpit-btn-hang');
  var elBtnCall = document.getElementById('cockpit-btn-call');
  var canvas = document.getElementById('cockpit-audio-canvas');

  softphoneSegundos = 0;
  if (softphoneTimer) clearInterval(softphoneTimer);
  if (waveInterval) clearInterval(waveInterval);

  elTimer.textContent = '00:00';
  elStatPill.className = 'cockpit-status-tag status-connecting';
  elStatPill.textContent = 'MARCANDO MADRID (+34)...';
  elBtnHang.style.display = 'inline-flex';
  elBtnCall.style.display = 'none';

  // Animación del osciloscopio de audio
  animarCanvasAudio(canvas, true);

  softphoneTimer = setInterval(function() {
    softphoneSegundos++;
    elTimer.textContent = formatChrono(softphoneSegundos);
    if (softphoneSegundos === 3) {
      elStatPill.className = 'cockpit-status-tag status-online';
      elStatPill.textContent = 'EN LÍNEA (Grabación Activa)';
    }
  }, 1000);
};

window.colgarSoftphone = function() {
  if (softphoneTimer) clearInterval(softphoneTimer);
  if (waveInterval) clearInterval(waveInterval);

  var elStatPill = document.getElementById('cockpit-status-pill');
  var elBtnHang = document.getElementById('cockpit-btn-hang');
  var elBtnCall = document.getElementById('cockpit-btn-call');
  var canvas = document.getElementById('cockpit-audio-canvas');

  elStatPill.className = 'cockpit-status-tag status-idle';
  elStatPill.textContent = 'LLAMADA FINALIZADA · SELECCIONA RESULTADO';
  elBtnHang.style.display = 'none';
  elBtnCall.style.display = 'inline-flex';

  animarCanvasAudio(canvas, false);
};

function animarCanvasAudio(canvas, active) {
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var w = canvas.width, h = canvas.height;

  if (!active) {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#CBD5E1';
    ctx.beginPath();
    ctx.moveTo(0, h/2); ctx.lineTo(w, h/2);
    ctx.stroke();
    return;
  }

  var phase = 0;
  waveInterval = setInterval(function() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#2563EB';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    for (var x = 0; x < w; x++) {
      var y = (h/2) + Math.sin(x * 0.08 + phase) * 10 * Math.sin(x * 0.03);
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    phase += 0.25;
  }, 40);
}

// Clasificación rápida de la llamada (Tipificación)
window.tipificarLlamada = function(tipo) {
  var lead = leadActualLlamando;
  if (!lead) return;

  if (tipo === 'VENTA') {
    lead.estado = 'Venta Cerrada 🎉';
    asesorVentasMes++;
    recalcularSueldoGamificado();
    alert('¡FELICIDADES LUCÍA! Venta registrada para ' + lead.nombre + '.\nTu comisión acumulada ha subido.');
  } else if (tipo === 'AGENDADO') {
    lead.estado = 'Agendado 📅';
    alert('Llamada programada en agenda para ' + lead.nombre + '.');
  } else if (tipo === 'NC') {
    marcarNoContestoPorId(lead.id);
    return;
  } else if (tipo === 'BUZON') {
    lead.estado = 'Buzón / Ilocalizable 📵';
    alert('Clasificado como ilocalizable.');
  } else if (tipo === 'NO_INTERESA') {
    lead.estado = 'No Interesa ❌';
    alert('Registrado como no interesado.');
  }

  colgarSoftphone();
  renderTablaLeads(LEADS_ENCUESTA);
};

window.marcarNoContestoActual = function() {
  if (!leadActualLlamando) return;
  marcarNoContestoPorId(leadActualLlamando.id);
};

function marcarNoContestoPorId(id) {
  var lead = LEADS_ENCUESTA.find(function(item) { return item.id === id; });
  if (!lead) return;

  lead.intentosNC = (lead.intentosNC || 0) + 1;
  lead.estado = 'No contestó (' + lead.intentosNC + ')';
  lead.espera = '0s';

  renderTablaLeads(LEADS_ENCUESTA);
  alert('Se ha registrado el intento ' + lead.intentosNC + ' para ' + lead.nombre + '. Programado en cola.');
  colgarSoftphone();
}

window.enviarWhatsAppDirecto = function(id) {
  var lead = LEADS_ENCUESTA.find(function(item) { return item.id === id; });
  if (!lead) return;

  var msg = '¡Hola ' + lead.nombre + '! Te escribe Lucía de Merced Telco. Hemos recibido tu consulta en la encuesta solicitando ' + lead.encuesta.serviciosDeseados + '. ¿En qué momento te viene bien que te llame 2 minutos para detallarte el ahorro frente a lo que pagas en ' + lead.encuesta.opActual + ' (' + lead.encuesta.facturaActual + ')?';
  var cleanTel = lead.telefono.replace(/[^0-9]/g, '');
  var wspUrl = 'https://wa.me/' + cleanTel + '?text=' + encodeURIComponent(msg);

  lead.wspEnviado = true;
  renderTablaLeads(LEADS_ENCUESTA);
  window.open(wspUrl, '_blank');
};

// =========================================================
// SISTEMA INTELIGENTE DE SUELDO & COMISIONES GAMIFICADO (SOLES - S/.)
// =========================================================
var SUELDO_BASE = 1200.00; // S/ 1,200 Soles fijo Lima
var asesorVentasMes = 11;  // Ventas cerradas actuales (Superó el umbral de 8)
var asesorSimuladas = 0;   // Ventas adicionales simuladas

// Descuentos registrados en el sistema biométrico de Lima
var INCIDENCIAS_ASISTENCIA = [
  {
    fecha: '17 Sep 2026',
    tipo: 'Tardanza',
    minutos: 10,
    motivo: 'Ingreso 09:10:14 (Horario programado 09:00:00)',
    descuento: 1.04, // (S/ 50 diario / 480 min = S/ 0.104/min x 10 min)
    estado: 'Verificado por Micrófono IA'
  },
  {
    fecha: '04 Sep 2026',
    tipo: 'Falta Injustificada',
    minutos: 480,
    motivo: 'Ausencia sin justificación médica (Jornada completa + 1/6to Dominical)',
    descuento: 58.33, // (S/ 50.00 del día + S/ 8.33 dominical legal)
    estado: 'Aplicado en planilla'
  }
];

function recalcularSueldoGamificado() {
  var totalVentas = asesorVentasMes + asesorSimuladas;

  // Total descuentos asistencia
  var totalDescuentos = 0;
  INCIDENCIAS_ASISTENCIA.forEach(function(inc) { totalDescuentos += inc.descuento; });

  // Comisiones a partir de 8 ventas
  // Tramo 1 (8 a 12 ventas): S/ 40 por venta
  // Tramo 2 (13 a 18 ventas): S/ 60 por venta
  // Tramo 3 (19 a 25 ventas): S/ 80 por venta
  // Tramo 4 (26+ ventas): S/ 100 por venta
  var totalComisiones = 0;
  var tramoTexto = 'Zona Base (Sin comisión adicional)';
  var precioPorVentaActual = 0;

  if (totalVentas >= 8) {
    for (var v = 8; v <= totalVentas; v++) {
      if (v <= 12) {
        totalComisiones += 40;
        precioPorVentaActual = 40;
        tramoTexto = 'Nivel Bronce (S/ 40 / venta)';
      } else if (v <= 18) {
        totalComisiones += 60;
        precioPorVentaActual = 60;
        tramoTexto = 'Nivel Plata (S/ 60 / venta)';
      } else if (v <= 25) {
        totalComisiones += 80;
        precioPorVentaActual = 80;
        tramoTexto = 'Nivel Oro (S/ 80 / venta)';
      } else {
        totalComisiones += 100;
        precioPorVentaActual = 100;
        tramoTexto = 'Nivel Leyenda (S/ 100 / venta)';
      }
    }
  }

  var sueldoPercibido = (SUELDO_BASE - totalDescuentos + totalComisiones);

  // Actualizar DOM
  var elVentasTotal = document.getElementById('sal-ventas-total');
  var elVentasBadge = document.getElementById('sal-ventas-badge');
  var elBase = document.getElementById('sal-val-base');
  var elDesc = document.getElementById('sal-val-descuentos');
  var elComis = document.getElementById('sal-val-comisiones');
  var elNeto = document.getElementById('sal-val-neto');
  var elBarraRunway = document.getElementById('sal-runway-fill');
  var elPinRunway = document.getElementById('sal-runway-pin');
  var elNavBadge = document.getElementById('nav-sal-badge');

  if (elVentasTotal) elVentasTotal.textContent = totalVentas;
  if (elVentasBadge) elVentasBadge.textContent = tramoTexto;
  if (elBase) elBase.textContent = 'S/ ' + SUELDO_BASE.toFixed(2);
  if (elDesc) elDesc.textContent = '- S/ ' + totalDescuentos.toFixed(2);
  if (elComis) elComis.textContent = '+ S/ ' + totalComisiones.toFixed(2);
  if (elNeto) elNeto.textContent = 'S/ ' + sueldoPercibido.toFixed(2);
  if (elNavBadge) elNavBadge.textContent = 'S/ ' + Math.round(sueldoPercibido);

  // Barra de progreso de la pista horizontal (tope visual 26 ventas = 100%)
  var pct = Math.min(100, (totalVentas / 26) * 100);
  if (elBarraRunway) elBarraRunway.style.width = pct + '%';
  if (elPinRunway) elPinRunway.style.left = pct + '%';
}

window.simularVentasAdicionales = function(delta) {
  asesorSimuladas = Math.max(0, asesorSimuladas + delta);
  document.getElementById('sal-sim-count').textContent = (asesorSimuladas >= 0 ? '+' : '') + asesorSimuladas;
  recalcularSueldoGamificado();
};

// Renderizar tabla de incidencias de asistencia
function renderTablaIncidenciasAsistencia() {
  var cont = document.getElementById('tabla-incidencias-asistencia');
  if (!cont) return;
  cont.innerHTML = '';

  INCIDENCIAS_ASISTENCIA.forEach(function(item) {
    var row = document.createElement('div');
    row.className = 'incidencia-row';
    row.innerHTML =
      '<div style="display:flex; align-items:center; gap:8px;">' +
        '<span class="inc-badge-dot ' + (item.tipo.indexOf('Falta') !== -1 ? 'bg-red' : 'bg-amber') + '"></span>' +
        '<div>' +
          '<div style="font-size:12.5px; font-weight:700; color:#0F172A;">' + item.tipo + ' · ' + item.fecha + '</div>' +
          '<div style="font-size:11px; color:#64748B;">' + item.motivo + '</div>' +
        '</div>' +
      '</div>' +
      '<div style="text-align:right;">' +
        '<div style="font-family:var(--mono); font-size:13.5px; font-weight:800; color:#DC2626;">- S/ ' + item.descuento.toFixed(2) + '</div>' +
        '<div style="font-size:10.5px; color:#94A3B8;">' + item.estado + '</div>' +
      '</div>';
    cont.appendChild(row);
  });
}

// Navegación
var titulos = {
  bandeja: { t: 'Bandeja en vivo · Leads de Encuesta', s: 'Prospectos en tiempo real provenientes de cuestionarios Meta España' },
  cubierta: { t: 'La cubierta · Portaaviones', s: 'Tráfico de la escuadrilla y progreso de ventas en las 6 estaciones de vuelo' },
  comunicaciones: { t: 'Comunicaciones & Chat', s: 'Canales de escuadrilla, alertas de guardia y mensajería en vivo' },
  llamada: { t: 'Consola Táctica de Llamadas · Softphone España', s: 'Marcación directa WebRTC, copiloto de objeciones y clasificación de ventas' },
  sueldo: { t: 'Mi Sueldo, Asistencia & Comisiones en Vivo', s: 'Transparencia salarial gamificada en Soles (S/.) con liquidación proyectada' },
  historial: { t: 'Auditoría de Asistencia', s: 'Registro completo de jornada laboral y confirmaciones de voz IA' }
};

window.navegarA = function(id) {
  var secs = ['bandeja', 'cubierta', 'comunicaciones', 'llamada', 'sueldo', 'historial'];
  for (var i = 0; i < secs.length; i++) {
    var s = secs[i];
    var elSec = document.getElementById('sec-' + s);
    var btnNav = document.getElementById('nav-btn-' + s);
    if (elSec) elSec.classList.remove('active');
    if (btnNav) btnNav.removeAttribute('aria-current');
  }

  var targetSec = document.getElementById('sec-' + id);
  var targetBtn = document.getElementById('nav-btn-' + id);
  if (targetSec) targetSec.classList.add('active');
  if (targetBtn) targetBtn.setAttribute('aria-current', 'page');

  var info = titulos[id];
  if (info) {
    var elT = document.getElementById('view-title');
    var elS = document.getElementById('view-subtitle');
    if (elT) elT.textContent = info.t;
    if (elS) elS.textContent = info.s;
  }

  if (id === 'llamada') {
    actualizarConsolaLlamadaActiva();
  } else if (id === 'sueldo') {
    recalcularSueldoGamificado();
    renderTablaIncidenciasAsistencia();
  }
};

window.toggleDropdownComunicaciones = function() {
  var submenu = document.getElementById('nav-submenu-comms');
  var btn = document.getElementById('nav-btn-comunicaciones');
  if (!submenu || !btn) return;
  if (submenu.classList.contains('open')) {
    submenu.classList.remove('open');
    btn.classList.remove('open');
  } else {
    submenu.classList.add('open');
    btn.classList.add('open');
    window.navegarA('comunicaciones');
  }
};

// Tabs del Copiloto de Objeciones
window.switchTabCopiloto = function(tabName, btn) {
  var btns = document.querySelectorAll('.tab-copiloto-btn');
  btns.forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');

  var contents = document.querySelectorAll('.tab-copiloto-content');
  contents.forEach(function(c) { c.style.display = 'none'; });
  var target = document.getElementById('tab-content-' + tabName);
  if (target) target.style.display = 'flex';
};

window.copiarTexto = function(txt) {
  navigator.clipboard.writeText(txt).then(function() {
    alert('Argumento copiado al portapapeles: "' + txt.substring(0, 40) + '..."');
  });
};

// Chat
var chatsData = {
  general: {
    nombre: '#cubierta-general',
    sub: 'Canal de vuelo para toda la escuadrilla de Lima y supervisión de Madrid',
    mensajes: [
      { remitente: 'Carlos Mendoza', hora: '11:15', texto: '¡Buenos días equipo! Atención con las altas de Orange hoy, el sistema central de portabilidades en Madrid está procesando en menos de 2h.', avatar: 'images/carlos.jpg', propio: false },
      { remitente: 'Valeria Ramos', hora: '11:22', texto: 'Anotado Carlos. Ya tengo 2 paquetes cerrados en Valencia con fibra 1Gbps, pasando a verificación de audio.', avatar: 'images/valeria.jpg', propio: false },
      { remitente: 'Lucía Márquez', hora: '11:28', texto: 'Excelente Valeria. Entrando a llamada con lead de Vodafone en Madrid.', avatar: 'images/lucia.jpg', propio: true }
    ]
  },
  alfa: {
    nombre: '#escuadrilla-alfa',
    sub: 'Asesores directos de campaña Fibra 1Gbps + Líneas Ilimitadas',
    mensajes: [
      { remitente: 'Diego Salcedo', hora: '10:45', texto: 'Equipo alfa, recuerden consultar el CP exacto para asegurar cobertura antes de lanzar la oferta.', avatar: 'images/diego.jpg', propio: false },
      { remitente: 'Lucía Márquez', hora: '10:50', texto: 'Copiado Diego, validando con el mapa de cobertura.', avatar: 'images/lucia.jpg', propio: true }
    ]
  },
  carlos: {
    nombre: 'Carlos Mendoza',
    sub: 'Supervisor de Operaciones · Merced Telco Madrid / Lima',
    mensajes: [
      { remitente: 'Carlos Mendoza', hora: '09:30', texto: 'Lucía, felicidades por la tasa de cierre de ayer. Estás en el 84% de contactabilidad en primeros 5 minutos.', avatar: 'images/carlos.jpg', propio: false },
      { remitente: 'Lucía Márquez', hora: '09:32', texto: '¡Muchas gracias Carlos! Manteniendo el foco en no dejar enfriar los formularios de Meta.', avatar: 'images/lucia.jpg', propio: true }
    ]
  }
};

window.cargarConversacion = function(chatKey, btnElem) {
  var chat = chatsData[chatKey];
  if (!chat) return;

  var subitems = document.querySelectorAll('.nav-subitem');
  subitems.forEach(function(el) { el.classList.remove('active'); });
  if (btnElem) btnElem.classList.add('active');

  var elTitle = document.getElementById('chat-active-title');
  var elSub = document.getElementById('chat-active-sub');
  var elStream = document.getElementById('chat-messages-stream');

  if (elTitle) elTitle.textContent = chat.nombre;
  if (elSub) elSub.textContent = chat.sub;

  if (elStream) {
    elStream.innerHTML = '';
    chat.mensajes.forEach(function(m) {
      var msgDiv = document.createElement('div');
      msgDiv.className = 'chat-bubble ' + (m.propio ? 'me' : 'other');
      msgDiv.innerHTML =
        (!m.propio ? '<img src="' + m.avatar + '" class="msg-av" alt="' + m.remitente + '">' : '') +
        '<div class="msg-body">' +
          '<div class="msg-meta"><span class="msg-author">' + m.remitente + '</span><span class="msg-time">' + m.hora + '</span></div>' +
          '<div class="msg-txt">' + m.texto + '</div>' +
        '</div>' +
        (m.propio ? '<img src="' + m.avatar + '" class="msg-av" alt="' + m.remitente + '">' : '');
      elStream.appendChild(msgDiv);
    });
    elStream.scrollTop = elStream.scrollHeight;
  }
  window.navegarA('comunicaciones');
};

window.enviarMensajeChat = function() {
  var input = document.getElementById('input-chat-msg');
  if (!input || !input.value.trim()) return;

  var txt = input.value.trim();
  var elStream = document.getElementById('chat-messages-stream');
  var d = new Date();
  var h = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

  var msgDiv = document.createElement('div');
  msgDiv.className = 'chat-bubble me';
  msgDiv.innerHTML =
    '<div class="msg-body">' +
      '<div class="msg-meta"><span class="msg-author">Lucía Márquez</span><span class="msg-time">' + h + '</span></div>' +
      '<div class="msg-txt">' + txt + '</div>' +
    '</div>' +
    '<img src="images/lucia.jpg" class="msg-av" alt="Lucía">';

  if (elStream) {
    elStream.appendChild(msgDiv);
    elStream.scrollTop = elStream.scrollHeight;
  }
  input.value = '';
};

// Filtros
window.filtrarLeads = function(tipo, btn) {
  var btns = btn.parentNode.querySelectorAll('button');
  btns.forEach(function(b) { b.setAttribute('aria-pressed', 'false'); });
  btn.setAttribute('aria-pressed', 'true');

  if (tipo === 'todos') {
    renderTablaLeads(LEADS_ENCUESTA);
  } else if (tipo === 'sin') {
    renderTablaLeads(LEADS_ENCUESTA.filter(function(l) { return l.estado === 'Sin contactar'; }));
  } else if (tipo === 'nc') {
    renderTablaLeads(LEADS_ENCUESTA.filter(function(l) { return l.intentosNC > 0; }));
  } else if (tipo === 'wsp') {
    renderTablaLeads(LEADS_ENCUESTA.filter(function(l) { return l.wspEnviado; }));
  }
};

window.buscarEnTabla = function(q) {
  var query = (q || '').toLowerCase();
  var filtered = LEADS_ENCUESTA.filter(function(l) {
    return l.nombre.toLowerCase().indexOf(query) !== -1 ||
           l.telefono.indexOf(query) !== -1 ||
           l.ciudad.toLowerCase().indexOf(query) !== -1 ||
           l.opDestino.toLowerCase().indexOf(query) !== -1;
  });
  renderTablaLeads(filtered);
};

// Widget Asistencia FAB
var popoverOpen = false;
var guardActive = true;
var guardSeconds = 11724;
var isPaused = false;

setInterval(function() {
  if (guardActive && !isPaused) {
    guardSeconds++;
    var chrono = document.getElementById('fab-guard-chrono');
    if (chrono) chrono.textContent = formatGuardTime(guardSeconds);
  }
}, 1000);

function formatGuardTime(s) {
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);
  var sec = s % 60;
  return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

window.toggleAttendancePopover = function() {
  var pop = document.getElementById('attendance-popover');
  if (!pop) return;
  popoverOpen = !popoverOpen;
  if (popoverOpen) pop.classList.add('open');
  else pop.classList.remove('open');
};

window.pausarGuardia = function() {
  isPaused = !isPaused;
  var btn = document.getElementById('btn-guard-pause');
  var stat = document.getElementById('fab-guard-status-text');
  var dot = document.getElementById('fab-dot');

  if (isPaused) {
    if (btn) btn.textContent = 'Reanudar';
    if (stat) { stat.textContent = 'En Pausa'; stat.style.color = '#B45309'; stat.style.background = '#FEF3C7'; }
    if (dot) dot.style.background = '#F59E0B';
  } else {
    if (btn) btn.textContent = 'Pausar';
    if (stat) { stat.textContent = 'En Guardia'; stat.style.color = '#116B44'; stat.style.background = '#E7F6EE'; }
    if (dot) dot.style.background = '#16A34A';
  }
};

window.iniciarSalidaPorVoz = function() {
  if (confirm('¿Deseas cerrar tu turno mediante confirmación de voz?')) {
    document.getElementById('popover-active-state').style.display = 'none';
    document.getElementById('popover-pending-state').style.display = 'flex';
    document.getElementById('popover-phrase-text').textContent = '"Confirmo mi salida"';
    document.getElementById('btn-mic-label').textContent = 'Abrir Micrófono y Confirmar Salida';
    alert('Para cerrar la jornada, haz clic en el micrófono y di "Confirmo mi salida".');
  }
};

window.toggleGrabacionVoz = function() {
  var btn = document.getElementById('btn-start-mic');
  var label = document.getElementById('btn-mic-label');
  var feedback = document.getElementById('ai-feedback-txt');

  if (btn) btn.classList.add('recording');
  if (label) label.textContent = 'Escuchando...';
  if (feedback) feedback.textContent = 'Pronuncia: "Confirmo mi asistencia"';

  setTimeout(function() {
    if (btn) btn.classList.remove('recording');
    if (feedback) feedback.textContent = 'Voz verificada: Lucía Márquez (99.4%)';
    if (label) label.textContent = 'Asistencia Confirmada';
    setTimeout(function() {
      guardActive = true;
      document.getElementById('popover-pending-state').style.display = 'none';
      document.getElementById('popover-active-state').style.display = 'flex';
    }, 800);
  }, 2500);
};

// Cargar conversacion inicial y calcular sueldo
window.cargarConversacion('general', null);
recalcularSueldoGamificado();
