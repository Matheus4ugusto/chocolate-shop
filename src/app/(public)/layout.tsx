import GlobalStyles from "@/styles/global";
import Providers from "../providers";
import StyledComponentsRegistry from "../regystry";

export const metadata = {
  title: "chocolate shop",
  description: "A melhor loja de chocolates para devs",
};

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
          {children}
        </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
