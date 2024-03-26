"use client";
import { ThemeProvider } from "@material-tailwind/react";

const ThemeProviderTailwind = ({ children }) => {
  return (
    <ThemeProvider>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default ThemeProviderTailwind;
