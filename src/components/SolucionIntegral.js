import React from "react";
import styled from "styled-components";

function SolucionIntegral() {
  return (
    <SolucionIntegralContainer id="solucion-integral">
      <h2>SOLUCIÓN INTEGRAL</h2>
      <p>
        Brindamos una solución total para todos aquellos aspectos relevantes
        para lograr una internacionalización exitosa de su negocio. Trabajamos en una
        <span> enfoque panorámico</span> que contempla todos los distintos
        ángulos de la migración, incluyendo medidas para evitar el posible
        impacto del choque cultural y el desarrollo de una red de contactos
        relevante dentro del sector o industria de que se trate
      </p>
    </SolucionIntegralContainer>
  );
}

export default SolucionIntegral;

const SolucionIntegralContainer = styled.section`
  text-align: center;
  h2 {
    font-size: var(--h2-font-size);
    font-weight: var(--h2-font-weight);
    padding-top: 5rem;
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
  p {
    width: 65rem;
    margin: auto;
    padding: 2rem;
    font-size: var(--text-font-size);
    span {
      color: var(--color-primary);
      font-weight: 700;
    }
  }
  @media (max-width: 1100px) {
    h2 {
      font-size: var(--h2-font-size-small);
    }
    p {
      width: auto;
    }
  }
`;
