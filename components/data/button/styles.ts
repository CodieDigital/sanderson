import styled from "styled-components";

export const ButtonStyle = styled.div`
  width: 100%;
  max-width: 330px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--button-color);
  height: 69px;
  padding: 6px 10px;
  border-radius: 35px;
  transition: 0.3s ease-in-out;

  span {
    text-transform: uppercase;
    color: var(--text-color);
    text-align: center;
  }

  &:hover {
    background-color: var(--darker-button-color);
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1600px) {
    max-width: 320px;
    height: 67px;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 310px;
    height: 65px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 300px;
    height: 63px;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 290px;
    height: 61px;
  }

  @media only screen and (max-width: 992px) {
    max-width: 280px;
    height: 59px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 270px;
    height: 57px;
  }

  @media only screen and (max-width: 650px) {
    max-width: 260px;
    height: 55px;
  }

  @media only screen and (max-width: 576px) {
    max-width: 250px;
    height: 52px;
  }

  @media only screen and (max-width: 420px) {
    max-width: 240px;
    height: 50px;
  }
`;
