import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonGreenBlank } from "../components/buttons/ButtonGreen";
import { Carousel } from "../components/Carousel";
import {
  homeopcion_card_1,
  homeopcion_card_2,
} from "../services/Image-Home/Image";

const Home: NextPage = () => {
  return (
    <>
      <Carousel />
      <section id="home_cards">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-around my-5">
            <a
              style={{ cursor: "pointer" }}
              target="_blank"
              href="https://mx.ingrammicro.com/site/cms?page=2022/IM/IM-220318&elqTrackId=a697ce955fc440658ae22054b098fb97&elqaid=864&elqat=2"
            >
              <Image
                src={homeopcion_card_1}
                width="500"
                objectFit="contain"
                className="img-fluid m-4"
                alt=""
              />
            </a>
            <Link style={{ cursor: "pointer" }} href="/SolutionCenter">
              <a>
                <Image
                  src={homeopcion_card_2}
                  width="500"
                  objectFit="contain"
                  className="img-fluid m-4"
                  alt="demo"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="home_specialist_banner">
        <div className="banner-buttom position-relative h-100 w-100 my-5 p-5">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-0"></div>
            <div className="col-lg-5 col-md-7 col-12 d-flex flex-column align-items-center justify-content-center">
              <h1 className="specialist_solutions text-md-white position-relative display-6 fw-normal">
                ¡Acércate a nuestros
                <span className="specialist_orange fw-bold">
                  {" "}
                  especialistas{" "}
                </span>
                para una
                <span className="solutions_blue fw-bold"> solución </span> a tu
                proyecto!
              </h1>
              <div className="home postion-relative" style={{ zIndex: "99" }}>
                <ButtonGreenBlank
                  text="Contáctanos"
                  href="https://mx.ingrammicro.com/site/cms?page=DirectorioSolucionesAvanzadas&elqTrackId=f6de26b7ebd44af7ad5fe272f58f417a&elqaid=864&elqat=2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
