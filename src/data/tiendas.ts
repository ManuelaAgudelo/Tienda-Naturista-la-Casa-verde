// Fuente oficial: base de datos interna del dueño del proyecto (Directorio.xlsx), 2026-09-05.
// Solo se muestra contacto PUBLICO (nombre de tienda, direccion, telefono) - a peticion explicita
// del dueño, NUNCA se incluye el nombre del propietario aunque esta en la fuente original.

export interface Tienda {
  id: string
  nombre: string
  direccion: string | null
  telefono: string | null
}

export const TIENDAS: Tienda[] = [
  {
    "id": "tienda-1",
    "nombre": "Tienda Naturista La Casa Verde Abejorral-antioquia",
    "direccion": "Calle 51 # 49- 56",
    "telefono": "573218862122"
  },
  {
    "id": "tienda-2",
    "nombre": "Tienda Naturista La Casa Verde Aguachica - Cesar",
    "direccion": "Carrera 13 # 3 - 137",
    "telefono": "573137298980"
  },
  {
    "id": "tienda-3",
    "nombre": "Tienda Naturista La Casa Verde Aguadas – Caldas",
    "direccion": "Calle 8 # 5 - 11 Frente A La Terminal De Buses",
    "telefono": "573148965899"
  },
  {
    "id": "tienda-4",
    "nombre": "Tienda Naturista La Casa Verde Aguazul - Casanare",
    "direccion": "Carrera 17 # 10 - 31",
    "telefono": "573152713599"
  },
  {
    "id": "tienda-5",
    "nombre": "Tienda Naturista La Casa Verde Agustin Codazzi - Cesar",
    "direccion": "Cra 16 11b-111 Local 2 Centro Al Lado Del Banco De La Mijer",
    "telefono": "573113475018"
  },
  {
    "id": "tienda-6",
    "nombre": "Tienda Naturista La Casa Verde Algeciras - Huila",
    "direccion": "Calle 4 A # 7 - 41 B/ Floresta, Frente A La Casa Campesina",
    "telefono": "573108863480"
  },
  {
    "id": "tienda-7",
    "nombre": "Tienda Naturista La Casa Verde Amaga - Antioquia",
    "direccion": "Carrera 50 # 46 - 16 Local 2",
    "telefono": "573244775020"
  },
  {
    "id": "tienda-8",
    "nombre": "Tienda Naturista La Casa Verde Amalfi – Antioquia",
    "direccion": "Calle 19 Santander # 20 - 19",
    "telefono": "573508828235"
  },
  {
    "id": "tienda-9",
    "nombre": "Tienda Naturista La Casa Verde Andes-antioquia",
    "direccion": "Cra 50a #50 - 51 Calle Del Medio",
    "telefono": "573147977019"
  },
  {
    "id": "tienda-10",
    "nombre": "Tienda Naturista La Casa Verde Anserma - Caldas",
    "direccion": "Carrera 5ta # 13 - 30",
    "telefono": "573218665646"
  },
  {
    "id": "tienda-11",
    "nombre": "Tienda Naturista La Casa Verde Arauca-arauca",
    "direccion": "Calle 22 # 19 - 41 Centro",
    "telefono": "573112821402"
  },
  {
    "id": "tienda-12",
    "nombre": "Tienda Naturista La Casa Verde Arboletes - Antioquia",
    "direccion": "Carrea 29 - 02 Calle 20 De Julio B/ Villa Luz",
    "telefono": "573234737494"
  },
  {
    "id": "tienda-13",
    "nombre": "Tienda Naturista La Casa Verde Argelia - Antioquia",
    "direccion": "Carrera 29 # 31 - 50",
    "telefono": "573104284807"
  },
  {
    "id": "tienda-14",
    "nombre": "Tienda Naturista La Casa Verde Argelia - Cauca",
    "direccion": "Calle 2 # 2 - 59",
    "telefono": "573103181905"
  },
  {
    "id": "tienda-15",
    "nombre": "Tienda Naturista La Casa Verde Armenia - Quindio",
    "direccion": "Carrera 15 # 20 - 15",
    "telefono": "573156430457"
  },
  {
    "id": "tienda-16",
    "nombre": "Tienda Naturista La Casa Verde Ayapel - Cordoba",
    "direccion": "Avenida 6 # 11 - 28 Local 102",
    "telefono": "573224151500"
  },
  {
    "id": "tienda-17",
    "nombre": "Tienda Naturista La Casa Verde Barbacoas – Nariño",
    "direccion": "B/ El Comercio Cs 29 Div 21",
    "telefono": "573176407361"
  },
  {
    "id": "tienda-18",
    "nombre": "Tienda Naturista La Casa Verde Barbosa - Antioquia",
    "direccion": "Carrera 15 Calle 11 - 32",
    "telefono": "573104495490"
  },
  {
    "id": "tienda-19",
    "nombre": "Tienda Naturista La Casa Verde Barbosa - Santander",
    "direccion": "Calle 8 # 7 -35 Avenidas Las Americas",
    "telefono": "573213185436"
  },
  {
    "id": "tienda-20",
    "nombre": "Tienda Naturista La Casa Verde Barrancabermeja – Santander 1",
    "direccion": "Calle 49 # 9 - 53 Frente A La Universidad De La Paz",
    "telefono": "573147190285"
  },
  {
    "id": "tienda-21",
    "nombre": "Tienda Naturista La Casa Verde Barrancabermeja – Santander 2",
    "direccion": "Calle 49 # 9 - 42 Frente Al Banco De Bogota",
    "telefono": "573147190285"
  },
  {
    "id": "tienda-22",
    "nombre": "Tienda Naturista La Casa Verde Barranquilla",
    "direccion": "Cll 72 # 48 15 Local 1c Edificio De La Rosa",
    "telefono": "573014084035"
  },
  {
    "id": "tienda-23",
    "nombre": "Tienda Naturista La Casa Verde Belen De Umbria – Risaralda",
    "direccion": "Cra 9a # 9a - 49 Cerca De Bomberos",
    "telefono": "573148164253"
  },
  {
    "id": "tienda-24",
    "nombre": "Tienda Naturista La Casa Verde Bolivar - Cauca",
    "direccion": "Carrera 4 # 6 - 57 Centro",
    "telefono": "573225891164"
  },
  {
    "id": "tienda-25",
    "nombre": "Tienda Naturista La Casa Verde Buenaventura – Valle Del Cauca",
    "direccion": "Carrera 5 # 1 - 34 Local 104 Enseguida De Los Toneles",
    "telefono": "573212212857"
  },
  {
    "id": "tienda-26",
    "nombre": "Tienda Naturista La Casa Verde Buesaco - Nariño",
    "direccion": "Carrera 3 # 3 - 34 B / Centro Norte, Frente Al Parque Principal",
    "telefono": "573132874203"
  },
  {
    "id": "tienda-27",
    "nombre": "Tienda Naturista La Casa Verde Buga - Valle Del Cauca",
    "direccion": "Calle 8 # 11 - 52",
    "telefono": "573218072130"
  },
  {
    "id": "tienda-28",
    "nombre": "Tienda Naturista La Casa Verde Caicedo - Antioquia",
    "direccion": "Sector La Gruta Dg A La Bomba Terpel Salida Urrao",
    "telefono": "573106900182"
  },
  {
    "id": "tienda-29",
    "nombre": "Tienda Naturista La Casa Verde Caicedonia - Valle Del Cauca",
    "direccion": "Carrera 15 # 10 - 28",
    "telefono": "573205813836"
  },
  {
    "id": "tienda-30",
    "nombre": "Tienda Naturista La Casa Verde Calamar - Bolivar",
    "direccion": "Calle Del Hospital Carrera 2 Transversal 1 - 154",
    "telefono": "573216997803"
  },
  {
    "id": "tienda-31",
    "nombre": "Tienda Naturista La Casa Verde Calarca – Quindio",
    "direccion": "Calle 39 # 25 - 16 Local 1 En La Esquina Del Parque Principal",
    "telefono": "573163465267"
  },
  {
    "id": "tienda-32",
    "nombre": "Tienda Naturista La Casa Verde Caldas - Antioquia",
    "direccion": "Calle 135 Sur # 48 - 72",
    "telefono": "573057132757"
  },
  {
    "id": "tienda-33",
    "nombre": "Tienda Naturista La Casa Verde Cali - Valle Del Cauca",
    "direccion": "Carrera 4 # 13 - 57 Local 54 Centro Comercial Mi Primer Bazar",
    "telefono": "573137847352"
  },
  {
    "id": "tienda-34",
    "nombre": "Tienda Naturista La Casa Verde Carepa - Antioquia",
    "direccion": "Calle 80 Del Comercio # 77 - 23",
    "telefono": "573208937409"
  },
  {
    "id": "tienda-35",
    "nombre": "Tienda Naturista La Casa Verde Cartagena – Bolivar Ppal",
    "direccion": "Calle 33 # 10a 24 Avenida Venezuela",
    "telefono": "573043297985"
  },
  {
    "id": "tienda-36",
    "nombre": "Tienda Naturista La Casa Verde Cartagena – Bolivar Sucursal",
    "direccion": "Cra 71 31a 12 Local 2 Primer Piso",
    "telefono": "573128945103"
  },
  {
    "id": "tienda-37",
    "nombre": "Tienda Naturista La Casa Verde Cartagena Del Chaira – Caqueta",
    "direccion": "Calle 4 # 2 - 38 Frente A Yamaha",
    "telefono": "573153996756"
  },
  {
    "id": "tienda-38",
    "nombre": "Tienda Naturista La Casa Verde Cartago - Valle Del Cauca",
    "direccion": "Calle 11 # 3-34",
    "telefono": "573217074800"
  },
  {
    "id": "tienda-39",
    "nombre": "Tienda Naturista La Casa Verde Caucasia - Antioquia",
    "direccion": "Calle 21 # 8-86",
    "telefono": "573012585116"
  },
  {
    "id": "tienda-40",
    "nombre": "Tienda Naturista La Casa Verde Cerete – Cordoba",
    "direccion": "Cll 12 # 12 Esquina Barrio La Esperanza",
    "telefono": "573125360968"
  },
  {
    "id": "tienda-41",
    "nombre": "Tienda Naturista La Casa Verde Chachagui - Nariño",
    "direccion": "Carrera 8 # 3 - 65 Frente Al Cuartel De Bomberos.",
    "telefono": "573178277752"
  },
  {
    "id": "tienda-42",
    "nombre": "Tienda Naturista La Casa Verde Chaparral - Tolima",
    "direccion": "Calle 7 # 8 -13 Centro",
    "telefono": "573112951153"
  },
  {
    "id": "tienda-43",
    "nombre": "Tienda Naturista La Casa Verde Chapinero - Bogota",
    "direccion": "Calle 57 # 13 - 371 Chapinero",
    "telefono": "573171824041"
  },
  {
    "id": "tienda-44",
    "nombre": "Tienda Naturista La Casa Verde Chia - Cundinamarca",
    "direccion": "Carrera 11 # 6 - 02",
    "telefono": "573209945206"
  },
  {
    "id": "tienda-45",
    "nombre": "Tienda Naturista La Casa Verde Chigorodo-antioquia",
    "direccion": "Cra 100 # 97-25",
    "telefono": "573133639191"
  },
  {
    "id": "tienda-46",
    "nombre": "Tienda Naturista La Casa Verde Chinchina – Caldas",
    "direccion": "Cra 8 # 9 -69",
    "telefono": "573108093364"
  },
  {
    "id": "tienda-47",
    "nombre": "Tienda Naturista La Casa Verde Chinu – Cordoba",
    "direccion": "Cra 9 # 15-91 B/ San Simon",
    "telefono": "573205645325"
  },
  {
    "id": "tienda-48",
    "nombre": "Tienda Naturista La Casa Verde Chiquinquira - Boyaca",
    "direccion": "Calle 15 #6 -123 B/ Chico",
    "telefono": "573142465664"
  },
  {
    "id": "tienda-49",
    "nombre": "Tienda Naturista La Casa Verde Chiriguana - Cesar",
    "direccion": "Calle 8 # 4-4",
    "telefono": "573024446218"
  },
  {
    "id": "tienda-50",
    "nombre": "Tienda Naturista La Casa Verde Cienaga - Magdalena",
    "direccion": "Calle 17 # 17 -135 Centro",
    "telefono": "573022890234"
  },
  {
    "id": "tienda-51",
    "nombre": "Tienda Naturista La Casa Verde Cienaga De Oro-cordoba",
    "direccion": "Cll 7 14 - 32 Barrio Granada",
    "telefono": "573164761858"
  },
  {
    "id": "tienda-52",
    "nombre": "Tienda Naturista La Casa Verde Cimitarra-santander",
    "direccion": "Cra 3 # 6-32 Centro",
    "telefono": "573107401093"
  },
  {
    "id": "tienda-53",
    "nombre": "Tienda Naturista La Casa Verde Ciudad Bolivar - Antioquia",
    "direccion": "Calle 50 # 48 -47",
    "telefono": "573128924210"
  },
  {
    "id": "tienda-54",
    "nombre": "Tienda Naturista La Casa Verde Concordia – Antioquia",
    "direccion": "Cra 19 # 20 -53",
    "telefono": "573015421028"
  },
  {
    "id": "tienda-55",
    "nombre": "Tienda Naturista La Casa Verde Corozal – Sucre",
    "direccion": "Cra 28 # 25 -64 Frente Al Parque Santander Centro",
    "telefono": "573168498562"
  },
  {
    "id": "tienda-56",
    "nombre": "Tienda Naturista La Casa Verde Cumbal - Nariño",
    "direccion": "Carrera 9 # 19 - 60",
    "telefono": "573207620481"
  },
  {
    "id": "tienda-57",
    "nombre": "Tienda Naturista La Casa Verde Curumani – Cesar",
    "direccion": "Cll 8 # 15 -42 Centro",
    "telefono": "573003084767"
  },
  {
    "id": "tienda-58",
    "nombre": "Tienda Naturista La Casa Verde Don Matías - Antioquia",
    "direccion": "Cll 30 # 30 -08 Parque",
    "telefono": "573216988579"
  },
  {
    "id": "tienda-59",
    "nombre": "Tienda Naturista La Casa Verde El Bagre – Antioquia",
    "direccion": "Avenida Juventud 52-53",
    "telefono": "573113045448"
  },
  {
    "id": "tienda-60",
    "nombre": "Tienda Naturista La Casa Verde El Banco –magdalena",
    "direccion": "Cll 8 # 3-24 Centro",
    "telefono": "573002261446"
  },
  {
    "id": "tienda-61",
    "nombre": "Tienda Naturista La Casa Verde El Bordo - Cauca",
    "direccion": "Cra 1 # 6-67 Local 2 Via Panamericana",
    "telefono": "573234327404"
  },
  {
    "id": "tienda-62",
    "nombre": "Tienda Naturista La Casa Verde El Carmen - Bolivar",
    "direccion": "Cll 25 # 47 -68 Al Lado De Instrumentos Publicos",
    "telefono": "573027144903"
  },
  {
    "id": "tienda-63",
    "nombre": "Tienda Naturista La Casa Verde El Playón - Santander",
    "direccion": "Cra 8 13 -35 Centro",
    "telefono": "573102921636"
  },
  {
    "id": "tienda-64",
    "nombre": "Tienda Naturista La Casa Verde El Tambo - Nariño",
    "direccion": "Cra 8 Casa 2b B/ El Recuerdo Frente A La Registraduria",
    "telefono": "573114105566"
  },
  {
    "id": "tienda-65",
    "nombre": "Tienda Naturista La Casa Verde Envigado-antioquia",
    "direccion": "Cra 41 # 33b Sur -42",
    "telefono": "573225902136"
  },
  {
    "id": "tienda-66",
    "nombre": "Tienda Naturista La Casa Verde Facatativa – Cundinamarca",
    "direccion": "Cra 2 # 7 - 78",
    "telefono": "573004604570"
  },
  {
    "id": "tienda-67",
    "nombre": "Tienda Naturista La Casa Verde Florencia – Caqueta",
    "direccion": "Cra 12 #16-13",
    "telefono": "573229439263"
  },
  {
    "id": "tienda-68",
    "nombre": "Tienda Naturista La Casa Verde Florencia-cauca",
    "direccion": "Cll 3 # 2 93 Centro",
    "telefono": "573122971933"
  },
  {
    "id": "tienda-69",
    "nombre": "Tienda Naturista La Casa Verde Fredonia-antioquia",
    "direccion": "Cra 50#50 -13 Cll Del Comercio Calle Larga",
    "telefono": "573117880444"
  },
  {
    "id": "tienda-70",
    "nombre": "Tienda Naturista La Casa Verde Fundacion – Magdalena",
    "direccion": "Calle 3 # 19 -46",
    "telefono": "573153849874"
  },
  {
    "id": "tienda-71",
    "nombre": "Tienda Naturista La Casa Verde Fusagasuga - Cundinamarca",
    "direccion": "Av Las Palmas 6 -30",
    "telefono": "573107861309"
  },
  {
    "id": "tienda-72",
    "nombre": "Tienda Naturista La Casa Verde Garzon - Huila",
    "direccion": "Cea 11 # 13 -41",
    "telefono": "573143749808"
  },
  {
    "id": "tienda-73",
    "nombre": "Tienda Naturista La Casa Verde Girardot - Cundinamarca",
    "direccion": "Carrera 9 # 12 - 64",
    "telefono": "573142140470"
  },
  {
    "id": "tienda-74",
    "nombre": "Tienda Naturista La Casa Verde Granada - Meta",
    "direccion": "Cra 13 # 18 Esquina",
    "telefono": "573133257824"
  },
  {
    "id": "tienda-75",
    "nombre": "Tienda Naturista La Casa Verde Guaduas – Cundinamarca",
    "direccion": "Carrera 4 # 1 - 82 Centro. Calle La Pola",
    "telefono": "573138337493"
  },
  {
    "id": "tienda-76",
    "nombre": "Tienda Naturista La Casa Verde Ibague - Tolima",
    "direccion": "Cra 2 # 12 -39 Centro",
    "telefono": "573164635528"
  },
  {
    "id": "tienda-77",
    "nombre": "Tienda Naturista La Casa Verde Ipiales – Nariño",
    "direccion": "Cll 4 # 6 -22 Av Las Lajas Dg Expreso Las Lajas",
    "telefono": "573123472727"
  },
  {
    "id": "tienda-78",
    "nombre": "Tienda Naturista La Casa Verde Itagui-antioquia",
    "direccion": "Calle 50 # 47a -40",
    "telefono": "573122814078"
  },
  {
    "id": "tienda-79",
    "nombre": "Tienda Naturista La Casa Verde Itsmina - Choco",
    "direccion": "Cra 6 # 26 - 23 B/roma La Gran Esquina",
    "telefono": "573203567006"
  },
  {
    "id": "tienda-80",
    "nombre": "Tienda Naturista La Casa Verde Jamundi – Valle Del Cauca",
    "direccion": "Cra 11 # 12 -60",
    "telefono": "573218072130"
  },
  {
    "id": "tienda-81",
    "nombre": "Tienda Naturista La Casa Verde Kennedy - Bogota",
    "direccion": "Cll 26 Sur # 71d - 1 B/ Kennedy",
    "telefono": "573173544488"
  },
  {
    "id": "tienda-82",
    "nombre": "Tienda Naturista La Casa Verde La Belleza - Santander",
    "direccion": "Cra 4 # 5-07",
    "telefono": "573118429995"
  },
  {
    "id": "tienda-83",
    "nombre": "Tienda Naturista La Casa Verde La Cruz-nariño",
    "direccion": "Calle 5 Carrera 6 - 11 Local 1 Morochillo",
    "telefono": "573137358487"
  },
  {
    "id": "tienda-84",
    "nombre": "Tienda Naturista La Casa Verde La Dorada – Caldas",
    "direccion": "Calle 14 # 5 - 54 Centro",
    "telefono": "573163183360"
  },
  {
    "id": "tienda-85",
    "nombre": "Tienda Naturista La Casa Verde La Hormiga – Putumayo",
    "direccion": "Carrera 5 # 7 - 60 B/ Las Americas Diagonal. Secretaria De Salud",
    "telefono": "573102658359"
  },
  {
    "id": "tienda-86",
    "nombre": "Tienda Naturista La Casa Verde La Union – Nariño",
    "direccion": "Cll 14 # 2 - 25 B/ Chapinero",
    "telefono": "573122708735"
  },
  {
    "id": "tienda-87",
    "nombre": "Tienda Naturista La Casa Verde La Union - Valle Del Cauca",
    "direccion": "Cra 15 # 15 -33",
    "telefono": "573132416271"
  },
  {
    "id": "tienda-88",
    "nombre": "Tienda Naturista La Casa Verde La Vega - Cauca",
    "direccion": "Calle 3 # 6 - 32 B/ Lourdes Frente A Asmet Salud",
    "telefono": "573169175996"
  },
  {
    "id": "tienda-89",
    "nombre": "Tienda Naturista La Casa Verde La Virginia - Risaralda",
    "direccion": "Cll 8a # 7-37",
    "telefono": "573132416271"
  },
  {
    "id": "tienda-90",
    "nombre": "Tienda Naturista La Casa Verde Lebrija - Santander",
    "direccion": "Cll 11 # 9 -44",
    "telefono": "573007746607"
  },
  {
    "id": "tienda-91",
    "nombre": "Tienda Naturista La Casa Verde Leticia – Amazonas",
    "direccion": "Cll 9 # 9 -41",
    "telefono": "573218406894"
  },
  {
    "id": "tienda-92",
    "nombre": "Tienda Naturista La Casa Verde Llorente-nariño",
    "direccion": "Calle Principal Enfrente Del Colegio Departamental De Llorente",
    "telefono": "573188384586"
  },
  {
    "id": "tienda-93",
    "nombre": "Tienda Naturista La Casa Verde Lorica - Cordoba",
    "direccion": "Cll 4 # 17 - 42b Dg Alcaldia La Vieja",
    "telefono": "573042945166"
  },
  {
    "id": "tienda-94",
    "nombre": "Tienda Naturista La Casa Verde Madrid",
    "direccion": "Cra 6 # 5 -06",
    "telefono": "573125129509"
  },
  {
    "id": "tienda-95",
    "nombre": "Tienda Naturista La Casa Verde Magangue - Bolivar",
    "direccion": "Cra 3 # 11 - 05",
    "telefono": "573208181279"
  },
  {
    "id": "tienda-96",
    "nombre": "Tienda Naturista La Casa Verde Majagual-sucre",
    "direccion": "Cll 5 # 15-37 Centro",
    "telefono": "573205207280"
  },
  {
    "id": "tienda-97",
    "nombre": "Tienda Naturista La Casa Verde Malaga - Santander",
    "direccion": "Cra 9 # 14 -22 Dg Cootrans",
    "telefono": "573116552610"
  },
  {
    "id": "tienda-98",
    "nombre": "Tienda Naturista La Casa Verde Manizales-caldas",
    "direccion": "Cra 21 # 19 -51",
    "telefono": "573138658236"
  },
  {
    "id": "tienda-99",
    "nombre": "Tienda Naturista La Casa Verde Manzanares – Caldas",
    "direccion": "Cra 4 # 6- 47 Frente A La Plaza De Mercado",
    "telefono": "573207687150"
  },
  {
    "id": "tienda-100",
    "nombre": "Tienda Naturista La Casa Verde Mariquita- Tolima",
    "direccion": "Cra 4 # 5 36 Centro",
    "telefono": "573026015630"
  },
  {
    "id": "tienda-101",
    "nombre": "Tienda Naturista La Casa Verde Mercaderes-cauca",
    "direccion": "Cra 3 # 7 - 57 B/ San Nicolas",
    "telefono": "573105019964"
  },
  {
    "id": "tienda-102",
    "nombre": "Tienda Naturista La Casa Verde Mocoa – Putumayo",
    "direccion": "Cra 6a #v 8 -45 Frente Papeleria Unica",
    "telefono": "573143524476"
  },
  {
    "id": "tienda-103",
    "nombre": "Tienda Naturista La Casa Verde Mompox – Bolivar",
    "direccion": "Cra 4a #17 -5 B/ La Esperanza",
    "telefono": "573053249995"
  },
  {
    "id": "tienda-104",
    "nombre": "Tienda Naturista La Casa Verde Montelibano – Cordoba",
    "direccion": "Cll 16# 7 - 35",
    "telefono": "573104489105"
  },
  {
    "id": "tienda-105",
    "nombre": "Tienda Naturista La Casa Verde Monteria - Cordoba",
    "direccion": "Cra 4 # 27 -62",
    "telefono": "573205743171"
  },
  {
    "id": "tienda-106",
    "nombre": "Tienda Naturista La Casa Verde Morales - Cauca",
    "direccion": "Cll Principal 29-39",
    "telefono": "573176259357"
  },
  {
    "id": "tienda-107",
    "nombre": "Tienda Naturista La Casa Verde Necocli-antioquia",
    "direccion": "Cll 50 # 48 - 53 Al Lado De La Ferreteria Atlantico",
    "telefono": "573217666434"
  },
  {
    "id": "tienda-108",
    "nombre": "Tienda Naturista La Casa Verde Neira – Caldas",
    "direccion": "Cra 10 # 8 -39 Cll Real",
    "telefono": "573204287498"
  },
  {
    "id": "tienda-109",
    "nombre": "Tienda Naturista La Casa Verde Ocaña – Norte De Santander Ppal",
    "direccion": "Cll 8a 13a - 18 Mercado Publico",
    "telefono": "573122569813"
  },
  {
    "id": "tienda-110",
    "nombre": "Tienda Naturista La Casa Verde Ocaña – Norte De Santander Suc",
    "direccion": "Calle 8 #13a - 05 Esquina Mercado Publico",
    "telefono": "573218680203"
  },
  {
    "id": "tienda-111",
    "nombre": "Tienda Naturista La Casa Verde Ortega – Tolima",
    "direccion": "Cll 5 # 14 -39 Centro",
    "telefono": "573102247462"
  },
  {
    "id": "tienda-112",
    "nombre": "Tienda Naturista La Casa Verde Pacho – Cundinamarca",
    "direccion": "Calle 8 # 17 - 01",
    "telefono": "573135387575"
  },
  {
    "id": "tienda-113",
    "nombre": "Tienda Naturista La Casa Verde Pailitas - Cesar",
    "direccion": "Cra 5 # 6 -14",
    "telefono": "573193924442"
  },
  {
    "id": "tienda-114",
    "nombre": "Tienda Naturista La Casa Verde Pasto – Nariño",
    "direccion": "Cll 16 # 24 - 37",
    "telefono": "6027213052"
  },
  {
    "id": "tienda-115",
    "nombre": "Tienda Naturista La Casa Verde Paz De Ariporo - Casanare",
    "direccion": "Cra 10 # 11 -51",
    "telefono": "573213182372"
  },
  {
    "id": "tienda-116",
    "nombre": "Tienda Naturista La Casa Verde Pereira – Risaralda",
    "direccion": "Cra 8 # 24 -39",
    "telefono": "573115529253"
  },
  {
    "id": "tienda-117",
    "nombre": "Tienda Naturista La Casa Verde Pitalito – Huila",
    "direccion": "Calle 6 # 2 - 66",
    "telefono": "573126598619"
  },
  {
    "id": "tienda-118",
    "nombre": "Tienda Naturista La Casa Verde Planeta Rica – Cordoba",
    "direccion": "Cra 8 # 18 -44 Centro",
    "telefono": "573022021676"
  },
  {
    "id": "tienda-119",
    "nombre": "Tienda Naturista La Casa Verde Popayan-cauca",
    "direccion": "Cra 4 13-80",
    "telefono": "573028270007"
  },
  {
    "id": "tienda-120",
    "nombre": "Tienda Naturista La Casa Verde Puerto Asis – Putumayo",
    "direccion": "Cll 10 # 27 - 02 B/el Carmen",
    "telefono": "573209549739"
  },
  {
    "id": "tienda-121",
    "nombre": "Tienda Naturista La Casa Verde Puerto Berrio - Antioquia",
    "direccion": "Cll 54 # 3 -30 Centro",
    "telefono": "573194154265"
  },
  {
    "id": "tienda-122",
    "nombre": "Tienda Naturista La Casa Verde Puerto Boyaca – Boyaca",
    "direccion": "Cra 3 # 12 - 47 Centro",
    "telefono": "573127116601"
  },
  {
    "id": "tienda-123",
    "nombre": "Tienda Naturista La Casa Verde Puerto Gaitan - Meta",
    "direccion": "Cll 9 # 9 - 34 Centro",
    "telefono": "573173483405"
  },
  {
    "id": "tienda-124",
    "nombre": "Tienda Naturista La Casa Verde Puerto Inirida - Guainia",
    "direccion": "Cll 16 # 5-148",
    "telefono": "573160418156"
  },
  {
    "id": "tienda-125",
    "nombre": "Tienda Naturista La Casa Verde Puerto Leguizamo-putumayo",
    "direccion": "Cll 6 Centro Frente Al Parque",
    "telefono": "573143776415"
  },
  {
    "id": "tienda-126",
    "nombre": "Tienda Naturista La Casa Verde Puerto Libertador - Cordoba",
    "direccion": null,
    "telefono": "573104489105"
  },
  {
    "id": "tienda-127",
    "nombre": "Tienda Naturista La Casa Verde Puerto Lopez – Meta",
    "direccion": "Cll 6 # 9 -25 Centro",
    "telefono": "573208587915"
  },
  {
    "id": "tienda-128",
    "nombre": "Tienda Naturista La Casa Verde Quibdo – Choco",
    "direccion": "Cra 2 # 27a -46 B/ Roma",
    "telefono": "573135972333"
  },
  {
    "id": "tienda-129",
    "nombre": "Tienda Naturista La Casa Verde Restrepo - Bogota",
    "direccion": "Cll 18 Sur # 24 - 20 Restrepo",
    "telefono": "573171824040"
  },
  {
    "id": "tienda-130",
    "nombre": "Tienda Naturista La Casa Verde Riohacha - Guajira",
    "direccion": "Cll 3 # 6 -87 Centro",
    "telefono": "573219134521"
  },
  {
    "id": "tienda-131",
    "nombre": "Tienda Naturista La Casa Verde Roldanillo - Valle Del Cauca",
    "direccion": "Cll 7 # 5 -59 Centro",
    "telefono": "573217283739"
  },
  {
    "id": "tienda-132",
    "nombre": "Tienda Naturista La Casa Verde Rovira - Tolima",
    "direccion": "Cll 4 # 4 - 31 Centro",
    "telefono": "573152345003"
  },
  {
    "id": "tienda-133",
    "nombre": "Tienda Naturista La Casa Verde Sabana De Torres – Santander",
    "direccion": "Cll 13 # 11 -51b B/ 20 De Julio",
    "telefono": "573107620714"
  },
  {
    "id": "tienda-134",
    "nombre": "Tienda Naturista La Casa Verde Sabana Larga – Atlantico",
    "direccion": "Cll 18 Caldas # 17 - 38 Local 3 Frente La Estacion De Policia",
    "telefono": "573206799542"
  },
  {
    "id": "tienda-135",
    "nombre": "Tienda Naturista La Casa Verde Sahagun - Cordoba",
    "direccion": "Cll 14 # 9 - 56 Centro",
    "telefono": "573223952937"
  },
  {
    "id": "tienda-136",
    "nombre": "Tienda Naturista La Casa Verde Salamina – Caldas",
    "direccion": "Cra 6 # 6 - 71 Calle Real",
    "telefono": "573223607024"
  },
  {
    "id": "tienda-137",
    "nombre": "Tienda Naturista La Casa Verde Samana - Caldas",
    "direccion": "Cra 9 # 7 - 38",
    "telefono": "573104554359"
  },
  {
    "id": "tienda-138",
    "nombre": "Tienda Naturista La Casa Verde Samaniego – Nariño",
    "direccion": "Calle 7 No. 6 - 20 Local 3 Barrio Schumacher",
    "telefono": "573216516648"
  },
  {
    "id": "tienda-139",
    "nombre": "Tienda Naturista La Casa Verde San Alberto – Cesar",
    "direccion": "Cll 3 # 2 - 12 Centro",
    "telefono": "573135192576"
  },
  {
    "id": "tienda-140",
    "nombre": "Tienda Naturista La Casa Verde San Andres De Cuerquia - Antioquia",
    "direccion": "Calle 30 # 30 - 08",
    "telefono": "573216988579"
  },
  {
    "id": "tienda-141",
    "nombre": "Tienda Naturista La Casa Verde San Bernardo Del Viento - Córdoba",
    "direccion": "Cll 7 # 10 -9 B/ Villa Fatima Centro",
    "telefono": "573053703771"
  },
  {
    "id": "tienda-142",
    "nombre": "Tienda Naturista La Casa Verde San Bernardo-nariño",
    "direccion": "Carrera 2 # 3 - 17 B/ Madrigal Diagonal A La Iglesia Pentecostal",
    "telefono": "573122708735"
  },
  {
    "id": "tienda-143",
    "nombre": "Tienda Naturista La Casa Verde San Carlos - Antioquia",
    "direccion": "Cll 20 # 20 -55",
    "telefono": "573218862122"
  },
  {
    "id": "tienda-144",
    "nombre": "Tienda Naturista La Casa Verde San Francisco-cundinamarca",
    "direccion": "Cra 7 # 2 -11 Centro",
    "telefono": "573223972196"
  },
  {
    "id": "tienda-145",
    "nombre": "Tienda Naturista La Casa Verde San Gil – Santander",
    "direccion": "Cra 10 # 12 59 Centro",
    "telefono": "573128547219"
  },
  {
    "id": "tienda-146",
    "nombre": "Tienda Naturista La Casa Verde San Jose Del Guaviare – Guaviare",
    "direccion": "Cll 8 # 20 - 39 Centro",
    "telefono": "573207705686"
  },
  {
    "id": "tienda-147",
    "nombre": "Tienda Naturista La Casa Verde San Juan De Rioseco – Cundinamarca",
    "direccion": "Cll Del Rosario # 4 -98",
    "telefono": "573223384448"
  },
  {
    "id": "tienda-148",
    "nombre": "Tienda Naturista La Casa Verde San Juan Del Cesar - Guajira",
    "direccion": "Cll 3 # 6 - 18 Centro",
    "telefono": "573207702488"
  },
  {
    "id": "tienda-149",
    "nombre": "Tienda Naturista La Casa Verde San Marcos – Sucre",
    "direccion": "Cra 24 # 19 -10 Centro",
    "telefono": "573114349239"
  },
  {
    "id": "tienda-150",
    "nombre": "Tienda Naturista La Casa Verde San Martin - Cesar",
    "direccion": "Cra 7 # 14 - 42",
    "telefono": "573218090536"
  },
  {
    "id": "tienda-151",
    "nombre": "Tienda Naturista La Casa Verde San Onofre-sucre",
    "direccion": "Cra 18 # 20 -49 Calle Del Comercio",
    "telefono": "573165063870"
  },
  {
    "id": "tienda-152",
    "nombre": "Tienda Naturista La Casa Verde San Pablo - Bolivar",
    "direccion": "Cll 17 # 8 - 34",
    "telefono": "573145320779"
  },
  {
    "id": "tienda-153",
    "nombre": "Tienda Naturista La Casa Verde San Pablo-nariño",
    "direccion": "Cra 4 # 3 43 B/ Valencia",
    "telefono": "573146001798"
  },
  {
    "id": "tienda-154",
    "nombre": "Tienda Naturista La Casa Verde San Pedro De Los Milagros-antioquia",
    "direccion": "Carrera 50 # 46 - 85",
    "telefono": "573135538621"
  },
  {
    "id": "tienda-155",
    "nombre": "Tienda Naturista La Casa Verde San Vicente De Chucury – Santander",
    "direccion": "Cra 11 # 9 - 33 Debajo De La Estacion De Policia",
    "telefono": "573106009231"
  },
  {
    "id": "tienda-156",
    "nombre": "Tienda Naturista La Casa Verde San Vicente Del Caguan - Caqueta",
    "direccion": "Cra 6 # 4a -55 Centro Dg Antiguo Telecom",
    "telefono": "573143749808"
  },
  {
    "id": "tienda-157",
    "nombre": "Tienda Naturista La Casa Verde Sandona – Nariño",
    "direccion": "Cll 5 # 03 -11 B/cafetero",
    "telefono": "573188384586"
  },
  {
    "id": "tienda-158",
    "nombre": "Tienda Naturista La Casa Verde Santa Fe De Antioquia – Antioquia",
    "direccion": "Cll 9 # 10 - 13",
    "telefono": "573206948178"
  },
  {
    "id": "tienda-159",
    "nombre": "Tienda Naturista La Casa Verde Santa Marta – Magdalena",
    "direccion": "Cll 16 # 4 -69 Centro",
    "telefono": "3186639561"
  },
  {
    "id": "tienda-160",
    "nombre": "Tienda Naturista La Casa Verde Santa Rosa De Cabal – Risaralda",
    "direccion": "Cll 14 # 13 60",
    "telefono": "573148505819"
  },
  {
    "id": "tienda-161",
    "nombre": "Tienda Naturista La Casa Verde Santa Rosa De Osos - Antioquia",
    "direccion": "Calle 30 # 29 - 109",
    "telefono": "573148374857"
  },
  {
    "id": "tienda-162",
    "nombre": "Tienda Naturista La Casa Verde Santa Rosa Del Sur - Bolivar",
    "direccion": "Cra 11 # 12 Centro",
    "telefono": "573213182372"
  },
  {
    "id": "tienda-163",
    "nombre": "Tienda Naturista La Casa Verde Segovia - Antioquia",
    "direccion": "Calle Junin # 47-23 Al Lado De La Funeraria El Eden",
    "telefono": "573011774660"
  },
  {
    "id": "tienda-164",
    "nombre": "Tienda Naturista La Casa Verde Sevilla - Valle Del Cauca",
    "direccion": "Cra 51 # 54 -38",
    "telefono": "573218072130"
  },
  {
    "id": "tienda-165",
    "nombre": "Tienda Naturista La Casa Verde Sibundoy - Putumayo",
    "direccion": "Carrera 16 # 17 - 71 B/ Comercial",
    "telefono": "573137418801"
  },
  {
    "id": "tienda-166",
    "nombre": "Tienda Naturista La Casa Verde Sincelejo – Sucre (2)",
    "direccion": "Cra 19 # 25 -20",
    "telefono": "573105263028"
  },
  {
    "id": "tienda-167",
    "nombre": "Tienda Naturista La Casa Verde Soacha - Cundinamarca",
    "direccion": "Cra 7 # 19a 52",
    "telefono": "573213670382"
  },
  {
    "id": "tienda-168",
    "nombre": "Tienda Naturista La Casa Verde Soata - Boyaca",
    "direccion": "Cra 5 #6 -83",
    "telefono": "573125056327"
  },
  {
    "id": "tienda-169",
    "nombre": "Tienda Naturista La Casa Verde Sogamoso - Boyaca",
    "direccion": "Cll 14 9a - 35 Dg Clinica Especialista",
    "telefono": "573224504184"
  },
  {
    "id": "tienda-170",
    "nombre": "Tienda Naturista La Casa Verde Son Son – Antioquia",
    "direccion": "Cra 6 # 10-35 Enseguida La Panaderia Rico Pandebono",
    "telefono": "573505965228"
  },
  {
    "id": "tienda-171",
    "nombre": "Tienda Naturista La Casa Verde Supia - Caldas",
    "direccion": "Cra 7 # 35 -10 Centro",
    "telefono": "573044465350"
  },
  {
    "id": "tienda-172",
    "nombre": "Tienda Naturista La Casa Verde Tamara-casanare",
    "direccion": "Cra 9 # 35-10 Centro",
    "telefono": "573213182372"
  },
  {
    "id": "tienda-173",
    "nombre": "Tienda Naturista La Casa Verde Taminango-nariño",
    "direccion": "B/ Los Estudiantes Cra 4 # 3 - 99",
    "telefono": "573122708735"
  },
  {
    "id": "tienda-174",
    "nombre": "Tienda Naturista La Casa Verde Taraza – Antioquia",
    "direccion": "Cra 34 # 29 - 18 B/ San Nicolas",
    "telefono": "573118423783"
  },
  {
    "id": "tienda-175",
    "nombre": "Tienda Naturista La Casa Verde Tauramena - Casanare",
    "direccion": null,
    "telefono": "573152713599"
  },
  {
    "id": "tienda-176",
    "nombre": "Tienda Naturista La Casa Verde Tibu- Norte De Santander",
    "direccion": "Av 5 # 4 - 26",
    "telefono": "573102435409"
  },
  {
    "id": "tienda-177",
    "nombre": "Tienda Naturista La Casa Verde Tierra Alta – Cordoba",
    "direccion": "Cll 8 # 14 -31 Centro",
    "telefono": "573192939725"
  },
  {
    "id": "tienda-178",
    "nombre": "Tienda Naturista La Casa Verde Trinidad - Casanare",
    "direccion": "Cra 4 # 6 -18",
    "telefono": "573213182372"
  },
  {
    "id": "tienda-179",
    "nombre": "Tienda Naturista La Casa Verde Tulua – Valle Del Cauca",
    "direccion": "Clll 26 # 22 51 B/ San Nicolas",
    "telefono": "573132416271"
  },
  {
    "id": "tienda-180",
    "nombre": "Tienda Naturista La Casa Verde Tumaco – Nariño",
    "direccion": "Calle Sucre Tumaco Frente A Multipagos Bancolombia",
    "telefono": "573116561916"
  },
  {
    "id": "tienda-181",
    "nombre": "Tienda Naturista La Casa Verde Tuquerres – Nariño",
    "direccion": "Cra 13 # 19 -02 Centro",
    "telefono": "573026015630"
  },
  {
    "id": "tienda-182",
    "nombre": "Tienda Naturista La Casa Verde Turbaco - Bolivar",
    "direccion": "Cra 15 # 23 -54 Av Pastrana",
    "telefono": "573245796592"
  },
  {
    "id": "tienda-183",
    "nombre": "Tienda Naturista La Casa Verde Ubate – Cundinamarca",
    "direccion": "Cra 4 # 6 -24 San Villas De Sandiego",
    "telefono": "573144130317"
  },
  {
    "id": "tienda-184",
    "nombre": "Tienda Naturista La Casa Verde Uribia - La Guajira",
    "direccion": "Cra 9 #14-58 Dg Bancolombia",
    "telefono": "573153666618"
  },
  {
    "id": "tienda-185",
    "nombre": "Tienda Naturista La Casa Verde Urrao – Antioquia",
    "direccion": "Cra 31 # 28 -83 Parque Principal",
    "telefono": "573215285311"
  },
  {
    "id": "tienda-186",
    "nombre": "Tienda Naturista La Casa Verde Valencia – Cordoba",
    "direccion": "Cll 12 # 15 -70 Cll Del Comercio Frente Al Banco",
    "telefono": "573107340065"
  },
  {
    "id": "tienda-187",
    "nombre": "Tienda Naturista La Casa Verde Valledupar-cesar",
    "direccion": "Cll 18a # 6-49 Dg Dollarcity Galeria",
    "telefono": "573216882065"
  },
  {
    "id": "tienda-188",
    "nombre": "Tienda Naturista La Casa Verde Velez - Santander",
    "direccion": "Cra 2 #7 -78 Centro",
    "telefono": "573107401093"
  },
  {
    "id": "tienda-189",
    "nombre": "Tienda Naturista La Casa Verde Victoria-caldas",
    "direccion": "Cll 10 # 5 -64 Centro",
    "telefono": "573226212753"
  },
  {
    "id": "tienda-190",
    "nombre": "Tienda Naturista La Casa Verde Villa Nueva - Casanare",
    "direccion": "Cra 12 # 8 -46",
    "telefono": "573148400010"
  },
  {
    "id": "tienda-191",
    "nombre": "Tienda Naturista La Casa Verde Villavicencio - Meta",
    "direccion": "Cra 32 # 37 -28 Centro Dg Al Banco De La Republica",
    "telefono": "573143194928"
  },
  {
    "id": "tienda-192",
    "nombre": "Tienda Naturista La Casa Verde Villeta – Cundinamarca",
    "direccion": "Cra 7 # 3a -68 Centro",
    "telefono": "573217218899"
  },
  {
    "id": "tienda-193",
    "nombre": "Tienda Naturista La Casa Verde Willemstad-curazao",
    "direccion": "Santa Rosa Weg 351 A/b/c",
    "telefono": "59997383833"
  },
  {
    "id": "tienda-194",
    "nombre": "Tienda Naturista La Casa Verde Yarumal – Antioquia",
    "direccion": "Cll 21 # 20 -08",
    "telefono": "573148542706"
  },
  {
    "id": "tienda-195",
    "nombre": "Tienda Naturista La Casa Verde Yumbo-valle Del Cauca",
    "direccion": "Cra 3 # 9 -68 B/bolivar",
    "telefono": "573104128914"
  },
  {
    "id": "tienda-196",
    "nombre": "Tienda Naturista La Casa Verde Zaragoza - Antioquia",
    "direccion": "Calle 39 Cordoba 42 - 32",
    "telefono": "573137249574"
  }
]
