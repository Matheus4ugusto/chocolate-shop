"use client";

import GlobalStyles from "@/styles/global";
import Providers from "../providers";
import StyledComponentsRegistry from "../regystry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/Mobile/SideBar";
import CartAside from "@/components/CartAside";

// export const metadata = {
//   title: "chocolate shop",
//   description: "A melhor loja de chocolates para devs",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Providers>
            <SideBar />
            <CartAside/>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
