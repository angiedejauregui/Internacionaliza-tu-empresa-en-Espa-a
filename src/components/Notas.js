import React from "react";
import styled from "styled-components";

function Notas() {
  return (
    <NotasContainer id="notas">
      <h2>NOTAS</h2>
      <figure>
        <a
          href="https://cincodias.elpais.com/cincodias/2023/02/21/legal/1676964664_943611.html"
          target="_blank"
        >
          <img
            src="https://imagenes.elpais.com/resizer/Hw7VRnRaTpvIB2rFFXF3sYeSnk0=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YDMHPMWAAJIZLDVVGN3A4WOSKA.jpg"
            alt=""
          />
          <figcaption>
            España, destino empresarial para Latam: Claves para un 'soft
            landing' de éxito
          </figcaption>
        </a>
      </figure>
    </NotasContainer>
  );
}

export default Notas;

const NotasContainer = styled.section`
  text-align: center;
  h2 {
    font-size: var(--h2-font-size);
    font-weight: var(--h2-font-weight);
    margin-top: 5rem;
    padding-top: 2rem;
    margin-bottom: 4rem;
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
  figure {
    background-color: #e8e8e8;
    width: 18rem;
    margin: auto;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    img {
      width: 18rem;
    }
    figcaption {
      font-weight: 700;
      text-align: start;
      padding: 1rem;
    }
  }
  a {
    color: var(--color-secondary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 720px) {
    h2 {
      font-size: var(--h2-font-size-small);
    }
    figure {
    width: 15rem;
    margin-bottom: 2rem;
    img {
      width: 15rem;
    }
    figcaption {
      padding: 0.7rem;
    }
  }
  }
`;
