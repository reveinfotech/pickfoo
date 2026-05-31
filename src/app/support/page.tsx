import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Support | pickfoo",
	description:
		"Get help with the Pickfoo food delivery app. Contact customer support, report order issues, request refunds, or manage your account.",
	robots: { index: true, follow: true },
};

const supportEmail = "contact@pickfoo.in";
const supportMailto = `mailto:${supportEmail}?subject=${encodeURIComponent("Pickfoo — Support request")}`;

export default function SupportPage() {
	return (
		<div className="container-premium pt-28 pb-20 max-w-3xl">
			<p className="text-sm text-muted-foreground mb-2">
				PICKFOO PRIVATE LIMITED — Pickfoo food delivery app
			</p>
			<h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Support</h1>
			<p className="text-muted-foreground text-sm mb-10">
				Need help with the Pickfoo app? We&apos;re here for orders, payments, account questions, and more.
			</p>

			<div className="rounded-xl border border-primary/15 bg-muted/30 p-6 mb-10">
				<h2 className="text-lg font-bold font-outfit mb-4 text-foreground">Contact customer support</h2>
				<address className="not-italic text-muted-foreground space-y-2 leading-relaxed">
					<p className="font-semibold text-foreground">Pickfoo Private Limited</p>
					<p>Mananthavady, Wayanad, Kerala, India</p>
					<p>
						Email:{" "}
						<a
							href={supportMailto}
							className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
						>
							{supportEmail}
						</a>
					</p>
				</address>
				<p className="text-muted-foreground mt-4 text-sm">
					We aim to respond to support requests within <strong className="text-foreground">24–48 hours</strong> on
					business days. For urgent order issues, use the in-app option below so we can locate your order quickly.
				</p>
			</div>

			<div className="space-y-10 text-foreground/90 leading-relaxed">
				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">Report an issue in the app</h2>
					<p className="text-muted-foreground mb-3">
						The fastest way to get help with a specific order is from inside the Pickfoo app:
					</p>
					<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
						<li>Open the Pickfoo app and sign in</li>
						<li>Go to <strong className="text-foreground">My Orders</strong></li>
						<li>Select the order you need help with</li>
						<li>Tap <strong className="text-foreground">Report an Issue</strong> and describe the problem</li>
					</ol>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">Common topics</h2>
					<ul className="space-y-4 text-muted-foreground">
						<li>
							<strong className="text-foreground">Order problems or refunds —</strong> see our{" "}
							<Link href="/refund-policy" className="text-primary underline underline-offset-2 hover:no-underline">
								Refund Policy
							</Link>{" "}
							or email{" "}
							<a href={supportMailto} className="text-primary underline underline-offset-2 hover:no-underline">
								{supportEmail}
							</a>{" "}
							with your Order ID.
						</li>
						<li>
							<strong className="text-foreground">Delete your account —</strong> follow the steps on our{" "}
							<Link href="/delete-account" className="text-primary underline underline-offset-2 hover:no-underline">
								Delete account
							</Link>{" "}
							page.
						</li>
						<li>
							<strong className="text-foreground">Privacy &amp; data —</strong> read our{" "}
							<Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
								Privacy Policy
							</Link>{" "}
							or contact us to exercise your data rights.
						</li>
						<li>
							<strong className="text-foreground">Terms of use —</strong> see our{" "}
							<Link href="/terms" className="text-primary underline underline-offset-2 hover:no-underline">
								Terms &amp; Conditions
							</Link>
							.
						</li>
						<li>
							<strong className="text-foreground">Restaurant or delivery partners —</strong> visit{" "}
							<Link href="/join" className="text-primary underline underline-offset-2 hover:no-underline">
								Partner with Pickfoo
							</Link>{" "}
							or email{" "}
							<a href={supportMailto} className="text-primary underline underline-offset-2 hover:no-underline">
								{supportEmail}
							</a>{" "}
							and mention that you are a partner.
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">When you email us</h2>
					<p className="text-muted-foreground mb-3">Please include as much detail as possible so we can help you faster:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>Your registered mobile number or email address</li>
						<li>Order ID (if your question is about an order)</li>
						<li>A clear description of the issue</li>
						<li>Screenshots or photos, if relevant</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">Escalation</h2>
					<p className="text-muted-foreground">
						If you are not satisfied with the resolution from our support team, you may escalate your concern to
						our Grievance Officer at{" "}
						<a href={supportMailto} className="text-primary underline underline-offset-2 hover:no-underline">
							{supportEmail}
						</a>
						. We will acknowledge escalations within 48 hours and aim to resolve them within 15 business days.
					</p>
				</section>
			</div>

			<p className="mt-12 text-muted-foreground text-sm flex flex-wrap gap-x-4 gap-y-2">
				<Link href="/" className="text-primary font-medium hover:underline">
					← Back to home
				</Link>
				<Link href="/refund-policy" className="text-primary font-medium hover:underline">
					Refund Policy
				</Link>
				<Link href="/privacy" className="text-primary font-medium hover:underline">
					Privacy Policy
				</Link>
				<Link href="/delete-account" className="text-primary font-medium hover:underline">
					Delete account
				</Link>
				<Link href="/terms" className="text-primary font-medium hover:underline">
					Terms &amp; Conditions
				</Link>
			</p>
		</div>
	);
}
