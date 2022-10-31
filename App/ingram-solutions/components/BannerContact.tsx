import style from "../styles/component/BannerContact.module.css";

interface Props {
  url: string;
  url_Text: string;
  href_Button: string;
  text: string;
}

export const BannerContact = ({ url, href_Button, url_Text, text }: Props) => {
  return (
    <section id="BannerContact">
      <div className={`${style.specialist_banner} position-relative`}>
        <div className="container p-lg-4 py-3">
          <div
            style={{ zIndex: "99" }}
            className="row text-center position-relative"
          >
            <div className="col-md-8 offset-md-4 col-lg-7 offset-lg-5">
              <h2
                className={`${style.text_dark} text-lg-white display-6 fw-normal`}
              >
                Acércate a nuestros{" "}
                <span className="text-blue fw-bold">especialistas</span>
              </h2>
              <div className="row align-items-center mt-3">
                <div className="col-md-5 col-lg-6">
                  <h5
                    className={`text-lg-white fw-bold ${style.text_contact} text-break`}
                  >
                    {text}
                    <br />
                    <br />
                    <a
                      className="fs-5 text-center text-blue fw-bold text-break"
                      target="_blank"
                      href={url}
                      rel="noreferrer"
                    >
                      {url_Text}
                    </a>
                  </h5>
                </div>
                <div
                  className={`contactBanner col-md-7 col-lg-6 ${style.border_left}`}
                >
                  <h3 className="text-lg-white fs-5 text-center fw-bold">
                    Déjanos asesorarte y obtén una evaluación gratuita:
                  </h3>
                  <a target="_blank" href={href_Button} rel="noreferrer">
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
