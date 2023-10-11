"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import AuthContextProvider from "@/contexts/AuthContext";
import AsideContextProvider from "@/contexts/AsideContext";
import SwitchUserDataContextProvider from "@/contexts/SwitchUserDataContext";
import CartContextProvider from "@/contexts/CartContext";
import ProductCounterContextProvider from "@/contexts/ProductCounterContext";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <ProductCounterContextProvider>
      <CartContextProvider>
        <AuthContextProvider>
          <SwitchUserDataContextProvider>
            <AsideContextProvider>{children}</AsideContextProvider>
          </SwitchUserDataContextProvider>
        </AuthContextProvider>
      </CartContextProvider>
    </ProductCounterContextProvider>
  </ThemeProvider>
);

export default Providers;
