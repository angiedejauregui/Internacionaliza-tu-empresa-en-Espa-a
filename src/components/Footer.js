import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <>
    <FooterContainer>
        <img src="https://i.postimg.cc/8kn17QB8/Logo-LMJ-color-CMYK-1.jpg" alt="Logo" />
        <div>
            <h3>Nuestras oficinas</h3>
            <div><i class="fa-solid fa-location-dot"></i> San Martín 948, 6º piso – (C1004AAT) – CABA – Argentina</div>
        </div>
        <div>
            <h3>Contacto</h3>
            <div><i class="fa-solid fa-phone"></i> +54 011 60914583 (líneas rotativas) </div>
            <div><i class="fa-solid fa-envelope"></i> ljmabogados@lajam.com.ar</div>
        </div>
    </FooterContainer>
    </>
  )
}

export default Footer

const FooterContainer = styled.footer`
display: flex;
justify-content: space-between;
color: var(--color-text); // ver esto 
padding: 0 1rem 3rem 1rem;
bottom: 15rem;


img {
    width: 350px;
}
h3 {
    font-size: 1.3rem;
    text-align: start;
    margin-bottom: 1.5rem;
}
div {
    width: 300px;
    text-align: start;
    font-size: 0.9rem;
}
i {
    color: var(--color-primary);
    font-size: 1.1rem;
    margin-right: 3px;
}
small {
  text-align: center;
}
@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem; 
}
`