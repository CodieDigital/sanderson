import { ButtonStyle } from "./styles";
import Link from "next/link";

interface ButtonInfos {
  href: string;
  text: string;
}

export function ButtonComponent({ href, text }: ButtonInfos) {
  return (
    <ButtonStyle>
      <Link href={href} passHref>
        <a href="replaced" className="paragraph-18-bold">
          <span>{text}</span>
        </a>
      </Link>
    </ButtonStyle>
  );
}
