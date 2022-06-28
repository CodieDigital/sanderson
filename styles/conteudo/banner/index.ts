import styled from "styled-components";

export const BannerHome = styled.section`
  width: 100%;

  li,
  a,
  span,
  p,
  h1,
  h3 {
    color: var(--white);
  }

  .container-geral {
    height: 100%;
    flex-direction: row;
    position: relative;
    z-index: 5;
  }

  .swiper {
    margin-top: -160px;
    /* height: 100vh; */
    aspect-ratio: 1920/1080;
    min-height: 600px;
    width: 100%;
    position: relative;
    overflow: hidden;

    img {
      object-fit: cover;
    }

    .mobile-banner {
      display: none !important;
    }
  }

  .content-banner {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: space-between;
    gap: 11px;
  }

  .image-banner {
    width: 50%;
    display: flex;
    align-items: flex-end;

    img {
      object-fit: contain;
    }
  }

  .spacing-div {
    height: 160px;
  }

  .text-content {
    max-width: 790px;
    width: 100%;

    h1 {
      text-transform: uppercase;
      line-height: 72px;
    }

    .bt {
      margin-top: 22px;
    }
  }

  .scroll {
    padding-bottom: 1.56vw;
    display: inline-flex;
    display: inline-flex;
    position: absolute;
    bottom: 0;
    align-items: center;
    gap: 10px;

    a {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }

  @media only screen and (max-width: 768px) {
    .content-banner {
      width: 100%;
    }

    .text-content h1 {
      text-transform: uppercase;
      line-height: 52px;
    }

    .image-banner {
      display: none;
    }

    .swiper {
      aspect-ratio: 1024/1024;
      min-height: 500px;

      .mobile-banner {
        display: flex !important;
      }

      .desktop-banner {
        display: none !important;
      }
    }
  }
`;

export const BannerInterna = styled.section``;
