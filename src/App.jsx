import React, { useState, useEffect } from 'react';

const preguntasSemana1 = [
  {
    pregunta: "¿Cuál es la diferencia principal entre Marketing Estratégico y Operativo?",
    opciones: [
      "Estratégico es análisis a largo plazo; Operativo es acción a corto plazo",
      "Estratégico maneja ventas; Operativo maneja publicidad",
      "Estratégico es para B2B; Operativo para B2C",
      "Son términos intercambiables"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué representa la 'O' en el análisis FODA?",
    opciones: ["Oportunidades", "Objetivos", "Operaciones", "Organización"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál NO es un criterio de segmentación válido?",
    opciones: ["Geográfico", "Demográfico", "Psicográfico", "Financiero"],
    respuestaCorrecta: 3
  },
  {
    pregunta: "¿Qué significa la 'M' en objetivos SMART?",
    opciones: ["Medibles", "Motivadores", "Mensurables", "Monetarios"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué nivel de producto incluye marca y diseño?",
    opciones: ["Básico", "Real", "Aumentado", "Potencial"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Método de fijación de precio basado en costos de producción?",
    opciones: ["Coste", "Demanda", "Competencia", "Subasta"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "Estrategia de distribución que busca máxima cobertura (Plaza):",
    opciones: ["Intensiva", "Selectiva", "Exclusiva", "Directa"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué actividad pertenece a RRPP en Promoción?",
    opciones: ["Anuncios TV", "Patrocinios", "Descuentos", "Publicidad redes"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "Elemento FODA interno y positivo:",
    opciones: ["Fortaleza", "Oportunidad", "Debilidad", "Amenaza"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "Característica SMART que permite evaluar resultados:",
    opciones: ["Específicos", "Medibles", "Alcanzables", "Relevantes"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué es el Marketing Estratégico?",
    opciones: [
      "Análisis de mercado y planificación a largo plazo",
      "Ejecución de campañas publicitarias",
      "Venta directa de productos",
      "Atención al cliente inmediata"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué son las Amenazas en el análisis FODA?",
    opciones: [
      "Factores externos que pueden afectar negativamente",
      "Fortalezas de la competencia",
      "Debilidades internas de la empresa",
      "Oportunidades de mercado"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué incluye la segmentación demográfica?",
    opciones: [
      "Edad, género, ingresos y nivel educativo",
      "Estilo de vida y personalidad",
      "Ubicación geográfica y clima",
      "Frecuencia de compra y lealtad"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué significa la 'S' en objetivos SMART?",
    opciones: ["Específicos", "Sostenibles", "Simples", "Seguros"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En las 4Ps, ¿qué es el producto aumentado?",
    opciones: [
      "Garantía, servicio postventa y beneficios adicionales",
      "El beneficio básico del producto",
      "Solo la marca y el empaque",
      "El precio de venta al público"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "Método de fijación de precio basado en la demanda:",
    opciones: [
      "Encuestas y disposición de pago del cliente",
      "Costos de producción más margen",
      "Precio de la competencia",
      "Subasta abierta"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "Estrategia de distribución exclusiva (Plaza):",
    opciones: [
      "Pocos puntos de venta selectos y controlados",
      "Máxima cobertura en todos lados",
      "Venta solo por internet",
      "Distribución masiva en supermercados"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué significa la 'T' en objetivos SMART?",
    opciones: ["A Tiempo (con plazo definido)", "Táctico", "Temporal", "Total"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el FODA, ¿qué son las Debilidades?",
    opciones: [
      "Factores internos que limitan a la empresa",
      "Factores externos positivos",
      "Oportunidades del mercado",
      "Fortalezas de la competencia"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es la segmentación psicográfica?",
    opciones: [
      "Basada en estilo de vida, valores y personalidad",
      "Basada en edad y género",
      "Basada en ubicación geográfica",
      "Basada en frecuencia de compra"
    ],
    respuestaCorrecta: 0
  }
];

const preguntasSemana2 = [
  {
    pregunta: "En el marketing de servicios, ¿qué rol cumple la secretaria en una academia?",
    opciones: [
      "Es el primer contacto y representa la imagen inicial",
      "Solo se encarga de tareas administrativas sin contacto",
      "Es responsable exclusivo de las ventas",
      "No tiene relevancia en el marketing de servicios"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el ciclo de vida del producto, ¿qué etapa se caracteriza por ventas crecientes y entrada de competidores?",
    opciones: ["Crecimiento", "Introducción", "Madurez", "Declive"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué representa la 'Presencia' (evidencia física) en las 3Ps de servicios?",
    opciones: [
      "Instalaciones, material didáctico y entorno digital",
      "Solo la publicidad en redes sociales",
      "El precio del servicio",
      "La estrategia de distribución"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En la Matriz BCG, ¿cómo se clasifican los productos con alta participación de mercado y alto crecimiento?",
    opciones: ["Estrella", "Vaca", "Interrogante", "Perro"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál es la característica principal de la etapa de 'Madurez' en el ciclo de vida?",
    opciones: [
      "Ventas estables y saturación del mercado",
      "Ventas en declive acelerado",
      "Lanzamiento y crecimiento inicial",
      "No hay competencia en esta etapa"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el análisis de cartera, ¿qué mide la 'Amplitud'?",
    opciones: [
      "Número de líneas de productos diferentes",
      "Número de productos en una línea",
      "Número de variantes de un producto",
      "El precio promedio de los productos"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué incluye el componente 'Procesos' en marketing de servicios?",
    opciones: [
      "Flujo desde la información hasta la posventa",
      "Solo la contratación del servicio",
      "Únicamente la publicidad del servicio",
      "El diseño del producto físico"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En la academia 'Global Skills', ¿qué rol cumple el asesor en el marketing de servicios?",
    opciones: [
      "Gestiona las ventas y el asesoramiento personalizado",
      "Solo atiende llamadas telefónicas",
      "Se encarga únicamente de la limpieza",
      "No interactúa con los clientes"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En la Matriz BCG, ¿cómo se llaman los productos con baja participación y bajo crecimiento?",
    opciones: ["Perro", "Vaca", "Estrella", "Interrogante"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En 'Global Skills', ¿qué elementos conforman la 'Presencia' (evidencia física)?",
    opciones: [
      "Instalaciones, material didáctico y entorno digital",
      "Solo el uniforme de los empleados",
      "Únicamente el precio de las clases",
      "La competencia académica"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el ciclo de vida, ¿qué caracteriza la etapa de 'Introducción'?",
    opciones: [
      "Ventas lentas y altos costos de promoción",
      "Ventas máximas y competencia estable",
      "Declive acelerado de ventas",
      "Saturación total del mercado"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En la Matriz BCG, ¿qué es una 'Vaca'?",
    opciones: [
      "Alta participación y bajo crecimiento (genera efectivo)",
      "Bajo crecimiento y baja participación",
      "Alto crecimiento y baja participación",
      "Alto crecimiento y alta participación"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el análisis de cartera, ¿qué mide la 'Longitud'?",
    opciones: [
      "Número total de productos en una línea",
      "Número de líneas diferentes",
      "Número de variantes de un producto",
      "La profundidad de precios"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué son las 'Personas' en las 3Ps de servicios?",
    opciones: [
      "Todo el personal que interactúa con el cliente",
      "Solo los dueños de la empresa",
      "Únicamente los clientes",
      "Los proveedores externos"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En la Matriz BCG, ¿qué es un 'Interrogante'?",
    opciones: [
      "Alto crecimiento y baja participación (requiere inversión)",
      "Baja participación y bajo crecimiento",
      "Alta participación y alto crecimiento",
      "Alta participación y bajo crecimiento"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el análisis de cartera, ¿qué mide la 'Profundidad'?",
    opciones: [
      "Número de variantes de un mismo producto",
      "Número de líneas de productos",
      "Número total de productos",
      "El margen de ganancia"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el plan de acción, ¿qué define el 'Quién'?",
    opciones: [
      "La persona o departamento responsable",
      "El presupuesto asignado",
      "La fecha de ejecución",
      "El objetivo de la táctica"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el ciclo de vida, ¿qué ocurre en la etapa de 'Declive'?",
    opciones: [
      "Ventas en caída y reducción de competencia",
      "Crecimiento acelerado de ventas",
      "Estabilidad en el mercado",
      "Lanzamiento de nuevos productos"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el presupuesto, ¿qué define el 'Cuánto'?",
    opciones: [
      "El costo total de ejecutar las tácticas",
      "El responsable del gasto",
      "La fecha de inicio",
      "El objetivo de ventas"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En 'Global Skills', ¿cómo influye el asesor en el proceso de ventas?",
    opciones: [
      "Brinda asesoramiento personalizado y cierra ventas",
      "Solo registra los datos del cliente",
      "No participa en el proceso de ventas",
      "Solo se encarga del material didáctico"
    ],
    respuestaCorrecta: 0
  }
];

const preguntasSemana3 = [
  {
    pregunta: "¿Cuál es la diferencia entre Nombre comercial y Logotipo?",
    opciones: [
      "Nombre comercial es la denominación; Logotipo es el diseño gráfico",
      "Son términos idénticos",
      "Logotipo es el nombre legal de la empresa",
      "Nombre comercial es solo para productos físicos"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En la identidad de marca, ¿qué es un Isotipo?",
    opciones: [
      "Símbolo gráfico que representa a la marca sin texto",
      "El nombre completo de la empresa en letra cursiva",
      "El eslogan publicitario de la marca",
      "El logotipo con colores brillantes"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué incluye el producto 'Real'?",
    opciones: [
      "Marca, diseño, empaque y características tangibles",
      "Solo el beneficio básico que satisface la necesidad",
      "Garantía y servicio postventa",
      "El precio de venta al público"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es el producto 'Aumentado'?",
    opciones: [
      "Garantía, servicio postventa y beneficios adicionales",
      "El producto básico sin empaque",
      "Solo la marca y el diseño",
      "El producto en su fase de declive"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál es la función del envase primario?",
    opciones: [
      "Contiene el producto en contacto directo con él",
      "Protege el producto durante el transporte",
      "Agrupa varios productos para distribución",
      "Es la caja que se usa en el punto de venta"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En 'Global Skills', ¿qué elementos de evidencia física (presencia) son clave?",
    opciones: [
      "Instalaciones, material didáctico y entorno digital",
      "Solo el precio de las clases",
      "Únicamente la publicidad en redes",
      "El número de empleados"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué incluye el servicio al cliente en la etapa de 'Preventa'?",
    opciones: [
      "Información, asesoramiento y atención previa a la compra",
      "Solo la entrega del producto",
      "Garantía y devoluciones",
      "El empaque del producto"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En 'Global Skills', ¿qué rol cumple el personal (personas) en la estrategia?",
    opciones: [
      "Secretaria (primer contacto) y asesor (ventas personalizadas)",
      "Solo se encargan de la limpieza",
      "No tienen impacto en la estrategia",
      "Solo atienden problemas técnicos"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es el embalaje terciario?",
    opciones: [
      "Protección para transporte y distribución masiva",
      "El envase que toca el producto directamente",
      "La caja individual de cada producto",
      "El diseño gráfico del empaque"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué elementos conforman el servicio en la etapa de 'Posventa'?",
    opciones: [
      "Garantía, soporte técnico y seguimiento postcompra",
      "Solo la publicidad del producto",
      "El diseño del empaque primario",
      "La fijación del precio inicial"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es el producto 'Básico'?",
    opciones: [
      "El beneficio fundamental que satisface la necesidad",
      "Marca, diseño y empaque",
      "Garantía y servicio postventa",
      "El precio y la distribución"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál es la diferencia entre Logotipo e Isotipo?",
    opciones: [
      "Logotipo incluye texto; Isotipo es solo el símbolo",
      "Son exactamente lo mismo",
      "Isotipo incluye texto; Logotipo es símbolo",
      "Logotipo es solo para empresas grandes"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es el empaque secundario?",
    opciones: [
      "Agrupa varios productos para exhibición y venta",
      "Toca directamente al producto",
      "Se usa solo para transporte masivo",
      "Es el diseño gráfico exterior"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el servicio al cliente, ¿qué ocurre en la etapa de 'Venta'?",
    opciones: [
      "Proceso de pago, entrega y experiencia de compra",
      "Solo asesoramiento previo",
      "Garantía y devoluciones",
      "Publicidad del producto"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es la identidad de marca?",
    opciones: [
      "Conjunto de elementos visuales y conceptuales que identifican a la marca",
      "Solo el logotipo de la empresa",
      "El precio de los productos",
      "La ubicación de la empresa"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En 'Global Skills', ¿cómo apoya la secretaria en el marketing de servicios?",
    opciones: [
      "Es el primer contacto y genera la primera impresión",
      "Solo realiza tareas contables",
      "No tiene contacto con los clientes",
      "Solo gestiona el inventario"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué elementos conforman el envase y embalaje?",
    opciones: [
      "Primario (contacto), secundario (agrupación) y terciario (transporte)",
      "Solo el diseño gráfico exterior",
      "Únicamente el precio impreso",
      "Solo la marca del producto"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En el servicio al cliente, ¿qué incluye la 'Venta'?",
    opciones: [
      "Atención durante el proceso de compra y entrega",
      "Solo la publicidad previa",
      "Garantía y soporte técnico",
      "El diseño del empaque"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es el Nombre comercial?",
    opciones: [
      "La denominación bajo la cual se comercializa un producto o servicio",
      "El símbolo gráfico de la empresa",
      "El eslogan publicitario",
      "El precio de venta"
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: "En 'Global Skills', ¿qué importancia tiene el entorno digital como evidencia física?",
    opciones: [
      "Proyecta profesionalismo y modernidad a los estudiantes",
      "No tiene relevancia en el servicio",
      "Solo sirve para publicidad",
      "Es opcional y no afecta la percepción"
    ],
    respuestaCorrecta: 0
  }
];

// Configuración de colores y formas para las opciones (estilo Kahoot)
const opcionesConfig = [
  { color: 'bg-red-500', border: 'border-red-600', hover: 'hover:bg-red-600', shape: '▲' },
  { color: 'bg-blue-500', border: 'border-blue-600', hover: 'hover:bg-blue-600', shape: '■' },
  { color: 'bg-yellow-400', border: 'border-yellow-500', hover: 'hover:bg-yellow-500', shape: '●', textColor: 'text-gray-900' },
  { color: 'bg-green-500', border: 'border-green-600', hover: 'hover:bg-green-600', shape: '◆' }
];

export default function App() {
  const [nombre, setNombre] = useState('');
  const [pantalla, setPantalla] = useState('login');
  const [semanaSeleccionada, setSemanaSeleccionada] = useState(1);
  const [preguntaIdx, setPreguntaIdx] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [tiempo, setTiempo] = useState(20);
  const [respuestaSel, setRespuestaSel] = useState(null);

  // Obtener preguntas según la semana seleccionada
  const obtenerPreguntas = () => {
    if (semanaSeleccionada === 1) return preguntasSemana1;
    if (semanaSeleccionada === 2) return preguntasSemana2;
    return preguntasSemana3;
  };

  const preguntasActuales = obtenerPreguntas();

  useEffect(() => {
    let interval;
    if (pantalla === 'quiz' && respuestaSel === null && tiempo > 0) {
      interval = setInterval(() => setTiempo(t => t - 1), 1000);
    }
    if (tiempo === 0 && respuestaSel === null) {
      setRespuestaSel(-1);
      setTimeout(manejarSiguientePregunta, 1200);
    }
    return () => clearInterval(interval);
  }, [pantalla, preguntaIdx, respuestaSel, tiempo, semanaSeleccionada]);

  const manejarSiguientePregunta = () => {
    if (preguntaIdx < preguntasActuales.length - 1) {
      setPreguntaIdx(p => p + 1);
      setTiempo(20);
      setRespuestaSel(null);
    } else {
      setPantalla('resultados');
    }
  };

  const manejarRespuesta = (idx) => {
    if (respuestaSel !== null) return;
    setRespuestaSel(idx);
    if (idx === preguntasActuales[preguntaIdx].respuestaCorrecta) {
      setAciertos(a => a + 1);
    }
    setTimeout(manejarSiguientePregunta, 1200);
  };

  const iniciarQuiz = (semana) => {
    setSemanaSeleccionada(semana);
    setPreguntaIdx(0);
    setAciertos(0);
    setTiempo(20);
    setRespuestaSel(null);
    setPantalla('quiz');
  };

  // Pantalla Login
  if (pantalla === 'login') {
    return (
      <div className="min-h-screen bg-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700">Quizzis</h1>
            <p className="text-gray-500 mt-2">Plataforma de Quizzes Académicos</p>
          </div>
          <div className="space-y-6">
            <input
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
              className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base sm:text-lg"
            />
            <button
              onClick={() => nombre.trim() && setPantalla('selector')}
              disabled={!nombre.trim()}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold p-3 sm:p-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Pantalla Selector
  if (pantalla === 'selector') {
    return (
      <div className="min-h-screen bg-purple-700 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Selecciona una Semana</h2>
          <button
            onClick={() => iniciarQuiz(1)}
            className="w-full bg-white hover:bg-gray-50 text-purple-700 font-bold p-4 sm:p-5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] text-base sm:text-lg"
          >
            ✅ Semana 1 (20 preguntas)
          </button>
          <button
            onClick={() => iniciarQuiz(2)}
            className="w-full bg-white hover:bg-gray-50 text-purple-700 font-bold p-4 sm:p-5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] text-base sm:text-lg"
          >
            ✅ Semana 2 (20 preguntas)
          </button>
          <button
            onClick={() => iniciarQuiz(3)}
            className="w-full bg-white hover:bg-gray-50 text-purple-700 font-bold p-4 sm:p-5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] text-base sm:text-lg"
          >
            ✅ Semana 3 (20 preguntas)
          </button>
        </div>
      </div>
    );
  }

  // Pantalla Quiz
  if (pantalla === 'quiz') {
    const pregunta = preguntasActuales[preguntaIdx];
    return (
      <div className="min-h-screen bg-purple-700 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Header de quiz */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-white mb-6 gap-4">
            <span className="text-base sm:text-lg font-bold bg-purple-900 px-4 py-2 rounded-full">
              Semana {semanaSeleccionada} - Pregunta {preguntaIdx + 1}/{preguntasActuales.length}
            </span>
            <div className="flex items-center gap-4">
              <span className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md">
                Puntos: {aciertos}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md text-white ${tiempo <= 5 ? 'bg-red-600 animate-pulse' : 'bg-purple-900'}`}>
                {tiempo}s
              </span>
            </div>
          </div>

          {/* Barra de progreso del timer */}
          <div className="w-full h-3 bg-purple-900 rounded-full overflow-hidden mb-8 shadow-inner">
            <div 
              className={`h-full transition-all duration-1000 linear rounded-full ${tiempo <= 5 ? 'bg-red-500' : 'bg-white'}`}
              style={{ width: `${(tiempo / 20) * 100}%` }}
            ></div>
          </div>

          {/* Pregunta */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white text-center mb-8 sm:mb-12 font-bold leading-tight px-2">
            {pregunta.pregunta}
          </h2>

          {/* Opciones de respuesta - Estilo Kahoot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {pregunta.opciones.map((op, idx) => {
              const config = opcionesConfig[idx];
              let clases = `w-full p-4 sm:p-5 rounded-xl text-white font-bold cursor-pointer transition-all duration-300 text-sm sm:text-base text-left flex items-center gap-3 shadow-lg ${config.color} ${config.border} border-4`;
              
              // Feedback de respuesta
              if (respuestaSel !== null) {
                if (idx === pregunta.respuestaCorrecta) {
                  clases = `w-full p-4 sm:p-5 rounded-xl text-white font-bold cursor-not-allowed text-sm sm:text-base text-left flex items-center gap-3 shadow-lg bg-green-500 border-4 border-green-400 scale-105`;
                } else if (idx === respuestaSel) {
                  clases = `w-full p-4 sm:p-5 rounded-xl text-white font-bold cursor-not-allowed text-sm sm:text-base text-left flex items-center gap-3 shadow-lg bg-red-600 border-4 border-red-400 scale-105`;
                } else {
                  clases = `w-full p-4 sm:p-5 rounded-xl text-white font-bold cursor-not-allowed text-sm sm:text-base text-left flex items-center gap-3 shadow-lg ${config.color} ${config.border} border-4 opacity-50`;
                }
              } else {
                clases += ` ${config.hover} hover:scale-105 hover:shadow-xl`;
              }

              return (
                <button
                  key={idx}
                  onClick={() => manejarRespuesta(idx)}
                  className={clases}
                  disabled={respuestaSel !== null}
                >
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{config.shape}</span>
                  <span className="flex-1">{op}</span>
                  {respuestaSel !== null && idx === pregunta.respuestaCorrecta && (
                    <span className="text-2xl">✓</span>
                  )}
                  {respuestaSel !== null && idx === respuestaSel && idx !== pregunta.respuestaCorrecta && (
                    <span className="text-2xl">✗</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Pantalla Resultados
  const porcentaje = (aciertos / preguntasActuales.length) * 100;
  const esUltimaSemana = semanaSeleccionada === 3 && preguntaIdx === preguntasActuales.length - 1;
  
  let mensaje = "";
  if (esUltimaSemana) {
    mensaje = "¡Curso Completado! 🎉";
  } else if (porcentaje === 100) {
    mensaje = "¡Puntuación perfecta! 🎉";
  } else if (porcentaje >= 70) {
    mensaje = "¡Muy buen trabajo! 👏";
  } else if (porcentaje >= 50) {
    mensaje = "Buen intento, sigue practicando 💪";
  } else {
    mensaje = "Necesitas repasar los conceptos 📚";
  }

  return (
    <div className="min-h-screen bg-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md text-center">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-2">
            {esUltimaSemana ? "🎓 ¡Curso Completado!" : "🏆 Podio"}
          </h1>
          <p className="text-gray-500">Resultados Semana {semanaSeleccionada}</p>
        </div>
        <div className="space-y-4 mb-8">
          <p className="text-xl sm:text-2xl font-bold text-gray-800">Jugador: {nombre}</p>
          <div className="bg-purple-50 rounded-xl p-4">
            <p className="text-4xl sm:text-5xl font-extrabold text-purple-600">{aciertos}/{preguntasActuales.length}</p>
            <p className="text-gray-600 mt-1">{porcentaje}% de aciertos</p>
          </div>
          <p className="text-base sm:text-lg text-gray-700 font-medium">{mensaje}</p>
        </div>
        <button
          onClick={() => {
            setPantalla('selector');
            setAciertos(0);
            setRespuestaSel(null);
          }}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold p-3 sm:p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
        >
          Volver al menú
        </button>
      </div>
    </div>
  );
}
