import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import Script from "next/script";
import {
	BRAND_NAME,
	SITE_URL,
	localBusinessSchema,
	organizationSchema,
	pageSeo,
	websiteSchema,
} from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: pageSeo.home.title,
		template: `%s | ${BRAND_NAME}`,
	},
	description: pageSeo.home.description,
	authors: [{ name: "Pickfoo Private Limited" }],
	applicationName: BRAND_NAME,
	openGraph: {
		title: pageSeo.home.title,
		description: pageSeo.home.description,
		type: "website",
		locale: "en_IN",
		siteName: BRAND_NAME,
		url: SITE_URL,
	},
	twitter: {
		card: "summary_large_image",
		title: pageSeo.home.title,
		description: pageSeo.home.description,
	},
	robots: { index: true, follow: true },
	alternates: {
		canonical: SITE_URL,
	},
	verification: {
		google: "RRUSwFySCefoCwdhM-gY9NDIx5lue3JqIMmIUXa3tI8",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en-IN" className="scroll-smooth" suppressHydrationWarning={true}>
			<head>
				<JsonLd
					data={[organizationSchema, localBusinessSchema, websiteSchema]}
				/>
			</head>
			<body
				className={`${outfit.variable} ${inter.variable} antialiased`}
				suppressHydrationWarning={true}
			>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-BFCPEWVPK8"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BFCPEWVPK8');
        `}
				</Script>
				<div className="flex flex-col min-h-screen">
					<Navbar />
					<main className="grow">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
