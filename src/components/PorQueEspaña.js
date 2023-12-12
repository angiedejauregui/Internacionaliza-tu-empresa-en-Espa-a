import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

function PorQueEspaña(props) {
  const [economia, setEconomia] = useState(false);
  const [impuestos, setImpuestos] = useState(false);
  const [talento, setTalento] = useState(false);
  const [infraestructura, setInfraestructura] = useState(false);
  const [calidadDeVida, setCalidadDeVida] = useState(false);

  return (
    <>
      <sv xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,26.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</sv>
<PorQueEspañaContainer id="por-que-españa">
        <h2>¿POR QUÉ ESPAÑA?</h2>
        <div id="items">
          <div onClick={() => setEconomia(true)}>
            <img src={props.economia} />
            <h4>Economia</h4>
            <span>ver más</span>
          </div>

          <div onClick={() => setImpuestos(true)}>
            <img src={props.impuestos} />
            <h4>Impuestos</h4>
            <span>ver más</span>
          </div>

          <div onClick={() => setTalento(true)}>
            <img src={props.talento} />
            <h4>Talento</h4>
            <span>ver más</span>
          </div>

          <div onClick={() => setInfraestructura(true)}>
            <img src={props.infraestructura} />
            <h4>Infraestructura</h4>
            <span>ver más</span>
          </div>

          <div onClick={() => setCalidadDeVida(true)}>
            <img src={props.calidadDeVida} />
            <h4>Calidad de Vida</h4>
            <span>ver más</span>
          </div>
        </div>
        {/* Modal #1 */}
        <Modal value="Economia" state={economia} setState={setEconomia}>
          <Content>
            <p>
              España, una de las principales economías europeas, ha superado de
              forma sostenida a la de sus homólogos europeos durante los últimos
              cinco años, en circunstancias previas a la pandemia.
              <br />
              <br />
              Con un PIB de 1.200 millones de dólares, España es la 4ª economía
              de la UE -salvo la del Reino Unido- y la 14ª del mundo.
              <br />
              <br />
              España es el 13º receptor de inversiones extranjeras en el mundo.
              <br />
              Más de 14.600 empresas extranjeras han instalado su negocio en
              España. 70 de las 100 principales empresas de Forbes Global 2000
              operan en España.
              <br />
              <br />
              El sector empresarial español está muy internacionalizado. Las
              asociaciones con empresas locales ofrecen excelentes oportunidades
              para ingresar a otros mercados.
              <br />
              <br />
              España es el 11º mayor exportador mundial de servicios
              comerciales, registrado en 115.000 millones de dólares.
              <br />
              <br />
              El Índice de Restricción Regulatoria de la IED de la OCDE sitúa a
              España como el 10º país del mundo con las regulaciones menos
              restrictivas para las inversiones internacionales.
              <br />
              <br />
              Segundo destino turístico después de Francia en número de
              visitantes anuales. Lidera el mundo en competitividad turística
              según el Foro Económico Mundial en 2019.
            </p>
          </Content>
        </Modal>
        {/* Modal #2 */}
        <Modal value="Talento" state={impuestos} setState={setImpuestos}>
          <Content>
            <p>
              La tasa del impuesto de sociedades de España dentro de la Eurozona
              es moderada (25%) y los incentivos y exenciones fiscales pueden
              reducir la tasa impositiva efectiva a alrededor del 20%.
              <br />
              <br />
              Hasta el 42% de bonificación en el Impuesto sobre Sociedades por
              actividades de I+D+i.
              <br />
              <br />
              En caso de insuficiencia del IRPF, la normativa española permite
              trasladar a inversiones de I+D+i los créditos fiscales no
              utilizados.
              <br />
              <br />
              España es una plataforma para negocios internacionales y
              oportunidades de inversión. El sistema fiscal español es ventajoso
              para las empresas internacionales que pueden beneficiarse de los
              94 convenios de doble imposición suscritos por España y
              actualmente en vigor, en particular con países de América Latina.
              <br />
              <br />
              El esquema de “exención de participación” beneficia a las empresas
              internacionales. Los dividendos y ganancias patrimoniales
              obtenidos por la transmisión de acciones de filiales no residentes
              en España están exentos de tributación.
              <br />
              <br />
              España cuenta con un régimen fiscal especial para las sociedades
              holding («Spanish Holding Companies» -ETVE) que permite que los
              dividendos y las ganancias patrimoniales procedentes de la
              transmisión de acciones de filiales estén exentos de tributación.
              <br />
              <br />
              En España existe un régimen de neutralidad fiscal para las
              operaciones de reestructuración empresarial por lo que las
              fusiones, escisiones o cualquier otra reorganización estructural
              pueden realizarse sin sanciones fiscales.
              <br />
              <br />
              El tipo fijo del IRPF para los seis primeros años es del 24% sobre
              todas las rentas hasta 600.000€, y del 47% sobre las rentas
              superiores a 600.000€ si el expatriado no ha residido en España
              durante los diez períodos fiscales anteriores a su traslado al
              país , en cuyo caso, los rendimientos del ahorro obtenidos en el
              extranjero no tributan en España.
            </p>
          </Content>
        </Modal>
        {/* Modal #3 */}
        <Modal value="Talento" state={talento} setState={setTalento}>
          <Content>
            <p>
              España es el sexto país del mundo y el tercero de Europa en
              porcentaje de población con estudios superiores (Informe GTCI
              2020, INSEAD).
              <br />
              <br />
              Este es un gran momento para el Emprendimiento en España. Con el
              apoyo de políticas e incentivos nacionales y regionales, este
              aumento de nuevas iniciativas empresariales promueve diversas
              formas de alianzas relacionadas con el trabajo.
              <br />
              <br />
              España es una sociedad abierta e inclusiva. Más de 6 millones de
              extranjeros viven en el territorio español (el 13% de la
              población) y están bien integrados en la sociedad. España es
              particularmente atractiva para el talento de habla hispana.
              <br />
              <br />
              España es el destino preferido de los estudiantes universitarios
              en el programa de intercambio Erasmus según la Comisión Europea:
              principalmente por el idioma, la calidad de sus universidades y su
              cultura abierta e inclusiva hacia los extranjeros.
            </p>
          </Content>
        </Modal>
        {/* Modal #4*/}
        <Modal
          value="Infraestructura"
          state={infraestructura}
          setState={setInfraestructura}
        >
          <Content>
            <p>
              50 aeropuertos, la mayoría con conexiones internacionales
              directas. Dos de los aeropuertos más concurridos de Europa: Madrid
              y Barcelona. Vuelos directos a cuatro continentes, 74 países y 189
              ciudades.
              <br />
              <br />
              La mayor red de autopistas y autopistas de la UE (más de 17.000
              km).
              <br />
              <br />
              La tercera red ferroviaria de alta velocidad más extensa del mundo
              (3.402 kilómetros). Las mejores valoraciones a nivel mundial por
              la calidad de su sistema ferroviario, carreteras y servicios
              aeroportuarios.
              <br />
              <br />
              España tiene la tasa de penetración de FTTH (fibra hasta el hogar)
              más alta de todos los países de la Unión Europea. Además, la banda
              ancha ultrarrápida cubre el 87% del país, frente al 60% en Europa.
              <br />
              <br />
              El informe DESI (Digital Economy and Society Index) de 2019 sitúa
              a España en el octavo lugar entre los países mejor preparados para
              el despliegue de la tecnología 5G, al haber subastado el 30% de su
              espectro de frecuencias frente al 14% de media en la UE.
              <br />
              <br />
              España es también uno de los países en realizar más pruebas, con
              proyectos piloto en todo el territorio, algunos de los cuales
              fueron financiados por el 5G Research en Horizonte 2020. Y gracias
              al despliegue de los principales operadores de telecomunicaciones
              españoles, España es líder en 5G comercial.
            </p>
          </Content>
        </Modal>
        {/*Modal #5 */}
        <Modal
          value="Calidad de Vida"
          state={calidadDeVida}
          setState={setCalidadDeVida}
        >
          <Content>
            <p>
              España proporciona acceso universal a la sanidad, garantizando a
              los trabajadores desplazados ya los extranjeros prácticamente los
              mismos servicios sanitarios que a los ciudadanos españoles.
              <br />
              <br />
              El Índice de Competitividad Global del Foro Económico Mundial
              sitúa al sistema sanitario español en el primer puesto a nivel
              mundial.
              <br />
              <br />
              España es el segundo país del mundo y el primero de Europa en
              esperanza de vida, según la OCDE.
            </p>
          </Content>
        </Modal>
      </PorQueEspañaContainer>
    </>
  );
}

export default PorQueEspaña;

const PorQueEspañaContainer = styled.section`
  color: var(--color-secondary);
  text-align: center;
  position: relative;
  z-index: 22;
  h2 {
    padding: 5rem;
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
  img {
    height: 8rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  #items {
    display: flex;
    justify-content: center;
    gap: 3.5rem;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: var(--h2-font-size-small);
    }
    #items {
      display: grid;
      grid-template-columns: 1fr 1fr !important;
      grid-row-gap: 2rem;
      margin: 0 3rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media (max-width: 550px) {
    #items {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
