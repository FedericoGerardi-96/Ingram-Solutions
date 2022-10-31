import Image from "next/image";
import { BannerContact } from "../../components/BannerContact";
import { ButtonOrange } from "../../components/buttons/ButtonOrange";
import { Hero } from "../../components/Hero";
import {
  banner_sec,
  banner_top,
  bg_modal_solutioncenter,
  burbuja_1,
  burbuja_2,
  burbuja_3,
  burbuja_4,
  burbuja_5,
  burbuja_6,
  burbuja_7,
  burbuja_8,
  burbuja_9,
  Modal_demo_1,
  Modal_demo_2,
  Modal_demo_3,
  Modal_demo_4,
  Modal_demo_5,
  Modal_demo_6,
  Modal_demo_7,
  Modal_demo_8,
  Modal_demo_9,
  Modal_demo_10,
  Modal_demo_11,
  Modal_demo_12,
  Modal_demo_13,
  Modal_demo_14,
  Modal_demo_15,
  Modal_demo_16,
  Modal_demo_17,
  Modal_demo_18,
  Modal_demo_19,
  logo_solutioncenter,
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
  demo_1,
  demo_2,
  demo_3,
  demo_4,
  demo_5,
  demo_6,
  demo_7,
  demo_8,
  demo_9,
  demo_10,
  demo_11,
  demo_12,
  demo_13,
  demo_14,
  demo_15,
  demo_16,
  demo_17,
  demo_18,
  demo_19,
} from "../../services/Image-Solution-Center/Image";

const Solution_Center = () => {
  const Herochildren = () => {
    return (
      <>
        <h1 className="display-4 mt-4 fw-bold text-blue">Solution</h1>
        <h1 className="display-4 fw-bold text-blue">Center</h1>
      </>
    );
  };

  return (
    <>
      <Hero logo={logo_solutioncenter} backgroundUrl={banner_top}>
        <Herochildren />
      </Hero>
      <section id="SolutionCenter_ingramMicro_solutions_banner">
        <div className="container my-5">
          <div className="SolutionCenter_banner_Sec py-4 position-relative">
            <div className="row">
              <div className="col-0 col-md-7"></div>
              <div
                style={{ zIndex: "99" }}
                className="solutionCenter col-12 col-md-5 d-flex flex-column align-items-md-start align-items-center justify-content-md-start justify-content-center"
              >
                <p className="fw-5 text-md-white fw-bold">
                  Solution Center es un centro de datos Multi-Vendor, hecho a la
                  medida para cumplir con los requisitos específicos de nuestros
                  socios de negocio, donde a través de nuestros ingenieros
                  especializados podrás contar con:
                </p>
                <ul className="p-0">
                  <li className="list-group-item text-md-white fw-bold fs-6">
                    •Demostraciones en vivo
                  </li>
                  <li className="list-group-item text-md-white fw-bold fs-6">
                    •Pruebas de Valor (PoV)
                  </li>
                  <li className="list-group-item text-md-white fw-bold fs-6">
                    •Entrenamientos Hands On{" "}
                  </li>
                </ul>
                <ButtonOrange
                  href="mailto:coe.latam@ingrammicro.com"
                  text="Contáctanos"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="SolutionsCenter__bubbles">
        <div className="mt-5">
          <div className="SolutionsCenter_bubble_tittle">
            <h3 className="text-blue text-center fw-bold">
              Contamos con tecnologías y soluciones como:{" "}
            </h3>
          </div>
          <div className="SolutionsCenter_bubbles row justify-content-center align-items-center py-lg-0 py-4 px-2">
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_1}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#24b115" }}
                  className="fs-5 text-center fw-bold"
                >
                  Virtualización
                </h2>
              </div>
            </div>
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_2}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#ff8303" }}
                  className="fs-5 text-center fw-bold"
                >
                  Ciberseguridad
                </h2>
              </div>
            </div>
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_3}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#06baec" }}
                  className="fs-5 text-center fw-bold"
                >
                  Infraestructura
                </h2>
              </div>
            </div>
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_4}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#7359a2" }}
                  className="fs-5 text-center fw-bold"
                >
                  Servidores
                </h2>
              </div>
            </div>
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_5}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#2276ba" }}
                  className="fs-5 text-center fw-bold"
                >
                  Almacenamiento
                </h2>
              </div>
            </div>
          </div>
          <div className="SolutionsCenter_bubbles SolutionsCenter_bubble_2 row justify-content-center align-items-center py-lg-0 py-4 px-2">
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_6}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#7359a2" }}
                  className="fs-5 text-center fw-bold"
                >
                  Redes
                </h2>
              </div>
            </div>
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_7}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#2276ba" }}
                  className="fs-5 text-center fw-bold"
                >
                  Comunicaciones Unificadas
                </h2>
              </div>
            </div>
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_8}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#24b115" }}
                  className="fs-5 text-center fw-bold"
                >
                  Cloud
                </h2>
              </div>
            </div>
            <div className="SolutionsCenter_bubbles_card col-lg-2 col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <Image
                src={burbuja_9}
                width="150"
                height="150"
                objectFit="contain"
                alt="solucones preventa"
              />
              <div className="SolutionsCenter_bubble_text">
                <h2
                  style={{ color: "#ff8303" }}
                  className="fs-5 text-center fw-bold"
                >
                  Tecnologías Emergentes
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="training_partners">
        <div className="container my-5">
          <h3 className="text-blue text-center fw-bold">Soluciones demos</h3>
          <div className="row">
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_1"
              >
                <Image
                  src={demo_1}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_2"
              >
                <Image
                  src={demo_2}
                  width="250"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_3"
              >
                <Image
                  src={demo_3}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_4"
              >
                <Image
                  src={demo_4}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_5"
              >
                <Image
                  src={demo_5}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_6"
              >
                <Image
                  src={demo_6}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_7"
              >
                <Image
                  src={demo_7}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_8"
              >
                <Image
                  src={demo_8}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_9"
              >
                <Image
                  src={demo_9}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_10"
              >
                <Image
                  src={demo_10}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_11"
              >
                <Image
                  src={demo_11}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_12"
              >
                <Image
                  src={demo_12}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_13"
              >
                <Image
                  src={demo_13}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_14"
              >
                <Image
                  src={demo_14}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_15"
              >
                <Image
                  src={demo_15}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_16"
              >
                <Image
                  src={demo_16}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_17"
              >
                <Image
                  src={demo_17}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_18"
              >
                <Image
                  src={demo_18}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-md-4 mt-5">
              <div
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#Modal_19"
              >
                <Image
                  src={demo_19}
                  width="200"
                  height="200"
                  objectFit="contain"
                  className="Image-fluid"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        {/* modales */}
        <div
          className="modal fade"
          id="Modal_1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_1}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_2"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_2}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_3"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_3}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_4"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_4}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_5"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_5}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_6"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_6}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_7"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_7}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_8"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_8}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_9"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_9}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_10"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_10}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_11"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_11}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_12"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_12}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_13"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_13}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_14"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_14}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_15"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_15}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_16"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_16}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_17"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_17}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_18"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_18}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Modal_19"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm ">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center justify-content-center">
                <Image
                  src={Modal_demo_19}
                  className="Image-fluid w-100 h-100"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seccion-sponsor-iot">
        <div className="container ">
          <div className="row text-center  py-3">
            <div className="col-md-12">
              <h3 className="text-blue fw-bold">Aliados de negocios</h3>
            </div>
          </div>

          <div className="row wrapper py-2">
            <div className="col-md-12 text-center">
              <Image
                src={sponsor_1}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
              <Image
                src={sponsor_2}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
              <Image
                src={sponsor_3}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
              <Image
                src={sponsor_4}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
              <Image
                src={sponsor_5}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
              <Image
                src={sponsor_6}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
              <Image
                src={sponsor_7}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
              <Image
                src={sponsor_8}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />
              <Image
                src={sponsor_9}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_10}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_11}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_12}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_13}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_14}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_15}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_16}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_17}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_18}
                width="250"
                objectFit="contain"
                className="img-fluid"
                alt="sponsor"
              />{" "}
              <Image
                src={sponsor_19}
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
        text="Expande tus oportunidades
      con Preventa de Ingram Micro:"
        href_Button="mailto:coe.latam@ingrammicro.com"
        url="mailto:coe.latam@ingrammicro.com"
        url_Text="coe.latam@ingrammicro.com"
      />
    </>
  );
};

export default Solution_Center;
