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
        "No camino, pero guío,",
        "no hablo, pero doy razón.",
        "Cuando la noche se alarga,",
        "soy luz y soy dirección.",
        "",
        "Observo mares lejanos,",
        "preguntas llegan a mí.",
        "Si buscas saber y método,",
        "tal vez empieces aquí."
      ],
      preguntas: [
        {
          pregunta: "¿Qué elemento del poema ayuda a las personas cuando están perdidas durante la noche?",
          respuesta: "Una luz que sirve para orientar y guiar el camino."
        },
        {
          pregunta: "¿Qué construcción famosa, situada junto al mar, utilizaba una gran luz para indicar el camino a los navegantes?",
          respuesta: "Un faro."
        },
        {
          pregunta: "¿Qué maravilla del mundo vamos a explorar hoy?",
          respuesta: "El Faro de Alejandría."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "Dos brazos miden el mundo,",
        "un latido marca el compás,",
        "soy mapa, soy equilibrio,",
        "soy ciencia y arte a la vez.",
        "",
        "Me muevo, siento y aprendo,",
        "conmigo empiezas a explorar.",
        "Antes de viajar muy lejos,",
        "mírate… y empieza a pensar.",
        
      ],
      preguntas: [
        {
          pregunta: "¿Qué elemento del poema nos hace pensar que dentro de nosotros hay algo que marca el ritmo de la vida?",
          respuesta: "Un latido que marca el compás."
        },
        {
          pregunta: "En nuestro cuerpo existe un \"tambor\" que nunca deja de sonar. ¿Qué órgano crees que representa esa pista del poema?",
          respuesta: "El corazón."
        },
        {
          pregunta: "¿Qué maravilla del mundo vamos a explorar?",
          respuesta: "El cuerpo humano."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "Entre montañas despierto,",
        "donde la tierra es hogar,",
        "aquí se cuida el cuerpo,",
        "como se cuida el lugar.",
        "",
        "Alimento y equilibrio,",
        "naturaleza y razón.",
        "Si comer también es arte,",
        "aquí empieza la lección.",
        
      ],
      preguntas: [
        {
          pregunta: "¿Qué dos elementos del poema nos ayudan a descubrir que este lugar está rodeado por la naturaleza y que en él se cultivaban alimentos?",
          respuesta: "Las montañas y la tierra."
        },
        {
          pregunta: "¿Qué lugar puede construirse entre montañas para que las personas vivan, cultiven alimentos y cuiden la naturaleza?",
          respuesta: "Un pueblo o una ciudad."
        },
        {
          pregunta: "¿Qué maravilla del mundo vamos a explorar?",
          respuesta: "Machu Picchu."
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
       "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "Bajo un manto de colores",
        "nadan historias sin voz,",
        "aletas, escamas y sueños",
        "bailan sin explicación.",
        "",
        "Si miras con ojos atentos",
        "verás vida en cada rincón,",
        "un mundo oculto y diverso",
        "que pide tu protección.",
        
      ],
      preguntas: [
        {
          pregunta: "¿Qué elementos del poema nos hacen pensar que habla de un lugar lleno de vida bajo el agua?",
          respuesta: "Las aletas, las escamas y un mundo lleno de vida."
        },
        {
          pregunta: "¿Cómo se llaman las grandes formaciones que viven bajo el mar y sirven de hogar a miles de animales marinos?¿Cómo se llaman las grandes formaciones que viven bajo el mar y sirven de hogar a miles de animales marinos?",
          respuesta: "Los corales."
        },
        {
          pregunta: "¿Qué maravilla del mundo vamos a explorar?",
          respuesta: "La Gran Barrera de Coral."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "Crezco sin tocar el suelo,",
        "subo buscando el sol,",
        "mis hojas cuentan secretos",
        "de paciencia y dedicación.",
        "",
        "Si plantas bien una idea,",
        "despacio la verás crecer.",
        "Hoy exploramos la vida",
        "que sabe esperar y florecer."
      ],
      preguntas: [
        {
          pregunta: "¿Qué elementos del poema nos hacen pensar que habla de un lugar donde las plantas crecen y la naturaleza es la protagonista?",
          respuesta: "Las hojas, el sol, las plantas y el crecimiento."
        },
        {
          pregunta: "¿Cómo se llama el lugar donde crecen muchas plantas, flores y árboles cuidados por las personas?",
          respuesta: "Un jardín."
        },
        {
          pregunta: "¿Qué maravilla vamos a explorar?",
          respuesta: "Los Jardines Colgantes de Babilonia."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "El tiempo escribió en mi piel",
        "con viento, agua y calor,",
        "capa a capa va contando",
        "historias del mundo en flor.",
        "",
        "No corro, pero transformo,",
        "no hablo, pero sé enseñar",
        "que el clima y la tierra juntos",
        "nunca dejan de cambiar."
      ],
      preguntas: [
        {
          pregunta: "¿Qué elementos del poema nos hacen pensar que la naturaleza puede transformar un paisaje con el paso del tiempo?",
          respuesta: "El viento, el agua, el calor, el clima y la tierra."
        },
        {
          pregunta: "¿Cómo se llama el gran paisaje de roca que se forma durante millones de años gracias a la acción del agua, el viento y el tiempo?",
          respuesta: "Un cañón."
        },
        {
          pregunta: "¿Qué maravilla vamos a explorar?",
          respuesta: "El Gran Cañón."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "Millones de voces verdes",
        "susurran sin hacer ruido,",
        "todo está unido a todo,",
        "nada vive dividido.",
        "",
        "Si escuchas con atención",
        "aprenderás la lección:",
        "cuidar lo que nos rodea",
        "es cuidar el corazón."
      ],
      preguntas: [
        {
          pregunta: "¿Qué elementos del poema nos hacen pensar que habla de un lugar donde viven muchos seres vivos que dependen unos de otros?",
          respuesta: "Las voces verdes, la unión entre todos los seres vivos y la importancia de cuidar la naturaleza."
        },
        {
          pregunta: "¿Cómo se llama el gran bosque donde viven miles de plantas y animales formando un mismo ecosistema?",
          respuesta: "Una selva."
        },
        {
          pregunta: "¿Qué maravilla vamos a explorar?",
          respuesta: "La Amazonía."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "Tallada en roca y silencio,",
        "ciudad de arena y pasar,",
        "aquí el ser humano aprende",
        "a convivir y a habitar.",
        "",
        "Calles, pueblos y caminos",
        "cuentan quiénes somos hoy.",
        "El mundo también se escribe",
        "con las huellas que dejo yo."
      ],
      preguntas: [
        {
          pregunta: "¿Qué elementos del poema nos hacen pensar que habla de un lugar construido por las personas y lleno de historia?",
          respuesta: "La roca, la ciudad, las calles, los pueblos y los caminos."
        },
        {
          pregunta: "¿Cómo se llama un lugar donde viven las personas y encontramos calles, edificios y espacios para convivir?",
          respuesta: "Una ciudad."
        },
        {
          pregunta: "¿Qué maravilla vamos a explorar?",
          respuesta: "Petra."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "No todo lo que construimos",
        "es solo para usar,",
        "hay cosas que nos recuerdan",
        "lo que debemos cuidar.",
        "",
        "Si consumes sin pensar,",
        "el mundo puede doler.",
        "Hoy exploramos un reto:",
        "elegir bien qué hacer."
      ],
      preguntas: [
        {
          pregunta: "¿Qué elementos del poema nos hacen pensar que algunas construcciones pueden transmitir valores y enseñanzas además de tener una utilidad?",
          respuesta: "Las construcciones, el cuidado, la importancia de elegir bien y proteger lo que tenemos."
        },
        {
          pregunta: "¿Cómo llamamos a una gran construcción creada por las personas para recordar algo importante o expresar un sentimiento?",
          respuesta: "Un monumento."
        },
        {
          pregunta: "¿Qué maravilla vamos a explorar?",
          respuesta: "El Taj Mahal."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "Antes de escribir palabras",
        "ya queríamos saber",
        "por qué el sol marca los días",
        "y la noche vuelve a nacer.",
        "",
        "Piedras que miran al cielo,",
        "preguntas sin responder.",
        "Así empezó la historia",
        "de aprender y comprender."
      ],
      preguntas: [
        {
          pregunta: "¿Qué elementos del poema nos hacen pensar que las personas observaban el cielo para comprender el paso del tiempo?",
          respuesta: "El sol, la noche y las piedras que miran al cielo."
        },
        {
          pregunta: "¿Cómo se llama una construcción formada por grandes piedras colocadas en círculo que se utilizaba para observar el cielo?",
          respuesta: "Un círculo de piedras."
        },
        {
          pregunta: "¿Qué maravilla vamos a explorar?",
          respuesta: "Stonehenge."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
        "I.E.1. Realiza una evaluación inicial diagnóstica que permita ajustar la programación educativa, identificando las necesidades, habilidades y conocimientos previos del alumnado.",
        "I.E.2. Emplea de manera sistemática diversos procedimientos e instrumentos de recogida de información, tanto cualitativos como cuantitativos, para obtener datos precisos sobre el progreso.",
        "I.E.3. Diseña y proporciona situaciones de aprendizaje que favorezcan el desarrollo de la afectividad, promoviendo la empatía, la autoestima y las relaciones interpersonales.",
        "I.E.4. Evalúa de forma continua e integral el planteamiento, desarrollo y resultados de las propuestas didácticas implementadas, asegurando su efectividad y p respecto a los objetivos establecidos.",
        "I.E.5. Diseña situaciones de aprendizaje que faciliten la comprensión del tema, activando conocimientos previos y generando interés.",
        "I.E.6. Comunica de manera clara y explícita los objetivos de aprendizaje, destacando su importancia, funcionalidad y relevancia en la vida cotidiana del alumnado, fomentando la motivación.",
        "I.E.7. Emplea una variedad de técnicas de evaluación, con el fin de obtener una valoración integral de su desempeño.",
        "I.E.8. Implementa estrategias y procedimientos de autoevaluación y coevaluación, promoviendo la reflexión crítica.",
        "I.E.9. Planifica las unidades didácticas de manera flexible, favoreciendo una enseñanza adaptativa.",
        "I.E.10. Coordina la planificación y desarrollo de las actividades educativas de forma colaborativa con el equipo docente.",
        "I.E.11. Adapta las estrategias de enseñanza y programa las actividades en función de las competencias, garantizando su alineación con los criterios y saberes.",
        "I.E.12. Utiliza diversos medios y canales de comunicación para informar de manera efectiva a las familias, al profesorado y al alumnado sobre el progreso educativo."
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
