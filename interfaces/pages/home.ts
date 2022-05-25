import { Banner } from "interfaces/models/conteudo/banner";
import { Noticia } from "interfaces/models/conteudo/noticia";
import { Solucoes } from "interfaces/models/conteudo/solucoes";

export interface HomeProps {
  banners?: Banner[];
  noticias?: Noticia;
  solucoes?: Solucoes[];
}
