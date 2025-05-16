import "~/styles/globals.css";
import "@mantine/core/styles.css"

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";

export const metadata = {
  title: "Pluto",
  description: "Basic Budgeting App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const theme = createTheme({
  /** Put your mantine theme override here */
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <TRPCReactProvider>
          <MantineProvider defaultColorScheme="dark" theme={theme}>
            {children}
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
