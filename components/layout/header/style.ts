import styled from "styled-components";

interface HeaderProps {
  fontSize?: string;
  headerType?: "home" | "internal";
}

export const Header = styled.header<HeaderProps>`
  font-size: ${(props) => props.fontSize};
  padding: 40px 0;
  position: relative;
  z-index: 90;

  li,
  a,
  span {
    color: var(--white);
  }

  .menu-mobile {
    position: fixed;
    height: 100vh;
    width: 100%;
    right: 0;
    top: 0;
    z-index: -10;
    visibility: hidden;
    transition: 0.3s ease-in-out;

    .filter {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: flex-end;
    }

    .menu {
      width: 30%;
      min-width: 400px;
      height: 100%;
      background-color: #005832;
      position: relative;
      z-index: 99;
      transform: translateX(100%);
      transition: 0.3s ease-in-out;

      nav {
        display: flex;
        flex-direction: column;
        flex-direction: column;
        padding: 20px 30px;
        height: 100%;
        align-items: flex-start;

        ul {
          gap: 20px;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }

    .close {
      color: #fff;
      padding: 10px 30px;
      display: flex;
      justify-content: flex-end;
    }
  }

  .container-geral {
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    flex-direction: row;
  }

  .menu-mobile.active {
    z-index: 99;
    visibility: visible;
    .menu {
      transform: translateX(0%);
    }
  }

  .block-bar {
    display: none;
    width: 35px;
    flex-direction: column;
    cursor: pointer;
    align-self: center;
    gap: 7px;
    margin-left: auto;
    margin-right: 20px;

    div {
      background-color: #dc9300;
      width: 100%;
      height: 2px;
    }
  }

  .logo-menu {
    max-width: 315px;
    min-width: 100px;
  }

  .menu-desktop {
    width: 100%;
    max-width: 930px;

    ul {
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
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: clamp(10px, 1.04vw, 20px);
    align-items: center;
  }

  .li-button {
    max-width: 170px;
    width: 100%;

    &::before {
      display: none;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 35px 0;

    .logo-menu {
      max-width: 300px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 30px 0;

    .logo-menu {
      max-width: 285px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 25px 0;

    .logo-menu {
      max-width: 270px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 20px 0;

    .logo-menu {
      max-width: 265px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 15px 0;
  }

  @media only screen and (max-width: 500px) {
    .menu-mobile {
      .menu {
        min-width: 280px;
      }
    }
  }
`;
