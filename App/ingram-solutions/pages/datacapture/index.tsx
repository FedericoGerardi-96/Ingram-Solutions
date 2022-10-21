import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import { ButtonOrange } from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  banner_top,
  banner_sec,
  logo_datacapture,
  logos_1,
  logos_2,
  logos_3,
  logos_4,
  modal_1,
  modal_2,
  modal_3,
  modal_4,
  solucion_1,
  solucion_2,
  solucion_3,
  solucion_4,
  solucion_5,
  solucion_6,
  solucion_7,
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
  titulo_1,
  titulo_2,
  titulo_3,
  titulo_4,
} from "../../services/Image-DataCapture/Image";

const DataCapture = () => {
  const Sponsors = [
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
  ];
  const herochildren = () => {
    return (
      <>
        <h2 className="mt-4">
          Soluciones integrales de{" "}
          <span className="fw-bold text-blue">AIDC y POS</span>
        </h2>
      </>
    );
  };
  return (
    <>
      <Hero
        children={herochildren()}
        logo={logo_datacapture}
        backgroundUrl={banner_top}
      />
      <section className="seccion-segunda">
        <article className="container my-5">
          <div className="row bg-sec2-datacapture position-relative shadow bg-sec2-datacapture p-5">
            <div
              style={{ zIndex: "99" }}
              className="col-md-7 text-lg-white offset-md-5 position-relative datacapture"
            >
              <p className="fs-5 fw-bold">
                En Ingram Micro ofrecemos soluciones integrales de
                Identificación Automática y Captura de Datos (AIDC), que
                permiten el procesamiento de información para la toma de
                decisiones, y de Punto de Venta (POS) que es un conjunto de
                hardware y software para apoyar a los negocios en su proceso de
                venta, tanto en sus procesos internos como frente al cliente.
              </p>
              <ButtonOrange
                text="conoce más"
                href="https://images.LatAm.ingrammicro.com/EloquaImages/clients/IngramMicroLATAM/%7B3d50d5bd-dd26-48f5-b7c5-353b21772034%7D_PDF_AIDC_Y_POS.png?elqTrackId=003d6bafd4ad4c43b009b04bd008aba9&amp;elqaid=904&amp;elqat=2"
              />
            </div>
          </div>
        </article>
      </section>
      <section>
        <article>
          <div className="container">
            <div className="row text-center  py-5">
              <div className="col-md-12">
                <h3 className="azul fw-bold">
                  Las soluciones facilitan a las organizaciones:
                </h3>
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-6">
                <Image
                  src={solucion_1}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />
              </div>
              <div className="col-md-6">
                <Image
                  src={solucion_2}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
              </div>
              <div className="col-md-6">
                <Image
                  src={solucion_3}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
              </div>
              <div className="col-md-6">
                <Image
                  src={solucion_4}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
              </div>
              <div className="col-md-6">
                <Image
                  src={solucion_5}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
              </div>
              <div className="col-md-6">
                <Image
                  src={solucion_6}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
              </div>
              <div className="col-md-12 text-center">
                <Image
                  src={solucion_7}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
              </div>
            </div>

            <div className="text-center mb-4 mt-3 ">
              <a href="mailto:dcpos.mx@ingrammicro.com">
                <button className="btn button-lightblue fs-4">
                  Contáctanos
                </button>
              </a>
            </div>
          </div>
        </article>
      </section>
      <section>
        <div className="container">
          <div className="row text-center  py-5">
            <div className="col-md-12">
              <h3 className="text-blue fw-bold">Una Solución a tu medida</h3>
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-md-12 mb-4">
              <div
                className="card border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal-1"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_1}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="table-responsive">
                      <table className="table table-striped table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">SKU</th>
                            <th scope="col">NP</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Disponibilidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">705007Z</th>
                            <td className="text-start">EC-VP-1100-I3-128</td>
                            <td className="text-start">
                              TERMINAL TS 15" CI3 4GB HD128 SSD BEEZEL FREE WIN
                              IOT ENT 64
                            </td>
                            <td className="text-start">Ec Line</td>
                            <td>90-100 días</td>
                          </tr>
                          <tr>
                            <th scope="row">7050064</th>
                            <td className="text-start">EC-PM-80360</td>
                            <td className="text-start">
                              MINIPRINTER TERMICA USB/SERIAL ETHERNET300MM/ 80MM
                              CORTADOR AUT
                            </td>
                            <td className="text-start">Ec Line</td>
                            <td>Consultar Stock</td>
                          </tr>
                          <tr>
                            <th scope="row">705005Y</th>
                            <td className="text-start">EC-CD-100P</td>
                            <td className="text-start">
                              CAJON DINERO 5 BILLETES/8 MONEDAS/RJ11 3
                              POSICIONES DE SEGURIDAD CON LLAVE
                            </td>
                            <td className="text-start">Ec Line</td>
                            <td>8-10 Ssemanas</td>
                          </tr>
                          <tr>
                            <th scope="row">705003K</th>
                            <td className="text-start">EC-CD-8100</td>
                            <td className="text-start">
                              LECTOR CODIGO BARRAS 8100 CCD USB NEGRO
                            </td>
                            <td className="text-start">Ec Line</td>
                            <td>8-10 Ssemanas</td>
                          </tr>
                          <tr>
                            <th scope="row">Nuevo</th>
                            <td className="text-start">MYB20</td>
                            <td className="text-start">
                              SW POS Control Administrativo, incluye Módulos de
                              retail, fast food, compras, inventarios, clientes,
                              CxC, Proveedores, CxP, CFDI 3.3, Ambiente de
                              desarrollo y Servicios en la nube
                            </td>
                            <td className="text-start">My Business POS</td>
                            <td>Sobre pedido</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="text-center mb-4 ">
                    <button className="btn button-blue fs-4">Conoce más</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 my-4">
              <div
                className="card border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal-2"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_2}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="table-responsive">
                      <table className="table table-striped table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">SKU</th>
                            <th scope="col">NP</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Disponibilidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Nuevo</th>
                            <td className="text-start">E931524</td>
                            <td className="text-start">
                              EloPOS System, 15-inch 4:3, Win 10, Celeron, 4GB
                              RAM, 128SSD, Projected Capacitive 10-touch,
                              Zero-Bezel, Antiglare, Black, with I/O Hub Stand
                            </td>
                            <td className="text-start">Elo</td>
                            <td>
                              8-10 semanas
                              <br />
                              sobre pedido
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">70802DC</th>
                            <td className="text-start">C31CH51001</td>
                            <td className="text-start">
                              EPSON MINIPRINTER TM-T20III-001 NEGRA/
                              USB/SERIAL/TERMICA
                            </td>
                            <td className="text-start">Epson</td>
                            <td>450 pzas stock</td>
                          </tr>
                          <tr>
                            <th scope="row">A000196</th>
                            <td className="text-start">1950GSR-2USB-N</td>
                            <td className="text-start">
                              LECTOR XENON XP NEGRO, KIT USB, 1D,2D, SR, SIN
                              BASE{" "}
                            </td>
                            <td className="text-start">Honeywell</td>
                            <td>49 pzas stock</td>
                          </tr>
                          <tr>
                            <th scope="row">B430071</th>
                            <td className="text-start">37969520</td>
                            <td className="text-start">
                              STAR MICRONICS CAJON DE DINERO 16 X 16 PROF
                              CONTROL POR IMPRESORA
                            </td>
                            <td className="text-start">Starmicronics</td>
                            <td>
                              Llegan 1400
                              <br />
                              Mes y medio
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Nuevo</th>
                            <td className="text-start">MYB20</td>
                            <td className="text-start">
                              SW POS Control Administrativo, incluye Módulos de
                              retail, fast food, compras, inventarios, clientes,
                              CxC, Proveedores, CxP, CFDI 3.3, Ambiente de
                              desarrollo y Servicios en la nube
                            </td>
                            <td className="text-start">My Business POS</td>
                            <td>Sobre pedido</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="text-center mb-4 ">
                    <button className="btn button-green fs-4">
                      Conoce más
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 my-4">
              <div
                className="card border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal-3"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_3}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="table-responsive">
                      <table className="table table-striped table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">SKU</th>
                            <th scope="col">NP</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Disponibilidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Nuevo</th>
                            <td className="text-start">E931524</td>
                            <td className="text-start">
                              EloPOS System, 15-inch 4:3, Win 10, Celeron, 4GB
                              RAM, 128SSD, Projected Capacitive 10-touch,
                              Zero-Bezel, Antiglare, Black, with I/O Hub Stand
                            </td>
                            <td className="text-start">Elo</td>
                            <td>
                              8-10 semanas
                              <br />
                              sobre pedido
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">B430046</th>
                            <td className="text-start">39465031</td>
                            <td className="text-start">
                              STAR MICRONICS BSC10UD-24 TERMICA INTERFACE
                              USB/SERIAL/PALLET
                            </td>
                            <td className="text-start">Starmicronics</td>
                            <td>
                              Llegan 300 pzas
                              <br />
                              Mes y medio
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">93901YS</th>
                            <td className="text-start">DS2208-SR7U2100SG</td>
                            <td className="text-start">
                              ZEBRA KIT DS2208 IMAGER, 2D, ALAMB STD RANGE
                              C/CBLE USB,BASE NGR
                            </td>
                            <td className="text-start">Zebra</td>
                            <td>39 pzas stock</td>
                          </tr>
                          <tr>
                            <th scope="row">B430071</th>
                            <td className="text-start">37969520</td>
                            <td className="text-start">
                              STAR MICRONICS CAJON DE DINERO 16 X 16 PROF
                              CONTROL POR IMPRESORA
                            </td>
                            <td className="text-start">Starmicronics</td>
                            <td>
                              Llegan 1400
                              <br />
                              Mes y medio
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Nuevo</th>
                            <td className="text-start">MYB20</td>
                            <td className="text-start">
                              SW POS Control Administrativo, incluye Módulos de
                              retail, fast food, compras, inventarios, clientes,
                              CxC, Proveedores, CxP, CFDI 3.3, Ambiente de
                              desarrollo y Servicios en la nube
                            </td>
                            <td className="text-start">My Business POS</td>
                            <td>Sobre pedido</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="text-center mb-4 ">
                    <button className="btn button-orange fs-4">
                      Conoce más
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 my-4">
              <div
                className="card border-light"
                data-bs-toggle="modal"
                data-bs-target="#modal-4"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={titulo_4}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />{" "}
                <div className="card-body fondo-gradient shadow">
                  <div className="px-5 py-4">
                    <div className="table-responsive">
                      <table className="table table-striped table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">SKU</th>
                            <th scope="col">NP</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Disponibilidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Nuevo</th>
                            <td className="text-start">E931524</td>
                            <td className="text-start">
                              EloPOS System, 15-inch 4:3, Win 10, Celeron, 4GB
                              RAM, 128SSD, Projected Capacitive 10-touch,
                              Zero-Bezel, Antiglare, Black, with I/O Hub Stand
                            </td>
                            <td className="text-start">Elo</td>
                            <td>
                              8-10 semanas
                              <br />
                              sobre pedido
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">D30003O</th>
                            <td className="text-start">SRP-F310IICOK</td>
                            <td className="text-start">
                              IMP.SRP-F310II TERMICA 3 PULGAD USB RED NEGRO
                            </td>
                            <td className="text-start">Bixolon</td>
                            <td>30 pzas stock</td>
                          </tr>
                          <tr>
                            <th scope="row">B430071</th>
                            <td className="text-start">37969520</td>
                            <td className="text-start">
                              STAR MICRONICS CAJON DE DINERO 16 X 16 PROF
                              CONTROL POR IMPRESORA
                            </td>
                            <td className="text-start">Starmicronics</td>
                            <td>
                              Llegan 1400
                              <br />
                              Mes y medio
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">B08002G</th>
                            <td className="text-start">TD1120-BK-65K1</td>
                            <td className="text-start">
                              LECTOR DE CODIGO DE BARRAS TD1100 65 USB NEGRO
                            </td>
                            <td className="text-start">Datalogic</td>
                            <td>90 pzas stock</td>
                          </tr>
                          <tr>
                            <th scope="row">Nuevo</th>
                            <td className="text-start">MYB20</td>
                            <td className="text-start">
                              SW POS Control Administrativo, incluye Módulos de
                              retail, fast food, compras, inventarios, clientes,
                              CxC, Proveedores, CxP, CFDI 3.3, Ambiente de
                              desarrollo y Servicios en la nube
                            </td>
                            <td className="text-start">My Business POS</td>
                            <td>Sobre pedido</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="text-center mb-4 ">
                    <button className="btn button-green fs-4">
                      Conoce más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modales */}
        <div
          className="modal fade"
          id="modal-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
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
                  src={modal_1}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-2"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
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
                  src={modal_2}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-3"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
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
                  src={modal_3}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-4"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
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
                  src={modal_4}
                  objectFit="contain"
                  className="img-fluid"
                  alt="solucion"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seccion-sponsor-iot">
        <article className="container my-5">
          <div className="row text-center  py-2">
            <div className="col-md-12">
              <h3 className="text-blue fw-bold">Aliados de Negocio</h3>
            </div>
          </div>

          <div className="row  py-5">
            <div className="col-md-12 text-center">
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                {Sponsors.map((e, i) => (
                  <Image
                    key={i}
                    src={e.src}
                    width="160"
                    height="110"
                    objectFit="contain"
                    className="img-fluid p-3"
                    alt="sponsor"
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
      <BannerContact
        href_Button="mailto:dcpos.mx@ingrammicro.com"
        url="mailto:dcpos.mx@ingrammicro.com"
        url_Text="dcpos.mx@ingrammicro.com"
      />
      <section id="product_info">
        <div className="container my-5">
          <ul>
            <li className="list-group-item fs-5">
              -Las imágenes son de carácter ilustrativo y pueden diferir del
              producto y/o servicio descrito.
            </li>
            <li className="list-group-item fs-5">
              -Los paquetes mostrados pueden cambiar de precio sin previo aviso
            </li>
            <li className="list-group-item fs-5">
              -Precios de implementación sujetos a cobertura geográfica
            </li>
            <li className="list-group-item fs-5">
              -Precios mostrados antes de IVA
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default DataCapture;
