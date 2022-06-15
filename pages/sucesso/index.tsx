import { LayoutComponent } from "components/layout";
import { Termos } from "styles/pages/termos/styles";
import { Container } from "react-bootstrap";

export default function TermosPage() {
  return (
    <LayoutComponent>
      <Termos>
        <div
          className="bg"
          style={{
            backgroundImage: `url("images/banner.jpg")`,
          }}
          id="sucesso"
        >
          <Container>
            <div className="content-container">
              <div className="-title">
                <h2 className="titulo-40-bold">
                  Orçamento enviado com sucesso!
                </h2>
                <h2 className="titulo-32-bold">
                  Entraremos em contato em breve.
                </h2>
              </div>
            </div>
          </Container>
        </div>
      </Termos>
    </LayoutComponent>
  );
}
