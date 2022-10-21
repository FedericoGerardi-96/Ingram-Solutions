import style from "../styles/component/BannerContact.module.css"

interface Props {
  url: string;
  url_Text: string;
  href_Button: string;
}

export const BannerContact = ({ url, href_Button, url_Text }: Props) => {
  return (
    <section id="BannerContact">
      <div className={`${style.specialist_banner} position-relative`}>
        <div className="container p-lg-4 py-3">
          <div style={{ zIndex: "99" }} className="row text-center position-relative">
            <div className="col-md-10 col-lg-8 col-xxl-10 offset-md-2 offset-lg-4 offset-xxl-2">
              <h1 className="fw-normal text-lg-white text-break">
                Acércate a nuestros{" "}
              </h1>
              <h1 className="text-center fw-bold text-blue mb-4 text-break">
                especialistas
              </h1>
              <div className="row align-items-center mt-3">
                <div className="col-md-6">
                  <h5
                    className={`text-lg-white fw-bold ${style.text_contact} text-break`}
                  >
                    Expande tus oportunidades con Preventa de Ingram Micro:
                    <br />
                    <br />
                    <a
                      className="fs-5 text-center text-blue fw-bold text-break"
                      target="_blank"
                      href={url}
                    >
                      {url_Text}
                    </a>
                  </h5>
                </div>
                <div
                  className={`contactBanner col-md-6 ${style.border_left}`}
                >
                  <h3 className="text-lg-white fs-5 text-center fw-bold">
                    Déjanos asesorarte y obtén una evaluación gratuita:
                  </h3>
                  <a target="_blank" href={href_Button}>
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
  )
}
