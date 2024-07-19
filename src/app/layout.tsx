import React from "react";

import type { Metadata } from "next";
import { Advent_Pro } from "next/font/google";
import { ThemeProvider as Theme } from "@/components/theme-provider";
import { cn } from "@lib/utils";
import * as icn from "lucide-react";

import Header from "@&/header";
import Footer from "@&/footer";

import {Button} from "@&/ui/button";
import { LayoutScrollTop } from "@/components/ui/scroll-up";


import "@style";

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
					<header>
						<HeaderElement />
					</header>
					<main>{children}</main>
					<LayoutScrollTop />
					<footer className='border-t-4 border-re-primary'>
						<FooterElement />
					</footer>
				</Theme>
			</body>
		</html>
	);
}






