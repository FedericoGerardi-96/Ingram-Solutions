import Image from "next/image"
import { BannerContact } from "../../components/BannerContact"
import { ButtonOrange } from "../../components/buttons/ButtonOrange"
import { Hero } from "../../components/Hero"
import {
  item_4_1,
  item_4_2,
  item_4_3,
  banner_top,
  banner_sec,
  logo_datacenter,
  producto_1,
  producto_2,
  producto_3,
  producto_6,
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
  sponsor_12,
  sponsor_13,
  sponsor_14,
  sponsor_15,
  titulo_1,
  titulo_2,
  titulo_3,
  titulo_4,
  titulo_5,
  titulo_6,
  titulo_7,
  titulo_8,
  modal_software,
  modal_hardware,
  modal_geografia,
  modal_7_logo,
  modal_7_productos,
} from "../../services/Image-DataCenter/Image"

import Modal_1 from "../../public/images/datacenter/modal_1.jpg"
import Modal_2 from "../../public/images/datacenter/modal_2.jpg"
import Modal_3 from "../../public/images/datacenter/modal_3.jpg"
import Modal_5 from "../../public/images/datacenter/modal_5.jpg"
import Modal_6 from "../../public/images/datacenter/modal_6.jpg"
import Modal_8 from "../../public/images/datacenter/modal_8.jpg"

const DataCenter = () => {
  const Sponsors = [
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
    sponsor_12,
    sponsor_13,
    sponsor_14,
    sponsor_15,
  ]
  const herochildren = () => {
    return (
      <>
        <h2 className="mt-5 pb-5">
          Infraestructura de TI en vanguardia y robusta con{" "}
          <span className="fw-bold text-blue">DATA CENTER</span>
        </h2>
      </>
    )
  }
  return (
    <>
      <Hero
        children={herochildren()}
        logo={logo_datacenter}
        backgroundUrl={banner_top}
      />
      <section className="dataCenter-banner-2">
        <div className="container position-relative dataCenter_banner_2 py-5 my-5">
          <div className="row">
            <div
              style={{ zIndex: "99" }}
              className="col-md-7 text-center text-md-white dataCenter offset-md-5"
            >
              <p className="fs-5 fw-bold">
                Un data center o “centro de procesamiento de datos” es el lugar
                donde se resguardan, procesan y explotan la gran mayoría de los
                datos. Sus instalaciones necesitan contar con suficiente
                energía, infraestructura de TI robusta y de vanguardia, correcta
                ventilación y sistemas de seguridad de última generación, así
                sea un pequeño espacio o un gran edificio.
              </p>
              <ButtonOrange
                text="Contáctanos"
                href="mailto:datacenter.mx@ingrammicro.com"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="solution_packages_Cards">
        <div className="container">
          <div className="row text-center  py-5">
            <div className="col-md-12">
              <h3 className="text-blue fw-bold">Soluciones y Paquetes</h3>
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-md-4 mb-4">
              <div
                className="card card-video border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal_1"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_1}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
                <div className="card-body fondo-gradient">
                  <p className="fs-4 fw-bold text-center">
                    ¡My primer Simplivity con VDI incluido!
                  </p>
                  <p className="card-text fw-normal">
                    <b>Producto: HPE Simplivity</b> <br />
                    Ser un negocio pequeño o mediano no es una limitante para
                    contar con infraestructura de TI de vanguardia, con Ingram,
                    HPE Simplivity y VMware ofrecemos la mejor solución de
                    desempeño, logrando ahorros de capacidad de 10:1, hasta 40
                    máquinas virtuales como solución llave en mano sin necesidad
                    de expertos para su instalación y puesta en marcha.
                  </p>
                  <div className="text-center">
                    <Image
                      src={producto_1}
                      objectFit="contain"
                      className="img-fluid"
                      alt="icono"
                    />
                  </div>

                  <div className="text-center mt-5 ">
                    <button className="btn button-lightblue">Conoce más</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="card card-video border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal_2"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_2}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />{" "}
                <div className="card-body fondo-gradient">
                  <p className="fs-4 fw-bold text-center">
                    Servidores de Nueva Normalidad
                  </p>
                  <p className="card-text fw-normal">
                    <b>Producto: Dell EMC PowerEdge R240 y T140</b> <br />
                    Para tener disponibilidad y conectividad a tus aplicaciones
                    a través de conexión remota, tu negocio necesita tener la
                    infraestructura inicial. Para ello, están los servidores
                    R240 y T140, diseñados para ambientes densos, a precios
                    competitivos y listos para las necesidades de negocios
                    exigentes y crecientes.
                    <br />
                    <br />
                    <b>Beneficio:</b>
                    <br />
                    •Simples de instalar, administrar e implementar
                    <br />
                    <br />
                  </p>
                  <p className="text-center fs-5 fw-bold">
                    ¡Conoce nuestros equipos!
                  </p>
                  <div className="text-center">
                    <Image
                      src={producto_2}
                      objectFit="contain"
                      className="img-fluid"
                      alt="icono"
                    />{" "}
                  </div>
                  <div className="text-center mt-5 ">
                    <button className="btn button-green">Conoce más</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="card card-video border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal_3"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_3}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />{" "}
                <div className="card-body fondo-gradient">
                  <p className="fs-4 fw-bold text-center">
                    Almacenamiento compartido para usuarios
                  </p>
                  <p className="card-text fw-normal">
                    <b>
                      Producto: NX3240, familia Dell Storage NX, incluye
                      software Windows Storage Server 2016.
                    </b>
                    <br />
                    Los dispositivos de almacenamiento Dell Storage NX son
                    fáciles de usar y administrar a través de una interfaz
                    familiar de administración central, para configuraciones
                    independientes o de clústeres y son compatibles con Hyper-V
                    y SQL Server.
                    <br />
                    <br />
                    <b>Beneficios:</b>
                    <br />
                    •Disponibilidad continua y clústeres de conmutación por
                    error con NFS e iSCSI.
                    <br />
                    •Detección automática y uso de múltiples conexiones de red
                    entre el cliente SMB y el servidor.
                    <br />
                    •Administra de forma eficaz los datos en archivos y en
                    bloques
                    <br />
                    <br />
                  </p>
                  <p className="text-center fs-5 fw-bold">
                    ¡Conoce nuestros equipos!
                  </p>
                  <div className="text-center">
                    <Image
                      src={producto_3}
                      objectFit="contain"
                      className="img-fluid"
                      alt="icono"
                    />{" "}
                  </div>
                  <div className="text-center mt-5 ">
                    <button className="btn button-orange">Conoce más</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="card card-video border-light">
                <Image
                  src={titulo_4}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />{" "}
                <div className="card-body fondo-gradient">
                  <p className="fs-5 text-center">
                    Según los analistas, siete de cada 10 empresas no tienen un
                    plan de recuperación ante desastres. La solución de
                    respaldos y recuperación ante desastres de Ingram Micro
                    incluye varios pasos para garantizar que tu empresa pueda
                    recuperarse en caso de pérdida de datos o desastre.
                  </p>
                  <p className="fs-4 mt-5 fw-bold text-center">
                    Es una solución llave en mano que incluye:
                  </p>
                  <div className="row wrapper justify-content-between">
                    <div className="col-md-3 ">
                      <div className="text-center">
                        <Image
                          src={item_4_1}
                          objectFit="contain"
                          className="img-fluid"
                          alt="icono"
                        />{" "}
                      </div>
                      <p className="fw-normal">
                        •Comprender el entorno informático de la organización y
                        las implicaciones de la solución.
                        <br />
                        •Análisis de impacto y selección de herramienta
                        adecuada.
                        <br />
                        •Dimensionamiento.
                        <br />
                        •Definición de los alcances.
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <Image
                          src={item_4_2}
                          objectFit="contain"
                          className="img-fluid"
                          alt="icono"
                        />{" "}
                      </div>
                      <p className="fw-normal">
                        •Hardware y software necesario para el correcto
                        funcionamiento de la solución.
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <Image
                          src={item_4_3}
                          objectFit="contain"
                          className="img-fluid"
                          alt="icono"
                        />{" "}
                      </div>
                      <p className="fw-normal">
                        •Ayudar en el desarrollo de políticas y procedimientos.{" "}
                        <br />
                        •Implementación de la solución.
                        <br />
                        •Pruebas, revisiones y reporte de resultados.
                        <br />
                        •Transferencia de conocimiento.
                      </p>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center">
                    <div className="col-md-4">
                      <button
                        className="btn button-lightblue fs-3"
                        data-bs-toggle="modal"
                        data-bs-target="#modal_4_hardware"
                        style={{ cursor: "pointer" }}
                      >
                        Hardware
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn button-green fs-3"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-4-geografia"
                        style={{ cursor: "pointer" }}
                      >
                        Geografía
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn button-violet fs-3"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-4-software"
                        style={{ cursor: "pointer" }}
                      >
                        Software
                      </button>
                    </div>
                  </div>

                  <div className="text-blue mt-5 mb-4 text-center">
                    <h2>
                      Desde <span className="fs-1 fw-bold">$7,700</span> pesos
                      +IVA
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="card card-video border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal-5"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_5}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />{" "}
                <div className="card-body fondo-gradient">
                  <p className="fs-4 fw-bold text-center">
                    Escritorios virtuales
                  </p>
                  <p className="card-text fw-normal">
                    Para que las empresas no hagan inversiones en equipos de
                    cómputo personal, conoce la solución con infraestructura
                    VDI. La inversión se realiza a nivel de data center para
                    obtener un mejor performance en equipos de cómputo
                    convencionales.
                    <br />
                    <br />
                    <b>Beneficio:</b>
                    <br />
                    •Brinda a tu empresa dinamismo y flexibilidad.
                    <br />
                    •Escritorios, aplicaciones y datos disponibles, accesibles
                    desde cualquier lugar, hora y dispositivo.
                    <br />
                    •Ahorra tiempo y dinero, al mismo tiempo que reduce el
                    riesgo, liberando el valor para el negocio y lograr la
                    disponibilidad 7*24*365.
                    <br />
                    •Protege tus datos de cada escritorio remoto o máquina
                    física con el mejor software de respaldo ya sea en la nube u
                    on premise.
                  </p>

                  <div className="text-center mt-5 ">
                    <button className="btn button-lightblue">Conoce más</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="card card-video border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal-6"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_6}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />{" "}
                <div className="card-body fondo-gradient">
                  <p className="fs-4 fw-bold text-center">
                    Servidores de Nueva Normalidad
                  </p>
                  <p className="card-text fw-normal">
                    <b>Producto: SAN – Carbon Black –Veeam</b> <br />
                    Bundle para hiperconvergencia que proporciona almacenamiento
                    hasta para 25 máquinas virtuales y cuenta con software de
                    respaldo. Además de protegerlas con el mejor antivirus de
                    nueva generación.
                    <br />
                    <br />
                    <b>El bundle contiene licencias para:</b> <br />
                    vSphere y vSAN Standard
                    <br />
                    Carbon Black Advanced y Veeam Backup &amp; Replication
                    <br />
                    Soporte producción a 1 año. <br />
                    Basado en VMware ReadyNodes:
                    <br />
                    HY-2-DELLEMIC-R440 (3 CPU) Up to 7.2 TB / HY-4-HPE Synergy
                    Gen10 (3 CPU) Up to 7.2 TB
                  </p>

                  <div className="text-center mt-5 ">
                    <button className="btn button-green">Conoce más</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="card card-video border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal-7"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_7}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />{" "}
                <div className="card-body fondo-gradient">
                  <p className="fs-4 fw-bold text-center">
                    Appliance-Cómputo Almacenamiento
                  </p>
                  <p className="card-text fw-normal">
                    La video vigilancia ha evolucionado de ser una herramienta
                    de investigación a ser un activo estratégico de negocio, que
                    reduce el riesgo organizacional y mejora los retornos
                    financieros. La infraestructura de cómputo y almacenamiento
                    en la cual reside el video generado por las cámaras ha
                    tenido muy poca innovación. Sin embargo Pivot3 toma el
                    liderazgo al desarrollar soluciones innovadoras y
                    optimizadas, para videovigilancia en un modelo de
                    “appliance” con alta disponibilidad, simplicidad de
                    administración y escalable. Permitiendo consolidar todas sus
                    aplicaciones y necesidades de video vigilancia en una
                    plataforma única que ofrece altos niveles de desempeño
                  </p>

                  <div className="text-center">
                    <Image
                      src={producto_6}
                      objectFit="contain"
                      className="img-fluid"
                      alt="icono"
                    />{" "}
                  </div>
                  <div className="text-center mt-4 ">
                    <button className="btn button-orange">Conoce más</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div
                className="card card-video border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal-8"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_8}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />{" "}
                <div className="card-body fondo-gradient">
                  <p className="fs-5 text-center">
                    Los sistemas Cisco HyperFlex™ combinan computación,
                    almacenamiento y redes en una plataforma simplificada y
                    fácil de utilizar. Llevamos la economía de pago según se
                    crece de la nube a la infraestructura en las instalaciones,
                    para que tu puedas alcanzar nuevos niveles de agilidad,
                    eficiencia y adaptación.
                  </p>
                  <p className="fs-4 mt-5 fw-bold text-center">Solución:</p>
                  <div className="row wrapper justify-content-center">
                    <div className="col-md-4 ">
                      <p>
                        •Estructura de red integrada.
                        <br />
                        •Administración unificada.
                        <br />
                        •Hiperconvergencia completa.
                        <br />
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        •Implementación de Edge.
                        <br />
                        •Escalabilidad de recursos independiente.
                        <br />
                        •Optimización de datos continua.
                      </p>
                    </div>
                  </div>

                  <div className="azul mt-5 mb-4 text-center">
                    <h2>
                      Desde <span className="fs-1 fw-bold">$120,000</span> pesos
                      +IVA
                    </h2>
                  </div>
                  <div className="text-center mt-4 ">
                    <button className="btn button-blue">Conoce más</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modales */}
        <div
          className="modal fade"
          id="modal_1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
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
                <Image
                  src={Modal_1}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_2"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
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
                <Image
                  src={Modal_2}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_3"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
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
                <Image
                  src={Modal_3}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_4_hardware"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
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
                <Image
                  src={modal_hardware}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-4-geografia"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
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
                <Image
                  src={modal_geografia}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="modal-4-software"
          className="modal fade"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
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
                <Image
                  src={modal_software}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="modal-5"
          className="modal fade"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
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
                <Image
                  src={Modal_5}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="modal-6"
          className="modal fade"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
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
                <Image
                  src={Modal_6}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="modal-7"
          className="modal fade"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content ">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <Image
                  src={modal_7_logo}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />{" "}
                <h6>
                  Los productos/appliances de Pivot3 se pueden configurar en la
                  pagina de Lenovo:
                </h6>
                <div className="text-center mt-3 mb-4 ">
                  <a
                    href="https://dcsc.lenovo.com/?elqTrackId=5688dc4bf0fc4462ae4db848e3c1fc0c&amp;elqaid=903&amp;elqat=2#/categories/STG%40ON%20DEMAND%20Solutions%40Pivot3"
                    target="_blank"
                  >
                    <button className="btn button-orange">
                      Ir a la página
                    </button>
                  </a>
                </div>
                <Image
                  src={modal_7_productos}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="modal-8"
          className="modal fade"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
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
                <Image
                  src={Modal_8}
                  objectFit="contain"
                  className="img-fluid"
                  alt="icono"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seccion-sponsor-iot">
        <article className="container ">
          <div className="row text-center  py-2">
            <div className="col-md-12">
              <h3 className="text-blue fw-bold">Aliados de Negocio</h3>
            </div>
          </div>
          <div className="row  py-5">
            <div className="col-md-12 text-center">
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                {Sponsors.map((e, i) => (
                  <Image
                    key={i}
                    src={e.src}
                    width="160"
                    height="110"
                    objectFit="contain"
                    className="img-fluid p-3"
                    alt="sponsor"
                  />
                ))}
              </div>
            </div>{" "}
          </div>
        </article>
      </section>
      <BannerContact
        href_Button="mailto:serviciosfinancieros.mx@ingrammicro.com"
        url="mailto:serviciosfinancieros.mx@ingrammicro.com"
        url_Text="serviciosfinancieros.mx@ingrammicro.com"
      />
      <section id="product_info">
        <div className="container my-5">
          <ul>
            <li className="list-group-item fs-5">
              -Las imágenes son de carácter ilustrativo y pueden diferir del
              producto y/o servicio descrito.
            </li>
            <li className="list-group-item fs-5">
              -Los paquetes mostrados pueden cambiar de precio sin previo aviso
            </li>
            <li className="list-group-item fs-5">
              -Precios de implementación sujetos a cobertura geográfica
            </li>
            <li className="list-group-item fs-5">
              -Precios mostrados antes de IVA
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default DataCenter
