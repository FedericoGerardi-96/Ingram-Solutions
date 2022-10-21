import React from "react";
import {
  ButtonOrange,
  ButtonOrangeBlank,
} from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import logonetwork from "../../public/images/networking/logo-networking.png";
import banner_top from "../../public/images/networking/banner-top.jpg";
import titulo_1 from "../../public/images/networking/titulo-1.png";
import titulo_2 from "../../public/images/networking/titulo-2.png";
import titulo_3 from "../../public/images/networking/titulo-3.png";
import titulo_4 from "../../public/images/networking/titulo-4.png";
import titulo_5 from "../../public/images/networking/titulo-5.png";
import titulo_6 from "../../public/images/networking/titulo-6.png";
import modal_3 from "../../public/images/networking/modal-3.jpg";
import modal_4 from "../../public/images/networking/modal-4.jpg";
import modal_5 from "../../public/images/networking/modal-5.jpg";
import modal_6 from "../../public/images/networking/modal-6.jpg";
import sponsor_1 from "../../public/images/networking/sponsor-1.png";
import sponsor_2 from "../../public/images/networking/sponsor-2.png";

import styles from "./networking.module.css";
import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";

const index = () => {
  return (
    <div>
      {/* <div className="d-flex flex-column  align-items-center"> */}
      <Hero logo={logonetwork} backgroundUrl={banner_top}>
        <h1 className="display-4 mt-4 pb-5 fw-bold text-blue">Networking</h1>
      </Hero>

      <section id="networking">
        <div className="container my-5">
          <div
            className={`${styles.networking_banner_sec} py-4 position-relative justify-content-center`}
          >
            <div className="row">
              <div className="col-0 col-lg-7"></div>
              <div
                style={{ zIndex: "99" }}
                className="training col-12 col-lg-5 d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center"
              >
                <p
                  className={`${styles.text_bannersec} text-bold text-lg-white`}
                >
                  Para responder a los nuevos retos de la conectividad,
                  especialmente ante el crecimiento del home office, tras la
                  pandemia de Covid-19, Ingram Micro ofrece a las empresas un
                  amplio portafolio de soluciones de Networking como redes
                  inalámbricas y cableadas, junto con un completo portafolio de
                  software para tener una visibilidad completa de la red,
                  simplificar sus redes, de sucursal o de acceso por cable o
                  inalámbrico, con la capacidad de ser gestionadas desde la
                  nube.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex flex-column  align-items-center">
        <h3 className="text-blue fw-bold">Paquetes</h3>

        <div className="container my-5">
          <div className="row d-grid gap-5">
            <TrabajoRemoto />
            <RegresoSeguro />
            <MyPyme />
            <WifiHogar />
            <RedNubeHogar />
            <WifiNegocios />
            <RedNubeNegocios />
            <WifiEnterprise />
            <RedNubeHogarBlue />
          </div>
        </div>
      </section>

      <section className={`${styles.section_sponsor}`}>
        <article className="container ">
          <div className="row text-center  py-3">
            <div className="col-md-12">
              <h3 className="azul fw-bold text-blue">Aliados de Negocio</h3>
            </div>
          </div>

          {/* <div className="d-flex flex-row wrapper py-2 col-md-12 text-center "> */}
          <div className=" row align-items-center justify-content-evenly text-center ">
            <div className="col-4">
              <Image
                src={sponsor_1}
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-4">
              <Image
                src={sponsor_2}
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
          </div>
          {/* </div> */}
        </article>
      </section>

      <BannerContact
        text="Expande tus oportunidades de
      Work From Anywhere con Ingram Micro:"
        href_Button="mailto:networking.mx@ingrammicro.com"
        url="mailto:networking.mx@ingrammicro.com"
        url_Text="networking.mx@ingrammicro.com"
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
    </div>
  );
};

const TrabajoRemoto = () => {
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
            <div className="row">
              <div className="col-12">
                <p className="fs-5">
                  <b>Equipo Bundle 2 RV340- Routing</b>
                  <br />
                  Es una solución ideal para pequeñas empresas en crecimiento y
                  en proceso de digitalización. Permite la conexión remota de 25
                  a 40 usuarios para conectarse a tu sitio central de forma
                  segura y cuenta con protección para navegación en Internet por
                  usuario. Es un sistema integral que incluye tecnología para
                  construirla paso a paso con equipos de red de las familias SG
                  en Switching, RV en Routing, WAP en Wireless, Administración
                  con FindIT, Umbrella con seguridad y el servicio de soporte
                  que te brindará la mejor atención por un o tres años.
                </p>
              </div>
              <div className="col-md-6 col-12 d-flex flex-wrap justify-content-center">
                <div className="card card-celeste">
                  <div className="card-body">
                    <p className="fs-5">
                      <b>Para aumentar la seguridad puedes integrar:</b>
                      <br />
                      <br />
                      •Application Visibility and Control (AVC)
                      <br />
                      •Client Identification and Control
                      <br />
                      •Dynamic Web Filtering
                      <br />
                      •Antivirus
                      <br />
                      •Intrusion Prevention System (IPS)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex flex-wrap justify-content-center">
                <div className="card card-celeste">
                  <div className="card-body">
                    <p className="fs-5">
                      <b>
                        Con licencia de Seguridad para RV340, convierte tu Home
                        Office en tu oficina móvil, preguntando por los Add-on
                        disponibles:
                      </b>
                      <br />
                      <br />
                      •Add-on
                      <br />
                      •DUO (múltiple factor de autenticación)
                      <br />
                      •AMP4E <br />
                      •CBS o C1000
                      <br />
                      •System Manager
                      <br />
                      •OfficeExtend (1815 + WLC 9800 CL)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RegresoSeguro = () => {
  return (
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
              <div className="col-12">
                <p className="fs-5">
                  Cisco DNA Spaces es la plataforma de localización que nos
                  permite evolucionar las redes Wi-fi en poderosos sensores con
                  base en el comportamiento de las personas y dispositivos
                  dentro de sus edificios. Soporta toda la infraestructura
                  inalámbrica Empresarial Cisco, incluyendo Meraki, Aironet ®, y
                  Cisco Catalyst.
                  <br />
                  Crece la solución a tu medida preguntando por los Add-on
                  disponibles
                  <br />
                  Puedes obtener notificaciones en tiempo real con ayuda de
                  Webex, sobre el comportamiento dentro de tu sitio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyPyme = () => {
  return (
    <>
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
                    Cisco DNA Spaces es la plataforma de localización que nos
                    permite evolucionar las redes Wi-fi en poderosos sensores
                    con base en el comportamiento de las personas y dispositivos
                    dentro de sus edificios. Soporta toda la infraestructura
                    inalámbrica Empresarial Cisco, incluyendo Meraki, Aironet ®,
                    y Cisco Catalyst.
                  </p>
                </div>
              </div>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_mipyme"
                  className={`${styles.boton_naranja} btn bg-orange fs-5`}
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_mipyme"
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
                  src={titulo_3}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </p>

              <Image
                src={modal_3}
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

const WifiHogar = () => {
  return (
    <>
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
              <p className="fs-5">
                El paquete Hogar es la perfecta forma de comenzar con una red de
                grado empresarial en tu hogar y gestionada desde la nube.
                <br />
                <br />
                <b>Beneficios:</b>
                <br />
                •Configuración y gestión sencillas con la aplicación móvil Aruba
                Instant On, sin necesidad de conocimientos técnicos.
                <br />
                •Rápida e inteligente, si detecta un error en su propia red lo
                subsana antes que el usuario lo note.
                <br />
                •Todo incluido en el precio, sin suscripciones o licencias
                ocultas, o que tener que comprar equipo de seguridad adicional.
              </p>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_wifihogar"
                  className={`${styles.bg_violet} btn fs-5`}
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_wifihogar"
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
                  src={titulo_4}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </p>

              <Image
                src={modal_4}
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

const RedNubeHogar = () => {
  return (
    <section className="card card-bordo container my-5">
      <div className="card-body">
        <div className="px-5 py-4 text-center">
          <h2>
            <b>Mi red en la nube Hogar</b>
          </h2>
          <p className="fs-5">
            Aruba Instant On le ofrece una red cableada e inalámbrica de alto
            rendimiento, segura y con una fácil configuración, todo garantizado.
          </p>
          <div className="row flex-column align-items-center borde-caja-bordo">
            <div className="col-auto fs-5">
              <b>Beneficios</b>
            </div>
            <div className="col-auto">
              •Simple de instalar
              <br />
              •Fácil de administrar e implementar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WifiNegocios = () => {
  return (
    <>
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
              <p className="fs-5">
                Comienza tu negocio con la mejor red en la nube y centraliza los
                procesos de gestión desde cualquier parte del mundo.
              </p>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_WifiNegocios"
                  className="bg-lightBlue btn fs-5"
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_WifiNegocios"
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
                  src={titulo_5}
                  objectFit="contain"
                  className="img-fluid"
                  alt="sponsor"
                />
              </p>

              <Image
                src={modal_5}
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

const RedNubeNegocios = () => {
  return (
    <div className="col-md-12 mt-4">
      <div className="card card-celeste">
        <div className="card-body">
          <div className="px-5 py-4 text-center">
            <h2>
              <b>Mi red en la nube Negocio</b>
            </h2>
            <p className="fs-5">
              Aruba Central ofrece una red de grado enterprise centralizada en
              la nube, diseñada para simplificar la implementación,
              administración y optimización de WLAN, LAN, VPN y SD-WAN.
            </p>
            <div className="row align-items-center borde-caja-azul">
              <div className="col-4 fs-5">
                <b>Beneficios</b>
              </div>
              <div className="col">
                <ul>
                  <li>Red robusta</li>
                  <li>Gestión unificada en la nube</li>
                  <li>Has 300 usuarios conectados simultáneamente</li>
                  <li>Gestion unificada en la nube</li>
                  <li>Filtrado de contenido granular incluido</li>
                  <li>IPS he IDS incluidos</li>
                  <li>Históricos de hasta 30 días</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WifiEnterprise = () => {
  return (
    <>
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
              <p className="fs-5">
                Aruba Central es una poderosa solución de administración de
                redes basada en nube, que ofrece analíticos integrados para
                obtener perspectivas de red y de negocios con las cuales se
                puede tomar acción.
              </p>
              <div className="text-center mb-4 ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modal_WifiEnterprise"
                  className="bg-blue btn fs-5"
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modal_WifiEnterprise"
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

              <Image
                src={modal_6}
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

const RedNubeHogarBlue = () => {
  return (
    <div className="card bg-verde">
      <div className="card-body">
        <div className="px-5 py-4 text-center">
          <h2>
            <b>Mi red en la nube Hogar</b>
          </h2>
          <p className="fs-5">
            Aruba Instant On le ofrece una red cableada e inalámbrica de alto
            rendimiento, segura y con una fácil configuración, todo garantizado.
          </p>
          <div className="row align-items-center borde-caja-verde">
            <div className="col-4 fs-5">
              <b>Beneficios</b>
            </div>
            <div className="col">
              <ul>
                <li>Red centralizada en la nube</li>
                <li>Equipos de grado Enterprise</li>
                <li>Análisis de RF automatizado</li>
                <li>Históricos de hasta 3 meses</li>
                <li>Hasta 400 usuarios conectados simultáneamente</li>
                <li>Filtrado de contenido granular incluido</li>
                <li>IDS y IPS incluido en los equipos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
