import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";

interface LayoutProps {
  children?: React.ReactNode;
  headerType?: "home" | "internal";
}

export function LayoutComponent({ children, headerType }: LayoutProps) {
  return (
    <>
      <HeaderComponent />

      {children}

      <FooterComponent />
    </>
  );
}
