import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Navbar() {
  const [burger, setBurger] = useState(false);

  return (
      <NavbarContainer burger={burger}>
      <a href="#inicio"><img src="https://i.postimg.cc/vmQBTNL2/Logo-solo-blanco-fondoceleste.jpg" alt="Logo" /></a>
        <nav>
          
          <ul className="text-uppercase" onClick={() => setBurger(false)}>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#por-que-españa">¿Por qué España?</a>
            </li>
            <li>
              <a href="#quienes-somos">¿Quiénes Somos?</a>
            </li>
            <li>
              <a href="#solucion-integral">Solución Integral</a>
            </li>
            <li>
              <a href="#como-trabajamos">¿Como trabajamos?</a>
            </li>
            <li>
              <a href="#servicios">Serviciós</a>
            </li>
            <li>
              <a href="#notas">Notas</a>
            </li>
            <li>
              <a href="#contactanos">Contáctanos</a>
            </li>
          </ul>
          <div className="d-flex justify-content-space-between">
          <Burger burger={burger} onClick={() => setBurger(!burger)}>
            <div />
            <div />
            <div />
          </Burger>
          
          </div>
        </nav>
      </NavbarContainer>
    
  );
}

export default Navbar;

const NavbarContainer = styled.header`
  img {
    height: 3.5rem;
    width: 3.5rem;
    position: absolute;
    left: 1rem;
    top: 1rem;
    border-radius: 5rem;
    position: fixed;
    z-index: 20;
  }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center !important;
      align-items: center !important;
      gap: 2.5rem;
      position: fixed;
      top: 0;
      right: ${({ burger }) => (burger ? "0" : "-280px")};
      height: 100vh;
      width: 280px;
      background-color: var(--color-secondary);
      margin: 0;
      z-index: 30;
      transition: all .8s ease;
      
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      &:hover {
        color: var(--color-primary);
      }
    }
    }
`;

const Burger = styled.div`
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 32;

    div {
      width: 2.7rem;
      height: 0.25rem;
      background-color: #4791cd;
      color: red;
      margin: 0.6rem;
      border-radius: 2px;

      &:nth-child(1) {
        transform: ${({ burger }) =>
          burger ? "rotate(45deg) translate(10px, 10px)" : "rotate(0)"};
        transition: ease-out 0.5s;
        margin-right: 0 !important;
      }
      &:nth-child(2) {
        opacity: ${({ burger }) => (burger ? 0 : 1)};
        transition: ease-out 0.5s;
      }
      &:nth-child(3) {
        transform: ${({ burger }) =>
          burger ? "rotate(-45deg) translate(10px, -10px)" : "rotate(0)"};
        transition: ease-out 0.5s;
      }
    }
`;
