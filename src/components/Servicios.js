import React from "react";
import styled from "styled-components";

function Servicios() {
  return (
    <ServiciosContainer id="servicios">
      <h2>SERVICIOS</h2>
      <div className="container text-start" id="items">
        <div className="row gap-4">
          <div className="col">
            <span>01</span>
            <h3>Derecho Migratorio</h3>
            <p>
              Nuestro asesoramiento experto explica e identifica las mejores
              opciones entre todas las posibilidades que ofrece la regulación
              migratoria española. Asesoramos en todas las etapas de la
              internacionalización de las personas y los negocios a España.
            </p>
          </div>
          <div className="col">
            <span>02</span>
            <h3>Derecho Mercantil</h3>
            <p>
              Estructuramos y gestionamos cuestiones mercantiles para la
              internacionalización transnacional de empresas y negocios de principio a fin,
              teniendo en cuenta el sector, experiencia y necesidades de
              nuestros clientes.
            </p>
          </div>
          <div className="col">
            <span>03</span>
            <h3>Derecho Fiscal</h3>
            <p>
              Asesoramos sobre la estructura fiscal óptima para cada profesional
              o empresa. Apoyamos en temas fiscales en relación con la inversión
              inmobiliaria, desarrollo y financiación de proyectos, brindando un
              asesoramiento claro y estratégico en materia de impuestos directos
              e indirectos.
            </p>
          </div>
        </div>
        <div className="row gap-4">
          <div className="col">
            <span>04</span>
            <h3>Real Estate</h3>
            <p>
              Asesoramos en todo el proceso de estructuración de operación de
              inversión inmobiliarias, desde el apoyo inicial y la valoración de
              cada oportunidad hasta la estructura fiscal más eficiente para
              llevar a cabo el proyecto.
            </p>
          </div>
          <div className="col">
            <span>05</span>
            <h3>Financiamiento</h3>
            <p>
              Apoyamos en la obtención de financiamiento para proyectos, tanto
              start-ups como empresas con experiencia que necesitan capital para
              crecer durante su proceso de internacionalización en España.
            </p>
          </div>
          <div className="col">
            <span>06</span>
            <h3>Red de desarrollo</h3>
            <p>
              Asesoramos en el desarrollo de su red comercial y de contactos
              local, teniendo en cuenta el sector y la industria del negocio que
              se trate.
            </p>
          </div>
        </div>
      </div>
    </ServiciosContainer>
  );
}

export default Servicios;

const ServiciosContainer = styled.section`
  text-align: center;
  h2 {
    font-weight: var(--h2-font-weight);
    font-size: var(--h2-font-size);
    padding-bottom: 2rem;
  }
  h2::after {
    content: "";
    display: block;
    width: 8rem;
    height: 4px;
    margin: auto;
    margin-top: 0.7rem;
    background-color: var(--color-primary);
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
      color: #6ec1e467;
      font-weight: 700;
      font-size: 10rem;
      position: relative;
      top: 8rem;
    }
  }
  @media (max-width: 800px) {
    #items {
      margin-top: -10rem;
      justify-content: center;
      margin-bottom: 15rem;
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
  @media (max-width: 720px) {
    h2 {
      font-size: var(--h2-font-size-small);
    }
  }
`;
