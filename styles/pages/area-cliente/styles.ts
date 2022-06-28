import styled from "styled-components";

export const AreaClienteStyle = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -160px;

  .bg {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    padding: clamp(160px, 10.3vw, 200px) 0px 60px;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [class*="-title"] {
    color: #fff;
    text-align: center;
    margin-bottom: 2.08vw;
  }

  .form-container {
    max-width: 642px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    padding: 2.6vw;
  }

  h4 {
    margin-bottom: 20px;
    text-align: center;
  }

  .esqueceu-senha {
    color: var(--text-color);
    text-align: center;
    text-decoration: underline !important;
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

    .bt {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 768px) {
    .bt {
      max-width: 200px;
      height: 40px;
    }
  }

  @media only screen and (max-width: 650px) {
    .bt {
      max-width: 180px;
    }
  }

  @media only screen and (max-width: 576px) {
    .bt {
      max-width: 160px;
    }
  }

  @media only screen and (max-width: 420px) {
    .bt {
      max-width: 140px;
    }
  }
`;
