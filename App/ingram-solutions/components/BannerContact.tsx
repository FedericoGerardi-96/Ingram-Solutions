import style from "../styles/component/BannerContact.module.css";

export const BannerContact = () => {
  return (
    <section id="BannerContact">
      <div className={`${style.specialist_banner} position-relative`}>
        <div className="container p-lg-4 py-3">
          <div style={{ zIndex: "99" }} className="row position-relative">
            <div className="col-lg-4 col-0"></div>
            <div className="col-lg-8 col-12">
              <h1 className="text-center fw-normal text-lg-white">
                Acércate a nuestros{" "}
              </h1>
              <h1 className="text-center fw-bold text-blue mb-4">especialistas</h1>
              <div className="row mt-3">
                <div className="col-md-6 col-12  d-flex flex-column justify-content-start align-items-center">
                  <h3 className="text-lg-white fs-5 text-center fw-bold">
                    Expande tus oportunidades con Preventa de Ingram Micro:
                  </h3>
                  <a
                    className="fs-5 text-center text-blue fw-bold"
                    href="mailto:coe.latam@ingrammicro.com"
                  >
                    coe.latam@ingrammicro.com
                  </a>
                </div>
                <div
                  className={`col-md-6 col-12 ${style.border_left} d-flex flex-column justify-content-start align-items-center`}
                >
                  <h3 className="text-lg-white fs-5 text-center fw-bold">
                    Déjanos asesorarte y obtén una evaluación gratuita:
                  </h3>
                  <a href="mailto:coe.latam@ingrammicro.com">
                    <button className="btn button-green text-lg-white fw-bold px-4 fs-3 py-2 mt-3">
                      Contáctanos
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
