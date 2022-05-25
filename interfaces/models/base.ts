import { Arquivo } from './core/arquivo'
import { Imagem } from './core/imagem'

export interface Base {
    id?: number,
    destaque?: boolean,
    ordem?: number,
    titulo?: string,
    subtitulo?: string,
    descricao?: string,
    imagem?: string,
    thumbnail?: string,
    imagemAlt?: string,
    thumbnailAlt?: string,
    tags?: string,
    pageTitle?: string,
    metaDescription?: string,
    metaImage?: string,
    url?: string,
    arquivos?: Arquivo[],
    imagens?: Imagem[]
}