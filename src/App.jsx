import React, { useState, useEffect } from 'react';

const preguntasSemana1 = [
  { pregunta: "¿Cuál es la diferencia principal entre Marketing Estratégico y Operativo?", opciones: ["Estratégico es análisis a largo plazo; Operativo es acción a corto plazo", "Estratégico maneja ventas; Operativo maneja publicidad", "Estratégico es para B2B; Operativo para B2C", "Son términos intercambiables"], respuestaCorrecta: 0 },
  { pregunta: "¿Qué representa la 'O' en el análisis FODA?", opciones: ["Oportunidades", "Objetivos", "Operaciones", "Organización"], respuestaCorrecta: 0 },
  { pregunta: "¿Cuál NO es un criterio de segmentación válido?", opciones: ["Geográfico", "Demográfico", "Psicográfico", "Financiero"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué significa la 'M' en objetivos SMART?", opciones: ["Medibles", "Motivadores", "Mensurables", "Monetarios"], respuestaCorrecta: 0 },
  { pregunta: "¿Qué nivel de producto incluye marca y diseño?", opciones: ["Básico", "Real", "Aumentado", "Potencial"], respuestaCorrecta: 1 },
  { pregunta: "¿Método de fijación de precio basado en costos de producción?", opciones: ["Coste", "Demanda", "Competencia", "Subasta"], respuestaCorrecta: 0 },
  { pregunta: "Estrategia de distribución que busca máxima cobertura (Plaza):", opciones: ["Intensiva", "Selectiva", "Exclusiva", "Directa"], respuestaCorrecta: 0 },
  { pregunta: "¿Qué actividad pertenece a RRPP en Promoción?", opciones: ["Anuncios TV", "Patrocinios", "Descuentos", "Publicidad redes"], respuestaCorrecta: 1 },
  { pregunta: "Elemento FODA interno y positivo:", opciones: ["Fortaleza", "Oportunidad", "Debilidad", "Amenaza"], respuestaCorrecta: 0 },
  { pregunta: "Característica SMART que permite evaluar resultados:", opciones: ["Específicos", "Medibles", "Alcanzables", "Relevantes"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué es el Marketing Estratégico?", opciones: ["Análisis de mercado y planificación a largo plazo", "Ejecución de campañas publicitarias", "Venta directa de productos", "Atención al cliente inmediata"], respuestaCorrecta: 0 },
  { pregunta: "¿Qué son las Amenazas en el análisis FODA?", opciones: ["Fortalezas de la competencia", "Factores externos que pueden afectar negativamente", "Debilidades internas de la empresa", "Oportunidades de mercado"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué incluye la segmentación demográfica?", opciones: ["Estilo de vida y personalidad", "Ubicación geográfica y clima", "Edad, género, ingresos y nivel educativo", "Frecuencia de compra y lealtad"], respuestaCorrecta: 2 },
  { pregunta: "¿Qué significa la 'S' en objetivos SMART?", opciones: ["Sostenibles", "Simples", "Seguros", "Específicos"], respuestaCorrecta: 3 },
  { pregunta: "En las 4Ps, ¿qué es el producto aumentado?", opciones: ["El beneficio básico del producto", "Solo la marca y el empaque", "Garantía, servicio postventa y beneficios adicionales", "El precio de venta al público"], respuestaCorrecta: 2 },
  { pregunta: "Método de fijación de precio basado en la demanda:", opciones: ["Costos de producción más margen", "Precio de la competencia", "Encuestas y disposición de pago del cliente", "Subasta abierta"], respuestaCorrecta: 2 },
  { pregunta: "Estrategia de distribución exclusiva (Plaza):", opciones: ["Máxima cobertura en todos lados", "Venta solo por internet", "Pocos puntos de venta selectos y controlados", "Distribución masiva en supermercados"], respuestaCorrecta: 2 },
  { pregunta: "¿Qué significa la 'T' en objetivos SMART?", opciones: ["Táctico", "Temporal", "A Tiempo (con plazo definido)", "Total"], respuestaCorrecta: 2 },
  { pregunta: "En el FODA, ¿qué son las Debilidades?", opciones: ["Factores externos positivos", "Oportunidades del mercado", "Fortalezas de la competencia", "Factores internos que limitan a la empresa"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué es la segmentación psicográfica?", opciones: ["Basada en edad y género", "Basada en ubicación geográfica", "Basada en frecuencia de compra", "Basada en estilo de vida, valores y personalidad"], respuestaCorrecta: 3 }
];

const preguntasSemana2 = [
  { pregunta: "En el marketing de servicios, ¿qué rol cumple la secretaria en una academia?", opciones: ["Solo se encarga de tareas administrativas sin contacto", "Es responsable exclusivo de las ventas", "No tiene relevancia en el marketing de servicios", "Es el primer contacto y representa la imagen inicial"], respuestaCorrecta: 3 },
  { pregunta: "En el ciclo de vida del producto, ¿qué etapa se caracteriza por ventas crecientes y entrada de competidores?", opciones: ["Introducción", "Crecimiento", "Madurez", "Declive"], respuestaCorrecta: 1 },
  { pregunta: "¿Qué representa la 'Presencia' (evidencia física) en las 3Ps de servicios?", opciones: ["Solo la publicidad en redes sociales", "El precio del servicio", "La estrategia de distribución", "Instalaciones, material didáctico y entorno digital"], respuestaCorrecta: 3 },
  { pregunta: "En la Matriz BCG, ¿cómo se clasifican los productos con alta participación de mercado y alto crecimiento?", opciones: ["Estrella", "Vaca", "Interrogante", "Perro"], respuestaCorrecta: 0 },
  { pregunta: "¿Cuál es la característica principal de la etapa de 'Madurez' en el ciclo de vida?", opciones: ["Ventas en declive acelerado", "Lanzamiento y crecimiento inicial", "No hay competencia en esta etapa", "Ventas estables y saturación del mercado"], respuestaCorrecta: 3 },
  { pregunta: "En el análisis de cartera, ¿qué mide la 'Amplitud'?", opciones: ["Número de productos en una línea", "Número de variantes de un producto", "El precio promedio de los productos", "Número de líneas de productos diferentes"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué incluye el componente 'Procesos' en marketing de servicios?", opciones: ["Solo la contratación del servicio", "Únicamente la publicidad del servicio", "El diseño del producto físico", "Flujo desde la información hasta la posventa"], respuestaCorrecta: 3 },
  { pregunta: "En la academia 'Global Skills', ¿qué rol cumple el asesor en el marketing de servicios?", opciones: ["Solo atiende llamadas telefónicas", "Se encarga únicamente de la limpieza", "No interactúa con los clientes", "Gestiona las ventas y el asesoramiento personalizado"], respuestaCorrecta: 3 },
  { pregunta: "En la Matriz BCG, ¿cómo se llaman los productos con baja participación y bajo crecimiento?", opciones: ["Vaca", "Estrella", "Interrogante", "Perro"], respuestaCorrecta: 3 },
  { pregunta: "En 'Global Skills', ¿qué elementos conforman la 'Presencia' (evidencia física)?", opciones: ["Solo el uniforme de los empleados", "Únicamente el precio de las clases", "La competencia académica", "Instalaciones, material didáctico y entorno digital"], respuestaCorrecta: 3 },
  { pregunta: "En el ciclo de vida, ¿qué caracteriza la etapa de 'Introducción'?", opciones: ["Ventas máximas y competencia estable", "Declive acelerado de ventas", "Saturación total del mercado", "Ventas lentas y altos costos de promoción"], respuestaCorrecta: 3 },
  { pregunta: "En la Matriz BCG, ¿qué es una 'Vaca'?", opciones: ["Bajo crecimiento y baja participación", "Alto crecimiento y baja participación", "Alto crecimiento y alta participación", "Alta participación y bajo crecimiento (genera efectivo)"], respuestaCorrecta: 3 },
  { pregunta: "En el análisis de cartera, ¿qué mide la 'Longitud'?", opciones: ["Número de líneas diferentes", "Número de variantes de un producto", "La profundidad de precios", "Número total de productos en una línea"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué son las 'Personas' en las 3Ps de servicios?", opciones: ["Solo los dueños de la empresa", "Únicamente los clientes", "Los proveedores externos", "Todo el personal que interactúa con el cliente"], respuestaCorrecta: 3 },
  { pregunta: "En la Matriz BCG, ¿qué es un 'Interrogante'?", opciones: ["Baja participación y bajo crecimiento", "Alta participación y alto crecimiento", "Alta participación y bajo crecimiento", "Alto crecimiento y baja participación (requiere inversión)"], respuestaCorrecta: 3 },
  { pregunta: "En el análisis de cartera, ¿qué mide la 'Profundidad'?", opciones: ["Número de líneas de productos", "Número total de productos", "El margen de ganancia", "Número de variantes de un mismo producto"], respuestaCorrecta: 3 },
  { pregunta: "En el plan de acción, ¿qué define el 'Quién'?", opciones: ["El presupuesto asignado", "La fecha de ejecución", "El objetivo de la táctica", "La persona o departamento responsable"], respuestaCorrecta: 3 },
  { pregunta: "En el ciclo de vida, ¿qué ocurre en la etapa de 'Declive'?", opciones: ["Crecimiento acelerado de ventas", "Estabilidad en el mercado", "Lanzamiento de nuevos productos", "Ventas en caída y reducción de competencia"], respuestaCorrecta: 3 },
  { pregunta: "En el presupuesto, ¿qué define el 'Cuánto'?", opciones: ["El responsable del gasto", "La fecha de inicio", "El objetivo de ventas", "El costo total de ejecutar las tácticas"], respuestaCorrecta: 3 },
  { pregunta: "En 'Global Skills', ¿cómo influye el asesor en el proceso de ventas?", opciones: ["Solo registra los datos del cliente", "No participa en el proceso de ventas", "Solo se encarga del material didáctico", "Brinda asesoramiento personalizado y cierra ventas"], respuestaCorrecta: 3 }
];

const preguntasSemana3 = [
  { pregunta: "¿Cuál es la diferencia entre Nombre comercial y Logotipo?", opciones: ["Son términos idénticos", "Logotipo es el nombre legal de la empresa", "Nombre comercial es solo para productos físicos", "Nombre comercial es la denominación; Logotipo es el diseño gráfico"], respuestaCorrecta: 3 },
  { pregunta: "En la identidad de marca, ¿qué es un Isotipo?", opciones: ["El nombre completo de la empresa en letra cursiva", "El eslogan publicitario de la marca", "El logotipo con colores brillantes", "Símbolo gráfico que representa a la marca sin texto"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué incluye el producto 'Real'?", opciones: ["Solo el beneficio básico que satisface la necesidad", "Garantía y servicio postventa", "El precio de venta al público", "Marca, diseño, empaque y características tangibles"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué es el producto 'Aumentado'?", opciones: ["El producto básico sin empaque", "Solo la marca y el diseño", "El producto en su fase de declive", "Garantía, servicio postventa y beneficios adicionales"], respuestaCorrecta: 3 },
  { pregunta: "¿Cuál es la función del envase primario?", opciones: ["Protege el producto durante el transporte", "Agrupa varios productos para distribución", "Es la caja que se usa en el punto de venta", "Contiene el producto en contacto directo con él"], respuestaCorrecta: 3 },
  { pregunta: "En 'Global Skills', ¿qué elementos de evidencia física (presencia) son clave?", opciones: ["Solo el precio de las clases", "Únicamente la publicidad en redes", "El número de empleados", "Instalaciones, material didáctico y entorno digital"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué incluye el servicio al cliente en la etapa de 'Preventa'?", opciones: ["Solo la entrega del producto", "Garantía y devoluciones", "El empaque del producto", "Información, asesoramiento y atención previa a la compra"], respuestaCorrecta: 3 },
  { pregunta: "En 'Global Skills', ¿qué rol cumple el personal (personas) en la estrategia?", opciones: ["Solo se encargan de la limpieza", "No tienen impacto en la estrategia", "Solo atienden problemas técnicos", "Secretaria (primer contacto) y asesor (ventas personalizadas)"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué es el embalaje terciario?", opciones: ["El envase que toca el producto directamente", "La caja individual de cada producto", "El diseño gráfico del empaque", "Protección para transporte y distribución masiva"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué elementos conforman el servicio en la etapa de 'Posventa'?", opciones: ["Solo la publicidad del producto", "El diseño del empaque primario", "La fijación del precio inicial", "Garantía, soporte técnico y seguimiento postcompra"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué es el producto 'Básico'?", opciones: ["Marca, diseño y empaque", "Garantía y servicio postventa", "El precio y la distribución", "El beneficio fundamental que satisface la necesidad"], respuestaCorrecta: 3 },
  { pregunta: "¿Cuál es la diferencia entre Logotipo e Isotipo?", opciones: ["Son exactamente lo mismo", "Isotipo incluye texto; Logotipo es símbolo", "Logotipo es solo para empresas grandes", "Logotipo incluye texto; Isotipo es solo el símbolo"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué es el empaque secundario?", opciones: ["Toca directamente al producto", "Se usa solo para transporte masivo", "Es el diseño gráfico exterior", "Agrupa varios productos para exhibición y venta"], respuestaCorrecta: 3 },
  { pregunta: "En el servicio al cliente, ¿qué ocurre en la etapa de 'Venta'?", opciones: ["Solo la publicidad previa", "Garantía y devoluciones", "El diseño del empaque", "Atención durante el proceso de compra y entrega"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué es la identidad de marca?", opciones: ["Solo el logotipo de la empresa", "El precio de los productos", "La ubicación de la empresa", "Conjunto de elementos visuales y conceptuales que identifican a la marca"], respuestaCorrecta: 3 },
  { pregunta: "En 'Global Skills', ¿cómo apoya la secretaria en el marketing de servicios?", opciones: ["Solo realiza tareas contables", "No tiene contacto con los clientes", "Solo gestiona el inventario", "Es el primer contacto y genera la primera impresión"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué elementos conforman el envase y embalaje?", opciones: ["Solo el diseño gráfico exterior", "Únicamente el precio impreso", "Solo la marca del producto", "Primario (contacto), secundario (agrupación) y terciario (transporte)"], respuestaCorrecta: 3 },
  { pregunta: "En el servicio al cliente, ¿qué incluye la 'Venta'?", opciones: ["Solo la publicidad previa", "Garantía y soporte técnico", "El diseño del empaque", "Atención durante el proceso de compra y entrega"], respuestaCorrecta: 3 },
  { pregunta: "¿Qué es el Nombre comercial?", opciones: ["El símbolo gráfico de la empresa", "El eslogan publicitario", "El precio de venta", "La denominación bajo la cual se comercializa un producto o servicio"], respuestaCorrecta: 3 },
  { pregunta: "En 'Global Skills', ¿qué importancia tiene el entorno digital como evidencia física?", opciones: ["No tiene relevancia en el servicio", "Solo sirve para publicidad", "Es opcional y no afecta la percepción", "Proyecta profesionalismo y modernidad a los estudiantes"], respuestaCorrecta: 3 },
  { pregunta: "En una S.A. (Sociedad Anónima), ¿cuál es el requisito mínimo de accionistas?", opciones: ["Mínimo 2 accionistas, sin máximo", "De 2 a 20 accionistas", "De 2 a 20 socios", "Solo 1 persona"], respuestaCorrecta: 0 },
  { pregunta: "¿Qué tipo de empresa es ideal para empresas familiares con directorio opcional?", opciones: ["S.A.", "S.A.C.", "S.R.L.", "E.I.R.L."], respuestaCorrecta: 1 },
  { pregunta: "En una S.R.L., ¿cómo se divide el capital?", opciones: ["En acciones", "En participaciones", "En cuotas iguales", "En porcentajes fijos"], respuestaCorrecta: 1 },
  { pregunta: "Si 4 personas deciden formar una empresa, ¿qué tipo de empresa NO podrían constituir?", opciones: ["S.A.", "S.A.C.", "S.R.L.", "E.I.R.L."], respuestaCorrecta: 3 },
  { pregunta: "En una E.I.R.L., ¿cuántas personas pueden ser dueñas?", opciones: ["Mínimo 2 personas", "De 2 a 20 personas", "Hasta 50 personas", "Solo 1 persona"], respuestaCorrecta: 3 }
];

const opcionesConfig = [
  { color: 'bg-red-500', border: 'border-red-600', hover: 'hover:bg-red-600', shape: '▲' },
  { color: 'bg-blue-500', border: 'border-blue-600', hover: 'hover:bg-blue-600', shape: '■' },
  { color: 'bg-yellow-400', border: 'border-yellow-500', hover: 'hover:bg-yellow-500', shape: '●' },
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

  if (pantalla === 'login') {
    return (
      <div className="min-h-screen bg-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700">Quizzis</h1>
            <p className="text-gray-500 mt-2">Plataforma de Quizzes Académicos</p>
          </div>
          <div className="space-y-6">
            <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Ingresa tu nombre" className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base sm:text-lg" />
            <button onClick={() => nombre.trim() && setPantalla('selector')} disabled={!nombre.trim()} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold p-3 sm:p-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg shadow-lg hover:shadow-xl">Comenzar</button>
          </div>
        </div>
      </div>
    );
  }

  if (pantalla === 'selector') {
    return (
      <div className="min-h-screen bg-purple-700 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Selecciona una Semana</h2>
          <button onClick={() => iniciarQuiz(1)} className="w-full bg-white hover:bg-gray-50 text-purple-700 font-bold p-4 sm:p-5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] text-base sm:text-lg">✅ Semana 1 (20 preguntas)</button>
          <button onClick={() => iniciarQuiz(2)} className="w-full bg-white hover:bg-gray-50 text-purple-700 font-bold p-4 sm:p-5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] text-base sm:text-lg">✅ Semana 2 (20 preguntas)</button>
          <button onClick={() => iniciarQuiz(3)} className="w-full bg-white hover:bg-gray-50 text-purple-700 font-bold p-4 sm:p-5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] text-base sm:text-lg">✅ Semana 3 (25 preguntas)</button>
        </div>
      </div>
    );
  }

  if (pantalla === 'quiz') {
    const pregunta = preguntasActuales[preguntaIdx];
    return (
      <div className="min-h-screen bg-purple-700 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-center text-white mb-6 gap-4">
            <span className="text-base sm:text-lg font-bold bg-purple-900 px-4 py-2 rounded-full">Semana {semanaSeleccionada} - Pregunta {preguntaIdx + 1}/{preguntasActuales.length}</span>
            <div className="flex items-center gap-4">
              <span className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md">Puntos: {aciertos}</span>
              <span className={`px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md text-white ${tiempo <= 5 ? 'bg-red-600 animate-pulse' : 'bg-purple-900'}`}>{tiempo}s</span>
            </div>
          </div>
          <div className="w-full h-3 bg-purple-900 rounded-full overflow-hidden mb-8 shadow-inner">
            <div className={`h-full transition-all duration-1000 linear rounded-full ${tiempo <= 5 ? 'bg-red-500' : 'bg-white'}`} style={{ width: `${(tiempo / 20) * 100}%` }}></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white text-center mb-8 sm:mb-12 font-bold leading-tight px-2">{pregunta.pregunta}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {pregunta.opciones.map((op, idx) => {
              const config = opcionesConfig[idx];
              let clases = `w-full p-4 sm:p-5 rounded-xl text-white font-bold cursor-pointer transition-all duration-300 text-sm sm:text-base text-left flex items-center gap-3 shadow-lg ${config.color} ${config.border} border-4`;
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
                <button key={idx} onClick={() => manejarRespuesta(idx)} className={clases} disabled={respuestaSel !== null}>
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{config.shape}</span>
                  <span className="flex-1">{op}</span>
                  {respuestaSel !== null && idx === pregunta.respuestaCorrecta && <span className="text-2xl">✓</span>}
                  {respuestaSel !== null && idx === respuestaSel && idx !== pregunta.respuestaCorrecta && <span className="text-2xl">✗</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const porcentaje = (aciertos / preguntasActuales.length) * 100;
  const esUltimaSemana = semanaSeleccionada === 3 && preguntaIdx === preguntasActuales.length - 1;
  let mensaje = "";
  if (esUltimaSemana) mensaje = "¡Curso Completado! 🎉";
  else if (porcentaje === 100) mensaje = "¡Puntuación perfecta! 🎉";
  else if (porcentaje >= 70) mensaje = "¡Muy buen trabajo! 👏";
  else if (porcentaje >= 50) mensaje = "Buen intento, sigue practicando 💪";
  else mensaje = "Necesitas repasar los conceptos 📚";

  return (
    <div className="min-h-screen bg-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md text-center">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-2">{esUltimaSemana ? "🎓 ¡Curso Completado!" : "🏆 Podio"}</h1>
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
        <button onClick={() => { setPantalla('selector'); setAciertos(0); setRespuestaSel(null); }} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold p-3 sm:p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg">Volver al menú</button>
      </div>
    </div>
  );
}
