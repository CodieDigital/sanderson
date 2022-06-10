import styled from "styled-components";

export const Solucoes = styled.section`
  padding: 5.21vw 0 2.01vw;
  position: relative;
  overflow: hidden;

  [class*="detail-"] {
    position: absolute;
    z-index: -1;
  }

  .detail-right {
    top: -95%;
    right: -62%;
  }

  .detail-bottom {
    bottom: -115%;
    left: -50%;
  }

  .middle-title {
    margin-bottom: 2.29vw;
  }

  .solutions-grid {
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    position: relative;
    z-index: 5;
    gap: 1.56vw;
    justify-content: center;

    .solutions-box {
      background-color: var(--white);
      color: var(--black);
      padding: 2vw 1.3vw;
      max-width: 450px;
      height: 300px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      justify-content: center;
      text-align: center;

      h3 {
        text-transform: uppercase;
        color: var(--text-color);
        line-height: 40px;
      }

      img {
        width: 80px !important;
        height: 80px !important;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--footer-color);

    &::after {
      font-size: 34px;
    }
  }

  .orcamento {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.6vw;
    position: relative;
    z-index: 6;
    gap: 5px;
  }

  @media only screen and (max-width: 1024px) {
    .solutions-grid {
      .solutions-box {
        max-width: 350px;
        height: 230px;

        img {
          width: 70px !important;
          height: 70px !important;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .solutions-grid {
      .solutions-box {
        max-width: 280px;
        height: 210px;

        h3 {
          line-height: 30px;
        }

        img {
          width: 60px !important;
          height: 60px !important;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .container-geral {
      padding: 0 5px;
    }

    .solutions-grid {
      .solutions-box {
        margin: 0 auto;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .solutions-grid {
      .solutions-box {
        max-width: 240px;
        height: 180px;

        img {
          width: 50px !important;
          height: 50px !important;
        }
      }
    }
  }
`;
