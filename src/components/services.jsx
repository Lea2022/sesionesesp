import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Como trabajamos juntos</h2>
          <p>
            "Para que puedas sentirte cómodo y seguro en este proceso,
            aquí te explico cómo funciona el trabajo juntos.
            Desde el primer contacto hasta la forma en que nos comunicamos,
            todo está diseñado para que tengas una experiencia clara y efectiva."
          </p>
        </div>
        {/* Contenedor de servicios con espaciado */}
        <div className="row g-4">
          {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.name}-${i}`}
                  className="col-12 col-sm-6 col-lg-4 d-flex"
                >
                  <div className="service-item p-3 h-100 w-100">
                    <i className={`${d.icon} fs-3 mb-3 d-block`}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
