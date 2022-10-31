import React from "react";
import { ButtonOrange } from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import styles from "./servicios.module.css";
import Image from "next/image";
import logoservicios from "../../public/images/servicios-administrados/logo-servicios-administrados.png";
import banner_top from "../../public/images/servicios-administrados/banner-top_v2.jpg";

import burbuja_1 from "../../public/images/servicios-administrados/burbuja-1.png";
import burbuja_2 from "../../public/images/servicios-administrados/burbuja-2.png";
import burbuja_3 from "../../public/images/servicios-administrados/burbuja-3.png";
import burbuja_4 from "../../public/images/servicios-administrados/burbuja-4.png";
import burbuja_5 from "../../public/images/servicios-administrados/burbuja-5.png";
import burbuja_6 from "../../public/images/servicios-administrados/burbuja-6_v2.png";

import titulo_1 from "../../public/images/servicios-administrados/titulo-1.png";
import titulo_2 from "../../public/images/servicios-administrados/titulo-2_v2.png";
import titulo_3 from "../../public/images/servicios-administrados/titulo-3.png";
import titulo_4 from "../../public/images/servicios-administrados/titulo-4.png";

import modal_impresion from "../../public/images/Ultimas/servicios-administrados/impresion.jpg";
import cibereye from "../../public/images/servicios-administrados/ciber_eye.jpg";
import cibereye2 from "../../public/images/servicios-administrados/cibereye2.jpg";
import cibereye3 from "../../public/images/servicios-administrados/cibereye3.jpg";
import iso from "../../public/images/servicios-administrados/iso.jpg";

import bubble_1 from "../../public/images/servicios-administrados/servicebubble1.png";
import bubble_2 from "../../public/images/servicios-administrados/servicebubble2.png";
import bubble_3 from "../../public/images/servicios-administrados/servicebubble3.png";
import bubble_4 from "../../public/images/servicios-administrados/servicebubble4.png";
import bubble_5 from "../../public/images/servicios-administrados/servicebubble5.png";

import beneficiosingram from "../../public/images/servicios-administrados/beneficiosingram.png";

import beneficiosbubble1 from "../../public/images/servicios-administrados/beneficiosbubble1.png";
import beneficiosbubble2 from "../../public/images/servicios-administrados/beneficiosbubble2.png";
import beneficiosbubble3 from "../../public/images/servicios-administrados/beneficiosbubble3.png";
import beneficiosbubble4 from "../../public/images/servicios-administrados/beneficiosbubble4.png";
import beneficiosbubble5 from "../../public/images/servicios-administrados/beneficiosbubble5.png";

import paquetes1 from "../../public/images/servicios-administrados/paquetesimg1.png";
import paquetes2 from "../../public/images/servicios-administrados/paquetesimg2.png";
import paquetes3 from "../../public/images/servicios-administrados/paquetesimg3.png";

import modalpaquete1 from "../../public/images/servicios-administrados/modalpaquete1.jpg";
import modalpaquete2 from "../../public/images/servicios-administrados/modalpaquete2.jpg";
import modalpaquete3 from "../../public/images/servicios-administrados/modalpaquete3.jpg";

import { BannerContact } from "../../components/BannerContact";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <Hero logo={logoservicios} backgroundUrl={banner_top}>
        <div>
          <h2 className="display-4 mt-4">
            <span className="fw-bold text-blue">Servicios Administrados</span>
          </h2>
        </div>
      </Hero>

      <Seccion2 />

      <section className="d-flex flex-column  align-items-center my-1 py-5">
        <h3 className="text-blue fw-bold">Crecimiento del mercado</h3>
        <div className="container my-3 text-center ">
          <h4>
            El tamaño del mercado global de servicios administrados superó los
            152 mil millones de dólares en 2020 y se espera que alcance los 274
            mil millones en 2026.
          </h4>
          <ButtonOrange
            text={"Contáctanos"}
            href={
              "mailto:serviciosprofesionales.mx@ingrammicro.com"
            }
          />
        </div>
      </section>
      <div className=" d-flex flex-column align-items-center my-1 py-5">
        <h3 className="text-blue fw-bold">Portafolio</h3>
        <p className="fs-5">En Ingram Micro contamos con:</p>
      </div>
      <Portafolio />

      <section className="d-flex flex-column  align-items-center my-5 py-5">
        <h3 className="text-blue fw-bold">Una Solución a tu medida</h3>
        <div className="container my-5 d-grid gap-5 ">
          <Title1 />
          <Title2 />
        </div>
      </section>

      <div className=" d-flex flex-column align-items-center my-1 py-5">
        <h3 className="text-blue fw-bold pb-5">Nuestros servicios</h3>
      </div>
      <NuestrosServicios />
      <BeneficiosIngram />
      <SectionCatalogo />
      <BannerFooter />
    </div>
  );
};

export default index;

const Seccion2 = () => {
  return (
    <section id="networking">
      <div className="container my-5">
        <div
          className={`${styles.servicios_banner_sec} py-4 position-relative justify-content-center p-5`}
        >
          <div className="row">
            <div
              style={{ zIndex: "99" }}
              className="training col-12 col-lg-7 offset-lg-5 d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center"
            >
              <p
                className={`${styles.text_bannersec} text-bold fs-5 fw-bold text-lg-white`}
              >
                Conocidos como Managed Services, los servicios administrados son
                soluciones personalizadas, que se encargan de gestionar sistemas
                y funciones de TI de tus clientes, permitiendo de esta forma
                reducir los gastos operativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portafolio = () => {
  return (
    <>
      <div
        className={`${styles.bubbles_SerAdm} row justify-content-center align-items-center py-lg-0 py-4 px-2 mt-4`}
      >
        <div
          className={` bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-3`}
        >
          <Image
            src={burbuja_1}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <h2 className="fs-5 text-center fw-bold">
              Servicios Administrados de Cómputo
            </h2>
          </div>
        </div>

        <div
          className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-3"
          data-bs-toggle="modal"
          data-bs-target="#modal_impresion"
        >
          <Image
            src={burbuja_2}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <h2 className="fs-5 text-center fw-bold">
              Servicios Administrados de Impresión{" "}
            </h2>
          </div>
        </div>
        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-3">
          <Image
            src={burbuja_3}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <h2 className="fs-5 text-center fw-bold">
              Servicios Administrados de Red (NaaS){" "}
            </h2>
          </div>
        </div>
        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-3">
          <Image
            src={burbuja_4}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <h2 className="fs-5 text-center fw-bold">
              Servicios Administrados de Ciberseguridad
            </h2>
          </div>
        </div>
      </div>
      <div className="espaciado mt-5 text-center mb-5">
        <h4 className="pb-5">
          Servicios que pueden ser aprovechados en otras áreas como
        </h4>
      </div>

      <div
        className={`${styles.bubbles_SerAdm_2} row justify-content-center align-items-center py-lg-0 py-4 px-2 mt-4`}
        mt-3
      >
        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-3">
          <Image
            src={burbuja_5}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <h2 className="fs-5 text-center fw-bold">Internet de las Cosas</h2>
          </div>
        </div>
        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-3">
          <Image
            src={burbuja_6}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <h2 className="fs-5 text-center fw-bold">
              Oportunidades en la nube
            </h2>
          </div>
        </div>
      </div>

      <div
        id="modal_impresion"
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
              <Image
                src={modal_impresion}
                className="img-fluid"
                alt="asd"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Title1 = () => {
  return (
    <div className="col-12 " id="serviciosadministrador">
      <div className="card border-light">
        <Image
          src={titulo_1}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-4 fw-normal">
              Se le denomina Network as a Service (NaaS) al despliegue,
              administración y consumo de los recursos de una red bajo demanda
              que forma parte de los servicios de networking alojados en la
              nube. <br />
              Factura sólo lo que consumes, evitando gastos innecesarios y
              optimiza tus recursos al simplificar tu arquitectura mediante la
              virtualización y el empleo de soluciones de software, en lugar de
              la adquisición tradicional de hardware.
              <br />
              <br />
            </p>
            <p className="fs-4 fw-normal">
              <b> Beneficios:</b>
              <br />
              •Pago de una suscripción mensual por el servicio entregado
              <br />
              •Disminución de costos operativos
              <br />
              •Disminución de la inversión
              <br />
              •Actualizaciones y mantenimiento
              <br />
              •No se requiere personal para administrarlo dentro de la empresa
              <br />
              •Administración desde un punto centralizado
              <br />
              •Reportes mensuales de la administración de los equipos, usuarios
              conectados, ancho de banda utilizado por aplicación y políticas de
              administración
              <br />
              •Granularidad por usuario o por aplicación que accede a la red
              <br />
              •Administración y visualización de toda tu red desde una sola
              interfaz.
              <br />
              •Mensajes personalizados de bienvenida al conectarse
            </p>
          </div>

          <div className="text-center mb-4 ">
            <a
              href="https://images.LatAm.ingrammicro.com/Web/IngramMicroLATAM/{cde6f5b4-f20f-4c9a-80c7-140c403cbc88}_Ingram_Handbook_2.pdf?elqTrackId=7920dbbdfa6b43c0bd1c6aacad2ca607&amp;elqaid=909&amp;elqat=2"
              target="_blank"
              rel="noreferrer"
            >
              <button className={`btn ${styles.boton_celeste_sa} fw-bold fs-4`}>
                Descargar Ingram Handbook
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const Title2 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_2}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="row px-5 py-4">
            <div className="col-sm-4">
              <Image
                src={cibereye}
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-sm-8">
              <p className="fs-4 fw-normal">
                <b>CyberEye</b>
                <br />
                Es un soporte que Ingram Micro provee para ayudar con las
                soluciones de ciberseguridad en las empresas, sin importar su
                tamaño, infraestructura o presupuesto. <br />
                <br />
                Por un monto fijo mensual puedes recibir hardware, software y
                servicios por un tiempo determinado. <br />
                <br />
                Este servicio es brindado por ingenieros altamente capacitados y
                especializados tanto en las marcas con las que trabajamos como
                en temas de ciberseguridad.
              </p>
            </div>
          </div>

          <div className="row ms-5 py-4 align-items-center">
            <div className="col-sm-7">
              <p className="fs-4 fw-normal">
                <b> ¿Cómo funciona? </b>
                <br />
                Por medio de un Centro de Operaciones de Seguridad (SOC) que
                cuenta con analistas de seguridad especializados enfocados en la
                detección y respuesta ante incidentes de Ciberseguridad. Por
                medio del SOC nos encargamos de manera remota de la
                ciberseguridad de su negocio para que puedan mejorar su
                rendimiento.
              </p>
            </div>
            <div className="col-sm-5 p-0 text-end">
              <Image
                src={cibereye2}
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
          </div>

          <div className="row pe-5 py-4 align-items-center">
            <div className="col-sm-5 p-0 text-start">
              <Image
                src={cibereye3}
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-sm-7">
              <p className="fs-4 fw-normal">
                <b>¿Qué es un SOC?</b> <br />
                Un Centro de Operaciones de Seguridad (SOC) es una plataforma
                que permite la supervisión y administración de la seguridad de
                los sistemas. Un SOC tiene como objetivo supervisar y analizar
                la actividad en redes, servidores, terminales, bases de datos,
                aplicaciones, sitios web y otros sistemas en busca de señales y
                comportamientos anormales que puedan indicar un incidente de
                ciberseguridad.
              </p>
            </div>
          </div>

          <div className={`${styles.banner_doble}`}>
            <div className="row align-items-center p-0">
              <div className="col-sm-2 m-4 align-self-center">
                <Image
                  src={iso}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </div>
              <div className="col-sm-6">
                <p className="fs-4 fw-normal">
                  <b>Nuestro SOC</b> está Certificado con <b>ISO 27001</b> para
                  poder brindarte un servicio especializado de ciberseguridad y
                  la mejor calidad con <b>soporte 24/7</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NuestrosServicios = () => {
  return (
    <>
      <div
        className={`${styles.bubbles_SerAdm} row justify-content-center align-items-center py-lg-0 py-4 px-2 mt-4`}
      >
        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-2 ">
          <Image
            src={bubble_1}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <p className="fs-5 text-center">
              Gestionar riesgos y amenazas de nuestros clientes. Con la
              certificación ISO27001
            </p>
          </div>
        </div>

        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-2">
          <Image
            src={bubble_2}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <p className="fs-5 text-center ">
              Brindar soporte 24x7x365 a través de nuestra plataforma
            </p>
          </div>
        </div>
        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-2">
          <Image
            src={bubble_3}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <p className="fs-5 text-center ">
              Analizar y deshabilitar las amenazas o brechas de ciberseguridad
              de manera proactiva.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.bubbles_SerAdm_2} row justify-content-center align-items-center py-lg-0 py-4 px-2`}
      >
        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-2">
          <Image
            src={bubble_4}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <p className="fs-5 text-center ">
              Instalar y administrar la ciberseguridad Perimetral y de End Point
            </p>
          </div>
        </div>
        <div className="bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center mt-2">
          <Image
            src={bubble_5}
            width="150"
            height="150"
            objectFit="contain"
            alt="solucones preventa"
          />
          <div className="bubble_text">
            <p className="fs-5 text-center">
              Servicio Cyber Checkup: analizar vulnerabilidades y realizar
              pruebas de penetración
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const BeneficiosIngram = () => {
  return (
    <section className="beneficios-ingram shadow pt-1 ">
      <article className="fondo-gradient pb-5  container-fluid d-flex flex-column align-items-center">
        <div className="text-center py-4">
          <Image
            src={beneficiosingram}
            width={450}
            height={150}
            objectFit="contain"
            alt="solucones preventa"
          />
        </div>
        <div className="row wrapper py-4 mb-5 justify-content-center container">
          <div className="col-md-4 text-center ">
            <Image
              src={beneficiosbubble1}
              width={280}
              height={300}
              objectFit="contain"
              alt="solucones preventa"
            />
          </div>
          <div className="col-md-4 text-center ">
            <Image
              src={beneficiosbubble2}
              width={280}
              height={300}
              objectFit="contain"
              alt="solucones preventa"
            />
          </div>
          <div className="col-md-4 text-center ">
            <Image
              src={beneficiosbubble3}
              width={280}
              height={300}
              objectFit="contain"
              alt="solucones preventa"
            />
          </div>
          <div className="col-md-4 text-center ">
            <Image
              src={beneficiosbubble4}
              width={280}
              height={300}
              objectFit="contain"
              alt="solucones preventa"
            />
          </div>
          <div className="col-md-4 text-center ">
            <Image
              src={beneficiosbubble5}
              width={280}
              height={300}
              objectFit="contain"
              alt="solucones preventa"
            />
          </div>
        </div>
      </article>

      <article className="fondo-gradient pt-1 container-fluid">
        <div className="container">
          <div className="row text-center ">
            <div className="col-md-12">
              <h3 className="text-blue fw-bold">Nuestros paquetes</h3>
            </div>
          </div>
        </div>
        <div className="row wrapper py-4 mb-5 justify-content-center">
          <div
            className="col-md-6 text-center "
            data-bs-toggle="modal"
            data-bs-target="#modal-paquete-1"
          >
            <Image
              src={paquetes1}
              width={560}
              height={220}
              objectFit="contain"
              alt="solucones preventa"
            />
          </div>
          <div
            className="col-md-6 text-center "
            data-bs-toggle="modal"
            data-bs-target="#modal-paquete-2"
          >
            <Image
              src={paquetes2}
              width={560}
              height={220}
              objectFit="contain"
              alt="solucones preventa"
            />
          </div>
          <div
            className="col-md-6 text-center"
            data-bs-toggle="modal"
            data-bs-target="#modal-paquete-3"
          >
            <Image
              src={paquetes3}
              width={560}
              height={220}
              objectFit="contain"
              alt="solucones preventa"
            />
          </div>
          <div className="pt-5 px-5">
            <p className="fs-4">
              Contamos con paquetes <b>prediseñados</b>, los cuales están
              configurados para darle la mejor solución a las necesidades de
              nuestros clientes.
              <br />
              <br />
              Estos paquetes son completamente personalizables a tus
              necesidades.
            </p>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="modal-paquete-1"
          tabIndex={-1}
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
                  src={modalpaquete1}
                  width={1000}
                  height={990}
                  layout="responsive"
                  objectFit="contain"
                  alt="solucones preventa"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-paquete-2"
          tabIndex={-1}
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
                  src={modalpaquete2}
                  width={1000}
                  height={990}
                  layout="responsive"
                  objectFit="contain"
                  alt="solucones preventa"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-paquete-3"
          tabIndex={-1}
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
                  src={modalpaquete3}
                  width={1000}
                  height={990}
                  // layout="responsive"
                  objectFit="contain"
                  alt="solucones preventa"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

const SectionCatalogo = () => {
  return (
    <section className="pb-5">
      <div className="container">
        <div className={`${styles.banner_azul}`}>
          <div className="row align-items-center gap-3 p-5">
            <div className="col-sm-6 text-center">
              <p className="fs-4 text-white">
                Para saber más de nuestros paquetes y servicios, puedes
                consultar nuestro catálogo:
              </p>
            </div>
            <div className="col-sm-3 offset-sm-1">
              <button
                className={`${styles.button_catalog} btn btn-outline-light fw-bold`}
              >
                <a
                  href="#serviciosadministrador"
                  className="text-decoration-none text-white"
                >
                  Descargar Catálogo de Servicios Administrados
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BannerFooter = () => {
  return (
    <section className="shadow banner-ciber position-relative p-0 d-flex align-items-center">
      <article className="container">
        <div className="row text-center justify-content-center align-items-start">
          <div className="col-md-8 offset-md-2">
            <div
              className="row align-items-center mt-4 fw-bold celular position-relative text-md-white"
              style={{ zIndex: "99" }}
            >
              <div className="col-md-6 mb-4 ">
                <h5 className="fw-bold">
                  Contáctanos para acordar <br /> el mejor plan para tu negocio:{" "}
                  <br />
                  <br />
                  <a
                    href="mailto:serviciosprofesionales.mx@ingrammicro.com"
                    className="fs-6 azul text-break"
                  >
                    serviciosprofesionales.mx@ingrammicro.com
                  </a>
                </h5>
              </div>
              <div className="col-md-6 borde-caja">
                <h5 className="fw-bold">
                  Da click para saber más <br /> sobre nuestras soluciones de:
                </h5>
                <Link href="/ciberseguridad">
                  <a target={"_blank"} rel="noreferrer">
                    <button
                      className={`${styles.button_contact} button-green btn  px-4 fs-3 py-2 mt-3 border border-success text-md-white mb-md-3`}
                    >
                      CIBERSEGURIDAD
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
