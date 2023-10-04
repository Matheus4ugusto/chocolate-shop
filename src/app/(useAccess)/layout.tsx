"use client";

import GlobalStyles from "@/styles/global";
import Providers from "../providers";
import StyledComponentsRegistry from "../regystry";
import Footer from "@/components/Footer";
import HeaderForIdentify from "@/components/HeaderFotIdentify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyles />
            <HeaderForIdentify />
            {children}
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
