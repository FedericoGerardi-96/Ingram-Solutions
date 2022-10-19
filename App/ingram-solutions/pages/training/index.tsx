import Image from "next/image";
import React from "react";
import { BannerContact } from "../../components/BannerContact";
import { ButtonOrange } from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  banner_sec,
  banner_top,
  burbuja_1,
  burbuja_2,
  burbuja_3,
  logo_training,
  oferta_1,
  oferta_2,
  oferta_3,
  oferta_4,
  oferta_5,
  oferta_6,
  oferta_7,
  oferta_8,
  oferta_9,
  oferta_10,
  oferta_11,
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
  microsoft_1,
  cisco_2,
  aws_3,
  itil_4,
  pmi_5,
  scrum_6,
  vmware_7,
  veeam_8,
  veritas_9,
  infoblox_10,
  f5_11,
} from "../../services/Image-training/Image";

const index = () => {

  const herochildren = () => {
    return (
      <h1 className="display-3 fw-bold text-blue pb-5">
        Servicios de Entrenamiento
      </h1>
    );
  };
  return (
    <>
      <Hero
        children={herochildren()}
        logo={logo_training}
        backgroundUrl={banner_top}
      />
      <section id="training_ingramMicro_services_banner">
        <div className="container my-5">
          <div className="banner_Sec py-4 position-relative">
            <div className="row">
              <div className="col-0 col-md-7"></div>
              <div
                style={{ zIndex: "99" }}
                className="training col-12 col-md-5 d-flex flex-column align-items-md-start align-items-center justify-content-md-start justify-content-center"
              >
                <p className="fw-5 text-md-white fw-bold">
                  En Ingram Micro contamos con un amplio portal de servicios de
                  entrenamiento formal, denominado Training, con instructores
                  certificados y capacitados en marcas como IBM, VMware, HP
                  Enterprise, Microsoft, Cisco, entre otras.{" "}
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
      <section id="training_portafolio_Training_IngramMicro">
        <div className="container mb-5">
          <h3 className="text-blue text-center fw-bold">Portafolio</h3>
          <p className="fs-4 text-center">
            Ofrecemos a nuestros clientes el maximizar su rendimiento a través
            del aprendizaje, con diferentes modalidades de training.
          </p>
          <h3 className="text-blue text-center fw-bold mt-5">
            Opciones de Training en Ingram Micro
          </h3>
          <p className="fs-4 text-center">
            Están centradas en la necesidad y satisfacción de nuestros clientes,
            garantizando el correcto aprendizaje en training de TI.
          </p>
        </div>
      </section>
      <section id="training_bubbles">
        <div className="training_bubbles row justify-content-center align-items-center py-lg-0 py-5 px-2">
          <div className="training_bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={burbuja_1}
              width="150"
              height="150"
              objectFit="contain"
              alt="solucones preventa"
            />
            <div className="training_bubbles_text">
              <h2
                style={{ color: "#24b115" }}
                className="fs-5 text-center fw-bold"
              >
                Presencial
              </h2>
              <p className="mt-2">
                Es el esquema tradicional en donde a los clientes se les asigna
                una sala con un instructor por los días de duración del curso
                los cuales pueden ser de dos, tres o cinco sesiones. En esta
                opción Ingram Micro pone el equipo, el material y a la persona
                que estará a cargo.{" "}
              </p>
            </div>
          </div>
          <div className="training_bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={burbuja_2}
              width="150"
              height="150"
              objectFit="contain"
              alt="solucones preventa"
            />
            <div className="training_bubbles_text">
              <h2
                style={{ color: "#2276ba" }}
                className="fs-5 text-center fw-bold"
              >
                Virtual
              </h2>
              <p className="mt-2">
                Esta modalidad, aunque se toma en línea hay un instructor que
                está en tiempo real y ayuda aclarando dudas.
              </p>
            </div>
          </div>
          <div className="training_bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={burbuja_3}
              width="150"
              height="150"
              objectFit="contain"
              alt="solucones preventa"
            />
            <div className="training_bubbles_text">
              <h2
                style={{ color: "#06baec" }}
                className="fs-5 text-center fw-bold"
              >
                On line
              </h2>
              <p className="mt-2">
                El contenido en este entrenamiento es pregrabado, se puede
                descargar y tiene como ventaja que el curso se puede detener y
                reanudar posteriormente, sin perder detalle de lo que se está
                presentando.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="training_partners">
        <div className="container my-5">
          <h3 className="text-blue text-center fw-bold">
            Oferta de cursos
            <br />
            <span className="fw-normal text-center">
              Modalidad virtual en vivo
            </span>
          </h3>
          <div className="row">
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_1"
              >
                <Image
                  src={oferta_1}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_2"
              >
                <Image
                  src={oferta_2}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_3"
              >
                <Image
                  src={oferta_3}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_4"
              >
                <Image
                  src={oferta_4}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_5"
              >
                <Image
                  src={oferta_5}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_6"
              >
                <Image
                  src={oferta_6}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_7"
              >
                <Image
                  src={oferta_7}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_8"
              >
                <Image
                  src={oferta_8}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_9"
              >
                <Image
                  src={oferta_9}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_10"
              >
                <Image
                  src={oferta_10}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_11"
              >
                <Image
                  src={oferta_11}
                  width="250"
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        {/* modales */}
        <div
          className="modal fade"
          id="Modal_1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={microsoft_1}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_2"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={cisco_2}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_3"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={aws_3}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_4"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={itil_4}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_5"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={pmi_5}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_6"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={scrum_6}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_7"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={vmware_7}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_8"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={veeam_8}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_9"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={veritas_9}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_10"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={infoblox_10}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_11"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-body">
                <Image
                  src={f5_11}
                  className="img-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="training_portal_ingramMicro">
        <div className="row text-center py-4">
          <div className="col">
            <h4>
              Para mayor detalle de la información, visita el portal de Training
              Ingram Micro
              <br />
              <a
                href="https://www.ingrammicrotraining.com/pages/latin-america?elqTrackId=a0b23cdab44e47459b90c6fd89776bb7&amp;elqaid=911&amp;elqat=2"
                className="text-blue fw-bold"
                target="_blank"
              >
                https://www.ingrammicrotraining.com/pages/latin-america
              </a>{" "}
            </h4>
          </div>
        </div>
      </section>
      <section id="training_sponsors">
        <div className="container my-5">
          <h3 className="text-blue fw-bold fs-2 text-center">
            Aliados de Negocio
          </h3>
          <div className="row flex-wrap mt-5">
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_1}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_2}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_3}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_4}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_5}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_6}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_7}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_8}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_9}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_10}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_11}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
          </div>
        </div>
      </section>
      <BannerContact />
      <section id="product_info">
        <div className="container my-5">
          <ul>
            <li className="list-group-item fs-6">
              -Las imágenes son de carácter ilustrativo y pueden diferir del
              producto y/o servicio descrito.
            </li>
            <li className="list-group-item fs-6">
              -Los paquetes mostrados pueden cambiar de precio sin previo aviso
            </li>
            <li className="list-group-item fs-6">
              -Precios de implementación sujetos a cobertura geográfica
            </li>
            <li className="list-group-item fs-6">
              -Precios mostrados antes de IVA
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default index;
