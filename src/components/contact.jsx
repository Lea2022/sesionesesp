import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const clearState = () => setState({ ...initialState });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");
    
    {/* 
      REEMPLAZA LOS SIGUIENTES VALORES CON TUS CREDENCIALES DE EMAILJS:
      - serviceId: Encuéntralo en Email Services > Tu servicio
      - templateId: En Email Templates > Tu plantilla
      - publicKey: En Account > API Keys (Public Key)
    */}
    emailjs
      .sendForm(
        "service_1njbxhf",      // Reemplazar con tu Service ID
        "template_v1u5lzs",     // Reemplazar con tu Template ID
        e.target,
        "51rAJLF_T6ykWPwJf"       // Reemplazar con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setStatusMessage({ text: "¡Mensaje enviado con éxito!", isError: false });
          
          // Muestra el mensaje por 5 segundos
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage({ 
            text: "Error al enviar el mensaje. Por favor inténtalo nuevamente.", 
            isError: true 
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>📩 Contáctame</h2>
                <p>
                  Por favor, completa el siguiente formulario para enviarme un mensaje. 
                  Te responderé lo antes posible.
                </p>
              </div>

              {/* Mensaje de estado del envío */}
              {statusMessage && (
                <div className={`alert ${statusMessage.isError ? "alert-danger" : "alert-success"}`}
                  style={{ fontSize: '16px', marginBottom: '20px' }}>
                  {statusMessage.text}
                </div>
              )}

              <form name="sentMessage" noValidate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre Completo"
                        required
                        minLength="3"
                        value={name}
                        onChange={handleChange}
                        style={{ fontSize: '18px', padding: '15px' }}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="ejemplo@email.com"
                        required
                        value={email}
                        onChange={handleChange}
                        style={{ fontSize: '18px', padding: '15px' }}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="6"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    minLength="10"
                    value={message}
                    onChange={handleChange}
                    style={{ 
                      fontSize: '18px', 
                      padding: '15px', 
                      minHeight: '180px',
                      resize: 'vertical'
                    }}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-custom btn-lg"
                  disabled={isSending}
                  style={{ 
                    fontSize: '18px',
                    padding: '12px 30px',
                    marginTop: '15px',
                    fontWeight: '600',
                    opacity: isSending ? 0.7 : 1
                  }}
                >
                  {isSending ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      {" Enviando..."}
                    </>
                  ) : "Enviar Mensaje"}
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de Contacto</h3>
              <p style={{ fontSize: '16px' }}>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{ fontSize: '16px' }}>
                <span>
                  <i className="fa fa-phone"></i> WhatsApp:
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{ fontSize: '16px' }}>
                <span>
                  <i className="fa fa-envelope-o"></i> Email:
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p style={{ fontSize: '16px' }}>
            &copy; 2025 Leandro Acuña. Coaching en Español. Design by{" HeimerCoder"}
          </p>
        </div>
      </div>
    </div>
  );
};