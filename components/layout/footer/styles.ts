import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: var(--footer-color);
  color: var(--white);
  margin-top: 50px;
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

    .termos-privacidade {
      opacity: 0.5;
      display: flex;
      gap: 2.08vw;
    }
  }

  @media only screen and (max-width: 768px) {
    .box-footer {
      flex-wrap: wrap;
      justify-content: center;
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
    }
  }
`;
