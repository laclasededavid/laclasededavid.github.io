// ============================================================
//  MÓDULO DE ACCESIBILIDAD — Exploradores de Palabras
// ============================================================

const Accesibilidad = {

  // Tamaño de fuente base (en %)
  tamanoFuente: parseInt(localStorage.getItem('ep-fuente')) || 100,
  // Fuente dislexia activa
  dislexia: localStorage.getItem('ep-dislexia') === 'true',
  // Alto contraste activo
  contraste: localStorage.getItem('ep-contraste') === 'true',

  init() {
    this.aplicarPreferencias();
    this.crearPanel();
    this.bindEventos();
  },

  aplicarPreferencias() {
    document.documentElement.style.fontSize = this.tamanoFuente + '%';
    document.body.classList.toggle('dislexia', this.dislexia);
    document.body.classList.toggle('alto-contraste', this.contraste);

    // Actualizar botones si existen
    const btnDis = document.getElementById('btn-dislexia');
    const btnCon = document.getElementById('btn-contraste');
    if (btnDis) btnDis.classList.toggle('activo', this.dislexia);
    if (btnCon) btnCon.classList.toggle('activo', this.contraste);
  },

  crearPanel() {
    const panel = document.createElement('div');
    panel.id = 'panel-accesibilidad';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Opciones de accesibilidad');
    panel.innerHTML = `
      <button id="toggle-accesibilidad" aria-expanded="false" aria-controls="opciones-acc" title="Opciones de accesibilidad">
        <span aria-hidden="true">♿</span>
        <span class="sr-only">Accesibilidad</span>
      </button>
      <div id="opciones-acc" hidden>
        <p class="acc-titulo">Ajusta tu lectura</p>
        <div class="acc-grupo">
          <span>Tamaño texto</span>
          <div class="acc-fila">
            <button id="btn-menos" aria-label="Reducir tamaño de texto">A−</button>
            <button id="btn-mas" aria-label="Aumentar tamaño de texto">A+</button>
          </div>
        </div>
        <div class="acc-grupo">
          <button id="btn-dislexia" aria-pressed="${this.dislexia}">
            <span>Fuente dislexia</span>
          </button>
        </div>
        <div class="acc-grupo">
          <button id="btn-contraste" aria-pressed="${this.contraste}">
            <span>Alto contraste</span>
          </button>
        </div>
        <div class="acc-grupo">
          <button id="btn-reset" aria-label="Restablecer configuración">Restablecer</button>
        </div>
      </div>
    `;
    document.body.appendChild(panel);
  },

  bindEventos() {
    document.getElementById('toggle-accesibilidad').addEventListener('click', () => {
      const opciones = document.getElementById('opciones-acc');
      const btn = document.getElementById('toggle-accesibilidad');
      const hidden = opciones.hidden;
      opciones.hidden = !hidden;
      btn.setAttribute('aria-expanded', hidden);
    });

    document.getElementById('btn-mas').addEventListener('click', () => {
      if (this.tamanoFuente < 150) {
        this.tamanoFuente += 10;
        this.guardar();
      }
    });

    document.getElementById('btn-menos').addEventListener('click', () => {
      if (this.tamanoFuente > 80) {
        this.tamanoFuente -= 10;
        this.guardar();
      }
    });

    document.getElementById('btn-dislexia').addEventListener('click', (e) => {
      this.dislexia = !this.dislexia;
      e.currentTarget.setAttribute('aria-pressed', this.dislexia);
      e.currentTarget.classList.toggle('activo', this.dislexia);
      this.guardar();
    });

    document.getElementById('btn-contraste').addEventListener('click', (e) => {
      this.contraste = !this.contraste;
      e.currentTarget.setAttribute('aria-pressed', this.contraste);
      e.currentTarget.classList.toggle('activo', this.contraste);
      this.guardar();
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
      this.tamanoFuente = 100;
      this.dislexia = false;
      this.contraste = false;
      this.guardar();
    });
  },

  guardar() {
    localStorage.setItem('ep-fuente', this.tamanoFuente);
    localStorage.setItem('ep-dislexia', this.dislexia);
    localStorage.setItem('ep-contraste', this.contraste);
    this.aplicarPreferencias();
    document.documentElement.style.fontSize = this.tamanoFuente + '%';
  }
};

document.addEventListener('DOMContentLoaded', () => Accesibilidad.init());
