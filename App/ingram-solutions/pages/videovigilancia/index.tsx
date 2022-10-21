import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import {
  ButtonOrange,
  ButtonOrangeBlank,
} from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  banner_top,
  banner_sec_2,
  icono_1,
  icono_2,
  icono_3,
  logo_video,
  titulo_1,
  titulo_2,
  titulo_3,
  titulo_4,
  titulo_5,
  titulo_6,
  titulo_7,
  titulo_8,
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
} from "../../services/Image-videovigilancia/Image";
const Videovigilancia = () => {
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
  ];
  const Herochildren = () => {
    return (
      <>
        <h2 className="mt-4">
          <span className="fw-bold text-blue">Protege</span> los recursos de tus
          clientes por medio de tecnologías de video, control de acceso y
          detección de intrusos
        </h2>
        <div className="mt-3">
          <ButtonOrangeBlank
            href="https://images.LatAm.ingrammicro.com/Web/IngramMicroLATAM/{0d883662-95eb-4cb0-852a-b8aa9791a698}_soluciones_SEGURIDAD_FISICA_2.pdf?elqTrackId=f20f1364f5344b0da2a4cb959aac8b42&elqaid=892&elqat=2"
            text="Conoce más"
          />
        </div>
      </>
    );
  };
  return (
    <>
      <Hero
        logo={logo_video}
        backgroundUrl={banner_top}
      >
        <Herochildren/>
      </Hero>
      <section id="videoVigilancia_bannerSec">
        <div className="container my-5">
          <div className="row bannerSec_videoVigilancia position-relative p-4">
            <div
              style={{ zIndex: "99" }}
              className="videoVigilancia position-relative col-md-7 offset-md-5"
            >
              <p className="fs-5 text-md-white fw-bold">
                Las soluciones integrales de control y videovigilancia son
                barreras físicas y procedimientos que buscan prevenir y proteger
                los recursos de las organizaciones por medio de tecnologías de
                video, control de acceso y detección de intrusos.
              </p>
              <ButtonOrange
                href="mailto:videovigilancia.controldeacceso.mx@ingrammicro.com"
                text="Contáctanos"
              ></ButtonOrange>
            </div>
          </div>
        </div>
      </section>
      <section id="videoVigilancia_bubbles">
        <div className="videoVigilancia_bubbles">
          <div className="row wrapper text-center justify-content-between py-lg-0 py-4 px-2">
            <div className="videoVigilancia_bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={icono_1}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="videoVigilancia_bubble_text">
                <h2
                  style={{ color: "#24b115" }}
                  className="fs-5 text-center fw-bold"
                >
                  Resolución de dudas técnicas
                </h2>
                <p className="text-center">
                  Vigilancia visual diseñada para supervisar una diversidad de
                  ambientes y actividades
                </p>
              </div>
            </div>
            <div className="videoVigilancia_bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={icono_2}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="videoVigilancia_bubble_text">
                <h2
                  style={{ color: "#ff8303" }}
                  className="fs-5 text-center fw-bold"
                >
                  Dimensionamiento
                </h2>
                <p className="text-center">
                  Verificación de la identidad de una persona para acceder a un
                  recurso físico (edificio, local, país), comprobando si tiene
                  los derechos para hacerlo
                </p>
              </div>
            </div>
            <div className="videoVigilancia_bubbles_card col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={icono_3}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="videoVigilancia_bubble_text">
                <h2
                  style={{ color: "#06baec" }}
                  className="fs-5 text-center fw-bold"
                >
                  Arquitectura de Soluciones
                </h2>
                <p className="text-center">
                  Detección de accesos no autorizados mediante dispositivos que
                  se activan ante estímulos o sucesos determinados (movimientos,
                  vibraciones, rotura de vidrios)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="text-blue text-center fw-bold">
            Una solución a tu medida
          </h3>
          <div className="row">
            <div className="col-12">
              <Image
                src={titulo_1}
                height="150"
                className="w-100"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="card-body fondo-gradient shadow">
                <div className="px-5 py-4">
                  <div className="fs-5 fw-bold">
                    La solución Termográfica, nos permite crear un ambiente
                    preventivo y de vigilancia oportuno para la detección de
                    temperaturas de personas.
                  </div>

                  <table className="table table-responsive table-borderless table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No. Parte</th>
                        <th scope="col">Incluye:</th>
                        <th scope="col">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">BF3221PAQ1</th>
                        <td>
                          Sistema de Medición de Temperatura Corporal Light /
                          Bajo flujo de personas / Cámara Térmica Híbrida/
                          Blackbody/ Accesorios/ DSS Express
                        </td>
                        <td>$ 823.08</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <Image
                src={titulo_2}
                height="150"
                className="w-100"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="card-body fondo-gradient shadow">
                <div className="px-5 py-4">
                  <div className="fs-5 fw-bold">
                    Solución móvil de monitoreo y seguimiento vehículo en tiempo
                    real. Con modulos de 3G, 4G y WiFi
                  </div>

                  <table className="table table-responsive table-borderless table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No. Parte</th>
                        <th scope="col">Incluye:</th>
                        <th scope="col">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">MXVR4104-GFW</th>
                        <td>
                          DVR Movil de 4 Canales HDCVI 1080p+4 Canales IP/
                          H.265/ GPS/ 3G/ WiFi/ Soporta 1 HDD 2.5 Pulgadas + 1
                          Tarjeta SD/ Soporta HDCVI/AHD/TVI/CVBS/IP/
                        </td>
                        <td>$ 1,062.87</td>
                      </tr>
                      <tr>
                        <th scope="row">HMAW3100</th>
                        <td>
                          Cámara Cubo Especial para DVR movil 720p/ Lente 2.8
                          mm/ 92 Grados de Apertura/ Microfono Integrado/ IP67/
                          IR 20 Mts/ IP67/ Protección Contra Choques/
                        </td>
                        <td>$ 25.47</td>
                      </tr>
                      <tr>
                        <th scope="row">HMW3200L</th>
                        <td>
                          Cámara Mini Domo 1080p/ Especial para DVR Movil/ Lente
                          2.1 mm/ 139 Grados de Apertura/ Microfono Integrado/
                          IR de 3 Mts/ Uso Interior/
                        </td>
                        <td>$ 53.89</td>
                      </tr>
                      <tr>
                        <th scope="row">CONECT6MTSV2</th>
                        <td>
                          Cable Extensor Tipo Aviación de 6 Mts/ Para
                          Transmisión de Video y Audio Analogico/ para DVR
                          Movil/
                        </td>
                        <td>$ 8.98</td>
                      </tr>
                      <tr>
                        <th scope="row">CONECT12MTSV2</th>
                        <td>
                          Cable Extensor Tipo Aviación de 12 Mts/ Para
                          Transmisión de Video y Audio Analógico/ para DVR
                          Movil/
                        </td>
                        <td>$ 11.98</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <Image
                src={titulo_3}
                height="150"
                className="w-100"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="card-body fondo-gradient shadow">
                <div className="px-5 py-4">
                  <div className="fs-5 fw-bold">
                    La solución Retail es el seguimiento y monitoreo de tu
                    negocio, con Mapa de Calor, Conteo de personas, reportes,
                    detección de rostros.
                  </div>

                  <table className="table table-responsive table-borderless table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No. Parte</th>
                        <th scope="col">Incluye:</th>
                        <th scope="col">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">NVR5208P-4KS2E</th>
                        <td>
                          NVR 8 Canales IP 4K / H265+ / Rendimiento 320 Mbps / 8
                          Puertos tecnologia E PoE hasta 800M / PoE / ANPR /
                          HDMI / PoS / 2 SATA / P2P / DEWARPING
                        </td>
                        <td>$ 268.08</td>
                      </tr>
                      <tr>
                        <th scope="row">IPC-EW5541-AS</th>
                        <td>
                          Cámara IP Fish Eye de 5 Megapixeles/ WinzMind/ IR de
                          10 Mts/ H.265+/ PoE/ WDR Real/ Micrófono Integrado/
                          Heat Map/ Detección Inteligente/ Ranura para MicroSD/
                          E&amp;S de Alarma/ E&amp;S de Audio/ 3D DNR, HLC, BLC/
                          Interior
                        </td>
                        <td>$ 158.16</td>
                      </tr>
                      <tr>
                        <th scope="row">IPC-HFW1431S-S4</th>
                        <td>
                          Cámara IP Bullet de 4 Megapixeles/ Lente de 2.8mm/ 93
                          Grados de Apertura/ IR de 30 Mts/ 30 FPS/ WDR Real/
                          H.265+/ 3D DNR/ IP67/ PoE/ Metalica
                        </td>
                        <td>$ 47.65</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <Image
                src={titulo_4}
                height="150"
                className="w-100"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="card-body fondo-gradient shadow">
                <div className="px-5 py-4">
                  <table className="table table-responsive table-borderless table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No. Parte</th>
                        <th scope="col">Incluye:</th>
                        <th scope="col">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">PRO84AHDKIT</th>
                        <td>
                          KIT DVR 8CH 2MP CAPACIDAD PARA 1DD (UP TO 6TB)
                          PENTAHIBRIDO + 4 CAMARA AHD BALA 2MP 3.6MM IR 15M IP66
                          (PARA INTERIOR O EXTERIOR) 4IN1 + 4 CABLES COAXIAL
                          SIAMES DE 20M PRE-ENSAMBLADOS + FUENTE DC 12V 5A + 1
                          PULPO DE 4 SALIDAS
                        </td>
                        <td>$ 155.48</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <Image
                src={titulo_5}
                height="150"
                className="w-100"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="card-body fondo-gradient shadow">
                <div className="px-5 py-4">
                  <table className="table table-responsive table-borderless table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No. Parte</th>
                        <th scope="col">Incluye:</th>
                        <th scope="col">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">PRO44AHDKIT</th>
                        <td>
                          KIT DVR 4CH 2MP CAPACIDAD PARA 1DD (UP TO 8TB)
                          PENTAHIBRIDO + 4 CAMARA AHD BALA 2MP 3.6MM IR 15M IP66
                          (PARA INTERIOR O EXTERIOR) 4IN1 + 4 CABLES COAXIAL
                          SIAMES DE 20M PRE-ENSAMBLADOS + FUENTE DC 12V 5A + 1
                          PULPO DE 4 SALIDAS
                        </td>
                        <td>$ 130.38</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <Image
                src={titulo_6}
                height="150"
                className="w-100"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="card-body fondo-gradient shadow">
                <div className="px-5 py-4">
                  <div className="fs-5 fw-bold">
                    La solución para pequeños y medianos negocios es el
                    monitoreo a un bajo costo, lo puedes realizar desde la
                    comodidad de tu computadora y/o celular.
                  </div>

                  <table className="table table-responsive table-borderless table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No. Parte</th>
                        <th scope="col">Incluye:</th>
                        <th scope="col">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">XVR1B08KIT</th>
                        <td>
                          Kit 8 canales 2 megapixeles/ 2 Ch IP adicionales/ 8
                          Camaras B1A21 1080p/ DVR De 8 canales H.265+1080p Lite
                          8+2/ Accesorios
                        </td>
                        <td>$ 162.97</td>
                      </tr>
                      <tr>
                        <th scope="row">XVR1B04KIT2</th>
                        <td>
                          Kit 4 canales 2 Megapixeles/ 4 Camaras B1A21 1080p/
                          DVR De 4 canales H.265+ 1080p Lite/ 1 Ch IP Adicional/
                          IR 20 mts / IP67/ Accesorio
                        </td>
                        <td>$ 99.07</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <Image
                src={titulo_7}
                height="150"
                className="w-100"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="card-body fondo-gradient shadow">
                <div className="px-5 py-4">
                  <div className="fs-5 fw-bold">
                    La solución para el hogar es el monitoreo de tu casa o
                    estacionamiento requiriendo unicamente una cámara, con el
                    control desde tu celular.
                  </div>

                  <table className="table table-responsive table-borderless table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No. Parte</th>
                        <th scope="col">Incluye:</th>
                        <th scope="col">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">IPC-T26EN-0280B</th>
                        <td>
                          Cámara IP Domo Wifi de 2 Megapixeles/ Disuasión
                          activa/ Sirena Integrada/ Led de Alta Potencia/
                          Microfono Integrado/ Audio Bidereccional/ Detección de
                          Humanos/ IR 30 Mts/ IP67/ Ranura para MicroSD
                        </td>
                        <td>$ 62.30</td>
                      </tr>
                      <tr>
                        <th scope="row">IMOU RANGER 2</th>
                        <td>
                          Cámara Domo Motorizado Wifi de 2 Megapixeles/ con IA/
                          Detección de Humanos/ Seguimiento Inteligente/ Modo
                          Privacidad/ Sirena Incorporada/ Cobertura 360 Grados/
                          Ir 20 mts/ Audio Bidereccional/ Alarma de Sonido
                          Anormal
                        </td>
                        <td>$ 46.20</td>
                      </tr>
                      <tr>
                        <th scope="row">IMOU LOOC</th>
                        <td>
                          Cámara IP Bullet WiFi de 2 Megapixeles/ Lente de
                          2.8mm/ 111 Grados de Apertura/ Disuasion Activa/
                          Sirena y Luz integradas/ H.265/ Audio Bidireccional/
                          Ranura MicroSD/ PIR Integrado/ IP65/ Compatible con
                          Cloud, Alexa y Asistente de Google
                        </td>
                        <td>$ 51.66</td>
                      </tr>
                      <tr>
                        <th scope="row">ST2-64-S1</th>
                        <td>Tarjeta Micro SD 64 Gbytes para Cámara</td>
                        <td>$ 18.20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <Image
                src={titulo_8}
                height="150"
                className="w-100"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="card-body fondo-gradient shadow">
                <div className="px-5 py-4">
                  <div className="fs-5 fw-bold">
                    La solución Control de acceso es para la gestión de tiempo y
                    asistencia de los empleados, a traves de rostro, huella
                    digital, tarjeta, contraseña.
                  </div>

                  <table className="table table-responsive table-borderless table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No. Parte</th>
                        <th scope="col">Incluye:</th>
                        <th scope="col">Precio USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">MB360ID</th>
                        <td>
                          Control de Acceso y Asistencia / 1500 Rostros / 2000
                          Huellas / 2000 Tarjetas / 100000 Eventos / TCPIP
                        </td>
                        <td>$ 122.87</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="videoVigilancia__sponsors">
        <div className="container my-5">
          <h3 className="text-blue text-center fw-bold">Aliados de Negocio</h3>
          <div className="d-flex flex-wrap align-items-center justify-content-center">
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
      </section>
      <BannerContact
        text="Expande tus oportunidades de
      Videovigilancia y Control de Acceso con Ingram Micro:
      "
        href_Button="mailto:videovigilancia.controldeacceso.mx@ingrammicro.com"
        url="mailto:videovigilancia.controldeacceso.mx@ingrammicro.com"
        url_Text="videovigilancia.controldeacceso.mx@ingrammicro.com"
      />
      <section id="product_info">
        <div className="container my-5">
          <ul>
            <li className="list-group-item fs-6">
              -Las imágenes son de carácter ilustrativo y pueden diferir del
              producto y/o servicio descrito.
            </li>
            <li className="list-group-item fs-6">
              -Los paquetes mostrados pueden cambiar de precio sin previo aviso
            </li>
            <li className="list-group-item fs-6">
              -Precios de implementación sujetos a cobertura geográfica
            </li>
            <li className="list-group-item fs-6">
              -Precios mostrados antes de IVA
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Videovigilancia;
