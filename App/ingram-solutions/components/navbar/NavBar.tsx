import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ingramLogo from "../../public/images/logo_soluciones.png";

export const NavBar = () => {
  const [burgerBtn, setburgerBtn] = useState(true);

  return (
    <header>
      <nav className="navbar navbar-expand-xl bg-light max-width">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image
                src={ingramLogo}
                className="img-fluid"
                alt="logo ingram soluciones"
                width={200}
                height={100}
              />
            </a>
          </Link>
          <button
            id="hamburger"
            className="menu-toggle d-xl-none d-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className={`ham hamRotate ham1 ${burgerBtn ? "" : "active"}`}
              viewBox="0 0 100 100"
              width="80"
              onClick={() => setburgerBtn(!burgerBtn)}
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav p-3 m-4">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link text-light dropdown-toggle px-lg-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Soluciones
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/iot">
                      <a className="dropdown-item">IoT</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/financiamiento">
                      <a className="dropdown-item">Soluciones Financieras</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/serviciosProfecionales">
                      <a className="dropdown-item">Servicios Profesionales</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nube">
                      <a className="dropdown-item">
                        Infraestructura en la Nube
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/videovigilancia">
                      <a className="dropdown-item" href="#">
                        Videovigilancia
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ciberseguridad">
                      <a className="dropdown-item" href="#">
                        Ciberseguridad
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/videovigilancia">
                      <a className="dropdown-item" href="#">
                        Datacenter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/videovigilancia">
                      <a className="dropdown-item" href="#">
                        Data Capture
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/videovigilancia">
                      <a className="dropdown-item" href="#">
                        Servicios Administrados
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/videovigilancia">
                      <a className="dropdown-item" href="#">
                        Digital Signage
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/videovigilancia">
                      <a className="dropdown-item" href="#">
                        Work from Anywhere
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Video Colaboración
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Networking
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/preventa">
                  <a
                    className="nav-link active text-light px-lg-4"
                    aria-current="page"
                  >
                    Preventa
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/training">
                  <a
                    className="nav-link active text-light px-lg-4"
                    aria-current="page"
                  >
                    Training
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/financiamiento">
                  <a
                    className="nav-link active text-light px-lg-4"
                    aria-current="page"
                  >
                    Financiamiento
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/SolutionCenter">
                  <a
                    className="nav-link active text-light px-lg-4"
                    aria-current="page"
                  >
                    Solution Center
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  href="https://mx.ingrammicro.com/site/cms?page=2022/IM/IM-220318&elqTrackId=f1d4b170dd87444692722c9b8be63d09&elqaid=910&elqat=2"
                  className="nav-link active text-light px-lg-4"
                  aria-current="page"
                >
                  Newsletter
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  href="https://mx.ingrammicro.com/site/cms?page=DirectorioSolucionesAvanzadas&elqTrackId=877781be3c5a432583b8c40ac61c37d5&elqaid=910&elqat=2"
                  style={{ border: "none" }}
                  className="nav-link active text-light px-lg-4"
                  aria-current="page"
                >
                  Directorio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
