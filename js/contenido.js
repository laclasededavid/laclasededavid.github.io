// ============================================================
//  ⭐ ARCHIVO DE CONTENIDO — EXPLORADORES DE PALABRAS
//  Edita aquí todos los textos de la web sin tocar más código
// ============================================================

const CONTENIDO = {

  // --- PÁGINA PRINCIPAL ---
  inicio: {
    bienvenida: "¡Bienvenido, explorador de palabras!",
    subtitulo: "Embárcate en un viaje poético por las maravillas del mundo.",
    descripcion: "En este rincón mágico descubrirás poemas, historias y juegos inspirados en los lugares más asombrosos de la Tierra. ¿Estás listo para explorar?"
  },

  // --- MARAVILLAS ANTIGUAS ---
  antiguas: [
    {
      id: "piramides",
      nombre: "Las Pirámides de Guiza",
      pais: "Egipto",
      emoji: "🏛️",
      descripcion: "Colosos de piedra que tocan el cielo, guardianes silenciosos del desierto.",
      poema: [
        "Tres gigantes de arena y de sol,",
        "que el viento no pudo borrar.",
        "Mil secretos guarda el faraón",
        "bajo el manto del arenal."
      ],
      curiosidad: "Las pirámides fueron construidas hace más de 4.500 años por miles de trabajadores egipcios.",
      actividad: "Escribe una palabra que describa cómo te sentirías al ver las pirámides por primera vez."
    },
    {
      id: "zeus",
      nombre: "Estatua de Zeus en Olimpia",
      pais: "Grecia",
      emoji: "⚡",
      descripcion: "Un dios de marfil y oro que presidía los Juegos Olímpicos con mirada serena.",
      poema: [
        "Sentado en su trono dorado y altivo,",
        "Zeus observaba el mundo vivir.",
        "Su mano extendida, su rayo cautivo,",
        "hacía al más bravo temblar y reír."
      ],
      curiosidad: "La estatua medía más de 12 metros de altura y estaba hecha de marfil y láminas de oro.",
      actividad: "¿Qué palabra usarías para describir algo muy, muy grande? Busca tres sinónimos."
    },
    {
      id: "artemisa",
      nombre: "Templo de Artemisa en Éfeso",
      pais: "Turquía",
      emoji: "🌙",
      descripcion: "Un bosque de mármol dedicado a la diosa de la luna y la naturaleza.",
      poema: [
        "Cien columnas de mármol y luz",
        "alzaban el nombre de Artemisa al sol.",
        "La luna velaba, fiel como una cruz,",
        "aquel templo hermoso de eterno esplendor."
      ],
      curiosidad: "El templo tenía más de 127 columnas de mármol y tardó 120 años en construirse.",
      actividad: "Escribe un pequeño poema de cuatro versos sobre la luna."
    },
    {
      id: "mausoleo",
      nombre: "Mausoleo de Halicarnaso",
      pais: "Turquía",
      emoji: "🏯",
      descripcion: "Una tumba tan bella que dio nombre a todas las tumbas monumentales del mundo.",
      poema: [
        "Tan grande fue el amor de una reina,",
        "que al cielo quiso llegar con su luto.",
        "Piedra a piedra, llorando serena,",
        "erigió para siempre aquel mudo tributo."
      ],
      curiosidad: "La palabra 'mausoleo' viene del rey Mausolo, para quien fue construida esta tumba.",
      actividad: "¿Sabes qué significa 'tributo'? Escríbelo con tus propias palabras."
    },
    {
      id: "coloso",
      nombre: "Coloso de Rodas",
      pais: "Grecia",
      emoji: "🗿",
      descripcion: "Un gigante de bronce que custodiaba el puerto de la isla de Rodas.",
      poema: [
        "De bronce y de sueños se hizo el gigante,",
        "guardián de los mares y del horizonte.",
        "Su sombra cubría el barco distante,",
        "su voz era el eco de cada trirreme."
      ],
      curiosidad: "El Coloso medía unos 33 metros, casi como un edificio de diez plantas.",
      actividad: "Busca en el mapa dónde está la isla de Rodas y di qué mar la rodea."
    },
    {
      id: "faro",
      nombre: "Faro de Alejandría",
      pais: "Egipto",
      emoji: "🔦",
      descripcion: "Una torre de luz que guiaba a los marineros a través de la oscuridad del mar.",
      poema: [
        "Desde lo alto del faro brillaba una llama",
        "que al marinero perdido encontraba.",
        "Como un abrazo de luz que te llama,",
        "la oscuridad del océano alejaba."
      ],
      curiosidad: "El Faro de Alejandría tenía más de 100 metros de altura y se podía ver desde 50 km.",
      actividad: "¿Qué otras palabras conoces relacionadas con la luz? Haz una lista."
    },
    {
      id: "jardines",
      nombre: "Jardines Colgantes de Babilonia",
      pais: "Irak",
      emoji: "🌿",
      descripcion: "Un jardín de leyenda, quizá el más misterioso de todos, que crecía hacia el cielo.",
      poema: [
        "Flores y ríos subían por el aire,",
        "verdes cascadas de un sueño ancestral.",
        "¿Existió de verdad o fue solo un donaire",
        "de la memoria del mundo eternal?"
      ],
      curiosidad: "Nadie sabe con certeza si los Jardines Colgantes existieron de verdad. ¡Es el mayor misterio de la Antigüedad!",
      actividad: "Inventa el nombre de una planta mágica que podría crecer en estos jardines."
    }
  ],

  // --- MARAVILLAS MODERNAS ---
  modernas: [
    {
      id: "china",
      nombre: "Gran Muralla China",
      pais: "China",
      emoji: "🏔️",
      descripcion: "Una serpiente de piedra que recorre montañas y valles a lo largo de miles de kilómetros.",
      poema: [
        "Serpiente de piedra que el tiempo respeta,",
        "trepas las cimas sin miedo al olvido.",
        "Mil emperadores te dieron faceta,",
        "y el viento y la lluvia te han endurecido."
      ],
      curiosidad: "La Gran Muralla tiene más de 21.000 km de longitud. ¡Podría rodear la Tierra casi media vuelta!",
      actividad: "¿Cuántos kilómetros hay entre tu ciudad y Pekín? Búscalo en un mapa."
    },
    {
      id: "chichen",
      nombre: "Chichén Itzá",
      pais: "México",
      emoji: "🔺",
      descripcion: "Una pirámide maya que esconde un calendario perfecto tallado en piedra.",
      poema: [
        "Cada escalón guarda un día del año,",
        "cada piedra susurra una historia.",
        "El sol y la luna, sin hacernos daño,",
        "trazan caminos de antigua memoria."
      ],
      curiosidad: "La pirámide de Kukulcán tiene 365 escalones, uno por cada día del año.",
      actividad: "¿Cuántos días tiene tu año? Intenta escribir ese número en palabras."
    },
    {
      id: "cristo",
      nombre: "Cristo Redentor",
      pais: "Brasil",
      emoji: "✝️",
      descripcion: "Una figura de brazos abiertos que abraza la ciudad de Río de Janeiro desde lo alto.",
      poema: [
        "Brazos abiertos sobre el océano,",
        "miras la ciudad desde el cerro.",
        "Gigante de piedra, hermano lejano,",
        "que abraza el futuro y el pasado entero."
      ],
      curiosidad: "El Cristo Redentor mide 30 metros y sus brazos abarcan 28 metros de punta a punta.",
      actividad: "Dibuja o describe con palabras cómo imaginas ver Río de Janeiro desde arriba."
    },
    {
      id: "machu",
      nombre: "Machu Picchu",
      pais: "Perú",
      emoji: "🏞️",
      descripcion: "Una ciudad perdida entre las nubes de los Andes, refugio secreto de los incas.",
      poema: [
        "Ciudad de nubes, ciudad escondida,",
        "entre cóndores y viento serrano.",
        "Los incas tejieron tu piedra vivida",
        "con manos de sol y de amor andino."
      ],
      curiosidad: "Machu Picchu fue construida alrededor del año 1450 y estuvo 'perdida' hasta 1911.",
      actividad: "¿Qué significa 'perdida entre las nubes'? Escribe una frase usando esa expresión."
    },
    {
      id: "coliseo",
      nombre: "Coliseo de Roma",
      pais: "Italia",
      emoji: "🏟️",
      descripcion: "Un anfiteatro colosal donde la historia de Roma late en cada piedra.",
      poema: [
        "Mil voces calladas resuenan aún hoy",
        "en arcos de piedra que el tiempo olvidó.",
        "Gladiadores y leones, un eco feroz",
        "que el Coliseo en su pecho guardó."
      ],
      curiosidad: "El Coliseo podía albergar hasta 80.000 espectadores. ¡Como muchos estadios de fútbol modernos!",
      actividad: "¿Conoces algún estadio de fútbol famoso? Compara su tamaño con el Coliseo."
    },
    {
      id: "taj",
      nombre: "Taj Mahal",
      pais: "India",
      emoji: "🕌",
      descripcion: "Un palacio de mármol blanco construido por amor, el más bello del mundo.",
      poema: [
        "Blanco como la luna en el río,",
        "el Taj Mahal refleja el amor.",
        "Un rey construyó este sueño vacío",
        "para guardar de su amor el fulgor."
      ],
      curiosidad: "El Taj Mahal fue construido por el emperador Shah Jahan en memoria de su esposa Mumtaz.",
      actividad: "¿Conoces alguna historia de amor en un cuento? Escribe el nombre del cuento y sus protagonistas."
    },
    {
      id: "petra",
      nombre: "Petra",
      pais: "Jordania",
      emoji: "🪨",
      descripcion: "Una ciudad tallada directamente en la roca rosada del desierto.",
      poema: [
        "La ciudad que nació dentro de la piedra,",
        "labrada por manos que ya no están.",
        "El desierto la guarda, la vela, la medra,",
        "rosada de aurora, al morir el día van."
      ],
      curiosidad: "Petra fue tallada en roca hace más de 2.000 años por el pueblo nabateo.",
      actividad: "¿Qué herramientas usarías para tallar una ciudad en la roca? Haz una lista."
    }
  ],

  // --- PÁGINA DE POEMAS ---
  poemas: {
    intro: "Las palabras son también maravillas del mundo. Aquí encontrarás poemas para leer, sentir y crear.",
    coleccion: [
      {
        titulo: "El explorador de palabras",
        autor: "Autor pendiente",
        versos: [
          "Hay palabras que brillan como estrellas,",
          "palabras que vuelan como pájaros,",
          "palabras redondas, palabras bellas,",
          "palabras que curan como los prados."
        ]
      },
      {
        titulo: "Viaje sin mochila",
        autor: "Autor pendiente",
        versos: [
          "Para viajar al mundo solo necesitas",
          "abrir un libro y cerrar los ojos.",
          "Las palabras son alas infinitas",
          "que te llevan sin maletas ni bolsillos."
        ]
      }
    ]
  },

  // --- PÁGINA DE ACTIVIDADES ---
  actividades: [
    {
      tipo: "Juego de palabras",
      titulo: "La palabra perdida",
      instrucciones: "Lee la frase y escribe la palabra que falta para completar el poema.",
      placeholder: "Tu texto del ejercicio aquí"
    },
    {
      tipo: "Creación",
      titulo: "Soy poeta",
      instrucciones: "Escoge una maravilla del mundo y escribe cuatro versos sobre ella. ¡Usa rima!",
      placeholder: "Tu texto del ejercicio aquí"
    },
    {
      tipo: "Vocabulario",
      titulo: "Palabras viajeras",
      instrucciones: "Busca en el texto cinco palabras que no conocías y escribe su significado.",
      placeholder: "Tu texto del ejercicio aquí"
    }
  ],

  // --- PIE DE PÁGINA ---
  footer: {
    creditos: "Exploradores de Palabras — La Clase de David",
    url: "laclasededavid.github.io"
  }
};
