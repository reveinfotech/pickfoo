import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.about);

export default function AboutPage() {
	return (
		<div className="container-premium pt-28 pb-20 max-w-3xl">
			<p className="text-sm text-muted-foreground mb-2">PICKFOO PRIVATE LIMITED</p>
			<h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
				About Pickfoo
			</h1>
			<p className="text-xl text-muted-foreground leading-relaxed mb-10">
				Pickfoo is a hyperlocal food delivery platform operated by Pickfoo Private
				Limited, incorporated in India with its principal place of business in
				Mananthavady, Wayanad, Kerala.
			</p>

			<div className="space-y-10 text-foreground/90 leading-relaxed">
				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">Who we are</h2>
					<p className="text-muted-foreground mb-3">
						We build software and logistics so local restaurants can reach more diners,
						and so people in Mananthavady can order food without relying only on a
						single kitchen&apos;s WhatsApp number. Our brand names — Pickfoo, Pickfoo
						Mananthavady, and Pickfoo Wayanad — refer to the same Indian company. We are
						not affiliated with the unrelated US company &quot;PickFu.&quot;
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">Where we operate</h2>
					<p className="text-muted-foreground mb-3">
						Launch market: <strong className="text-foreground">Mananthavady</strong>{" "}
						(Wayanad, Kerala, PIN 670645). We plan phased expansion across Wayanad as
						restaurant and delivery partner coverage grows.
					</p>
					<p className="text-muted-foreground">
						Read more about{" "}
						<Link href="/mananthavady" className="text-primary underline underline-offset-2">
							food delivery in Mananthavady
						</Link>{" "}
						and{" "}
						<Link href="/wayanad" className="text-primary underline underline-offset-2">
							Wayanad flavours
						</Link>
						.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">What we offer</h2>
					<ul className="list-disc pl-5 text-muted-foreground space-y-2">
						<li>Customer app for browsing partner restaurants and tracking orders</li>
						<li>Restaurant partner tools via restaurant.pickfoo.in</li>
						<li>Delivery partner opportunities with weekly payouts</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">Trust &amp; policies</h2>
					<p className="text-muted-foreground mb-3">
						Our{" "}
						<Link href="/privacy" className="text-primary underline underline-offset-2">
							Privacy Policy
						</Link>
						,{" "}
						<Link href="/terms" className="text-primary underline underline-offset-2">
							Terms
						</Link>
						, and{" "}
						<Link href="/refund-policy" className="text-primary underline underline-offset-2">
							Refund Policy
						</Link>{" "}
						describe how we handle data and orders under Indian law, including references
						to the DPDP Act 2023 and related regulations.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">Contact</h2>
					<p className="text-muted-foreground mb-2">
						Pickfoo Private Limited — Mananthavady, Wayanad, Kerala, India
					</p>
					<p className="text-muted-foreground">
						Email:{" "}
						<ContactEmail showAddress className="text-primary underline underline-offset-2" />
					</p>
					<p className="text-muted-foreground mt-2">
						Or visit{" "}
						<Link href="/support" className="text-primary underline underline-offset-2">
							Help &amp; Support
						</Link>
						.
					</p>
				</section>
			</div>
		</div>
	);
}
