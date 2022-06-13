import { ButtonStyle } from "./styles";
import Link from "next/link";

interface ButtonInfos {
  href: string;
  text: string;
  target?: string;
}

export function ButtonComponent({ href, text, target }: ButtonInfos) {
  return (
    <ButtonStyle>
      <Link href={href} passHref>
        <a href="replaced" className="paragraph-18-bold" target={target}>
          <span>{text}</span>
        </a>
      </Link>
    </ButtonStyle>
  );
}
