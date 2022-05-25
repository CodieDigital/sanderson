import styled from "styled-components";

export const ButtonStyle = styled.div`
  max-width: 330px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--button-color);
  height: 69px;
  padding: 6px 10px;
  border-radius: 35px;

  span {
    text-transform: uppercase;
    color: var(--text-color);
  }

  @media only screen and (max-width: 1024px) {
    height: 59px;
  }

  @media only screen and (max-width: 640px) {
    height: 49px;
    max-width: 270px;
  }
`;
