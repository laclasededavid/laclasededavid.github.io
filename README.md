# 🧭 Exploradores de Palabras

> Un viaje poético por las maravillas del mundo — La Clase de David

**URL:** [laclasededavid.github.io](https://laclasededavid.github.io)

Página web educativa para **3º y 4º de Primaria** con poemas, actividades y contenidos curriculares (Lengua, Geografía, Valores) sobre las **7 Maravillas del Mundo Antiguo** y las **7 Maravillas del Mundo Moderno**.

---

## 📁 Estructura del proyecto

```
📦 laclasededavid.github.io/
├── index.html                ← Página principal
├── poemas.html               ← Colección de poemas
├── actividades.html          ← Actividades y juegos de palabras
├── maravillas/
│   ├── antiguas.html         ← Las 7 maravillas antiguas
│   └── modernas.html         ← Las 7 maravillas modernas
├── css/
│   └── estilos.css           ← Todos los estilos visuales
├── js/
│   ├── contenido.js          ← ⭐ AQUÍ editas los textos fácilmente
│   └── accesibilidad.js      ← Panel de accesibilidad
└── img/                      ← Carpeta para tus imágenes
```

---

## ✏️ Cómo editar el contenido

**Para cambiar textos, poemas o actividades**, abre el archivo `js/contenido.js`. Está organizado en secciones claramente comentadas:

- `CONTENIDO.inicio` → textos de la portada
- `CONTENIDO.antiguas` → array con las 7 maravillas antiguas
- `CONTENIDO.modernas` → array con las 7 maravillas modernas
- `CONTENIDO.poemas` → colección de poemas libres
- `CONTENIDO.actividades` → actividades generales

Cada maravilla tiene estos campos:
```js
{
  nombre: "Las Pirámides de Guiza",
  pais: "Egipto",
  emoji: "🏛️",
  descripcion: "Descripción breve...",
  poema: ["Verso 1", "Verso 2", "Verso 3", "Verso 4"],
  curiosidad: "Dato curioso para el alumnado...",
  actividad: "Instrucción de la actividad..."
}
```

---

## ♿ Accesibilidad incluida

El botón ♿ en la esquina inferior derecha permite al alumnado:
- 🔤 Activar fuente **OpenDyslexic** (para dislexia)
- 🌗 Activar **alto contraste**
- 🔠 Aumentar o reducir el **tamaño del texto**
- Las preferencias se guardan automáticamente en el navegador.

---

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio llamado exactamente `laclasededavid.github.io`
2. Sube todos estos archivos a la rama `main`
3. Ve a **Settings → Pages → Source: main / root**
4. En unos minutos estará disponible en `https://laclasededavid.github.io`

---

## 🖼️ Añadir imágenes

Guarda las imágenes en la carpeta `img/` y referencialas en `contenido.js`:
```js
// Puedes añadir un campo "imagen" a cada maravilla:
imagen: "img/piramides.jpg"
```
Usa imágenes libres de derechos de [Unsplash](https://unsplash.com) o [Pixabay](https://pixabay.com).

---

*Hecho con ❤️ para el alumnado de 3º y 4º de Primaria*
