import { MouseEventHandler, useEffect, useState } from "react";

import { LayoutComponent } from "@components/layout";

import { api } from "services/api";
import { HomeProps } from "interfaces/pages/home";

import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputMask from "react-input-mask";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";

//Popup
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// Sections
import { BannerHome } from "@styles/conteudo/banner";
import { Solucoes } from "@styles/conteudo/solucoes/styles";
import { Sobre } from "@styles/conteudo/sobre/styles";
import { Galeria } from "@styles/conteudo/galeria/styles";
import { Simulador } from "@styles/conteudo/simulador/styles";
import { Depoimentos } from "@styles/conteudo/depoimentos/styles";
import { Contato } from "@styles/conteudo/contato/styles";

//Components
import { ButtonComponent } from "@components/data/button";
import { Container } from "@styles/global";

export default function HomePage() {
  // const [response, setResponse] = useState<HomeProps>({});

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await api.get<HomeProps>("/home");
  //   })();
  // }, []);

  const bannersHome = [
    {
      id: "1",
      bannerSrcDesktop: "/images/banners/banner.jpeg",
      bannerSrcMobile: "/images/banners/banner-mobile.jpg",
    },
  ];

  const solutionsItems = [
    {
      id: "1",
      iconSrc: "/images/svgs/solucoes-1.svg",
      titulo: "instalação residencial",
    },
    {
      id: "2",
      iconSrc: "/images/svgs/solucoes-2.svg",
      titulo: "instalação industrial",
    },
    {
      id: "3",
      iconSrc: "/images/svgs/solucoes-3.svg",
      titulo: "instalação comercial",
    },
    {
      id: "4",
      iconSrc: "/images/svgs/solucoes-4.svg",
      titulo: "usina de solo",
    },
    {
      id: "5",
      iconSrc: "/images/svgs/solucoes-5.svg",
      titulo: "garagem solar",
    },
  ];

  const benefitBoxes = [
    {
      id: "1",
      iconSrc: "/images/svgs/sobre-1.svg",
      titulo: "EQUIPE ESPECIALIZADA",
      texto:
        "Contamos com engenheiros eletricistas e civis acompanhando a obra a todo momento.",
    },
    {
      id: "2",
      iconSrc: "/images/svgs/sobre-2.svg",
      titulo: "LOGÍSTICA PRÓPRIA",
      texto:
        "Toda logística de caminhões, muncks e etc é nossa. Isso traz facilidade, agilidade e segurança para as instalações.",
    },
    {
      id: "3",
      iconSrc: "/images/svgs/sobre-3.svg",
      titulo: "PROJETO DE VISUALIZAÇÃO",
      texto:
        "Em nossa equipe, contamos com projetistas para desenvolver um projeto de visualização antes do instalação ser executada.",
    },
    {
      id: "4",
      iconSrc: "/images/svgs/sobre-4.svg",
      titulo: "EQUIPAMENTO DE QUALIDADE",
      texto:
        "Hoje no mercado existem diversas marcas, nós sempre priorizamos trabalhar com as melhores do mercado, trazendo mais segurança e comodidade para os nossos clientes.",
    },
    {
      id: "5",
      iconSrc: "/images/svgs/sobre-5.svg",
      titulo: "SUPORTE 100% PELA EMPRESA",
      texto:
        "Garantimos todo o suporte que o nosso cliente e o projeto necessita, ou seja, assumimos a responsabilidade de um projeto de excelência.",
    },
    {
      id: "6",
      iconSrc: "/images/svgs/sobre-6.svg",
      titulo: "GARANTIA SOLIDÁRIA",
      texto:
        "O contratado de garantia solidária permite que o cliente acione a garantia direto com a Sanderson Solar, trazendo mais segurança e respaldo na resolução do problema.",
    },
  ];

  const stepsSubtitles = [
    {
      order: "first",
      titulo: "1. painel solar",
      texto:
        "Painel solar ou módulo fotovoltaico é um dispositivo composto por células de silício que absorvem a energia da luz do sol para transformá-la em energia elétrica.",
    },
    {
      order: "second",
      titulo: "2. inversor solar",
      texto:
        "Transforma a energia da luz solar (corrente contínua – CC) em energia elétrica (corrente alternada – CA), necessária para a utilização de aparelhos eletrodomésticos ou industriais.",
    },
    {
      order: "third",
      titulo: "3. relógio bidirecional",
      texto:
        "Medidor de energia que registra tanto a energia gerada pela placa solar, que é creditada na distribuidora, como a energia recebida da distribuidora, utilizada em dias de mal tempo ou no período noturno.",
    },
    {
      order: "fourth",
      titulo: "4. rede elétrica",
      texto:
        "A energia gerada pela placa solar que não for consumida pelo imóvel será transformada em crédito de quantidade de energia ativa, a ser consumida por um prazo de até 60 meses, conforme a resolução da ANEEL",
    },
  ];

  const projectGalleryImages = [
    {
      id: "1",
      title: "Estância Santa Paula",
      logoCliente: "",
      potencia: "44.55",
      areaMinima: "558",
      quantidadePaineis: "135",
      wattsPaineis: "330",
      producaoMensal: "5.430",
      imageSrc: "/images/PROJETOS REALIZADOS/ESTANCIA SANTA PAULA/31.jpeg",
      projectImages: [
        {
          imageProjectSrc:
            "/images/PROJETOS REALIZADOS/ESTANCIA SANTA PAULA/31.jpeg",
        },
        {
          imageProjectSrc:
            "/images/PROJETOS REALIZADOS/ESTANCIA SANTA PAULA/DJI_0164.jpg",
        },
        {
          imageProjectSrc:
            "/images/PROJETOS REALIZADOS/ESTANCIA SANTA PAULA/FOTO 02.png",
        },
      ],
    },
    {
      id: "2",
      title: "Motel Troia",
      logoCliente: "",
      potencia: "134.1",
      areaMinima: "835",
      quantidadePaineis: "298",
      wattsPaineis: "450",
      producaoMensal: "14.718",
      imageSrc: "/images/PROJETOS REALIZADOS/MOTEL TROIA/DJI_0808.JPG",
      projectImages: [
        {
          imageProjectSrc:
            "/images/PROJETOS REALIZADOS/MOTEL TROIA/DJI_0808.JPG",
        },
        {
          imageProjectSrc:
            "/images/PROJETOS REALIZADOS/MOTEL TROIA/DJI_0811.JPG",
        },
        {
          imageProjectSrc:
            "/images/PROJETOS REALIZADOS/MOTEL TROIA/DJI_0813.JPG",
        },
        {
          imageProjectSrc:
            "/images/PROJETOS REALIZADOS/MOTEL TROIA/DJI_0815.JPG",
        },
      ],
    },
    {
      id: "3",
      title: "Solog",
      logoCliente: "/images/PROJETOS REALIZADOS/SOLOG/solog-logo.png",
      potencia: "1.600,04",
      areaMinima: "12.900",
      quantidadePaineis: "4706",
      wattsPaineis: "340",
      producaoMensal: "187.000",
      imageSrc: "/images/PROJETOS REALIZADOS/SOLOG/DJI_0248 - Copia.JPG",
      projectImages: [
        {
          imageProjectSrc:
            "/images/PROJETOS REALIZADOS/SOLOG/DJI_0248 - Copia.JPG",
        },
        {
          imageProjectSrc: "/images/PROJETOS REALIZADOS/SOLOG/DJI_0259.JPG",
        },
        {
          imageProjectSrc: "/images/PROJETOS REALIZADOS/SOLOG/DJI_0270.JPG",
        },
      ],
    },
  ];

  const reviewsContent = [
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
      author: "Herique Souza, Empreaa Inc.",
      videoSrc: "https://www.youtube.com/embed/RpC7sv8_LIg",
    },
  ];

  return (
    <LayoutComponent headerType="home">
      <BannerHome>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect={"fade"}
          autoplay={true}
          loop={true}
          allowTouchMove={false}
        >
          {bannersHome.map(({ id, bannerSrcDesktop, bannerSrcMobile }) => {
            return (
              <SwiperSlide key={id}>
                <Link href="#contato" passHref>
                  <a href="replaced">
                    {/* <picture>
                  <source
                    srcSet={bannerSrcMobile}
                    media="(max-width: 1024px)"
                  />
                  <Image src={bannerSrcDesktop} layout="fill" alt="banner" />
                </picture> */}
                    <Image
                      src={bannerSrcMobile}
                      className="mobile-banner"
                      layout="fill"
                      alt="banner"
                    />
                    <Image
                      src={bannerSrcDesktop}
                      className="desktop-banner"
                      layout="fill"
                      alt="banner"
                    />
                  </a>
                </Link>
                <Container>
                  <Link href="#solucoes" passHref>
                    <a className="scroll">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                      >
                        <g
                          id="Icon_feather-arrow-down"
                          data-name="Icon feather-arrow-down"
                          transform="translate(-6 -6)"
                        >
                          <path
                            id="Caminho_16"
                            data-name="Caminho 16"
                            d="M17.375,20a.875.875,0,0,1-.875-.875V6.875a.875.875,0,0,1,1.75,0v12.25A.875.875,0,0,1,17.375,20Z"
                            transform="translate(-4.375 0)"
                            fill="#f5f5f5"
                          />
                          <path
                            id="Caminho_17"
                            data-name="Caminho 17"
                            d="M13,24.375a.872.872,0,0,1-.619-.256L6.256,17.994a.875.875,0,1,1,1.237-1.237L13,22.263l5.506-5.506a.875.875,0,1,1,1.237,1.237l-6.125,6.125A.872.872,0,0,1,13,24.375Z"
                            transform="translate(0 -4.375)"
                            fill="#f5f5f5"
                          />
                        </g>
                      </svg>

                      <span>Scroll</span>
                    </a>
                  </Link>
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </BannerHome>

      <Solucoes id="solucoes">
        <div className="detail-right">
          <Image
            src="/images/svgs/green-elipse-solutions-right.svg"
            alt="detalhe"
            width={2426}
            height={2109}
          />
        </div>
        <div className="detail-bottom">
          <Image
            src="/images/svgs/green-elipse-solutions-right.svg"
            alt="detalhe"
            width={2426}
            height={2109}
          />
        </div>

        <div className="container-geral">
          <div className="middle-title">
            <h2 className="titulo-48-bold">Nossas Soluções</h2>
          </div>

          <div className="solutions-grid">
            {solutionsItems.map(({ iconSrc, titulo }, index) => {
              return (
                <div
                  className="solutions-box desaparecer-600"
                  key={`solution-boxes-${index}`}
                >
                  <Image
                    src={iconSrc}
                    width={80}
                    height={80}
                    alt="ilustração da solução"
                  />
                  <h3 className="titulo-32-bold">{titulo}</h3>
                </div>
              );
            })}

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              navigation={true}
              className="aparecer-600"
            >
              {solutionsItems.map(({ iconSrc, titulo }, index) => {
                return (
                  <SwiperSlide key={`solution-boxes-${index}`}>
                    <div
                      className="solutions-box"
                      key={`solution-boxes-${index}`}
                    >
                      <Image
                        src={iconSrc}
                        width={80}
                        height={80}
                        alt="ilustração da solução"
                      />
                      <h3 className="titulo-32-bold">{titulo}</h3>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="orcamento">
            <ButtonComponent href="#contato" text="solicite um orçamento" />

            <Link href="#simulador">
              <a className="simule link-16-regular">Simule sua instalação</a>
            </Link>
          </div>
        </div>
      </Solucoes>

      <Sobre id="sobre">
        <div
          className="quem-somos"
          style={{ backgroundImage: `url("/images/sobre-bg.jpg")` }}
        >
          <Container className="container-geral">
            <span className="upper-title">
              conheça um pouco da nossa história
            </span>

            <div className="title-text">
              <div className="-title">
                <h2 className="titulo-48-bold">
                  Somos um grupo com mais de 40 anos de experiência
                </h2>
              </div>

              <div className="text-box">
                <div className="text paragraph-16-regular">
                  <p>
                    A GS Solar nasceu como um braço do tradicional Grupo
                    Sanderson. Surgiu no momento em que o Grupo decidiu instalar
                    sua própria usina. Durante o processo viu-se uma
                    oportunidade de investir no mercado que mais cresce no
                    Brasil. Diante disso e com ajuda de especialistas no setor,
                    criou um método que trás economia e rentabilidade através da
                    sustentabilidade e energia limpa.
                  </p>

                  <p>
                    Com o foco em realizar os sonhos das pessoas em produzirem
                    sua própria energia, a GS Solar vem investindo em
                    conhecimento, infraestrutura e tecnologia para trazer ainda
                    mais inovações para o setor fotovoltaico.
                  </p>

                  <p>
                    Atualmente contamos com uma equipe de mais de 70
                    funcionários. Atendemos o mercado em todos os segmentos,
                    garantindo segurança ao cliente do começo ao fim do projeto,
                    com isso, levamos a história do grupo para todo o Brasil.
                  </p>

                  <p className="bold">
                    Comprar uma solução fotovoltaico é o mesmo que investir!
                  </p>
                </div>

                <div className="buttons">
                  <ButtonComponent href="#contato" text="vamos conversar" />

                  <Link href="#simulador">
                    <a className="simule link-16-regular">
                      Simule sua instalação
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="benefits-wrapper">
              {benefitBoxes.map(({ iconSrc, titulo, texto }, index) => {
                return (
                  <div
                    className="benefit-box desaparecer-600"
                    key={`box-${index}`}
                  >
                    <div className="image">
                      <Image
                        src={iconSrc}
                        width={80}
                        height={80}
                        alt="icone do benefício"
                      />
                    </div>
                    <div className="title titulo-24-bold">{titulo}</div>
                    <div className="description paragraph-16-regular">
                      {texto}
                    </div>
                  </div>
                );
              })}

              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                navigation={true}
                className="aparecer-600"
              >
                {benefitBoxes.map(({ iconSrc, titulo, texto }, index) => {
                  return (
                    <SwiperSlide key={`solution-boxes-${index}`}>
                      <div className="benefit-box" key={`box-${index}`}>
                        <div className="image">
                          <Image
                            src={iconSrc}
                            width={80}
                            height={80}
                            alt="icone do benefício"
                          />
                        </div>
                        <div className="title titulo-24-bold">{titulo}</div>
                        <div className="description paragraph-16-regular">
                          {texto}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="link-investimento">
              <span>
                Sistema fotovoltaico é um ótimo investimento,
                <Link href="#contato">
                  <a>vamos conversar.</a>
                </Link>
              </span>
            </div>
          </Container>
        </div>

        <div className="como-funciona" id="como-funciona">
          <div className="detail-left">
            <Image
              src="/images/svgs/green-elipse-solutions-left.svg"
              alt="detalhe"
              width={2426}
              height={2109}
            />
          </div>

          <div className="detail-right">
            <Image
              src="/images/details/green-elipse-solutions-right.png"
              alt="detalhe"
              width={582}
              height={2109}
              layout="responsive"
            />
          </div>

          <div className="container-geral">
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/Zv11L-ZfrSg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="passo-a-passo">
              <div className="middle-title">
                <h2 className="titulo-48-bold">Como Funciona</h2>
              </div>

              <div className="steps-box">
                <div className="image desktop-image">
                  <Image
                    src="/images/svgs/como-funciona.svg"
                    width={1340}
                    height={462}
                    alt="imagem ilustrativa de como funciona"
                  />
                </div>

                <div className="mobile-image image">
                  <Image
                    src="/images/svgs/como-funciona-mobile.svg"
                    width={1376}
                    height={451}
                    alt="imagem ilustrativa de como funciona"
                  />
                </div>

                <div className="subtitles">
                  <ul>
                    {stepsSubtitles.map(({ order, titulo, texto }, index) => {
                      return (
                        <li id={order} key={`steps-${index}`}>
                          <h3 className="titulo-24-bold">{titulo}</h3>

                          <p className="paragraph-16-regular">{texto}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sobre>
      {/* 
      <Simulador
        style={{
          backgroundImage: `url("images/banner-simulador.jpg")`,
        }}
        id="simulador"
      >
        <Container className="container-geral">
          <span className="upper-title">simulador</span>

          <div className="title-text">
            <div className="-title">
              <h2 className="titulo-48-bold">
                descubra quanto custa para instalar energia solar?
              </h2>
            </div>

            <div className="text-box">
              <div className="text paragraph-16-regular">
                <p>
                  Preencha o formulário e descubra o valor do investimento, a
                  quantidade de painéis que devem ser instalados, a previsão de
                  geração de energia e quanto será sua economia anual.
                </p>
              </div>

              <div className="buttons">
                <ButtonComponent href="#contato" text="solicite um orçamento" />
              </div>
            </div>
          </div>

          <div className="formulario-previsao">
            <div className="formulario">
              <form>
                <div className="box-form">
                  <label
                    htmlFor="localInstalacao"
                    className="paragraph-16-bold"
                  >
                    Onde pretende realizar a instalação?
                  </label>
                  <input
                    type="text"
                    name="localInstalacao"
                    className="paragraph-16-regular"
                    placeholder="Digite o CEP, cidade, bairro ou rua"
                  />
                </div>

                <div className="box-form">
                  <label
                    htmlFor="gastoMedioMensal"
                    className="paragraph-16-bold"
                  >
                    Quanto é o seu gasto médio mensal com conta de luz?
                  </label>
                  <input
                    type="text"
                    name="gastoMedioMensal"
                    className="paragraph-16-regular"
                    placeholder="R$"
                  />
                </div>

                <div className="box-form">
                  <label
                    htmlFor="gastoMedioMensal"
                    className="paragraph-16-bold"
                  >
                    Qual é o tipo do local que irá instalar o gerador?
                  </label>

                  <div className="opcoes-local">
                    <div className="opcao">
                      <div className="imagem">
                        <Image
                          src="/images/svgs/opcoes-instalacao-1.svg"
                          alt="imagem da opção"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="legenda paragraph-16-regular">
                        Residencial
                      </div>
                    </div>

                    <div className="opcao">
                      <div className="imagem">
                        <Image
                          src="/images/svgs/opcoes-instalacao-2.svg"
                          alt="imagem da opção"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="legenda paragraph-16-regular">
                        Empresarial
                      </div>
                    </div>

                    <div className="opcao">
                      <div className="imagem">
                        <Image
                          src="/images/svgs/opcoes-instalacao-3.svg"
                          alt="imagem da opção"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="legenda paragraph-16-regular">
                        Área isolada (sem rede elétrica)
                      </div>
                    </div>
                  </div>
                </div>

                <input type="submit" className="bt" value="simular" />
              </form>
            </div>

            <div className="previsao">
              <table>
                <thead>
                  <tr>
                    <th className="paragraph-20-regular" colSpan={2}>
                      Previsão de Geração de energia
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="paragraph-16-book">
                    <th>Jan</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Fev</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Mar</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Abr</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Mai</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Jun</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Jul</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Ago</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Set</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Out</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Nov</th>
                    <td> </td>
                  </tr>
                  <tr className="paragraph-16-book">
                    <th>Dez</th>
                    <td> </td>
                  </tr>
                </tbody>
              </table>

              <div className="potencia">
                <div className="box-potencia">
                  <h4 className="paragraph-20-regular">Potência Instalada</h4>
                  <div>
                    <span className="titulo-40-bold">0</span>
                    <span>kWp</span>
                  </div>
                </div>

                <div className="box-potencia">
                  <h4 className="paragraph-20-regular">
                    Área mínima necessária
                  </h4>
                  <div>
                    <span className="titulo-40-bold">0</span>
                    <span>m²</span>
                  </div>
                </div>

                <div className="box-potencia">
                  <h4 className="paragraph-20-regular">
                    Quantidade de painéis
                  </h4>
                  <div>
                    <span className="titulo-40-bold">0</span>
                    <span>módulos de 340W</span>
                  </div>
                </div>

                <div className="box-potencia">
                  <h4 className="paragraph-20-regular">Produção mensal</h4>
                  <div>
                    <span className="titulo-40-bold">0</span>
                    <span>kWh/mês</span>
                  </div>
                </div>

                <div className="box-potencia">
                  <h4 className="paragraph-20-regular">Tempo de payback</h4>
                  <div>
                    <span className="titulo-40-bold">0</span>
                    <span>meses</span>
                  </div>
                </div>
                <div className="box-potencia">
                  <h4 className="paragraph-20-regular">Economia anual</h4>
                  <div>
                    <span className="titulo-40-bold">R$ 0,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Simulador> */}

      <Galeria id="cases">
        <div className="detail-right">
          <Image
            src="/images/details/green-elipse-solutions-right.png"
            alt="detalhe"
            width={582}
            height={2109}
            layout="responsive"
          />
        </div>

        <Container>
          <div className="middle-title">
            <h2 className="titulo-48-bold">Projetos que realizamos</h2>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={true}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projectGalleryImages.map(
              (
                {
                  imageSrc,
                  projectImages,
                  potencia,
                  areaMinima,
                  quantidadePaineis,
                  producaoMensal,
                  wattsPaineis,
                  logoCliente,
                  title,
                },
                index
              ) => {
                return (
                  <SwiperSlide key={`images-galery-${index}`}>
                    <Image
                      src={imageSrc}
                      width={450}
                      height={534}
                      alt="imagem da galeria"
                    />
                    <div className="image-label">
                      <Image
                        src={
                          !logoCliente
                            ? (logoCliente = "/images/svgs/logo-verde.svg")
                            : logoCliente
                        }
                        width={214}
                        height={50}
                        alt="logo do cliente"
                        className="logo"
                      />
                    </div>
                    <div className="saiba-mais">
                      <Popup
                        trigger={
                          <span className="paragraph-18-bold">Saiba mais</span>
                        }
                        modal
                        nested
                      >
                        {(
                          close:
                            | MouseEventHandler<HTMLButtonElement>
                            | undefined
                        ) => (
                          <div className="modal-galeria">
                            <button
                              className="close paragraph-14-regular"
                              onClick={close}
                            >
                              x
                            </button>
                            <div className="header">
                              <h3 className="place-title titulo-48-bold">
                                {title}
                              </h3>
                            </div>
                            <div className="content">
                              <Row>
                                <Col md={4}>
                                  <div className="infos-block">
                                    {potencia.length > 0 && (
                                      <div className="box-info">
                                        <div className="info-titulo paragraph-20-regular">
                                          Potência instalada
                                        </div>
                                        <div className="numero">
                                          <span className="titulo-40-bold">
                                            {potencia}
                                          </span>
                                          <span className="paragraph-24-light">
                                            kWp
                                          </span>
                                        </div>
                                      </div>
                                    )}

                                    {areaMinima.length > 0 && (
                                      <div className="box-info">
                                        <div className="info-titulo paragraph-20-regular">
                                          Área mínima necessária
                                        </div>
                                        <div className="numero">
                                          <span className="titulo-40-bold">
                                            {areaMinima}
                                          </span>
                                          <span className="paragraph-24-light">
                                            m²
                                          </span>
                                        </div>
                                      </div>
                                    )}

                                    {quantidadePaineis.length > 0 &&
                                      wattsPaineis.length > 0 && (
                                        <div className="box-info">
                                          <div className="info-titulo paragraph-20-regular">
                                            Quantidade de painéis
                                          </div>
                                          <div className="numero">
                                            <span className="titulo-40-bold">
                                              {quantidadePaineis}
                                            </span>
                                            <span className="paragraph-24-light">
                                              módulos de {wattsPaineis}W
                                            </span>
                                          </div>
                                        </div>
                                      )}

                                    {producaoMensal.length > 0 && (
                                      <div className="box-info">
                                        <div className="info-titulo paragraph-20-regular">
                                          Produção mensal
                                        </div>
                                        <div className="numero">
                                          <span className="titulo-40-bold">
                                            {producaoMensal}
                                          </span>
                                          <span className="paragraph-24-light">
                                            kWh/mês
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </Col>

                                <Col md={7}>
                                  <Swiper
                                    spaceBetween={5}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={true}
                                    pagination={true}
                                    allowTouchMove={true}
                                  >
                                    {projectImages.map(
                                      ({ imageProjectSrc }, index) => {
                                        return (
                                          <SwiperSlide key={`images-${index}`}>
                                            <Image
                                              src={imageProjectSrc}
                                              width={450}
                                              height={534}
                                              alt="imagem da galeria"
                                            />
                                          </SwiperSlide>
                                        );
                                      }
                                    )}
                                  </Swiper>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>

          <div className="orcamento">
            <ButtonComponent href="#contato" text="solicite um orçamento" />

            <Link href="#simulador">
              <a className="simule link-16-regular">Simule sua instalação</a>
            </Link>
          </div>
        </Container>
      </Galeria>

      {/* <Depoimentos
        style={{
          backgroundImage: `url("images/banner-depoimentos.jpg")`,
        }}
      >
        <Container className="container-geral">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={false}
            navigation={true}
          >
            {reviewsContent.map(({ text, author, videoSrc }, index) => {
              return (
                <SwiperSlide key={`reviews-${index}`}>
                  <div className="inside-slide">
                    <div className="text">
                      <div>
                        <Image
                          src="/images/svgs/aspas.svg"
                          width={36}
                          height={30}
                          alt="aspas"
                        />

                        <div className="-title">
                          <h2 className="titulo-40-bold">{text}</h2>
                        </div>
                      </div>

                      <h4 className="paragraph-20-regular">— {author}</h4>
                    </div>

                    <div className="video">
                      <iframe
                        src={videoSrc}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </Depoimentos> */}

      <Contato id="contato">
        <Container>
          <Row className="bloco-contato">
            <Col md="4" className="contact-info">
              <div className="paragraph-20-regular">
                Comunicação com o cliente é um dos princípios da Sanderson
                Solar, os clientes sabem cada detalhe de prazos e andamentos do
                processo por completo.
              </div>

              <ul>
                <li>
                  <Link href="tel:4333670523">
                    <a className="link-20-regular" target="_blank">
                      <svg
                        id="SVGDoc"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                      >
                        <defs></defs>
                        <g>
                          <g>
                            <title>phone</title>
                            <path
                              d="M19.42954,14.13319v0l-4.37505,-1.87502c-0.38394,-0.16363 -0.82981,-0.05375 -1.09376,0.26954l-1.93752,2.36722c-3.04076,-1.43369 -5.48788,-3.8808 -6.92157,-6.92157l2.36722,-1.93753c0.32399,-0.26351 0.43399,-0.70989 0.26953,-1.09376l-1.87502,-4.37505c-0.18122,-0.41548 -0.63223,-0.64344 -1.07423,-0.54298l-4.06255,0.93751c-0.42539,0.09823 -0.72667,0.4771 -0.72657,0.91368c0,10.01965 8.12119,18.12522 18.12523,18.12522c0.43674,0.00028 0.81581,-0.30104 0.91408,-0.72657l0.93751,-4.06255c0.09981,-0.44413 -0.12985,-0.89656 -0.54727,-1.07814z"
                              fill="#153b19"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span>(43) 3367-0523 </span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://api.whatsapp.com/send?phone=554333670523">
                    <a className="link-20-regular" target="_blank">
                      <svg
                        id="SVGDoc"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                      >
                        <defs></defs>
                        <g>
                          <g>
                            <title>whatsapp</title>
                            <path
                              d="M15.06357,13.44241c-0.23098,0.57263 -1.27563,1.09523 -1.73656,1.11929c-0.46045,0.02442 -0.47357,0.35687 -2.98393,-0.73366c-2.51005,-1.0908 -4.02018,-3.74304 -4.13924,-3.91384c-0.11915,-0.17018 -0.97232,-1.38603 -0.92629,-2.6096c0.04634,-1.22379 0.71638,-1.80116 0.95554,-2.04129c0.23888,-0.24049 0.51277,-0.28357 0.68,-0.28629c0.19768,-0.00321 0.32571,-0.00589 0.47201,-0.00049c0.14616,0.00554 0.36571,-0.03058 0.5558,0.47496c0.19,0.50549 0.64478,1.7479 0.70295,1.87451c0.05813,0.12674 0.09411,0.27348 0.00455,0.43621c-0.08982,0.16308 -0.1358,0.26496 -0.26612,0.40549c-0.13103,0.14054 -0.27563,0.31437 -0.3925,0.42183c-0.13036,0.11897 -0.26652,0.24875 -0.12946,0.50308c0.13696,0.25415 0.60951,1.08732 1.32942,1.77393c0.92522,0.88263 1.72313,1.1754 1.96866,1.30879c0.24621,0.13411 0.39312,0.1192 0.5458,-0.04147c0.15196,-0.16067 0.65353,-0.70295 0.83018,-0.94504c0.17656,-0.24277 0.34201,-0.19522 0.56884,-0.10397c0.2267,0.09161 1.43558,0.73911 1.68183,0.87281c0.24598,0.13344 0.4104,0.20219 0.4692,0.30804c0.05879,0.10625 0.04022,0.60406 -0.19067,1.17674zM10.18134,0c-5.42219,0 -9.81822,4.36165 -9.81822,9.7425c0,1.84063 0.51482,3.56205 1.40888,5.03067l-1.77201,5.22683l5.43589,-1.72687c1.40661,0.77165 3.02433,1.21188 4.74545,1.21188c5.4229,0 9.81866,-4.36228 9.81866,-9.7425c0,-5.38085 -4.39576,-9.7425 -9.81866,-9.7425z"
                              fill="#153b19"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span>(43) 3367-0523</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://goo.gl/maps/hfUnqrGxDZK3Rt3p7">
                    <a className="link-20-regular" target="_blank">
                      <svg id="SVGDoc" width="15" height="20" version="1.1">
                        <defs></defs>
                        <g>
                          <g>
                            <title>pin</title>
                            <path
                              d="M4.375,7.5c0,-1.7259 1.3991,-3.125 3.125,-3.125c1.7259,0 3.125,1.3991 3.125,3.125c0,1.7259 -1.3991,3.125 -3.125,3.125c-1.7259,0 -3.125,-1.3991 -3.125,-3.125zM8.27078,19.59648c5.6757,-8.22808 6.72922,-9.07254 6.72922,-12.09648c0,-4.14215 -3.35785,-7.5 -7.5,-7.5c-4.14215,0 -7.5,3.35785 -7.5,7.5c0,3.02395 1.05352,3.8684 6.72922,12.09648c0.37242,0.53801 1.1691,0.53805 1.54156,0z"
                              fill="#153b19"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span>Rua Michigan, 535 – Londrina/PR</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <a className="link-20-regular">
                    <svg id="SVGDoc" width="20" height="20" version="1.1">
                      <defs></defs>
                      <g>
                        <g>
                          <title>clock</title>
                          <path
                            d="M12.63721,14.89941l-4.08882,-3.44531v-7.09926h1.75436v6.25356l3.43938,2.81152zM10,0c-5.52419,0 -10,4.47581 -10,10c0,5.52419 4.47581,10 10,10c5.52419,0 10,-4.47581 10,-10c0,-5.52419 -4.47581,-10 -10,-10z"
                            fill="#153b19"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span>Segunda à Sexta 8h até 18h</span>
                  </a>
                </li>

                <li>
                  <Link href="https://www.instagram.com/sanderson.solar/">
                    <a className="link-20-regular" target="_blank">
                      <svg id="SVGDoc" width="20" height="20" version="1.1">
                        <defs></defs>
                        <g>
                          <g>
                            <title>Caminho 55</title>
                            <path
                              d="M7,10c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3c-1.65685,0 -3,1.34315 -3,3zM15.25,6c-0.69036,0 -1.25,-0.55964 -1.25,-1.25c0,-0.69036 0.55964,-1.25 1.25,-1.25c0.69036,0 1.25,0.55964 1.25,1.25c0,0.69036 -0.55964,1.25 -1.25,1.25zM15,10c0,2.76142 -2.23858,5 -5,5c-2.76142,0 -5,-2.23858 -5,-5c0,-2.76142 2.23858,-5 5,-5c2.76142,0 5,2.23858 5,5zM5.878,0.06c-1.066,0.05 -1.79,0.217 -2.428,0.465c-0.66757,0.25073 -1.27233,0.64423 -1.772,1.153c-0.5092,0.49932 -0.90276,1.10418 -1.153,1.772c-0.248,0.638 -0.415,1.362 -0.465,2.428c-0.05,1.066 -0.06,1.405 -0.06,4.122c0,2.717 0.013,3.056 0.06,4.122c0.05,1.065 0.217,1.791 0.465,2.428c0.25093,0.66747 0.64441,1.27219 1.153,1.772c0.49953,0.50894 1.10433,0.90247 1.772,1.153c0.638,0.247 1.363,0.415 2.428,0.465c1.066,0.05 1.405,0.06 4.122,0.06c2.717,0 3.056,-0.013 4.122,-0.06c1.065,-0.05 1.791,-0.218 2.428,-0.465c0.66731,-0.25125 1.27196,-0.64468 1.772,-1.153c0.50912,-0.49938 0.90268,-1.10422 1.153,-1.772c0.247,-0.638 0.415,-1.363 0.465,-2.428c0.05,-1.066 0.06,-1.405 0.06,-4.122c0,-2.717 -0.013,-3.056 -0.06,-4.122c-0.05,-1.065 -0.218,-1.791 -0.465,-2.428c-0.25105,-0.66741 -0.6445,-1.2721 -1.153,-1.772c-0.556,-0.555 -1.112,-0.899 -1.772,-1.153c-0.638,-0.248 -1.363,-0.415 -2.428,-0.465c-1.066,-0.05 -1.405,-0.06 -4.122,-0.06c-2.717,0 -3.056,0.013 -4.122,0.06z"
                              fill="#153b19"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span>@sanderson.solar</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md="7" className="contact-form">
              <div className="-title">
                <h2 className="titulo-48-bold">Solicite um orçamento</h2>
                <div className="subtitle paragraph-16-regular">
                  Preencha os campos abaixo e faremos um orçamento na medida
                  para você.
                </div>
              </div>

              <form>
                <label className="paragraph-16-bold">
                  Nome completo
                  <input
                    type="text"
                    placeholder="Digite seu nome completo aqui"
                    className="paragraph-16-regular"
                  />
                </label>

                <label className="paragraph-16-bold">
                  Telefone
                  <InputMask
                    mask="(99) 9 9999-9999"
                    type="text"
                    placeholder="(DDD) 99999-9999"
                    className="paragraph-16-regular"
                  />
                </label>

                <label className="paragraph-16-bold">
                  E-mail
                  <input
                    type="email"
                    placeholder="Digite seu e-mail aqui"
                    className="paragraph-16-regular"
                  />
                </label>

                <label className="paragraph-16-bold">
                  Qual o valor médio da sua conta de energia?
                  <input
                    type="text"
                    placeholder="Entre R$100 e R$400"
                    className="paragraph-16-regular"
                  />
                </label>

                <input
                  type="submit"
                  value="solicite um orçamento"
                  className="bt link-18-bold"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </Contato>
    </LayoutComponent>
  );
}
