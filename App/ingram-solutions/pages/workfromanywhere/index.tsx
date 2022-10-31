import React from "react";
import { Hero } from "../../components/Hero";
import Image from "next/image";
import logoworkanywhere from "../../public/images/wfa/logo-wfa.png";
import titulo_1 from "../../public/images/wfa/titulo-1.png";
import titulo_2 from "../../public/images/wfa/titulo-2.png";
import titulo_3 from "../../public/images/Ultimas/wfa/titulo-3.png";
import titulo_4 from "../../public/images/Ultimas/wfa/titulo-4.png";
import titulo_5 from "../../public/images/Ultimas/wfa/titulo-5.png";
import titulo_6 from "../../public/images/wfa/titulo-6.png";
import titulo_7 from "../../public/images/wfa/titulo-7.png";
import titulo_8 from "../../public/images/wfa/titulo-8.png";
import titulo_9 from "../../public/images/wfa/titulo-9.png";
import titulo_10 from "../../public/images/wfa/titulo-10.png";
import titulo_11 from "../../public/images/wfa/titulo-11.png";
import titulo_12 from "../../public/images/wfa/titulo-12.png";
import titulo_13 from "../../public/images/Ultimas/wfa/titulo-13.png";
import titulo_14 from "../../public/images/Ultimas/wfa/titulo-14.png";
import titulo_15 from "../../public/images/Ultimas/wfa/titulo-15.png";
import titulo_16 from "../../public/images/Ultimas/wfa/titulo-16.png";
import titulo_17 from "../../public/images/Ultimas/wfa/titulo-17.png";

import solution1 from "../../public/images/Ultimas/wfa/solucion-1.png";
import solution2 from "../../public/images/Ultimas/wfa/solucion-2.png";
import solution3 from "../../public/images/Ultimas/wfa/solucion-3.png";
import solution4 from "../../public/images/Ultimas/wfa/solucion-4.png";
import solution5 from "../../public/images/Ultimas/wfa/solucion-5.png";
import solution6 from "../../public/images/Ultimas/wfa/solucion-6.png";
import solution7 from "../../public/images/Ultimas/wfa/solucion-7.png";
import solution8 from "../../public/images/Ultimas/wfa/solucion-8.png";

import burbuja1 from "../../public/images/wfa/burbuja-1.png";
import burbuja2 from "../../public/images/wfa/burbuja-2.png";
import burbuja3 from "../../public/images/wfa/burbuja-3.png";
import burbuja4 from "../../public/images/wfa/burbuja-4.png";
import burbuja5 from "../../public/images/wfa/burbuja-5.png";

import modal2 from "../../public/images/wfa/modal/modal-2.jpg";
import modal8 from "../../public/images/wfa/modal/modal-8.jpg";
import modal10 from "../../public/images/wfa/modal/modal-10.jpg";
import modal12 from "../../public/images/wfa/modal/modal-12.jpg";
import modal13 from "../../public/images/wfa/modal/modal-13.jpg";

import sponsor_1 from "../../public/images/wfa/sponsor-1.png";
import sponsor_2 from "../../public/images/wfa/sponsor-2.png";
import sponsor_3 from "../../public/images/wfa/sponsor-3.png";
import sponsor_4 from "../../public/images/wfa/sponsor-4.png";
import sponsor_5 from "../../public/images/wfa/sponsor-5.png";
import sponsor_6 from "../../public/images/wfa/sponsor-6.png";
import sponsor_7 from "../../public/images/wfa/sponsor-7.png";
import sponsor_8 from "../../public/images/wfa/sponsor-8.png";
import sponsor_9 from "../../public/images/wfa/sponsor-9.png";
import sponsor_10 from "../../public/images/wfa/sponsor-10.png";
import sponsor_11 from "../../public/images/wfa/sponsor-11.png";
import sponsor_12 from "../../public/images/wfa/sponsor-12.png";

import imagen17 from "../../public/images/Ultimas/wfa/imagen-17.jpg";

import banner_top from "../../public/images/wfa/banner-top.jpg";
import styles from "./workfromanywhere.module.css";
import { BannerContact } from "../../components/BannerContact";

const Waf = () => {
  return (
    <>
      <Hero logo={logoworkanywhere} backgroundUrl={banner_top}>
        <div>
          <h2 className="display-4 mt-4">
            <span className="fw-bold text-blue">Work From Anywhere</span>
          </h2>
        </div>
      </Hero>
      <SectionBannerContact />
      <section className="d-flex flex-column  align-items-center">
        <h3 className="text-blue fw-bold">
          Entre las soluciones que ofrecemos se encuentran
        </h3>
        <div className="container my-3 text-center ">
          <SolutionsRows />
        </div>
      </section>
      <PrincipalesBeneficiosBurbujas />

      <section className="d-flex flex-column  align-items-center">
        <h3 className="text-blue fw-bold mt-5">Una Solución a tu medida</h3>
        <div className="container my-5 d-grid gap-5 ">
          {/* titles */}

          <Title1 />
          <Title2 />
          <Title3 />
          <Title4 />
          <Title5 />
          <Title6 />
          <Title7 />
          <Title8 />
          <Title9 />
          <Title10 />
          <Title11 />
          <Title12 />
          <Title13 />
          <Title14 />
          <Title15 />
          <Title16 />
          <Title17 />
        </div>
      </section>

      <SectionSponsor />

      <BannerContact
        text="Expande tus oportunidades de
      Work From Anywhere con Ingram Micro:
      "
        href_Button="mailto:wfa.mx@ingrammicro.com"
        url="mailto:wfa.mx@ingrammicro.com"
        url_Text="wfa.mx@ingrammicro.com"
      />

      <section className="pt-5">
        <article className="container">
          <div className="fs-5">
            -Las imágenes son de carácter ilustrativo y pueden diferir del
            producto y/o servicio descrito.
            <br />
            -Los paquetes mostrados pueden cambiar de precio sin previo aviso{" "}
            <br />
            -Precios de implementación sujetos a cobertura geográfica
            <br />
            -Precios mostrados antes de IVA
            <br />
          </div>
        </article>
      </section>
    </>
  );
};

export default Waf;

const SectionBannerContact = () => {
  return (
    <section id="section_banner_contact">
      <article className="container my-5">
        <div
          className={`${styles.wfa_banner_sec} py-4 position-relative justify-content-center p-5`}
        >
          <div className="row">
            <div
              style={{ zIndex: "99" }}
              className="training col-12 offset-lg-5 col-lg-7 d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center p-2"
            >
              <p
                className={`fs-5 fw-bold text-bold text-lg-white`}
              >
                El futuro laboral, tras la pandemia de Covid-19, contempla un
                mayor número de personas trabajando desde casa y en esquemas
                híbridos, generando flexibilidad en los espacios de trabajo,
                mejoras en la productividad de los empleados y reducción de
                costos para las empresas. Además de ser fácil contratar a los
                mejores talentos porque las contrataciones ya no están limitadas
                a la geografía. En Ingram Micro ofrecemos junto con nuestros
                socios soluciones fáciles de instalar, flexibles y escalables
                para desarrollar diferentes estrategias de trabajo a distancia
                de acuerdo con las necesidades de cada negocio.
              </p>
              {/* <div className="text-center mb-4 ">
                <ButtonOrange
                  text={"Contáctanos"}
                  href={
                    "https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Acolaboracion.mx%40ingrammicro.com"
                  }
                />
              </div> */}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

const SolutionsRows = () => {
  return (
    <>
      <div className="row text-center mb-4">
        <div className="col-md-3 mb-4">
          <Image
            src={solution1}
            className="img-fluid"
            object-fit="contain"
            alt="equipo de computo"
          />
        </div>
        <div className="col-md-3 mb-4">
          <Image
            src={solution2}
            className="img-fluid"
            object-fit="contain"
            alt="firma electronica"
          />
        </div>
        <div className="col-md-3 mb-4">
          <Image
            src={solution3}
            className="img-fluid"
            object-fit="contain"
            alt="almacenamiento"
          />
        </div>
        <div className="col-md-3 mb-4">
          <Image
            src={solution4}
            className="img-fluid"
            object-fit="contain"
            alt="colaboracion"
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <Image
            src={solution5}
            object-fit="contain"
            className="img-fluid"
            alt="seguridad"
          />
        </div>
        <div className="col-md-3 mb-4">
          <Image
            src={solution6}
            object-fit="contain"
            className="img-fluid"
            alt="identity"
          />
        </div>
        <div className="col-md-3 mb-4">
          <Image
            src={solution7}
            object-fit="contain"
            className="img-fluid"
            alt="protect"
          />
        </div>
        <div className="col-md-3 mb-4">
          <Image
            src={solution8}
            className="img-fluid"
            alt="gestion de dispositivos moviles basados en la nube"
          />
        </div>
      </div>
    </>
  );
};

const PrincipalesBeneficiosBurbujas = () => {
  return (
    <article>
      <div className="">
        <div className="row text-center mb-5 py-1">
          <h3 className="text-blue fw-bold">
            Principales beneficios del trabajo remoto:
            <br />
          </h3>
        </div>
      </div>
      <div className={`${styles.bubbles_Work} bg-modal-preventa`}>
        <div className="row  wrapper justify-content-around text-center">
          <div className={`col-lg-2 ${styles.bubble_work_Card}`}>
            <Image
              src={burbuja1}
              width="150"
              height="150"
              className="mb-1 img-fluid"
              alt="Comunicaciones más eficientes"
            />
            <p className="fs-5 mt-2 fw-bold ">Comunicaciones más eficientes</p>
          </div>
          <div className={`col-lg-2 ${styles.bubble_work_Card}`}>
            <Image
              src={burbuja2}
              width="150"
              height="150"
              className="mb-1 img-fluid"
              alt="Aumento en la productividad"
            />

            <p className="fs-5 mt-2 fw-bold ">Aumento en la productividad</p>
          </div>
          <div className={`col-lg-2 ${styles.bubble_work_Card}`}>
            <Image
              src={burbuja3}
              width="150"
              height="150"
              className="mb-1 img-fluid"
              alt="Ahorros en eventos internos"
            />
            <p className="fs-5 mt-2 fw-bold ">Ahorros en eventos internos</p>
          </div>
          <div className={`col-lg-2 ${styles.bubble_work_Card}`}>
            <Image
              src={burbuja4}
              width="150"
              height="150"
              className="mb-1 img-fluid"
              alt="Mejora en la salud y bienestar de los empleados"
            />
            <p className="fs-5 mt-2 fw-bold ">
              Mejora en la salud y bienestar de los empleados
            </p>
          </div>
          <div className={`col-lg-2 ${styles.bubble_work_Card}`}>
            <Image
              src={burbuja5}
              width="150"
              height="150"
              className="mb-1 img-fluid"
              alt=" Mayor opción para la contratación de talento."
            />

            <p className="fs-5 mt-2 fw-bold ">
              Mayor opción para la contratación de talento.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mb-4 mt-5">
        <a className="text-decoration-none " href="mailto:wfa.mx@ingrammicro.com">
          <button className="btn button-orange fw-bold fs-4">Contáctanos</button>
        </a>
      </div>
    </article>
  );
};

const SectionSponsor = () => {
  return (
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
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_2}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_3}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_4}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_5}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_6}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_7}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_8}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_9}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_10}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_11}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_12}
              className="p-3"
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

//

const Title1 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_1}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <div className="table-responsive">
              <table className="table table-borderless table-striped">
                <tbody>
                  <tr>
                    <th scope="row">SKU A490074</th>
                    <td className="text-start fw-normal">VPN 20RV002CLM</td>
                    <td className="text-start fw-normal">
                      Thinkbook 14-IML CI7 10510U 16GB 512GB SSD M.2 1WY W10P
                      Ideal para pequeñas y medianas empresas, que te permite
                      trabajar desde cualquier lugar – incluye Kasperky Endpoint
                      Security por un año.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU A490075</th>
                    <td className="text-start fw-normal">VPN 20VJS02400</td>
                    <td className="text-start fw-normal">
                      Thinkpad L13 13” HD CORE I5_113 5G7 8GB 256GB M.2 2280
                      W10P 1YW Alto rendimiento a un precio accesible gracias a
                      su procesador Intel Core de 11va generación, incluye
                      Kasperky Endpoint Security por un año.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU A490076</th>
                    <td className="text-start fw-normal">VPN 20VJS02C00</td>
                    <td className="text-start fw-normal">
                      Thinkpad L13 13” HD CORE I7_116 5G7 8GB 256GB M.2 2280
                      W10P 1YW El equipo ideal para trabajar desde cualquier
                      lugar, incluye Kasperky Endpoint Security por un año.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Title2 = () => {
  return (
    <>
      <div className="col-12 ">
        <div className="card border-light">
          <Image
            src={titulo_2}
            objectFit="contain"
            className="img-fluid"
            alt="sponsor"
          />
          <div className="card-body fondo-gradient shadow">
            <div className="px-5 py-4">
              <p className="fs-5 fw-normal">
                <b>a) Solución: Adobe Sign</b>
                <br />
                Es un servicio para firmar electrónicamente, basado en la nube,
                de nivel empresarial que permite sustituir los procesos de firma
                en papel por flujos de trabajo de firma electrónica
                completamente automatizados. <br />
                Con ellos puedes enviar, firmar y gestionar los procesos de
                firma fácilmente, mediante un explorador o un dispositivo móvil
                y realizar un seguimiento. <br />
                Además, puedes utilizar las API y las integraciones
                preconfiguradas para incluir flujos de trabajo de firma
                electrónica en tus aplicaciones y sistemas de registro
                empresariales
              </p>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_firma"
                  className={`button-orange fw-bold btn bg-orange fs-5`}
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_firma"
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
                  src={titulo_2}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </p>

              <Image
                src={modal2}
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

const Title3 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_3}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-5 fw-normal">
              <b>Solución Dropbox Business</b>
              <br />
              Ofrece potentes herramientas de almacenamiento, uso compartido y
              colaboración. El plan Standard de Dropbox Business le permite a tu
              equipo organizarse, mantenerse en sintonía y centrarse en el
              trabajo más importante con 5 TB de espacio y herramientas de
              colaboración y administración del equipo fáciles de usar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Title4 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_4}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-5 fw-normal">
              <b>LastPass</b> <br />
              Es un gestor de contraseñas seguro que almacena todos sus nombres
              de usuario y contraseñas en un lugar seguro al que denominamos
              bóveda. ... Cuando tenga que iniciar sesión en un sitio web,
              LastPass introducirá su nombre de usuario y contraseña
              automáticamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Title5 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_5}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4 fs-5">
            <div className="row">
              <div className="col-md-6 fw-normal">
                <b> a) Mobility Management </b>
                <br />
                Cisco DUO (Secure Access) Meraki Systems Manager
              </div>
              <div className="col-md-6 fw-normal">
                <b>b) Vulnerability management and analytics</b>
                <br />
                Cisco Umbrella
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Title6 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_6}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-5 fw-normal">
              <b>a) Umbrella</b> prevención de phishing, malware &amp; ataques
              de ransomware. <br />
              <b>b) Secure Endpoints</b> AMP Secure end point. <br />
              <b>c) Any Conecte</b> VPN. <br />
              <b>d) Secure e-mail</b> Protección integral para el correo
              electrónico en las instalaciones y basado en la nube. <br />
              <b>e) Secure Firewall</b> Cisco Firepower Series, MX Meraki.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//
const Title7 = () => {
  return (
    <>
      <div className="card border-light">
        <div className="col-12 ">
          <Image
            src={titulo_7}
            objectFit="contain"
            className="img-fluid"
            alt="sponsor"
          />
          <div className="card-body fondo-gradient shadow">
            <div className="px-5 py-4">
              <p className="fs-5 fw-normal">
                Es una solución de video colaboración que permite que todos sean
                vistos, escuchados y participen plenamente desde cualquier
                lugar. Asegura y amplía tus salas de reuniones sin esfuerzo con
                los servicios gestionados de Teams Rooms, disponibles en Teams
                Rooms Premium.
              </p>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_colab"
                  className={`button-orange fw-bold btn bg-orange fs-5`}
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_colab"
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
                  src={titulo_7}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </p>

              <Image
                src={modal8}
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
//
const Title8 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_8}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className={`row ${styles.bg_verde_suave} mb-3`}>
            <div className="px-5 py-3 ">
              <div className="table-responsive ">
                <table className="table table-borderless align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">SKU</th>
                      <th scope="col">NP</th>
                      <th className="text-center" scope="col">
                        Descripción
                      </th>
                      <th className="text-center" scope="col">
                        Precio WEB
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">91400XO</th>
                      <td className="text-start fw-normal">939-001796</td>
                      <td className="fw-normal" rowSpan={2}>
                        Logitech TAP para Zoom Room con Lenovo Tiny M920Q
                        <br /> INTELCI7-9700T 8GB 128GB SSD W10 IOT 3YR PREMIER
                      </td>
                      <td rowSpan={2} className={`${styles.total_balance} fs-5 fw-bold`}>
                        $41,698.00{" "}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">942029H</th>
                      <td className="text-start fw-normal">10T10006LS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={`row ${styles.bg_verde_suave} mb-3`}>
            <div className="px-5 py-3 ">
              <div className="table-responsive ">
                <table className="table table-borderless align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">SKU</th>
                      <th scope="col">NP</th>
                      <th className="text-center" scope="col">
                        Descripción
                      </th>
                      <th className="text-center" scope="col">
                        Precio WEB
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">942028E</th>
                      <td className="text-start fw-normal">10V50002LS</td>
                      <td className="fw-normal" rowSpan={2}>
                        Solución para sala Lenovo ThinkSmart Hub 500
                        <br /> I5-4GB-128G, Windows 10 LOT enterprise 3WY y
                        cámara 4K brio Logitech
                      </td>
                      <td rowSpan={2} className={`${styles.total_balance} fs-5 fw-bold`}>
                        $35,423.60
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">91400LT</th>
                      <td className="text-start fw-normal">960-001105</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={`row ${styles.bg_verde_suave} mb-3`}>
            <div className="px-5 py-3 ">
              <div className="table-responsive ">
                <table className="table table-borderless align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">SKU</th>
                      <th scope="col">NP</th>
                      <th className="text-center" scope="col">
                        Descripción
                      </th>
                      <th className="text-center" scope="col">
                        Precio WEB
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">942028E</th>
                      <td className="text-start fw-normal">10V50002LS</td>
                      <td rowSpan={2} className="text-break fw-normal">
                        Solución para sala de 10 personas con Lenovo ThinkSmart
                        Hub 500 I5-4GB-128G, Windows 10 LOT enterprise 3WY y
                        Logitech Rally Solution 1 cámara 4K, 1 bocina, 1
                        micrófono y 2 hubs de conexión.
                      </td>
                      <td rowSpan={2} className={`${styles.total_balance} fs-5 fw-bold`}>
                        $68,763.60
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">91400V7</th>
                      <td className="text-start fw-normal">960-001217</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={`row ${styles.bg_verde_suave}`}>
            <div className="px-5 py-3 ">
              <div className="table-responsive ">
                <table className="table table-borderless align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">SKU</th>
                      <th scope="col">NP</th>
                      <th className="text-center" scope="col">
                        Descripción
                      </th>
                      <th className="text-center" scope="col">
                        Precio WEB
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">942028E</th>
                      <td className="text-start fw-normal">10V50002LS</td>
                      <td rowSpan={2} className="text-break fw-normal">
                        Solución para sala de 16 personas con Lenovo ThinkSmart
                        Hub 500 I5-4GB-128G, Windows 10 LOT enterprise 3WY y
                        Logitech Rally Solution 1 cámara 4K, 2 bocinas, 2
                        micrófono y 2 hubs de conexión.
                      </td>
                      <td rowSpan={2} className={`${styles.total_balance} fs-5 fw-bold`}>
                        $79,755.60
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Title9 = () => {
  return (
    <>
      <div className="col-12 ">
        <div className="card border-light">
          <Image
            src={titulo_9}
            objectFit="contain"
            className="img-fluid"
            alt="sponsor"
          />
          <div className={`card-body ${styles.fondo_gradient} shadow`}>
            <div className="px-5 py-4">
              <p className="fs-5 text-center fw-normal">
                <b>Cisco Secure Workforce Basic</b> <br />
                <br />
                <b>Solución:</b> Umbrella Essential -&gt; 10 Licencias + DUO
                Access hasta 10 Licencias
              </p>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_identify"
                  className={`button-blue fw-bold btn bg-orange fs-5`}
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_identify"
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
                  src={titulo_9}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </p>

              <Image
                src={modal10}
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

//

const Title10 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_10}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-5 text-center">
              <b>
                Solución Meraki Systems Manager + Cisco Umbrella + Cisco DUO
              </b>{" "}
              <br />
              <br />
            </p>
            <p className="fs-5 fw-normal">
              Protege hasta 50 usuarios <br />
              Aprovisiona, monitorea y asegura de forma centralizada todos los
              dispositivos móviles dentro de tu organización, mientras tu red se
              mantiene segura ante los constantes cambios de los dispositivos
              móviles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
//
const Title11 = () => {
  return (
    <>
      <div className="col-12 ">
        <div className="card border-light">
          <Image
            src={titulo_11}
            objectFit="contain"
            className="img-fluid"
            alt="sponsor"
          />
          <div className="card-body fondo-gradient shadow">
            <div className="px-5 py-4">
              <p className="fs-5 text-center fw-normal">
                <b>Cisco Secure remote Workforce Office 365 </b> <br />
                <br />
                <b>Solución:</b> Umbrella Advantage -Cloud Mail Defense (Office
                365) + DUO Beyond +AMP4E
                <br />
                Protege 50 usuarios
              </p>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_protect1"
                  className={`button-lightblue fw-bold btn bg-orange fs-5`}
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_protect1"
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
                  src={titulo_11}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </p>

              <Image
                src={modal12}
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
const Title12 = () => {
  return (
    <>
      <div className="col-12 ">
        <div className="card border-light">
          <Image
            src={titulo_12}
            objectFit="contain"
            className="img-fluid"
            alt="sponsor"
          />
          <div className="card-body fondo-gradient shadow">
            <div className="px-5 py-4">
              <p className="fs-5 text-center fw-normal">
                <b>Cisco Secure Workforce Perimetral</b> <br />
                <br />
                <b>Solución:</b> FPR 1120/MX + Umbrella Advantage + Cloud Mail
                Defense + DUO
                <br />
                Access + Any Connect / Protege hasta 50 usuarios
              </p>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_protect2"
                  className={`button-orange fw-bold btn bg-orange fs-5`}
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_protect2"
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
                  src={titulo_12}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </p>

              <Image
                src={modal13}
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
//
const Title13 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_13}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <p className="fs-5 text-center">
            <b>Soluciones para salas de video colaboración</b> <br />
            <br />
          </p>
          <div className={`row ${styles.bg_verde_suave} mb-3`}>
            <div className="px-5 py-3 ">
              <div className="table-responsive ">
                <table className="table table-borderless align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">SKU</th>
                      <th scope="col">NP</th>
                      <th className="text-center" scope="col">
                        Descripción
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">A5200QJ</th>
                      <td className="text-start fw-normal">MYFM2LZ/A</td>
                      <td className="fw-normal" rowSpan={2}>
                        iPad Air Wi‑Fi de 10,9 pulgadas 4a Generación y 64 GB -
                        Gris espacial
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//
const Title14 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_14}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-5 fw-normal">
              Jamf es la única solución escalable de administración empresarial
              de Apple que conecta, administra y protege a distancia a los
              usuarios, servicios y dispositivos Apple. Conecta usuarios,
              administra dispositivos y Protege Endpoints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Title15 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_15}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-5 text-center">
              <b>
                Conéctese a su manera con un sistema flexible de telefonía en la
                nube
              </b>{" "}
              <br />
              <br />
            </p>
            <p className="fs-5 fw-normal">
              Comunicaciones Unificadas con un sistema telefónico PBX que
              combina equipos físicos PBX tradicionales y el servicio
              correspondiente en una solución alojada. Esta solución ofrece las
              avanzadas prestaciones de un sistema PBX de empresa junto con más
              de 100 funciones de teléfono, video, mensajes de texto y chat para
              que sus colaboradores puedan interactuar desde cualquier lugar y
              dispositivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//
const Title16 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_16}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-5 text-center">
              <b>Cisco Secure remote Workforce Office 365 </b> <br />
              <br />
            </p>
            <p className="fs-5 fw-normal">
              Tome las riendas de su infraestructura de TI con las potentes
              prestaciones de Central, que ponen en sus manos un mejor control,
              mayor productividad y un ahorro de tiempo y recursos, gracias a la
              automatización de su entorno. Central es la herramienta de gestión
              y supervisión remota más fiable del sector. Una práctica
              plataforma con acceso remoto seguro, rápido y de calidad, gestión
              de parches críticos, informes con propuestas de acción, recursos
              de automatización de TI avanzados y mucho más.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Title17 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_17}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <p className="fs-5 fw-normal">
              Tome las riendas de su infraestructura de TI con las potentes
              prestaciones de Central, que ponen en sus manos un mejor control,
              mayor productividad y un ahorro de tiempo y recursos, gracias a la
              automatización de su entorno. <br />
              <br />
              Central es la herramienta de gestión y supervisión remota más
              fiable del sector. Una práctica plataforma con acceso remoto
              seguro, rápido y de calidad, gestión de parches críticos, informes
              con propuestas de acción, recursos de automatización de TI
              avanzados y mucho más.
            </p>
            <div className="text-center">
              {/* <img
                src="https://images.LatAm.ingrammicro.com/EloquaImages/clients/IngramMicroLATAM/%7B3da7574e-e0d2-46dc-9514-d744c2b53967%7D_imagen-17.jpg"
                className="img-fluid"
                alt=""
              /> */}
              <Image
                src={imagen17}
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
