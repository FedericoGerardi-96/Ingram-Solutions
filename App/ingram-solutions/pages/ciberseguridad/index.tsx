import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import { Hero } from "../../components/Hero";
import {
  banner_top,
  grafico_ciber,
  logo_ciber,
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
  titulo_1,
  titulo_2,
  titulo_3,
  titulo_4,
  titulo_5,
  que_nist,
  icon_id_1,
  icon_id_2,
  icon_id_3,
  icon_id_4,
  icon_id_5,
  icon_pr_1,
  icon_pr_2,
  icon_re_1,
  icon_re_2,
  modal_identificar,
  modal_proteger,
  modal_recuperar,
  modal_detectar,
  modal_responder,
  iconos_detectar,
  iconos_responder,
  beneficios_1,
  beneficios_2,
  beneficios_3,
  beneficios_4,
  beneficios_5,
  beneficios_6,
  beneficios_7,
  beneficios_8,
  beneficios_9,
  beneficios_ingram,
  banner_ciber,
} from "../../services/Image-ciberseguridad/Image";

const Ciberseguridad = () => {
  const sponsorsList = [
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
  ];
  const herochildren = () => {
    return (
      <>
        <h2 className="mt-4 ">
          Ofrecer a nuestros socios comerciales el portafolio más grande de
          soluciones de Ciberseguridad que les permita integrar una estrategia
          para <span style={{ color: "#00b9eb" }}>identificar,</span>{" "}
          <span style={{ color: "#835294" }}>proteger,</span>{" "}
          <span style={{ color: "#f08219" }}>detectar,</span>{" "}
          <span style={{ color: "#ec3d44" }}>responder</span>{" "}
          <span style={{ color: "#38b24a" }}>y recuperar</span> los datos y la
          privacidad de sus clientes finales.
        </h2>
      </>
    );
  };
  return (
    <>
      <Hero
        children={herochildren()}
        logo={logo_ciber}
        backgroundUrl={banner_top}
      />
      <section className="seccion-segunda">
        <article className="container-fluid my-5">
          <div className="row bg-sec2-ciber shadow">
            <div className="col">
              <Image
                src={que_nist}
                objectFit="contain"
                className="img-fluid w-100 h-100"
                alt="sponsor"
              />
            </div>
            <div className="col-lg-8 align-self-center ">
              <p className="fs-5">
                Ingram Micro basa su estrategia de Ciberseguridad en el marco de
                referencia de ciberseguridad del Instituto Nacional de
                Estándares de Tecnología (también conocido como NIST, por sus
                siglas en inglés).
                <br />
                <br />
                Desde su creación en 2014, el NIST ha desarrollado su marco de
                ciberseguridad para ayudar a las organizaciones a entender de
                mejor manera y mejorar su administración de riesgos
                cibernéticos. Este marco es voluntario basado en estándares ya
                existentes, lineamentos y prácticas para tener una
                ciberseguridad fuerte y adecuada a las necesidades de cada
                institución.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section id="grafico" className="grafico-ciber">
        <div className="container my-5">
          <div className="col text-center">
            <Image
              src={grafico_ciber}
              objectFit="contain"
              className="img-fluid w-100 h-100"
              alt="grafico"
            />
          </div>
        </div>
      </section>
      <section id="seccion-cajas" className="seccion-cajas">
        <div className="fondo-gradient-icons shadow">
          <div>
            <div className="caja-expandible col-md-12 text-center py-4">
              <div
                className="mostrar-caja"
                data-bs-toggle="collapse"
                data-bs-target="#primero"
              >
                <div className="grantitular">
                  <Image
                    src={titulo_1}
                    objectFit="contain"
                    alt="Icono"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="pb-5">
                <p className="fs-4 fw-bold">
                  Su objetivo es entender el desarrollo organizacional para
                  poder gestionar los riesgos en:
                </p>
              </div>
              <div className="pb-5"></div>
              <div className="bg-modal-serviciosadministrados container-fluid pb-2">
                <div className="row justify-content-around text-center">
                  <div className="col-lg-2 col-md-4 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_id_1}
                      objectFit="contain"
                      alt="Icono"
                    />
                    <p className="fs-5 mt-2 fw-bold">Sistemas</p>
                  </div>
                  <div className="col-lg-2 col-md-4 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_id_2}
                      objectFit="contain"
                      alt="Icono"
                    />{" "}
                    <p className="fs-5 mt-2 fw-bold ">Capacidades</p>
                  </div>
                  <div className="col-lg-2 col-md-4 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_id_3}
                      objectFit="contain"
                      alt="Icono"
                    />{" "}
                    <p className="fs-5 mt-2 fw-bold ">Personas</p>
                  </div>
                  <div className="col-lg-2 col-md-6 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_id_4}
                      objectFit="contain"
                      alt="Icono"
                    />{" "}
                    <p className="fs-5 mt-2 fw-bold ">Activos</p>
                  </div>
                  <div className="col-lg-2 col-md-6 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_id_5}
                      objectFit="contain"
                      alt="Icono"
                    />{" "}
                    <p className="fs-5 mt-2 fw-bold ">Datos</p>
                  </div>
                </div>
              </div>
              <div>
                <div data-bs-toggle="modal" data-bs-target="#modal-1">
                  <button className="btn btn-celeste fw-bold">
                    Más información
                  </button>
                </div>
                {/* modal */}
                <div className="modal fade" id="modal-1" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
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
                          src={modal_identificar}
                          objectFit="contain"
                          alt="Icono"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fondo-gradient-icons shadow">
          <div>
            <div className="caja-expandible col-md-12 text-center py-4">
              <div
                className="mostrar-caja"
                data-bs-toggle="collapse"
                data-bs-target="#primero"
              >
                <div className="grantitular">
                  <Image
                    src={titulo_2}
                    objectFit="contain"
                    alt="Icono"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="pb-5">
                <p className="fs-4 fw-bold">
                  Se busca desarrollar e implementar medidas de seguridad
                  adecuadas para:
                </p>
              </div>
              <div className="pb-5"></div>
              <div className="bg-modal-serviciosadministrados container-fluid pb-2">
                <div className="row justify-content-around text-center">
                  <div className="col-md-4 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_pr_1}
                      objectFit="contain"
                      alt="Icono"
                    />
                    <p className="fs-5 mt-2 fw-bold">
                      Limitar el impacto de un ataque
                    </p>
                  </div>
                  <div className="col-md-4 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_pr_2}
                      objectFit="contain"
                      alt="Icono"
                    />{" "}
                    <p className="fs-5 mt-2 fw-bold ">
                      Garantizar la entrega de servicios críticos
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div data-bs-toggle="modal" data-bs-target="#modal-2">
                  <button className="btn btn-violet fw-bold">
                    Más información
                  </button>
                </div>
                {/* modal */}
                <div className="modal fade" id="modal-2" taria-hidden="true">
                  <div className="modal-dialog modal-xl">
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
                          src={modal_proteger}
                          objectFit="contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fondo-gradient-icons shadow">
          <div>
            <div className="caja-expandible col-md-12 text-center py-4">
              <div
                className="mostrar-caja"
                data-bs-toggle="collapse"
                data-bs-target="#primero"
              >
                <div className="grantitular">
                  <Image
                    src={titulo_3}
                    objectFit="contain"
                    alt="Icono"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="row justify-content-around text-center">
                <div className="row justify-content-center">
                  <div className="col-md-9 my-4">
                    <div
                      className="card caja-borde-naranja-2"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="card-body d-flex justify-content-center align-items-center">
                        <div className="row text-start w-100 h-100">
                          <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <Image
                              src={iconos_detectar}
                              objectFit="contain"
                              className="img-fluid"
                              alt="icon"
                              width="170"
                              height="78"
                            />{" "}
                          </div>
                          <div className="col-md-9 d-flex justify-content-center align-items-center fs-5">
                            <p className="fw-normal">
                              Se generan e implementan actividades para
                              identificar y descubrir oportunamente eventos de
                              ciberseguridad
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div data-bs-toggle="modal" data-bs-target="#modal-3">
                  <button className="btn btn-naranja fw-bold">
                    Más información
                  </button>
                </div>
                {/* modal */}
                <div className="modal fade" id="modal-3" taria-hidden="true">
                  <div className="modal-dialog modal-xl">
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
                          src={modal_detectar}
                          objectFit="contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fondo-gradient-icons shadow">
          <div>
            <div className="caja-expandible col-md-12 text-center py-4">
              <div
                className="mostrar-caja"
                data-bs-toggle="collapse"
                data-bs-target="#primero"
              >
                <div className="grantitular">
                  <Image
                    src={titulo_4}
                    objectFit="contain"
                    alt="Icono"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="row justify-content-around text-center">
                <div className="row justify-content-center">
                  <div className="col-md-9 my-4">
                    <div
                      className="card caja-borde-rojo"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="card-body d-flex justify-content-center align-items-center">
                        <div className="row text-start w-100 h-100">
                          <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <Image
                              src={iconos_responder}
                              objectFit="contain"
                              className="img-fluid"
                              alt="icon"
                              width="170"
                              height="78"
                            />{" "}
                          </div>
                          <div className="col-md-9 d-flex justify-content-center align-items-center fs-5">
                            <p className="fw-normal">
                              Incluye actividades apropiadas para reaccionar
                              ante un incidente de ciberseguridad detectado y
                              minimizar el impacto.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div data-bs-toggle="modal" data-bs-target="#modal-4">
                  <button className="btn btn-rojo fw-bold">
                    Más información
                  </button>
                </div>
                {/* modal */}
                <div className="modal fade" id="modal-4" taria-hidden="true">
                  <div className="modal-dialog modal-xl">
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
                          src={modal_responder}
                          objectFit="contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ marginBottom: "5rem" }}
          className="fondo-gradient-icons shadow"
        >
          <div>
            <div className="caja-expandible col-md-12 text-center py-4">
              <div
                className="mostrar-caja"
                data-bs-toggle="collapse"
                data-bs-target="#primero"
              >
                <div className="grantitular">
                  <Image
                    src={titulo_5}
                    objectFit="contain"
                    alt="Icono"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="pb-5">
                <p className="fs-4 fw-bold">Sirve para:</p>
              </div>
              <div className="pb-5"></div>
              <div className="bg-modal-serviciosadministrados container-fluid pb-2">
                <div className="row justify-content-around text-center">
                  <div className="col-md-4 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_re_1}
                      objectFit="contain"
                      alt="Icono"
                    />
                    <p className="fs-5 mt-2 fw-bold">
                      Desarrollar e implementar actividades que mantengan los
                      planes de resiliencia
                    </p>
                  </div>
                  <div className="col-md-4 col-12 identificar_Icons">
                    <Image
                      height="150"
                      width="130"
                      src={icon_re_2}
                      objectFit="contain"
                      alt="Icono"
                    />{" "}
                    <p className="fs-5 mt-2 fw-bold ">
                      Restablecer y recuperar cualquier capacidad o servicio que
                      se haya visto afectado.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div data-bs-toggle="modal" data-bs-target="#modal-5">
                  <button className="btn btn-verde fw-bold">
                    Más información
                  </button>
                </div>
                {/* modal */}
                <div className="modal fade" id="modal-5" taria-hidden="true">
                  <div className="modal-dialog modal-xl">
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
                          src={modal_recuperar}
                          objectFit="contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="beneficios-ingram pt-4">
        <article className="fondo-gradient shadow container-fluid">
          <div className="text-center py-4">
            <Image
              src={beneficios_ingram}
              objectFit="contain"
              className="img-fluid"
              alt="icon ingram"
            />{" "}
          </div>
          <div className="row wrapper py-4">
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_1}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />
            </div>
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_2}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />{" "}
            </div>
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_3}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />{" "}
            </div>
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_4}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />{" "}
            </div>
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_5}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />{" "}
            </div>
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_6}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />{" "}
            </div>
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_7}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />{" "}
            </div>
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_8}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />{" "}
            </div>
            <div className="col-md-4 text-center reveal active">
              <Image
                src={beneficios_9}
                objectFit="contain"
                className="img-fluid"
                alt="icon"
              />{" "}
            </div>
          </div>
        </article>
      </section>
      <section className="vendor-line-card">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-sm-6 text-center align-self-center texto__centrado">
              <a
                href="https://latam.ingrammicro.com/LineCard?elqTrackId=d78ee12041584d66831a13ac0bcfd61b&amp;elq=00000000000000000000000000000000&amp;elqaid=901&amp;elqat=2&amp;elqCampaignId="
                target="_blank"
                style={{ textDecoration: "none", color: "#333" }}
              >
                <h2>
                  Consulta el Security <br />
                  Vendor Line Card
                </h2>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="seccion-sponsor-iot my-5">
        <div className="container">
          <div className="row text-center py-2">
            <div className="col-md-12">
              <h3 className="fw-bold">Nuestros socios de negocio</h3>
            </div>
          </div>
        </div>
        <article className="fondo-gradient shadow container-fluid">
          <div className="row wrapper py-4">
            <div className="col text-center">
              {sponsorsList.map((e, i) => (
                <Image
                  key={i}
                  src={e.src}
                  width="130"
                  height="90"
                  objectFit="contain"
                  className="img-fluid p-3"
                  alt="sponsor"
                />
              ))}
            </div>
          </div>
        </article>
      </section>
      <section className="shadow banner-ciber position-relative">
        <article className="container">
          <div
            style={{ zIndex: "99" }}
            className="row text-md-white position-relative text-center"
          >
            <div className="col-md-8 offset-md-2">
              <div className="row align-items-center mt-4 fw-bold">
                <div className="col-md-6 mb-4">
                  <h5 className="fw-bold">
                    ¿Necesitas ayuda para manejar tus soluciones de
                    ciberseguridad? <br />
                    <br />
                    Descubre los servicios administrados que tenemos para ti
                  </h5>
                  <a href="#top">
                    <button
                      type="button"
                      className="btn btn-verde text-md-white mt-4"
                    >
                      {" "}
                      Más información{" "}
                    </button>
                  </a>
                </div>
                <div className="col-md-6 borde-caja">
                  <h5 className="fw-bold">
                    Conviértete en un experto en ciberseguridad <br />
                    <br />
                    Participa en nuestro programa de desarrollo.
                  </h5>
                  <a
                    target="_blank"
                    href="https://solutionsprogram.com.mx?elqTrackId=0965ed9e48f346a486ef297eea430d75&amp;elqaid=901&amp;elqat=2"
                  >
                    <button
                      type="button"
                      className="btn btn-verde text-md-white mb-4 mt-4"
                    >
                      Más información
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <BannerContact
        text="Expande tus oportunidades en Ciberseguridad con Ingram Micro:"
        href_Button="mailto:videovigilancia.controldeacceso.mx@ingrammicro.com"
        url="mailto:videovigilancia.controldeacceso.mx@ingrammicro.com"
        url_Text="videovigilancia.controldeacceso.mx@ingrammicro.com"
      />

      <section className="pt-5">
        <article className="container">
          <div className="fs-5">
            Para obtener mayor información sobre el marco del NIST puedes
            acceder a la página oficial: <br />
            <a
              href="https://www.nist.gov/cyberframework/resources?elqTrackId=a933772744ba424eb5e42ef74148f5d7&amp;elqaid=901&amp;elqat=2"
              target="_blank"
            >
              https://www.nist.gov/cyberframework/resources
            </a>
          </div>
        </article>
      </section>
    </>
  );
};

export default Ciberseguridad;
