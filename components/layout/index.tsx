import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";
import { HeadComponent } from "./head";

interface LayoutProps {
  children?: React.ReactNode;
  headerType?: "home" | "internal";
}

export function LayoutComponent({ children, headerType }: LayoutProps) {
  return (
    <>
      <HeadComponent />

      <HeaderComponent />

      {children}

      <FooterComponent />
    </>
  );
}
