"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/global";
import { StyleRegistry } from "styled-jsx";

const Providers = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
);

export default Providers;
