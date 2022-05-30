import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: var(--footer-color);
  color: var(--white);
  position: relative;
  padding: 5.89vw 0 15px;

  .footer-container {
    max-width: 834px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }

  .scroll-up {
    position: absolute;
    top: -34px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box-footer {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    li {
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgb(0 0 0 / 0%);
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: 0;
        background: #fff;
        height: 1px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }

      &:hover {
        &::before {
          left: 0;
          right: 0;
        }
      }
    }
  }

  li,
  a,
  span {
    color: var(--color-1);
    white-space: nowrap;
  }

  .redes {
    max-width: 210px;
    width: 100%;
    gap: 20px;
    display: flex;
    justify-content: center;

    li {
      width: 27px;
      height: 27px;
    }
  }

  .bottom-footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 2.08vw;
    gap: 10px;
    opacity: 0.5;

    .termos-privacidade {
      display: flex;
      gap: 2.08vw;
    }
  }

  @media only screen and (max-width: 768px) {
    .box-footer {
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
    }

    .scroll-up {
      max-width: 270px;
    }
  }

  @media only screen and (max-width: 640px) {
    .menu {
      flex-direction: column;
      align-items: center;
    }
    .bottom-footer {
      flex-direction: column;
      justify-content: center;

      .termos-privacidade {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
