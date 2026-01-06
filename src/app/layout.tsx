import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Script from 'next/script'
import './globals.css'

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
})

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'pickfoo | Fastest Food Delivery in Wayanad',
	description:
		"Experience the fastest food delivery in Wayanad with pickfoo. Bringing the natural beauty of Wayanad's flavors to your doorstep.",
	keywords: [
		'food delivery',
		'Wayanad',
		'fast delivery',
		'pickfoo',
		'online food ordering',
	],
	authors: [{ name: 'pickfoo Team' }],
	openGraph: {
		title: "pickfoo | Wayanad's Premier Food Delivery",
		description: 'The flavors of Wayanad, delivered fast.',
		type: 'website',
		locale: 'en_IN',
		siteName: 'pickfoo',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='scroll-smooth' suppressHydrationWarning={true}>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=G-BFCPEWVPK8`}
				strategy='afterInteractive'
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BFCPEWVPK8');
        `}
			</Script>
			<body
				className={`${outfit.variable} ${inter.variable} antialiased`}
				suppressHydrationWarning={true}
			>
				<div className='flex flex-col min-h-screen'>
					<Navbar />
					<main className='grow'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
