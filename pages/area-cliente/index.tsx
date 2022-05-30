import { LayoutComponent } from "@components/layout";
import { AreaCliente } from "@styles/pages/area-cliente/styles";
import Link from "next/link";
import { Container } from "react-bootstrap";
import InputMask from "react-input-mask";

export default function ClientPage() {
  return (
    <LayoutComponent>
      <AreaCliente>
        <div
          className="bg"
          style={{
            backgroundImage: `url("images/banner.jpg")`,
          }}
        >
          <Container>
            <div className="-title">
              <h2 className="titulo-48-bold">Área do cliente</h2>
            </div>

            <div className="form-container">
              <h4 className="paragraph-24-bold">Fazer login</h4>
              <form>
                <label className="paragraph-16-bold">
                  E-mail
                  <input
                    type="text"
                    placeholder="Digite seu e-mail aqui"
                    className="paragraph-16-regular"
                  />
                </label>

                <label className="paragraph-16-bold">
                  Telefone
                  <InputMask
                    mask="(99) 9 9999-9999"
                    type="text"
                    placeholder="(DDD) 99999-9999"
                    className="paragraph-16-regular"
                  />
                </label>

                <Link href="#" passHref>
                  <a href="replaced" className="link-16-regular esqueceu-senha">
                    Esqueceu sua senha?
                  </a>
                </Link>
                <input
                  type="submit"
                  value="entrar"
                  className="bt link-18-bold"
                />
              </form>
            </div>
          </Container>
        </div>
      </AreaCliente>
    </LayoutComponent>
  );
}
