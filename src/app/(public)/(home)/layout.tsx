import Header from "@/components/Header";

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
        <Header />
        <main>{children}</main> 
            </body>
    </html>
  );
}