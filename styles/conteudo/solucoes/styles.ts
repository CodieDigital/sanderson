import styled from "styled-components";

export const Solucoes = styled.section`
  padding: 5.21vw 0 2.01vw;
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

  .detail-bottom {
    bottom: -115%;
    left: -50%;
  }

  .middle-title {
    margin-bottom: 2.29vw;
  }

  .solutions-grid {
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    position: relative;
    z-index: 5;
    gap: 1.56vw;
    justify-content: center;

    .solutions-box {
      background-color: var(--white);
      color: var(--black);
      padding: 2vw 1.3vw;
      max-width: 450px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      height: 300px;
      align-items: center;
      justify-content: center;
      text-align: center;

      h3 {
        text-transform: uppercase;
        color: var(--text-color);
        line-height: 40px;
      }
    }
  }

  .orcamento {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.6vw;
    position: relative;
    z-index: 6;
    gap: 5px;
  }
`;
