// ============================================================
//  ⭐ CONTENIDO DEL MAPA DEL EXPLORADOR
//  Edita aquí los textos de las 12 maravillas del mapa
//  sin necesidad de tocar el resto del código.
// ============================================================

const MAPA_MARAVILLAS = [

  // ── 1 ──────────────────────────────────────────────────────
  {
    id: "faro-alejandria",
    nombre: "Faro de Alejandría",
    pais: "Egipto",
    emoji: "🔦",
    // Coordenadas en % sobre el SVG del mapa (x: izq→der, y: arriba→abajo)
    x: 55, y: 40,

    // --- INTRODUCCIÓN: poesía con comprensión lectora ---
    introduccion: {
      poema: [
        "Desde lo alto del faro brillaba una llama",
        "que al marinero perdido encontraba.",
        "Como un abrazo de luz que te llama,",
        "la oscuridad del océano alejaba.",
        "",
        "Cien metros de piedra miraban al mar,",
        "tres cuerpos apilados hacia el cielo.",
        "Los barcos lo usaban para navegar,",
        "era el más alto faro del suelo."
      ],
      preguntas: [
        {
          pregunta: "¿Para qué servía el faro según el poema?",
          respuesta: "Para guiar a los marineros perdidos en el mar."
        },
        {
          pregunta: "¿Qué dos palabras del poema riman entre sí en la primera estrofa?",
          respuesta: "«llama» con «llama» (y «encontraba» con «alejaba»)."
        },
        {
          pregunta: "¿Cuántos cuerpos o partes tenía el faro según el poema?",
          respuesta: "Tres cuerpos apilados."
        }
      ]
    },

    // --- CONTENIDOS ---
    contenidos: [
      "El Faro de Alejandría fue construido en la isla de Faros (Egipto) alrededor del año 280 a.C.",
      "Medía entre 100 y 140 metros de altura y era uno de los edificios más altos del mundo antiguo.",
      "Tenía tres partes: una base cuadrada, un cuerpo octogonal y una torre cilíndrica coronada por una estatua.",
      "Fue incluido en la lista de las 7 Maravillas del Mundo Antiguo.",
      "Fue destruido por varios terremotos entre los siglos XII y XIV.",
      "Su nombre dio origen a la palabra «faro» en muchos idiomas.",
      "Estuvo activo durante casi 1.500 años, guiando barcos de todo el Mediterráneo."
    ],

    // --- CRITERIOS DE EVALUACIÓN ---
    criterios: {
      alumnado: [
        "Soy capaz de explicar para qué servía el Faro de Alejandría.",
        "Puedo decir en qué país se encontraba y en qué época fue construido.",
        "Entiendo la poesía y soy capaz de responder las preguntas de comprensión.",
        "He realizado al menos una actividad creativa sobre esta maravilla.",
        "Sé usar palabras nuevas aprendidas en esta sección."
      ],
      profesorado: [
        "El alumno/a identifica la función del faro y lo sitúa geográficamente (Lengua / Geografía).",
        "Comprende un texto poético y extrae información literal e inferencial (Lengua - Comprensión lectora).",
        "Amplía su vocabulario con términos relacionados con la navegación y la arquitectura antigua (Lengua).",
        "Muestra interés y respeto por el patrimonio histórico de otras culturas (Valores cívicos).",
        "Produce textos creativos breves con coherencia y corrección ortográfica básica (Lengua - Expresión escrita)."
      ]
    },

    // --- ACTIVIDADES ---
    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema de la introducción y responde las preguntas de comprensión. Recuerda buscar las respuestas dentro del propio texto."
      },
      {
        tipo: "Vocabulario",
        titulo: "Palabras de luz",
        descripcion: "Busca en el texto las palabras relacionadas con la luz (faro, llama, luz…) y escribe una frase propia con cada una de ellas."
      },
      {
        tipo: "Geografía",
        titulo: "Localiza el faro",
        descripcion: "Busca en un mapa dónde está Alejandría. ¿En qué mar se encontraba el faro? ¿Qué países comparten ese mar?"
      },
      {
        tipo: "Creación",
        titulo: "Tu propio faro",
        descripcion: "Dibuja o describe con palabras cómo sería tu faro ideal. ¿Dónde estaría? ¿Qué forma tendría? ¿Qué luz emitiría?"
      }
    ],

    // --- DESAFÍOS ---
    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Escribe tres palabras que hayan nacido del nombre de esta maravilla o de las palabras que aparecen en su historia."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Inventa una historia de 5 frases en la que un marinero antiguo usa el Faro de Alejandría para llegar a salvo a puerto."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos con rima sobre otro faro (real o inventado). Usa al menos dos palabras nuevas aprendidas en esta maravilla."
      }
    ]
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    id: "cuerpo-humano",
    nombre: "El Cuerpo Humano",
    pais: "Todo el mundo",
    emoji: "🫀",
    x: 50, y: 50,

    introduccion: {
      poema: [
        "Llevas contigo la mayor maravilla,",
        "no está en el mar ni en la cima nevada.",
        "Es una máquina que late y brilla,",
        "dentro de ti, siempre despierta, nunca cansada.",
        "",
        "Huesos y músculos, sangre y latido,",
        "ojos que ven y pulmones que respiran.",
        "Todo en su sitio, todo bien unido,",
        "¡la maravilla que tú mismo habitas!"
      ],
      preguntas: [
        {
          pregunta: "Según el poema, ¿dónde está la mayor maravilla?",
          respuesta: "Dentro de nosotros mismos, en el propio cuerpo."
        },
        {
          pregunta: "¿Con qué compara el cuerpo el poema?",
          respuesta: "Con una máquina que late y brilla."
        },
        {
          pregunta: "Nombra tres partes del cuerpo que aparecen en el poema.",
          respuesta: "Huesos, músculos, ojos, pulmones, sangre (cualquiera de ellos)."
        }
      ]
    },

    contenidos: [
      "El cuerpo humano tiene más de 206 huesos y más de 600 músculos.",
      "El corazón late unas 100.000 veces al día y bombea sangre a todo el cuerpo.",
      "El cerebro controla todo el cuerpo y procesa millones de informaciones cada segundo.",
      "Los pulmones absorben oxígeno del aire y eliminan dióxido de carbono.",
      "La piel es el órgano más grande del cuerpo humano.",
      "Los sentidos (vista, oído, olfato, gusto y tacto) nos conectan con el mundo exterior.",
      "El cuerpo humano se renueva constantemente: cada célula tiene una vida limitada."
    ],

    criterios: {
      alumnado: [
        "Conozco las partes principales del cuerpo humano y su función.",
        "Entiendo el poema y puedo responder las preguntas de comprensión.",
        "Sé explicar para qué sirven al menos tres órganos del cuerpo.",
        "He realizado una actividad creativa relacionada con el cuerpo.",
        "Cuido mi cuerpo y entiendo la importancia de hábitos saludables."
      ],
      profesorado: [
        "El alumno/a identifica y nombra correctamente los principales órganos y sistemas del cuerpo (Ciencias Naturales).",
        "Comprende un texto poético y extrae información literal e inferencial (Lengua - Comprensión lectora).",
        "Relaciona el funcionamiento del cuerpo humano con hábitos de vida saludable (Valores y Salud).",
        "Amplía vocabulario científico básico sobre el cuerpo (Lengua / Ciencias).",
        "Produce textos descriptivos o creativos sobre el cuerpo con corrección básica (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema con atención y responde las preguntas. ¿Hay alguna palabra que no entiendas? Búscala en el diccionario."
      },
      {
        tipo: "Ciencias",
        titulo: "El mapa de mi cuerpo",
        descripcion: "Dibuja el contorno de tu cuerpo y señala al menos 6 órganos o partes. Escribe junto a cada uno para qué sirve."
      },
      {
        tipo: "Vocabulario",
        titulo: "Palabras del cuerpo",
        descripcion: "Escribe 5 palabras relacionadas con el cuerpo humano que hayas aprendido. Construye una frase con cada una."
      },
      {
        tipo: "Valores",
        titulo: "Cuido mi maravilla",
        descripcion: "Escribe 3 hábitos saludables que cuidan tu cuerpo y explica por qué son importantes."
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Nombra todos los órganos que recuerdes del cuerpo humano en 2 minutos."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe una carta desde el punto de vista de tu corazón explicando su trabajo durante un día."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Crea un poema de 4 versos dedicado a uno de tus órganos favoritos. Explica por qué lo elegiste."
      }
    ]
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    id: "machu-picchu",
    nombre: "Machu Picchu",
    pais: "Perú",
    emoji: "🏞️",
    x: 27, y: 58,

    introduccion: {
      poema: [
        "Ciudad de nubes, ciudad escondida,",
        "entre cóndores y viento serrano.",
        "Los incas tejieron tu piedra vivida",
        "con manos de sol y de amor andino.",
        "",
        "Quinientos años dormiste en silencio,",
        "la selva te abrazó con su manto verde.",
        "Pero el mundo encontró tu rincón intenso",
        "y hoy nadie te olvida ni te pierde."
      ],
      preguntas: [
        {
          pregunta: "¿Por qué se dice que Machu Picchu «durmió» quinientos años?",
          respuesta: "Porque estuvo abandonada y escondida entre la selva sin que el mundo la conociera."
        },
        {
          pregunta: "¿Qué pájaro aparece en el poema relacionado con Machu Picchu?",
          respuesta: "El cóndor."
        },
        {
          pregunta: "¿Quiénes construyeron Machu Picchu según el poema?",
          respuesta: "Los incas."
        }
      ]
    },

    contenidos: [
      "Machu Picchu es una ciudad inca construida alrededor del año 1450 d.C. en los Andes peruanos.",
      "Fue redescubierta para el mundo occidental en 1911 por el explorador Hiram Bingham.",
      "Está situada a 2.430 metros sobre el nivel del mar, entre montañas y nubes.",
      "Fue construida sin mortero: las piedras encajan perfectamente unas con otras.",
      "Es una de las 7 Maravillas del Mundo Moderno elegidas en 2007.",
      "El cóndor andino, símbolo de los Andes, vuela sobre sus ruinas.",
      "Actualmente es Patrimonio de la Humanidad de la UNESCO."
    ],

    criterios: {
      alumnado: [
        "Sé situar Machu Picchu en el mapa (país y continente).",
        "Puedo explicar quiénes la construyeron y cuándo fue redescubierta.",
        "Entiendo el poema y respondo correctamente las preguntas de comprensión.",
        "He aprendido palabras nuevas relacionadas con esta maravilla.",
        "He realizado una actividad creativa o geográfica sobre Machu Picchu."
      ],
      profesorado: [
        "El alumno/a localiza Machu Picchu en el mapa y conoce su contexto histórico (Geografía / Historia).",
        "Comprende un texto poético y extrae información literal e inferencial (Lengua - Comprensión lectora).",
        "Reconoce la importancia del patrimonio histórico y cultural de otras civilizaciones (Valores / Ciudadanía global).",
        "Amplía vocabulario con términos geográficos e históricos (Lengua / Ciencias Sociales).",
        "Expresa ideas con creatividad en producciones escritas o plásticas (Lengua / Educación artística)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema en voz alta dos veces. Luego responde las preguntas con frases completas."
      },
      {
        tipo: "Geografía",
        titulo: "Los Andes en el mapa",
        descripcion: "Localiza en un mapa América del Sur, Perú y la cordillera de los Andes. ¿Qué otros países forman parte de los Andes?"
      },
      {
        tipo: "Historia",
        titulo: "Los incas",
        descripcion: "Investiga brevemente: ¿quiénes eran los incas? ¿Qué otras construcciones hicieron? Escribe un párrafo con lo que hayas descubierto."
      },
      {
        tipo: "Creación",
        titulo: "Ciudad perdida imaginaria",
        descripcion: "Inventa tu propia ciudad perdida. Dale un nombre, cuéntanos dónde está, quién la construyó y por qué se perdió."
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Di tres cosas que sabes ahora de Machu Picchu que antes no sabías."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe un diario de viaje de 5 frases como si fueras Hiram Bingham el día que descubrió Machu Picchu."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos con rima sobre una ciudad perdida (real o inventada)."
      }
    ]
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    id: "gran-barrera-coral",
    nombre: "Gran Barrera de Coral",
    pais: "Australia",
    emoji: "🐠",
    x: 80, y: 63,

    introduccion: {
      poema: [
        "Bajo el mar hay un jardín de colores",
        "que ningún pintor podría imaginar.",
        "Corales, peces y mil resplandores",
        "bailan juntos sin parar de soñar.",
        "",
        "Es tan grande que se ve desde el cielo,",
        "dos mil kilómetros de vida y de calma.",
        "Pero el mar se calienta, se rompe ese velo,",
        "y necesita que cuidemos su alma."
      ],
      preguntas: [
        {
          pregunta: "¿Cuántos kilómetros de extensión tiene la Gran Barrera según el poema?",
          respuesta: "Dos mil kilómetros."
        },
        {
          pregunta: "¿Por qué dice el poema que «necesita que cuidemos su alma»?",
          respuesta: "Porque el calentamiento del mar está dañando la barrera de coral."
        },
        {
          pregunta: "¿Con qué compara el poema la Gran Barrera de Coral?",
          respuesta: "Con un jardín de colores bajo el mar."
        }
      ]
    },

    contenidos: [
      "La Gran Barrera de Coral es el arrecife de coral más grande del mundo, con más de 2.300 km de longitud.",
      "Se encuentra en el mar de Coral, frente a la costa de Queensland (Australia).",
      "Es visible desde el espacio y fue declarada Patrimonio de la Humanidad en 1981.",
      "Alberga más de 1.500 especies de peces, 4.000 tipos de moluscos y 240 especies de aves.",
      "Está amenazada por el cambio climático: el aumento de la temperatura del agua blanquea y mata el coral.",
      "Los corales no son plantas, sino animales muy pequeños llamados pólipos.",
      "Es uno de los ecosistemas más biodiversos del planeta."
    ],

    criterios: {
      alumnado: [
        "Sé dónde está la Gran Barrera de Coral (país y océano).",
        "Puedo explicar qué es un coral y por qué está en peligro.",
        "Entiendo el poema y respondo las preguntas de comprensión.",
        "Conozco la importancia de cuidar los ecosistemas marinos.",
        "He realizado una actividad creativa o científica sobre esta maravilla."
      ],
      profesorado: [
        "El alumno/a localiza la Gran Barrera de Coral y conoce su importancia ecológica (Ciencias Naturales / Geografía).",
        "Comprende un texto poético con mensaje medioambiental (Lengua - Comprensión lectora).",
        "Reflexiona sobre el impacto del cambio climático en los ecosistemas (Ciencias / Valores).",
        "Amplía vocabulario científico: arrecife, biodiversidad, pólipo, ecosistema (Lengua / Ciencias).",
        "Produce textos argumentativos o creativos sobre el medioambiente (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema y responde las preguntas. ¿Hay alguna parte del poema que te haya llamado la atención? ¿Por qué?"
      },
      {
        tipo: "Ciencias",
        titulo: "¿Qué es un coral?",
        descripcion: "Investiga: ¿los corales son plantas o animales? Escribe un párrafo con lo que descubras y comparte una curiosidad que te haya sorprendido."
      },
      {
        tipo: "Valores",
        titulo: "Carta al océano",
        descripcion: "Escribe una carta breve al océano prometiendo tres cosas que puedes hacer tú para ayudar a proteger la Gran Barrera de Coral."
      },
      {
        tipo: "Creación",
        titulo: "Mi animal del arrecife",
        descripcion: "Inventa un pez o animal marino que viva en la Gran Barrera. Dale un nombre, descríbelo y explica qué come y de qué color es."
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Nombra 5 animales que viven en la Gran Barrera de Coral."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe un pequeño discurso de 4 frases defendiendo la protección de los océanos."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Crea un poema de 4 versos con rima desde el punto de vista de un coral que ve cómo el mar se calienta."
      }
    ]
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    id: "jardines-babilonia",
    nombre: "Jardines de Babilonia",
    pais: "Irak",
    emoji: "🌿",
    x: 59, y: 38,

    introduccion: {
      poema: [
        "Flores y ríos subían por el aire,",
        "verdes cascadas de un sueño ancestral.",
        "¿Existió de verdad o fue solo un donaire",
        "de la memoria del mundo eternal?",
        "",
        "Una reina lloraba lejos de su tierra",
        "y un rey quiso traerle el jardín perdido.",
        "Entre mitos y leyendas se encierra",
        "el misterio más verde jamás conocido."
      ],
      preguntas: [
        {
          pregunta: "¿Por qué el poema pregunta «¿Existió de verdad?»?",
          respuesta: "Porque los Jardines de Babilonia son tan misteriosos que algunos historians dudan de si realmente existieron."
        },
        {
          pregunta: "¿Quién mandó construir los jardines según el poema?",
          respuesta: "Un rey, para una reina que lloraba lejos de su tierra."
        },
        {
          pregunta: "¿Qué palabra del poema significa «antiguo» o «muy viejo»?",
          respuesta: "«Ancestral»."
        }
      ]
    },

    contenidos: [
      "Los Jardines Colgantes de Babilonia son una de las 7 Maravillas del Mundo Antiguo.",
      "Se cree que fueron construidos en Babilonia (actual Irak) alrededor del siglo VI a.C.",
      "Según la leyenda, el rey Nabucodonosor II los mandó construir para su esposa Amitis, que echaba de menos las montañas verdes de su tierra.",
      "Son la única maravilla del mundo antiguo de la que no se ha encontrado ningún resto arqueológico.",
      "Algunos historiadores creen que quizás existieron en Nínive, no en Babilonia.",
      "Se los llama «colgantes» porque las plantas crecían en terrazas escalonadas que parecían flotar en el aire.",
      "El sistema de riego que usaban era extraordinariamente avanzado para su época."
    ],

    criterios: {
      alumnado: [
        "Conozco la historia de los Jardines de Babilonia y su misterio.",
        "Sé por qué son especiales entre todas las maravillas antiguas.",
        "Entiendo el poema y puedo explicar su mensaje.",
        "He aprendido palabras nuevas como «ancestral» o «leyenda».",
        "He creado algo (texto, dibujo, historia) inspirado en esta maravilla."
      ],
      profesorado: [
        "El alumno/a distingue entre historia y leyenda, y comprende el concepto de misterio histórico (Historia / Pensamiento crítico).",
        "Comprende un texto poético y deduce el significado de palabras por contexto (Lengua - Comprensión lectora).",
        "Amplía vocabulario con términos históricos y poéticos: ancestral, mito, leyenda, excavación (Lengua).",
        "Muestra respeto e interés por las culturas de la Antigüedad (Valores / Ciudadanía global).",
        "Produce textos creativos con coherencia narrativa (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema y responde las preguntas. Presta atención a las palabras difíciles e intenta deducir su significado antes de buscarlo."
      },
      {
        tipo: "Historia",
        titulo: "Mito o realidad",
        descripcion: "¿Crees que los Jardines de Babilonia existieron de verdad? Escribe tres argumentos que apoyen tu opinión."
      },
      {
        tipo: "Vocabulario",
        titulo: "Palabras misteriosas",
        descripcion: "Busca el significado de estas palabras del poema: «ancestral», «donaire», «eternal». Escribe una frase con cada una."
      },
      {
        tipo: "Creación",
        titulo: "Diseña tu jardín colgante",
        descripcion: "Si pudieras diseñar un jardín colgante para alguien que quieres, ¿qué plantas y flores pondrías? ¿Dónde estaría? Descríbelo o dibújalo."
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Explica con tus palabras qué significa que algo sea «una leyenda»."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe la historia de amor entre el rey y la reina en 5 frases. ¿Por qué ella lloraba? ¿Cómo se sintió cuando vio el jardín?"
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos sobre algo misterioso que nadie sabe si existió de verdad."
      }
    ]
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    id: "gran-canon",
    nombre: "Gran Cañón",
    pais: "Estados Unidos",
    emoji: "🏜️",
    x: 15, y: 35,

    introduccion: {
      poema: [
        "La tierra abrió sus brazos de roca",
        "y el río Colorado se coló.",
        "Millones de años, gota a gota,",
        "este abismo inmenso esculpió.",
        "",
        "Rojo, naranja, ocre y violeta,",
        "capas de tiempo pintadas al viento.",
        "El Gran Cañón guarda una paleta",
        "de colores que el tiempo ha hecho lento."
      ],
      preguntas: [
        {
          pregunta: "¿Qué río creó el Gran Cañón según el poema?",
          respuesta: "El río Colorado."
        },
        {
          pregunta: "¿Cuánto tiempo tardó en formarse el Gran Cañón?",
          respuesta: "Millones de años."
        },
        {
          pregunta: "¿Qué colores menciona el poema al describir el Gran Cañón?",
          respuesta: "Rojo, naranja, ocre y violeta."
        }
      ]
    },

    contenidos: [
      "El Gran Cañón está en el estado de Arizona, en Estados Unidos.",
      "Fue esculpido durante millones de años por el río Colorado.",
      "Tiene unos 446 km de longitud, hasta 29 km de anchura y más de 1.800 m de profundidad.",
      "Las paredes del cañón muestran capas de roca que representan casi 2.000 millones de años de historia geológica.",
      "Es el Parque Nacional más famoso de Estados Unidos y fue declarado Patrimonio de la Humanidad.",
      "Alberga una gran diversidad de animales: cóndores, pumas, mulas y más de 350 especies de aves.",
      "Los pueblos indígenas han habitado el Gran Cañón durante miles de años."
    ],

    criterios: {
      alumnado: [
        "Sé dónde está el Gran Cañón y cómo se formó.",
        "Puedo explicar qué son las capas de roca y qué nos cuentan.",
        "Entiendo el poema y respondo las preguntas de comprensión.",
        "He aprendido vocabulario relacionado con la geología y la naturaleza.",
        "He realizado una actividad creativa o científica sobre el Gran Cañón."
      ],
      profesorado: [
        "El alumno/a comprende procesos naturales lentos (erosión, geología) y los relaciona con la formación del cañón (Ciencias Naturales).",
        "Comprende un texto poético y extrae información (Lengua - Comprensión lectora).",
        "Localiza el Gran Cañón en el mapa y lo relaciona con su contexto geográfico (Geografía).",
        "Amplía vocabulario con términos geológicos y naturales: erosión, sedimento, cañón, capas (Lengua / Ciencias).",
        "Valora la naturaleza como patrimonio común que hay que proteger (Valores / Ciudadanía)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema y responde las preguntas. ¿Qué imagen del poema te ha gustado más? ¿Por qué?"
      },
      {
        tipo: "Ciencias",
        titulo: "El poder del agua",
        descripcion: "El río Colorado tardó millones de años en crear el Gran Cañón. ¿Puedes pensar en otros ejemplos donde el agua cambia la tierra? Escribe dos ejemplos."
      },
      {
        tipo: "Geografía",
        titulo: "Localiza el Gran Cañón",
        descripcion: "Busca Arizona en el mapa de Estados Unidos. ¿Qué otros estados están cerca? ¿Qué río lo cruza?"
      },
      {
        tipo: "Creación",
        titulo: "Postal desde el cañón",
        descripcion: "Escribe una postal de 5 frases como si estuvieras en el borde del Gran Cañón. Describe lo que ves, oyes y sientes."
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Di cuánto tiempo tardó en formarse el Gran Cañón y explica cómo lo hizo el agua."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Imagina que eres un cóndor que vuela sobre el Gran Cañón. Escribe 4 frases describiendo lo que ves desde el aire."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos sobre algo que la naturaleza haya creado muy despacio (una montaña, una cueva, una isla…)."
      }
    ]
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    id: "amazonia",
    nombre: "La Amazonia",
    pais: "Brasil / Sudamérica",
    emoji: "🌳",
    x: 30, y: 57,

    introduccion: {
      poema: [
        "El pulmón verde del mundo respira",
        "bajo un cielo de pájaros y lluvia.",
        "Millones de árboles tejen y gira",
        "la vida más rica que el tiempo dibuia.",
        "",
        "Jaguares y ranas, ríos y flores,",
        "colores que el ojo no puede contar.",
        "La Amazonia guarda todos los colores",
        "que la Tierra quiso en ella guardar."
      ],
      preguntas: [
        {
          pregunta: "¿Por qué llaman a la Amazonia «el pulmón verde del mundo»?",
          respuesta: "Porque produce muchísimo oxígeno gracias a sus millones de árboles."
        },
        {
          pregunta: "Nombra dos animales que aparecen en el poema.",
          respuesta: "Jaguares y ranas."
        },
        {
          pregunta: "¿Qué elementos del poema describen la riqueza de la Amazonia?",
          respuesta: "Los árboles, pájaros, ríos, flores y colores que menciona."
        }
      ]
    },

    contenidos: [
      "La Amazonia es la selva tropical más grande del mundo, con más de 5,5 millones de km².",
      "Se extiende por nueve países, siendo Brasil el que alberga la mayor parte.",
      "El río Amazonas, que la recorre, es el más caudaloso del mundo.",
      "Alberga el 10% de todas las especies conocidas del planeta.",
      "Produce cerca del 20% del oxígeno de la Tierra, por eso se la llama «el pulmón del mundo».",
      "La deforestación amenaza la selva: cada año se talan millones de árboles.",
      "Millones de personas indígenas han vivido en la Amazonia durante miles de años."
    ],

    criterios: {
      alumnado: [
        "Sé qué es la Amazonia y por qué es tan importante para el planeta.",
        "Entiendo el poema y puedo responder las preguntas de comprensión.",
        "Conozco algunas de las especies que viven en la selva amazónica.",
        "Entiendo qué es la deforestación y por qué es un problema.",
        "He producido un texto creativo o reflexivo sobre la naturaleza."
      ],
      profesorado: [
        "El alumno/a comprende la importancia de la Amazonia como ecosistema global (Ciencias Naturales / Geografía).",
        "Comprende un texto poético con mensaje medioambiental y extrae información (Lengua - Comprensión lectora).",
        "Reflexiona críticamente sobre la deforestación y sus consecuencias (Ciencias / Valores).",
        "Amplía vocabulario: deforestación, biodiversidad, ecosistema, selva tropical (Lengua / Ciencias).",
        "Produce textos argumentativos o creativos sobre el medioambiente (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema y responde las preguntas. ¿Qué sentimientos te transmite el poema sobre la Amazonia?"
      },
      {
        tipo: "Ciencias",
        titulo: "Animales de la Amazonia",
        descripcion: "Investiga y escribe el nombre y una característica de 5 animales que viven en la selva amazónica."
      },
      {
        tipo: "Valores",
        titulo: "¿Por qué talar árboles es un problema?",
        descripcion: "Escribe 3 consecuencias de la deforestación para el planeta. ¿Qué podemos hacer nosotros para ayudar?"
      },
      {
        tipo: "Creación",
        titulo: "Un día en la selva",
        descripcion: "Imagina que pasas un día en la Amazonia. Escribe un pequeño diario de 5 frases contando qué ves, oyes y sientes."
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Explica con tus palabras por qué la Amazonia es importante para todo el planeta."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe una noticia de 4 frases anunciando el descubrimiento de una nueva especie en la Amazonia. Inventa el animal."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos desde el punto de vista de un árbol de la Amazonia que ve cómo sus vecinos son talados."
      }
    ]
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    id: "petra",
    nombre: "Petra",
    pais: "Jordania",
    emoji: "🪨",
    x: 58, y: 38,

    introduccion: {
      poema: [
        "La ciudad que nació dentro de la piedra,",
        "labrada por manos que ya no están.",
        "El desierto la guarda, la vela, la medra,",
        "rosada de aurora, al morir el día van.",
        "",
        "Por un desfiladero angosto y secreto",
        "se llega al Tesoro de piedra rosada.",
        "Un pueblo de piedra, un pueblo completo,",
        "que el tiempo en silencio ha conservado."
      ],
      preguntas: [
        {
          pregunta: "¿De qué material están hechos los edificios de Petra?",
          respuesta: "De piedra (tallada directamente en la roca)."
        },
        {
          pregunta: "¿Cómo se llega al Tesoro según el poema?",
          respuesta: "Por un desfiladero angosto y secreto."
        },
        {
          pregunta: "¿De qué color es la piedra de Petra?",
          respuesta: "Rosada."
        }
      ]
    },

    contenidos: [
      "Petra es una ciudad histórica en Jordania, tallada directamente en la roca hace más de 2.000 años.",
      "Fue construida por los nabateos, un pueblo árabe del desierto.",
      "Su entrada principal es el Siq, un desfiladero de más de 1 km de longitud y paredes de hasta 80 m de altura.",
      "El edificio más famoso es el Tesoro (Al-Khazneh), de 43 metros de altura.",
      "La piedra de Petra varía del rosa al rojo, pasando por el naranja y el púrpura.",
      "Fue redescubierta por Occidente en 1812 por el explorador suizo Johann Burckhardt.",
      "Es una de las 7 Maravillas del Mundo Moderno y Patrimonio de la Humanidad."
    ],

    criterios: {
      alumnado: [
        "Sé situar Petra en el mapa y conocer quiénes la construyeron.",
        "Puedo explicar qué es el Siq y cómo es la entrada a Petra.",
        "Entiendo el poema y respondo las preguntas de comprensión.",
        "He aprendido vocabulario nuevo relacionado con Petra.",
        "He creado un texto o proyecto creativo inspirado en esta maravilla."
      ],
      profesorado: [
        "El alumno/a sitúa Petra en el mapa y conoce su contexto histórico y cultural (Geografía / Historia).",
        "Comprende un texto poético y extrae información (Lengua - Comprensión lectora).",
        "Muestra interés y respeto por las civilizaciones antiguas de Oriente Medio (Valores / Ciudadanía global).",
        "Amplía vocabulario: nabateo, desfiladero, tallado, patrimonio (Lengua / Ciencias Sociales).",
        "Produce textos creativos con riqueza descriptiva (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema en voz alta. Responde las preguntas y señala tu verso favorito. ¿Por qué te gusta?"
      },
      {
        tipo: "Vocabulario",
        titulo: "Palabras de piedra",
        descripcion: "Busca el significado de «desfiladero», «labrada» y «nabateo». Construye una frase con cada palabra."
      },
      {
        tipo: "Geografía",
        titulo: "Petra en el mapa",
        descripcion: "Localiza Jordania en el mapa. ¿Con qué países hace frontera? ¿Qué mar tiene cerca?"
      },
      {
        tipo: "Creación",
        titulo: "Mi ciudad de piedra",
        descripcion: "Diseña con palabras (o dibuja) tu propia ciudad tallada en la roca. ¿Qué habitaciones tendría? ¿Qué decoración?"
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Explica qué hace especial a Petra comparada con otras ciudades antiguas."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe un texto de 4 frases describiendo cómo te sentirías al entrar por el Siq y ver el Tesoro por primera vez."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos sobre una ciudad secreta. Usa al menos un color y una referencia a la piedra o el desierto."
      }
    ]
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    id: "taj-mahal",
    nombre: "Taj Mahal",
    pais: "India",
    emoji: "🕌",
    x: 66, y: 42,

    introduccion: {
      poema: [
        "Blanco como la luna en el río,",
        "el Taj Mahal refleja el amor.",
        "Un rey construyó este sueño vacío",
        "para guardar de su reina el fulgor.",
        "",
        "Veinte años de trabajo y de mármol",
        "dieron forma al amor más eterno.",
        "Y hoy el mundo contempla el milagro",
        "de un palacio vestido de invierno."
      ],
      preguntas: [
        {
          pregunta: "¿Por qué construyó el rey el Taj Mahal?",
          respuesta: "En memoria de su reina, por amor."
        },
        {
          pregunta: "¿Cuántos años tardaron en construirlo según el poema?",
          respuesta: "Veinte años."
        },
        {
          pregunta: "¿Con qué color y material relaciona el poema el Taj Mahal?",
          respuesta: "Con el color blanco y el mármol."
        }
      ]
    },

    contenidos: [
      "El Taj Mahal fue construido entre 1632 y 1653 por el emperador mogol Shah Jahan en memoria de su esposa Mumtaz Mahal.",
      "Está situado en Agra (India), a orillas del río Yamuna.",
      "Está construido principalmente en mármol blanco traído desde Rajastán.",
      "Tardó más de 20 años en construirse y participaron más de 20.000 trabajadores.",
      "Es una de las 7 Maravillas del Mundo Moderno y Patrimonio de la Humanidad.",
      "Su cúpula central mide 73 metros de altura.",
      "Según la leyenda, Shah Jahan quiso construir un Taj Mahal negro para sí mismo, pero nunca pudo."
    ],

    criterios: {
      alumnado: [
        "Sé dónde está el Taj Mahal y conozco la historia de su construcción.",
        "Puedo explicar por qué lo construyeron y de qué material está hecho.",
        "Entiendo el poema y respondo las preguntas de comprensión.",
        "He aprendido palabras nuevas sobre esta maravilla.",
        "He producido un texto o creación inspirado en el amor y la arquitectura."
      ],
      profesorado: [
        "El alumno/a sitúa el Taj Mahal en el mapa y conoce su contexto histórico y cultural (Geografía / Historia).",
        "Comprende un texto poético y extrae información (Lengua - Comprensión lectora).",
        "Conoce y respeta la cultura y patrimonio de India (Valores / Ciudadanía global).",
        "Amplía vocabulario: mármol, cúpula, mogol, mausoleo (Lengua / Ciencias Sociales).",
        "Produce textos creativos o emotivos con corrección básica (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema y responde las preguntas. ¿Cómo crees que se sentía el rey al construir el Taj Mahal?"
      },
      {
        tipo: "Historia",
        titulo: "Una historia de amor",
        descripcion: "Investiga brevemente quiénes fueron Shah Jahan y Mumtaz Mahal. Escribe 3 frases contando su historia."
      },
      {
        tipo: "Arte",
        titulo: "Arquitectura del amor",
        descripcion: "Fíjate en la forma del Taj Mahal: tiene una gran cúpula y cuatro minaretes. ¿Puedes describir con palabras cómo es? ¿Qué te parece su diseño?"
      },
      {
        tipo: "Creación",
        titulo: "Si yo construyera un palacio",
        descripcion: "Si pudieras construir un palacio para alguien especial, ¿cómo sería? ¿De qué material? ¿De qué color? Descríbelo en un párrafo."
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Explica con tus palabras por qué el Taj Mahal es un símbolo del amor."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe una carta de Shah Jahan a Mumtaz Mahal describiendo el palacio que le está construyendo. Usa al menos 5 frases."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos sobre algo que alguien construyó o creó por amor (puede ser real o inventado)."
      }
    ]
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    id: "stonehenge",
    nombre: "Stonehenge",
    pais: "Reino Unido",
    emoji: "🪨",
    x: 46, y: 27,

    introduccion: {
      poema: [
        "Nadie sabe quién puso estas piedras",
        "en círculo, mirando al sol naciente.",
        "Son tan grandes, tan pesadas, tan buenas",
        "que el misterio las hace más sorprendente.",
        "",
        "¿Templo, calendario o lugar de magia?",
        "Hace cinco mil años alguien las movió.",
        "Y hoy seguimos sin saber la magia",
        "del pueblo misterioso que las colocó."
      ],
      preguntas: [
        {
          pregunta: "¿Cuántos años tiene Stonehenge según el poema?",
          respuesta: "Cinco mil años."
        },
        {
          pregunta: "¿Qué tres posibles funciones menciona el poema para Stonehenge?",
          respuesta: "Templo, calendario o lugar de magia."
        },
        {
          pregunta: "¿Por qué Stonehenge sigue siendo un misterio?",
          respuesta: "Porque no se sabe quién lo construyó ni cómo movieron piedras tan grandes."
        }
      ]
    },

    contenidos: [
      "Stonehenge es un monumento prehistórico situado en Wiltshire (Reino Unido), construido hace unos 5.000 años.",
      "Está formado por enormes bloques de piedra dispuestos en círculo.",
      "Las piedras más grandes pesan hasta 25 toneladas y fueron traídas desde más de 200 km de distancia.",
      "Se desconoce quién lo construyó y con qué finalidad: pudo ser un templo, un observatorio astronómico o un lugar de rituales.",
      "En los solsticios de verano e invierno, el sol sale y se pone alineado perfectamente con las piedras.",
      "Es uno de los monumentos prehistóricos más famosos y misteriosos del mundo.",
      "Fue declarado Patrimonio de la Humanidad por la UNESCO."
    ],

    criterios: {
      alumnado: [
        "Sé dónde está Stonehenge y cuántos años tiene aproximadamente.",
        "Puedo explicar por qué Stonehenge es un misterio.",
        "Entiendo el poema y respondo las preguntas de comprensión.",
        "He aprendido vocabulario relacionado con la prehistoria.",
        "He producido un texto creativo o reflexivo sobre Stonehenge."
      ],
      profesorado: [
        "El alumno/a sitúa Stonehenge en el mapa y lo relaciona con la Prehistoria (Historia / Geografía).",
        "Comprende un texto poético y extrae información literal e inferencial (Lengua - Comprensión lectora).",
        "Desarrolla el pensamiento crítico ante un misterio histórico (Pensamiento crítico / Historia).",
        "Amplía vocabulario: prehistórico, monumento, solsticio, rituales (Lengua / Ciencias Sociales).",
        "Produce textos argumentativos o creativos con corrección básica (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema y responde las preguntas. ¿Qué parte del poema te ha parecido más misteriosa?"
      },
      {
        tipo: "Historia",
        titulo: "¿Para qué servía Stonehenge?",
        descripcion: "Hay varias teorías sobre la función de Stonehenge. Elige una y escribe un párrafo defendiendo que esa es la correcta."
      },
      {
        tipo: "Ciencias",
        titulo: "El solsticio",
        descripcion: "¿Sabes qué es un solsticio? Investígalo y escribe dos frases explicándolo con tus propias palabras."
      },
      {
        tipo: "Creación",
        titulo: "El misterio de las piedras",
        descripcion: "Inventa una historia (de 5 frases) que explique quién construyó Stonehenge y por qué. ¡Usa tu imaginación!"
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Explica con tus palabras qué es lo más misterioso de Stonehenge."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe el diario de un arqueólogo que visita Stonehenge por primera vez. Describe lo que ve y las preguntas que se hace."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos sobre algo misterioso de la historia que nadie ha podido explicar todavía."
      }
    ]
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    id: "piramides-giza",
    nombre: "Pirámides de Guiza",
    pais: "Egipto",
    emoji: "🏛️",
    x: 55, y: 40,

    introduccion: {
      poema: [
        "Tres gigantes de arena y de sol,",
        "que el viento no pudo borrar.",
        "Mil secretos guarda el faraón",
        "bajo el manto del arenal.",
        "",
        "Cuatro mil años mirando al desierto,",
        "la única maravilla que el tiempo respetó.",
        "El Nilo las vio nacer, el mundo las ha visto,",
        "y la Esfinge en silencio todo lo guardó."
      ],
      preguntas: [
        {
          pregunta: "¿Cuántas pirámides se mencionan en el poema?",
          respuesta: "Tres (tres gigantes)."
        },
        {
          pregunta: "¿Cuántos años llevan las pirámides mirando al desierto según el poema?",
          respuesta: "Cuatro mil años."
        },
        {
          pregunta: "¿Qué monumento guarda el silencio junto a las pirámides?",
          respuesta: "La Esfinge."
        }
      ]
    },

    contenidos: [
      "Las Pirámides de Guiza son el único monumento que sigue en pie de las 7 Maravillas del Mundo Antiguo.",
      "Fueron construidas hace más de 4.500 años como tumbas para los faraones egipcios.",
      "La más grande, la Pirámide de Keops, tiene 138 metros de altura y fue el edificio más alto del mundo durante más de 3.800 años.",
      "Fueron construidas con más de dos millones de bloques de piedra, algunos de más de 70 toneladas.",
      "Cerca de las pirámides se encuentra la Gran Esfinge, una estatua con cuerpo de león y cabeza humana.",
      "Los antiguos egipcios creían en la vida después de la muerte, por eso construían tumbas tan impresionantes.",
      "Están situadas en la meseta de Guiza, cerca de El Cairo, a orillas del río Nilo."
    ],

    criterios: {
      alumnado: [
        "Sé dónde están las Pirámides de Guiza y para qué fueron construidas.",
        "Puedo explicar quiénes las construyeron y qué es la Esfinge.",
        "Entiendo el poema y respondo las preguntas de comprensión.",
        "He aprendido vocabulario sobre el Antiguo Egipto.",
        "He realizado una actividad creativa o histórica sobre las pirámides."
      ],
      profesorado: [
        "El alumno/a sitúa las pirámides en Egipto y las relaciona con la civilización del Antiguo Egipto (Historia / Geografía).",
        "Comprende un texto poético y extrae información (Lengua - Comprensión lectora).",
        "Conoce aspectos básicos de la civilización egipcia: faraones, creencias, monumentos (Historia).",
        "Amplía vocabulario: faraón, esfinge, arqueología, sarcófago (Lengua / Historia).",
        "Produce textos creativos o históricos con corrección básica (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema y responde las preguntas. ¿Qué verso te ha parecido más poético? ¿Por qué?"
      },
      {
        tipo: "Historia",
        titulo: "Los faraones",
        descripcion: "Investiga quién era el faraón Keops y escribe 3 datos sobre él. ¿Qué otros faraones famosos conoces?"
      },
      {
        tipo: "Matemáticas",
        titulo: "Números de la pirámide",
        descripcion: "La Pirámide de Keops tiene más de 2 millones de bloques. Si cada bloque pesa 2,5 toneladas, ¿cuánto pesan en total? ¡Usa la calculadora si lo necesitas!"
      },
      {
        tipo: "Creación",
        titulo: "Carta desde el desierto",
        descripcion: "Escribe una carta de 5 frases como si fueras un trabajador que está ayudando a construir la pirámide. ¿Cómo es tu día? ¿Qué sientes?"
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Explica por qué las Pirámides de Guiza son especiales entre todas las maravillas antiguas."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Imagina que eres arqueólogo y entras por primera vez en la cámara secreta de una pirámide. Escribe 5 frases describiendo lo que ves."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos desde el punto de vista de la Esfinge, que lleva miles de años mirando el desierto."
      }
    ]
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    id: "torre-eiffel",
    nombre: "Torre Eiffel",
    pais: "Francia",
    emoji: "🗼",
    x: 48, y: 28,

    introduccion: {
      poema: [
        "De hierro y de sueños se alzó en el cielo",
        "la torre más alta que París había visto.",
        "Gustave Eiffel extendió su vuelo",
        "y el mundo entero quedó convicto.",
        "",
        "La llamaron fea, la quisieron tirar,",
        "pero el tiempo la volvió la más bella.",
        "Hoy millones de ojos la quieren mirar",
        "y nadie imagina París sin ella."
      ],
      preguntas: [
        {
          pregunta: "¿Quién construyó la Torre Eiffel según el poema?",
          respuesta: "Gustave Eiffel."
        },
        {
          pregunta: "¿Cómo reaccionó la gente al principio ante la Torre Eiffel?",
          respuesta: "La llamaron fea y quisieron tirarla."
        },
        {
          pregunta: "¿Qué cambió con el tiempo según el poema?",
          respuesta: "El tiempo la convirtió en la más bella y ahora millones la admiran."
        }
      ]
    },

    contenidos: [
      "La Torre Eiffel fue construida entre 1887 y 1889 por el ingeniero Gustave Eiffel.",
      "Fue diseñada como entrada a la Exposición Universal de París de 1889.",
      "Mide 330 metros de altura y fue el edificio más alto del mundo durante 41 años.",
      "Está construida con más de 18.000 piezas de hierro unidas por 2,5 millones de remaches.",
      "Cuando fue construida, muchos parisinos la consideraron fea y querían demolerla.",
      "Actualmente es el monumento más visitado del mundo, con más de 7 millones de visitas al año.",
      "Está situada a orillas del río Sena, en el centro de París."
    ],

    criterios: {
      alumnado: [
        "Sé dónde está la Torre Eiffel y quién la construyó.",
        "Puedo explicar para qué fue construida y qué ocurrió al principio.",
        "Entiendo el poema y respondo las preguntas de comprensión.",
        "He reflexionado sobre cómo cambia la opinión de las personas con el tiempo.",
        "He producido un texto creativo relacionado con la Torre Eiffel."
      ],
      profesorado: [
        "El alumno/a sitúa la Torre Eiffel en el mapa y conoce su historia (Geografía / Historia).",
        "Comprende un texto poético y extrae información (Lengua - Comprensión lectora).",
        "Reflexiona sobre el juicio estético y cómo cambia con el tiempo (Valores / Educación artística).",
        "Amplía vocabulario: ingeniería, hierro, exposición universal, monumento (Lengua / Ciencias Sociales).",
        "Produce textos creativos o argumentativos con corrección básica (Lengua - Expresión escrita)."
      ]
    },

    actividades: [
      {
        tipo: "Comprensión lectora",
        titulo: "Preguntas sobre el poema",
        descripcion: "Lee el poema y responde las preguntas. ¿Estás de acuerdo con los que la llamaban fea? ¿Por qué?"
      },
      {
        tipo: "Historia",
        titulo: "La Exposición Universal",
        descripcion: "¿Sabes qué es una Exposición Universal? Investígalo y escribe 2 frases explicando para qué sirve."
      },
      {
        tipo: "Valores",
        titulo: "Cambiar de opinión",
        descripcion: "¿Alguna vez has cambiado de opinión sobre algo que al principio no te gustaba? Escribe 3 frases contándolo."
      },
      {
        tipo: "Creación",
        titulo: "Postal desde París",
        descripcion: "Escribe una postal de 4 frases desde la cima de la Torre Eiffel. Describe lo que ves, oyes y sientes."
      }
    ],

    desafios: [
      {
        nivel: "⭐ Explorador",
        reto: "Di tres datos que recuerdes sobre la Torre Eiffel sin mirar el texto."
      },
      {
        nivel: "⭐⭐ Aventurero",
        reto: "Escribe un artículo de periódico de 1889 criticando la Torre Eiffel y otro de hoy en día defendiéndola. Usa 3 frases para cada uno."
      },
      {
        nivel: "⭐⭐⭐ Gran Explorador",
        reto: "Escribe un poema de 4 versos sobre algo que al principio parecía feo o malo pero que con el tiempo resultó ser maravilloso."
      }
    ]
  }

]; // fin MAPA_MARAVILLAS
