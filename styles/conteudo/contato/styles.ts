import styled from "styled-components";

export const Contato = styled.section`
  padding: 2.08vw 0 40px;
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

  .bt:disabled {
    cursor: not-allowed;
    gap: 8px;
  }
  .loading-animation {
    object-fit: contain;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 1.56vw, 30px);

    label {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;
    }

    button:hover {
      background-color: var(--darker-button-color) !important;
    }
  }

  @media only screen and (max-width: 1600px) {
    input {
      height: 43px;
    }
  }

  @media only screen and (max-width: 1400px) {
    input {
      height: 42px;
    }
  }

  @media only screen and (max-width: 1200px) {
    input {
      height: 41px;
    }
  }

  @media only screen and (max-width: 1024px) {
    input {
      height: 40px;
    }
  }
  @media only screen and (max-width: 992px) {
    input {
      height: 39px;
    }
  }
  @media only screen and (max-width: 768px) {
    input {
      height: 38px;
    }

    .contact-info {
      max-width: 100%;
    }

    .bt {
      max-width: 100%;
    }
  }
`;
