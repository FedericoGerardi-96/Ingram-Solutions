import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import { ButtonOrange } from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  banner_sec,
  banner_top,
  logo_soluciones_financieras,
  icono_tabla_1,
  icono_tabla_2,
  icono_tabla_3,
  icono_tabla_4,
  bg_tabla,
} from "../../services/Image-Financiamiento/Image";

const Financiamiento = () => {
  const Herochildren = () => {
    return (
      <>
        <h1 className="text-blue fs-3 fw-bold"> Soluciones financieras</h1>
        <h1 className="fs-3 fw-bold pb-5">para hacer crecer tu empresa</h1>
      </>
    );
  };

  return (
    <>
      <Hero logo={logo_soluciones_financieras} backgroundUrl={banner_top}>
        <Herochildren />
      </Hero>
      <section id="financiamiento_ingramMicro_solutions_banner">
        <div className="container my-5">
          <div className="financiamiento_banner_Sec py-4 position-relative">
            <div className="row">
              <div className="col-0 col-md-7"></div>
              <div
                style={{ zIndex: "99" }}
                className="financiamiento col-12 col-md-5 d-flex flex-column align-items-md-start align-items-center justify-content-md-start justify-content-center"
              >
                <p className=" fw-5 text-md-white fw-bold">
                  El objetivo del área de Soluciones financieras de Ingram Micro
                  es apoyar a nuestros canales, distribuidores y clientes con
                  opciones de financiamiento, con base a las necesidades de cada
                  proyecto. Contamos con productos financieros como:
                  arrendamiento puro, arrendamiento financiero, crédito simple,
                  factoraje sin recurso, entre otros. La falta de presupuesto ya
                  no es un problema, acércate a Soluciones Financiera.
                </p>
                <ButtonOrange
                  href="mailto:serviciosprofesionales.mx@ingrammicro.com"
                  text="Contáctanos"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seccion-tabla-sf">
        <article>
          <div className="container">
            <div className="row text-center mb-5 py-5">
              <div className="col-md-12">
                <h3 className="text-blue fw-bold">Financiamiento</h3>
              </div>
            </div>
          </div>

          <div className="bg-tabla-sf">
            <div className="icon_container row wrapper justify-content-around text-center position-relative">
              <div className="col-lg-2 offset-lg-1">
                <Image
                  src={icono_tabla_1}
                  width="150"
                  height="150"
                  objectFit="contain"
                  alt="icono"
                />
                <p className="fs-5 mt-2">
                  IM Financial
                  <br />
                  <span className="fw-bold verde">Express</span>
                </p>
              </div>
              <div className="col-lg-2">
                <Image
                  src={icono_tabla_2}
                  width="150"
                  height="150"
                  objectFit="contain"
                  alt="icono"
                />
                <p className="fs-5 mt-2">
                  IM Financial
                  <br />
                  <span className="fw-bold naranja">Pyme</span>
                </p>
              </div>
              <div className="col-lg-2">
                <Image
                  src={icono_tabla_3}
                  width="150"
                  height="150"
                  objectFit="contain"
                  alt="icono"
                />
                <p className="fs-5 mt-2">
                  IM Financial
                  <br />
                  <span className="fw-bold celeste">Advance</span>
                </p>
              </div>
              <div className="col-lg-2">
                <Image
                  src={icono_tabla_4}
                  width="150"
                  height="150"
                  objectFit="contain"
                  alt="icono"
                />
                <p className="fs-5 mt-2">
                  IM Financial
                  <br />
                  <span className="fw-bold violeta">Goverment</span>
                </p>
              </div>
            </div>

            <div className="row g-0 wrapper">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Segmento</th>
                      <th className="text-center" scope="col">
                        SMB
                      </th>
                      <th className="text-center" scope="col">
                        Empresas medianas y grandes
                      </th>
                      <th className="text-center" scope="col">
                        Empresas Top
                      </th>
                      <th className="text-center" scope="col">
                        Gobierno
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Producto</th>
                      <td>Crédito simple</td>
                      <td>Arrendamiento</td>
                      <td>Factoraje</td>
                      <td>Arrendamiento</td>
                    </tr>
                    <tr>
                      <th scope="row">Monto mínimo</th>
                      <td>$50.000 pesos</td>
                      <td>$100.000 pesos</td>
                      <td>$100.000 pesos</td>
                      <td>$200.000 pesos</td>
                    </tr>
                    <tr>
                      <th scope="row">Monto máximo</th>
                      <td>$5.000.000 pesos</td>
                      <td>$35.000.000 pesos</td>
                      <td>$30.000.000 pesos</td>
                      <td>$40.000.000 pesos</td>
                    </tr>
                    <tr>
                      <th scope="row">Tiempo de respuesta</th>
                      <td>Menos de 24 hrs</td>
                      <td>10 días hábiles</td>
                      <td>15 días hábiles</td>
                      <td>15 días hábiles</td>
                    </tr>
                    <tr>
                      <th scope="row">Requisitos y condiciones</th>
                      <td>
                        Ingresar la CIEC a través del portal que se encuentra en
                        nuestra página web
                      </td>
                      <td>
                        Revisión de estados financieros y buro de crédito,
                        ventas mínimas a $20 mdp anuales
                      </td>
                      <td>
                        Información financiara y garantía hipotecaria, ventas
                        mínimas anuales por $25 mdp
                      </td>
                      <td>
                        Estados financieros y buro de crédito. Ventas mínimas a
                        $20mdp anuales
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Plazo</th>
                      <td>Desde 2 hasta 24 meses</td>
                      <td>Desde 18 hasta 60 meses</td>
                      <td>De 60, 90 o hasta 120 días</td>
                      <td>Desde 24 a 48 meses</td>
                    </tr>
                    <tr>
                      <th scope="row">Tasa</th>
                      <td>2% de interés mensual, comisión 2% </td>
                      <td>13% anualizada</td>
                      <td>1.8% por disposición más el 2% de comisión</td>
                      <td>16% anualizadas</td>
                    </tr>
                    {/* <tr>
                                    <th scope="row">Arrendadora o financiera</th>
                                    <td>Fundary</td>
                                    <td>HPFS, DLL y CHG</td>
                                    <td>Efactor, FGS o Bontu</td>
                                    <td>ID Leasing</td>
                                  </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section id="financiamiento_ingramMicro_fundary_banner">
        <div className="container my-5">
          <div className="financiamiento_banner_Sec4 py-4 position-relative">
            <div className="row">
              <div
                style={{ zIndex: "99" }}
                className="col-12 col-md-7 d-flex flex-column align-items-md-start align-items-center justify-content-md-start justify-content-center"
              >
                <h2 className="text-center  text-blue">
                  ¿Requieres liquidez inmediata?
                </h2>
                <p className="fs-4 fw-bold">
                  Solicita un crédito a través de nuestro aliado{" "}
                  <a
                    href="https://ingram.fundary.com/?elqTrackId=025707b89a75499caa92127559a91039&amp;elqaid=872&amp;elqat=2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-blue">FUNDARY</span>
                  </a>
                  , con una pre aprobación en 5 minutos
                </p>
              </div>
              <div className="col-0 col-md-5"></div>
            </div>
          </div>
        </div>
      </section>
      <BannerContact
        text="Expande tus oportunidades
      de Financiamiento con Ingram Micro:
      "
        href_Button="mailto:serviciosfinancieros.mx@ingrammicro.com"
        url="mailto:serviciosfinancieros.mx@ingrammicro.com"
        url_Text="serviciosfinancieros.mx@ingrammicro.com"
      />
    </>
  );
};

export default Financiamiento;
