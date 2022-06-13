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
      height: 534px;
      max-width: 450px;
      width: 100%;
      cursor: pointer;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

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

  @media only screen and (max-width: 1024px) {
    .swiper-slide {
      max-width: 100% !important;
    }
  }

  @media only screen and (max-width: 650px) {
    .orcamento {
      margin-top: 10px;
    }

    .swiper {
      height: 510px;

      .swiper-slide {
        height: 440px;
      }
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
