import Image from "next/image";
import { logo_ingram_new } from "../../services/Image-Home/Image";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_tecnology py-3 px-5 mt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 col-12">
              <h1 className="display-5 text-light text-center">
                Cumpliendo con la promesa Tecnológica™
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 col-12">
            <p className="fs-6 text-black text-md-start text-center">
              Copyright @ 2022 Ingram Micro. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-end">
            <div className="d-flex align-items-center w-100">
              <p className="fs-6 text-black text-end w-100">
                Este sitio pertenece a:
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-end w-100">
              <Image
                src={logo_ingram_new}
                width="400"
                objectFit="contain"
                className="img-fluid"
                alt="logo ingram"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
