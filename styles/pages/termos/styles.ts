import styled from "styled-components";

export const Termos = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -160px;

  #sucesso {
    h2 {
      text-align: center;
    }
  }

  #sucesso.bg {
    height: 67vh;

    .container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .bg {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    padding: clamp(130px, 10.3vw, 200px) 0 2.08vw;
  }

  .content-container {
    padding: 2.6vw;
    background-color: #fff;
    border-radius: 10px;

    h2 {
      color: var(--text-color);
    }
  }

  .inside-text {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media only screen and (max-width: 1024px) {
    #sucesso.bg {
      height: auto;
      padding: 185px 0 55px;
    }
  }
`;
