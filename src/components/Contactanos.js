import React, { useRef } from "react";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

function Contactanos() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_z83r6dm",
      "template_j4bxtt9",
      form.current,
      "TnGx1MfoXP3u5-Ahj"
    );
    e.target.reset();
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#121331"
          fill-opacity="0.33"
          d="M0,128L80,133.3C160,139,320,149,480,138.7C640,128,800,96,960,117.3C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#121331"
          fill-opacity="0.66"
          d="M0,96L80,112C160,128,320,160,480,170.7C640,181,800,171,960,154.7C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#121331"
          fill-opacity="1"
          d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,250.7C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <ContactanosContainer id="contactanos">
        <h2>CONTÁCTANOS</h2>
        <p>
          Contamos con sede en Buenos Aires capital de la República Argentina y en San Sebastián, en el País
          Vasco, que es sinónimo de dinamismo, desarrollo y espíritu
          empresarial, pero operamos en toda España a través de nuestra red de
          oficinas corresponsales.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="row gap-4">
            <input
              className="col"
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
            />
            <input
              className="col"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="row gap-4">
            <input
              className="col"
              type="text"
              name="empresa"
              placeholder="Empresa"
              required
            />
            <input
              className="col"
              type="text"
              name="telefono"
              placeholder="Telefono"
              required
            />
          </div>
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="5"
            required
          ></textarea>
          {/* <ReCAPTCHA
            sitekey="Your client site key"
            onChange={onChange}
            id="capcha"
          /> */}
          <button type="submit">Enviar Mensaje</button>
        </form>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="0.6"
            d="M0,160L80,170.7C160,181,320,203,480,202.7C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L80,229.3C160,203,320,149,480,144C640,139,800,181,960,202.7C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <path
            fill="#fff"
            fill-opacity="0.3"
            d="M0,128L80,149.3C160,171,320,213,480,218.7C640,224,800,192,960,170.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </ContactanosContainer>
    </>
  );
}

export default Contactanos;

const ContactanosContainer = styled.section`
  text-align: center;
  background-color: var(--color-secondary);
  h2 {
    font-weight: var(--h2-font-weight);
    font-size: var(--h2-font-size);
    padding-top: 4rem;
    color: var(--color-primary);
  }
  h2::after {
    content: "";
    display: block;
    width: 8rem;
    height: 4px;
    margin: auto;
    margin-top: 0.7rem;
    background-color: #fff;
  }
  p {
    color: #fff;
    width: 47rem;
    margin: auto;
    padding: 1.5rem 0 2.5rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    .row {
      width: 60%;
      margin: auto;
    }
    input,
    textarea {
      width: 60%;
      padding: 1rem;
      border-radius: 0.2rem;
      border: 2px solid var(--primary-color);
      font-weight: 600;
      resize: none;
    }
    button {
      background-color: var(--color-primary);
      font-weight: 700;
      text-transform: uppercase;
      border-radius: 0.2rem;
      border: none;
      padding: 0.5rem;
      width: 60%;
      font-size: 1.2rem;
      color: var(--color-secondary);
    }
    button:hover {
      background-color: #fff;
      transition: all 0.2s ease-in;
    }
    #capcha {
      width: 60%;
    }
  }
  @media (max-width: 900px) {
    form {
      width: 80% !important;
      margin: auto;
    }
    input,
    textarea {
      width: 100% !important;
    }
    .row {
      width: 100% !important;
    }
    button {
      width: 100% !important;
    }
  }
  @media (max-width: 720px) {
    h2 {
      font-size: var(--h2-font-size-small);
    }
    p {
      width: auto;
      margin: 0 2rem;
    }
    .row {
      display: flex;
      flex-direction: column !important;
    }
  }
`;
