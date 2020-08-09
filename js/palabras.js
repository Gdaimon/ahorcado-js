const letras = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'Ñ',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const listaPalabra = [
  'ciegas',
  'deriva',
  'abajo',
  'abandonado',
  'abandonar',
  'abeja',
  'abierto',
  'abogado',
  'abolladura',
  'abominacion',
  'abrasivo',
  'abrazo',
  'absolucion',
  'absorbente',
  'absorber',
  'absorbible',
  'abstinencia',
  'abstinente',
  'abstractamente',
  'abstracto',
  'absurdamente',
  'absurdo',
  'absurdos',
  'abultado',
  'abusivo',
  'abuso',
  'academia',
  'academico',
  'acaloradamente',
  'accesorios',
  'accidental',
  'accidente',
  'accion',
  'aceptando',
  'acero',
  'acrobatico',
  'acrobata',
  'actitud',
  'activo',
  'actor',
  'Actriz',
  'acuario',
  'acuerdo',
  'acuatico',
  'acustico',
  'adaptado',
  'adecuado',
  'adelanto',
  'ademas',
  'adherencia',
  'adhesivo',
  'adiccion',
  'adictivo',
  'adicto',
  'adivinar',
  'adivino',
  'adios',
  'adjunto',
  'admisible',
  'admision',
  'adolescente',
  'adopcion',
  'adoptante',
  'adorable',
  'adorno',
  'adrenalina',
  'adsorbible',
  'adulto',
  'advertencia',
  'aerodinamico',
  'aeropuerto',
  'afable',
  'aficionado',
  'afliccion',
  'afortunado',
  'agarrando',
  'agarrar',
  'agarre',
  'agencia',
  'agenda',
  'agente',
  'agilidad',
  'agitacion',
  'agitador',
  'agonizante',
  'agonia',
  'agraciado',
  'agradable',
  'agradecido',
  'agrandar',
  'agresivo',
  'agresion',
  'agresor',
  'agridulce',
  'agua',
  'agua',
  'aguacate',
  'aguafiestas',
  'aguamarina',
  'agudo',
  'aguja',
  'agujeros',
  'ahogar',
  'ahogo',
  'ahogue',
  'aire',
  'ajetreo',
  'ajustable',
  'alambre',
  'alarde',
  'alargamiento',
  'alarma',
  'alarmante',
  'albaricoque',
  'alborotador',
  'alboroto',
  'alcohol',
  'alcoholico',
  'alegre',
  'alegria',
  'alergenico',
  'aleta',
  'aleteo',
  'alfabeto',
  'alfabetico',
  'alfiler',
  'algarabia',
  'algodon',
  'alguien',
  'algunos',
  'aliado',
  'Alianza',
  'alicaido',
  'aliento',
  'alimentar',
  'alineacion',
  'alinear',
  'alma',
  'almeja',
  'almendra',
  'almirante',
  'alojamiento',
  'altercado',
  'alterno',
  'alto',
  'alucinacion',
  'aluminio',
  'Alejate',
  'amable',
  'amamantar',
  'amanecer',
  'amargo',
  'amargura',
  'ambicioso',
  'ambicion',
  'ambidextro',
  'ambiente',
  'ambiguo',
  'ambivalente',
  'ambulancia',
  'ambulatorio',
  'ameba',
  'amebiano',
  'amenaza',
  'americana',
  'americano',
  'amigo',
  'amnesia',
  'amnesico',
  'amoladora',
  'amoniaco',
  'amor',
  'amoral',
  'amplitud',
  'ampolla',
  'amputacion',
  'amputar',
  'amuleto',
  'analgesico',
  'analista',
  'analizar',
  'analitico',
  'anatomia',
  'anchoas',
  'androgino',
  'anfibio',
  'anfitrion',
  'Anguila',
  'angustia',
  'anillo',
  'animal',
  'animalista',
  'animatronic',
  'aniquilar',
  'ankh',
  'anochecer',
  'anormal',
  'anormalidad',
  'anormalmente',
  'ansiedad',
  'ansioso',
  'antebrazo',
  'antepasado',
  'anterior',
  'anticlimatico',
  'antidemocratico',
  'antiguo',
  'antivirulento',
  'antorcha',
  'antilope',
  'antilopes',
  'anual',
  'anuncio',
  'analisis',
  'anonimo',
  'apagon',
  'aparato',
  'Aparecer',
  'aparente',
  'aparentemente',
  'aparicion',
  'apariencia',
  'apartamento',
  'apelacion',
  'apetito',
  'apicultor',
  'aplanar',
  'aplastante',
  'aplastar',
  'aplausos',
  'aplicado',
  'apocalipsis',
  'apocaliptico',
  'apretado',
  'apreton',
  'aprobacion',
  'apropiado',
  'aprovechar',
  'aproximacion',
  'apuesta',
  'araña',
  'arbitrario',
  'arca',
  'arcano',
  'archivo',
  'arcilla',
  'arco',
  'ardiente',
  'arena',
  'arenoso',
  'arma',
  'arma',
  'armadura',
  'armonia',
  'armonico',
  'aro',
  'aroma',
  'arpon',
  'arquero',
  'arquitecto',
  'arrastrar',
  'arrastrarse',
  'arriesgado',
  'arrogante',
  'Art',
  'artificial',
  'artilugio',
  'artista',
  'arandano',
  'asado',
  'asalto',
  'ascensor',
  'asequible',
  'asesinato',
  'asesino',
  'asexuado',
  'asfixia',
  'asignacion',
  'asociacion',
  'asociar',
  'asombro',
  'asombroso',
  'asqueroso',
  'astronauta',
  'astucia',
  'astuto',
  'asunto',
  'ataque',
  'ataud',
  'atencion',
  'aterrador',
  'atmosfera',
  'atraccion',
  'atraco',
  'atractivo',
  'atrapamoscas',
  'atrevido',
  'atributo',
  'atrocidad',
  'atrocidades',
  'aturdir',
  'atomico',
  'audacia',
  'audaz',
  'audicion',
  'audiencia',
  'audio',
  'auge',
  'aumento',
  'auriculares',
  'ausencia',
  'ausente',
  'automatico',
  'autopista',
  'autopsia',
  'autoridad',
  'autostopista',
  'autentico',
  'automatas',
  'autonomo',
  'auxiliar',
  'aventuras',
  'aversion',
  'aviador',
  'avispa',
  'axioma',
  'ayuda',
  'azufre',
  'azul',
  'azulado',
  'azucar',
  'aereo',
  'años',
  'babuino',
  'bache',
  'bacterias',
  'bailando',
  'bailarina',
  'bailarin',
  'bajo',
  'bala',
  'balbucear',
  'balbuceo',
  'balcon',
  'ballena',
  'ballenas',
  'ballet',
  'balistica',
  'balistico',
  'bambu',
  'banco',
  'bandera',
  'banderas',
  'banquete',
  'bar',
  'barba',
  'Barbero',
  'barberia',
  'barcaza',
  'barnburner',
  'barra',
  'barras',
  'barricada',
  'baron',
  'base',
  'bases',
  'BASIC',
  'baster',
  'bastion',
  'basura',
  'batalla',
  'batallon',
  'bateria',
  'bautismo',
  'bayoneta',
  'bazofia',
  'bazuca',
  'bebida',
  'bebida',
  'bebe',
  'belleza',
  'bendecir',
  'bendicion',
  'beneficio',
  'benevolente',
  'bengala',
  'besos',
  'bestia',
  'bestial',
  'Biblia',
  'bicho',
  'bicicleta',
  'bigote',
  'Bigote',
  'bikini',
  'binocular',
  'biologia',
  'biologico',
  'biplano',
  'bisagra',
  'bionico',
  'blanco',
  'bloque',
  'bloqueador',
  'bloquear',
  'bloqueo',
  'bluff',
  'blusa',
  'blaster',
  'boa',
  'bobina',
  'bobo',
  'boca',
  'bocado',
  'bofetada',
  'boletin',
  'bolsillo',
  'bolso',
  'bomba',
  'bombardeo',
  'bombo',
  'bonito',
  'boquiabierto',
  'borde',
  'borrachera',
  'borracho',
  'borrador',
  'borrar',
  'borroso',
  'bosque',
  'botella',
  'boutique',
  'bovino',
  'bowyer',
  'bozal',
  'brazo',
  'brazos',
  'brigada',
  'brillante',
  'brillantemente',
  'brillar',
  'broma',
  'bronce',
  'bruja',
  'brumoso',
  'brutal',
  'brutalmente',
  'bruto',
  'bueno',
  'buey',
  'buffer',
  'buffet',
  'bughouse',
  'buitre',
  'buldog',
  'bulevar',
  'burbuja',
  'Burro',
  'buscar',
  'barbaro',
  'biblico',
  'buho',
  'caballero',
  'caballo',
  'caballos',
  'cabaña',
  'cabeza',
  'cable',
  'cabra',
  'cada',
  'cadena',
  'cadaver',
  'caer',
  'caiman',
  'caja',
  'calefaccion',
  'calendario',
  'calentador',
  'calentar',
  'calibracion',
  'caliente',
  'callejon',
  'calor',
  'calumniar',
  'calvo',
  'cama',
  'camaleon',
  'camarada',
  'camaron',
  'cambiar',
  'camello',
  'camelo',
  'campana',
  'campaña',
  'campeon',
  'campo',
  'canal',
  'cancerigeno',
  'cancion',
  'canela',
  'cangilon',
  'cangrejo',
  'cangrejos',
  'canguro',
  'canibalismo',
  'canto',
  'canibal',
  'caos',
  'capa',
  'capacidad',
  'capitan',
  'captura',
  'capturado',
  'capturar',
  'capucha',
  'capullo',
  'capitulo',
  'cara',
  'caracol',
  'caracteristica',
  'caramelo',
  'caravana',
  'carbon',
  'cardenal',
  'carga',
  'caribu',
  'caricia',
  'carisma',
  'carismatico',
  'carmesi',
  'carnal',
  'carnaval',
  'carne',
  'Carnicero',
  'carnies',
  'carnivoro',
  'carro',
  'carroña',
  'cartel',
  'casa',
  'casco',
  'casi',
  'casino',
  'caso',
  'castillo',
  'castor',
  'catedral',
  'categoria',
  'caucho',
  'cauteloso',
  'cautiverio',
  'cautivo',
  'cavidad',
  'caza',
  'cazador',
  'cazar',
  'caida',
  'caidas',
  'cañon',
  'caotico',
  'cebo',
  'cebra',
  'cegador',
  'ceguera',
  'celda',
  'celebracion',
  'celebridad',
  'celestial',
  'celular',
  'cementerio',
  'cemento',
  'cena',
  'ceniza',
  'centauro',
  'centinela',
  'central',
  'centrar',
  'cepillo',
  'cera',
  'cerbatana',
  'cerca',
  'cerdo',
  'Cerdo',
  'cerebro',
  'ceremonia',
  'ceremonial',
  'Cereza',
  'cero',
  'ceramico',
  'cesta',
  'chaman',
  'chantaje',
  'chiflado',
  'chillon',
  'chisme',
  'chocante',
  'chocar',
  'choque',
  'choza',
  'chucheria',
  'chulo',
  'cianotipo',
  'cianuro',
  'cibernetico',
  'cicatriz',
  'cicuta',
  'ciego',
  'cielo',
  'cien',
  'cierto',
  'ciervo',
  'cifrado',
  'cifrar',
  'cincel',
  'cinco',
  'cinturon',
  'circo',
  'circuiteria',
  'circuito',
  'circulo',
  'cirujano',
  'cita',
  'ciudad',
  'ciudadano',
  'civilizacion',
  'clamoroso',
  'clarividente',
  'claro',
  'clausura',
  'clavicula',
  'club',
  'clasico',
  'climax',
  'clinica',
  'coartada',
  'cobarde',
  'cobra',
  'cobrable',
  'cobre',
  'coche',
  'cocinero',
  'coco',
  'Coco',
  'cocodrilo',
  'codicia',
  'codicioso',
  'codo',
  'coercion',
  'cognitivo',
  'coincidencia',
  'coincidente',
  'colapso',
  'coleccionable',
  'coleccion',
  'colina',
  'colinas',
  'colisionador',
  'colision',
  'collar',
  'Colmena',
  'colmena',
  'colmillo',
  'colonia',
  'colono',
  'color',
  'colores',
  'columna',
  'coma',
  'comadreja',
  'comando',
  'comatoso',
  'combate',
  'combatiente',
  'combustible',
  'comenzando',
  'comer',
  'comercial',
  'cometa',
  'comiendo',
  'comite',
  'compacto',
  'compartimiento',
  'compasivo',
  'compañero',
  'completamente',
  'completar',
  'Complicado',
  'comportamiento',
  'compuesto',
  'compulsivo',
  'compulsion',
  'computadora',
  'comunicacion',
  'comunion',
  'comun',
  'concepto',
  'conceptual',
  'concierto',
  'conclusion',
  'concursante',
  'concurso',
  'concusion',
  'condenacion',
  'condenado',
  'condenar',
  'condicion',
  'condimento',
  'condominio',
  'conductor',
  'conectividad',
  'conejito',
  'Conejo',
  'conexion',
  'confianza',
  'confidencial',
  'confidente',
  'conflicto',
  'confrontacional',
  'confundir',
  'Confusion',
  'confuso',
  'congelacion',
  'congelado',
  'congelar',
  'conocimiento',
  'conquista',
  'conquistador',
  'consciente',
  'Consejo',
  'conservador',
  'consola',
  'conspiracion',
  'constante',
  'consultor',
  'consumidor',
  'consumo',
  'contagioso',
  'contaminacion',
  'contaminante',
  'contemporaneo',
  'contenido',
  'continental',
  'continuo',
  'contorsionista',
  'contrabandista',
  'contractual',
  'contradiccion',
  'contraste',
  'control',
  'controlador',
  'controlar',
  'conversacion',
  'conversion',
  'convertible',
  'convexto',
  'convirtio',
  'convulsion',
  'copas',
  'corazon',
  'cordones',
  'corona',
  'coronel',
  'corpulento',
  'corral',
  'correlacion',
  'corrosivo',
  'corrosion',
  'corrupcion',
  'cortar',
  'corteza',
  'corto',
  'Cortes',
  'cosa',
  'cosas',
  'cosecha',
  'cosmonauta',
  'cosmetico',
  'costa',
  'costero',
  'costilla',
  'coyotes',
  'coagulo',
  'crasher',
  'creacion',
  'creador',
  'creativo',
  'credenza',
  'creer',
  'cremallera',
  'creyendo',
  'creyente',
  'creible',
  'criatura',
  'crimen',
  'criminal',
  'cripta',
  'crisis',
  'cristal',
  'cromosoma',
  'cromatico',
  'cronologico',
  'crucero',
  'crucificador',
  'crucifijo',
  'crucifixion',
  'crudo',
  'cruel',
  'crueldad',
  'crujido',
  'crujiente',
  'craneo',
  'crater',
  'cria',
  'criptico',
  'critico',
  'cuadrado',
  'cuadro',
  'cuadricula',
  'cualquier',
  'cuarenta',
  'cuatro',
  'cubo',
  'cuello',
  'cuenca',
  'cuerno',
  'cuero',
  'cuerpo',
  'cuerpos',
  'cuervo',
  'cuestionado',
  'cueva',
  'cuidador',
  'culpa',
  'culpable',
  'cultivo',
  'culto',
  'cultural',
  'cumpleaños',
  'cuna',
  'curacion',
  'curador',
  'curiosidades',
  'curioso',
  'curva',
  'curvo',
  'cuantico',
  'calculo',
  'camara',
  'capsula',
  'centrico',
  'ciclico',
  'Ciclope',
  'cinico',
  'codigo',
  'colera',
  'como',
  'comodo',
  'complice',
  'concavo',
  'cosmicamente',
  'cosmico',
  'dama',
  'dando',
  'dardo',
  'datos',
  'dañar',
  'daño',
  'debajo',
  'debate',
  'decadencia',
  'decadente',
  'decaer',
  'decapitacion',
  'decapitar',
  'dedo',
  'deduccion',
  'defecto',
  'definitivo',
  'deformacion',
  'deformador',
  'deforme',
  'deformidad',
  'degeneracion',
  'degenerar',
  'degradante',
  'deleite',
  'deletrear',
  'delfines',
  'delfin',
  'Delgado',
  'delicadeza',
  'delicado',
  'delicioso',
  'delincuente',
  'delito',
  'demacrado',
  'democracia',
  'democratico',
  'demolicion',
  'demonio',
  'demostracion',
  'denso',
  'dentado',
  'Departamento',
  'dependiente',
  'deplorable',
  'depredador',
  'depresion',
  'depurar',
  'Derecha',
  'derechos',
  'deriva',
  'derretir',
  'desagradable',
  'desagüe',
  'desaparecido',
  'desarrollar',
  'desastre',
  'descarga',
  'descifrador',
  'descodificar',
  'descolorarse',
  'descomposicion',
  'desconcertante',
  'desconectar',
  'descontaminacion',
  'descontento',
  'describe',
  'descripcion',
  'desct',
  'descubrimiento',
  'descuidado',
  'deseo',
  'desercion',
  'desertor',
  'desesperacion',
  'desesperado',
  'desfiguracion',
  'desfigurado',
  'desfile',
  'deshonesto',
  'desierto',
  'desintegracion',
  'desintoxicacion',
  'desleal',
  'deslumbrante',
  'desmembramiento',
  'desmembrar',
  'desmontable',
  'desnudo',
  'desobedecer',
  'desolacion',
  'desoladamente',
  'desolado',
  'desorientacion',
  'despertar',
  'despido',
  'despreciable',
  'desprecio',
  'despues',
  'destello',
  'destileria',
  'destino',
  'destreza',
  'destruccion',
  'destructivo',
  'destruir',
  'desviacion',
  'detalles',
  'detenido',
  'determinado',
  'detonador',
  'detras',
  'devastacion',
  'devenir',
  'devorar',
  'devoto',
  'diablo',
  'diabolatria',
  'diabolico',
  'diagonal',
  'diamante',
  'diametral',
  'diario',
  'dias',
  'dictador',
  'diecinueve',
  'diente',
  'dientes',
  'diez',
  'diferente',
  'difuminar',
  'dificil',
  'digital',
  'dignatario',
  'dilema',
  'dimensional',
  'dimension',
  'dinamitar',
  'dinastia',
  'dinero',
  'dinosaurio',
  'dinamica',
  'Dios',
  'diplomacia',
  'diplomatico',
  'direccion',
  'directo',
  'director',
  'dirigible',
  'disciplina',
  'disco',
  'discordia',
  'disculpa',
  'discusion',
  'discipulo',
  'diseño',
  'disfraz',
  'disfrazado',
  'disfrutar',
  'disminuido',
  'disolver',
  'disponible',
  'dispositivos',
  'disruptor',
  'distanciamiento',
  'distante',
  'distinto',
  'distorsionar',
  'distorsion',
  'distraidamente',
  'distribucion',
  'distrito',
  'disturbio',
  'diva',
  'diversion',
  'divertido',
  'divinidad',
  'division',
  'divorcio',
  'doblado',
  'doble',
  'doblez',
  'doce',
  'docena',
  'docenas',
  'doctor',
  'documento',
  'dolor',
  'Dom',
  'domesticado',
  'dominacion',
  'dominante',
  'dominar',
  'domino',
  'donacion',
  'dormir',
  'dos',
  'dosificacion',
  'dotado',
  'dotante',
  'drama',
  'dramatico',
  'drimys',
  'droga',
  'duelo',
  'duende',
  'dulce',
  'duplicar',
  'duque',
  'duro',
  'debil',
  'debiles',
  'decada',
  'decimo',
  'dia',
  'eco',
  'ecuacion',
  'edificio',
  'editar',
  'efervescencia',
  'eficaz',
  'efusivo',
  'efimero',
  'ego',
  'egocentrico',
  'egoista',
  'eje',
  'ejecutar',
  'ejecutivo',
  'ejecutor',
  'Ejercito',
  'elaborar',
  'electrodo',
  'electron',
  'elefante',
  'elefantes',
  'elegante',
  'elemento',
  'elevacion',
  'eliminacion',
  'eliminar',
  'elastico',
  'electrico',
  'emboscada',
  'embotar',
  'embriagante',
  'embudo',
  'emergencia',
  'emitir',
  'emocional',
  'emocion',
  'empapar',
  'emperador',
  'empezar',
  'empoderamiento',
  'empresa',
  'empujar',
  'empatico',
  'empirico',
  'enajenar',
  'encadenar',
  'encantador',
  'encanto',
  'encima',
  'encontrar',
  'encuentro',
  'endeble',
  'enemigo',
  'enemigos',
  'energia',
  'enfadado',
  'enfado',
  'enfermedad',
  'enfermera',
  'enfermos',
  'enfurecer',
  'engañador',
  'engañar',
  'engaño',
  'engranaje',
  'engullendo',
  'enigma',
  'enjambre',
  'enlazar',
  'enloquecido',
  'enojado',
  'enorme',
  'enredadera',
  'ensueño',
  'enterrado',
  'entidad',
  'entierro',
  'Entrada',
  'entrar',
  'entre',
  'Entre',
  'entretener',
  'entropia',
  'envase',
  'Envejecido',
  'envenenador',
  'envio',
  'enzima',
  'episodio',
  'equilibrar',
  'equipo',
  'equivalente',
  'equivocado',
  'ermitaño',
  'error',
  'erupcion',
  'erotica',
  'erotico',
  'escama',
  'escapar',
  'escapatoria',
  'escapista',
  'escarcha',
  'escenario',
  'esclavo',
  'esconder',
  'escondite',
  'escopeta',
  'escotilla',
  'escaner',
  'escenico',
  'esencia',
  'esencial',
  'esfera',
  'esoterico',
  'espada',
  'espalda',
  'espantosamente',
  'espectador',
  'espejo',
  'esperanza',
  'espiga',
  'esponja',
  'esposa',
  'espuma',
  'espiritu',
  'esquema',
  'establecimiento',
  'estacion',
  'estado',
  'estafador',
  'estaño',
  'este',
  'estimar',
  'estrella',
  'estupendo',
  'esteril',
  'estupido',
  'eternidad',
  'eterno',
  'eunuco',
  'evacuacion',
  'evacuar',
  'evaluar',
  'evectional',
  'evento',
  'eventual',
  'evidencia',
  'evitar',
  'evocar',
  'evolucion',
  'exactitud',
  'exacto',
  'exaltado',
  'examinador',
  'excavadora',
  'excelente',
  'Excelente',
  'excepcion',
  'excesivo',
  'exceso',
  'exclusivo',
  'excrementos',
  'excusa',
  'exilio',
  'existente',
  'exorcismo',
  'expansion',
  'experimentar',
  'experto',
  'expiacion',
  'explicable',
  'explosion',
  'explicito',
  'exponer',
  'exportar',
  'exposicion',
  'expresivo',
  'expresion',
  'Exquisito',
  'extenso',
  'exterior',
  'externo',
  'extorsion',
  'extra',
  'extraer',
  'extraterrestre',
  'Extravagante',
  'extravagante',
  'extraño',
  'extremista',
  'extremo',
  'fabricacion',
  'faccion',
  'fachada',
  'factual',
  'falla',
  'fallar',
  'falsificacion',
  'falsificador',
  'falso',
  'falta',
  'familia',
  'famoso',
  'fanfarronear',
  'fantasma',
  'fantasmal',
  'fantastico',
  'fanatico',
  'faraon',
  'farmacia',
  'Faro',
  'farsa',
  'fascinante',
  'fase',
  'fatal',
  'fatalidad',
  'favor',
  'favorable',
  'fe',
  'federacion',
  'federal',
  'felicidad',
  'feliz',
  'felizmente',
  'felpa',
  'felon',
  'fenomenal',
  'fenomenos',
  'feo',
  'fermentacion',
  'fermentar',
  'feroz',
  'Fertilidad',
  'festival',
  'fetiche',
  'feudal',
  'fiasco',
  'ficticio',
  'fiebre',
  'fijar',
  'filamento',
  'filosofia',
  'filtrar',
  'fin',
  'final',
  'financiar',
  'financiero',
  'finito',
  'firma',
  'flecha',
  'flechas',
  'flexible',
  'flirteo',
  'flophouse',
  'flor',
  'floracion',
  'floral',
  'florecer',
  'flores',
  'flotar',
  'fluctuacion',
  'fluido',
  'flujo',
  'fondo',
  'fonetico',
  'fonografo',
  'formal',
  'formar',
  'formulacion',
  'fornicador',
  'fornido',
  'fortaleza',
  'fortuna',
  'fortin',
  'fotografia',
  'fraccion',
  'fractura',
  'fragmento',
  'frambuesa',
  'frances',
  'franja',
  'franqueza',
  'fraude',
  'fraudulento',
  'frecuencia',
  'frecuente',
  'frente',
  'frenetico',
  'Fresco',
  'frijol',
  'frito',
  'fritura',
  'frontera',
  'frustracion',
  'fragil',
  'frigido',
  'frio',
  'fuego',
  'fuente',
  'fuerte',
  'fuerza',
  'fugitivo',
  'fumar',
  'funcional',
  'Fundacion',
  'fundador',
  'fundamental',
  'fundido',
  'funeral',
  'furioso',
  'fusible',
  'futurista',
  'futuro',
  'fabrica',
  'facil',
  'farmaco',
  'femur',
  'fertil',
  'formula',
  'fosil',
  'gacela',
  'galeria',
  'Galopando',
  'galactico',
  'gamberro',
  'ganado',
  'gancho',
  'gangland',
  'garaje',
  'garantizado',
  'gargantilla',
  'garra',
  'gateando',
  'gatear',
  'gatito',
  'gato',
  'gemas',
  'gemelo',
  'gemido',
  'Generacion',
  'general',
  'genialidad',
  'gente',
  'genuino',
  'genetico',
  'geometria',
  'geometrico',
  'germen',
  'gestual',
  'ghetto',
  'gigante',
  'gigantesco',
  'gimiendo',
  'gimnasta',
  'gimnastico',
  'glacial',
  'glaciar',
  'glamour',
  'glandular',
  'global',
  'globo',
  'gloria',
  'gloton',
  'gluglu',
  'glandula',
  'gobernador',
  'Golfo',
  'golpear',
  'golpetazo',
  'golpeteo',
  'goma',
  'gorgoteo',
  'gorila',
  'gorrion',
  'gota',
  'gotas',
  'goteante',
  'goteo',
  'gotita',
  'grabar',
  'gradiente',
  'grado',
  'granada',
  'grande',
  'grandioso',
  'granero',
  'granito',
  'granja',
  'grano',
  'granoso',
  'granularidad',
  'grasa',
  'grasiento',
  'gratis',
  'grava',
  'grave',
  'gravitacional',
  'gremio',
  'grieta',
  'Grillo',
  'gris',
  'gritar',
  'gritos',
  'grosero',
  'grotesco',
  'grueso',
  'grupo',
  'gruñido',
  'gruñidos',
  'grafico',
  'guantelete',
  'guantes',
  'Guardia',
  'guarida',
  'guerra',
  'guerrero',
  'guerrilla',
  'guillotina',
  'guru',
  'gusano',
  'gusto',
  'guia',
  'gangster',
  'gargola',
  'habilidades',
  'habitacion',
  'habitual',
  'hablar',
  'hacha',
  'Halar',
  'halcon',
  'hambre',
  'hambriento',
  'hangar',
  'harplike',
  'haz',
  'Hazme',
  'heelbone',
  'helicoptero',
  'hemofilico',
  'heraldo',
  'hereje',
  'hermano',
  'hermosa',
  'hermetico',
  'heroico',
  'heretico',
  'hibernacion',
  'hiedra',
  'hiena',
  'hierba',
  'hija',
  'himno',
  'hinchado',
  'hipnotico',
  'hipopotamo',
  'hirsuto',
  'historia',
  'historico',
  'Hobby',
  'hogtied',
  'hoja',
  'homicida',
  'homicidio',
  'honestidad',
  'honesto',
  'honor',
  'honorario',
  'hoopla',
  'hora',
  'horizontal',
  'horizonte',
  'hormigon',
  'hormonal',
  'hornear',
  'horrendo',
  'horrible',
  'horripilante',
  'horror',
  'horrores',
  'horoscopo',
  'hospital',
  'hostilidad',
  'hotel',
  'hueco',
  'huerta',
  'hueso',
  'huevo',
  'humanamente',
  'humano',
  'humildad',
  'humilde',
  'huerfano',
  'huesped',
  'habito',
  'hamster',
  'helice',
  'heroe',
  'heroes',
  'hibrido',
  'higado',
  'humedo',
  'ideal',
  'identidad',
  'ido',
  'identico',
  'Iglesia',
  'ignorante',
  'igual',
  'iguana',
  'ilegal',
  'iluminar',
  'imaginario',
  'imbecil',
  'impar',
  'imperio',
  'implante',
  'impostor',
  'impotente',
  'imprimir',
  'impuro',
  'impio',
  'iman',
  'incendiario',
  'incesante',
  'incluso',
  'incorrecto',
  'increible',
  'incredulo',
  'indecente',
  'indefenso',
  'indudable',
  'industria',
  'industrial',
  'infantil',
  'infierno',
  'infinito',
  'inflamable',
  'inflar',
  'ingenuo',
  'inicial',
  'injusticia',
  'inmuebles',
  'inmundicia',
  'inmundo',
  'inmunidad',
  'inocente',
  'inofensivo',
  'insano',
  'insecto',
  'inseguro',
  'inteligente',
  'intento',
  'intercambiar',
  'interior',
  'interminable',
  'interno',
  'interrumpir',
  'intrigante',
  'intruso',
  'inundar',
  'invasor',
  'invencion',
  'inversion',
  'inverso',
  'investigacion',
  'invierno',
  'invisible',
  'invitacion',
  'inutil',
  'irresistible',
  'isla',
  'islamismo',
  'izar',
  'izquierda',
  'Jabali',
  'jade',
  'jadeante',
  'jardines',
  'jardin',
  'jaula',
  'jefe',
  'jengibre',
  'jerid',
  'joroba',
  'jorobado',
  'joven',
  'joya',
  'joypop',
  'juego',
  'jugador',
  'jugar',
  'jugo',
  'juguete',
  'juicio',
  'justicia',
  'juvenil',
  'junior',
  'labios',
  'ladrar',
  'ladrillo',
  'ladron',
  'lagartija',
  'lamentar',
  'lamer',
  'langosta',
  'lanzamiento',
  'largo',
  'latente',
  'laton',
  'lavabo',
  'lavanda',
  'lavaplatos',
  'lazo',
  'leal',
  'lechoso',
  'legendario',
  'legion',
  'legumbres',
  'lengua',
  'lesion',
  'letal',
  'levantamiento',
  'levitando',
  'leyenda',
  'leon',
  'liberacion',
  'liberal',
  'libertad',
  'libertador',
  'libertinaje',
  'libra',
  'licker',
  'licor',
  'licuadora',
  'Ligar',
  'ligero',
  'Lima',
  'limpiar',
  'limusina',
  'limon',
  'lineal',
  'linterna',
  'llamada',
  'llameante',
  'llanura',
  'llave',
  'llegada',
  'llorar',
  'lloro',
  'lluvia',
  'lobo',
  'Lobos',
  'loca',
  'loco',
  'locura',
  'lona',
  'loro',
  'lote',
  'loteria',
  'lubricante',
  'luces',
  'lucha',
  'luchador',
  'lugar',
  'lujo',
  'lujoso',
  'lujuria',
  'luminoso',
  'Luna',
  'lustre',
  'lustroso',
  'luz',
  'laser',
  'lastima',
  'latigo',
  'limite',
  'liquido',
  'logica',
  'logico',
  'macabro',
  'madre',
  'maduro',
  'magnetico',
  'magnifico',
  'mago',
  'mal',
  'maldicion',
  'maldito',
  'maleficio',
  'malo',
  'manada',
  'mando',
  'manejar',
  'manguera',
  'mano',
  'manos',
  'manzana',
  'mapache',
  'maravilloso',
  'marca',
  'marcar',
  'mareado',
  'Marfil',
  'margarita',
  'margaritas',
  'marginal',
  'marica',
  'marioneta',
  'mariquita',
  'marron',
  'martingala',
  'martini',
  'Maria',
  'masacre',
  'masivo',
  'masticable',
  'matadero',
  'matar',
  'maton',
  'mayor',
  'maza',
  'mecanico',
  'medicina',
  'medusa',
  'megaciudad',
  'mejor',
  'melancolico',
  'melocoton',
  'melodia',
  'memoria',
  'mendicidad',
  'mendigo',
  'Mensajero',
  'menta',
  'mental',
  'mente',
  'meridional',
  'mestizo',
  'Mesias',
  'metal',
  'metalico',
  'mezcla',
  'mezclado',
  'mezclador',
  'miel',
  'militar',
  'mimar',
  'mimoso',
  'minipildora',
  'minusculo',
  'Mirad',
  'miron',
  'miserable',
  'mision',
  'misterio',
  'misterioso',
  'mitad',
  'Moda',
  'modelo',
  'moderno',
  'mohawk',
  'moho',
  'mojado',
  'molecular',
  'moler',
  'molesto',
  'molienda',
  'molinillo',
  'momento',
  'momentaneo',
  'monarquia',
  'moneria',
  'mono',
  'monocromo',
  'monstruo',
  'monstruoso',
  'montaje',
  'montaña',
  'mordedor',
  'mordedura',
  'mortal',
  'mostrar',
  'motor',
  'mueca',
  'muerte',
  'muerto',
  'mugre',
  'muleta',
  'multimillonario',
  'multitud',
  'mundo',
  'municion',
  'murcielago',
  'muscular',
  'mutacion',
  'mutageno',
  'mutante',
  'mutilacion',
  'muñeca',
  'magico',
  'maquina',
  'marmol',
  'martir',
  'Mas',
  'mascara',
  'maximo',
  'minimo',
  'mistico',
  'mitico',
  'morbido',
  'musculo',
  'nacido',
  'nacional',
  'nadie',
  'naranja',
  'narcotico',
  'natural',
  'navaja',
  'nebulosa',
  'necrotico',
  'negativo',
  'negocio',
  'negrita',
  'negro',
  'negrura',
  'nervio',
  'nervioso',
  'neumatico',
  'neurotico',
  'neon',
  'niebla',
  'ninguna',
  'nitro',
  'nivel',
  'niñera',
  'niño',
  'niños',
  'noble',
  'noche',
  'noir',
  'norma',
  'normal',
  'norte',
  'nostalgico',
  'nube',
  'nuclear',
  'nudillo',
  'nudillos',
  'nudo',
  'nuevo',
  'numbskull',
  'numerico',
  'nectar',
  'nomada',
  'numero',
  'obedecer',
  'objetivo',
  'objeto',
  'oblicuo',
  'observador',
  'obsesionante',
  'obsesion',
  'obstaculo',
  'occidental',
  'Oceano',
  'ocho',
  'oculto',
  'odio',
  'Oeste',
  'oficial',
  'ojo',
  'ojos',
  'olvidado',
  'ombligo',
  'omnivoro',
  'Opcional',
  'operistico',
  'oposicion',
  'oracion',
  'orangutang',
  'orbe',
  'ordalias',
  'oreja',
  'orfanato',
  'orgulloso',
  'oriental',
  'original',
  'ornamental',
  'oro',
  'ortodoxo',
  'oruga',
  'oscuridad',
  'oscuro',
  'oso',
  'otoño',
  'oir',
  'paciente',
  'padre',
  'pagano',
  'paisaje',
  'paloma',
  'Paloma',
  'pana',
  'pandemia',
  'pandilla',
  'pantalones',
  'pantano',
  'panzada',
  'papel',
  'papi',
  'paquete',
  'paracaidas',
  'parachoque',
  'paradoja',
  'paralela',
  'paralizado',
  'paraiso',
  'pared',
  'Pareja',
  'parpadea',
  'parpadeo',
  'parrilla',
  'participacion',
  'paralisis',
  'parasito',
  'pasajero',
  'pasion',
  'pastoral',
  'patada',
  'Pato',
  'patria',
  'patrimonio',
  'patrulla',
  'pavimento',
  'pavor',
  'payasadas',
  'pais',
  'paño',
  'pecoso',
  'pedazo',
  'pegajoso',
  'pegar',
  'peligro',
  'peligroso',
  'pellizco',
  'pelota',
  'peluca',
  'peludo',
  'pelusa',
  'pelicula',
  'pensar',
  'pension',
  'pequeño',
  'percebe',
  'percepcion',
  'perdedor',
  'perdonado',
  'peregrino',
  'perezoso',
  'perfeccion',
  'perfecto',
  'Perfecto',
  'perfil',
  'perforar',
  'perfume',
  'periodico',
  'perla',
  'permitir',
  'permuta',
  'perro',
  'perros',
  'personal',
  'pertenencias',
  'pervertido',
  'pesadilla',
  'pesado',
  'pesimista',
  'petardo',
  'pez',
  'pezuñas',
  'picadillo',
  'picar',
  'picnic',
  'pico',
  'pictorico',
  'pie',
  'piedra',
  'piel',
  'pies',
  'piezas',
  'pigsticker',
  'piloto',
  'pingüino',
  'pintada',
  'pinzon',
  'piruli',
  'piramides',
  'pistola',
  'pistolas',
  'piton',
  'piña',
  'placa',
  'planchar',
  'planeador',
  'planeta',
  'planetario',
  'plano',
  'planta',
  'plantacion',
  'plasma',
  'plata',
  'playa',
  'plegable',
  'pluma',
  'platano',
  'platanos',
  'pobre',
  'poco',
  'poder',
  'poderoso',
  'podrido',
  'poesia',
  'poeta',
  'polar',
  'polilla',
  'pollo',
  'polvo',
  'polemico',
  'pompa',
  'poni',
  'popular',
  'porque',
  'portador',
  'portal',
  'porton',
  'poseer',
  'posesion',
  'posicion',
  'positivo',
  'posterior',
  'potencial',
  'potro',
  'poetico',
  'pragmatico',
  'predecir',
  'prediccion',
  'preguntarse',
  'premio',
  'preparar',
  'presente',
  'preservar',
  'presidente',
  'presion',
  'presunto',
  'pretender',
  'prima',
  'primate',
  'primero',
  'primitivo',
  'Primogenito',
  'principal',
  'principiante',
  'privado',
  'privilegiado',
  'privilegio',
  'probado',
  'proceso',
  'produccion',
  'profeta',
  'profetas',
  'profetizar',
  'profundo',
  'profetico',
  'programa',
  'prohibido',
  'promedio',
  'promesa',
  'prometido',
  'pronto',
  'propaganda',
  'propiedad',
  'propuesta',
  'propulsor',
  'proposito',
  'proteccion',
  'proteger',
  'protesta',
  'proveedor',
  'proyeccion',
  'proyecto',
  'prueba',
  'practico',
  'psicopata',
  'pueblo',
  'puente',
  'puerta',
  'puerto',
  'Puerto',
  'pulgar',
  'pulpo',
  'Puma',
  'punto',
  'puro',
  'putrefaccion',
  'puñetazo',
  'puño',
  'pajaro',
  'palido',
  'panico',
  'paramos',
  'pelvico',
  'pesimo',
  'pildora',
  'publico',
  'purpura',
  'quebradizo',
  'quemado',
  'quemar',
  'quirurgico',
  'quimico',
  'rabia',
  'racimo',
  'RAID',
  'rama',
  'ramera',
  'rana',
  'ranas',
  'rancho',
  'ranura',
  'raqueta',
  'raro',
  'raspado',
  'rastle',
  'rastling',
  'rastreada',
  'rata',
  'rayo',
  'rayuela',
  'razon',
  'raiz',
  'real',
  'realeza',
  'realidad',
  'rebelde',
  'rebotar',
  'reciente',
  'recluso',
  'recoger',
  'redondo',
  'refinamiento',
  'refugiado',
  'regalo',
  'regional',
  'regusto',
  'rehen',
  'reina',
  'Reino',
  'reloj',
  'reluciente',
  'relampago',
  'repentino',
  'repeticion',
  'repetir',
  'reptil',
  'repugnante',
  'republica',
  'resaca',
  'resbaladizo',
  'rescate',
  'resplandecer',
  'resplandor',
  'responder',
  'retirada',
  'reto',
  'retorcido',
  'retozon',
  'retrato',
  'retroceder',
  'revelacion',
  'revuelta',
  'revuelto',
  'Rey',
  'Rico',
  'rico',
  'rimbombante',
  'rival',
  'robo',
  'robot',
  'robotico',
  'roedor',
  'rojo',
  'rompecabezas',
  'rompeolas',
  'Ron',
  'Rosa',
  'rosado',
  'rosario',
  'rosquilla',
  'roto',
  'rubia',
  'rubor',
  'rubi',
  'ruido',
  'ruina',
  'rapido',
  'replica',
  'rigido',
  'sabiduria',
  'sabio',
  'sabor',
  'sabotaje',
  'sabueso',
  'sacudir',
  'sagrado',
  'sal',
  'salado',
  'salida',
  'salsa',
  'saltamontes',
  'saltar',
  'salto',
  'saludable',
  'salvaje',
  'sanar',
  'sangrar',
  'sangre',
  'sangriento',
  'sangria',
  'sanguijuela',
  'sanguinario',
  'sanitario',
  'santo',
  'sauce',
  'seccion',
  'seco',
  'sector',
  'secuelas',
  'secuestrado',
  'secuestrador',
  'secuestro',
  'sede',
  'seductor',
  'seguir',
  'seguro',
  'seis',
  'semental',
  'semilla',
  'sensacion',
  'sentimientos',
  'separarse',
  'serenidad',
  'serie',
  'serpiente',
  'serrin',
  'servidor',
  'seta',
  'severo',
  'sexo',
  'sexual',
  'señal',
  'señor',
  'siempre',
  'siendo',
  'Siete',
  'siglo',
  'silbido',
  'silencio',
  'silla',
  'Sillon',
  'simbolico',
  'simple',
  'sintio',
  'sirena',
  'sistema',
  'Smo',
  'soborno',
  'sobre',
  'social',
  'sociedad',
  'sofa',
  'solapa',
  'soledad',
  'solicitud',
  'Solitario',
  'solitario',
  'soltar',
  'soltero',
  'sombra',
  'sombrero',
  'sombriamente',
  'sonar',
  'sonda',
  'Sonic',
  'sonriendo',
  'sonrisa',
  'sonrojo',
  'sopa',
  'soplete',
  'soplo',
  'sostener',
  'Sostener',
  'soñador',
  'soñoliento',
  'sprites',
  'suave',
  'subasta',
  'submarino',
  'subsonico',
  'subterraneo',
  'suciedad',
  'sucio',
  'sudor',
  'suelo',
  'suero',
  'suerte',
  'sueño',
  'supresion',
  'sur',
  'surgir',
  'surrealista',
  'suspender',
  'susto',
  'susurro',
  'sadico',
  'simbolo',
  'solido',
  'sotano',
  'super',
  'tallista',
  'talon',
  'tambor',
  'tanque',
  'tarde',
  'tarro',
  'tartan',
  'tejon',
  'tela',
  'temblor',
  'temerario',
  'temeroso',
  'temible',
  'temor',
  'temprano',
  'tenedor',
  'terminar',
  'terror',
  'terricolas',
  'terron',
  'tesoro',
  'testaferro',
  'testigo',
  'tiburon',
  'tiempo',
  'tierra',
  'tierras',
  'Tigre',
  'tinta',
  'tipo',
  'tirano',
  'tiroteo',
  'tiza',
  'tizon',
  'tobillo',
  'tocino',
  'todopoderoso',
  'tolva',
  'tono',
  'tonto',
  'torcido',
  'tornado',
  'toro',
  'torpe',
  'torpedo',
  'torpeza',
  'tos',
  'total',
  'tractor',
  'traer',
  'traicionar',
  'traicion',
  'trama',
  'trampa',
  'traqueteo',
  'trastabillar',
  'trauma',
  'treed',
  'tripas',
  'triste',
  'tristeza',
  'trituradora',
  'triangulo',
  'trozo',
  'truco',
  'trueno',
  'tragico',
  'trebol',
  'tuberia',
  'tubo',
  'tugurio',
  'tumba',
  'turbio',
  'tutor',
  'tactica',
  'tactico',
  'termino',
  'timido',
  'unidad',
  'Union',
  'uno',
  'urbano',
  'usable',
  'uva',
  'vacaciones',
  'vacante',
  'vacas',
  'vacilacion',
  'vacilante',
  'vacio',
  'vagabundo',
  'valiente',
  'valientemente',
  'valor',
  'vampiro',
  'varios',
  'vaso',
  'vasto',
  'vejiga',
  'vela',
  'velocidad',
  'vencido',
  'venda',
  'veneno',
  'venenoso',
  'venganza',
  'vengar',
  'ventaja',
  'verdad',
  'verde',
  'verdugo',
  'vergonzoso',
  'vestir',
  'vibrador',
  'victoria',
  'vida',
  'vientre',
  'villano',
  'vinilo',
  'violencia',
  'violento',
  'Virgen',
  'virtual',
  'viruela',
  'visitante',
  'vision',
  'vivir',
  'vocacion',
  'voladura',
  'volar',
  'volcan',
  'volcanico',
  'volumen',
  'voluntarioso',
  'volverse',
  'voz',
  'vuelo',
  'vibora',
  'web',
  'Westwork',
  'ya',
  'yendo',
  'Zanahoria',
  'zanja',
  'zombi',
  'zona',
  'zoo',
  'zorra',
  'zumbador',
  'zumbido',
  'acido',
  'aguila',
  'ambar',
  'angel',
  'arbol',
  'aspero',
  'atico',
  'ebano',
  'elite',
  'eter',
  'etico',
  'intimo',
  'optimo',
  'ultimo',
];
