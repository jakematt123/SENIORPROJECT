import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./api/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Amazooma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
          <Providers>
            <TRPCReactProvider cookies={cookies().toString()}>
              {children}
              <SpeedInsights/>
            </TRPCReactProvider>
          </Providers>
      </body>
    </html>
    
  );
}
