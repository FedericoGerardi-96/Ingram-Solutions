import Image, { StaticImageData } from "next/image";
import style from "../styles/component/Hero.module.css";
import { ButtonOrange } from "./buttons/ButtonOrange";
interface Props {
  children: JSX.Element;
  backgroundUrl: StaticImageData;
  logo: StaticImageData;
}

export const Hero = ({ backgroundUrl, logo, children }: Props) => {
  return (
    <section id="heroWithButton">
      <div
        style={{ backgroundImage: `url('${backgroundUrl.src}')` }}
        className={`${style.hero} position-relative py-5`}
      >
        <div className="container p-3">
          <div className="row">
            <div
              style={{ zIndex: "99" }}
              className="hero_text position-relative col-md-6 col-12"
            >
              <Image
                src={logo}
                width="300"
                objectFit="contain"
                className="d-block w-100"
                alt="solucones preventa"
              />
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};