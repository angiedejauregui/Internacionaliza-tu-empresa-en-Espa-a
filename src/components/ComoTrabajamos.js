import React from "react";
import styled from "styled-components";

function ComoTrabajamos() {
  return (
    <>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6ec1e4"
          fill-opacity="1"
          d="M0,128L80,149.3C160,171,320,213,480,208C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#6ec1e4"
          fill-opacity="0.66"
          d="M0,64L80,64C160,64,320,64,480,69.3C640,75,800,85,960,112C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path fill="#6ec1e4" fill-opacity="0.33" d="M0,288L80,250.7C160,213,320,139,480,90.7C640,43,800,21,960,42.7C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <ComoTrabajamosContainer id="como-trabajamos">
        <h2>¿COMO TRABAJAMOS?</h2>

        <div className="container text-start" id="items">
          <div className="row gap-4">
            <div className="col">
              <span>01</span>
              <h3>Contactanos</h3>
              <p>
                Completa el formulario y envía toda tu información completa para
                permitirnos hacer una valoración preliminar de tu caso. Cuanto
                más información puedas brindarnos, más informados estaremos para
                preparar el siguiente paso.
              </p>
            </div>
            <div className="col">
              <span>02</span>
              <h3>Reunión remota</h3>
              <p>
                Mantiene una primera reunión preliminar de una hora donde
                explicas en mayor profundidad las características de tu
                proyecto, tus necesidades y qué esperas de nuestra parte para tu
                desembarco en España.
              </p>
            </div>
            <div className="col">
              <span>03</span>
              <h3>Diagnóstico</h3>
              <p>
                Comentamos contigo un diagnóstico de la situación general, y las
                distintas alternativas y posibilidades de tu negocio para tener
                el mejor aterrizaje posible en España dando cumplimiento a toda
                la normativa vigente, de la manera más eficiente posible.
              </p>
            </div>
          </div>
          <div className="row gap-4">
            <div className="col">
              <span>04</span>
              <h3>Propuesta de servicios</h3>
              <p>
                Recibes una propuesta clara de servicios profesionales,
                atendiendo las necesidades explicadas y acordadas en los pasos
                anteriores.
              </p>
            </div>
            <div className="col">
              <span>05</span>
              <h3>Apoyo durante el proceso</h3>
              <p>
                Recibes nuestro apoyo en todas las gestiones necesarias para la
                internacionalización de tu negocio, en todos los aspectos que se hayan
                acordado: migratorio, mercantil, tributario, desarrollo de red y
                cualquier otra cuestión en la que se haya acordado apoyarte.
              </p>
            </div>
            <div className="col">
              <span>06</span>
              <h3>Atención posterior</h3>
              <p>
                Finalizado el proceso y la internacionalización de tu negocio, acompañamos
                en el seguimiento y el desarrollo local en los aspectos legales
                que tu proyecto necesite.
              </p>
            </div>
          </div>
        </div>
        <a href="#contactanos">
          <button>CONTÁCTANOS</button>
        </a>
      </ComoTrabajamosContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6ec1e4"
          fill-opacity="0.66"
          d="M0,96L48,101.3C96,107,192,117,288,117.3C384,117,480,107,576,101.3C672,96,768,96,864,80C960,64,1056,32,1152,37.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
          <path fill="#6ec1e4" fill-opacity="0.33" d="M0,128L80,133.3C160,139,320,149,480,165.3C640,181,800,203,960,176C1120,149,1280,75,1360,37.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        <path
          fill="#6ec1e4"
          fill-opacity="1"
          d="M0,64L80,80C160,96,320,128,480,117.3C640,107,800,53,960,32C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      
    </>
  );
}

export default ComoTrabajamos;

const ComoTrabajamosContainer = styled.section`
  background-color: var(--color-primary);
  text-align: center;
  padding-bottom: rem;

  h2 {
    font-size: var(--h2-font-size);
    font-weight: var(--h2-font-weight);
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
  .row {
    margin-top: -10rem;
    h3 {
      font-weight: 800;
      font-size: 1.8rem;
      position: relative;
      z-index: 1;
    }
    p {
      position: relative;
      z-index: 1;
    }
    span {
      color: #ffffff44;
      font-weight: 700;
      font-size: 10rem;
      position: relative;
      top: 8rem;
    }
  }
  button {
    background-color: var(--color-secondary);
    color: #fff;
    border-radius: 20px;
    padding: 7px 30px 7px 30px;
    font-size: 1.3rem;
    font-weight: 700;
    border: none;
    margin: 2rem;
  }
  button:hover {
    background-color: #fff;
    color: var(--color-secondary);
    transition: all 0.2s ease-in;
  }

  /* @medi (max-width: 900px) {
    h2 {
      font-size: var(--h2-font-size-small);
    }
    #items {
      margin-top: -10rem;
      justify-content: center;
      margin-bottom: 12rem;
    }
    .row {
      margin: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;

      .col {
        margin-bottom: -10rem;
      }
    }
  } */
  @media (max-width: 800px) {
    h2 {
      font-size: var(--h2-font-size-small);
    }
    #items {
      margin-top: -10rem;
      justify-content: center;
      margin-bottom: 12rem;
    }
    .row {
      margin: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;

      .col {
        margin-bottom: -10rem;
      }
    }
  }
`;
