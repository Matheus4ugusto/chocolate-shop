"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import AuthContextProvider from "@/contexts/AuthContext";
import AsideContextProvider from "@/contexts/AsideContext";
import SwitchUserDataContextProvider from "@/contexts/SwitchUserDataContext";


const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <SwitchUserDataContextProvider>
      <AsideContextProvider>{children}</AsideContextProvider>
      </SwitchUserDataContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
);

export default Providers;
