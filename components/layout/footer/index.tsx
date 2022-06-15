import { FooterStyle } from "./styles";
import { Container } from "styles/global";
import Link from "next/link";
import Image from "next/image";

export function FooterComponent() {
  const menuItems = [
    {
      link: "/#solucoes",
      name: "Soluções",
    },
    {
      link: "/#sobre",
      name: "Quem Somos",
    },
    {
      link: "/#como-funciona",
      name: "Como Funciona",
    },
    {
      link: "/#simulador",
      name: "Simulador",
    },
    {
      link: "/#cases",
      name: "Cases",
    },
    {
      link: "/#contato",
      name: "Contato",
    },
  ];

  return (
    <FooterStyle>
      <a className="scroll-up" href="#header">
        <svg id="SVGDoc" width="60" height="60" version="1.1">
          <g>
            <g>
              <title>Elipse 13</title>
              <path
                d="M5,30c0,-13.80712 11.19288,-25 25,-25c13.80712,0 25,11.19288 25,25c0,13.80712 -11.19288,25 -25,25c-13.80712,0 -25,-11.19288 -25,-25z"
                fill="#153b19"
              ></path>
              <path
                d="M5,30c0,-13.80712 11.19288,-25 25,-25c13.80712,0 25,11.19288 25,25c0,13.80712 -11.19288,25 -25,25c-13.80712,0 -25,-11.19288 -25,-25z"
                fill="#18331b"
                stroke="#707070"
              ></path>
            </g>
            <g>
              <title>Icon awesome-arrow-circle-up</title>
              <path
                d="M17.37095,33.49597c-1.125,1.17339 -3,1.19758 -4.16129,0.04839l-1.31855,-1.33064c-1.1371,-1.125 -1.1371,-2.96371 0,-4.10081l16.06452,-16.05242c1.125,-1.1371 2.96371,-1.1371 4.1008,0l16.04033,16.05242c1.1371,1.125 1.1371,2.96371 0,4.10081l-1.31855,1.33064c-1.14919,1.14919 -3.02419,1.125 -4.14919,-0.04839l-8.75806,-9.13307v22.08871c0,1.60887 -1.29435,2.90322 -2.90322,2.90322h-1.93548c-1.60886,0 -2.90322,-1.29435 -2.90322,-2.90322v-22.08871l-8.75807,9.13307zM30,59.99999c16.57258,0 29.99999,-13.42741 29.99999,-29.99999c0,-16.57258 -13.42741,-30 -29.99999,-30c-16.57258,0 -30,13.42742 -30,30c0,16.57258 13.42742,29.99999 30,29.99999z"
                fill="#fca01f"
              ></path>
            </g>
          </g>
        </svg>
      </a>
      <div className="footer-container">
        <div className="box-footer">
          <div className="logo-footer">
            <Image
              src="/images/svgs/logo.svg"
              width={320}
              height={72}
              alt="logo da sanderson"
            />
          </div>

          <ul className="menu">
            {menuItems.map(({ link, name }, index) => {
              return (
                <li
                  className="paragraph-16-regular"
                  key={`link-footer-${index}`}
                >
                  <Link href={link}>
                    <a>{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="bottom-footer">
            <div className="termos-privacidade">
              <Link href="/politicas">
                <a>Política de privacidade</a>
              </Link>

              <Link href="/termos">
                <a>Termos de uso</a>
              </Link>
            </div>

            <Link href="https://codie.digital/" passHref>
              <a href="replaced" target="_blank">
                <Image
                  src="/images/svgs/codie.svg"
                  width={60}
                  height={30}
                  alt="logo da CODIE"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
