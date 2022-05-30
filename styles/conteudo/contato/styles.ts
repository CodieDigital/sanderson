import styled from "styled-components";

export const Contato = styled.section`
  padding: 2.08vw 0;
  position: relative;
  overflow: hidden;

  [class*="detail-"] {
    position: absolute;
    z-index: -1;
  }

  .detail-right {
    top: -95%;
    right: -62%;
  }

  .bloco-contato {
    padding: 4.17vw 15px;
    width: 100%;
    background-color: var(--white);
    justify-content: space-around;
    grid-row-gap: 30px;
    border-radius: 10px;
    align-self: center;
  }

  .contact-info {
    max-width: 480px;
    border-radius: 10px;
    background-color: var(--button-color);
    color: var(--text-color);
    padding: 2.08vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.04vw;
    }

    a,
    span {
      color: var(--text-color);
    }

    a {
      display: flex;
      gap: 12px;
      align-items: center;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  [class*="-title"] {
    color: var(--text-color);
  }

  .contact-form {
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: 2.08vw;
  }

  .subtitle {
    text-transform: initial;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.56vw;

    label {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;
    }

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
  }
`;
