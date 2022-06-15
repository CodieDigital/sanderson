import { BannerHomeI } from "interfaces/models/conteudo/banner";
import { Solucoes } from "interfaces/models/conteudo/solucoes";

export interface HomeProps {
  banners?: BannerHomeI[];
  solucoes?: Solucoes[];
}
