// Fuente oficial: material de marketing propio del dueño del proyecto
// ("linea natural casa verde.pptx", 227 diapositivas, 2026-09-05).
// Estos son productos de MARCA PROPIA de La Casa Verde (distintos del catalogo de
// terceros de src/data/productos.ts). Los textos de "claims" son literalmente el
// copy de marketing oficial del fabricante - no fueron verificados clinicamente por
// este sistema, por eso el Asistente Verde SIEMPRE los presenta como informacion del
// fabricante junto al aviso de que no sustituyen valoracion medica. No se inventa
// ningun beneficio que no aparezca en el material original.

export interface ProductoLineaPropia {
  id: string
  nombre: string
  claims: string[]
  presentacion: string | null
  ingredientesClave: string[] | null
}

export const LINEA_PROPIA: ProductoLineaPropia[] = [
  {
    "id": "lp-1",
    "nombre": "Megadol",
    "claims": [
      "Fortalece huesos y articulaciones",
      "Regenera cartílago con colágeno hidrolizado",
      "Mejora la movilidad y alivia dolores articulares",
      "Favorece la función muscular y nerviosa"
    ],
    "presentacion": "350 mL",
    "ingredientesClave": [
      "Colágeno hidrolizado",
      "Cúrcuma",
      "Bisglicinato de magnesio",
      "Vitaminas y minerales"
    ]
  },
  {
    "id": "lp-2",
    "nombre": "Cirfin",
    "claims": [
      "Mejora la circulación sanguínea",
      "Reduce la inflamación en las venas",
      "Disminuye el riesgo de enfermedad coronaria",
      "Favorece la salud venosa"
    ],
    "presentacion": "500 mL, aprox. 15 porciones",
    "ingredientesClave": null
  },
  {
    "id": "lp-3",
    "nombre": "Magnesio (comprimidos)",
    "claims": [
      "Favorece la digestión y ayuda a combatir el estreñimiento",
      "Apoya la memoria y salud cerebral",
      "Reduce la ansiedad y mejora el sueño",
      "Fortalece huesos y articulaciones"
    ],
    "presentacion": "100 comprimidos (100 g), aprox. 50 porciones",
    "ingredientesClave": [
      "Citrato de magnesio",
      "Taurinato de magnesio",
      "Bisglicinato de magnesio",
      "Cloruro de magnesio",
      "Óxido de magnesio"
    ]
  },
  {
    "id": "lp-4",
    "nombre": "Vinagre de Manzana y FOS (gomas)",
    "claims": [
      "Mejora la digestión y el equilibrio estomacal",
      "Ayuda a controlar los niveles de azúcar",
      "Favorece la pérdida de grasa y la saciedad",
      "Contribuye a la salud del corazón"
    ],
    "presentacion": "Gomas de gelatina, 60 gomas / 130 g, 30 porciones",
    "ingredientesClave": null
  },
  {
    "id": "lp-5",
    "nombre": "Ashwagandha, Toronjil, Lechuga (gomas)",
    "claims": [
      "Ayuda a promover la relajación y el descanso",
      "Contribuye al manejo natural del estrés diario",
      "Fortificado con vitamina B6 para mayor bienestar",
      "Apoya el bienestar mental y emocional"
    ],
    "presentacion": "Gomas de gelatina, sabor menta, 60 gomas / 150 g, 30 porciones",
    "ingredientesClave": null
  },
  {
    "id": "lp-6",
    "nombre": "Aceite de Orégano (perlas)",
    "claims": [
      "Poder antioxidante: protege las células del daño de radicales libres",
      "Propiedades antimicrobianas: apoya las defensas con acción antibacteriana y antiviral",
      "Mejora la salud digestiva y ayuda a reducir la inflamación intestinal",
      "Alivio respiratorio natural"
    ],
    "presentacion": "100 perlas / 60 g, 90 porciones, 300 mg por perla",
    "ingredientesClave": null
  },
  {
    "id": "lp-7",
    "nombre": "Ulgax",
    "claims": [
      "Favorece el equilibrio gástrico y reduce acidez",
      "Alivio de gases y mejora digestiva",
      "Ayuda a prevenir el estreñimiento con fibra vegetal",
      "Calma la inflamación del colon"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Repollo morado",
      "Garcinia",
      "Zanahoria",
      "Papaya",
      "Guayaba",
      "Orégano",
      "Manzanilla",
      "Manzana",
      "Noni"
    ]
  },
  {
    "id": "lp-8",
    "nombre": "Cloruro de Magnesio (cápsulas)",
    "claims": [
      "Fortalece huesos y mejora la absorción de calcio",
      "Ayuda a prevenir calambres y mejora la función muscular",
      "Apoya el sistema nervioso y reduce el estrés",
      "Contribuye a regular la presión arterial"
    ],
    "presentacion": "90 cápsulas, 500 mg c/u",
    "ingredientesClave": null
  },
  {
    "id": "lp-9",
    "nombre": "Bar-Press",
    "claims": [
      "Ayuda a controlar la presión arterial",
      "Favorece la salud del corazón",
      "Apoya la circulación y evita coágulos",
      "Ayuda a mantener niveles saludables de colesterol y triglicéridos"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Guaraná",
      "Goma guar",
      "Higuerilla",
      "Vitaminas, zinc y cobre"
    ]
  },
  {
    "id": "lp-10",
    "nombre": "Renaver",
    "claims": [
      "Apoya la limpieza de las vías urinarias",
      "Favorece la desintoxicación del organismo",
      "Ayuda en el manejo de cálculos renales con acción diurética",
      "Con vitamina C que reduce la flora bacteriana"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": null
  },
  {
    "id": "lp-11",
    "nombre": "Forza Maxin",
    "claims": [
      "Puede ayudar como apoyo en casos de disfunción eréctil",
      "Ayuda a mejorar el flujo sanguíneo",
      "Regula hormonas y estimula la fertilidad",
      "Brinda un mejor desempeño sexual de la pareja"
    ],
    "presentacion": "500 mL, aprox. 33 porciones, sabor frutos rojos",
    "ingredientesClave": [
      "Ginseng",
      "Maca",
      "Guaraná",
      "Tribulus terrestris",
      "Zinc",
      "L-arginina",
      "Tongkat ali",
      "Damiana",
      "Vitaminas"
    ]
  },
  {
    "id": "lp-12",
    "nombre": "Colágeno Hidrolizado (bebida)",
    "claims": [
      "Mantiene la salud de las articulaciones",
      "Fortalece el sistema óseo y cardiovascular",
      "Acción antioxidante y antienvejecimiento",
      "Mejora el aspecto de la piel, cabello y uñas"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Colágeno hidrolizado",
      "Vitamina C",
      "Vitamina D",
      "Biotina"
    ]
  },
  {
    "id": "lp-13",
    "nombre": "Aceite de Orégano con Aguacate (gotas)",
    "claims": [
      "Ayuda a combatir bacterias, hongos y virus",
      "Reduce inflamación y alivia dolores articulares",
      "Favorece la digestión y el equilibrio intestinal",
      "Refuerza el sistema inmune y ayuda a controlar el peso"
    ],
    "presentacion": "10 mL, solución oral",
    "ingredientesClave": null
  },
  {
    "id": "lp-14",
    "nombre": "Rescate Esencia Floral",
    "claims": [
      "Alivia el estrés y la tensión emocional",
      "Restaura la calma y la serenidad",
      "Ayuda a manejar el miedo y la ansiedad",
      "Recupera el equilibrio y la armonía interior"
    ],
    "presentacion": "Gotas sublinguales, 30 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-15",
    "nombre": "Ferronaf",
    "claims": [
      "Ayuda a prevenir la anemia por deficiencia de folato",
      "Mejora absorción de hierro y B12",
      "Aumenta los niveles de energía",
      "Favorece la salud cerebral"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Hierro",
      "Ácido fólico",
      "B12",
      "B6",
      "Niacina",
      "Vitamina D3",
      "Stevia"
    ]
  },
  {
    "id": "lp-16",
    "nombre": "Radix Zarzaverde",
    "claims": [
      "Depura la sangre, ayuda a eliminar toxinas y reduce el ácido úrico",
      "Alivia dolores reumáticos y la gota",
      "Ayuda a combatir acné, eccemas y otras impurezas",
      "Efecto diurético y alto contenido en fibra"
    ],
    "presentacion": "500 mL, aprox. 16 porciones, sabor a rosas",
    "ingredientesClave": null
  },
  {
    "id": "lp-17",
    "nombre": "Jarabe Citus",
    "claims": [
      "Alivia la tos seca y severa",
      "Afloja flemas y limpia vías respiratorias",
      "Con miel, propóleo y jengibre natural",
      "Ayuda a prevenir gripe y resfriados"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": null
  },
  {
    "id": "lp-18",
    "nombre": "Brobelia",
    "claims": [
      "Refuerza el sistema inmunológico",
      "Alivia la tos y expulsa flemas",
      "Ayuda a combatir gripe y resfriados",
      "Rico en vitaminas C y A"
    ],
    "presentacion": "500 mL, aprox. 16 porciones, sabor naranja",
    "ingredientesClave": [
      "Guaraná",
      "Saúco",
      "Jengibre",
      "Tomillo",
      "Propóleo",
      "Miel de abeja",
      "Ajo",
      "Menta"
    ]
  },
  {
    "id": "lp-19",
    "nombre": "Argentin",
    "claims": [
      "Alivia alergias respiratorias y por polen",
      "Desinflama vías respiratorias y mucosas",
      "Puede ayudar a aliviar molestias de rinitis, sinusitis y gripe",
      "Mejora la circulación sanguínea"
    ],
    "presentacion": "500 mL, aprox. 16 porciones, sabor naranja",
    "ingredientesClave": null
  },
  {
    "id": "lp-20",
    "nombre": "Naturgrass",
    "claims": [
      "Desintoxica y limpia el hígado",
      "Apoya la pérdida de peso natural",
      "Ayuda a eliminar colesterol, triglicéridos y radicales libres",
      "Aliado en tu bienestar y control del peso"
    ],
    "presentacion": "Concentrado 500 mL, 17 porciones aprox.",
    "ingredientesClave": [
      "Berenjena",
      "Linaza",
      "Café verde",
      "Alcachofa",
      "Piña",
      "Té verde",
      "Vitamina B1",
      "Vitamina C",
      "Hierro"
    ]
  },
  {
    "id": "lp-21",
    "nombre": "Prosberry",
    "claims": [
      "Apoya la salud de las vías urinarias",
      "Ayuda a reducir la inflamación prostática",
      "Ayuda a prevenir infecciones urinarias",
      "Alto en antioxidantes y vitamina C"
    ],
    "presentacion": "Concentrado 500 mL, 17 porciones aprox.",
    "ingredientesClave": [
      "Licopeno",
      "Arándano",
      "Níspero",
      "Maca",
      "Guanábana",
      "Cúrcuma",
      "Vitamina B1, B3, B6"
    ]
  },
  {
    "id": "lp-22",
    "nombre": "Adelvit",
    "claims": [
      "Favorece la quema de grasa y elimina toxinas",
      "Aporta colágeno para piel, uñas y articulaciones",
      "Rico en vitaminas y minerales esenciales",
      "Alto en fibra, mejora la digestión y saciedad"
    ],
    "presentacion": "Polvo 500 g, 25 porciones",
    "ingredientesClave": [
      "Proteína de soya",
      "Piña",
      "Melón",
      "Colágeno",
      "Salvado de trigo",
      "27 vitaminas y minerales"
    ]
  },
  {
    "id": "lp-23",
    "nombre": "C-Mg (Magnesio + Vitamina D)",
    "claims": [
      "Apoya la salud ósea y la absorción del calcio",
      "Ayuda a reducir el estrés y la ansiedad",
      "Favorece la relajación muscular y reduce calambres",
      "Refuerza el sistema inmunológico"
    ],
    "presentacion": "Concentrado 500 mL, 17 porciones aprox.",
    "ingredientesClave": [
      "Citrato de magnesio",
      "Vitamina D"
    ]
  },
  {
    "id": "lp-24",
    "nombre": "Chancapiedra",
    "claims": [
      "Ayuda a prevenir cálculos renales",
      "Favorece la salud urinaria",
      "Apoya el control de la hipertensión",
      "Aporta antioxidantes naturales"
    ],
    "presentacion": "Concentrado 500 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-25",
    "nombre": "ColgeVit",
    "claims": [
      "Favorece la función muscular y evita calambres",
      "Apoya la salud cardiovascular (con Omega 3)",
      "Reduce la inflamación (con cúrcuma y jengibre)",
      "Refuerza el sistema inmune"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": [
      "Magnesio",
      "Omega 3",
      "Cúrcuma",
      "Jengibre"
    ]
  },
  {
    "id": "lp-26",
    "nombre": "Lin-Chin",
    "claims": [
      "Apoya la limpieza natural del organismo",
      "Favorece la digestión con hierbas depurativas",
      "Contribuye a eliminar toxinas de forma natural",
      "Estimula el funcionamiento de hígado y riñones"
    ],
    "presentacion": "Bebida concentrada, 500 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-27",
    "nombre": "Mary Ruth's Líquido Matutino",
    "claims": [
      "Apoya el crecimiento y grosor del cabello",
      "Mejora la salud y elasticidad de la piel",
      "Refuerza el sistema inmune con vitamina C y zinc",
      "Aumenta energía y metabolismo con vitaminas B"
    ],
    "presentacion": "1000 mL, sabor durazno",
    "ingredientesClave": [
      "Citrato de magnesio",
      "Cloruro de magnesio",
      "Óxido de magnesio",
      "Colágeno hidrolizado",
      "Sábila",
      "Canela",
      "Romero"
    ]
  },
  {
    "id": "lp-28",
    "nombre": "Melena de León",
    "claims": [
      "Mejora la memoria y la concentración",
      "Apoya la salud cerebral y nerviosa",
      "Rica en vitaminas y minerales esenciales",
      "Fuente natural de antioxidantes"
    ],
    "presentacion": "Discos deshidratados 50 g (100 discos) / bebida 1000 mL / polvo 700 g, sabor vainilla",
    "ingredientesClave": null
  },
  {
    "id": "lp-29",
    "nombre": "Nad+ Resveratrol",
    "claims": [
      "Aumenta la energía celular",
      "Ayuda a combatir el envejecimiento celular",
      "Favorece la salud cardiovascular",
      "Rico en antioxidantes naturales"
    ],
    "presentacion": "Gelatinas masticables, 100 unidades (50 porciones), 500 mg de resveratrol por porción, sabor uva",
    "ingredientesClave": null
  },
  {
    "id": "lp-30",
    "nombre": "Vita-franc",
    "claims": [
      "Ayuda a la formación de glóbulos rojos",
      "Contribuye a reducir el agotamiento físico y mental",
      "Fortalece el sistema inmunológico",
      "Fuente natural de hierro y ácido fólico"
    ],
    "presentacion": "500 mL o 1000 mL",
    "ingredientesClave": [
      "Hierro",
      "Fósforo",
      "Ácido fólico",
      "Vitamina C"
    ]
  },
  {
    "id": "lp-31",
    "nombre": "Ashwagandha Complex (con orégano y citrato de magnesio)",
    "claims": [
      "Reduce el estrés y regula el cortisol",
      "Mejora el ánimo y el equilibrio emocional",
      "Alivia la tos y congestión",
      "Refuerza las defensas naturalmente"
    ],
    "presentacion": "60 cápsulas, 500 mg c/u",
    "ingredientesClave": null
  },
  {
    "id": "lp-32",
    "nombre": "Embrionat",
    "claims": [
      "Nutre y revitaliza las células del cuerpo",
      "Aporta aminoácidos, vitaminas y minerales esenciales",
      "Favorece la regeneración de tejidos",
      "Ayuda a combatir el envejecimiento prematuro"
    ],
    "presentacion": "20 frascos x 20 mL (400 mL), concentrado a base de malta con extracto de yemas naturales",
    "ingredientesClave": null
  },
  {
    "id": "lp-33",
    "nombre": "Sundark Protector Solar (Arawak)",
    "claims": [
      "Hidrata y nutre la piel a diario",
      "Protección solar SPF 60 con antioxidantes",
      "Con vitamina A, C y E para piel radiante",
      "Contiene colágeno y elastina"
    ],
    "presentacion": "Gel facial/corporal 120 g, o caja x12 sachets de 10 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-34",
    "nombre": "Omega 3",
    "claims": [
      "Regula triglicéridos, presión arterial y ritmo cardiaco",
      "Estimula memoria, concentración y salud visual",
      "Protege el desarrollo fetal y ayuda a prevenir parto prematuro"
    ],
    "presentacion": "100 softgels",
    "ingredientesClave": [
      "Aceite de pescado"
    ]
  },
  {
    "id": "lp-35",
    "nombre": "Plata Coloidal",
    "claims": [
      "Antibiótico natural con larga tradición",
      "Propiedades antifúngicas y antivirales",
      "Efectiva contra infecciones y virus",
      "Antiséptica y antiinflamatoria"
    ],
    "presentacion": "120 mL, medicamento homeopático oficial",
    "ingredientesClave": null
  },
  {
    "id": "lp-36",
    "nombre": "Luffa Oper 6CH Spray Nasal",
    "claims": [
      "Alivio natural para congestión nasal",
      "Puede ayudar a aliviar molestias de sinusitis y alergias",
      "Fortalece el sistema inmunológico",
      "Ideal para pólipos y mucosa respiratoria"
    ],
    "presentacion": "Spray nasal 20 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-37",
    "nombre": "Heplop",
    "claims": [
      "Ayuda a eliminar grasas de forma natural",
      "Favorece la función biliar y hepática",
      "Contiene alcachofa para mejorar la digestión",
      "Contribuye a bajar el colesterol"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-38",
    "nombre": "Gel de Cannabis",
    "claims": [
      "Efecto calor que brinda confort inmediato",
      "Reduce inflamaciones y edemas",
      "Mejora la microcirculación en la zona aplicada",
      "Efectivo en artrosis, fibromialgia y lumbalgia"
    ],
    "presentacion": "140 g (crema o roll-on)",
    "ingredientesClave": null
  },
  {
    "id": "lp-39",
    "nombre": "Nutriflex",
    "claims": [
      "Alivia dolores articulares y musculares",
      "Apoya en casos de artritis y artrosis",
      "Reduce inflamaciones articulares",
      "Contiene electrolitos y aminoácidos esenciales"
    ],
    "presentacion": "500 mL, aprox. 25 porciones",
    "ingredientesClave": [
      "Glucosamina",
      "MSM",
      "Jengibre",
      "Cúrcuma",
      "Ajo",
      "Colágeno hidrolizado"
    ]
  },
  {
    "id": "lp-40",
    "nombre": "Alcachofit",
    "claims": [
      "Estimula la producción de bilis (acción colerética)",
      "Mejora el funcionamiento del hígado",
      "Controla el apetito y favorece la digestión",
      "Apoya la pérdida de peso"
    ],
    "presentacion": "500 mL, aprox. 25 dosis",
    "ingredientesClave": null
  },
  {
    "id": "lp-41",
    "nombre": "Gast-Calen",
    "claims": [
      "Alivia la gastritis crónica",
      "Ayuda a aliviar molestias de la úlcera gástrica",
      "Reduce las agrieras (acidez estomacal)",
      "Protege la mucosa gástrica"
    ],
    "presentacion": "500 mL, aprox. 25 dosis",
    "ingredientesClave": null
  },
  {
    "id": "lp-42",
    "nombre": "15 Ralces",
    "claims": [
      "Favorece el sistema digestivo",
      "Drenador hepático",
      "Reduce los triglicéridos y el colesterol",
      "Fortalece el sistema inmunológico"
    ],
    "presentacion": "1000 mL, sabor frutos rojos",
    "ingredientesClave": null
  },
  {
    "id": "lp-43",
    "nombre": "Colantin",
    "claims": [
      "Antioxidante natural",
      "Fortalece articulaciones, uñas y cabello",
      "Mejora la apariencia de la piel",
      "Ayuda a fortalecer los huesos"
    ],
    "presentacion": "1000 mL, aprox. 33 porciones",
    "ingredientesClave": [
      "Colágeno hidrolizado",
      "Biotina",
      "Vitamina E"
    ]
  },
  {
    "id": "lp-44",
    "nombre": "Colmin",
    "claims": [
      "Disminuye los síntomas de artritis",
      "Ayuda a prevenir la formación de cálculos renales",
      "Evita el insomnio y mejora la energía",
      "Equilibra el pH de la sangre"
    ],
    "presentacion": "Polvo 700 g",
    "ingredientesClave": [
      "Colágeno hidrolizado",
      "Cloruro de magnesio (1566 mg)"
    ]
  },
  {
    "id": "lp-45",
    "nombre": "Certyl",
    "claims": [
      "Alivia migrañas y presión en la cabeza",
      "Mejora la circulación y salud cardiovascular",
      "Relaja y regenera los músculos",
      "Favorece la absorción de calcio"
    ],
    "presentacion": "Polvo a base de coco, 700 g, aprox. 23 porciones",
    "ingredientesClave": [
      "Citrato de magnesio (2470 mg por porción)"
    ]
  },
  {
    "id": "lp-46",
    "nombre": "Citrapot",
    "claims": [
      "Favorece la función renal",
      "Mejora el rendimiento y recuperación muscular",
      "Fortalece los huesos y ayuda a prevenir la osteoporosis",
      "Alivia la acidez estomacal"
    ],
    "presentacion": "Polvo a base de coco, 700 g, sabor vainilla",
    "ingredientesClave": [
      "Citrato de potasio (1400 mg por porción)"
    ]
  },
  {
    "id": "lp-47",
    "nombre": "Gaflox",
    "claims": [
      "Favorece la cicatrización de tejidos internos y externos",
      "Actúa como antiinflamatorio natural",
      "Posee efecto antioxidante que protege las células",
      "Útil para casos de gastritis, úlceras, esofagitis"
    ],
    "presentacion": "400 mL, sabor coco",
    "ingredientesClave": [
      "Caléndula",
      "Sábila",
      "Malva",
      "Manzanilla",
      "Menta",
      "Bentonita",
      "Vitamina E"
    ]
  },
  {
    "id": "lp-48",
    "nombre": "R-Hino Fruit Black",
    "claims": [
      "Mejora la vida sexual del hombre",
      "Evita la eyaculación precoz",
      "Aumenta la duración de la erección",
      "Ayuda a mejorar tu vida sexual"
    ],
    "presentacion": "10 tabletas, suplemento a base de plantas",
    "ingredientesClave": null
  },
  {
    "id": "lp-49",
    "nombre": "Nutrabrand",
    "claims": [
      "Favorece la producción de glóbulos rojos",
      "Apoya el cerebro y sistema nervioso",
      "Reduce el colesterol y cuida el corazón",
      "Mejora la memoria y el estado de ánimo"
    ],
    "presentacion": "450 mL, bebida a base de malta",
    "ingredientesClave": [
      "Uva",
      "Fresa",
      "Açaí",
      "Arándano",
      "Apio",
      "Ácido fólico",
      "Vitamina B12",
      "Vitamina C",
      "Colina"
    ]
  },
  {
    "id": "lp-50",
    "nombre": "Clorofil Med",
    "claims": [
      "Refuerza el sistema inmunológico",
      "Desintoxica y oxigena la sangre",
      "Favorece la digestión y limpia los intestinos",
      "Puede ayudar a fortalecer las defensas del organismo, incluso en personas con cáncer"
    ],
    "presentacion": "Bebida a base de malta, sabor espinaca y menta",
    "ingredientesClave": null
  },
  {
    "id": "lp-51",
    "nombre": "Tus-Solvin",
    "claims": [
      "Alivia la tos y expulsa flemas naturalmente",
      "Refuerza el sistema inmune con vitamina C, hierro y zinc",
      "Actúa como antibiótico natural contra infecciones",
      "Apoya en casos de gripe, asma y alergias"
    ],
    "presentacion": "120 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-52",
    "nombre": "Citrato de Potasio",
    "claims": [
      "Regula el pH urinario y reduce la acidez",
      "Ayuda a prevenir y ayuda a eliminar cálculos renales",
      "Mejora la función del corazón, riñones y músculos",
      "Favorece el rendimiento cerebral y nervioso"
    ],
    "presentacion": "60 comprimidos de 45 g, citrato de potasio 99%",
    "ingredientesClave": null
  },
  {
    "id": "lp-53",
    "nombre": "Citrato de Magnesio (disco/bebida)",
    "claims": [
      "Regula la presión arterial y el ritmo cardíaco",
      "Fortalece huesos y dientes",
      "Alivia migrañas y dolores de cabeza",
      "Promueve el sueño y la relajación"
    ],
    "presentacion": "Alimento en disco para preparar bebida, 60 comprimidos de 45 g, sabor natural, citrato de magnesio 700 mg",
    "ingredientesClave": null
  },
  {
    "id": "lp-54",
    "nombre": "Alover",
    "claims": [
      "Protege el estómago e intestinos",
      "Ayuda a prevenir el estreñimiento y mejora la digestión",
      "Alivia úlceras, gastritis y trastornos digestivos",
      "Desintoxica y calma dolores abdominales"
    ],
    "presentacion": "Bebida a base de aloe vera, hierbabuena y vitaminas A, B, C",
    "ingredientesClave": null
  },
  {
    "id": "lp-55",
    "nombre": "Gl-Samin",
    "claims": [
      "Ayuda en artrosis y osteoporosis",
      "Actúa como analgésico y antiinflamatorio",
      "Fortalece huesos y articulaciones",
      "Ayuda en la recuperación muscular"
    ],
    "presentacion": "1000 mL, 10 porciones de 100 mL",
    "ingredientesClave": [
      "Colágeno hidrolizado",
      "Gluconato de cloruro de magnesio",
      "Glucosamina",
      "Condroitina"
    ]
  },
  {
    "id": "lp-56",
    "nombre": "Flugax",
    "claims": [
      "Disminuye la inflamación digestiva",
      "Alivia náuseas y malestar estomacal",
      "Favorece la cicatrización del tracto gastrointestinal"
    ],
    "presentacion": "15 sachets x 15 mL, sabor menta",
    "ingredientesClave": [
      "Jengibre",
      "Aloe vera",
      "Manzanilla"
    ]
  },
  {
    "id": "lp-57",
    "nombre": "Bilax",
    "claims": [
      "Ayuda a eliminar grasas del cuerpo",
      "Mejora la función del hígado y la vesícula biliar",
      "Reduce el colesterol en la sangre",
      "Ayuda a prevenir enfermedades cardiovasculares"
    ],
    "presentacion": "400 mL",
    "ingredientesClave": [
      "Bromoalcachofa compuesto",
      "Berenjena",
      "Alcachofa"
    ]
  },
  {
    "id": "lp-58",
    "nombre": "Collagenmix",
    "claims": [
      "Hidrata y mejora la elasticidad de la piel",
      "Reduce arrugas y líneas de expresión",
      "Fortalece articulaciones, uñas y cabello",
      "Aporta aminoácidos esenciales para la piel"
    ],
    "presentacion": "500 mL, sabor fresa",
    "ingredientesClave": [
      "Colágeno marino hidrolizado",
      "Biotina",
      "Coenzima Q10",
      "Vitaminas C y E"
    ]
  },
  {
    "id": "lp-59",
    "nombre": "Cicalmag",
    "claims": [
      "Fortalece huesos y ayuda a prevenir la osteoporosis",
      "Mejora la movilidad y flexibilidad articular",
      "Apoya la salud del corazón y ritmo cardiaco",
      "Favorece la coagulación y contracción muscular"
    ],
    "presentacion": "700 g, sabor vainilla",
    "ingredientesClave": [
      "Calcio",
      "Omega 3",
      "Vitamina D3",
      "Magnesio"
    ]
  },
  {
    "id": "lp-60",
    "nombre": "Aloe Vera (MDS)",
    "claims": [
      "Poderoso antioxidante y antibacteriano natural",
      "Alivia úlceras y mejora la digestión",
      "Desintoxica y regenera las células",
      "Antiinflamatorio, analgésico y viral"
    ],
    "presentacion": "360 mL, bebida de aloe con aloe",
    "ingredientesClave": null
  },
  {
    "id": "lp-61",
    "nombre": "Colagemin",
    "claims": [
      "Mejora el aspecto y firmeza de la piel",
      "Fortalece articulaciones, uñas y cabello",
      "Reduce el dolor e inflamación articular",
      "Aporta colágeno de alta concentración"
    ],
    "presentacion": "700 g, 23 porciones, sabor fresa",
    "ingredientesClave": [
      "Colágeno hidrolizado",
      "Biotina",
      "Ácido fólico",
      "Vitamina E"
    ]
  },
  {
    "id": "lp-62",
    "nombre": "Kmastron",
    "claims": [
      "Aumenta la energía y reduce el agotamiento",
      "Ayuda a combatir el estrés y mejora el ánimo",
      "Aporta nutrientes naturales como borojó y maca",
      "Activa el cuerpo con L-arginina, vitaminas y minerales"
    ],
    "presentacion": "500 g, sabor vainilla",
    "ingredientesClave": [
      "Maltodextrina",
      "Borojó",
      "Maca",
      "L-arginina"
    ]
  },
  {
    "id": "lp-63",
    "nombre": "Calcimega Shurk",
    "claims": [
      "Proteína de suero que forma aminoácidos",
      "Disminuye la inflamación celular",
      "Ayuda a prevenir el deterioro articular",
      "Favorece la producción de glutatión"
    ],
    "presentacion": "700 g, sabor vainilla",
    "ingredientesClave": [
      "Proteína de suero",
      "Colágeno",
      "Aminoácidos"
    ]
  },
  {
    "id": "lp-64",
    "nombre": "Barremax (laxante adultos)",
    "claims": [
      "Ayuda a eliminar toxinas del cuerpo",
      "Contribuye a mantener un hígado sano y minimizar la fibrosis",
      "Aporta fibra y betacaroteno natural",
      "Contiene linaza, pitaya y papaya"
    ],
    "presentacion": "Polvo 20 g",
    "ingredientesClave": [
      "Fibra inulina",
      "Linaza",
      "Pitaya",
      "Papaya",
      "Hojuela de avena",
      "Salvado de trigo"
    ]
  },
  {
    "id": "lp-65",
    "nombre": "Zar-P (Zarzaparrilla)",
    "claims": [
      "Diurética y depurativa natural",
      "Ayuda a bajar de peso y la presión arterial",
      "Ayuda a combatir bacterias y hongos de la piel",
      "Ayuda a aliviar molestias de la piel como eccema y psoriasis"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-66",
    "nombre": "Kerbo Fibra",
    "claims": [
      "Mejora la digestión y regula el tránsito intestinal",
      "Favorece la regeneración celular y fortalece defensas",
      "Protege la mucosa intestinal naturalmente",
      "Ayuda a controlar los niveles de azúcar"
    ],
    "presentacion": "600 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-67",
    "nombre": "Vinagre con Sidra de Manzana",
    "claims": [
      "Mejora la digestión naturalmente",
      "Ayuda en el control de peso",
      "Reduce el colesterol y triglicéridos",
      "Favorece el metabolismo de las grasas"
    ],
    "presentacion": "Botella líquida, 100% natural, sin conservantes ni aditivos",
    "ingredientesClave": null
  },
  {
    "id": "lp-68",
    "nombre": "Carduus Mariannus 3D",
    "claims": [
      "Protege y fortalece la función hepática",
      "Apoya el control de colesterol, triglicéridos y glucosa",
      "Desintoxica el hígado y ayuda a combatir la cirrosis",
      "Favorece el metabolismo de lípidos y carbohidratos"
    ],
    "presentacion": "240 mL",
    "ingredientesClave": [
      "Cardo mariano (Carduus marianus)"
    ]
  },
  {
    "id": "lp-69",
    "nombre": "Artor (jarabe)",
    "claims": [
      "Ayuda a eliminar toxinas y líquidos retenidos",
      "Apoya la salud renal y depurativa",
      "Reduce el ácido úrico y ayuda a prevenir la artritis",
      "Favorece el bienestar articular"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": [
      "Flor de Jamaica",
      "Manzanilla",
      "Cola de caballo"
    ]
  },
  {
    "id": "lp-70",
    "nombre": "Cirjan (jarabe)",
    "claims": [
      "Diurético natural que elimina toxinas",
      "Fortalece el sistema inmunológico",
      "Apoya al hígado y el páncreas",
      "Rico en antioxidantes naturales"
    ],
    "presentacion": "500 mL, concentrado para bebida de té verde",
    "ingredientesClave": [
      "Cebolla",
      "Ajo",
      "Limón"
    ]
  },
  {
    "id": "lp-71",
    "nombre": "Hepzul (jarabe)",
    "claims": [
      "Diurético natural que elimina toxinas",
      "Fortalece el sistema inmunológico",
      "Apoya la función del hígado y el páncreas",
      "Rico en antioxidantes naturales"
    ],
    "presentacion": "500 mL, concentrado para bebida de té verde con apio",
    "ingredientesClave": null
  },
  {
    "id": "lp-72",
    "nombre": "Prexflex (jarabe)",
    "claims": [
      "Poderoso antioxidante natural",
      "Reduce el estrés y el nerviosismo",
      "Favorece la relajación mental",
      "Contiene L-teanina para equilibrio emocional"
    ],
    "presentacion": "500 mL, concentrado de té verde con toronja, manzana verde y limón",
    "ingredientesClave": null
  },
  {
    "id": "lp-73",
    "nombre": "Verafem (jarabe)",
    "claims": [
      "Apoya la salud circulatoria natural",
      "Regula el ciclo menstrual",
      "Tónico efectivo durante la menstruación",
      "Útil en colon irritable y diarrea"
    ],
    "presentacion": "500 mL, bebida de té verde con canela",
    "ingredientesClave": null
  },
  {
    "id": "lp-74",
    "nombre": "Cleansystem",
    "claims": [
      "Protege las células del daño oxidativo",
      "Mejora la función hepática",
      "Apoya la salud digestiva y biliar",
      "Acción antibacteriana efectiva"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-75",
    "nombre": "Vitamina C y Zinc",
    "claims": [
      "Refuerza el sistema inmunológico",
      "Poder antioxidante contra virus, radicales libres y hongos",
      "Favorece la concentración y la relación",
      "Apoya el sistema nervioso y endocrino"
    ],
    "presentacion": "700 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-76",
    "nombre": "VitaPatt",
    "claims": [
      "Nutre y regenera las células",
      "Rica en vitaminas A, C, D y E",
      "Aporta proteínas y minerales esenciales",
      "Retrasa el envejecimiento prematuro"
    ],
    "presentacion": "700 g, sabor vainilla",
    "ingredientesClave": [
      "Cartílago en polvo",
      "Proteína aislada de soya",
      "Avena"
    ]
  },
  {
    "id": "lp-77",
    "nombre": "Megatrin",
    "claims": [
      "Aporta proteínas, hierro y minerales esenciales",
      "Ayuda en casos de bajo peso y desnutrición",
      "Contribuye a reducir el colesterol malo",
      "Apoya la salud del sistema nervioso y ayuda a prevenir infecciones"
    ],
    "presentacion": "500 g o 1000 g (10 sobres x 100 g), sabor vainilla",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Hierro",
      "Zinc",
      "Stevia"
    ]
  },
  {
    "id": "lp-78",
    "nombre": "Higkol",
    "claims": [
      "Regula los niveles de glucosa en sangre",
      "Estimula la digestión y el flujo biliar",
      "Fortalece el sistema digestivo e inmunológico",
      "Disminuye picos de insulina y almacenamiento de grasa"
    ],
    "presentacion": "240 mL, concentrado de té verde con brócoli, mango y alcachofa",
    "ingredientesClave": null
  },
  {
    "id": "lp-79",
    "nombre": "Hepflex",
    "claims": [
      "Elimina ácido úrico y toxinas del cuerpo",
      "Mejora la digestión y estimula jugos gástricos",
      "Regula los niveles de azúcar en sangre",
      "Acción antiinflamatoria, diurética y antibacteriana"
    ],
    "presentacion": "240 mL, concentrado de té verde con apio, maracuyá y yuya C",
    "ingredientesClave": null
  },
  {
    "id": "lp-80",
    "nombre": "Grabiola",
    "claims": [
      "Estimula la digestión",
      "Refuerza el sistema inmunológico",
      "Aporta antioxidantes que pueden ayudar a proteger las células, incluso como apoyo en la prevención de varios tipos de cáncer",
      "Tiene propiedades antimicrobianas, antiparasitarias y antifúngicas"
    ],
    "presentacion": "500 g o 1000 g, sabor leche",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Guanábana deshidratada",
      "Proteína de calostro"
    ]
  },
  {
    "id": "lp-81",
    "nombre": "Dolmas",
    "claims": [
      "Favorece la salud de piel, cabello y uñas",
      "Aporta colágeno para articulaciones saludables",
      "Apoya músculos y tejidos conectivos",
      "Fortalece huesos y cartílagos"
    ],
    "presentacion": "24 sachets x 15 g",
    "ingredientesClave": [
      "Colágeno hidrolizado premium",
      "Vitaminas y minerales"
    ]
  },
  {
    "id": "lp-82",
    "nombre": "Scorpin Blue (Grande y Pequeña)",
    "claims": [
      "Aumenta la energía y resistencia diaria",
      "Refuerza el sistema inmune",
      "Rico en vitaminas B1, B2, B6, C, A y E",
      "Contiene maca y extracto de malta revitalizantes"
    ],
    "presentacion": "20 viales x 20 mL (Grande) o x 10 mL (Pequeña), solución oral",
    "ingredientesClave": null
  },
  {
    "id": "lp-83",
    "nombre": "Compuestico",
    "claims": [
      "Descongestiona bronquios y pulmones",
      "Alivia el dolor de garganta",
      "Favorece la expectoración natural",
      "Refuerza el sistema inmune"
    ],
    "presentacion": "120 mL, sabor aromático a miel",
    "ingredientesClave": null
  },
  {
    "id": "lp-84",
    "nombre": "Cangret",
    "claims": [
      "Mejora la salud vascular y circulación",
      "Ayuda a eliminar placas de grasa (ateromas)",
      "Favorece la regeneración celular",
      "Relaja músculos y protege el corazón"
    ],
    "presentacion": "20 viales x 20 mL",
    "ingredientesClave": [
      "Vitamina B1, B2, B6, B9, B12",
      "Omega 3"
    ]
  },
  {
    "id": "lp-85",
    "nombre": "Rogoff Garlic (Ajo)",
    "claims": [
      "Refuerza el sistema inmunológico",
      "Reduce colesterol y presión arterial",
      "Rico en vitamina C, B6 y manganeso",
      "Apoya la salud del hígado y páncreas"
    ],
    "presentacion": "180 tabletas recubiertas",
    "ingredientesClave": [
      "Ajo"
    ]
  },
  {
    "id": "lp-86",
    "nombre": "Improceluvit",
    "claims": [
      "Nutre y regenera los tejidos",
      "Rico en aminoácidos, vitaminas y minerales",
      "Aporta proteínas, calcio y magnesio",
      "Equilibra y fortalece el organismo"
    ],
    "presentacion": "20 frascos x 1 g c/u, para reconstituir a solución oral",
    "ingredientesClave": null
  },
  {
    "id": "lp-87",
    "nombre": "Flexdol",
    "claims": [
      "Fortalece huesos y cartílagos",
      "Mejora la movilidad articular",
      "Reduce el dolor y la inflamación",
      "Aporta colágeno, calcio y magnesio"
    ],
    "presentacion": "24 sachets x 15 g, sabor vainilla",
    "ingredientesClave": [
      "L-glutamina",
      "Colágeno",
      "Boswellia serrata",
      "Alcachofa",
      "Cúrcuma"
    ]
  },
  {
    "id": "lp-88",
    "nombre": "RD Green + Lipox",
    "claims": [
      "Favorece la pérdida de grasa naturalmente",
      "Acelera el metabolismo y quema calorías",
      "Elimina toxinas y exceso de líquidos",
      "Apoya una digestión saludable y regular"
    ],
    "presentacion": "Cápsulas 90 x 50 g + gel liporreductor para masajes 20 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-89",
    "nombre": "Moring Vit",
    "claims": [
      "Apoya la producción natural de insulina",
      "Alivia dolores y reduce inflamación ósea",
      "Mejora síntomas de la artritis",
      "Favorece un perfil lipídico saludable"
    ],
    "presentacion": "60 cápsulas",
    "ingredientesClave": [
      "Moringa"
    ]
  },
  {
    "id": "lp-90",
    "nombre": "Propolcruz Jalea",
    "claims": [
      "Refuerza el sistema respiratorio",
      "Ayuda a combatir bacterias y virus naturalmente",
      "Alivia infecciones de garganta",
      "Apoya la salud digestiva y dérmica"
    ],
    "presentacion": "300 g, sabor menta",
    "ingredientesClave": [
      "Propóleo"
    ]
  },
  {
    "id": "lp-91",
    "nombre": "Prost-San",
    "claims": [
      "Apoya la salud prostática masculina",
      "Alivia la necesidad frecuente de orinar",
      "Mejora el flujo y vaciado urinario",
      "Disminuye el riesgo de infecciones urinarias"
    ],
    "presentacion": "60 cápsulas, 500 mg",
    "ingredientesClave": [
      "Saw palmetto",
      "Cucurbito pepo"
    ]
  },
  {
    "id": "lp-92",
    "nombre": "Gastrover",
    "claims": [
      "Alivia el reflujo gástrico y esofágico",
      "Ayuda a combatir úlceras y acidez estomacal",
      "Reduce la inflamación del colon",
      "Elimina bacterias intestinales dañinas"
    ],
    "presentacion": "360 mL, sabor menta",
    "ingredientesClave": [
      "Caléndula officinalis"
    ]
  },
  {
    "id": "lp-93",
    "nombre": "Valeriana + Toronjil + Pasiflora",
    "claims": [
      "Favorece el sueño profundo y reparador",
      "Reduce el nerviosismo y la ansiedad",
      "Alivia la irritabilidad del síndrome premenstrual",
      "Relaja el colon y mejora la digestión"
    ],
    "presentacion": "60 mL, solución oral",
    "ingredientesClave": null
  },
  {
    "id": "lp-94",
    "nombre": "Cangret Multi-Cevita",
    "claims": [
      "Mejora la circulación y salud vascular",
      "Elimina placas de grasa en las arterias",
      "Protege el corazón y el endotelio vascular",
      "Relaja músculos con aporte de magnesio"
    ],
    "presentacion": "Cápsulas en blister",
    "ingredientesClave": [
      "Jarabe de soya",
      "Maca negra",
      "Vitamina B1, B12, B9",
      "Biotina",
      "Ácido fólico"
    ]
  },
  {
    "id": "lp-95",
    "nombre": "Factors Max",
    "claims": [
      "Refuerza y activa el sistema inmunológico",
      "Ayuda a prevenir gripes e infecciones bacterianas",
      "Alivia trastornos gastrointestinales",
      "Reduce inflamaciones autoinmunes"
    ],
    "presentacion": "60 cápsulas",
    "ingredientesClave": [
      "Propóleo",
      "Propolios",
      "Complejo de vitaminas y minerales"
    ]
  },
  {
    "id": "lp-96",
    "nombre": "Dollar Gold",
    "claims": [
      "Reduce la inflamación naturalmente",
      "Mejora la movilidad en casos de artritis",
      "Actúa como analgésico y antipirético",
      "Contiene harpagófito con activos naturales"
    ],
    "presentacion": "Cápsulas 480 mg",
    "ingredientesClave": [
      "Harpagophytum procumbens (harpagófito)"
    ]
  },
  {
    "id": "lp-97",
    "nombre": "Casklax",
    "claims": [
      "Efecto antiparasitario intestinal suave",
      "Mejora la digestión y alivia la pesadez",
      "Estimula el movimiento intestinal sin ser laxante",
      "Puede ayudar a aliviar molestias de colon irritable"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": [
      "Higo",
      "Fruta bomba",
      "Ciruela",
      "Rosa de Jamaica",
      "Pitahaya",
      "Papaya"
    ]
  },
  {
    "id": "lp-98",
    "nombre": "Chungwa",
    "claims": [
      "Ayuda en la desparasitación intestinal",
      "Drena y desintoxica hígado, páncreas y sangre",
      "Elimina toxinas del sistema digestivo y renal",
      "Apto para diabéticos"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": [
      "Proteína vegetal",
      "Higo",
      "Tapaculo",
      "Aceite de oliva"
    ]
  },
  {
    "id": "lp-99",
    "nombre": "Cinarq",
    "claims": [
      "Depura la sangre y protege el hígado",
      "Alivia dolores menstruales y regula el flujo",
      "Apoya la salud del corazón y cerebro",
      "Mejora la función uterina y cardiovascular"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Algas marinas",
      "Curcumina",
      "CoQ10",
      "Ajo",
      "Aminoácidos de soya"
    ]
  },
  {
    "id": "lp-100",
    "nombre": "Femever",
    "claims": [
      "Alivia dolores y síntomas premenstruales",
      "Puede ayudar a acompañar el ciclo menstrual",
      "Regula el balance hormonal femenino",
      "Disminuye ansiedad, fatiga y sudor nocturno"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Hierro",
      "Centella asiática",
      "Calcio",
      "Espirulina"
    ]
  },
  {
    "id": "lp-101",
    "nombre": "Eukmeil",
    "claims": [
      "Alivia la tos y el resfriado común",
      "Descongestiona las vías respiratorias",
      "Relaja y suaviza el dolor de garganta",
      "Tiene efecto broncodilatador natural"
    ],
    "presentacion": "360 mL, bebida con jengibre, marañón y miel",
    "ingredientesClave": null
  },
  {
    "id": "lp-102",
    "nombre": "Lim-Est",
    "claims": [
      "Protege y regenera las funciones del hígado",
      "Alivia flatulencias y sabor amargo en la boca",
      "Ayuda a prevenir cirrosis y daño hepático por medicamentos",
      "Ayuda a controlar colesterol y triglicéridos"
    ],
    "presentacion": "360 mL, bebida con naranja, mandarina y limón",
    "ingredientesClave": null
  },
  {
    "id": "lp-103",
    "nombre": "Gland Prot",
    "claims": [
      "Apoya la salud prostática y urinaria",
      "Alivia síntomas de prostatitis e hiperplasia",
      "Actúa como diurético natural",
      "Reduce inflamación y mejora la digestión"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Colágeno hidrolizado",
      "Zarzaparrilla"
    ]
  },
  {
    "id": "lp-104",
    "nombre": "Glidit",
    "claims": [
      "Estimula la producción natural de insulina",
      "Disminuye los niveles de azúcar en sangre",
      "Apoya la salud digestiva e inmunológica",
      "Rico en antioxidantes como quercetina y kaempferol"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": [
      "Berberina",
      "Inositol",
      "Coenzima Q10",
      "Quercetina",
      "Resveratrol",
      "Vitamina C",
      "Zinc"
    ]
  },
  {
    "id": "lp-105",
    "nombre": "Gualasan",
    "claims": [
      "Depura la sangre y elimina toxinas",
      "Puede ayudar a mejorar el aspecto de la piel con tendencia al acné",
      "Aporta fibra, potasio y minerales esenciales",
      "Antibiótico natural contra infecciones bacterianas"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Coco",
      "Semilla de calabaza",
      "Mango",
      "Salvado de avena"
    ]
  },
  {
    "id": "lp-106",
    "nombre": "Llenodig",
    "claims": [
      "Depura la sangre y elimina toxinas",
      "Puede ayudar a mejorar el aspecto de la piel con tendencia al acné",
      "Aporta fibra, potasio y minerales esenciales",
      "Antibiótico natural contra infecciones bacterianas"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Ciruela",
      "Tamarindo",
      "Mango",
      "Pitahaya",
      "Papaya"
    ]
  },
  {
    "id": "lp-107",
    "nombre": "Ulcik",
    "claims": [
      "Ayuda a combatir el estreñimiento con fibra natural",
      "Alivia y cicatriza úlceras gástricas",
      "Efecto antiinflamatorio digestivo",
      "Fortalece el sistema inmune y ayuda a prevenir resfriados"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Calcio",
      "Fructooligosacáridos",
      "Stevia"
    ]
  },
  {
    "id": "lp-108",
    "nombre": "Viacir",
    "claims": [
      "Activa y mejora la circulación sanguínea",
      "Elimina placas de grasa en arterias y venas",
      "Reduce el colesterol de forma natural",
      "Ayuda a prevenir y alivia las várices"
    ],
    "presentacion": "500 mL, aprox. 16 porciones, bebida a base de agua con ajo, perejil y jengibre",
    "ingredientesClave": null
  },
  {
    "id": "lp-109",
    "nombre": "Vinagre de Manzana Roja",
    "claims": [
      "Mejora la digestión naturalmente",
      "Ayuda a asimilar mejor los alimentos",
      "Favorece el metabolismo de las grasas",
      "Disminuye colesterol y triglicéridos"
    ],
    "presentacion": "350 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-110",
    "nombre": "Vinagre de Manzana Roja y Alcachofa",
    "claims": [
      "Mejora la digestión y asimilación de alimentos",
      "Ayuda a controlar el colesterol en sangre",
      "Estimula la producción natural de bilis",
      "Complemento dietético ideal y natural"
    ],
    "presentacion": "350 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-111",
    "nombre": "Vinagre de Manzana Verde",
    "claims": [
      "Mejora la digestión y asimilación de alimentos",
      "Apoya el metabolismo de las grasas",
      "Reduce colesterol y triglicéridos",
      "Actúa como desinfectante natural"
    ],
    "presentacion": "350 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-112",
    "nombre": "Vinagre de Cidra",
    "claims": [
      "Mejora la digestión y absorción de alimentos",
      "Favorece el metabolismo de las grasas",
      "Ayuda a reducir colesterol y triglicéridos",
      "Efecto diurético natural que evita la retención de líquidos"
    ],
    "presentacion": "350 mL",
    "ingredientesClave": null
  },
  {
    "id": "lp-113",
    "nombre": "Colopez",
    "claims": [
      "Alivia inflamación del colon naturalmente",
      "Apoya la digestión y tránsito intestinal",
      "Favorece el manejo de síntomas por estrés o mala alimentación",
      "Fórmula natural con efecto calmante y astringente"
    ],
    "presentacion": "500 mL, aprox. 16 porciones",
    "ingredientesClave": [
      "Manzana",
      "Papaya",
      "Ciruela",
      "Pitahaya",
      "Piña",
      "Inulina"
    ]
  },
  {
    "id": "lp-114",
    "nombre": "Bronki'Flu",
    "claims": [
      "Refuerza el sistema inmune naturalmente",
      "Alivia la congestión bronquial y pulmonar",
      "Actúa como antiviral y antiinflamatorio",
      "Ayuda a regular la tensión arterial"
    ],
    "presentacion": "250 mL",
    "ingredientesClave": [
      "Miel de abeja",
      "Jengibre",
      "Zarzaparrilla",
      "Estragón",
      "Pino"
    ]
  },
  {
    "id": "lp-115",
    "nombre": "Sangritor",
    "claims": [
      "Energiza cuerpo y mente de forma natural",
      "Ayuda a combatir el cansancio y la somnolencia",
      "Mejora la circulación y oxigenación cerebral",
      "Puede ayudar como apoyo complementario en personas con Alzheimer o Parkinson"
    ],
    "presentacion": "500 mL, aprox. 14 porciones",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Guanábana",
      "Jengibre",
      "Ganoderma",
      "Maca"
    ]
  },
  {
    "id": "lp-116",
    "nombre": "Cholaverd",
    "claims": [
      "Apoya la digestión y ayuda a combatir el estreñimiento",
      "Refuerza el sistema inmune y cardiovascular",
      "Regula el colesterol y la presión arterial",
      "Alivia resfriados, tos y dolores de cabeza"
    ],
    "presentacion": "500 mL, aprox. 14 porciones",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Jengibre",
      "Guanábana",
      "Linaza",
      "Achiote",
      "Uva Isabela",
      "Aloe"
    ]
  },
  {
    "id": "lp-117",
    "nombre": "Veralverd",
    "claims": [
      "Alivia el colon irritable y la dispepsia",
      "Favorece la cicatrización de úlceras digestivas",
      "Revitaliza la mucosa gástrica e intestinal",
      "Mejora el tránsito intestinal y ayuda a combatir el estreñimiento"
    ],
    "presentacion": "500 mL, alimento para dieta líquida",
    "ingredientesClave": [
      "Aloe vera",
      "Prebióticos",
      "Probióticos"
    ]
  },
  {
    "id": "lp-118",
    "nombre": "Rabayod",
    "claims": [
      "Estimula la desintoxicación del cuerpo",
      "Favorece la eliminación de líquidos retenidos",
      "Apoya la pérdida de peso de forma natural",
      "Mejora la memoria y la concentración"
    ],
    "presentacion": "360 mL, 12 porciones",
    "ingredientesClave": [
      "Rábano",
      "Sal yodada"
    ]
  },
  {
    "id": "lp-119",
    "nombre": "Art",
    "claims": [
      "Ayuda a aliviar el dolor y la rigidez articular",
      "Rico en antioxidantes naturales",
      "Protege y fortalece cartílagos y articulaciones",
      "Disminuye el deterioro celular por la edad"
    ],
    "presentacion": "500 mL, aprox. 15 porciones",
    "ingredientesClave": [
      "Proteína aislada de soya",
      "Calcio",
      "Condroitina",
      "Glucosamina",
      "Vitamina C",
      "Manganeso"
    ]
  },
  {
    "id": "lp-120",
    "nombre": "Vinicéremx",
    "claims": [
      "Aumenta la energía y el rendimiento diario",
      "Activa la mente y mejora el enfoque",
      "Reduce la fatiga y el cansancio",
      "Multivitamínico natural en formato jarabe"
    ],
    "presentacion": "500 mL",
    "ingredientesClave": [
      "Guaraná",
      "Borojó",
      "Chontaduro",
      "Maca",
      "Malta"
    ]
  },
  {
    "id": "lp-121",
    "nombre": "Linaza con Ahuyama",
    "claims": [
      "Alto en fibra, Omega 3 y Omega 9",
      "Apoya el control del colesterol",
      "Ideal para diabéticos, endulzado con stevia",
      "Favorece la digestión y eliminación natural"
    ],
    "presentacion": "360 mL, alimento en polvo",
    "ingredientesClave": [
      "Linaza",
      "Papaya",
      "Ahuyama",
      "Pitahaya",
      "Ciruela",
      "Piña",
      "Maca"
    ]
  },
  {
    "id": "lp-122",
    "nombre": "Colágeno Marino Hidrolizado",
    "claims": [
      "Favorece una piel sana y rejuvenecida",
      "Fortalece el cabello y las uñas",
      "Alto contenido en colágeno hidrolizado",
      "Con vitaminas C, E y D para mayor absorción"
    ],
    "presentacion": "1000 g, polvo 4 en 1, aprox. 33 porciones",
    "ingredientesClave": [
      "Colágeno hidrolizado marino",
      "Vitamina C",
      "Vitamina E",
      "Vitamina D",
      "Biotina"
    ]
  },
  {
    "id": "lp-123",
    "nombre": "Viscum",
    "claims": [
      "Alivia el reflujo y la distensión abdominal",
      "Mejora la digestión naturalmente",
      "Favorece la producción de jugos gástricos",
      "Bebida sin azúcar, ideal para el sistema digestivo"
    ],
    "presentacion": "360 mL, sabor natural menta, libre de azúcar",
    "ingredientesClave": null
  },
  {
    "id": "lp-124",
    "nombre": "Zarxin",
    "claims": [
      "Elimina metales pesados y residuos tóxicos",
      "Baja el colesterol de forma natural",
      "Con efecto diurético y antioxidante",
      "Con alcachofa, berenjena, ajo y flor de Jamaica"
    ],
    "presentacion": "360 mL, 12 porciones",
    "ingredientesClave": null
  },
  {
    "id": "lp-125",
    "nombre": "Cloroverd",
    "claims": [
      "Desintoxica y regenera las células",
      "Estimula la generación de glóbulos rojos",
      "Ayuda en la cicatrización de úlceras",
      "Evita flatulencias, pesadez estomacal y halitosis"
    ],
    "presentacion": "360 mL, 12 porciones",
    "ingredientesClave": [
      "Kiwi",
      "Feijoa",
      "Espinaca",
      "Acelga",
      "Perejil"
    ]
  },
  {
    "id": "lp-126",
    "nombre": "Flor de Jaica (Concentrado)",
    "claims": [
      "Baja la presión arterial y relaja los vasos sanguíneos",
      "Antioxidante potente, rico en antocianinas",
      "Diurético natural, ayuda a eliminar líquidos retenidos",
      "Apoyo hepatoprotector leve y digestivo"
    ],
    "presentacion": "500 mL, aprox. 16 porciones, concentrado de Hibiscus sabdariffa",
    "ingredientesClave": [
      "Flor de Jamaica (Hibiscus sabdariffa)"
    ]
  },
  {
    "id": "lp-127",
    "nombre": "Prebióticos & Probióticos",
    "claims": [
      "Ayuda a mantener la flora intestinal en equilibrio",
      "Favorece una digestión óptima y reduce la hinchazón",
      "Refuerza las defensas naturales del organismo",
      "Mejora la absorción de nutrientes esenciales"
    ],
    "presentacion": "30 cápsulas, 600 mL/19.5 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-128",
    "nombre": "Omega 3 EPA + DHA",
    "claims": [
      "Contribuye al funcionamiento normal del corazón",
      "El DHA contribuye al mantenimiento de la función cerebral",
      "Ayuda al mantenimiento de la visión",
      "Contribuye al mantenimiento de las articulaciones"
    ],
    "presentacion": "30 cápsulas de gelatina con relleno líquido, 1000 mg, 32.5 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-129",
    "nombre": "Aceite de Orégano (cápsulas)",
    "claims": [
      "Contribuye a apoyar el sistema inmune",
      "Propiedades antioxidantes que protegen las células",
      "Tradicionalmente usado para apoyar la salud digestiva",
      "Fórmula 100% natural sin colorantes ni conservantes"
    ],
    "presentacion": "30 cápsulas de gelatina con relleno líquido, 600 mg, 25.5 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-130",
    "nombre": "Bisglicinato de Magnesio (perlas)",
    "claims": [
      "Contribuye al mantenimiento normal de músculos",
      "Apoya el funcionamiento normal del sistema nervioso",
      "Ayuda a disminuir el cansancio y la fatiga",
      "Contribuye al mantenimiento normal de los huesos"
    ],
    "presentacion": "60 perlas de gelatina, 750 mg por porción, 30 porciones, 84 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-131",
    "nombre": "Bisglicinato de Magnesio (cápsulas)",
    "claims": [
      "Ayuda al correcto funcionamiento de músculos y nervios, reduciendo calambres",
      "Contribuye a disminuir el estrés, la ansiedad y mejora el sueño",
      "Favorece la absorción de calcio y vitamina D para la salud ósea",
      "Participa en la regulación de la presión arterial y el ritmo cardíaco"
    ],
    "presentacion": "Cápsulas, contenido neto 58 g, aprox. 50 porciones (100 unidades)",
    "ingredientesClave": null
  },
  {
    "id": "lp-132",
    "nombre": "Maca (perlas)",
    "claims": [
      "Aporta energía y rendimiento físico",
      "Favorece la concentración y la memoria",
      "Apoya el equilibrio hormonal",
      "Fortalece el sistema inmunológico"
    ],
    "presentacion": "100 unidades, gelatina con relleno en polvo, 58 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-133",
    "nombre": "Inositol (perlas)",
    "claims": [
      "Favorece el equilibrio hormonal",
      "Apoya la función cognitiva y la memoria",
      "Contribuye al bienestar emocional",
      "Promueve vitalidad y energía diaria"
    ],
    "presentacion": "100 unidades, gelatina con relleno en polvo, 58 g",
    "ingredientesClave": null
  },
  {
    "id": "lp-134",
    "nombre": "Vinagre de Manzana 600mg (tabletas)",
    "claims": [
      "Apoya tu digestión y el metabolismo",
      "Puede favorecer la saciedad y el control de peso",
      "Contribuye a mantener niveles saludables de colesterol y triglicéridos",
      "100% natural y seguro"
    ],
    "presentacion": "100 tabletas, 600 mg",
    "ingredientesClave": null
  },
  {
    "id": "lp-135",
    "nombre": "Ajo 600mg (tabletas)",
    "claims": [
      "Apoya el sistema inmune y fortalece las defensas",
      "Cuida el corazón y ayuda a mantener el colesterol",
      "Favorece la circulación sanguínea saludable",
      "Propiedades antioxidantes naturales"
    ],
    "presentacion": "100 tabletas, 600 mg, relleno líquido",
    "ingredientesClave": null
  },
  {
    "id": "lp-136",
    "nombre": "Colágeno + Biotina (tabletas)",
    "claims": [
      "Mejora la elasticidad y firmeza de la piel",
      "Fortalece el cabello desde la raíz con biotina",
      "Favorece uñas más fuertes y ayuda a prevenir fragilidad",
      "Apoya la salud de huesos y articulaciones"
    ],
    "presentacion": "100 tabletas, 600 mg, relleno líquido",
    "ingredientesClave": null
  },
  {
    "id": "lp-137",
    "nombre": "Aswagandha (tabletas)",
    "claims": [
      "Reduce el estrés y la ansiedad",
      "Ayuda a combatir el cansancio físico y mental",
      "Fortalece el sistema inmunológico",
      "Favorece la concentración, memoria y equilibrio mental"
    ],
    "presentacion": "100 cápsulas, 600 mg",
    "ingredientesClave": null
  },
  {
    "id": "lp-138",
    "nombre": "Kit Bienestar (Vitamina E + Ginkgo Biloba + Colágeno con Biotina + Omega 3)",
    "claims": [
      "Vitamina E: antioxidante que protege las células y fortalece las defensas",
      "Ginkgo Biloba: mejora la concentración, memoria y función cerebral",
      "Colágeno + Biotina: fortalece piel, cabello y uñas",
      "Omega 3: cuida el corazón y apoya la salud cardiovascular"
    ],
    "presentacion": "Kit de 4 frascos: Vitamina E 1000 UI, Ginkgo Biloba 600 mg, Colágeno+Biotina 600 mg, Omega 3 1000 mg",
    "ingredientesClave": null
  },
  {
    "id": "lp-139",
    "nombre": "Batido Verde",
    "claims": [
      "Fuente de fibra natural",
      "Apoya el bienestar digestivo diario",
      "Rico en antioxidantes naturales",
      "Nutrición 100% natural en polvo"
    ],
    "presentacion": "450 g, 15 porciones, alimento en polvo a base de linaza",
    "ingredientesClave": [
      "Linaza",
      "Limón",
      "Pera",
      "Kiwi",
      "Apio",
      "Manzana verde",
      "Té verde"
    ]
  }
]
