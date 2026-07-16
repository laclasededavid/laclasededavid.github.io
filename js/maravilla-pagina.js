// ============================================================
//  maravilla-pagina.js
//  Lógica de las páginas individuales de cada maravilla.
//  No necesitas editar este fichero para cambiar contenidos:
//  todo el contenido editable está en mapa-contenido.js
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. Detectar qué maravilla mostrar por el nombre del fichero ──
  var archivo = window.location.pathname.split('/').pop().replace('.html', '');
  var maravilla = MAPA_MARAVILLAS.find(function (m) { return m.id === archivo; });

  if (!maravilla) {
    document.querySelector('main').innerHTML =
      '<div class="seccion"><p>Maravilla no encontrada. <a href="../mapa-explorador.html">Volver al mapa</a>.</p></div>';
    return;
  }

  // ── 2. Título y meta ──
  document.title = maravilla.nombre + ' · Exploradores de Palabras';
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content',
      maravilla.nombre + ' — Poema, contenidos, actividades y desafíos para 3º y 4º de Primaria.');
  }

  // ── 3. Hero ──
  document.getElementById('breadcrumb-nombre').textContent = maravilla.nombre;
  document.getElementById('hero-emoji').textContent        = maravilla.emoji;
  document.getElementById('hero-pais').textContent         = '📍 ' + maravilla.pais;
  document.getElementById('hero-titulo').textContent       = maravilla.nombre;

  // ── 4. Poema ──
  var poemaDiv = document.getElementById('intro-poema');
  maravilla.introduccion.poema.forEach(function (verso) {
    if (verso === '') {
      poemaDiv.appendChild(document.createElement('br'));
    } else {
      var s = document.createElement('span');
      s.className = 'poema-verso';
      s.textContent = verso;
      poemaDiv.appendChild(s);
    }
  });

  // ── 5. Preguntas de comprensión ──
  var preguntasDiv = document.getElementById('intro-preguntas');
  maravilla.introduccion.preguntas.forEach(function (p, i) {
    var box = document.createElement('div');
    box.className = 'comprension-pregunta';
    var num = i + 1;
    box.innerHTML =
      '<p>' + num + '. ' + p.pregunta + '</p>' +
      '<button class="btn-respuesta" aria-expanded="false">Ver respuesta</button>' +
      '<p class="comprension-respuesta" aria-live="polite">💡 ' + p.respuesta + '</p>';
    preguntasDiv.appendChild(box);

    box.querySelector('.btn-respuesta').addEventListener('click', function () {
      var resp    = this.nextElementSibling;
      var visible = resp.style.display === 'block';
      resp.style.display       = visible ? 'none' : 'block';
      this.textContent          = visible ? 'Ver respuesta' : 'Ocultar respuesta';
      this.setAttribute('aria-expanded', !visible);
    });
  });

  // ── 6. Saberes Básicos ──
  // Los saberes básicos están en el HTML directamente (desplegables por área).

  // ── 7. Criterios ──
  // Los criterios de alumnado están en el HTML (desplegables por área).
  // Solo poblamos profesorado desde mapa-contenido.js.
  var listaProfes = document.getElementById('lista-criterios-profesorado');
  maravilla.criterios['profesorado'].forEach(function (c) {
    var li = document.createElement('li');
    li.textContent = c;
    listaProfes.appendChild(li);
  });

  // ── 8. Actividades ──
  var actDiv = document.getElementById('lista-actividades');
  maravilla.actividades.forEach(function (a, i) {
    var art = document.createElement('article');
    art.className = 'actividad-item animar';
    art.innerHTML =
      '<span class="tipo-badge">' + a.tipo + '</span>' +
      '<h3>' + (i + 1) + '. ' + a.titulo + '</h3>' +
      '<p>' + a.descripcion + '</p>';
    actDiv.appendChild(art);
  });

  // ── 9. Desafíos ──
  var desDiv = document.getElementById('lista-desafios');
  maravilla.desafios.forEach(function (d) {
    var card = document.createElement('div');
    card.className = 'desafio-card animar';
    card.innerHTML =
      '<span class="desafio-nivel">' + d.nivel + '</span>' +
      '<p>' + d.reto + '</p>';
    desDiv.appendChild(card);
  });

  // ── 10. Navegación ← → entre maravillas ──
  var idx    = MAPA_MARAVILLAS.findIndex(function (m) { return m.id === archivo; });
  var navDiv = document.getElementById('nav-maravillas');
  var prev   = MAPA_MARAVILLAS[idx - 1];
  var next   = MAPA_MARAVILLAS[idx + 1];

  if (prev) {
    var aPrev = document.createElement('a');
    aPrev.href      = prev.id + '.html';
    aPrev.className = 'btn-nav-maravilla';
    aPrev.innerHTML = '← ' + prev.emoji + ' ' + prev.nombre;
    navDiv.appendChild(aPrev);
  } else {
    navDiv.appendChild(document.createElement('span'));
  }

  var volver = document.createElement('a');
  volver.href      = '../mapa-explorador.html';
  volver.className = 'btn-nav-maravilla btn-volver-mapa';
  volver.innerHTML = '🗺️ Volver al mapa';
  navDiv.appendChild(volver);

  if (next) {
    var aNext = document.createElement('a');
    aNext.href      = next.id + '.html';
    aNext.className = 'btn-nav-maravilla';
    aNext.innerHTML = next.emoji + ' ' + next.nombre + ' →';
    navDiv.appendChild(aNext);
  } else {
    navDiv.appendChild(document.createElement('span'));
  }

  // ── 11. Pestañas ──
  var pestanas = document.querySelectorAll('.pestana');
  pestanas.forEach(function (btn) {
    btn.addEventListener('click', function () {
      pestanas.forEach(function (b) {
        b.classList.remove('activa');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.panel').forEach(function (p) {
        p.classList.remove('visible');
        p.hidden = true;
      });
      this.classList.add('activa');
      this.setAttribute('aria-selected', 'true');
      var panel = document.getElementById('panel-' + this.dataset.panel);
      panel.classList.add('visible');
      panel.hidden = false;
    });
  });

  // ── 12. Criterios tabs ──
  document.getElementById('btn-alumnado').addEventListener('click', function () {
    mostrarCriterios('alumnado');
  });
  document.getElementById('btn-profesorado').addEventListener('click', function () {
    mostrarCriterios('profesorado');
  });

  function mostrarCriterios(tipo) {
    document.getElementById('lista-criterios-alumnado').style.display    = tipo === 'alumnado'    ? '' : 'none';
    document.getElementById('lista-criterios-profesorado').style.display = tipo === 'profesorado' ? '' : 'none';
    document.getElementById('btn-alumnado').classList.toggle('activo',    tipo === 'alumnado');
    document.getElementById('btn-profesorado').classList.toggle('activo', tipo === 'profesorado');
  }

  // ── 13. Desplegables de áreas en Criterios de Evaluación ──
  // Usamos delegación de eventos en document para que funcione
  // aunque el panel esté oculto cuando se ejecuta el script.
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.area-toggle');
    if (!btn) return;
    var bloque = btn.closest('.area-desplegable');
    if (!bloque) return;
    var abierto = bloque.classList.toggle('abierto');
    btn.setAttribute('aria-expanded', abierto);
    var contenido = bloque.querySelector('.area-contenido');
    if (contenido) contenido.hidden = !abierto;
  });

}); // fin DOMContentLoaded
