import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import { ButtonOrange } from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  banner_top,
  banner_sec_2,
  logo_serprof,
  card_1,
  card_2,
  card_3,
  card_4,
  card_5,
  card_6,
  grafico,
  modal_1,
  modal_2,
  modal_3,
  modal_4,
  modal_5,
  modal_6,
  modal_7,
  modal_8,
  modal_9,
  modal_11,
  modal_10,
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
  sponsor_16,
  sponsor_17,
  sponsor_18,
  sponsor_19,
  sponsor_20,
  sponsor_21,
  sponsor_22,
  sponsor_23,
  sponsor_24,
  sponsor_25,
  sponsor_26,
  sponsor_27,
  sponsor_28,
  sponsor_29,
  sponsor_30,
  sponsor_31,
  sponsor_32,
  sponsor_33,
  sponsor_34,
  sponsor_35,
  sponsor_36,
  sponsor_37,
  sponsor_38,
  sponsor_39,
  sponsor_40,
  sponsor_41,
  sponsor_42,
  sponsor_43,
  sponsor_44,
  sponsor_45,
  sponsor_46,
  sponsor_47,
  sponsor_48,
  sponsor_49,
  sponsor_51,
  sponsor_52,
  sponsor_53,
  sponsor_54,
  sponsor_55,
} from "../../services/Image-serviciosProfecionales/Image";

const ServiciosProfesionales = () => {
  const herochildren = () => {
    return (
      <>
        <h5 className="mt-4">
          Tiene como meta la integración de una oferta tecnológica de alto valor
          hacia los clientes, como uno de nuestros principales diferenciadores
          en la venta de las soluciones de TI.
          <br />
          <br />
          Su portafolio está diseñado con base en las necesidades y expectativas
          del cliente, donde apoyamos a nuestros socios con un acercamiento de
          360 grados para la integración, puesta a punto de sus proyectos, y
          crecimiento de oportunidades de negocio.
        </h5>
        <div className="mt-3">
          <ButtonOrange
            href="mailto:IoT.mx@ingrammicro.com"
            text="Contáctanos"
          />
        </div>
      </>
    );
  };
  return (
    <>
      <Hero
        children={herochildren()}
        logo={logo_serprof}
        backgroundUrl={banner_top}
      />
      <section id="known_solutions">
        <div className="container my-5">
          <div className="banner_knownSolutions position-relative p-4">
            <div style={{ zIndex: "99" }} className="row position-relative">
              <div className="col-lg-7 col-0"></div>
              <div className="col-lg-5 col-12">
                <h3 className="text-blue fw-bold mb-3">
                  Conoce algunas de nuestras soluciones:
                </h3>
                <p className="fs-5 text-lg-white fw-bold">
                  Los servicios profesionales son parte esencial de un proyecto
                  de tecnología y dependen de recursos humanos -consultores e
                  ingenieros- altamente capacitados, certificados y con
                  experiencia.
                  <br />
                  <br />
                  Ingram Micro es el respaldo de nuestros socios de negocio, al
                  contar con la más extensa gama de Servicios Profesionales,
                  como un brazo extendido del canal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="consultative_process">
        <div className="container my-5">
          <div className="consultative_process position-relative p-4">
            <h3 className="text-blue text-center fw-bold mb-3">
              Nuestro proceso consultivo
            </h3>
            <p className="fs-5 text-center fw-bold">
              Nuestro equipo de consultores lleva una secuencia de pasos
              necesarios para convertir una oportunidad, desde la prospección
              del cliente, en un negocio. Contamos con pleno conocimiento de las
              etapas del proceso para guiar a nuestros clientes hasta cumplir
              nuestro objetivo.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                src={grafico}
                width="550"
                height="550"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="capacity_realize">
        <div className="container">
          <h3 className="azul fw-bold">
            Contamos con las capacidades para realizar:
          </h3>
          <div className="row my-5">
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_1"
              className="col-lg-4 col-sm-6 col-12 mt-5 d-flex align-items-center justify-content-center"
            >
              <Image
                style={{ cursor: "pointer" }}
                src={card_1}
                width="280"
                height="290"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_2"
              className="col-lg-4 col-sm-6 col-12 mt-5 d-flex align-items-center justify-content-center"
            >
              <Image
                style={{ cursor: "pointer" }}
                src={card_2}
                width="280"
                height="290"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_3"
              className="col-lg-4 col-sm-6 col-12 mt-5 d-flex align-items-center justify-content-center"
            >
              <Image
                style={{ cursor: "pointer" }}
                src={card_3}
                width="280"
                height="290"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_4"
              className="col-lg-4 col-sm-6 col-12 mt-5 d-flex align-items-center justify-content-center"
            >
              <Image
                style={{ cursor: "pointer" }}
                src={card_4}
                width="280"
                height="290"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_5"
              className="col-lg-4 col-sm-6 col-12 mt-5 d-flex align-items-center justify-content-center"
            >
              <Image
                style={{ cursor: "pointer" }}
                src={card_5}
                width="280"
                height="290"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_6"
              className="col-lg-4 col-sm-6 col-12 mt-5 d-flex align-items-center justify-content-center"
            >
              <Image
                style={{ cursor: "pointer" }}
                src={card_6}
                width="280"
                height="290"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
          </div>
        </div>
        {/* modal */}
        <div
          className="modal fade"
          id="modal_1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  ">
            <div className="modal-content">
              <div className="modal-header bg-violet">
                <h5 className="text-white">Análisis de requerimiento</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Nos aseguramos de conocer los elementos necesarios para definir
                un proyecto.
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  ">
            <div className="modal-content">
              <div className="modal-header bg-celeste">
                <h5 className="text-white">Ingenieros certificados</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Aseguramos la calidad en capacidad, nuestros ecosistema de
                Ingenieros es una prueba de competencia.
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_3"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  ">
            <div className="modal-content">
              <div className="modal-header bg-orange">
                <h5 className="text-white">Implementación</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Determinar las actividades a ejecutarse{" "}
                <span className="text-orange">/</span> Desarrollar el detalle de
                cada una de las actividades{" "}
                <span className="text-orange">/</span> Elaborar las fichas de
                actividades <span className="text-orange">/</span> Elaborar el
                cronograma de implementación{" "}
                <span className="text-orange">/</span> Definir la organización
                para la implementación.
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_4"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  ">
            <div className="modal-content">
              <div className="modal-header bg-green">
                <h5 className="text-white">Puesta a punto</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Se compone de brindar a nuestros clientes asesoría, consultoría,
                capacitación personalizada.
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_5"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  ">
            <div className="modal-content">
              <div className="modal-header bg-lightBlue">
                <h5 className="text-white">Mesa de ayuda</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Monitoreo de estado de equipos{" "}
                <span className="text-lightBlue">/</span> Gestión de Cambios{" "}
                <span className="text-lightBlue">/</span> Gestión de Incidencias{" "}
                <span className="text-lightBlue">/</span> Gestión y ejecución de
                configuraciones <span className="text-lightBlue">/</span>{" "}
                Soporte técnico Remoto y en Sitio{" "}
                <span className="text-lightBlue">/</span> Reemplazo de equipo o
                partes <span className="text-lightBlue">/</span> Reporte Mensual
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_6"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  ">
            <div className="modal-content">
              <div className="modal-header bg-violet">
                <h5 className="text-white">Soporte técnico</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Consiste en un Servicio específico de asesoramiento,
                mantenimiento y soporte para los elementos del cliente asociados
                al equipo de infraestructura de procesamiento de datos.
                <br /> Nivel 1 - Incidencias básicas;
                <br /> Nivel 2 - Una especialización más técnica;
                <br /> Nivel 3 - Problemas técnicos de resolución más avanzada.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ProfesionalServices__bubbles">
        <div className="mt-5">
          <div className="ProfesionalServices_bubble_tittle">
            <h3 className="text-blue text-center fw-bold">
              Servicios profesionales
            </h3>
          </div>
          <div className="ProfesionalServices_bubbles row justify-content-center align-items-center py-lg-0 py-4 px-2">
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_7"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_1}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#24b115" }}
                  className="fs-5 text-center fw-bold"
                >
                  Datacenter
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_8"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_2}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#ff8303" }}
                  className="fs-5 text-center fw-bold"
                >
                  Networking
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_9"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_3}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#06baec" }}
                  className="fs-5 text-center fw-bold"
                >
                  Cloud
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_10"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_4}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#2276ba" }}
                  className="fs-5 text-center fw-bold"
                >
                  Plataformas
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_11"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_5}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#7359a2" }}
                  className="fs-5 text-center fw-bold"
                >
                  Ciberseguridad
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_12"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_6}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#0e2e44" }}
                  className="fs-5 text-center fw-bold"
                >
                  Seguridad física
                </h2>
              </div>
            </div>
          </div>
          <div className="ProfesionalServices_bubbles ProfesionalServices_bubble_2 row justify-content-center align-items-center py-lg-0 py-4 px-2">
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_13"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_7}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#7359a2" }}
                  className="fs-5 text-center fw-bold"
                >
                  Colaboración
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_14"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_8}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#2276ba" }}
                  className="fs-5 text-center fw-bold"
                >
                  Digital Signage
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_15"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_9}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#06baec" }}
                  className="fs-5 text-center fw-bold"
                >
                  DC POS
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_16"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_10}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#ff8303" }}
                  className="fs-5 text-center fw-bold"
                >
                  Servicios administrativos
                </h2>
              </div>
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal_17"
              style={{ cursor: "pointer" }}
              className="ProfesionalServices_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <Image
                src={modal_11}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="ProfesionalServices_bubble_text">
                <h2
                  style={{ color: "#24b115" }}
                  className="fs-5 text-center fw-bold"
                >
                  Work from anywhere
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        <div
          className="modal fade"
          id="modal_7"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
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
              <div className="modal-body text-center">
                <span className="text-green fw-bold">Datacenter</span>
                <br />
                <b>•</b>Sistemas de respaldo &nbsp; <b>•</b>Sistemas Microsoft
                &nbsp; <b>•</b>Virtualización &nbsp; <b>•</b>Sistemas
                hiperconvergentes &nbsp; <b>•</b>DRP's &nbsp; <b>•</b>
                Escritorios virtuales &nbsp; <b>•</b>Sistemas de energía UPS
                &nbsp; <b>•</b>Aire acondicionado &nbsp; <b>•</b>Mesa de ayuda
                &nbsp; <b>•</b>Creación de máquinas virtuales &nbsp; <b>•</b>
                Migración de datos
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_8"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
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
              <div className="modal-body text-center">
                <span className="text-orange fw-bold">Networking</span>
                <br />
                <b>•</b>Configuración de equipos de red &nbsp; <b>•</b>
                Creaciones VPN's y gateway &nbsp; <b>•</b>Monitoreo de red
                &nbsp; <b>•</b>Site Survey WiFi &nbsp; <b>•</b>Servicios
                administrados &nbsp; <b>•</b>Mesa de ayuda &nbsp; <b>•</b>
                Implementación de infraestructura de red &nbsp; <b>•</b>
                Implementación firewall y UTM's &nbsp; <b>•</b>Configuración MDM
                Meraki &nbsp; <b>•</b>Configuración remota de equipos de red
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_9"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
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
              <div className="modal-body text-center">
                <span className="text-lightBlue fw-bold">Cloud</span>
                <br />
                <b>•</b>Migración de máquinas virtuales &nbsp; <b>•</b>Site
                recovery &nbsp; <b>•</b>Back Up recovery &nbsp; <b>•</b>Cloud
                e-mail security &nbsp; <b>•</b>MDM &nbsp; <b>•</b>Cisco DUO
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal_10"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
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
              <div className="modal-body text-center">
                <span className="text-blue fw-bold">Plataformas</span>
                <br />
                <b>•</b>Gestión de suscripciones y facturaciones recovery &nbsp;{" "}
                <b>•</b>Gestión de socios y canales &nbsp; <b>•</b>Gestión de
                información de proveedores y productos
              </div>
            </div>
          </div>
        </div>
      </section>
      <BannerContact />
    </>
  );
};

export default ServiciosProfesionales;
