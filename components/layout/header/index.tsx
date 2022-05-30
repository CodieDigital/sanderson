import * as S from "./style";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  headerType?: "home" | "internal";
}

export function HeaderComponent({ headerType }: HeaderProps) {
  const [menu, setMenu] = useState(false);

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
    <S.Header headerType={headerType} id="header">
      <div className="container-geral">
        <Link href="/" passHref>
          <a href="replaced">
            <div className="logo-menu">
              <Image
                src="/images/svgs/logo.svg"
                alt="logo do menu"
                width={315}
                height={74}
              />
            </div>
          </a>
        </Link>

        <div className={`menu-mobile ${menu ? "active" : ""}`}>
          <div className="filter">
            <div className="menu">
              <div
                className="close title-32-bold"
                onClick={() => setMenu(false)}
              >
                X
              </div>

              <div className="menu">
                <nav className="link-1-bold-graphie">
                  <ul>
                    {menuItems.map(({ link, name }, index) => {
                      return (
                        <li
                          className="link-16-medium"
                          key={`menuLinks-${index}`}
                        >
                          <Link href={link}>
                            <a>{name}</a>
                          </Link>
                        </li>
                      );
                    })}
                    <li className="link-16-medium bt-cliente">
                      <Link href="/area-cliente">
                        <a>Área do Cliente</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-desktop">
          <nav className="hide-1024">
            <ul>
              {menuItems.map(({ link, name }, index) => {
                return (
                  <li className="link-16-medium" key={`menuLinks-${index}`}>
                    <Link href={link}>
                      <a>{name}</a>
                    </Link>
                  </li>
                );
              })}
              <li className="link-16-medium li-button">
                <Link href="/area-cliente" passHref>
                  <a href="replaced" className="bt-cliente">
                    Área do Cliente
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="block-bar show-1024" onClick={() => setMenu(!menu)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </S.Header>
  );
}
