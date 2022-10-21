import Image from "next/image";
import { Hero } from "../../components/Hero";
import logodigitalsignage from "../../public/images/digitalsignage/logo-digitalsignage.png";
import banner_top from "../../public/images/digitalsignage/banner-top.jpg";
import { ButtonOrange } from "../../components/buttons/ButtonOrange";

import tecno1 from "../../public/images/digitalsignage/tecno-1.png";
import tecno2 from "../../public/images/digitalsignage/tecno-2.png";
import tecno3 from "../../public/images/digitalsignage/tecno-3.png";
import tecno4 from "../../public/images/digitalsignage/tecno-4.png";
import tecno5 from "../../public/images/digitalsignage/tecno-5.png";
import tecno6 from "../../public/images/digitalsignage/tecno-6.png";

import titulo_1 from "../../public/images/digitalsignage/titulo-1.png";
import titulo_2 from "../../public/images/Ultimas/digitalsignage/titulo-2.png";
import titulo_3 from "../../public/images/Ultimas/digitalsignage/titulo-3.png";
import titulo_4 from "../../public/images/Ultimas/digitalsignage/titulo-4.png";

import sponsor_1 from "../../public/images/digitalsignage/sponsor-1.png";
import sponsor_2 from "../../public/images/digitalsignage/sponsor-2.png";
import sponsor_3 from "../../public/images/digitalsignage/sponsor-3.png";
import sponsor_4 from "../../public/images/digitalsignage/sponsor-4.png";
import sponsor_5 from "../../public/images/digitalsignage/sponsor-5.png";
import sponsor_6 from "../../public/images/digitalsignage/sponsor-6.png";
import sponsor_7 from "../../public/images/digitalsignage/sponsor-7.png";
import { BannerContact } from "../../components/BannerContact";

const DigitalSignage = () => {
  return (
    <>
      <Hero logo={logodigitalsignage} backgroundUrl={banner_top}>
        <div>
          <h2 className="display-4 mt-4">
            <span className="fw-bold text-blue">Digital Signage</span>
          </h2>
          <h5>
            Las soluciones integrales nos permiten compartir información de
            forma visual y dinámica a través de pantallas digitales, paneles
            digitales estáticos, o táctiles que nos permiten generar
            interactividad, en diversos espacios físicos.
          </h5>

          <ButtonOrange
            text={"Conoce más"}
            href={
              "https://images.latam.ingrammicro.com/EloquaImages/clients/IngramMicroLATAM/%7B140ab117-3ed7-4a8c-af25-2f4e570dfb34%7D_PDF_Digital_Signage-min.png?elqTrackId=f12defcb3cec45f58ac283add3dcfa66&elqaid=905&elqat=2"
            }
          />
        </div>
      </Hero>

      <section className="d-flex flex-column  align-items-center my-5">
        <h3 className="text-blue fw-bold">
          Entre las tecnologías que ofrecemos se encuentran
        </h3>
        <div className="container my-3 text-center ">
          <TecnologiesRows />
        </div>
        <ButtonOrange
          text={"Contáctanos"}
          href={
            "https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Adigitalsignage.mx%40ingrammicro.com"
          }
        />
      </section>

      <section className="d-flex flex-column  align-items-center my-5 py-5">
        <h3 className="text-blue fw-bold">Una Solución a tu medida</h3>
        <div className="container my-5 d-grid gap-5 ">
          <Title1 />
          <Title2 />
          <Title3 />
          <Title4 />
        </div>
      </section>

      <SectionSponsor />

      <BannerContact
        href_Button="mailto:digitalsignage.mx@ingrammicro.com"
        url="mailto:digitalsignage.mx@ingrammicro.com"
        url_Text="digitalsignage.mx@ingrammicro.com"
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

export default DigitalSignage;

const TecnologiesRows = () => {
  return (
    <>
      <div className="row text-center ">
        <div className="col-md-4">
          <Image
            src={tecno1}
            className="mb-1 img-fluid"
            alt="equipo de computo"
          />
        </div>
        <div className="col-md-4">
          <Image
            src={tecno2}
            className="mb-1 img-fluid"
            alt="firma electronica"
          />
        </div>
        <div className="col-md-4">
          <Image src={tecno3} className="mb-1 img-fluid" alt="almacenamiento" />
        </div>
        <div className="col-md-4 ">
          <Image src={tecno4} className="mb-1 img-fluid" alt="colaboracion" />
        </div>
        <div className="col-md-4 mb-4">
          <Image src={tecno5} className="mb-1 img-fluid" alt="seguridad" />
        </div>
        <div className="col-md-4 mb-4">
          <Image src={tecno6} className="mb-1 img-fluid" alt="identity" />
        </div>
      </div>
    </>
  );
};

const Title1 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_1}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
          layout="responsive"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">No. Parte</th>
                    <th scope="col">Incluye:</th>
                    <th className="text-center" scope="col">
                      Precio + IVA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">LH55UDEBLBB/GO</th>
                    <td className="text-start">
                      Monitor profesional 55 pulgadas videowall bisel 3.5mm
                    </td>
                    <td>$31,155.00</td>
                  </tr>
                  <tr>
                    <th scope="row">SBB-SS08NL1/ZA</th>
                    <td className="text-start">Player SBB samsung</td>
                    <td>$4,010.00</td>
                  </tr>
                  <tr>
                    <th scope="row">BW-MIP70PA</th>
                    <td className="text-start">
                      Licencia Magic Info (software de adminitración de
                      contenido)
                    </td>
                    <td>$1,600.00</td>
                  </tr>
                  <tr>
                    <th scope="row">461719</th>
                    <td className="text-start">
                      Soporte para videowall Manhattan
                    </td>
                    <td>$4,699.00 </td>
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
//
const Title2 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_2}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
          layout="responsive"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">No. Parte</th>
                    <th scope="col">Incluye:</th>
                    <th className="text-center" scope="col">
                      Precio + IVA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">960-001054</th>
                    <td className="text-start">
                      Sistema de videoconferencia modelo GROUP para salas de
                      hasta 14 personas,
                      <br /> escalable a 20 participantes
                    </td>
                    <td>$32,000.00 </td>
                  </tr>
                  <tr>
                    <th scope="row">LH55WMRWBGCXZA</th>
                    <td className="text-start">
                      Samsung Flip 55 pulgadas, pizarron interactivo
                    </td>
                    <td>$35,900.00</td>
                  </tr>
                  <tr>
                    <th scope="row">STN-WM55RXZA</th>
                    <td className="text-start">
                      Base para Samsung flip 55 pulgadas
                    </td>
                    <td> $10,500.00</td>
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
const Title3 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_3}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
          layout="responsive"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">No. Parte</th>
                    <th scope="col">Incluye:</th>
                    <th className="text-center" scope="col">
                      Precio + IVA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">LH32QMREBGCXZA</th>
                    <td className="text-start">
                      Monitor profesional 24/7 samsung 32 pulgadas
                    </td>
                    <td>$10,500.00</td>
                  </tr>
                  <tr>
                    <th scope="row">PRO44AHDKIT</th>
                    <td className="text-start text-wrap">
                      KIT DVR 4CH 2MP CAPACIDAD PARA 1DD (UP TO 8TB)
                      PENTAHIBRIDO
                      <br /> + 4 CAMARA AHD BALA 2MP 3.6MM IR 15M IP66 (PARA
                      INTERIOR O EXTERIOR) 4IN1 + 4 CABLES COAXIAL SIAMES DE 20M
                      PRE-ENSAMBLADOS + FUENTE DC 12V 5A + 1 PULPO DE 4 SALIDAS
                    </td>
                    <td> $130.38 usd</td>
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

const Title4 = () => {
  return (
    <div className="col-12 ">
      <div className="card border-light">
        <Image
          src={titulo_4}
          objectFit="contain"
          className="img-fluid"
          alt="sponsor"
          layout="responsive"
        />
        <div className="card-body fondo-gradient shadow">
          <div className="px-5 py-4">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">No. Parte</th>
                    <th scope="col">Incluye:</th>
                    <th className="text-center" scope="col">
                      Precio + IVA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">LH55QMRTBGCXZA</th>
                    <td className="text-start">
                      Monitor interactivo Samsung 55 pulgadas
                    </td>
                    <td>$48,500.00</td>
                  </tr>
                  <tr>
                    <th scope="row">BW-MIP70PA</th>
                    <td className="text-start">Samsung magic info</td>
                    <td>$1,600.00</td>
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
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_2}
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_3}
              width="120"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_4}
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_5}
              width="150"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_6}
              width="300"
              height="150"
              objectFit="contain"
              alt="sponsor"
            />
            <Image
              src={sponsor_7}
              width="200"
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
