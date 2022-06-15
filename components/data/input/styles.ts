import styled from "styled-components";

export const Input = styled.div`
  input {
    height: 44px;
    border-radius: 22px;
    border: 1px solid #707070;
    background-color: #f5f5f5;
    width: 100%;
    padding: 10px 20px;

    &::placeholder {
      opacity: 0.5;
    }
  }
`;
