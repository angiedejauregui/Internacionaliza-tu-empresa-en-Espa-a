import React from "react";
import styled from "styled-components";

function Inicio() {
  return (
    <>
      <InicioContainer id="inicio">
        <h3>INTERNACIONALIZA TU EMPPRESA</h3>
        <h1>EN ESPAÑA</h1>
        <p>
          Amplia tu negocio en uno de los mejores paises para relacionarte con Europa y el mundo. Somos expertos y líderes en procesos de
          internacionalización
        </p>
        <a href="#contactanos">
          <button>CONTÁCTANOS</button>
        </a>
        
      </InicioContainer>
      <sv
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#61a6ea"
          fill-opacity="0.3"
          d="M0,192L120,208C240,224,480,256,720,261.3C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
        <path
          fill="#61a6ea"
          fill-opacity="1"
          d="M0,224L120,234.7C240,245,480,267,720,266.7C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
        <path
          fill="#61a6ea"
          fill-opacity="0.6"
          d="M0,256L120,250.7C240,245,480,235,720,240C960,245,1200,267,1320,277.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </sv>
      
    </>
  );
}

export default Inicio;

const InicioContainer = styled.section`
height: auto;
background-image:  linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(https://i.postimg.cc/Qx7TftVJ/Foto-Bilbao.jpg);
  background-repeat: no-repeat;
  text-align: center;
  padding: 10rem;
  h1 {
    font-size: 7rem;
    font-weight: 700;
    font-style: var(--typography-primary-font-family);
    color: var(--color-primary);
  }
  h3 {
    font-weight: bold;
    font-size: 2.3rem;
    color: #fff;
  }
  p {
    font-size: 1.5rem;
    font-weight: 700;
    width: 55rem;
    margin: auto;
    width: auto;
    color: #fff;
  }
  button {
    background-color: var(--color-primary);
    border-radius: 20px;
    padding: 7px 30px 7px 30px;
    font-size: 1.3rem;
    font-weight: 700;
    border: none;
    margin: 2rem;
  }
  button:hover {
    background-color: var(--color-secondary);
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 950px) {
    padding: 10rem 2rem 5rem 2rem;
    h1 {
      font-size: 5.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    padding: 8rem 2rem 3rem 2rem;
    h3 {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 4.5rem;
    }
    p {
      font-size: 1.2rem;
    }
    button {
    }
  }
`;
