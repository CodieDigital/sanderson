import styled from "styled-components";

export const Galeria = styled.section`
  padding: 5.21vw 0 3.85vw;
  position: relative;

  [class*="detail-"] {
    position: absolute;
    z-index: -1;
  }

  .detail-right {
    top: -45%;
    right: 0;
    width: 100%;
    max-width: 582px;
    height: 100%;
  }

  .middle-title {
    margin-bottom: 2.29vw;
  }

  .swiper {
    width: 100%;
    height: 600px;

    .swiper-slide {
      position: relative;
      max-width: 450px;
      max-height: 534px;
      width: 100%;
      cursor: pointer;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      aspect-ratio: 450/534;

      img,
      span {
        height: inherit !important;
        width: 100% !important;
        object-fit: cover;
      }

      &:hover {
        .saiba-mais {
          opacity: 1;
        }
      }
    }

    .place-title {
      color: var(--footer-color);
    }

    .image-label {
      position: absolute;
      width: 100%;
      min-height: 155px;
      bottom: 0;
      left: 0;
      padding: 30px 30px 20px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      background-color: var(--white);
      box-shadow: inset 0px 0 1px black;
      clip-path: polygon(0 55%, 100% 0%, 100% 100%, 0% 100%);
      z-index: 3;
      img,
      span {
        max-width: 215px !important;
        object-fit: contain;
      }

      .place-title {
        text-align: right;
        padding-left: 100px;
      }
    }

    .saiba-mais {
      position: absolute;
      width: 100%;
      min-height: 155px;
      bottom: 0;
      left: 0;
      padding: 30px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: var(--footer-color);
      box-shadow: inset 0px 0 1px black;
      z-index: 2;
      opacity: 0;
      transition: 0.3s ease-in-out;

      span {
        text-transform: uppercase;
        color: #fff;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--button-color);
    top: unset;
    bottom: 0;

    &::after {
      font-size: 34px;
    }
  }

  .swiper-button-prev {
    left: unset;
    right: unset;
    right: 90px;
  }

  .orcamento {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -30px;
    position: relative;
    z-index: 6;
    gap: 5px;
    max-width: 330px;
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1600px) {
    .swiper {
      height: 570px;

      .swiper-slide {
        aspect-ratio: 450/500;
        max-height: 500px;
      }

      .image-label {
        min-height: 145px;
        clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0% 100%);
        -webkit-clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0% 100%);
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .swiper {
      height: 500px;

      .swiper-slide {
        aspect-ratio: 360/440;
        max-height: 440px;
      }

      .image-label {
        min-height: 135px;
        clip-path: polygon(0 45%, 100% 0%, 100% 100%, 0% 100%);
        -webkit-clip-path: polygon(0 45%, 100% 0%, 100% 100%, 0% 100%);
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .swiper {
      height: 480px;

      .swiper-slide {
        aspect-ratio: 360/420;
        max-height: 420px;
      }

      .image-label {
        min-height: 125px;
        clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0% 100%);
        -webkit-clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0% 100%);
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .swiper {
      .swiper-slide {
        max-width: 100% !important;
      }

      .image-label {
        min-height: 115px;
        clip-path: polygon(0 35%, 100% 0%, 100% 100%, 0% 100%);
        -webkit-clip-path: polygon(0 35%, 100% 0%, 100% 100%, 0% 100%);

        .place-title {
          padding-left: 70px;
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .orcamento {
      margin-top: 10px;
    }

    .swiper-button-prev {
      left: 40%;
      transform: translateX(-40%);
    }

    .swiper-button-next {
      right: 40%;
      transform: translateX(-40%);
    }
  }
`;
