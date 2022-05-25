import styled from "styled-components";

export const Depoimentos = styled.section`
  padding: 4.17vw 0;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

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

  .swiper {
    width: 100%;
  }

  .inside-slide {
    display: flex;
    max-width: 1440px;
    justify-content: space-between;
    gap: 20px;
  }

  .video {
    max-width: 810px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    min-height: 300px;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .-title {
    max-width: 540px;
    width: 100%;
    color: var(--white);
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

  .text {
    display: flex;
    flex-direction: column;
    gap: 4.69vw;
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
  }

  @media only screen and (max-width: 640px) {
    .inside-slide {
      flex-direction: column;
      justify-content: center;
    }

    .video {
      height: 200px;
      min-height: 200px;
    }
  }
`;
