import React from "react";
import styled from "styled-components";

function QuienesSomos() {
  return (
    <QuienesSomosContainer id="quienes-somos">
      <h2>¿QUINÉS SOMOS?</h2>
      <p>
        Nuestro equipo está formado por un <span>grupo multidisciplinario</span>{" "}
        de profesionales de distintas disciplinas que tienen como objetivo
        apoyar a profesionales y empresas en organizar una internacionalización
        exitosa de su empresa en España, ocupándose de todos
        los aspectos legalmente relevantes para el cambio.
      </p>
    </QuienesSomosContainer>
  );
}

export default QuienesSomos;

const QuienesSomosContainer = styled.section`
  text-align: center;
  h2 {
    padding-top: 8rem;
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
