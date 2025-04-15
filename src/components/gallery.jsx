import React, { useState } from "react";

export const Gallery = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Datos de respaldo en caso de que no lleguen las props
  const defaultData = [
    {
      "question": "¿En qué se diferencia el coaching de la terapia psicológica?",
      "answer": " El coaching se enfoca en el presente y en alcanzar objetivos concretos, mientras que la terapia trabaja aspectos más profundos de la salud mental."
    },
    {
      "question": "¿Cómo funcionan las sesiones online?",
      "answer": "Las sesiones se realizan por videollamada en una plataforma segura. Solo necesitas conexión a internet y un dispositivo con cámara y micrófono."
    },
    {
      "question": "¿Cuánto dura el proceso de coaching?",
      "answer": "Depende de cada persona y objetivo, pero suele durar entre 4 y 12 sesiones."
    },
    {
      "question": "¿Cómo sé si el coaching es adecuado para mí?",
      "answer": "Si buscas claridad, cambios concretos o mejorar tu bienestar, el coaching puede ayudarte. La primera sesión te ayudará a decidir."
    },
    {
      "question": "¿Cuántas sesiones necesito para ver resultados?",
      "answer": "Desde la primera sesión puedes notar cambios, pero el progreso depende del compromiso y la práctica."
    },
    {
      "question": "¿Qué pasa si no sé exactamente qué objetivo quiero trabajar?",
      "answer": "No hay problema. Te ayudo a explorar y definir qué es lo más importante para ti en este momento."
    },
    {
      "question": "¿Las sesiones son 100% confidenciales?",
      "answer": "Sí. Como profesional, garantizo un espacio seguro y respetuoso donde la privacidad es prioridad."
    },
    {
      "question": "¿Cómo puedo pagar las sesiones y qué métodos de pago se aceptan?",
      "answer": "Puedes pagar con PayPal o transferencia bancaria."
    },
    {
      "question": "¿Qué pasa si necesito cancelar o reprogramar una sesión?",
      "answer": "Puedes hacerlo con al menos 24 horas de anticipación para reprogramar sin costo."
    }
  ];

  // Usamos data si existe, si no, usamos defaultData
  const faqData = data || defaultData;

  return (
    <div id="faq" className="d-flex justify-content-center align-items-center py-5" style={{ 
      background: '#F7F7F7',
      minHeight: '100vh',
      width: '100%'
    }}>
      <div className="container">
      <div className="section-title mb-5" style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center'
        }}>
        <h2 className="text-uppercase" style={{ 
          fontSize: '4.0rem',
          margin: '0 auto' // Esto ayuda a centrarlo si el contenedor es más ancho
        }}>
          Preguntas frecuentes
        </h2>
      </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8"> {/* Ajusté el ancho para mejor centrado */}
            {faqData.map((item, index) => (
              <div 
                key={`faq-${index}`} 
                className="card mb-3 border-0 shadow-sm mx-auto" 
                style={{ maxWidth: '900px' }} /* Limitó el ancho máximo */
              >
                <div 
                  className="card-header bg-white p-4"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-0 text-primary" style={{ fontSize: '2.5rem' }}>
                      {item.question}
                    </h4>
                    <span className="fs-3 fw-bold">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </div>
                
                {activeIndex === index && (
                  <div className="card-body p-4">
                    <p className="mb-0 text-muted" style={{ fontSize: '2.5rem', lineHeight: '1.8' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};