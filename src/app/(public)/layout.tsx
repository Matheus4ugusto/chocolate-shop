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
<<<<<<< HEAD
            
            {children}
=======
            <CartAside/>
            <Header />
            <main>{children}</main>
>>>>>>> 2eb2a8f907d1c86e679fa115a46b8577eb5221e0
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}