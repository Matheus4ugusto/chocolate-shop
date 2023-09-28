"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import AuthContextProvider from "@/contexts/AuthContext";
import AsideContextProvider from "@/contexts/AsideContext";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <AsideContextProvider>{children}</AsideContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
);

export default Providers;
