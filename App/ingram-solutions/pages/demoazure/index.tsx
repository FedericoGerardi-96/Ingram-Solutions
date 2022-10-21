import Image from "next/image";
import { Hero } from "../../components/Hero";
import {
  banner_top,
  boton_play,
  demo_bg,
  logo_nube,
} from "../../services/Image-demoazure/Image";

const DemoAzure = () => {
  const herochildren = () => {
    return (
      <>
        <h2 className="mt-4">
          <span className="fw-bold text-blue">¿Querés saber más de Azure?</span>
          <br />
          <br />
          Da un salto a la nube y experimenta los beneficios en reducción de
          costos y esfuerzo, al llevar sus servicios a{" "}
          <span className="fw-bold text-blue">Azure</span>
        </h2>
      </>
    );
  };
  return (
    <div>
      <Hero
        children={herochildren()}
        logo={logo_nube}
        backgroundUrl={banner_top}
      />
      <section className="seccion-videos">
        <article className="container mt-5">
          <div className="row justify-content-around text-center">
            <div className="col-xl-4">
              <div className="row align-items-center justify-content-center">
                <div className="col-4 caja-video">
                  <h4 className="p-3">¿Cómo implemento un App Service?</h4>
                  <a
                    href="https://youtu.be/CbbKOHnk2Ow?elqTrackId=7f82cc4a64ed49cbbbd82f9e0e6d89f4&amp;elqaid=896&amp;elqat=2"
                    target="_blank"
                  >
                    <Image
                      src={boton_play}
                      objectFit="contain"
                      className="img-fluid"
                      alt="boton play"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row align-items-center justify-content-center">
                <div className="col-4 caja-video">
                  <h4 className="p-3">
                    Aprende a implementar una base de datos SQL en Azure
                  </h4>
                  <a
                    href="https://youtu.be/TABZzf_KPfU?elqTrackId=22b18e1b3bd843819014414f93412af4&amp;elqaid=896&amp;elqat=2"
                    target="_blank"
                  >
                    <Image
                      src={boton_play}
                      objectFit="contain"
                      className="img-fluid"
                      alt="boton play"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around text-center">
            <div className="col-xl-4 ">
              <div className="row align-items-center justify-content-center">
                <div className="col-4 caja-video">
                  <h4 className="p-3">
                    Implementa un backup en una máquina virtual
                  </h4>
                  <a
                    href="https://youtu.be/NjkUICXtbfI?elqTrackId=128f2b6b0be34b4b8fbb602087e48c41&amp;elqaid=896&amp;elqat=2"
                    target="_blank"
                  >
                    <Image
                      src={boton_play}
                      objectFit="contain"
                      alt="boton play"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row align-items-center justify-content-center">
                <div className="col-4 caja-video">
                  <h4 className="p-3 text-break">
                    Paso a paso para realizar un disaster recovery
                  </h4>
                  <a
                    href="https://youtu.be/UoUFaugkeQQ?elqTrackId=dd8993bbf24144e9bc3398e037d5b8a0&amp;elqaid=896&amp;elqat=2"
                    target="_blank"
                  >
                    <Image
                      src={boton_play}
                      objectFit="contain"
                      className="img-fluid"
                      alt="boton play"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-xl-4">
              <div className="row align-items-center justify-content-center">
                <div className="col-4 caja-video">
                  <h4 className="p-3">
                    Implementa una cuenta de almacenamiento
                  </h4>
                  <a
                    href="https://youtu.be/MjvpwYV02d4?elqTrackId=ee7d7f4e6e824395b27c75139d1ffe75&amp;elqaid=896&amp;elqat=2"
                    target="_blank"
                  >
                    <Image
                      src={boton_play}
                      objectFit="contain"
                      className="img-fluid"
                      alt="boton play"
                    />
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DemoAzure;
