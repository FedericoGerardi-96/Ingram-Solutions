import Image from "next/image";
import Link from "next/link";
import {
  home_slide_1,
  home_slide_2,
  home_slide_3,
  home_slide_4,
  home_slide_5,
  home_slide_6,
  home_slide_7,
  home_slide_8,
  home_slide_9,
  home_slide_10,
  home_slide_11,
  home_slide_12,
  home_slide_13,
  home_slide_14,
  home_slide_15,
  home_slide_16,
} from "../services/Image-Home/Image";

export const Carousel = () => {
  return (
    <section id="home_carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide max-width w-100"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="10"
            aria-label="Slide 11"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="11"
            aria-label="Slide 12"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="12"
            aria-label="Slide 13"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="13"
            aria-label="Slide 14"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="14"
            aria-label="Slide 15"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="15"
            aria-label="Slide 16"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item w-100 active"
            style={{ cursor: "pointer" }}
          >
            <Link href="/iot">
              <Image
                src={home_slide_1}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/serviciosProfecionales">
              <Image
                src={home_slide_2}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/videovigilancia">
              <Image
                src={home_slide_3}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="carousel-item w-100 active"
          >
            <Link href="/financiamiento">
              <Image
                src={home_slide_4}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/nube">
              <Image
                src={home_slide_5}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/ciberseguridad">
              <Image
                src={home_slide_6}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/datacenter">
              <Image
                src={home_slide_7}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/networking">
              <Image
                src={home_slide_8}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/preventa">
              <Image
                src={home_slide_9}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/SolutionCenter">
              <Image
                src={home_slide_10}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/videocolaboracion">
              <Image
                src={home_slide_11}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div style={{ cursor: "pointer" }} className="carousel-item w-100">
            <Link href="/digitalsignage">
              <Image
                src={home_slide_12}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div style={{ cursor: "pointer" }} className="carousel-item w-100">
            <Link href="/datacapture">
              <Image
                src={home_slide_13}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div style={{ cursor: "pointer" }} className="carousel-item w-100">
            <Link href="/workfromanywhere">
              <Image
                src={home_slide_14}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/serviciosadministrativos">
              <Image
                src={home_slide_15}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
          <div className="carousel-item w-100 " style={{ cursor: "pointer" }}>
            <Link href="/serviciosProfecionales">
              <Image
                src={home_slide_16}
                objectFit="cover"
                className="d-block w-100"
                alt=""
              />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
