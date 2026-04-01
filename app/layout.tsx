import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChainProfile | Onchain Identity Studio",
  description:
    "Build a live Profile Card and save nickname + bio to Base onchain identity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="base:app_id" content="69ccb9011aacdcc17b255163" />
        <meta
          name="talentapp:project_verification"
          content="d5ebdec8c5d080a279616d63a020f513f8fa4edcfc1b6d1f7ba83e27809aa620f213ef706241d2da16574011aee914a9f28ec64b237ef3d742bc0728d6d5707a"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
