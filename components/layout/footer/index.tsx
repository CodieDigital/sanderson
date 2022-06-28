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
    // {
    //   link: "/#simulador",
    //   name: "Simulador",
    // },
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
        <Image src="/images/up-arrow.png" width={60} height={60} alt="" />
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
