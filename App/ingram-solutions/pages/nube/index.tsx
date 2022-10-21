import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import {
  ButtonOrange,
  ButtonOrangeBlank,
} from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  bg_topnube,
  bg_topnube_demoazure,
  logo_nube,
  nube_slider,
  solucion_nube_1,
  solucion_nube_2,
  solucion_nube_3,
  solucion_nube_4,
  check,
  office_1,
  office_2,
  office_3,
  office_4,
  office_5,
  office_6,
  office_7,
  office_8,
  table,
} from "../../services/Image-Nube/Image";
const Nube = () => {
  const herochildren = () => {
    return (
      <>
        <h2 className="mt-4">
          Digitaliza a tus clientes y experimenta los beneficios de nuestra
          solución
          <span className="fw-bold text-blue"> Infraestructura en la nube</span>
        </h2>
        <div className="mt-3">
          <ButtonOrangeBlank
            href="https://mx.ingrammicro.com/media/ExternalMediaLibrary/IM-Cloud-in-a-Box_.pdf?elqTrackId=026b054d1e0646d9bc7e30f1ead05929&elqaid=885&elqat=2"
            text="Conoce más"
          />
        </div>
      </>
    );
  };
  return (
    <>
      <Hero
        children={herochildren()}
        logo={logo_nube}
        backgroundUrl={bg_topnube}
      />
      <section id="nube_bannerSec">
        <div className="container my-5">
          <div className="row bannerSec_Nube position-relative p-4">
            <div
              style={{ zIndex: "99" }}
              className="nube position-relative col-md-7 offset-md-5"
            >
              <h3 className="text-blue fw-bold mb-3">
                Soluciones de Infraestructura en la nube
              </h3>
              <p className="fs-5 text-md-white fw-bold">
                La unidad de negocio de infraestructura en la nube (IaaS &amp;
                ISV’s) está comprometida con la transformación digital de los
                clientes, al ayudarlos con soluciones de infraestructura basadas
                en nube, con Microsoft Azure. La intención es que todos nuestros
                clientes den el salto a la nube y experimenten los beneficios en
                reducción de costos y esfuerzo, al llevar sus servicios a Azure.
              </p>
              <ButtonOrange
                href="mailto:IAAS.mx@ingrammicro.com"
                text="Contáctanos"
              ></ButtonOrange>
            </div>
          </div>
        </div>
      </section>
      <section className="seccion-soluciones-nube">
        <div className="container">
          <div className="row text-center py-5">
            <div className="col">
              <h3 className="azul fw-bold mb-3">
                Conoce algunas de nuestras soluciones
              </h3>
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-md-6">
              <a
                href="https://app.latam.ingrammicro.com/e/er?s=1099016198&amp;lid=8920&amp;elqTrackId=9ee37dee64e44c87a4113da810a74cdd&amp;elq=00000000000000000000000000000000&amp;elqaid=885&amp;elqat=2"
                target="_blank"
              >
                <Image
                  src={solucion_nube_1}
                  width="550"
                  height="180"
                  objectFit="contain"
                  className="img-fluid"
                  alt="ISVs"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="https://images.LatAm.ingrammicro.com/Web/IngramMicroLATAM/{15ce7588-2f1c-4f30-bd80-2f15a6dd5fc8}_soluciones_promoAzure_jun.pdf?elqTrackId=003ada3f81934f91ac529c905af7bad5&amp;elqaid=885&amp;elqat=2"
                target="_blank"
              >
                <Image
                  src={solucion_nube_2}
                  width="550"
                  height="180"
                  objectFit="contain"
                  className="img-fluid"
                  alt="Promo Azure"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="#paquetes">
                <Image
                  src={solucion_nube_3}
                  width="550"
                  height="180"
                  objectFit="contain"
                  className="img-fluid"
                  alt="Paquetes Azure"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://latam.ingrammicro.com/soluciones-im_nube_demoazure?elqTrackId=07276ad70ba14d6bbbaa5380c1f3e2e5&amp;elq=00000000000000000000000000000000&amp;elqaid=885&amp;elqat=2&amp;elqCampaignId=">
                <Image
                  src={solucion_nube_4}
                  width="550"
                  height="180"
                  objectFit="contain"
                  className="img-fluid"
                  alt="Demos Azure"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="paquetes">
        <div className="container my-5">
          <h3 className="text-blue text-center fw-bold">
            Ingram Cloud in a Box
          </h3>
          <p className="fs-5 text-center fw-bold mb-4">
            El catálogo “Ingram Cloud In a Box” cuenta con los servicios de
            mayor demanda en Azure, con la ventaja de poder ser completamente
            personalizados y ajustados a la necesidad de cada uno de los
            clientes.
          </p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <div className="card card-nube">
                <h5 className="card-header text-white fw-bold text-center bg-blue">
                  Azure Backup
                </h5>
                <div className="card-body fondo-gradient">
                  <p className="card-text text-center fw-bold">
                    Es una solución de copia de seguridad rentable, segura y con
                    un solo clic; es escalable en función de sus necesidades de
                    almacenamiento de copia de seguridad. La interfaz de
                    administración centralizada facilita la definición de
                    políticas de respaldo y protege una amplia gama de cargas de
                    trabajo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <div className="card card-nube">
                <h5 className="card-header text-white fw-bold text-center bg-green">
                  Azure Site Recovery
                </h5>
                <div className="card-body fondo-gradient">
                  <p className="card-text text-center fw-bold">
                    Ayuda a su empresa a seguir funcionando, incluso durante las
                    principales interrupciones de TI. Ofrece facilidad de
                    implementación, rentabilidad y confiabilidad. Implementa
                    procesos de replicación, conmutación por error y
                    recuperación a través de Site Recovery para ayudar a
                    mantener sus aplicaciones en ejecución durante
                    interrupciones planificadas y no planificadas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <div className="card card-nube">
                <h5 className="card-header text-white fw-bold text-center bg-celeste">
                  App Servicet
                </h5>
                <div className="card-body fondo-gradient">
                  <p className="card-text text-center fw-bold">
                    Una plataforma totalmente administrada para crear,
                    implementar y escalar sus aplicaciones web.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <div className="card card-nube">
                <h5 className="card-header text-white fw-bold text-center bg-orange">
                  Azure SQL Database
                </h5>
                <div className="card-body fondo-gradient">
                  <p className="card-text text-center fw-bold">
                    Es un servicio de base de datos relacional, inteligente y
                    escalable creado para la nube. Optimiza el rendimiento y la
                    durabilidad, con características dotadas de inteligencia
                    artificial y automatizadas que siempre están actualizadas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <div className="card card-nube">
                <h5 className="card-header text-white fw-bold text-center bg-violet">
                  Storage Account
                </h5>
                <div className="card-body fondo-gradient">
                  <p className="card-text text-center fw-bold">
                    Una cuenta de Azure Storage contiene todos los objetos de
                    datos de Azure Storage: blobs, archivos, colas, tablas y
                    discos. La cuenta de almacenamiento proporciona un espacio
                    de nombres único para sus datos de Azure Storage, al que se
                    puede acceder desde cualquier lugar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <div className="card card-nube">
                <h5 className="card-header text-white fw-bold text-center bg-darkBlue">
                  Windows Virtual Desktop
                </h5>
                <div className="card-body fondo-gradient">
                  <p className="card-text text-center fw-bold">
                    Acceda al escritorio y las aplicaciones de Windows 10 desde
                    cualquier lugar y en cualquier dispositivo con escritorios
                    virtuales en Azure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="office_Table">
        <div className="container my-5">
          <div className=" d-lg-none d-block">
            <Image
              objectFit="cover"
              src={table}
              className="img-fluid w-100 h-100"
              alt="table office"
            />
          </div>
          <div className="card border-light d-lg-block d-none">
            <div className="card-body fondo-gradient shadow">
              <div className="px-5 py-4 text-center">
                <table className="table table-responsive table-borderless table-striped">
                  <thead>
                    <tr>
                      <th scope="col">
                        <Image
                          objectFit="contain"
                          src={office_1}
                          className="img-fluid"
                          alt="Office"
                        />
                        <br /> Microsoft Office 2019
                      </th>
                      <th scope="col">
                        <Image
                          objectFit="contain"
                          src={office_2}
                          className="img-fluid"
                          alt="Word"
                        />
                        <br />
                        Word
                      </th>
                      <th scope="col">
                        <Image
                          objectFit="contain"
                          src={office_3}
                          className="img-fluid"
                          alt="Word"
                        />
                        <br />
                        Excel
                      </th>
                      <th scope="col">
                        <Image
                          objectFit="contain"
                          src={office_4}
                          className="img-fluid"
                          alt="Word"
                        />
                        <br />
                        One Note
                      </th>
                      <th scope="col">
                        <Image
                          objectFit="contain"
                          src={office_5}
                          className="img-fluid"
                          alt="Word"
                        />
                        <br />
                        Power Point
                      </th>
                      <th scope="col">
                        <Image
                          objectFit="contain"
                          src={office_6}
                          className="img-fluid"
                          alt="Word"
                        />
                        <br />
                        Outlook
                      </th>
                      <th scope="col">
                        <Image
                          objectFit="contain"
                          src={office_7}
                          className="img-fluid"
                          alt="Word"
                        />
                        <br />
                        Access
                      </th>
                      <th scope="col">
                        <Image
                          objectFit="contain"
                          src={office_8}
                          className="img-fluid"
                          alt="Word"
                        />
                        <br />
                        Publisher
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Office Home &amp; Student</th>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Office Home &amp; Business</th>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Office Standard</th>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td></td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Office Home Professional</th>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Office Home &amp; Professional Plus</th>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                      <td>
                        <Image
                          objectFit="contain"
                          src={check}
                          className="img-fluid"
                          alt="Office"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BannerContact
        href_Button="mailto:IAAS.mx@ingrammicro.com"
        url="mailto:IAAS.mx@ingrammicro.com"
        url_Text="IAAS.mx@ingrammicro.com"
      />
    </>
  );
};

export default Nube;
