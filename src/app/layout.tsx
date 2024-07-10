import type { Metadata } from "next";
import {Advent_Pro} from "next/font/google";
import React from "react";
import { ThemeProvider as Theme } from "@/components/theme-provider";
import Header from "@&/header";
import Footer from "@&/footer";

import "@style";
import { cn } from "@lib/utils";

const fontSans = Advent_Pro({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zot Shop",
  description: "Shop example by Zota0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const HeaderElement = React.memo(() => <Header />);
  const FooterElement = React.memo(() => <Footer />);
  HeaderElement.displayName = "HeaderElement";
  FooterElement.displayName = "FooterElement";
  const currentLang = "en";

  return (
		<html lang={currentLang}>
			<body
				className={cn(
					"font-sans min-h-screen bg-background text-foreground antialiased",
					fontSans.variable
				)}
			>
				<Theme attribute='class' defaultTheme='dark' enableSystem>
					<header className='div-c px-8'>
						<HeaderElement />
					</header>
					<main>{children}</main>
					<footer className='border-t-4 border-re-primary'>
						<FooterElement />
					</footer>
				</Theme>
			</body>
		</html>
  );
}









