import styled from "styled-components";

export const Sobre = styled.section`
  color: var(--white);

  .container-geral {
    position: relative;
    z-index: 5;
    gap: 15px;
  }

  .quem-somos {
    padding: 4.17vh 0 278px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(24, 51, 27, 0.9);
    }

    .title-text {
      display: flex;
      justify-content: space-between;
      gap: clamp(10px, 1.56vw, 30px);

      .-title {
        max-width: 610px;
        width: 100%;
      }

      .text-box {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 690px;
        width: 100%;

        .buttons {
          display: flex;
          align-items: center;
          gap: 1.56vw;
        }
      }
    }

    .benefits-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, 450px);
      gap: 1.56vw;
      margin-top: 2.34vw;
      justify-content: center;

      .benefit-box {
        max-width: 450px;
        width: 100%;
        min-height: 336px;
        background-color: var(--white);
        padding: 2.6vw 15px 2.34vw;
        display: flex;
        flex-direction: column;
        gap: 2.08vw;
        align-items: center;
        text-align: center;
        border-radius: 10px;

        .image {
          aspect-ratio: 80/80;
          width: 100%;
          max-width: 80px;

          img {
            width: 100% !important;
          }
        }

        .title {
          color: var(--text-color);
          text-transform: uppercase;
        }

        .description {
          color: var(--black);
        }
      }
    }

    .link-investimento {
      text-align: center;
      margin-top: 1.3vw;

      a {
        color: var(--button-color);
        text-decoration: underline !important;
      }
    }
  }

  .como-funciona {
    padding: 4.95vw 0 1.56vw;
    margin-top: -280px;
    position: relative;

    .detail-left {
      bottom: -72%;
      left: -57%;
    }

    .detail-right {
      top: -35%;
      right: 0;
      width: 100%;
      max-width: 582px;
      height: 100%;
    }

    .container-geral {
      gap: 5.21vw;
    }

    .video {
      width: 100%;
      height: 41.3vw;
      min-height: 300px;

      iframe {
        width: 100%;
        height: 100%;
      }
    }

    .passo-a-passo {
      min-height: 705px;

      .middle-title {
        margin-bottom: 25px;
      }

      .steps-box {
        width: 100%;
        position: relative;
        gap: 3vw;

        .image {
          width: 100%;

          img,
          span {
            width: 100% !important;
          }
        }

        .mobile-image {
          display: none !important;
        }

        .subtitles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 240px;

          ul {
            display: grid;
            grid-row-gap: 250px;
            grid-template-columns: repeat(2, 1fr);

            #first {
              grid-column: 1;
              grid-row: 1;
            }

            #second {
              grid-column: 1;
              grid-row: 2;
            }

            #third {
              grid-column: 2;
              grid-row: 2;
            }

            #fourth {
              grid-column: 2;
              grid-row: 1;
              max-width: 350px;
              justify-self: flex-end;
            }

            #first,
            #second {
              margin-left: 200px;
            }

            li {
              max-width: 400px;
              width: 100%;

              h3 {
                text-transform: uppercase;
                color: var(--text-color);
              }

              p {
                color: var(--black);
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .como-funciona {
      .passo-a-passo {
        min-height: 584px;

        .steps-box {
          .subtitles {
            ul {
              #first,
              #second {
                margin-left: 200px;
              }

              #fourth {
                max-width: 300px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .como-funciona {
      .passo-a-passo {
        min-height: 534px;

        .steps-box {
          .subtitles {
            ul {
              grid-row-gap: 210px;

              #first {
                margin-left: 160px;
              }

              #second {
                margin-left: 40px;
              }

              #fourth {
                max-width: 260px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .container-geral {
      align-items: center;
      justify-content: center;
    }

    .quem-somos {
      .title-text {
        flex-direction: column;
        text-align: center;

        .-title,
        .text-box {
          margin: 0 auto;
        }
      }

      .text-box {
        .buttons {
          justify-content: center;
          flex-wrap: wrap;
        }
      }

      .benefits-wrapper {
        grid-template-columns: repeat(2, 1fr);

        .benefit-box {
          min-height: auto;
          max-width: 370px;

          .image {
            max-width: 60px;
          }
        }
      }
    }

    .como-funciona {
      .passo-a-passo {
        min-height: auto;

        .steps-box {
          display: flex;

          .subtitles {
            position: relative;

            ul {
              grid-row-gap: 0;
              grid-template-columns: repeat(1, 1fr);

              #first,
              #second {
                margin-left: 0;
              }

              #first,
              #second,
              #third,
              #fourth {
                grid-column: unset;
                grid-row: unset;
                max-width: 400px;
                justify-self: flex-start;
              }
            }
          }

          .mobile-image {
            display: flex !important;
          }

          .desktop-image {
            display: none !important;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .quem-somos {
      .benefits-wrapper {
        grid-template-columns: unset;

        .benefit-box {
          margin: 0 auto;
          max-width: 300px;
        }
      }
    }

    .aparecer-600 {
      display: flex !important;
    }

    .desaparecer-600 {
      display: none !important;
    }

    .swiper {
      width: 100%;
      display: flex;

      .swiper-slide {
        margin: 0 auto;
        display: flex;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: var(--darker-button-color);

      &::after {
        font-size: 34px;
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .como-funciona .passo-a-passo .steps-box .image {
      display: none !important;
    }

    .quem-somos .benefits-wrapper .benefit-box {
      max-width: 220px;
    }
  }
`;
