import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Delete your Pickfoo account | pickfoo",
	description:
		"How to request deletion of your Pickfoo customer account and associated personal data for the Pickfoo app by Pickfoo Private Limited.",
	robots: { index: true, follow: true },
};

const deleteEmail = "info@pickfoo.in";
const deleteMailto = `mailto:${deleteEmail}?subject=${encodeURIComponent("Pickfoo — Account deletion request")}`;

export default function DeleteAccountPage() {
	return (
		<div className="container-premium pt-28 pb-20 max-w-3xl">
			<p className="text-sm text-muted-foreground mb-2">
				PICKFOO PRIVATE LIMITED — Pickfoo food delivery app
			</p>
			<h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Delete your account</h1>
			<p className="text-muted-foreground text-sm mb-10">
				This page explains how to request deletion of your <strong className="text-foreground">Pickfoo</strong>{" "}
				customer account and associated data. It is published for users of the Pickfoo mobile app listed on Google
				Play under developer / app name <strong className="text-foreground">Pickfoo</strong>.
			</p>

			<div className="rounded-xl border border-primary/15 bg-muted/30 p-6 mb-10">
				<h2 className="text-lg font-bold font-outfit mb-4 text-foreground">Request account deletion — steps</h2>
				<ol className="list-decimal pl-5 space-y-4 text-muted-foreground leading-relaxed">
					<li>
						<strong className="text-foreground">Send us a request by email.</strong> From the email address linked
						to your Pickfoo account (or clearly state the phone number you use to log in), write to{" "}
						<a href={deleteMailto} className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
							{deleteEmail}
						</a>{" "}
						with the subject line:{" "}
						<span className="text-foreground">&quot;Pickfoo — Account deletion request&quot;</span>.
					</li>
					<li>
						<strong className="text-foreground">Include the following in your message:</strong> your full name,
						registered mobile number, and a clear statement that you want your Pickfoo <strong className="text-foreground">customer</strong> account and personal data deleted. If you use a different email for contact, mention it so we can verify your identity safely.
					</li>
					<li>
						<strong className="text-foreground">In the Pickfoo app (optional):</strong> if your app version includes
						account deletion in settings, you may start the process there; we may still confirm by email or phone
						for security. If you do not see this option, use email only — it is enough to process your request.
					</li>
					<li>
						<strong className="text-foreground">We will confirm and process.</strong> After we verify your request,
						we will delete or anonymise your account and associated personal data where we are not required to
						retain it by law (for example, certain order or tax records may be kept for the period required under
						applicable Indian law, in line with our{" "}
						<Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
							Privacy Policy
						</Link>
						).
					</li>
				</ol>
				<p className="text-muted-foreground mt-6 text-sm">
					We aim to complete verified deletion requests within <strong className="text-foreground">30 days</strong>.
					You will receive an acknowledgement by email when we begin processing your request.
				</p>
			</div>

			<div className="space-y-8 text-foreground/90 leading-relaxed text-muted-foreground">
				<section>
					<h2 className="text-xl font-bold font-outfit mb-3 text-foreground">What is deleted</h2>
					<p className="mb-3">
						When your request is approved, we delete or anonymise personal data tied to your customer account where
						permitted — such as profile details, saved addresses, preferences, and app account credentials — except
						where we must retain information for legal, regulatory, tax, or dispute-resolution purposes.
					</p>
					<p>
						Wallet balance and promotional credits may be forfeited on deletion as described in our{" "}
						<Link href="/terms" className="text-primary underline underline-offset-2 hover:no-underline">
							Terms &amp; Conditions
						</Link>
						.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3 text-foreground">Restaurant &amp; delivery partners</h2>
					<p>
						This page applies to <strong className="text-foreground">Pickfoo customer accounts</strong>. If you are a
						restaurant or delivery partner, contact your Pickfoo partner support channel or{" "}
						<a href={deleteMailto} className="text-primary underline underline-offset-2 hover:no-underline">
							{deleteEmail}
						</a>{" "}
						and state that you are a partner requesting account closure.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3 text-foreground">Questions</h2>
					<p>
						For privacy rights or data questions, see our{" "}
						<Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
							Privacy Policy
						</Link>{" "}
						or email{" "}
						<a href={deleteMailto} className="text-primary underline underline-offset-2 hover:no-underline">
							{deleteEmail}
						</a>
						.
					</p>
				</section>
			</div>

			<p className="mt-12 text-muted-foreground text-sm flex flex-wrap gap-x-4 gap-y-2">
				<Link href="/" className="text-primary font-medium hover:underline">
					← Back to home
				</Link>
				<Link href="/privacy" className="text-primary font-medium hover:underline">
					Privacy Policy
				</Link>
			</p>
		</div>
	);
}
