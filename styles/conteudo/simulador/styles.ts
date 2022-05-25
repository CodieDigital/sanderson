import styled from "styled-components";

export const Simulador = styled.section`
  padding: 4.17vw 0;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  .container-geral {
    position: relative;
    z-index: 5;
    gap: 15px;
    color: var(--white);
  }

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
    gap: 30px;

    .-title {
      max-width: 690px;
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

  .formulario-previsao {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 20px;

    .formulario {
      max-width: 600px;
      width: 100%;
      border-radius: 10px;
      background-color: #f5f5f5;
      padding: 3.13vw 15px;

      form {
        max-width: 480px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.93vw;

        label {
          color: #383838;
          width: 100%;
        }

        input,
        textarea,
        select {
          width: 100%;
          height: 44px;
          border-radius: 22px;
          border: 1px solid #707070;
          background-color: #f5f5f5;
          padding: 12px 20px;

          &::placeholder {
            opacity: 0.5;
            color: #383838;
          }
        }

        .opcoes-local {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 10px;
          .opcao {
            width: 120px;

            .imagem {
              border-radius: 10px;
              border: 1px solid #707070;
              width: 120px;
              height: 110px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .legenda {
              text-align: center;
              color: #383838;
              margin-top: 7px;
            }
          }
        }

        .bt {
          max-width: 330px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--button-color);
          height: 69px;
          padding: 6px 10px;
          border-radius: 35px;
          border: none;
          margin: 0 auto;
          text-transform: uppercase;
          color: var(--text-color);
        }
      }
    }

    .previsao {
      max-width: 690px;
      width: 100%;
      display: flex;
      gap: 1.56vw;

      table {
        max-width: 305px;

        thead {
          th {
            padding-bottom: 20px;
          }
        }

        tbody {
          display: flex;
          flex-direction: column;
          gap: 10px;

          tr {
            display: flex;
            gap: 10px;
          }

          th {
            height: 40px;
            border-radius: 5px;
            background-color: var(--button-color);
            text-transform: uppercase;
            width: 60px;
            color: var(--text-color);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
          }
        }
      }

      .potencia {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        .box-potencia {
          h4 {
            margin-bottom: 0;
          }

          div {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          &:last-child {
            div {
              color: var(--button-color);
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .upper-title {
      text-align: center;
    }

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

    .formulario-previsao {
      .formulario {
        form {
          .bt {
            height: 59px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .formulario-previsao {
      flex-direction: column;

      .previsao {
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .formulario-previsao {
      .formulario {
        form {
          .bt {
            height: 49px;
            max-width: 270px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .formulario-previsao {
      .formulario {
        form {
          .opcoes-local {
            flex-wrap: wrap;
            justify-content: center;
            align-items: baseline;
          }
        }
      }
    }
  }
`;
