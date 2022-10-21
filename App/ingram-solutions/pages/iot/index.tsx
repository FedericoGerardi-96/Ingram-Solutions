import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import {
  ButtonOrange,
  ButtonOrangeBlank,
} from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  bg_modal,
  banner_top,
  bg_sponsors,
  icono_mod_1,
  icono_mod_2,
  icono_mod_3,
  icono_mod_4,
  icono_mod_5,
  icono_mod_6,
  icono_mod_7,
  logo_iot,
  slider_1,
  sponsor_1,
  sponsor_2,
  sponsor_3,
  sponsor_4,
  sponsor_5,
  sponsor_6,
  sponsor_7,
  sponsor_8,
  sponsor_9,
  sponsor_10,
  sponsor_11,
  titulo_1,
  titulo_2,
  titulo_3,
  titulo_4,
  titulo_5,
  titulo_6,
  imagen_card_1,
  imagen_card_3_2,
  imagen_card_3_3,
  imagen_card_2,
  imagen_card_3,
  imagen_card_4,
  imagen_card_5,
} from "../../services/Image-Iot/Image";

const Iot = () => {
  const Herochildren = () => {
    return (
      <>
        <h5 className="mt-4">
          Ingram Micro el más grande distribuidor de TI puede ayudarte a
          comenzar en el mundo del IoT. <br />
          <br />
          Nuestro objetivo es simplificar el concepto de IoT ofreciendo una
          amplia gama de productos diseñados para resolver necesidades
          comerciales que pueden ir desde edificios inteligentes, monitoreo de
          bienes en tiempo real, conectividad, realidad extendida [XR],
          Industria 4.0, automatización de procesos robotizados (RPA),
          soluciones para retail, salud, transporte y más.
        </h5>
        <div className="iot row">
          <div className="col-lg-4 col-12">
            <ButtonOrange
              href="mailto:IoT.mx@ingrammicro.com"
              text="Contáctanos"
            />
          </div>
          <div className="col-lg-8 col-12">
            <div className="ms-5">
              <ButtonOrangeBlank
                href="https://images.LatAm.ingrammicro.com/Web/IngramMicroLATAM/{44527131-15ab-4157-a4a0-b78b8402994e}_IoT_Portfolio__1Q2021_v1.3_18_05_21_-_ESP.pdf?elqTrackId=2b2882e3c37f48d9ae0ded9b31f1f7f3&elqaid=866&elqat=2"
                text="Descarga Nuestra Guía"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Hero logo={logo_iot} backgroundUrl={banner_top}>
        <Herochildren />
      </Hero>
      <section id="iot__bubbles">
        <div className="mt-5">
          <div className="iot_bubble_tittle">
            <h3 className="text-blue text-center fw-bold">
              Contamos con tecnologías y soluciones como:{" "}
            </h3>
          </div>
          <div className="iot_bubbles row justify-content-center align-items-center py-lg-0 py-4 px-2">
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_1"
              style={{ cursor: "pointer" }}
              className="iot_bubbles_card col-xl col-md-4 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={icono_mod_1}
                width="140"
                height="140"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="iot_bubble_text">
                <h2
                  style={{ color: "#06baec" }}
                  className="fs-5 text-center fw-bold"
                >
                  Realidad extendida
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_2"
              style={{ cursor: "pointer" }}
              className="iot_bubbles_card col-xl col-md-4 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={icono_mod_2}
                width="140"
                height="140"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="iot_bubble_text">
                <h2
                  style={{ color: "#24b115" }}
                  className="fs-5 text-center fw-bold"
                >
                  Smart Building
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_3"
              style={{ cursor: "pointer" }}
              className="iot_bubbles_card col-xl col-md-4 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={icono_mod_3}
                width="140"
                height="140"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="iot_bubble_text">
                <h2
                  style={{ color: "#ff8303" }}
                  className="fs-5 text-center fw-bold"
                >
                  Conectividad
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_4"
              style={{ cursor: "pointer" }}
              className="iot_bubbles_card col-xl col-md-4 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={icono_mod_4}
                width="140"
                height="140"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="iot_bubble_text">
                <h2
                  style={{ color: "#c82154" }}
                  className="fs-5 text-center fw-bold"
                >
                  Industria 4.0
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_5"
              style={{ cursor: "pointer" }}
              className="iot_bubbles_card col-xl col-md-4 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={icono_mod_5}
                width="140"
                height="140"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="iot_bubble_text">
                <h2
                  style={{ color: "#2276ba" }}
                  className="fs-5 text-center fw-bold"
                >
                  AI
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_6"
              style={{ cursor: "pointer" }}
              className="iot_bubbles_card col-xl col-md-4 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={icono_mod_6}
                width="140"
                height="140"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="iot_bubble_text">
                <h2
                  style={{ color: "#33b083" }}
                  className="fs-5 text-center fw-bold"
                >
                  Logística y Retail
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_7"
              style={{ cursor: "pointer" }}
              className="iot_bubbles_card col-xl col-md-4 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={icono_mod_7}
                width="140"
                height="140"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="iot_bubble_text">
                <h2
                  style={{ color: "#f9ad15" }}
                  className="fs-5 text-center fw-bold"
                >
                  Edge computing
                </h2>
              </div>
            </div>
          </div>
          {/* modales */}
          <div
            className="modal fade"
            id="modal_1"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div className="modal-dialog  ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <span style={{ color: "#" }} className="fw-bold">
                    Realidad extendida
                  </span>
                  <br />
                  Tecnología y productos innovadores para la integración de
                  entornos físicos con realidades digitales creando experiencias
                  inmersivas. Para Ingram Micro este concepto contempla la
                  integración de tecnologías inmersivas como realidad aumentada,
                  realidad virtual o realidad mixta que pueden ser dispositivos
                  tipo wearables.
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="modal_2"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div className="modal-dialog  ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <span style={{ color: "#24b115" }} className="fw-bold">
                    {" "}
                    Smart Building
                  </span>
                  <br />
                  Concepto de edificios y hogares inteligentes orientado a tener
                  la tecnología mediante sensores y dispositivos IoT capaces de
                  informar, monitorear, controlar y automatizar un edificio u
                  hogar para mejorar eficiencias en sustentabilidad, seguridad y
                  comodidad.
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="modal_3"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div className="modal-dialog  ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <span style={{ color: "#ff8303" }} className="fw-bold">
                    Conectividad
                  </span>
                  <br />
                  Conectividad es una pieza fundamental en un ecosistema de IoT
                  y es lograble mediante dispositivos como routers/modems y
                  Aceess points diseñados para este tipo de ecosistemas. Con
                  nuestras soluciones es posible brindar comunicación a lugares
                  remotos, vehículos y tener una integración completa con
                  plataformas de una forma segura y confiable.
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="modal_4"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div className="modal-dialog  ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <span style={{ color: "#c82154" }} className="fw-bold">
                    Industria 4.0
                  </span>
                  <br />
                  La nueva revolución industrial se caracteriza en la
                  conectividad, automatización y análisis en tiempo real de
                  datos para sectores de manufactura e industriales. Contamos
                  con soluciones como telemetría para monitoreo de variables y
                  consumos en líneas de producción hasta la posibilidad de
                  ofrecer computadoras embebidas e industriales.
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="modal_5"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div className="modal-dialog  ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <span style={{ color: "#2276ba" }} className="fw-bold">
                    AI
                  </span>
                  <br />
                  La inteligencia artificial es un concepto complementario a las
                  soluciones de IoT que de forma conjunta nos permite tener un
                  grado de automatización. RPA (automatización de procesos
                  robotizados) es un software que permite eficientizar procesos
                  y tareas altamente manuales o repetitivas haciendo uso de
                  robots programables.
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="modal_6"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div className="modal-dialog  ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <span style={{ color: "#33b083" }} className="fw-bold">
                    Logística y Retail
                  </span>
                  <br />
                  Soluciones IoT en concepto de logística permiten tener un
                  control y monitoreo certero de bienes, productos o flotillas
                  en tiempo real. En el sector de retail las soluciones IoT
                  contribuyen a la mejora de experiencia al cliente desde
                  kioscos interactivos hasta soluciones más avanzadas para
                  ofrecer inteligencia de mercado.
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="modal_7"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div className="modal-dialog  ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <span style={{ color: "#f9ad15" }} className="fw-bold">
                    Edge computing
                  </span>
                  <br />
                  La tecnología de computo en el borde o “Edge computing” nos
                  permite hacer un uso más eficiente y óptimo de la cantidad de
                  datos generados y almacenados en ecosistemas IoT, esto se
                  logra acercando el poder de procesamiento y almacenaje a los
                  dispositivos que generan datos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-5">
          <h3 className="text-blue text-center fw-bold">
            Una solución a tu medida
          </h3>
          <div className="row">
            <div className="col-12">
              <div className="card border-light">
                <Image
                  src={titulo_1}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="row">
                      <div className="col-lg-7 col-12">
                        <p className="fs-5">
                          <b>Producto. HMT-1 y HMT-1z1</b>
                          <br />
                          Dispositivo “wearable” que ayuda a la productividad de
                          un trabajo colaborativo conectado y remoto para el
                          trabajador de primera línea en ambientes industriales.
                          Cuenta con una cámara, micrófonos y pantalla donde se
                          muestra la información y aplicativos controlado con
                          comandos de voz y 100% manos libres.
                        </p>
                      </div>
                      <div className="col-lg col-12 d-flex flex-wrap justify-content-center">
                        <Image
                          src={imagen_card_1}
                          width="450"
                          objectFit="contain"
                          className="img-fluid"
                          alt="sponsor"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4 ">
                    <button className="btn boton-celeste fs-4">
                      <a
                        className="text-decoration-none"
                        href="https://images.LatAm.ingrammicro.com/Web/IngramMicroLATAM/{7716094e-bae9-4d41-bd20-2d4634dcde24}_RealWear_Solutions_Summary.pdf?elqTrackId=5d7d394b474d4bf59ad2da93ad045aeb&amp;elqaid=866&amp;elqat=2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Descarga PDF RealWear Summary
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-light">
                <Image
                  src={titulo_2}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="row">
                      <div className="col-lg-7 col-12">
                        <p className="fs-5">
                          <b> Zipatile Zipatobox</b>
                          <br />
                          Productos para domótica que nos permiten la
                          automatización de servicios de una vivienda o edificio
                          con el fin de gestionar, monitorear consumo de
                          recursos para brindar comodidad o ahorros. Cuenta con
                          su aplicación móvil y portal en línea que permite el
                          control y acceso a los dispositivos conectados en la
                          red o ecosistema IoT. Compatibles con protocolos de
                          comunicación estándares en la industria, como WiFi,
                          Zwave, bluetooth, así como con otras marcas con
                          productos inteligentes.
                        </p>
                      </div>
                      <div className="col-lg col-12 d-flex flex-wrap justify-content-center">
                        <Image
                          src={imagen_card_2}
                          width="450"
                          objectFit="contain"
                          className="img-fluid"
                          alt="sponsor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-light">
                <Image
                  src={titulo_3}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="row">
                      <div className="col-12">
                        <p className="fs-5">
                          Mediante la tecnología Wireless WAN de Cradlepoint y
                          conectividad vía redes celulares LTE y 5G es posible
                          brindar conectividad a internet una oficina remota,
                          sitios remotos, personal de campo, permitiendo a
                          aplicaciones críticas en la nube y centros de datos
                          desde cualquier lugar mediante un servicio móvil
                          avanzado, de manera rápida, fiable y segura.
                        </p>
                      </div>
                      <div className="col-12 d-flex flex-wrap justify-content-center">
                        <Image
                          src={imagen_card_3}
                          width="300"
                          objectFit="contain"
                          className="img-fluid"
                          alt="sponsor"
                        />
                        <Image
                          src={imagen_card_3_2}
                          width="300"
                          objectFit="contain"
                          className="img-fluid"
                          alt="sponsor"
                        />
                        <Image
                          src={imagen_card_3_3}
                          width="300"
                          objectFit="contain"
                          className="img-fluid"
                          alt="sponsor"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4 ">
                    <button className="btn boton-naranja fs-4">
                      <a
                        className="text-decoration-none"
                        href="https://images.LatAm.ingrammicro.com/Web/IngramMicroLATAM/{bcf3b4d8-324c-4e41-ba87-e5b0336b1160}_Why_Partner_with_Cradlepoint.pdf?elqTrackId=872b438c2395489281e6a33de6d08519&elqaid=866&elqat=2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Descarga PDF Why Partner Cradlepoint
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-light">
                <Image
                  src={titulo_4}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="row">
                      <div className="col-lg-7 col-12">
                        <p className="fs-5">
                          <b> Tecnología RPA</b>
                          <br />
                          Es un concepto complementario a las soluciones de IoT
                          que de forma en conjunta nos permite tener un grado de
                          automatización. RPA (automatización de procesos
                          robotizados) es un software que permite eficientizar
                          proceso y tareas altamente manuales o repetitivas
                          haciendo uso de robots programables.
                        </p>
                      </div>
                      <div className="col-lg col-12">
                        <Image
                          src={imagen_card_4}
                          width="450"
                          objectFit="contain"
                          className="img-fluid"
                          alt="sponsor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-light">
                <Image
                  src={titulo_5}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="row">
                      <div className="col-lg-7 col-12">
                        <p className="fs-5">
                          Resuelve problemas operativos para hacer más
                          eficientes los procesos con la aplicación de
                          tecnología de punta, mediante monitoreo, transmisión y
                          control simultáneo de variables en tiempo real y con
                          acceso a la nube, hacen de nuestras soluciones una
                          herramienta universal. El dispositivo TITAN incorpora
                          el potencial del IoT para optimizar el desempeño de
                          cualquier industria compatibilidad con las redes GSM,
                          LTE-M y Sigfox es ideal para industrias de
                          agricultura, acuacultura, manufactura entre otros.
                        </p>
                      </div>
                      <div className="col-lg col-12">
                        <Image
                          src={imagen_card_5}
                          width="450"
                          objectFit="contain"
                          className="img-fluid"
                          alt="sponsor"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4 ">
                    <button className="btn boton-celeste fs-4">
                      <a
                        className="text-decoration-none"
                        href="https://images.LatAm.ingrammicro.com/Web/IngramMicroLATAM/{2b7b3176-b257-44d7-81c8-6f89e000327a}_Titan_Digital.pdf?elqTrackId=8d873c7ad9a547569f1174124d0c5d1c&elqaid=866&elqat=2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Descarga PDF TITAN
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-light">
                <Image
                  src={titulo_6}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="row">
                      <div className="col-lg-7 col-12">
                        <p className="fs-5">
                          <b>Producto. HMT-1 y HMT-1z1</b>
                          <br />
                          Dispositivo “wearable” que ayuda a la productividad de
                          un trabajo colaborativo conectado y remoto para el
                          trabajador de primera línea en ambientes industriales.
                          Cuenta con una cámara, micrófonos y pantalla donde se
                          muestra la información y aplicativos controlado con
                          comandos de voz y 100% manos libres.
                        </p>
                      </div>
                      <div className="col-lg col-12">
                        <Image
                          src={imagen_card_1}
                          width="450"
                          objectFit="contain"
                          className="img-fluid"
                          alt="sponsor"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4 ">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#modal_8"
                      className="btn boton-verde fs-4"
                    >
                      Conoce más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        <div
          id="modal_8"
          className="modal fade"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content ">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <Image
                    src={titulo_6}
                    objectFit="contain"
                    className="img-fluid"
                    alt="sponsor"
                  />
                </p>
                <ul>
                  <li>
                    El servidor Edge ThinkSystem SE350 encaja en el espacio
                    entre esos dos extremos. Su diseño compacto, bajo consumo de
                    energía y alto rendimiento son la combinación perfecta para
                    ubicaciones de borde. El SE350 puede montarse en la pared,
                    apilarse en el techo o instalarse en un rack. También está
                    diseñado para funcionar en entornos difíciles, con humedad,
                    polvo o altas temperaturas (hasta 55 ° C.)
                  </li>
                  <br />
                  <li>
                    El servidor Edge ThinkSystem SE350 acerca el aumento de la
                    potencia de procesamiento, el almacenamiento y la red al
                    lugar donde se generan los datos, lo que permite que las
                    acciones resultantes del análisis de esos datos se lleven a
                    cabo con mayor rapidez. El servidor tiene conexiones por
                    cable de hasta 10 GbE y, opcionalmente, admite conectividad
                    inalámbrica Wi-Fi y LTE.
                  </li>
                  <br />
                  <li>
                    El servidor Edge de Lenovo ThinkSystem SE350 es un servidor
                    compacto par los nuevos modelos de computación distribuida
                    que acerca la potencia de cómputo a donde se necesita, para
                    mejorar los tiempos de respuesta y ahorrar ancho de banda
                  </li>
                </ul>
                <p></p>
                <div className="d-flex flex-wrap text-center justify-content-center mb-4 ">
                  <a
                    className="m-1"
                    href="https://lenovopress.com/lp1069-introducing-the-thinksystem-se350?elqTrackId=397789dd83e6400b812f25047ffd4d0c&amp;elqaid=866&amp;elqat=2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn boton-verde-3">Info general</button>
                  </a>{" "}
                  <a
                    className="m-1"
                    href="https://www.lenovo.com/us/en/resources/data-center-solutions/case-studies/addfor/?elqTrackId=1e67c4083b854542a04bd474eea799e9&amp;elqaid=866&amp;elqat=2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn boton-verde">
                      Casos de estudio
                    </button>
                  </a>{" "}
                  <a
                    className="m-1"
                    href="https://lenovopress.com/lp1213-thinksystem-se350-video-walkthrough?elqTrackId=9fce4e0d2aca47f08c865137636095a2&amp;elqaid=866&amp;elqat=2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn boton-verde">
                      Video (unboxing)
                    </button>
                  </a>{" "}
                  <a
                    className="m-1"
                    href="https://lenovopress.com/lp1212-3d-tour-thinksystem-se350?elqTrackId=b8d581c42c2c460585e45494a432fd5b&amp;elqaid=866&amp;elqat=2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn boton-verde">Tour 3d</button>
                  </a>{" "}
                  <a
                    className="m-1"
                    href="https://lenovopress.com/datasheet/ds0088-thinksystem-se350?elqTrackId=3360fa1678db46a68d979a38384736c9&amp;elqaid=866&amp;elqat=2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn boton-verde">PDF en español</button>{" "}
                  </a>{" "}
                  <a
                    className="m-1"
                    href="https://lenovopress.com/lp1384-lenovo-thinkagile-hx1021-certified-node?elqTrackId=cc573ec4294447a2812a231b43ede846&amp;elqaid=866&amp;elqat=2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn boton-verde">
                      Soluciones de HCI con Nutanix
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seccion-sponsor-iot">
        <div className="container shadow bg-sponsor my-5">
          <div className="row text-center py-4">
            <div className="col-md-12">
              <h3 className="text-blue fw-bold">Aliados de Negocio</h3>
            </div>
          </div>
          <div className="row wrapper pb-5">
            <div className="col-md-12 text-center">
              <Image
                src={sponsor_1}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_2}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_3}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_4}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_5}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_6}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_7}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_8}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_9}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_10}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
              <Image
                src={sponsor_11}
                width="150"
                height="150"
                objectFit="contain"
                alt="sponsor"
              />
            </div>
          </div>
        </div>
      </section>
      <BannerContact
        text="Expande tus oportunidades
      de IoT con Ingram Micro:"
        href_Button="mailto:IoT.mx@ingrammicro.com"
        url="mailto:IoT.mx@ingrammicro.com"
        url_Text="IoT.mx@ingrammicro.com"
      />
    </>
  );
};

export default Iot;
