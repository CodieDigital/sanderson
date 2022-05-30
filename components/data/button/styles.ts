import styled from "styled-components";

export const ButtonStyle = styled.div`
  a {
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
    }

    &:hover {
      background-color: var(--darker-button-color);
    }
  }

  @media only screen and (max-width: 1024px) {
    a {
      height: 59px;
    }
  }

  @media only screen and (max-width: 640px) {
    a {
      height: 49px;
      max-width: 270px;
    }
  }
`;
