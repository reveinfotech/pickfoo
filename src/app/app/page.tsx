import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AppDownloadButtons } from "@/components/AppDownloadButtons";
import {
	APP_DOWNLOAD_URL,
	APP_STORE_URL,
	PLAY_STORE_URL,
	buildPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = {
	...buildPageMetadata({
		title: "Download Pickfoo App | Mananthavady Food Delivery",
		description:
			"Get the Pickfoo customer app for iOS or Android. Scan the QR or tap to open the App Store or Google Play for food delivery in Mananthavady.",
		path: "/app",
	}),
	robots: { index: true, follow: true },
};

function detectStoreUrl(userAgent: string): string | null {
	const ua = userAgent || "";
	const isIOS =
		/iPad|iPhone|iPod/i.test(ua) ||
		(/Macintosh/i.test(ua) && /Mobile/i.test(ua));
	const isAndroid = /Android/i.test(ua);

	if (isIOS) return APP_STORE_URL;
	if (isAndroid) return PLAY_STORE_URL;
	return null;
}

export default async function AppDownloadPage() {
	const headerList = await headers();
	const storeUrl = detectStoreUrl(headerList.get("user-agent") ?? "");

	if (storeUrl) {
		redirect(storeUrl);
	}

	return (
		<div className="container-premium pt-28 pb-20 max-w-3xl">
			<div className="text-center space-y-6">
				<p className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
					Get the app
				</p>
				<h1 className="text-4xl md:text-5xl font-bold font-outfit">
					Download <span className="text-primary italic">Pickfoo</span>
				</h1>
				<p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
					Order from local Mananthavady restaurants on iOS or Android. On a phone,
					this page opens the right store automatically — or scan the QR code below.
				</p>

				<div className="flex justify-center pt-2">
					<div className="rounded-2xl border border-primary/15 bg-white p-4 shadow-sm">
						<Image
							src="/qr-customer-app.png"
							alt="QR code to download the Pickfoo customer app"
							width={240}
							height={240}
							priority
							className="rounded-lg"
						/>
					</div>
				</div>

				<p className="text-sm text-muted-foreground">
					Scan with your phone camera ·{" "}
					<a
						href={APP_DOWNLOAD_URL}
						className="text-primary font-medium underline underline-offset-2 hover:no-underline"
					>
						pickfoo.in/app
					</a>
				</p>

				<div className="flex justify-center pt-4">
					<AppDownloadButtons />
				</div>
			</div>
		</div>
	);
}
