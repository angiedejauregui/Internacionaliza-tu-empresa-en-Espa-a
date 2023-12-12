import React from "react";
import styled from "styled-components";

function Modal({ children, value, state, setState }) {
  return (
    <>
      {state && (
        <Overlay onClick={() => setState(false)}>
          <ModalContainer>
            <div className="encabezado">
              <h3>{value}</h3>
              <button onClick={() => setState(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="86"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 60vw;
  max-height: 90vh;
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px 40px;
  text-align: start;
  overflow-y: auto;
  .encabezado {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-primary);
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 10px;
    margin-bottom: 20px;
    button {
      height: 3.5rem;
      width: 3.5rem;
      border: none;
      background-color: #fff;
      cursor: poiner;
      transition: 0.3s ease all;
      border-radius: 5px;
      color: var(--color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: #f2f2f2;
      }
    }
    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 900px) {
    width: 80vw;
  }
`;
