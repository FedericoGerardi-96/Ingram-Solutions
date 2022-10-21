import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import { ButtonOrange } from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  logo_preventa,
  banner_top,
  burbuja_1,
  burbuja_2,
  burbuja_3,
  burbuja_4,
  burbuja_5,
  burbuja_6,
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
} from "../../services/images-preventa/images";

const Preventa = () => {
  const herochildren = () => {
    return (
      <>
        <h6 className="fs-5 pb-5">
          En Ingram ofrecemos consultoría técnica a través de un grupo de
          ingenieros altamente certificados y especializados, que ayudan a
          nuestros socios de negocio a detectar oportunidades y presentar
          soluciones integrales de acuerdo con las necesidades de los usuarios
          finales.{" "}
        </h6>
        <ButtonOrange
          text="Contáctanos"
          href="mailto:coe.latam@ingrammicro.com"
        />
      </>
    );
  };

  return (
    <>
      <Hero
        children={herochildren()}
        logo={logo_preventa}
        backgroundUrl={banner_top}
      />
      <section id="preventa_bubbles">
        <div className="mt-5">
          <div className="bubble_tittle">
            <h2 className="display-6 fw-bold text-center text-blue">
              Portafolio
            </h2>
            <p className="fs-4 text-center">
              {" "}
              Los servicios de Preventa incluyen:{" "}
            </p>
          </div>
          <div className="bubbles row justify-content-center align-items-center py-lg-0 py-4 px-2">
            <div className="bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_1}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="bubble_text">
                <h2
                  style={{ color: "#24b115" }}
                  className="fs-5 text-center fw-bold"
                >
                  Resolución de dudas técnicas
                </h2>
              </div>
            </div>
            <div className="bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_2}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="bubble_text">
                <h2
                  style={{ color: "#ff8303" }}
                  className="fs-5 text-center fw-bold"
                >
                  Dimensionamiento
                </h2>
              </div>
            </div>
            <div className="bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_3}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="bubble_text">
                <h2
                  style={{ color: "#06baec" }}
                  className="fs-5 text-center fw-bold"
                >
                  Arquitectura de Soluciones
                </h2>
              </div>
            </div>
          </div>
          <div className="bubbles bubble_2 row justify-content-center align-items-center py-lg-0 py-4 px-2">
            <div className="bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_4}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="bubble_text">
                <h2
                  style={{ color: "#2276ba" }}
                  className="fs-5 text-center fw-bold"
                >
                  Visitas / Llamadas Técnicas
                </h2>
              </div>
            </div>
            <div className="bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_5}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="bubble_text">
                <h2
                  style={{ color: "#7359a2" }}
                  className="fs-5 text-center fw-bold"
                >
                  Capacitaciones
                </h2>
              </div>
            </div>
            <div className="bubbles_card col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_6}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="bubble_text">
                <h2
                  style={{ color: "#0e2e44" }}
                  className="fs-5 text-center fw-bold"
                >
                  Demostraciones y Pruebas de Concepto
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="preventa_sponsors">
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
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_12}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_13}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_14}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_15}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_16}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_17}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_18}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_19}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <Image
                src={sponsor_20}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
            </div>
          </div>
        </div>
      </section>      
      <BannerContact
        href_Button="mailto:coe.latam@ingrammicro.com"
        url="mailto:coe.latam@ingrammicro.com"
        url_Text="coe.latam@ingrammicro.com"
      />
    </>
  );
};

export default Preventa;
