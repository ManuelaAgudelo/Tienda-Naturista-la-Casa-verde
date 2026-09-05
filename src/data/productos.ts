// Fuente oficial: https://www.lacasaverdecolombia.com/tienda/ (catalogo publico de productos), 2026-09-05.
// Nombre, categoria, precio y descripcion tal como los publica La Casa Verde. No se inventan
// beneficios, ingredientes ni indicaciones que no esten en esta fuente.

export interface Producto {
  slug: string
  nombre: string
  categoria: string
  categoriaSlug: string
  precioTexto: string
  descripcion: string | null
}

export const PRODUCTOS: Producto[] = [
  {
    "slug": "aceite-de-aguacate",
    "nombre": "Aceite de aguacate",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "20.000",
    "descripcion": "Los usos del aceite de aguacate son muchos y variados. este producto, de hecho, tiene numerosas propiedades que lo hacen útil tanto en el campo nutricional como en el cosmético. las propiedades interesantes atribuidas al aceite en cuestión se deben a su rica composición y, en particular, al componente de ácidos grasos que lo hace similar en muchos aspectos al aceite de oliva."
  },
  {
    "slug": "aceite-de-almendras",
    "nombre": "Aceite de almendras",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "20.000",
    "descripcion": "/ es un excelente hidratante. / controla el eccema o el acné. / tiene cualidades emolientes. / es un producto desinflamatorio. / alivia el herpes. / suaviza la piel. / trata la psoriasis, la irritación y la dermatitis. / alivia las erupciones cutáneas. / poder antiestrías."
  },
  {
    "slug": "aceite-de-calendula",
    "nombre": "Aceite de calendula",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "20.000",
    "descripcion": "*tiene propiedades antiinflamatorias, regeneradoras y antisépticas. *fomenta el crecimiento de una melena fuerte y saludable. pelo más brillante *también debido a su poder hidratante, la caléndula tiene la propiedad de aportar brillo e hidratación al cabello. * ayuda a disminuir la apariencia de las arrugas y la opacidad asociadas con el envejecimiento de la piel. * reduce o elimina los daños causados ​​por la contaminación. nutre el rostro y deja la piel blanqueada."
  },
  {
    "slug": "aceite-de-coco",
    "nombre": "Aceite de coco",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "20.000",
    "descripcion": "*cuida la piel y el pelo *ayuda a bajar de peso *proviene del prensado de la pulpa del coco. *se compone por ácidos grasos y sustancias antioxidantes. *tiene un enorme poder hidratante y está recomendado para mantener la piel sana y radiante"
  },
  {
    "slug": "aceite-de-mano-de-res",
    "nombre": "Aceite de mano de res",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "20.000",
    "descripcion": "En el área de la cosmética y la salud se usa principalmente para la piel y el cabello proporciona volumen, brillo y fortalecimiento combate los rincipios de calvicie. dar volumen y firmeza a las piernas, el busto y los glúteos."
  },
  {
    "slug": "aceite-de-naranja",
    "nombre": "Aceite de naranja",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "20.000",
    "descripcion": "Antibacteriano y antifúngico. tiene propiedades que combaten bacterias y hongos. limpia y purificar ambientes. también es antiinflamatorio si tienes inflamaciones o dolores musculares, este aceite puede ser tu mejor amigo."
  },
  {
    "slug": "adelvit-tarro-x-500gr",
    "nombre": "Adelvit tarro x 500gr",
    "categoria": "Adelgazantes",
    "categoriaSlug": "adelgazantes",
    "precioTexto": "70.000",
    "descripcion": "Suplemento alimenticio altamente nutritivo e hipocalórico puede remplazar el desayuno o la cena. mejora el desdoblamiento de las grasas, toxinas y el agua acumulada"
  },
  {
    "slug": "aesculus-x-30-ml",
    "nombre": "Aesculus x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-tratamientos de insuficiencia venosa crónica -fortalece las paredes venosas, mejorando la circulación -útil para tratar las hemorroides -disminuye síntomas de artritis y lesiones deportivas -reduce la inflamación e hinchazón en las piernas -mejora el flujo sanguíneo hacia el cerebro"
  },
  {
    "slug": "ajo-rogoff-pildoras-x-180cap",
    "nombre": "Ajo rogoff pildoras x 180cap",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "25.000",
    "descripcion": "-el ajo es un aderezo que aporta grandes beneficios a la salud -tiene vitaminas antioxidantes -es de gran ayuda en las venas, arterias y alivia la hipertensión."
  },
  {
    "slug": "alcachofit-jbe-x-500-ml",
    "nombre": "Alcachofit jbe x 500 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "27.000",
    "descripcion": "*ideal para controlar el apetito. *posee una acci?n coler?tica que aumenta la segregaci?n biliar. *contribuye al buen funcionamiento del h?gado. *favorece la p?rdida de peso."
  },
  {
    "slug": "almendral-polvo-x-500gr",
    "nombre": "Almendral polvo x 500gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "60.000",
    "descripcion": "*es utilizado por personas que quieren bajar de peso. *aporta proteínas tipo caseína, de mayor beneficio en temas de nutrición, ácidos oleico y linoleico, estos intervienen en la calidad de las arterias y venas. *favorece la saludad vascular ya que bajo niveles de colesterol ldl e incrementa el hdl. *mejora el metabolismo de las grasas y actúan como hepatoprotectores *tiene todas las vitaminas antioxidantes (a, e, c) y varias del complejo b (b1, b2, b5, b6)."
  },
  {
    "slug": "alo-ver-x-1000-ml",
    "nombre": "Alo ver x 1000 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "40.000",
    "descripcion": "-estimula la mucosa gástrica e intestina -previene el estreñimiento -tratamiento para úlceras y gastritis -indicado en los trastornos del sistema digestivo -antiinlfamatorio -antibacteriano -desintoxicante y depurador -analgésico y antiespasmódico."
  },
  {
    "slug": "aloe-vera-suspension-x-360ml",
    "nombre": "Aloe vera suspension x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "36.000",
    "descripcion": "-el aloe vera contiene varios compuestos antioxidantes -evitar el crecimiento de bacterias dañinas se puede usar como tratamiento para úlceras gástricas."
  },
  {
    "slug": "lagoxin-adulto-x-60ml",
    "nombre": "Anbiol adulto x60ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "20.000",
    "descripcion": "El consumo de frutas se asocia a una disminución del riesgo de padecer obesidad, hipertension, enfermedades cardiovasculares o algunos tipos de cancer. para esto se debe tener en cuenta la acción diuretica de la pulpa de la papaya, la acción desintoxicante y laxante de la pulpa de la ciruela y la acción reguladora de los noveles del azucar en la sangre (glucemia) de la pulpa de pitaya. lagoxin combina estos frutos, facilitando la expulsion de toxinas y evitando desordenes digestivos."
  },
  {
    "slug": "ansiedad-x-30-ml",
    "nombre": "Ansiedad x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-armonizador y equilibrador emocional -función sedante -actividad relajante -aporta tranquilidad, paciencia y serenidad -indicada en casos de trauma: duelos, golpes, fracturas."
  },
  {
    "slug": "argentin-jarabe-x-360ml",
    "nombre": "Argentin jarabe x 360ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "35.000",
    "descripcion": "Disminuye las reacciones alérgicas producidad por el polen -mejoran la circulación de la sangre -ayuda a combatir procesos infecciosos del aparato respiratorio. -coadyuvante en la disminución de la inflamacion de las vías respiratorias o mucosas nasales, rinitis, sinusitis, gripe, bronquitis, faringitis, etc. -se utiliza en resfríos y afecciones de la garganta también."
  },
  {
    "slug": "art-jarabe-x-360ml",
    "nombre": "Art jarabe x 360ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "35.000",
    "descripcion": "La artritis es limitante y dolorosa y cada día son mas las personas con este padecimiento, alimentarse de manera adecuada es importante en su recuperación, dentro de esta alimentación, tener en cuenta diariamente el consumo de antioxidantes ayuda a disminuir el deterioro de las células que forman el tejido de cartílagos y articulaciones. art, está elaborado con extracto de uva que aporta grandes concentraciones de antioxidantes."
  },
  {
    "slug": "artofan-jarabe-x-500ml",
    "nombre": "Artofan jarabe x 500ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "35.000",
    "descripcion": "-ayuda a eliminar toxinas que dañan el organismo. -evita la liberación de ácido úrico. -evita la disminucion de la funcion renal."
  },
  {
    "slug": "artrimet-jarabe-x-360ml",
    "nombre": "Artrimet jarabe x 360ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "35.000",
    "descripcion": "-la atritis es una enfermedad degenerativa y limitante que cada día padecen más persona. el uso de medicamentos con antioxidantes como el jengibre, la curcumina, vitamina c y a. ayudan a detener el proceso de degenerativo de las células. artrimet aporta estos frutos de la naturaleza."
  },
  {
    "slug": "bar-press-jarabe-x-360ml",
    "nombre": "Bar-press jarabe x 360ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "-la presion arterial alta es una enfermedad silenciosa que cobra vidas diariamente, los ácidos grasos esenciales de la omega 3, juegan un papel importante en otros procesos celulares como la inflamación, la inmunidad y la coagulación danguínea, la uva inhibe el colesterol &#8220;malo&#8221; ldl y el amontonamiento de placa en las arterias el ajo aporta la alicina, el cual tiene potentes propiedades medicinales, contiene pocas calorías, pero es muy rico en vitaminas. bar-press está elaborado con estos componentes."
  },
  {
    "slug": "belladona-x-30-ml",
    "nombre": "Belladona x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Analgésico: trata el dolor por atritis, cólicos renales y menstruales. ayuda en el tratamiento de enfermedades respiratorias como el asma. antiespasmódico: ayuda en el tratamiento del síndrome del intestino irritable. útil en el tratamiento de los trastornos del movimiento como el parkinsonismo."
  },
  {
    "slug": "bidens-pilosal-x360ml",
    "nombre": "Bidens pilosal x360ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "44.000",
    "descripcion": "Capacidad para inhibir el crecimiento de organismos patógenos y modular la inflamación. otorga propiedades terapéuticas. alternativa natural para tratar la infección por helicobacter pylori trata la gastritis, diarrea, dolor estomacal y úlceras gastrointestinales, gracias a su acción antiinflamatoria, antiulcerosa y antimicrobiana."
  },
  {
    "slug": "bilax-jarabe-x-400-ml",
    "nombre": "Bilax jarabe x 400 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "Cuando nuestra alimentación contienen cantidades de grasas saturadas, preservantes y aditivos, perdemos la facilidad de eliminar estas grasas y se van al torrente sanguíneo causando enfermedades coronarias, si mejoramos el efecto colagogo y colerético del hígado. este ayuda a sintetizar las grasas y evita que se valla al torrente sanguíneo; esto lo podemos lograr con bajo consumo de estos alimentos y la ingesta de alcachofa todos los días, este fruto mejora la función biliar y es de gran ayuda para bajar niveles de colesterol en sangre. bilax contienen alcachofa y berenjena."
  },
  {
    "slug": "biotina-capsulas",
    "nombre": "Biotina capsulas",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "55.000",
    "descripcion": "-metabolismo de nutrientes: ayuda a convertir los carbohidratos, las grasas y las proteínas en energia utilizable por el organismo -apoyo al buen funcionamiento del sistema inmunológico y nervioso. -en el embarazo y la lactancia: ayuda en el desarollo del feto, el crecimiento y el desarollo del bebé. -crecimiento y fortalecimiento de cabello y uñas, mejora la apariencia general de la piel."
  },
  {
    "slug": "bronkiflu-jalea-x-250ml",
    "nombre": "Brinkiflu jalea x 240ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "32.000",
    "descripcion": "Su aporte de miel de abejas, propóleo y marañón &#8221; permiten brindar un efecto antiinflamatorio, inmunoestimulante, antiviral y ligeramente analgésico, ya que ayuda a combatir los estados gripales, permite regularizar tensión arterial, funciona como expectorante y descongestionante de los bronquios y pulmones, relajante del dolor de garganta, favoreciendo el funcionamiento del sistema inmune."
  },
  {
    "slug": "brobelia-jarabe-x-360ml",
    "nombre": "Brobelia jarabe x 360ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "35.000",
    "descripcion": "Gracias al aporte de la miel de abejas, propóleo y jengibre, este suplemento dietario se convierte en un aliado importante para el fortalecimiento del sistema inmunologico, además de ser eficaz contra la gripe y los resfriados, por su aporte de vitamina c y a. también posee propiedades expectorantes, lo que resulta ser muy útil para tratar problemas de tos al mejorar la expulsión de las flemas."
  },
  {
    "slug": "calcarea-x-30-ml",
    "nombre": "Calcarea x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-mejora de la salud ósea: puede ser beneficiosa para fortalecer los huesos y los dientes, lo que la hace potencialmente útil en el tratamiento de condiciones como la osteoporosis y la caries dental. -alivio de problemas de la piel: tratar afecciones de la piel como el acné, la dermatitis y las erupciones cutáneas -tratamiento de problemas digestivos: tratar trastornos digestivos como la acidez estomacal, la indigestión, la diarrea y la constipación, especialmente cuando están relacionados con un sistema digestivo débil o lento. -mejora de la ansiedad y el estrés: tratar problemas emocionales c..."
  },
  {
    "slug": "calcimega-shurk-x-700gr",
    "nombre": "Calcimega shurk x 700gr",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "65.000",
    "descripcion": "-por su contenido de maltodextrina ayuda a una digestion mas rapida, la soja es una excelente fuente de proteína vegetal, ademas de que podria ayudar a disminuir los sintomas de la menopausia la combinación de vitamina d3 y omega-3 facilita la absorción a nivel intestinal, logrando una mayor biodisponibilidad"
  },
  {
    "slug": "calcio-vit-d3",
    "nombre": "Calcio + vit d3",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "45.000",
    "descripcion": "-promueve la absorción óptima de calcio en el cuerpo -contribuye a prevenir la osteoporosis -la combinación de calcio y vitamina d3 es fundamental para mantener una estructura ósea solida y la salud dental."
  },
  {
    "slug": "calcium-fluoratum-x-30-ml",
    "nombre": "Calcium fluoratum x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-aumenta elasticidad del tejido conjuntivo, ligamentos y tendones -refuerza las articulaciones, huesos y esmalte dental -tratamiento complementario de varices y hemorroides -indicado en lesiones musculares y de ligamentos -ayuda al tratamiento contra el raquitismo y osteoporosis -regula el grado de los tejidos"
  },
  {
    "slug": "calendula-officinalis-x-30-cap",
    "nombre": "Calendula officinalis x 30 cap",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "30.000",
    "descripcion": null
  },
  {
    "slug": "calfin-polvo-x-400gr",
    "nombre": "Calfin polvo x 400gr",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "55.000",
    "descripcion": "Malteada hipocalórica con base isoflavonas de soya, calcio y colágeno. que mejora y reguliza el balance hormonal en la mujer, especialmente, en la menopausia y sus síntomas como sofoco, ansiedad, fatiga, sudor nocturno, cambios en el estado de ánimo. ayuda en la prevención de problemas renales, mejora la absorción de calcio en los huesos evitando osteoporosis, previene promeblas cardiovasculares, y combinado con el colágeno que aporta resistencia y flexibilidad a los tejidos."
  },
  {
    "slug": "candida-x-30-ml",
    "nombre": "Candida x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-las gotas homeopáticas candida utilizan comúnmente para tratar las infecciones por candida, que es un tipo de levadura que puede causar infecciones en diversas partes del cuerpo, como la boca, la garganta, los genitales y la piel. -alivia los síntomas asociados con la infección por levaduras y el crecimiento excesivo de candida, incluyendo picazón, ardor y secreción. también ayuda a fortalecer el sistema inmunológico del cuerpo para combatir la infección por candida de manera más efectiva."
  },
  {
    "slug": "cangret-terapia-multicevita",
    "nombre": "Cangret terapia + multicevita",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "135.000",
    "descripcion": "El omega 3, ácido graso, es de gran utilidad en la salud vascular. mejora la permeabilidad de las venas, hace barrido de ateromas (placas de grasa) y mejora la circulación, el aporte de vitamina c por ser un antioxidante. favorece las células y protege el endotelio, evitando su ruptura, cangret es un suplemento dietario que aporta altas concentraciones de estos nutrientes, además de aportar los beneficios del complejo b y magnesio, este mineral relaja los músculos y previene enfermedades coronarias."
  },
  {
    "slug": "cannabis-gel-x-500-gr",
    "nombre": "Cannabis gel x 500 gr",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "27.000",
    "descripcion": "El gel con extracto de semillas de cannabis es ideal para evitar el cansancio y mejorar el aspecto de la piel. revitaliza tu cuerpo dej?ndolo fresco y relajado"
  },
  {
    "slug": "canabis-x-200-gr",
    "nombre": "Cannabis x 200 gr",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "25.000",
    "descripcion": "-el gel de cannabis es un producto que contiene extractos de cannabis como el cbd, y a veces pequeñas cantidades de thc. se aplica externamente y tiene propiedades antiinflamatorias, analgésicas y relajantes. los beneficios incluyen alivio del dolor, reducción de la inflamación, relajación muscular, mejora de la circulación, propiedades antioxidantes y efecto calmante. es útil para personas con artritis, dolor muscular y post-ejercicio, contracturas, espasmos musculares, entre otros. este gel es ideal para aquellos que buscan alivio natural del dolor sin efectos psicoactivos"
  },
  {
    "slug": "carduus-marianus",
    "nombre": "Carduus marianus 240 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "-es un tratamiento de los trastornos del higado y el conductor biliar. -ayuda a prevenir y tratar la intoxicacion por hongos. -beneficioso para el metabolismo de los lípidos y carbohídratos. -co-ayudante en el tratamiento del colesterol y triglicéridos elevados. -reduce la glucosa en la sangre. -es un colagogo. -conbate afecciones viricas y cirrosis hepática. -ayuda a prevenir la perdida ósea. -tiene efectos antioxidantes y anti-edad."
  },
  {
    "slug": "casklax-jarabe-x-360ml",
    "nombre": "Casklax jarabe x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "Casklax tiene un efecto antiparasitario intestinal natural suave, facilita la eliminación del bolo fecal estimulando el peristaltismo intestinal. disminuye la sensación de pesadez,coadyuvante en el tratamiento de colon irritable con estreñimiento y síndrome diséptico ( distensión abdominal, pesadez, llenura, flatulencias)."
  },
  {
    "slug": "cassia-x-30-ml",
    "nombre": "Cassia x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-laxante natural: aumenta la motilidad intestinal -alivio del estreñimiento: mantiene la regularidad en los movimientos intestinales -no adictivo: no conduce a una dependencia a largo plazo -preparación para algunos procedimientos médicos como colonoscopias."
  },
  {
    "slug": "castano-de-indias-x-60-capsulas",
    "nombre": "Castaño de indias x 60 cápsulas",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "39.000",
    "descripcion": "-ayuda a descongestionar los vasos sanguíneos y tiene propiedades antiinflamatorias. -ayuda a mejorar la circulación en caso de varices -es un ingrediente ideal para la rutina de cuidado de la piel. -contiene escina, un componente que restablece la permeabilidad capilar y evita la formación de edemas. -el castaño de indias es rico en saponinas, flavonoides, taninos, almidón y proteínas."
  },
  {
    "slug": "cefaver-x-60-tabletas",
    "nombre": "Cefaver x 60 tabletas",
    "categoria": "Sistema endocrino",
    "categoriaSlug": "sistema-endocrino",
    "precioTexto": "45.000",
    "descripcion": "Las cefaleas o dolores de cabeza recurrentes son hoy muy frecuentes, cuanto aparecen de repente y se agudizan, solemos confundirlos con migraña, siendo esta una patología específica, sin embargo, en cualquiera de los casos, se recomienda consumir grageas o tabletas que contengan cafeína para aliviar los síntomas. cefaver es un suplemento dietario elaborado con café “sin cafeína”, lo mas importante es entender que el café es tan útil en salud, que aun sin cafeína, nos proporciona grandes beneficios gracias a sus innumerables activos, aquí citamos solo algunos muy importantes para tratar el dolo..."
  },
  {
    "slug": "cell-life-terapia-x-30-dosis",
    "nombre": "Cell life terapia x 30 dosis",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "150.000",
    "descripcion": "La espirulina ha sido utilizada para la nutrición adecuada desde hace décadas con resultados positivos, gracias a la cantidad de activos nutricionales que contiene como proteínas, oligoelementos antioxidantes, ácidos grasos y vitaminas, tienen efecto de saciedad, por lo que disminuye la ansiedad de comer esto debido al aporte significativo de nutrientes. cell-life está elaborado con espirulina."
  },
  {
    "slug": "certyl-x-700-gr",
    "nombre": "Certyl x 700 gr",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "65.000",
    "descripcion": "Alivia la presión de las venas y arterias de la cabeza, reduciendo dolores de migraña. favorece la circulación sanguínea y el sistema cardiovascular. favorece la relajación y la regeneración muscular. favorece la absorción del calcio de osteoporosis y artrosis."
  },
  {
    "slug": "ceurebrid-polvo-x-700gr-vitcebrine",
    "nombre": "Ceurebrid polvo x 700gr",
    "categoria": "Sistema endocrino",
    "categoriaSlug": "sistema-endocrino",
    "precioTexto": "65.000",
    "descripcion": "Alimento nutricional con mezcla de proteina de ayda a la reconstrucción y recuperación del tejido muscular,con aporte de aminoacidos de cadena ramificada que mejora la absorción de la proteina y la marcación del mpusculo, aporta vitaminas y aminoacidos que mejoran la concentración mental, oxigena el cerebro y evita la perdida de memoria (alzheimer). problemas de vertigo, tinnitus, migraña, vitce brine aporta estos aminoacidos y nutrientes."
  },
  {
    "slug": "chancacal-jarabe-x-360ml",
    "nombre": "Chancacal jarabe x 360ml",
    "categoria": "Sistema urinario",
    "categoriaSlug": "sistema-urinario",
    "precioTexto": "35.000",
    "descripcion": "Los cálculos renales, se forman por un mal metabolismo del calcio, estos se van a las vías urinarias causando dolor agudo, una manera de evitar estas situaciones, es consumir calcios de fácil asimilación, siempre acompañado de vitamina d3 y magnesio, mineral que moviliza el calcio. se deben consumir diuréticos para eliminarlos mediante la orina, el pepino, perejil y cebolla, gracias al aporte de agua y contenido de minerales, tienen efecto diurético, sumado al consumo de magnesio y zinc."
  },
  {
    "slug": "chanksol-jarabe-x-500ml",
    "nombre": "Chanksol jarabe x 500ml",
    "categoria": "Sistema urinario",
    "categoriaSlug": "sistema-urinario",
    "precioTexto": "35.000",
    "descripcion": "Los calculos renales y afecciones urinarias, son cada vez mas frecuentes, por el consumo de alimentos altos el sodio y exceso de preservantes en nuestr ingesta diaria estas razones ademas de afectar dirctamente la calidad de vida, son causantes de una enfermedad sileciona como es la hipertension el te verde, junto con los arandanios, aportan antioxidantes que mejoran los tejidos y por su accion diuretica, elimina toxinas y liquidos retenidos. chanksol es un alimento que aporta estos nutrientes."
  },
  {
    "slug": "cholaverd-jarabe-x-360ml",
    "nombre": "Cholaverd jarabe x 360ml",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "35.000",
    "descripcion": "El tamarindo, es una fruta tropical utilizada para preparar deliciosa bebidas refrescantes y con propierdades favorables para nuestro cuerpo. ideal para el sistema digestivo e inmunologico, controla los prblemas de estreñimiento fortalece el sistema cardiovascular, regula el colesterol y los niveles de presion arterial. cholaverd tambien contiene otras sustancias de origen natural utiles para resfriados, enfermedades tropicales, solores de cabeza y tos. ademas te ayuda con problemas de resaca"
  },
  {
    "slug": "cholestrolum-x-30-ml",
    "nombre": "Cholestrolum x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Logra mantener los niveles de colesterol dentro de los parámetros saludables -protege el hígado -inhibe la producción de grasa corporal evitando que los excesos de azúcar se conviertan en grasa -protector cardiovascular"
  },
  {
    "slug": "chungwa-jarabe-x-360ml",
    "nombre": "Chungwa jarabe x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "-ayuda en la desparacitación intestinal, drenador hepático, pancreático, sanguíneo, actuá removiendo toxinas del tracto digestivo y del sistema renal. -es apto para diabéticos."
  },
  {
    "slug": "cicalmag-polvo-x-700gr",
    "nombre": "Cicalmag polvo x 700gr",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "65.000",
    "descripcion": "-el calcio la vitamina d3 y el omega 3 ayudan al cuerpo a mantener el fluido y la flexibilidad de las articulaciones ayuda a prevenir el desarrollo de osteoporosis y permite prevenir la acumulaci?n de grasas en el higado gracias a la lecitina que contiene cicalmag."
  },
  {
    "slug": "cinar-q-jarabe-x-360ml",
    "nombre": "Cinar-q jarabe x 360ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "Consumir arazá puede llegar a depurar la sangre. de igual forma el té de arazá, puede ayudar a las mujeres con dolores menstruales y corregir el flujo excesivo, además de dar un optimo funcionamiento en la matriz, y al mejoramiento de la actividad del corazón, de los procesos cardiovasculares y óptimo funcionamiento del cerebro.la piña ayuda a combatir la coagulación de la sangre y evita que las plaquetas sanquíneas se peguen o se acumulen en las paredes de los vasos sangíneos, manteniendo nuestro hígado sano."
  },
  {
    "slug": "cir-ver-jarabe-x-360ml",
    "nombre": "Cir-ver jarabe x 360ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "-mantener la permeabilidad venosa es importante para garantizar un tránsito adecuado de la sangre, avitar la bipedestación ayuda a desinflamar las venas y mantener un peso adecuado. si a esto le agregamos el consumo diario uvas y antioxidantes, mejoraríamos la elasticidad venosa, disminuirían el riesgo de enfermedad coronaria y la circulación sanguínea sería más eficiente. cir-ver está elaborado con estos componentes que nos permiten mantener la permeabilidad venosa."
  },
  {
    "slug": "cirjan-jarabe-x-500ml",
    "nombre": "Cirjan jarabe x 500ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "-la mezcla de té verde, ajo, cebolla y limón, cumple una función importante como diuréticos, expulsando a través del sistema urinario toxinas que causan enfermedades al organismo. también encontramos componentes antioxidantes que mejoran la calidad de las células y evitan el deterioro de ellas cirjan aporta estos beneficios, ayudando a la optimización de las funciones del páncreas y el hígados. además de fortalecer nuestras defensas."
  },
  {
    "slug": "citos-jarabe-x-360ml",
    "nombre": "Citos jarabe x 360ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "35.000",
    "descripcion": "-gracias al propóleo que funciona como antibiótico natural, ayuda a prevenir y recuperarse de las enfermedades respiratorias, aflojando las flemas u otras secreciones en las vías respiratorias es por esto que citos junta las propiedades de la miel de abejas, el propóleo y los rizomas del jengibre, que brindan un alivio para la tos, la tos seca y severa, además de ser eficaz contra la gripe y los resfriados, sin olvidar que aumenta las defensas gracias a la vitamina a y c"
  },
  {
    "slug": "citrapot-x-700-gr",
    "nombre": "Citrapot x 700 gr",
    "categoria": "Sistema muscular",
    "categoriaSlug": "sistema-muscular",
    "precioTexto": "60.000",
    "descripcion": "Correcta función renal ayuda a modificar el ph de la orina disminuye su acidez. contribuye a la eliminación y prevención de cálculos renales e incluso a solubilizar los que existen aporte mineral contribuye a mantener el funcionamiento normal del sistema nervioso y muscular ayuda a garantizar un buen rendimiento deportivo la recuperación tras la actividad física."
  },
  {
    "slug": "citrato-de-magnesio-capsulas",
    "nombre": "Citrato de magnesio capsulas",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "38.000",
    "descripcion": "-ayuda a regular la presión arterial y el ritmo cardíaco. -correcta función muscular -protege y fortalece los huesos y dientes -disminuye los dolores de cabeza leves y la migraña -mejora la salud digestiva. -contribuye el buen funcionamiento del corazón. -promueve el sueño y la relajación."
  },
  {
    "slug": "citrato-de-potasio-capsulas",
    "nombre": "Citrato de potasio capsulas",
    "categoria": "Sistema nervioso",
    "categoriaSlug": "sistema-nervioso",
    "precioTexto": "35.000",
    "descripcion": "*ayuda a modificar el ph de la orina disminuyendo la acidez *optimiza el funcionamiento del sistema cardiovascular y ayuda a regular la hipertensi?n *ayuda a la eliminaci?n de c?lculos, previene su formaci?n y reduce su crecimiento *ayuda al buen funcionamiento del coraz?n, los ri?ones, m?sculos y aparato digestivo *mejora el rendimiento cerebral y nervioso."
  },
  {
    "slug": "clean-system-3-und-jarabe-x-500ml",
    "nombre": "Clean system 3 und jarabe x 500ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "120.000",
    "descripcion": "El tomillo, la alcahofa y zarzaparrilla, son plantas con activos importantes como saponinas, flovonoides y taninos que actúan eliminando bacterias, protegen las células de radicales libres, también su efecto colagogo y colerético mejoran la función hepática, estimulando la expulsion de toxinas. clean system es un suplemento dietario que aporta las bondades de estas plantas.tas."
  },
  {
    "slug": "clorofil-med-x-1000-ml",
    "nombre": "Clorofil-med x 1000 ml",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "40.000",
    "descripcion": "Estimula el sistema inmunitario -aumenta la producción de sangre -desintoxica y oxigena la sangre -limpia los intestinos -cicatrización de la piel -prevención del cáncer -frena la propagación de virus y bacterias. -reduce la presón arterial -favorece la regularidad digestiva."
  },
  {
    "slug": "clorofila-jarabe-x-360ml-cloroverd",
    "nombre": "Cloroverd jarabe x 360ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "32.000",
    "descripcion": "-desintoxica y regenera las celulas -estimula la regeneracion de globulos rojos -depura y oxigena la sangre -fortalece las defensas -ayuda a la cicatrización de úlceras -anticancerigeno -antioxidante -protege el colon -evita flatulencias, pesadez estomacal y halitosis -mejora el funcionamiento del hígado, estomago y vesicula"
  },
  {
    "slug": "clorudol-x-1000-ml",
    "nombre": "Clorudol x 1000 ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "45.000",
    "descripcion": "-previene la formación de cálculos renales. -disminuye los síntomas de la artritis. -ayuda a prevenir problemas de próstata. -mejora la energía. -equilibra el ph de la sangre."
  },
  {
    "slug": "clorumag-blister-x-30-cap",
    "nombre": "Clorumag blister x 30 cap",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "38.000",
    "descripcion": "Son muchas las bondades que tiene el magnesio pero poco lo que se conoce de él, no solo forma parte de nuestro tejido óseo, es de vital importancia para estabilizar el ph en el cuerpo, relajar los músculos lisos y activar su función, sucede con el corazón y los riñones si lo tomamos todos los días, mejoramos la eliminación de toxinas a través de las vías urinarias. clorumag está elaborado con magnesio."
  },
  {
    "slug": "colagtin-polvo-x-700gr-colagemin",
    "nombre": "Colagemi x 700gr",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "65.000",
    "descripcion": "-ayuda a fortalecer los huesos. -coadyuvante para correcta absorción del calcio. -revitaliza sistema inmune. -regula el funcionamiento de músculos y el sistema nervioso. -ayuda a aumentar la hemoglobina y proteína en los glóbulos rojos. -el huevo liofilizado de pato proporciona nutrientes a las células, carbohidratos, enzimas y sales, que son básicos en el organismo."
  },
  {
    "slug": "colageno-capsulas",
    "nombre": "Colageno capsulas x60 capsulas",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "55.000",
    "descripcion": "-mantiene la hidratación, elasticidad y firmeza de la piel -reduce el dolor y la inflamación de las articulaciones -mejora la densidad ósea y previene la osteoporosis -ayuda a mantener la salud cardiovascular"
  },
  {
    "slug": "colageno-hidorlizado-x-500-ml-nueva-presentacin",
    "nombre": "Colageno hidorlizado dorado x 500 ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "48.000",
    "descripcion": "Mantiene la salud de las articulaciones fortalece el sistema óseo y cardiovascular acción antioxidante y antienvejecimiento mejora el aspecto de la piel, cabello y uñas."
  },
  {
    "slug": "collagen-mix-x-500-ml-producto-nuevo-dorado",
    "nombre": "Colageno hidrolizado dorado x 500 ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "48.000",
    "descripcion": "Mantiene la salud de las articulaciones fortalece el sistema óseo y cardiovascular acción antioxidante y antienvejecimiento mejora el aspecto de la piel, cabello y uñas"
  },
  {
    "slug": "colageno-hidrolizado-x-700gr",
    "nombre": "Colágeno hidrolizado nuevo x 700gr",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "59.000",
    "descripcion": "Beneficios del colágeno hidrolizado que contiene caldo de hueso de pollo: mejora la salud de la piel: aumenta la elasticidad y firmeza de la piel, reduciendo arrugas y signos de envejecimiento. fortalece articulaciones y huesos: apoya la salud del cartílago, reduce el dolor articular, y fortalece los huesos. recuperación muscular: la proteína de suero mejora la reparación y crecimiento muscular tras el ejercicio. salud digestiva: el colágeno de caldo de huesos puede beneficiar la digestión y el revestimiento intestinal. cabello y uñas más fuertes: promueve un crecimiento más saludable y reduce..."
  },
  {
    "slug": "colantin-x-1000-ml",
    "nombre": "Colantin x 1000 ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "45.000",
    "descripcion": "-antioxidante natural fortalece articulaciones, uñas y cabello. ayuda en tratamientos de la osteoporosis, mejora el aspecto de la piel y ayuda a prevenir el envejecimiento prematuro"
  },
  {
    "slug": "colchicum-x-30-ml",
    "nombre": "Colchicum x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-previene y trata los episodios gotosos -reduce inflamacón y dolor de articulaciones -regula los niveles de ácido úrico en la sangre -coadyuvante en tratamientos de artritis y artrosis -impide el crecimiento de las células tumorales -trata el dolor muscular y tendinitis."
  },
  {
    "slug": "collage-marino-polvo-x-1000-gr",
    "nombre": "Collage marino polvo x 1000 gr",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "75.000",
    "descripcion": "Colageno hidrolizado en polvo por 1000 gramos, excelente concentracion. pepticos de colageno, vitamian e, c y d, con una adicion de uva. para lucir un cuerpo sano libre de oxidaciones y rejuvenecido, ayuda en el crecimiento de las u?as y en cabello."
  },
  {
    "slug": "collagenmix-x-500ml",
    "nombre": "Collagenmix x 500ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "48.000",
    "descripcion": "-ayuda al fortalecimiento de los huesos y tejidos articulares. -la vitamina d , ayuda en la construcción de huesos sanos y fuertes. -el calcio ,ayuda a prevenir osteoporosis y artritis. -beneficia la salud de los dientes y las encías. -el omega 3 , es coadyuvante en la protección del sistema cardiovascular, ya que regula el ritmo cardíaco destapa y desinflama las arterias."
  },
  {
    "slug": "colmin-x-700-gr",
    "nombre": "Colmin x 700 gr",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "60.000",
    "descripcion": "-previene la formación de cálculos renales. -disminuye los síntomas de la artritis. -mejora la absorción de calcio en los huesos. -evita el insomnio y mejora la energía."
  },
  {
    "slug": "colopez-jarabe-x-500ml",
    "nombre": "Colopez jarabe x 500ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "-alivia la irritación por su acción de movilizar el bolo feacl. -mejora la acción astringente."
  },
  {
    "slug": "complejo-b-capsulas",
    "nombre": "Complejo b capsulas",
    "categoria": "Sistema nervioso",
    "categoriaSlug": "sistema-nervioso",
    "precioTexto": "55.000",
    "descripcion": "Máximo aporte de energía -mejora la resistencia y la recuperación muscular -ayuda al buen funcionamiento del sistema nervioso -aumenta la producción de glóbulos rojos y adn -vital para el crecimiento y la función saludable de los órganos -refuerza el sistema inmunitario"
  },
  {
    "slug": "complex-nat-x-500ml-vitamina-c-jbe",
    "nombre": "Complex-nat x 500ml vitamina c jbe",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "35.000",
    "descripcion": "La vitamina c es indispensable para nuestro organismo: -es muy importante para la piel. -es antioxidante por excelencia. -ayuda a formar colágeno y tejidos. -eficaz para reforzar el sistema inmunológico."
  },
  {
    "slug": "compuestico-x-120ml",
    "nombre": "Compuestico x 120ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "20.000",
    "descripcion": "Mezcla de propóleo, miel de abejas y polen, es un alimento que nos da las bondades antisépticas del propóleo el aporte de vitaminas, aminoácidos y minerales de la miel y el polen, logrando una combinación que favorece el funcionamiento del sistema inmune, así puede combatir bacterias, virus e infecciones ocasionadas por flemas, además la miel actúa como un gran expectorante y fluidificante que hace que no se deposite moco que pueda complicar una enfermedad respiratoria."
  },
  {
    "slug": "compuesto-insomnio-x-30-ml",
    "nombre": "Compuesto insomnio x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-actividad sedante -actividad hipnótica -actividad miorrelajante -indicada en casos de nerviosismo, ansiedad y estrés prolongado -ayuda a regular trastornos del sueño de origen nervioso -trata el dolor muscular y espasmos digestivos"
  },
  {
    "slug": "compuesto-renal-x-30-ml",
    "nombre": "Compuesto renal x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-facilita la expulsión de cálculos y arenillas renales -refuerza los procesos de detocificación de las vías urinarias -trata la cistitis e incontinencia urinaria -estimula el drenaje natural -disminuye la inflamación e irritación de las vías urinarias -analgésico del cólico nefrítico"
  },
  {
    "slug": "crema-arnica-x-120gr",
    "nombre": "Crema arnica x 120gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "25.000",
    "descripcion": "-reduce la inflamación y el enrojecimiento de la piel, especialmente después de la exposición al sol o de irritaciones leves. -por sus propiedades cicatrizantes, ayuda a acelerar el proceso de curación de la piel, reduce la apariencia de cicatrices y promueve una piel más uniforme y saludable -mantiene la piel suave, flexible y bien hidratada previene el envejecimiento prematuro de la piel y la mantiene con un aspecto más joven y radiante disminuye la aparición de moretones y acelera su desaparición, lo que es muy útil después de cirugías estéticas o tratamientos faciales."
  },
  {
    "slug": "crema-calendula-x-120gr",
    "nombre": "Crema calendula x 120gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "25.000",
    "descripcion": "-propiedades antimicrobianas y antiinflamatorias -cicatrización y regeneración de los tejidos cutáneos -hidratación y nutrición -antioxidante que protege la piel -acta para pieles sensibles y propensas a alergias -suaviza la piel y mejora su textura."
  },
  {
    "slug": "crema-de-calendula-arnica-x-120gr",
    "nombre": "Crema de calendula + arnica x 120gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "25.000",
    "descripcion": "-propiedades antiinflamatorias: calma la piel irritada o enrojecida y alivia el dolor -cicatrización de la piel: ayuda a la piel a recuperarse rápidamente de las lesiones o irritaciones menores -sus ingredientes hidratantes ayudan a mantener la piel suave e hidratada por más tiempo -propiedades antibacterianas que ayudan a combatir el acné y las imperfecciones de la piel -enriquecida con antioxidantes que protegen la piel del daño causado por los radicales libres y otros factores ambientales"
  },
  {
    "slug": "crema-de-castao-de-indias-x-120gr",
    "nombre": "Crema de castaño de indias x 120gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "25.000",
    "descripcion": "-mejora la circulación sanguínea -reducción de la inflamación -propiedades antioxidantes -hidratación -ayuda a mejorar el tono y textura de la piel"
  },
  {
    "slug": "crema-de-gualanday-x-120gr",
    "nombre": "Crema de gualanday x 120gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "25.000",
    "descripcion": "-acción antioxidante -propiedades antiinflamatorias -hidratación profunda -propiedades cicatrizantes -efecto calmante -regeneración celular -propiedades antisépticas"
  },
  {
    "slug": "crema-de-ortiga-x-120gr",
    "nombre": "Crema de ortiga x 120gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "25.000",
    "descripcion": "-hidrata y nutre la piel, por su contenido de hierro, magnesio, calcio y vitaminas del grupo b -ayuda a regular la producción de sebo, lo que reduce el brillo excesivo y previene brotes de acné -mejora la circulación sanguínea en la piel, favoreciendo la regeneración celular -contiene propiedades astringentes que tonifican la piel y minimizan la apariencia de los poros"
  },
  {
    "slug": "cuasmeva-gotas-x-60ml",
    "nombre": "Cuasmeva gotas x 60ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "38.000",
    "descripcion": "Las amebas son microorganismos agresores que pueden causar grandes daños a nuestro cuerpo, siempre están presente y son muy difícil de evacuar, pero cuando sobre pasan los niveles permitidos pueden causar debilidad, dolor de cabeza y repetidas gastroenteritis o infecciones gastro intestinales. el consumo de papaya, pitaya y ajo, causan una acción laxante logrando un barrido de los quistes y amebas aisladas, de esta manera evitamos enfermedades como deshidratación, causadas por amebiasis. cuasmeva es un suplemento dietario que reúne las bondades de estas plantas y frutas."
  },
  {
    "slug": "de-leon-jarabe-x-500ml",
    "nombre": "De leon jarabe x 500ml",
    "categoria": "Sistema linfático",
    "categoriaSlug": "sistema-linfatico",
    "precioTexto": "35.000",
    "descripcion": "Su composición de pepino, maíz, uchuva y otros sustancias naturales, hacen de este suplemento dietario diurético, uricosúrico, lo que permite disminuir los niveles de ácido úrico, colerético y estimula la producción biliar a nivel hepático, ademas brinda una acción depurativa de la sangre y de la piel, mejorando así los procesos de la dispepsia y edemas de origen renal por insuficiencia venosa al activar los mecanismos de drenaje linfático."
  },
  {
    "slug": "desodorante-de-piedralumbre",
    "nombre": "Desodorante de piedralumbre",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "30.000",
    "descripcion": "Contrarresta la formación de bacterias implicadas en el olor corporal. - no mancha la ropa ni las axilas. - da protección del mal olor por 24 horas. - dura 6 meses o mas y es económico. - es 100% natural y apto para todo tipo de pieles. - ayuda a mantener controlado el ph de la piel. - al no tener sustancias químicas no produce cáncer. - ayuda con la aclaración de las axilas."
  },
  {
    "slug": "despigmentador-cutaneo-crema",
    "nombre": "Despigmentador cutaneo crema",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "35.000",
    "descripcion": "Actúa sobre la piel disminuyendo y controlando la aparición de manchas causadas por hiperpigmentación, además proporciona suavidad y una muy buena apariencia física."
  },
  {
    "slug": "dollar-gold-x-30-caps-harpagofito",
    "nombre": "Dollar gold x 30 caps &#8220;",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "35.000",
    "descripcion": "Esta planta llamada garra del diablo, tiene activos importantes como herpag?sidos, esteroides y fitoesteroles, que le dan su acci?n antiinflamatoria, analg?sica y antipir?tica, por estas razones mejora el movimiento en casos de artritis. dollar gold es un medicamento natural que contiene harpag?fito."
  },
  {
    "slug": "dollar-x-60-tabletas",
    "nombre": "Dollar x 60 tabletas",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "40.000",
    "descripcion": "Tener una alternativa natural para el dolor es importante ya que los que nos ofrecen son hepatotóxicos y su uso constante crea resistencia a su función. dollar es un suplemento dietario elaborado con espinaca que, gracias a su aporte de clorofila, desintoxica el organismo de residuos tóxicos, mejora la circulación y alivia el dolor. además, su contenido de magnesio, mineral de actúa relajando los músculos y evitando su tensión, hacen de este suplemento una buena alternativa."
  },
  {
    "slug": "dolmas-polvo-x-24-sobres",
    "nombre": "Dolmas polvo x 24 sobres",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "65.000",
    "descripcion": "El colágeno es la proteína más abundante es nuestro cuerpo ya que es la que forma los tejidos en general- vital para la salud de la piel- cabello- uñas- órganos internos- músculos y tejidos conectivos- siguiendo la línea de importancia en los tejidos conectivos- encontramos que el calcio- magnesio y fosforo- son minerales importantes para la formación de tejido oseo y cartílagos. dolmas es un alimento que aporta estos importantes nutrientes- consumirlo a diario mejoramos nuestra calidad de vida."
  },
  {
    "slug": "dolorend-x-30-capsulas",
    "nombre": "Dolorend x 30 cápsulas",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "29.900",
    "descripcion": null
  },
  {
    "slug": "drenalin-jarabe-x-360ml",
    "nombre": "Drenalin jarabe x 360ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "El consumo del brócoli, perejil y la espinaca, aporta propiedades anticancerígenas, protegen el corazón al eliminar el colesterol malo, desintoxican el organismo al limpiear el hígado y los reiñones, aportan calcio, fósforo, magnesio y zinc, cuidando de los ojos, mejoran la piel, previenen la anemia, el estreñimiento, fortaleceel sistema inmunol+ogico y aporta ácido fólico. drenalin combina los beneficios de estos 3 alimentos, ayudando a prevenir enfermedades cardiovasculares y la hipertensión arterial."
  },
  {
    "slug": "drosera-x-30-ml",
    "nombre": "Drosera x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Controla síntomas respiratorios como la tos seca, presistente y secreciones eficaz para pacientes con bronquitis crónica o aguda y asma ayuda en el tratamiento para la sinusitis, faringitis, laringitis y procesos gripales útil como tratamiento complementario para la tos ferina"
  },
  {
    "slug": "echinacea-gotas-sublinguales",
    "nombre": "Echinacea gotas sublinguales",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "- previene y acorta síntomas de gripe y resfriados. sin duda, su uso más habitual y por el que es más conocida es el de combatir enfermedades que suelen llegar con el otoño e invierno, como sinusitis, faringitis, gripe o catarros comunes. de hecho, existen estudios que indican que es tan efectiva como el antigripal más frecuente, pero más segura, puesto que presenta menos riesgos de complicaciones y efectos secundarios."
  },
  {
    "slug": "edisure-adulto-x-700gr",
    "nombre": "Edisure adulto x 700gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "55.000",
    "descripcion": "La combinación de vitaminas y minerales hacen de este alimento una buena alternativa en el momento de elegir, aporta proteínas que aseguran la formación de aminoácidos para que se encarguen del desempeño adecuado del sistema endocrino y nervioso, además contienen vitaminas del complejo b que fortalecen la acción muscular, vitaminas antioxidantes que evitan el daño a las células ocasionado por los radicales libres, así como lecitina, calcio, fosforo y todos los minerales que el cuerpo necesita para su desempeño; cuando le damos a nuestro cuerpo una ingesta de alimentos que asegure su aporte nut..."
  },
  {
    "slug": "edisure-kids-x-700gr",
    "nombre": "Edisure kids x 700gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "55.000",
    "descripcion": "Los niños son una población vulnerable a desnutrición, por consiguiente, a debilidad en desempeño, crecimiento y aprendizaje; es muy importante garantizar diariamente una alimentación completa y balanceada, evitar en ellos el sedentarismo, consumo de bebidas azucaradas y embutidos y permanentemente estar pendientes de suplementar su alimentación. edisure es un alimento que aporta proteínas, vitaminas y minerales necesarios para su desarrollo cognitivo, fortalecimiento óseo, defensas y función muscular."
  },
  {
    "slug": "embrionat-terapia-20-frascos-x-20-ml",
    "nombre": "Embrionat terapia 20 frascos x 20 ml",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "99.000",
    "descripcion": "El extracto de malta y el embrion de pato proporcionan nutrientes a las células: incorpora aminoácidos, esenciales, carbohidratos, enzimas y sales, que son basicos para mantener el equilibrio del organismo y asi estimulas la conservación de los tejidos. este tratamiento tambien detiene y elimina las manifestaciones del envejecimiento prematuro por su alto contenido de ácidos nucleicos."
  },
  {
    "slug": "enziverd-jarabe-x-500ml",
    "nombre": "Enziverd jarabe x 500ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "Enziverd aporta los beneficios digestivos de la manzana, papaya, pitahaya y ciruela, estimulando la producci?n enzim?tica por parte del h?gado y del p?ncreas, mejorando la distensi?n abdominal y la flatulencia."
  },
  {
    "slug": "escobil-x-8-tabletas",
    "nombre": "Escobil x 8 tabletas",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "20.000",
    "descripcion": "Podríamos pensar que los niños no tienen un hígado graso, error, si los alimentamos con huevo de forma frecuente, los premiamos con hamburguesas, perros calientes y toda la llamada comida chatarra, por supuesto que van adquiriendo un hígado graso, además, difícilmente ellos aceptan suplementos con plantas, sin embargo si aportamos a su alimentación las bondades de frutas como l papaya, frutos como la alcachofa, pueden ir disminuyendo la grasa de su hígado y recuperando sus funciones. escobit es un suplemento que lo deben consumir regularmente grandes y chicos. este tipo e enfermedades tambien ..."
  },
  {
    "slug": "escobita-polvo-laxante",
    "nombre": "Escobita polvo laxante",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "15.000",
    "descripcion": "El higado es un organo vital que cumple un sin numero de funciones,ademas de estar expuesto a toxicos permanentes por uso de medicamentos, bebidas alcoholicas y alimentos ricos en grasas, pocas veces consumimos alimentos que mejoren su función y protejan la aparicion de fibrosis que pueda desencadenar afecciones cronicas; el consumo de linaza, pitaya, papaya,aportas fibra y vita corotenos que mejoran la eliminacion de toxinas, ademas de aportar beneficios de antioxidantes. escobita es un alimento que contiene estas frutas ."
  },
  {
    "slug": "eukmeil-x-360ml",
    "nombre": "Eukmeil x 360ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "25.000",
    "descripcion": "La tos, resfriado comun, gripe y en general enfermedades respiratorias, son muy recurrentes en personas de todas las edades, por esta razon, los productos naturales, son la mejor alternativa, las plantas usadas para este tipo de afecciones con excelentes resultados son el jengibre, el marañon y la miel de abejas ya que tienen accion expectorante, broncodilatadora y relajante del dolor de garganta. eukomeil alimento con grandes beneficios para la salud y nutricion."
  },
  {
    "slug": "factor-calostro-polvo-x-400-gr",
    "nombre": "Factor calostro polvo x 400 gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "70.000",
    "descripcion": "Factor's es un alimento beneficioso para regular el sistema inmune y aumentar las defensas, además ayuda a inhibir la vinculación de bacterias como helicobacter pylori y enfermedades autoinmunes. mejora la vigilancia inmunológica es decir a conocer y eliminar células tumorales o cancerígenas."
  },
  {
    "slug": "factor-max-x-60-capsulas-cv-improfarme",
    "nombre": "Factor max x 60 capsulas cv improfarme",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "65.000",
    "descripcion": "El calostro bovino aporta factores de transferencia, encargados de pasar la información inteligente al sistema inmune, de esta manera este sistema puede reaccionar de manera oportuna ante diferentes agresores, funciona como inmunoregulador por su aporte de inmunoglobulinas, logrando que el sistema sea capaz de combatir virus, bacterias, hongos cualquier enfermedad autoinmune o tumoral; ha sido uno de los descubrimientos más importantes de los últimos años para la preservación de la humanidad; factor max es un suplemento que aporta los beneficios del calostro bovino."
  },
  {
    "slug": "femever-jarabe-x-500ml",
    "nombre": "Femever jarabe x 500ml",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "35.000",
    "descripcion": "-este suplemento dietario, brinda una acción antiinflamatoria a nivel útero ovárico, disminuye los síntomas premenstruales ( dismenorrea) y siendo así un coadyuvante en el tratamiento de la amenorrea primaria. femever ayuda a mejorar y regular el balance hormonal en la menopausia y sus síntomas como su foco, ansiedad, fatiga, sudor nocturno y cambios en el estado de ánimo."
  },
  {
    "slug": "fencol-jarabe-x-360ml",
    "nombre": "Fencol jarabe x 360ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "28.000",
    "descripcion": "Los antioxidantes han demostrado ser de gran ayuda para la salud del sistema vascular, evitar que pierda su elasticidad y favorecen a la eliminacion de grasas, ademas protegen las celulas del da?o causado por radicales libres, el aporte de magnesio presente en la feijoa y la manzana relajan el musculo cardiaco, estos frutos acompa?ados de una dieta libre de embutidos,exceso de sodio y bebdas azucaradas, mejoran nuestra salud vascular. esta es una bebida que aporta los beneficios de estas frutas,apta para diabeticos."
  },
  {
    "slug": "ferronat-jarabe-x-360ml",
    "nombre": "Ferronat jarabe x 360ml",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "35.000",
    "descripcion": "Una deficiencia de ácido fólico puede provocar anemia, lo cual se produce por un funcionamiento deficiente de los glóbulos rojos. la vitamina b9 juega un papel importante en la asimilacíon. del hierro en nuestro organismo. también en la absorción de la vitamina b12, con lo que permite mejorar las funciones de nuestro cerebro y reducir el riesgo de padecer problemas neurológicos irreversibles, lo que resulta determinante para mantener un buen nivel de energía."
  },
  {
    "slug": "fiber-up-polvo-x-200gr",
    "nombre": "Fiber up polvo x 200gr",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "48.000",
    "descripcion": "Todos sabemos el aumento de enfermedades de colon que se presentan hoy debido a diferentes factores como alimentación, uso inadecuado de medicamentos y alimentación pobre en fibra, cuando se combinan 6 fibras, estas hacen sinergia favorable para acelerar el tránsito intestinal, absorber los nutrientes y evacuar toxinas eficientemente, previniendo inflamaciones e infecciones en el colon; es absolutamente necesario consumir fibra todos los días y no es suficiente el consumo de frutas y vegetales, necesitamos el aporte de fibra para mantener una saludable digestión. fiberup, aporta 6 fibras, libr..."
  },
  {
    "slug": "flexdol-polvo-x-24-sachets",
    "nombre": "Flexdol polvo x 24 sachets",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "65.000",
    "descripcion": "El colágeno es una proteína importante en el funcionamiento del tejido conectivo. interviene en la formación y función de cartílagos y huesos, junto con el calcio y magnesio, logran dar movilidad y controlan el dolor. además, el aporte de calostro bovino aporta factores de crecimiento y efecto antiinflamatorio, haciendo una combinación nutricional muy importante para el sistema osteoarticular. flexdol aporta los beneficios de estos nutrientes."
  },
  {
    "slug": "flugax-x-15-sachets",
    "nombre": "Flugax x 15 sachets",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "40.000",
    "descripcion": "Disminuye la inflamación en el tracto digestivo ayuda en la cicatrización de los tejidos y, por lo tanto, es beneficioso en casos de irritsación gastrointestinal alivia las náuseas y es útil en casos de malestar estomacal. relaja los músculos del tracto digestivo, lo que alivia los síntomas de indigestión. sus propiedades relajantes ayudan a calmar situaciones de estrés gastrointestinal."
  },
  {
    "slug": "fortamaxin-x-500-ml-nueva-presentacin",
    "nombre": "Forzamaxin x 500 ml",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "40.000",
    "descripcion": "Suplemento estimulante gracias al aporte de guaraná que brinda propiedades afrodisíacas y un efecto energizante natural ayuda en el tratamiento de la difusión eréctil facilita la dilatación de las arterias y la erección ya que mejora el flujo sanguíneo y la entrada de sangre al pene."
  },
  {
    "slug": "gaflox-suspension-x-360-ml",
    "nombre": "Gaflox suspension x 360 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "40.000",
    "descripcion": "Anti-inflamatorio y cicatrizante, controla el reflujo, agrieras, ulceras gastricas, tonico y regulador digestivo. sus propiedades lo hacen util para el cancer gastrico y la colitis"
  },
  {
    "slug": "gast-calen-jbe-x-500-ml",
    "nombre": "Gast-calen jbe x 500 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "27.000",
    "descripcion": "Coadyuvante para gastritis cr?nica, ulcera g?strica y agrieras. coadyuvante para gastritis cr?nica, ulcera g?strica y agrieras."
  },
  {
    "slug": "gastrover",
    "nombre": "Gastrover",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "32.000",
    "descripcion": "Jarabe cicarizante antiinflamatorio que comabte: -refujo gastrico -ulcera gastrica -acidez estomacal reflujo esofagico -colon irritado -bacterias intestinales"
  },
  {
    "slug": "calendula-jarabe-x-360ml-gastrover",
    "nombre": "Gastrover x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "32.000",
    "descripcion": "Jarabe cicarizante antiinflamatorio que comabte: -refujo gastrico -ulcera gastrica -acidez estomacal reflujo esofagico -colon irritado -bacterias intestinales"
  },
  {
    "slug": "gel-de-canabis-x-140gr",
    "nombre": "Gel de canabis x 140gr",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "30.000",
    "descripcion": "El gel con extracto de semillas de cannabis es ideal para evitar el cansancio y mejorar el aspecto de la piel. revitaliza tu cuerpo dejandolo fresco y relajado"
  },
  {
    "slug": "escobit-adulto-tarro-polvo-x-30gr-geolak",
    "nombre": "Geolak adultos",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "15.000",
    "descripcion": "El higado graso afecta tanto a nños como adultos, geolak kids y adulto aporta las bondades de la manzana y la avena, que pueden ir disminuyendo la grasa de su higado y recuperando sus funciones. este suplemento brinda un aporte de fibra que ayuda a depurar el higado,elimina toxinas y sustancias extrañas del organismo, es antioxidante y mejora el transito intestinal, coadyuvante desparasitario."
  },
  {
    "slug": "escobit-nios-tarro-x-15gr-geolak",
    "nombre": "Geolak niños",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "15.000",
    "descripcion": "*el higado graso afecta tanto a n?os como adultos, geolak kids y adulto aporta las bondades de la manzana y la avena, que pueden ir disminuyendo la grasa de su higado y recuperando sus funciones. este suplemento brinda un aporte de fibra que ayuda a depurar el higado,elimina toxinas y sustancias extra?as del organismo, es antioxidante y mejora el transito intestinal, coadyuvante desparasitario."
  },
  {
    "slug": "glu-ks4-x-1000-ml",
    "nombre": "Gl-samin x 1000 ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "45.000",
    "descripcion": "Ayuda en tratamientos de: artrosis y osteoporosis antioxidante natural analgésico y antiinflamatorio fortalece articulaciones reduce los síntomas de la artritis ayuda en el proceso de recuperación muscular"
  },
  {
    "slug": "gland-prot-jarabe-x-500ml",
    "nombre": "Gland prot jarabe x 500ml",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "35.000",
    "descripcion": "Ayuda en el manejo y la prevención de la hiperplasia prostática benigna, en la prostatitis de origen infeccioso y en las uretritis siendo también coadyuvante en tratamientos para combatir alteraciones prostáticas, brindando una acción diurética. sin olvidar que la caléndula brindan un efecto asntiinflamatorio y colerético que estimula la salida de bilis hacia el tracto digestivo y mejora así la digestión."
  },
  {
    "slug": "glidit-jarabe-x-500ml",
    "nombre": "Glidit jarabe x 500ml",
    "categoria": "Sistema endocrino",
    "categoriaSlug": "sistema-endocrino",
    "precioTexto": "35.000",
    "descripcion": "El extracto de fruto de chontaduro, de quinua y moringa, estimulan las funciones pancreáticas, optimizando la producción de insulina. ideal para el sistema digestivo e inmunológico ya que contiene grandes cantidades de flavonoides. incluyendo quercetina y kaempferlo, potentes antioxidantes vegetales con numerosos beneficios para la salud. glidit mezcla otros elementos permitiéndole a este una acción hipoglucemiante (disminuye los niveles de glucosa (azúcar) en la sangre.)"
  },
  {
    "slug": "gnaphalium-x-30-ml",
    "nombre": "Gnaphalium x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "*dolor nervioso: recomendado para el tratamiento de dolores neurálgicos, especialmente aquellos que están asociados con el nervio ciático. alivia el dolor, el entumecimiento y el hormigueo. *dolor de espalda baja: es útil para aliviar el dolor de espalda baja, especialmente cuando el dolor está relacionado con problemas en los discos intervertebrales o compresión de los nervios espinales. *dolor en las extremidades inferiores: se ha utilizado tradicionalmente para aliviar el dolor en las piernas y los pies, especialmente cuando se presenta como sensaciones de quemazón o dolor lancinante *trast..."
  },
  {
    "slug": "grabiola-polvo-x-1000gr",
    "nombre": "Grabiola polvo x 1000gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "99.000",
    "descripcion": "-aporta hidratos de carbono, proporciona mucha energía al organismo, vitamina c, fibra, potasio, calcio y magnesio. -es antimicrobiano, por lo que previene de las infecciones bacterianas, parasitarias y fúngicas, estimula la digestión -actua contra el cáncer de mama, colon, ovarios, linfático, tiroideo, hígado, próstata, páncreas, riñon y pulmones."
  },
  {
    "slug": "gualasan-jarabe-x-500ml",
    "nombre": "Gualasan jarabe x 500ml",
    "categoria": "Sistema linfático",
    "categoriaSlug": "sistema-linfatico",
    "precioTexto": "35.000",
    "descripcion": "Este antibiótico natural ayuda a prevenir y combatir infecciones de origen bacteriano a nivel sistématico (en cualquier tejido del cuerpo) funciona como depurativo de la sangre y es un coadyuvante en el manejo del acné. combinado con el concentrado del col, brinda una excelente fuente de vitamina c, fibra y potasio, ya que ésta contiene más niveles de vitamina c que la misma naranja. es rica en azufre, calcio, nitrógeno, yodo y varios minerales."
  },
  {
    "slug": "hamamelis-x-30-ml",
    "nombre": "Hamamelis x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Trata afecciones de venas varicosas -favorece la circulación de la sangre -ayuda a la cicatrización de úlceras varicosas -útil en casos de hemorroides -disminuye flebitis edemas y dolor -recupera lesiones cutáneas leves"
  },
  {
    "slug": "hecla-x-30-ml",
    "nombre": "Hecla x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Previene afecciones óseas que se presentan repetidamente como las inflamaciones de los huesos -dolor de cadera -hinchazón ósea dolorosa, sensible al tacto y la presión -dolor de cabeza crónico y vértigo"
  },
  {
    "slug": "hepar-x-30-ml",
    "nombre": "Hepar x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Útil para tratar sinusitis, amigdalitis y bronquitis, especialmentecuando hay secreciones espesas, amarillas o verdes, tos y dolor agudo alivia el dolor y la inflamación asociada con infecciones dentales, como abscesos dentales eficaz en casos de otitis media aguda, actúa en el dolor punzante en el oído y secreción amarillentas promueve la curación de infecciones de la piel, como forúculos, abscesos y acné con pus."
  },
  {
    "slug": "hepflex-jarabe-x-240ml",
    "nombre": "Hepflex jarabe x 240ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "20.000",
    "descripcion": "Aporta una gran cantidad de antioxidantes buen regulador de los niveles de colesterol malo en la sangre tiene una accion antiviral, diurética, anticancerígena, vasodilatadora, antiinflamatoria, depurativa, antibacteriana e hipoglucemiante. sus propiedades depurativas ayudan a eliminar el ácido úrico y otras sustancias de desechos. ayuda en la estimulación de la producción de jugos gástricos, mejorando la digestión y regulando el azúcar en la sangre."
  },
  {
    "slug": "heplop-jarabe-x-500ml",
    "nombre": "Heplop jarabe x 500ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "Permiten la activación de la función enzimática del hígado, ayudando a optimizar el metabolismo hepático de las grasas, funcionan como drenador hepático, antimigrañoso y sirven como coadyuvante en el tratamiento de dislipidemia mixta (colesterol y triglicéridos altos), síndrome de intestino irritable y gastritis. heplop contiene fosforo, hierro, magnesio, calcio y potasio, así como diversas vitaminas, entre las que destacanla vitamina b1 y la vitamina c."
  },
  {
    "slug": "hepzul-jarabe-x-500ml",
    "nombre": "Hepzul jarabe x 500ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "Ayuda a disminuir la distensión abdominal y a expulsar toxinas. aporta una gran cantidad de antioxidantes. tiene propiedades depurativas que ayudan a eliminar el ácido úrico. estimula la produccion de jugos gástricos. mejora la digestion y regula los niveles de glucosa en la desaceleración de la subida de azúcar en la sangre después de comer."
  },
  {
    "slug": "higkol-jarabe-x-240ml",
    "nombre": "Higkol jarabe x 240ml",
    "categoria": "Sistema endocrino",
    "categoriaSlug": "sistema-endocrino",
    "precioTexto": "20.000",
    "descripcion": "-ayudan a regular los niveles de glucosa en la desaceleración de la subida del azúcar en la sangre después de comer. -evita los puntos altos de insulina y el almacenamiento de grasa resultante. -ayuda en el aumento de la secreción de la bilis y estimula su flujo -tiene elementos que estimulan las funciones pancreáticas, optimizando la produccion de insulina, la cual es buena para el sistema digestivo e inmunológico -ayuda a tener una digestión más fácil y rápida"
  },
  {
    "slug": "hypericum-x-30-ml",
    "nombre": "Hypericum x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Trata la depresión leve a moderada favorece equilibrio mental controla la ansiedad grave indicado en trastornos del sistema nervioso disminuye síntomas de la menopausia analgésico y antiinflamatorio."
  },
  {
    "slug": "improceluvit-terapia-x-20-dosis",
    "nombre": "Improceluvit terapia x 20 dosis",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "150.000",
    "descripcion": "Los embriones de pato aportan nutrientes y ácidos nucleicos beneficiosos para el envejecimiento prematuro. contienen vitaminas a, c, d, e; proteínas y minerales como calcio, fósforo y magnesio. además, al agregar el complejo b se obtiene un alimento de gran ayuda para personas con deficiencias de salud, independientemente de la edad."
  },
  {
    "slug": "iris-x-30-ml",
    "nombre": "Iris x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Trata variedad de dolencias: -dolor de cabeza -dolor menstrual -dolor articular útil en trastornos digestivos: -náuseas -vómitos"
  },
  {
    "slug": "ironat-tarro-x-350gr",
    "nombre": "Ironat tarro x 350gr",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "120.000",
    "descripcion": "La pérdida de libido en hombres y mujeres obedece a muchos factores, en los hombres, la mayoría son fisiológicos, por agotamiento, enfermedades crónicas como diabetes o híper lipidemia (colesterol y triglicéridos altos), en cambio en las mujeres, la mayor razón en el estrés. hay estudios ancestrales que muestran como el chontaduro por su aporte de l- arginina energiza el cuerpo, borojó que también nos da aminoácidos y guaraná es gran energizante, ironat es un alimento que aporta todos los beneficios de estos frutos, libre de azúcar."
  },
  {
    "slug": "jabon-de-arroz",
    "nombre": "Jabon de arroz",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "Poderoso humectante natural por lo que mantiene la piel suave y tensa, a la vez, sus propiedades antiinflamatorias ayudan a reducir la inflamación y el enrojecimiento de la piel y calma las irritaciones como tónico natural. se puede utilizar en todas las pieles, aún en las sensibles. es aclarante y agrega un brillo húmedo a la piel."
  },
  {
    "slug": "jabon-de-avena-x-120gr",
    "nombre": "Jabon de avena x 100gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "Poderoso humectante natural por lo que mantiene la piel suave y tensa, a la vez, sus propiedades antiinflamatorias ayudan a reducir la inflamación y el enrojecimiento de la piel y calma las irritaciones como tónico natural. se puede utilizar en todas las pieles, aún en las sensibles. es aclarante y agrega un brillo húmedo a la piel."
  },
  {
    "slug": "jabon-de-azufre-x-120gr",
    "nombre": "Jabon de azufre x 100gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "Su uso más popular es para el cuidado de las pieles grasas y con tendencia al acné. el jabón de azufre combate las bacterias y hongos, dejando la piel libre de impurezas, regula la producción de sebo y evita la obstrucción de los poros. el jabón de azufre cuenta con propiedades exfoliantes que eliminan las células muertas, mejorando el aspecto y tono de la piel. rejuvenece la piel. las propiedades queratolíticas promueven la formación de queratina y colágeno en la piel, dos compuestos claves que aportan firmeza y elasticidad al rostro"
  },
  {
    "slug": "jabon-de-calendula-x-120gr",
    "nombre": "Jabon de calendula x 100gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "La caléndula posee un gran poder cicatrizante y antiséptico, además de regenerar la piel y producir colágeno, por lo que es muy recomendable para curar heridas, tratar cicatrices, pies y manos agrietadas, pieles quemadas o con acné, úlceras bucales y eccemas."
  },
  {
    "slug": "jabon-de-canela-x-120gr",
    "nombre": "Jabon de canela x 120gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "Ayuda a remover y eliminar las celulas muertas de la piel, y minimiza los poros. las enzimas naturales que contiene ayudan a disminuir las manchas ocasionadas por el sol, y su uso constante evita la aparicion de nuevas de esas desagradables marcas. combate el envejecimiento de la piel porque tiene poder antioxidante."
  },
  {
    "slug": "jabon-de-coco",
    "nombre": "Jabon de coco",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "El coco es muy hidratante e ideal para pieles secas. el coco en el rostro ha demostrado un gran poder de hidrataci?n, sobre todo en el caso de cutis secos y agrietados. el coco ayuda a hidratar la piel y a restaurar su barrera natural para retener la humedad. es rico e y minerales (potasio, f?sforo, magnesio, hierro y vitaminas e, c, y b) es antioxidantes."
  },
  {
    "slug": "jabon-de-leche-de-cabra-x-120gr",
    "nombre": "Jabon de leche de cabra x 100gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "Su alta capacidad humectante ayuda a mantener la piel suave e hidratada. rico en vitaminas y minerales, nutre la piel y promueve la regeneración celular. ideal para pieles sensibles y propensas a alergias, ya que es menos irritante que otros jabones. contiene ácidos lácticos que ayudan a eliminar células muertas sin irritar la piel. ayuda a combatir bacterias, lo que puede ser beneficioso para pieles con problemas como el acné."
  },
  {
    "slug": "jabon-de-ortiga-x-120gr",
    "nombre": "Jabon de ortiga x 100gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "Juega un papel importante en la eliminación del acné adolescente. previene la formación de caspa en el cabello y también elimina el acné en el cabello. regula la producción de sebo y evita la obstrucción de los poros limpia las impurezas de la sangre y otros humores corporales"
  },
  {
    "slug": "jabon-de-papaya-x-120gr",
    "nombre": "Jabon de papaya x 100gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "Gracias a sus extractos naturales, es relajante, ayuda al rejuvenecimiento de las células, proporciona textura, firmeza y suavidad en la piel. - la papaya tiene un efecto hidratante y tiene una acción antienvejecimiento. es una fruta particularmente valiosa porque contiene muchas vitaminas, incluidas las vitaminas a, e y c, así como antioxidantes que combaten los radicales libres y, por lo tanto, ayudan a mantener la piel joven. gracias a sus extractos naturales, es relajante, ayuda al rejuvenecimiento de las células, proporciona textura, firmeza y suavidad en la piel. - tiene un efecto hidrat..."
  },
  {
    "slug": "jabon-de-tierra-x-120gr",
    "nombre": "Jabon de tierra x 100gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "Limpia y exfolia la piel, fortalece el folículo piloso del cabello y la barba, es ideal para tratar la caspa y el cabello graso. además, humecta la piel y el acné. es cicatrizante, gracias al alto contenido que tienen de sílice, aluminio y zinc. gracias a sus propiedades antisépticas, resulta un buen remedio natural para limpiar heridas y evitar posibles infecciones. es un exfoliante natural."
  },
  {
    "slug": "jabon-sangre-de-d-calend-x-120-gr",
    "nombre": "Jabon sangre de d. + calend x 100 gr",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "La caléndula posee un gran poder cicatrizante y antiséptico, además de regenerar la piel y producir colágeno, por lo que es muy recomendable para curar heridas, tratar cicatrices, pies y manos agrietadas, pieles quemadas o con acné, úlceras bucales y eccemas. los beneficios de la sangre de drago están más que probados para la piel. no solo tiene un efecto curativo demostrado en las heridas, es antimicrobiano y forma una capa protectora sobre la epidermis, ayudando a mantener alejados los microorganismos patógenos, sino que también es un ingrediente codiciado para mantener la juventud durante m..."
  },
  {
    "slug": "jabon-sangre-de-drago",
    "nombre": "Jabon sangre de drago",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "10.000",
    "descripcion": "La sangre de drago se usa externamente como un medicamento tópico para mejorar la curación de las heridas los beneficios de la sangre de drago están más que probados para la piel. no solo tiene un efecto curativo demostrado en las heridas, es antimicrobiano y forma una capa protectora sobre la epidermis, ayudando a mantener alejados los microorganismos patógenos, sino que también es un ingrediente codiciado para mantener la juventud durante más tiempo. sus propiedades antioxidantes y la capacidad para generar más colágeno natural."
  },
  {
    "slug": "kamastron-jarabe-x-500ml",
    "nombre": "Kamastron jarabe x 500ml",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "45.000",
    "descripcion": "Por su gran cantidad de carbohidratos, el borojo resulta apropiado para personas que tienen gran actividad fisica, ya que puede proporcionar la energia necesaria para recuperarse del desgaste fisico ya sea por agotamiento o por la actividad sexual, ademas, contiene fumarato ferroso y extracto de malta que ayudan a restablecer los depositos de hierro rn rl organismo y a estimular la vigorosidad o el crecimiento muscular"
  },
  {
    "slug": "kamastron-polvo-x-500gr",
    "nombre": "Kamastron polvo x 500gr",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "140.000",
    "descripcion": "El estrés diario, los horarios inadecuados para descansar y alimentarse causan diferentes disfunciones. consumir alimentos que aporten nutrientes para energizar el cuerpo de manera natural es importante. kmastron combina los beneficios energéticos del borojo y la maca, mejorando la vitalidad y la salud con l-arginina, flavonoides, fósforo y más."
  },
  {
    "slug": "kerbo-fibra-x-600gr",
    "nombre": "Kerbo fibra x 600gr",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "60.000",
    "descripcion": "El salvado de trigo es rico en hierro, la pitaya, el noni y la linaza contienen proteina, vitaminas del complejo b y e, acido folico, tiamina, minerales, como fosforo, zinc, selenio, potasio, hierro y sodio. el noni deshidratado promuve la regeneracion celular, mejora las dfensas, favorecem el transito intestinal y funciona como reparadora y protectora de la muosa intestinal. kerbo fibra aporta estas fibras, ayudando a controar los niveles de azucar, esta libre de preservantes."
  },
  {
    "slug": "kid-shake-polvo-x-400gr",
    "nombre": "Kid shake polvo x 400gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "55.000",
    "descripcion": "Alimento natural multitamínico para niños. contiene dha, que contribuye al desarrollo cognitivo y el cerebro, refuerza la visión, combate la desnutrición, mejora la concentración y el aprendizaje, abre el apetito, estiula el sistema inmunológico y crecimiento. es importante aumentasr el consumo de proteína, frutas ricas en fibra, verduras, mantenerse bien hidratado, hacer ejercicio diario y descansar adecuadamente para evitar el estrés."
  },
  {
    "slug": "lachesis-complex-x-30-ml",
    "nombre": "Lachesis complex x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "*tratamiento complementario de la menopausia *disminuye los s?ntomas durante el per?odo menstrual *ayuda en el tratamiento de hemorroides *indicado en trastornos circulatorios"
  },
  {
    "slug": "lagoxin-nio-x-60ml",
    "nombre": "Lagoxin niño x 60ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "20.000",
    "descripcion": "El consumo de frutas se asocia con una disminución del riesgo de padecer obesidad hipertensión enfermedades cardiovasculares o algunos tipos de cáncer para eso se debe tener en cuenta la acción diurética de la pulpa de la papaya la acción desintoxicante y laxante de la pulpa de la ciruela."
  },
  {
    "slug": "lim-est-jarabe-x-360ml",
    "nombre": "Lim-est jarabe x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "30.000",
    "descripcion": "Estimulante de la salud de higado, hepato protector, desintoxicante, actua en el higado graso y potencializa la funcion hepatica, coleretico y colagogo, mejora la flatulencia, el color amarillento, el sabor amargo en la boca y minimiza los da?os que producen algunos medicamentos al higado. gran antioxidate que previenme el dterioro de las celulas, en el caso del higado previniendo cirrosis o deterioro de sus funciones. ayuda en el control de los niveles de colesterol y trigliceridos."
  },
  {
    "slug": "linaza-con-ahuyama-en-tarro-x-500gr",
    "nombre": "Linaza con ahuyama en tarro x 500gr",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "29.000",
    "descripcion": "De la linaza se extrae un aceite vegetal que es uno de los aceites mas saludables que existen. como alimento en polvo tambien es muy saludable, gracias a que contiene una alta cantidada de fibra dietetica, acidos grasos del tipo omega 3 y omega 9. la linaa con ahuyama combian los beneficios de la pitahaya, papaya, ciruela, piña y ajo. el ideal para diabeticos al ser endulzado con stevia, e impide la acumulacion de colesterol en sangre, permitiendo su eliminacion por vias naturales."
  },
  {
    "slug": "linaza-con-ciruela-manzana-x-500gr",
    "nombre": "Linaza con ciruela, manzana x 500gr",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "29.000",
    "descripcion": "Los beneficios de la manzana, la piña y la ciruela son muy importantes, la ciruela tiene un alto contenido de minerales y aporta propiedades laxantes, combinado con la piña contribuyen a reducir la inflamacion intestinal. la manzana ayuda a reducir el colesterol en la sangre y evita que se acumule en las paredes de los vasos sanguineos, es un alimento ideal para diabéticos al ser endulzado con stevia."
  },
  {
    "slug": "linaza-con-te-verde-x-500gr",
    "nombre": "Linaza con te verde x 500gr",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "29.000",
    "descripcion": "La combinacion de la linaza en polvo y el té verde, brinda propiedades saciantes y depurativas, lo que ayuda en el control del sobrepeso, regulando el apetito gracias a la sensación de llenura que produce. sin encionar que gracias a que posee un tipo de fibra evita la absorcion de azúcar y grasas en el organismo, este es un alimento ideal para diabéticos al ser endulzada con stevia."
  },
  {
    "slug": "llenodig-jarabe-x-500ml",
    "nombre": "Llenodig jarabe x 500ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "La piña, la papaya y la pitahaya, nos ayuda a digerir los alimentos, nos meora la mala digestión, tonificando la musculatura intestinal, disminuyendo la acumulación de heces y por ende los gases que causan todas estas molestias. llenodig es una bebida con el aporte de estos frutos, ideal para nuestro colon."
  },
  {
    "slug": "loba-loba-jarabe-x-500ml",
    "nombre": "Loba loba jarabe x 500ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "La flata de oxígen en la sangre no solo se puede interpretar como anemia se produce tambien por deficiencia en la circulación, acumulación de colesterol ldl y vasoconstricción estos síntomas son causantes de migraña, enfermedades coronarias y diferentes afecciones el consumo de alimentos que contengan omega 3 ayudan a prevenir. loba loba aporta estos nutrientes permitiendo así la dismiución de la perdida de la memoria e infartos, es apto para tratamientos de alzhéimer"
  },
  {
    "slug": "locion-capilop-capilar-unisex",
    "nombre": "Locion capilop capilar unisex",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "55.000",
    "descripcion": "Nutre y fortalece la raíz del cabello, prepara el cabello nuevo y previene su caída. por su fórmula exclusiva de alta concentración de extractos naturales, es el producto ideal para un tratamiento más efectivo."
  },
  {
    "slug": "luffa-oper-6ch",
    "nombre": "Luffa oper 6ch",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "30.000",
    "descripcion": "-coadyuvante para tratar los síntomas ocasionados por: -rinitis -sinusitis -picor nasal -obstrucción nasal -dolor de garganta -analgésico -antiinflamatorio medicamento homeopático doadyudante en el tratamiento de enfermedades agudas, alegias y quejas crónicas recurrentes. luffa operculata spray es ideal para la congestión nasal y sinusitis, sobre todo cuando está causada por pólipos nasales. también ayuda en enfermedades infecciosas estimulando el sistema inmunológico e impulsando la curación, inflamaciones agudas; mucosa respiratoria y alergias respiratorias."
  },
  {
    "slug": "max-man-x500ml",
    "nombre": "Max man x500ml",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "38.900",
    "descripcion": "La proteína de soya, combinada con otros ingredientes, puede ser beneficiosa para quienes buscan mejorar su rendimiento físico. combinando ingredientes como maca, remolacha y uva, proporcionar un impulso natural de energía. con la presencia de antioxidantes y nutrientes de ingredientes como la mora, espinaca y moringa, ayuda a fortalecer las defensas del cuerpo. aporta nutrientes claves para la salud cardiovascular, digestiva y la regulación hormonal. ¡no apto para menores de edad, mujeres en estado de embarazo y/o lactancia!"
  },
  {
    "slug": "megatrin-polvo-x-1000gr",
    "nombre": "Megatrin polvo x 1000gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "99.000",
    "descripcion": "La guayaba brinda proteínas y carbohidratos, es rica en vitaminas a, e, d12 y especialmente en vitamina c es rico en hierro, cobre, calcio, magnesio, potasio, manganesio y fósforo co-ayudante en el tratamiento para niños y personas con problema de bajo peso ayuda a reducir el colesterol malo y a disminuir el riesgo de padecer enfermedades por desnutrición o enfermedades del sistema nervioso como el alzheimer e infecciones."
  },
  {
    "slug": "memiver-jarabe-x-360ml",
    "nombre": "Memiver jarabe x 360ml",
    "categoria": "Sistema nervioso",
    "categoriaSlug": "sistema-nervioso",
    "precioTexto": "35.000",
    "descripcion": "Los polifenoles son ingredientes capaces de aportar una dosis de antioxidantes que provoca efectos beneficiosos par el organismo como son la reduccion e colesterol,la proteccion antioxidante 10 veces superior al consumo de vitamina c. son especialmente utiles a la hora de prevenir enfermedade cardiovasculares, lo que previene la perdida de la memoria. memiver es ideal para el desarrollo cerebral y el rendimiento inteletual"
  },
  {
    "slug": "moring-vit-cap-x-500gr",
    "nombre": "Moring vit cap x 500gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "55.000",
    "descripcion": "La moringa o árbol de la vida es parte de nuestra alimentación y nutrición diaria, debido a la cantidad y concentración de micronutrientes que encontramos en sus hojas como calcio, hierro, fosforo, potasio, antioxidantes, aminoácidos y vitaminas del complejo b; además sus hojas nos aportan grandes concentraciones de proteína; en esta bebida tambien podemos aprovechar los nutrientes del chontaduro, la quinua y almendras, logrando una buena combinación nutricional"
  },
  {
    "slug": "morinverd-jarabe-x-500ml",
    "nombre": "Morinverd jarabe x 500ml",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "35.000",
    "descripcion": "La combinacion del chontaduro, quinua, almendra y moringa, lo hacen un perfecto estimulante del sistema inmunologico, aumentando las celulas de defensa que viajan en la sangre, combatiendo enfermedades, especialmente las de origen infeccioso ( virus, bacterias, hongos), ademas favorece la regeneracion celular a nivel general, fortaleciendo las interconexiones neuronales, regula el azucar en la sangre y brinda acciones antiinflamatorias."
  },
  {
    "slug": "musrrel-jarabe-x-360ml",
    "nombre": "Musrrel jarabe x 360ml",
    "categoria": "Sistema muscular",
    "categoriaSlug": "sistema-muscular",
    "precioTexto": "35.000",
    "descripcion": "El consumo de atún es beneficioso para deportistas debido a su alto contenido en omega 3, bajo en agua, triptófano, vitamina b6 y ácidos grasos poliinsaturados. ayuda en la recuperación muscular y combate el insomnio."
  },
  {
    "slug": "nanja-x-30-ml",
    "nombre": "Nanja x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Ayudan con la la angina de pecho, la insuficiencia cardíaca y las palpitaciones. ayuda a regularizar el ritmo cardíaco y fortalecer la función cardíaca. beneficioso para aliviar la ansiedad, el estrés y los trastornos emocionales, alivia los dolores musculares, articulares y dolores de cabeza intensos, en algunos casos ayuda a tratar trastornos respiratorios como el asma o la bronquitis."
  },
  {
    "slug": "naturgrass-jbe-x-500-ml",
    "nombre": "Naturgrass jbe x 500 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "27.000",
    "descripcion": "Desintoxica y limpia el h?gado, ayuda a la perdida de peso, acompa?ado de una rutina de ejercicios y una buena alimentaci?n, te servir? como un complemento ideal para lograr tus objetivos propuestos."
  },
  {
    "slug": "nutrabrand-x-1000-ml",
    "nombre": "Nutrabrand x 1000 ml",
    "categoria": "Sistema nervioso",
    "categoriaSlug": "sistema-nervioso",
    "precioTexto": "40.000",
    "descripcion": "Aumenta la formacion de glóbulos rojos. ayuda en el control muscular. refuerza las funciones del cerebro y el sistema nervioso."
  },
  {
    "slug": "nutriflex-jbe-x-500-ml",
    "nombre": "Nutriflex jbe x 500 ml",
    "categoria": "Sistema articular",
    "categoriaSlug": "sistema-articular",
    "precioTexto": "27.000",
    "descripcion": "Ayuda a mejorar los dolores articulares y musculares apoyo en problema de artritis artrosis inflamaciones, articulares contiene sustancias denominadas amino?cidos electrolitos que son esenciales para el crecimiento o para la recuperaci?n del organismo tambi?n contiene calor?as en forma de carbohidratos."
  },
  {
    "slug": "nuxvomica-x-30-ml",
    "nombre": "Nuxvomica x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Útil en trastornos gastrointestinales favorece la detoxificación hepática reduce la distensión abdominalindicado en casos de estreñimiento disminuye espasmos intestinales refuerza el funcionamiento del sistema digestivo."
  },
  {
    "slug": "omega-3-x-1000-mg-100caps",
    "nombre": "Omega 3 x 1000 mg 100caps",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "55.000",
    "descripcion": "Este suplemento dietario aporta una gran concentracion de omega 3 por cada capsula,lo que a su vez se divide en epa y dha, ayudando a eliminar placas de grasa (colesterol malo o ldl) y de esta manera disminuir el riego de las enfermedades coronarias, generando un efecto antiinflamatorio que podria ser beneficioso para la prevencion de enfermedades articulares. omega 3, ayuda a disminuir el riesgo de estas enfermedades permitiendo mejorar la capacidad de aprendizaje y memoria."
  },
  {
    "slug": "petiov-ig-jarabe-x1200ml",
    "nombre": "Petio vig jarabe x120ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "El hierro es un factor de glóbulos rojos, el magnesi promueve la absorción y retención de calcio, la vitamina b1 es necesaria para la obtención de enrgía a partir de carbohidratos, la vitamina b2 es necesaria para la obtención de energía a partir de las proteínas,grasas, y carbohidratos, la niacina es necesaria para la obtención de energía a partir de las proteínas, grasa y carbohidratos. la vitamina b12 es necesaria para la producción de glóbulos rojos."
  },
  {
    "slug": "plata-coloidal",
    "nombre": "Plata coloidal",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "La plata coloidal ah sido utilizada como antibiotico. la plata coloidal se le atribuyen tambien propiedades antifungicas, antisepticas, antiinflamatorias y antivirales, por lo que se utiliza sobre todo para tratar enfermedades virales o infecciones."
  },
  {
    "slug": "prosc-jarabe-x-360ml-pro-nat",
    "nombre": "Pro-nat jarabe x 360ml",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "25.000",
    "descripcion": "Un alimento apto para diabeticos, sus componentes mejoran las infecciones de la prostata causadas por bacterias, en prostatitis cronica o aguda, hiperplasia benigna de la prostata, la cual se presenta con frecuencia en los hombres mayores, definflama y relaja el musculo permitiendo desbloquear la uretra y hacer mas facil el orinar, ayuda a disminuir el dolor; es importante aumentar el consumo de proteina, frutas ricas en fibra, verduras, mantenerse bien hidratado, hacer ejercicio diario y dormir."
  },
  {
    "slug": "propolcruz-jalea-x-300ml",
    "nombre": "Propolcruz jalea x 300ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "25.000",
    "descripcion": "El propóleo es una sustancia fabricada por las abejas a partir de las yemas y resinas de los árboles, que utilizan para sellar las colmenas y defenderse de virus y bacterias. propolcruz es un alimento en jalea que aporta sus beneficios, pero no es recomendable para diabéticos."
  },
  {
    "slug": "propolverd-adulto-x-240ml",
    "nombre": "Propolverd adulto x 240ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "22.000",
    "descripcion": "Ya hemos hablado de las maravillas del propóleo, llamado antibiótico natural, ahora hablemos del marañón y la vitamina c en la salud de las infecciones de vías respiratorias el marañón es broncodilatador y expectorante, evita que las flemas se acumulen y causen complicaciones en cualquier resfriado común, además el polen es un alimento con beneficios nutricionales que favorecen la respuesta del sistema inmune. propolverd es un alimento importante que aporta los beneficios de estos compuestos naturales. no deben consumirlo las personas diabéticas."
  },
  {
    "slug": "prosberry-jbe-x-500-ml",
    "nombre": "Prosberry jbe x 500 ml",
    "categoria": "Sistema urinario",
    "categoriaSlug": "sistema-urinario",
    "precioTexto": "27.000",
    "descripcion": "Gracias a sus altas concentraciones de antioxidantes y vitamina c, ayuda a proteger el tracto urinario de la adherencia de bacterias, v?as urinarias, pr?stata inflamada. ?til en la prevenci?n y tratamiento de infecciones urinarias. gracias a sus altas concentraciones de antioxidantes y vitamina c, ayuda a proteger el tracto urinario de la adherencia de bacterias, v?as urinarias, pr?stata inflamada. ?til en la prevenci?n y tratamiento de infecciones urinarias."
  },
  {
    "slug": "prost-san-x-60-cap-saw-palmetto",
    "nombre": "Prost-san x 60 cap saw palmetto",
    "categoria": "Sistema urinario",
    "categoriaSlug": "sistema-urinario",
    "precioTexto": "45.000",
    "descripcion": "Ayuda a tratar los síntomas de la próstata inflamada. ayuda con molestias y dificultad al orinar. tiene propiedades diuréticas. protege el tejido de la glándula prostatica, evitando inflamación y disfunción."
  },
  {
    "slug": "prostcruz-jarabe-x-360ml",
    "nombre": "Prostcruz jarabe x 360ml",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "35.000",
    "descripcion": "La combinación de uva y tomate, brindan un efecto diurético beneficioso en caso de hiperuricemia o gota y litiasis renal ayudando a eliminar el ácido úrico y sus sales, hipertensión arterial y otras enfermedades associadas a la retención de líquidos. sus componentes ayudan a combatir infecciones de la próstata, causada por bacterias. en prostatitis crónica o aguda, hiperplasia benigna de la próstata, la cual se presenta con frecuencia en los hombres mayores, desinflamamdo el músculo y desbloqueando la uretra"
  },
  {
    "slug": "pulsatilla-x-30-ml",
    "nombre": "Pulsatilla x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "-indicado para personas que son emocionales, sensibles, y que pueden experimentar cambios de humor frecuentes -trastornos menstruales: se utiliza en casos de irregularidades menstruales, síndrome premenstrual -muy útil en casos de depresión, insomnio y migraña -ayuda igualmente en la digestión, al reducir la acidez y la hinchazón abdominal."
  },
  {
    "slug": "pyrcol-jarabe-x-360ml",
    "nombre": "Pyrcol jarabe x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "La manzana ayuda a reducir el colesterol en la sangre, y evita que se acumule en las paredes de los vasos sanguíneos. la zanahoria es rica en betacaroteno, tambien llamado rpovitamina a o vitamina a. estos compuestos reparan las células dañadas por los efectos ambientales, y así fortalecen y revitalizan las uñas y el pelo. este aporta fibra dietaría, ideal para el estreñimineto y el tránsito lento."
  },
  {
    "slug": "rabayod-x-360ml",
    "nombre": "Rabayod x 360ml",
    "categoria": "Adelgazantes",
    "categoriaSlug": "adelgazantes",
    "precioTexto": "25.000",
    "descripcion": "La combinacion de rabano y sal yodada, favorece nuestro sistema al brindar una funcion diuretica que estimula la desictoxicacion del cuerpo a traves del aumento de miccion. de esta manera, ayuda a liberar los liquidos rtendos, favoreciendo la perdida de peso; puede mejorara notabemente las funciones del cerebro como la memoria, la concentracion y la capacidad de aprender. no apto para personas con hipertiroidismo, ni embarazo."
  },
  {
    "slug": "radix-jarabe-x-360ml",
    "nombre": "Radix jarabe x 360ml",
    "categoria": "Sistema linfático",
    "categoriaSlug": "sistema-linfatico",
    "precioTexto": "35.000",
    "descripcion": "La combinacion de rabano y sal yodada, favorece nuestro sistema al brindar una funcion diuretica que estimula la desictoxicacion del cuerpo a traves del aumento de miccion. de esta manera, ayuda a liberar los liquidos rtendos, favoreciendo la perdida de peso; puede mejorara notabemente las funciones del cerebro como la memoria, la concentracion y la capacidad de aprender. no apto para personas con hipertiroidismo, ni embarazo."
  },
  {
    "slug": "rauwolfia-x-30-ml",
    "nombre": "Rauwolfia x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "La rauwolfia contiene alcaloides como la reserpina, que pueden reducir la presión arterial al disminuir la actividad del sistema nervioso simpático y promover la relajación de los vasos sanguíneos. también se ha sugerido que podría ayudar en el tratamiento de trastornos del sueño, como el insomnio, debido a sus propiedades sedantes y ansiolíticas."
  },
  {
    "slug": "rd-green-x-90cap-combo-lipox",
    "nombre": "Rd green x 90cap combo lipox",
    "categoria": "Adelgazantes",
    "categoriaSlug": "adelgazantes",
    "precioTexto": "75.000",
    "descripcion": "El psyllium es conocido por eliminar grasas a través de la evacuación de heces, la berenjena y el cromo aceleran el metabolismo, el té verde es diurético y juntos generan saciedad al comer. rd green es un suplemento dietario que combina estos nutrientes, mejorando la expulsión de líquidos y toxinas del organismo."
  },
  {
    "slug": "renaver-jarabe-x-500ml",
    "nombre": "Renaver jarabe x 500ml",
    "categoria": "Sistema urinario",
    "categoriaSlug": "sistema-urinario",
    "precioTexto": "39.000",
    "descripcion": "La función renal es vital para desintoxicar el organismo y estabilizar los líquidos del cuerpo, ayuda a activar su función de limpiar las vías urinarias, si agregamos antioxidantes como los que aportan la berenjena, protegemos sus tejidos y aumentando el consumo de vitamina c disminuye la flora bacteriana, estos puntos son importantes para su cuidado y desempeño. este reúne las bondades de la berenjena y la vitamina c. fundamental en el manejo de la urolitiasis (cálculos renales), además tiene acción diurética."
  },
  {
    "slug": "resveratrol-x-500mg",
    "nombre": "Resveratrol x 500mg",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "30.000",
    "descripcion": "Mejorar la salud cardiovascular reducir el dolor y la hinchazón reducir los niveles de azúcar en la sangre ayudar a combatir el cáncer y el colesterol alto regular el proceso de envejecimiento natural proteger contra los radicales libres reducir los signos de la edad contrarrestar las arrugas prevenir la aparición de manchas en la piel mejorar la apariencia de los brotes de acné"
  },
  {
    "slug": "rino-discos-x-10-unidades",
    "nombre": "Rino discos x 10 unidades",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "45.000",
    "descripcion": "Mejora la vida sexual del hombre. formula 100% natural. actúa como retardante para aumentar la duración de la relación sexual. evita la eyaculación precoz. aumenta la duración de la erección. aumenta la sensibilidad y placer de ambos sexos durante la relación"
  },
  {
    "slug": "royven-jarabe-x-360ml",
    "nombre": "Royven jarabe x 360ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "Mantener una adecuada circulación ayuda a prevenir enfermedades cardiovasculares, nos protege de la aparición de venas varices y hemorroides, el consumo constante de uvas, es una gran alternativa gracias a sus componenetes antioxidantes que no solo protegen la elasticidsad de las venas, actúan también como vasodilatador y anticoagulantes, evitando la formación de trombos y mejoran la caslidad de vida. royven reúne los beneficios del extracto de uva, aportando a su cuerpo fitonutrientes"
  },
  {
    "slug": "sangritor-x-360ml",
    "nombre": "Sangritor x 500ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "Su concentrado de borojo, noni, extracto de ginkgo biloba, vitaminas b1, b2, b6, b12, acido folico, sulfato ferroso y otras sustancias de origen natural hacen de sngritor fundamental en el manejo de cuadros caracterizados por cansancio, somnolencia dierna, agotamiento fisico y mental debido a su accion energizante, optimiza la circulacion y oxigenacion cerebral, manteniendo y fomentando la plasticidad del tejido cerebral, adema de ser coadyuvante en el tratamiento de alzheimer y parkinson."
  },
  {
    "slug": "saw-palmetto-gotas-sublinguales",
    "nombre": "Saw palmetto gotas sublinguales",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "25.000",
    "descripcion": "Se ha usado en la medicina alternativa como una ayuda posiblemente eficaz para prevenir las complicaciones de cirugía de la próstata (como la pérdida de sangre o problemas durante la cirugía) y reducir el tiempo que permanece en cirugía y en el hospital después de la cirugía."
  },
  {
    "slug": "scorping-blue-grande",
    "nombre": "Scorping blue grande",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "135.000",
    "descripcion": "El consumo de vitaminas del complejo b, junto con la malta y maca, dar al organismo un estado de actividad y energia, para resistir arduas jornadas, ademas de ser de gran ayuda nutricional, por lotanto mejora la respuesta del sistema inmune, scorping en cualquiera de sus presentaciones, es una alternativa nutricional importante para el desempe?o diario."
  },
  {
    "slug": "scorping-blue-pequea",
    "nombre": "Scorping blue pequeña",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "95.000",
    "descripcion": "El consumo de vitaminas del complejo b, junto con la malta y maca, dar al organismo un estado de actividad y energía, para resistir arduas jornadas, además de ser de gran ayuda nutricional, por lotanto mejora la respuesta del sistema inmune, scorping en cualquiera de sus presentaciones, es una alternativa nutricional importante para el desempeño diario."
  },
  {
    "slug": "sedor-jarabe-x-360ml",
    "nombre": "Sedor jarabe x 360ml",
    "categoria": "Sistema nervioso",
    "categoriaSlug": "sistema-nervioso",
    "precioTexto": "35.000",
    "descripcion": "La lechuga es un alimento alcalimizantes, refrescasnte y remineralizante que tiene cualidades hipnóticas que ayudan a conciciliar el sueño y también analgésicas frente al dolor. presenta propiedades calmantes sobre la excitación nerviosa, que combinado con el cilantro brinda antioxidantes como los carotenoides, luteína, zeaxantina. además de aportar vitamina a, c, e, b6 y zinc, lo que ayuda a estimular las glándulas endocrinas."
  },
  {
    "slug": "shampoo-cola-de-c-emb-de-pato-y-manzanilla-x-250ml",
    "nombre": "Shampoo cola de c., emb. de pato y manzanilla  x 250ml",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "35.000",
    "descripcion": "Contiene silicio que fortalece el cabello reduce la sequedad y la descamación del cuero cabelludo ayuda a prevenir la caída del cabello propiedades astringentes que controlan la producción de grasa la manzanilla aclara naturalmente el cabello, resalta reflejos dorados en cabellos claros"
  },
  {
    "slug": "shampoo-biotina-y-colageno-x-250ml",
    "nombre": "Shampoo colageno y biotina x 250ml",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "35.000",
    "descripcion": "Fortalecimiento del cabello. estimulación del crecimiento. aumento del volumen. hidratación, brillo y apariencia saludable. especial para reparar el daño causado por el uso excesivo de herramientas térmicas y tratamientos químicos."
  },
  {
    "slug": "shampoo-ginseng-sabila-y-aloe-vera-x-250ml",
    "nombre": "Shampoo ginseng, sabila y aloe vera x 250ml",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "35.000",
    "descripcion": "*brillo y suavidad *hidrataci?n y nutrici?n *estimulaci?n del cuero cabelludo *control de la caspa *protecci?n contra da?os ambientales *reducci?n de la ca?da del cabello: fortalece el cabello desde la ra?z y mejora la salud del cuero cabelludo, ayudando a promover un cabello m?s fuerte y saludable"
  },
  {
    "slug": "shampoo-ortiga-calend-y-gualanday",
    "nombre": "Shampoo ortiga, calend y gualanday",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "35.000",
    "descripcion": "Contiene vitaminas a,c, y k, ademas minerales: hierro y silicio, que fortalecen el cabello. propiedades astringentes: limpieza profunda, especial para cabello graso aumento de brillo: aspecto mas saludable y radiante fortalece el cabello: los nutrientes presentes en la ortiga fortalecen el cabello, haciendolo menos propenso a la rotura y las puntas abiertas."
  },
  {
    "slug": "shampoo-romero-y-quina-x-250ml",
    "nombre": "Shampoo romero y quina x 250ml",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "35.000",
    "descripcion": "Estimulación del crecimiento del cabello. fortalecimiento del cabello. reducción de la caspa. hidratación y suavidad. estimulación del cuero cabelludo. aumento del volumen y densidad: el uso regular de shampoo de romero y quina da como resultado un cabello con más volumen y densidad, ya que fortalece los folículos capilares y promueve un crecimiento fuerte y saludable."
  },
  {
    "slug": "sin-3-jarabe-x-360ml",
    "nombre": "Sin 3 jarabe x 360ml",
    "categoria": "Sistema nervioso",
    "categoriaSlug": "sistema-nervioso",
    "precioTexto": "29.000",
    "descripcion": "Sus componentes naturales ayudan con el manejo del estres, la ansiedad, el insomnio, desasociego y palpitaciones. contribuyen a tranquilizar y manejar la depresion y sintomas emocionales de la menopausia, el trastorno obsesivo compulsivo y estacional. ayuda a calmar dolores cmo la migra?a, musculares, fibromialgia y el sindrome del intestino irritable. no produce dependencia y se debe aumentar el consumo de frutas y verduras ricas en fibra y proteina. mantengase bien hidratado y haga ejercicio a diario."
  },
  {
    "slug": "solpro-protector-solar",
    "nombre": "Sundark protector solar",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "44.000",
    "descripcion": "*contiene aloe vera, te verde y avena sativa, que otorgan a la piel todos los beneficios de los aceites esenciales y sustancias naturales ?tiles en el mantenimiento y cuidado de la piel. *contiene sustancias antioxidantes como las vitaminas a, e y c, adem?s de la alanto?na, humectantes excelentes, col?geno y la elastina, las que hacen que sundark, sea el protector solar ideal para utilizar a diario."
  },
  {
    "slug": "symcol-369-polvo-x-400gr",
    "nombre": "Symcol 3,6,9 polvo x 400gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "48.000",
    "descripcion": "Hoy encontramos diversidad en las personas hasta en la forma de alimentarse, los veganos y vegetarianos son una parte de nuestra población cada vez más creciente, quienes, por su manera de pensar, evitan o suspenden de manera radical todos los alimentos que provengan de fuente animal, por esta razón, el mercado ha desarrollado alimentos que suplan las necesidades pero que procedan de fuente vegetal precisamente es el caso del omega 3 de la linaza y onagra, son fuente vegetal y cumplen la misma función de los ácidos grasos omega 3 , se dividen en epa y dha, los cuales protegen la salud vascular..."
  },
  {
    "slug": "tapycs-jarabe-x-360ml",
    "nombre": "Tapycs jarabe x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "Las afecciones urinarias pueden causar afecciones crónicas como diabetes e insuficiencia renal, mejorar la alimentación es de vital importancia, así como aportar a la ingesta diaria suplementos nutricionales que mejoren su función como magnesio, fosforo, perejil, y apio, que cumplen un papel importante como diuréticos y desintoxicante, además de las bondades de la vitamina c por su acción antioxidante, protege los riñones y disminuye la flora bacteriana. tapycts está elaborado con estos nutrientes."
  },
  {
    "slug": "theredium-x-30-ml",
    "nombre": "Theredium x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "*trata v?rtigo y n?useas *neutraliza la hipersensibilidad nerviosa *disminuye s?ntomas de la intolerancia al ruido *reduce el dolor a nivel de las falsas costillas"
  },
  {
    "slug": "tirodium-x-50-ml",
    "nombre": "Tirodium x 50 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Coadyuvante en mejorar la función de la glándula tiroides. mejora el estado de animo: calma los sentimientos de inquietud y melancolía. trata los síntomas: baja de energía y metabolismo lento. efecto de calentamiento temporal en manos y pies fríos."
  },
  {
    "slug": "tonico-anticaspa",
    "nombre": "Tonico anticaspa",
    "categoria": "Dermo cosméticos",
    "categoriaSlug": "dermo-cosmeticos",
    "precioTexto": "55.000",
    "descripcion": "Especialmente indicado para prevenir y combatir la caspa, elimina las escamas que se forman en el cuero cabelludo, seborrea, hongos, controla el exceso de grasa reduce irritaciones del cuero cabelludo causadas por la caspa, contiene ingredientes que fortalecen el cabello, lo que ayuda a prevenir la caida del mismo."
  },
  {
    "slug": "tussolvin-x-120-ml",
    "nombre": "Tussolvin x 120 ml",
    "categoria": "Sistema respiratorio",
    "categoriaSlug": "sistema-respiratorio",
    "precioTexto": "20.000",
    "descripcion": "Expectorante: ayuda a expulsar las flemas, trata de manera natural las molestias ocasionadas por la tos favorece el sistema inmune: aumenta las defensas gracias al contenido de vitamina c, hierro y zinc antibiótico: ayuda a tratar infecciones de la garganta, ataca bacterias y virus de las vías respiratorias. útil en el tratamiento de la gripe, resfriado, amigdalitis, asma y alergias respiratorias"
  },
  {
    "slug": "ulcik-jarabe-x-500ml",
    "nombre": "Ulcik jarabe x 500ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "El extracto de fruto de kiwi, arazá, manzana y cebada deshidratada. son un gran aliado contra el estreñimiento gracias a su contenido de fibra soluble. su combinación favorece el sistema inmunitario y combate la anemia, evitando los resfriados y aumentando las defensas, gracias a la gran cantidad de ácido fólico y vitamina c. ulcik combina los beneficios de estos frutos permitiendo también un efecto antiinflamatorio y regulador de la mucosa gástrica, generando un proceso de cicatrización de las ulceras gástricas."
  },
  {
    "slug": "ulgax-jarabe-x-360ml",
    "nombre": "Ulgax jarabe x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "La combinación del brócoli, la nuez y la manzana, nos brinda varios antioxidantes únicos y poderosos para la eliminación de radicales libres ayudándonos a prevenir el daño de hígado inducido químicamente. también contiene múltiples nutrientes con potentes propiedades que brindan un alivio contra los gases y ayudan a prevenir el estreñimiento gracias a su gran contenido de fibra. ulgax combina estos beneficios con el aporte de magnesio, calcio, zinc y otras vitaminas, estimulando la producción de colágeno."
  },
  {
    "slug": "ultra-gold-x-908-gr",
    "nombre": "Ultra gold x 908 gr",
    "categoria": "Sistema muscular",
    "categoriaSlug": "sistema-muscular",
    "precioTexto": "89.000",
    "descripcion": "Proteina hidrolizada y aislada de suero de leche recomendada para deportistas que desean incrementar su fuerza, peso y volumen."
  },
  {
    "slug": "uranium-x-30-ml",
    "nombre": "Uranium x 30 ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "30.000",
    "descripcion": "Es muy eficaz para tratar la fatiga extrema, especialmente cuando se acompaña de debilidad, agotamiento y falta de energía. ayuda en el tratamiento de problemas renales, como nefritis o cálculos renales. útil en el tratamiento de trastornos relacionados con las glándulas, como problemas de tiroides, suprarrenales u otros desequilibrios glandulares. indicado en casos de síntomas urinarios como ardor al orinar, necesidad frecuente de orinar, etc."
  },
  {
    "slug": "uricox-jarabe-x-360ml",
    "nombre": "Uricox jarabe x 360ml",
    "categoria": "Sistema linfático",
    "categoriaSlug": "sistema-linfatico",
    "precioTexto": "35.000",
    "descripcion": "Es un gran depurativo que gracias a su gran contenido en potasio y apio estimulan en la producción de orina ayudando en la prevención de infecciones urinarias y cistitis también ayuda en la prevención de el estreñimiento facilita la eliminación de los cálculos biliares y renales, diluye el ácido úrico de las articulaciones debido a sus propiedades antiinflamatorias. es recomendado en caso de reumatismo y disminuye la tensión arterial."
  },
  {
    "slug": "usnever-jarabe-x-360ml",
    "nombre": "Usnever jarabe x 360ml",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "35.000",
    "descripcion": "Para disminuir el riesgo de infecciones respiratorias, es de vital importancia estimular la expectoraci?n de flemas, ellas son las que contienen bacterias que pueden complicar un cuadro respiratorio, sin embargo en el momento de hacerlo, dudamos porque nos ofrecen medicamentos que pueden causar taquicardia o tener cualquier efecto adverso; el consumo de jengibre, estimula la expectoraci?n y el consumo de altas dosis de vitamina c controla las infecciones; usnever contiene estos componentes"
  },
  {
    "slug": "valeriana-toronjil-pasiflora-gotas-x-60ml",
    "nombre": "Valeriana + toronjil + pasiflora gotas x 60ml",
    "categoria": "Sistema homeopático",
    "categoriaSlug": "sistema-homeopatico",
    "precioTexto": "22.000",
    "descripcion": "Es una planta cuya raíz contiene aceites esenciales con efectos sedantes y relajantes. reducen el nerviosismo y la agitación facilita la conciliación del sueño y mejora su calidad. &#8220;se recomienda cuando hay problemas de irritabilidad en el síndrome premenstrual en mujeres, en personas que quieren dejar de fumar, para mitigar el síndrome de abstinencia, en gente con colon irritable y para relajar los movimientos intestinales."
  },
  {
    "slug": "varicox-caps-x-60-capsulas",
    "nombre": "Varicox caps x 60 capsulas",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "45.000",
    "descripcion": "La bipedestación (estar de pie todo el tiempo), el sobre peso y la condición genética, son los factores más comunes en las afecciones de venas varices, para evitar y controlar estos inconvenientes es importante hacer algún tipo de ejercicio y consumir suplementos nutricionales que fortalecen la pared venosa reducen el colesterol y activan la circulación. varicóx aporta uva que es antioxidante y mejora la elasticidad en las venas y combina la acción vasodilatadora de la niacina (b3), brindando una alternativa saludable."
  },
  {
    "slug": "varicox-crema-x-50gr",
    "nombre": "Varicox crema x 50gr",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "38.000",
    "descripcion": "La bipedestación (estar de pie todo el tiempo), el sobre peso y la condición genética, son los factores más comunes en las afecciones de venas varices, para evitar y controlar estos inconvenientes es importante hacer algún tipo de ejercicio y consumir suplementos nutricionales que fortalecen la pared venosa reducen el colesterol y activan la circulación. varicóx aporta uva que es antioxidante y mejora la elasticidad en las venas y combina la acción vasodilatadora de la niacina (b3), brindando una alternativa saludable."
  },
  {
    "slug": "verafem-jarabe-x-500ml",
    "nombre": "Verafem jarabe x 500ml",
    "categoria": "Sistema reproductor",
    "categoriaSlug": "sistema-reproductor",
    "precioTexto": "35.000",
    "descripcion": "La combinación de té verde y canela, brindan un potente efecto anticoagulante, lo que impide que las plaquetas de la sangre se acumulen más de lo que deberían hacerlo en niveles normales. esta propiedad la convierte en un efecto tónico para las mujeres en su período de menstruación, ya que ayuda a regular las alteraciones del ciclo menstrual. además, también ayuda regular el ritmo intestinal por lo que es posible utilizarla tanto como antidiarreico y en tratamientos de colon irritable."
  },
  {
    "slug": "veralverd-jarabe-x-500ml",
    "nombre": "Veralverd jarabe x 500ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "42.000",
    "descripcion": null
  },
  {
    "slug": "viacir-jarabe-x-500ml",
    "nombre": "Viacir jarabe x 500ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "35.000",
    "descripcion": "Para mantener una adecuada y fluida circulación, necesitamos una acción dilatadora y un barrido de ateromas (placas de grasa) en circulatorias (venas, vías las vasos y arterias). viacir es un suplemento dietario que reúne las bondades del ajo y el limón esta composición logra una alternativa para activar la circulación, bajar niveles de colesterol y mejorar la resistencia venosa, permitiendo así el adelgazamiento de la sangre y ayudando a prevenir la aparición de las venas varices"
  },
  {
    "slug": "vinagre-con-sidra-de-manzana-roja-x-700-ml",
    "nombre": "Vinagre con sidra de manzana roja x 700 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "25.000",
    "descripcion": "Excelente complemento dietetico, es comun en el uso como aderezo de ensaladas, mejora la digestion y puede brinar un efecto desinfectante natural, mejorando el metabolismo de las grasas y control de peso, disminuyendo los niveles de colesterol y trigliceridos"
  },
  {
    "slug": "vinagre-de-cidra-x-360ml",
    "nombre": "Vinagre de cidra x 350ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "20.000",
    "descripcion": "Complemento dietetico que permite que la comida sea asimilada de mejor manera, es comun en el uso como aderezo de ensaladas, mejora la digestion y puede brindar un efecto desinfectante natural, brindando un efecto diuretico, ademas ayuda a prevenir la terencion de liquidos. tambien ayuda a mejorar el metabolismo de las grasas y asi disminuye los niveles de colesterol y trigliceridos."
  },
  {
    "slug": "vinagre-de-manz-roja-alcachofa-x-360ml",
    "nombre": "Vinagre de manz roja + alcachofa x 360ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "20.000",
    "descripcion": "Las propiedades del viagre de manzana roja con alcachofa son empleadas como un complemento dietetico que permite que la comida sea asimilada de mejor manera, es comun en el uso como aderezo de ensaladas, mejora la digestion y contrbuye a controlar los niveles de colesterol en la sangre, ayudando a mejorar y a estimular la secrecion de bilis."
  },
  {
    "slug": "vinagre-de-manz-roja-x-360ml",
    "nombre": "Vinagre de manz roja x 350ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "20.000",
    "descripcion": "Las propiedades del vinagre de manzana roja son empleadoas com un implemento dietetico, permitiendo que lla comida sea asimilda me dejor manera, es comun en el uso como aderezo de ensaladas, mejora la digestion y puede brindar un efecto desinfectante natural, mejorando el metabolismo de las grasas y asimismo disminuye los niveles de olesterol y trigliceridos."
  },
  {
    "slug": "vinagre-de-sidra-con-la-madre-x-700-ml",
    "nombre": "Vinagre de sidra con la madre x 700 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "32.000",
    "descripcion": "Excelente complemento dietetico, es comun en el uso como aderezo de ensaladas, mejora la digestion y puede brinar un efecto desinfectante natural, mejorando el metabolismo de las grasas y control de peso, disminuyendo los niveles de colesterol y trigliceridos"
  },
  {
    "slug": "vinagre-manz-verde-x-360ml",
    "nombre": "Vinagre manz verde x 350ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "20.000",
    "descripcion": "Las propiedades del viagre de manzana verde son empleadas como un complemento dietetico que permite que la comida sea asimilada de mejor manera, es comun en el uso como aderezo de ensaladas, mejora la digestion y puede brindar un efecto desinfectante natural, mejorando el metabolismo de las grasas y asi mismo disminuye los niveles de colesterol y trigliceridos."
  },
  {
    "slug": "viscum-jarabe-x-360ml",
    "nombre": "Viscum jarabe x 400ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "35.000",
    "descripcion": "La ulcera, reflugo esofagico y distencion abdominal,son afecciones causadas por una alimentación inadecuada y hábitos que comprometen el funcionamiento del sistema digestivo, sin embargo, el consumo de plantas aromaticas como la albaca y la hierbabuena, ayudan a mejorar la digestion, y asi mismo como el marañon y el laurel, que ayudan a aumentar la producción de jugos gastricos y mejoran este tipo de molestias. viscum es una bebida libre de azucar con las bondades de estas plantas aromaticas."
  },
  {
    "slug": "vita-franc-c-1000-ml",
    "nombre": "Vitafranc x1000ml",
    "categoria": "Sistema circulatorio",
    "categoriaSlug": "sistema-circulatorio",
    "precioTexto": "45.000",
    "descripcion": null
  },
  {
    "slug": "vitakit-x-400-ml",
    "nombre": "Vitakit x 400 ml",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "28.000",
    "descripcion": "Apoya el crecimiento y el desarrollo cognitivo, tambien es bueno para aumentar el apetito ayuda a fortalecer los huesos y dientes, y apoya el sistema inmunológico, crucial durante las etapas de crecimiento. contribuye al metabolismo energético. importante para la formación de glóbulos rojos, ayudando a prevenir la fatiga y mejorando la concentración en los más pequeños. bueno para el correcto funcionamiento de músculos y nervios."
  },
  {
    "slug": "vitamina-c-y-zinc-polvo-x-700gr",
    "nombre": "Vitamina c y zinc polvo x 700gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "55.000",
    "descripcion": "La vitamina c es uno de los antioxidantes más conocidos por su acción en infecciones, virus, radicales libres y hongos, la combinacion en zinc, minerales antioxidantes también, que además interviene en el funcionamiento del sistema endocrino, más la combinación de avena hace de este alimento una importante alternativa para la nutrición y desempeño adecuados del organismo, favoreciendo el sistema nervioso a la vez que favorecen la capacidad para relajarse, concentrarse y prevenir el agotamiento mental."
  },
  {
    "slug": "vitamina-e-x-1000-capsulas",
    "nombre": "Vitamina e x 1000 capsulas",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "65.000",
    "descripcion": "Acción antioxidante mantiene la salud cardiovascular fortalece el sistema inmunológico ayuda a hidratar y regenerar la piel mantiene la salud cerebral y la función cognitiva."
  },
  {
    "slug": "vitamina-e-x-400-capsulas",
    "nombre": "Vitamina e x 400 capsulas",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "55.000",
    "descripcion": "Acción antioxidante mantiene la salud cardiovascular fortalece el sistema inmunológico ayuda a hidratar y regenerar la piel mantiene la salud cerebral y la función cognitiva"
  },
  {
    "slug": "vitapatt-polvo-x-700gr",
    "nombre": "Vitapatt polvo x 700gr",
    "categoria": "Sistema inmunológico",
    "categoriaSlug": "sistema-inmunologico",
    "precioTexto": "55.000",
    "descripcion": "El huevo liofilizado de pato proporciona nutrientes a las celulas, carbohidratos, enzimas y sales, que son b?sicos para mantener el equilibrio del organismo y así estimular la convercion de los tejidos, tambien contiene vitamina a, c, d, e; proteinas y minerales, calcio fosforo y magnesio. de esta manera el embrion de pato sirve para el contro de ciertas enfermedades, ayudando en la eliminacion de las manifestaciones del envejecimiento prematuro por su alto contenido de acidos nucleicos."
  },
  {
    "slug": "vraices-x-1000-ml",
    "nombre": "Vraices x 1000 ml",
    "categoria": "Sistema digestivo",
    "categoriaSlug": "sistema-digestivo",
    "precioTexto": "45.000",
    "descripcion": "*antioxidante. *depurativo sanguíneo. *fortalece el sistema inmunológico *drenador hepático. *favorece el sistema digestivo. *reduce los triglicéridos y el colesterol"
  },
  {
    "slug": "zarberry-jarabe-x-360ml",
    "nombre": "Zarberry jarabe x 360ml",
    "categoria": "Sistema linfático",
    "categoriaSlug": "sistema-linfatico",
    "precioTexto": "30.000",
    "descripcion": "Hecho a base se arandanos y zarzaparrilla, los cuales ayudan a evitar y combatir las infecciones urinarias. inhibe la adhesion de bacterias en la vejiga y la uretra. son desintoxicantes y depurativos, estimula la prouccion de orina y estabiliza su ph. ademas mejoran edemas ya que ayudan a la eliminaci?n de liquidos, calculos renales. combaten la cistitis, infecciones del tracto urinario, prostata, uretra, ayudan en tratamientos de anuresis o incontinencia y el mal olor de la orina."
  },
  {
    "slug": "zarxinx-360ml",
    "nombre": "Zarxinx 360ml",
    "categoria": "Sistema linfático",
    "categoriaSlug": "sistema-linfatico",
    "precioTexto": "25.000",
    "descripcion": "Ideal para desintoxicar nuestro cuerpo, evita que los metales pesados, residuos toxicos y radicales libres, se queden en nuestro organismo. la combinacion de alcachofa, berenjena, ajo y flor de jamaica, brindan activos de estas plantas como la cinarina, flavonoides,estatinas, polifenoles y aceites esenciales, que logran una accion diuretica, antioxidante y depurativa, las estatinas bajan los niveles de colesterol en la sangre"
  },
  {
    "slug": "zarzaparrilla-zar-p-jarabe-x-500ml",
    "nombre": "Zarzaparrilla &#8220;zar-p&#8221; jarabe x 500ml",
    "categoria": "Sistema linfático",
    "categoriaSlug": "sistema-linfatico",
    "precioTexto": "30.000",
    "descripcion": "Es diuretica y depurativa, gracias a su alto contenido en minerales, calcio, potasio y magnesio, ayusda a aumentar la capacidad de produccion de orina, asi como a bajar de peso y disminuir la presion sanguinea,ademas de ser antibacteriana y antifungica, que ayudan a tratar enfermedades de la piel como la psoriasis, el eccema o la curacion de las heridas. la zarzaparrilla posee propiedades tonicas que nos ayudan a eliminar las toxinas de nuestro."
  },
  {
    "slug": "zijiglid-jarabe-x-360ml",
    "nombre": "Zyjiglid jarabe x 360ml",
    "categoria": "Sistema endocrino",
    "categoriaSlug": "sistema-endocrino",
    "precioTexto": "35.000",
    "descripcion": null
  }
]
