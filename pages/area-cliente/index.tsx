import { LayoutComponent } from "components/layout";
import { AreaClienteStyle } from "styles/pages/area-cliente/styles";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { InputComponent } from "components/data/input";
import { FormHandles } from "@unform/core";
import { useRef } from "react";
import { Form } from "@unform/web";

export default function ClientPage() {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit() {}

  return (
    <LayoutComponent>
      <AreaClienteStyle>
        <div
          className="bg"
          style={{
            backgroundImage: `url("/images/banner.jpg")`,
          }}
        >
          <Container>
            <div className="-title">
              <h2 className="titulo-48-bold">Área do cliente</h2>
            </div>

            <div className="form-container">
              <h4 className="paragraph-24-bold">Fazer login</h4>
              <Form method="post" ref={formRef} onSubmit={handleSubmit}>
                <label className="paragraph-16-bold">
                  E-mail
                  <InputComponent
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail aqui"
                    className="paragraph-16-regular"
                  />
                </label>

                <label className="paragraph-16-bold">
                  Telefone
                  <InputComponent
                    mask="(99) 9 9999-9999"
                    type="text"
                    name="phone"
                    placeholder="(DDD) 99999-9999"
                    className="paragraph-16-regular"
                  />
                </label>

                <Link href="#" passHref>
                  <a href="replaced" className="link-16-regular esqueceu-senha">
                    Esqueceu sua senha?
                  </a>
                </Link>

                <button className="bt paragraph-18-bold" type="submit">
                  Entrar
                </button>
              </Form>
            </div>
          </Container>
        </div>
      </AreaClienteStyle>
    </LayoutComponent>
  );
}
