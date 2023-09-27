"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/global";
import { StyleRegistry } from "styled-jsx";
import AuthContextProvider from "@/contexts/AuthContext";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <AuthContextProvider>{children}</AuthContextProvider>
  </ThemeProvider>
);

export default Providers;
