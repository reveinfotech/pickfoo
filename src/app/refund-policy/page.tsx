import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Refund Policy | pickfoo",
	description:
		"How Pickfoo Private Limited handles refunds for orders placed through the Pickfoo app and website in India.",
	robots: { index: true, follow: true },
};

function Table({
	headers,
	rows,
}: {
	headers: string[];
	rows: string[][];
}) {
	return (
		<div className="overflow-x-auto rounded-lg border border-primary/10 my-4">
			<table className="w-full min-w-[720px] text-sm text-left">
				<thead className="bg-muted/50">
					<tr>
						{headers.map((h) => (
							<th key={h} className="px-4 py-3 font-semibold font-outfit border-b border-primary/10">
								{h}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => (
						<tr key={i} className="border-b border-primary/5 last:border-0">
							{row.map((cell, j) => (
								<td key={j} className="px-4 py-3 text-muted-foreground align-top">
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default function RefundPolicyPage() {
	return (
		<div className="container-premium pt-28 pb-20 max-w-3xl">
			<p className="text-sm text-muted-foreground mb-2">
				PICKFOO PRIVATE LIMITED — For the Pickfoo App &amp; Website
			</p>
			<h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Refund Policy</h1>
			<p className="text-muted-foreground text-sm mb-10">
				Effective Date: 1 May 2025 &nbsp;|&nbsp; Last Updated: 5 May 2025
			</p>

			<div className="space-y-10 text-foreground/90 leading-relaxed">
				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">1. Overview</h2>
					<p className="text-muted-foreground mb-3">
						At Pickfoo, we are committed to ensuring a satisfying food delivery experience for every
						customer. We understand that issues can occasionally arise — from missing items to delivery
						failures — and we have designed this Refund Policy to address such situations fairly and
						transparently.
					</p>
					<p className="text-muted-foreground mb-3">
						Refunds at Pickfoo are issued only when there is a valid, verified reason. We evaluate each
						request on its merits, and our team makes every effort to resolve issues promptly and
						equitably. This Policy applies to all orders placed through the Pickfoo mobile application and
						website by customers in India.
					</p>
					<p className="text-muted-foreground">
						This Refund Policy should be read together with our{" "}
						<Link href="/terms" className="text-primary underline underline-offset-2 hover:no-underline">
							Terms &amp; Conditions
						</Link>{" "}
						and{" "}
						<Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
							Privacy Policy
						</Link>
						, which are available on the Pickfoo Platform.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">2. General Principles</h2>
					<p className="text-muted-foreground mb-3">Our refund decisions are guided by the following principles:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>
							Refunds are granted only when there is a genuine, valid reason attributable to Pickfoo, the
							Restaurant Partner, or the Delivery Partner — not for customer change of mind
						</li>
						<li>Each refund request is reviewed individually by our customer support team</li>
						<li>Pickfoo&apos;s decision on all refund matters is final and binding</li>
						<li>
							Customers are expected to raise issues in good faith; any attempt to abuse the refund process
							will result in account suspension
						</li>
						<li>
							Refunds will not be granted for issues arising solely from the customer&apos;s own actions,
							such as providing an incorrect address or being unavailable at the time of delivery
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">3. Refund Eligibility — Scenario Guide</h2>
					<p className="text-muted-foreground mb-3">
						The table below summarises the most common scenarios and whether a refund may be applicable. All
						decisions remain subject to review and verification by our team.
					</p>
					<Table
						headers={["Scenario", "Refund Eligibility", "Refund Amount", "Proof Required"]}
						rows={[
							["Order not delivered", "✓ Eligible", "Full refund", "No proof needed"],
							["Wrong item delivered", "✓ Eligible", "Full or partial", "Photo/description"],
							["Missing item(s) in order", "✓ Eligible", "Refund for missing items", "Description sufficient"],
							["Poor food quality", "✓ Case-by-case", "Partial refund / Wallet credit", "Photo required"],
							["Damaged packaging", "✓ Case-by-case", "Partial refund / Wallet credit", "Photo required"],
							[
								"Significant delay in delivery",
								"✓ Case-by-case",
								"Partial refund / compensation credit",
								"No proof needed",
							],
							["Restaurant cancelled order", "✓ Eligible", "Full refund", "No proof needed"],
							["Customer cancelled before preparation", "✓ Eligible", "Full refund", "No proof needed"],
							["Customer cancelled after preparation began", "✗ Not eligible", "No refund", "N/A"],
							["Change of mind after order confirmed", "✗ Not eligible", "No refund", "N/A"],
							["Incorrect address provided by customer", "✗ Not eligible", "No refund", "N/A"],
							["Fraudulent/duplicate claim", "✗ Not eligible", "No refund + account action", "N/A"],
						]}
					/>
					<p className="text-muted-foreground mt-3">
						The above table is a general guide only. Pickfoo reserves the right to make exceptions or apply
						different treatment based on the specific circumstances of each case.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">4. How to Raise a Refund Request</h2>
					<p className="text-muted-foreground mb-4">To request a refund, please follow these steps:</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">Step 1 — Contact Us</h3>
					<p className="text-muted-foreground mb-3">
						Reach out to our customer support team through any of the following channels:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>
							<strong className="text-foreground">In-app:</strong> Go to &apos;My Orders&apos; → Select the
							order → Tap &apos;Report an Issue&apos;
						</li>
						<li>
							<strong className="text-foreground">Email:</strong> Send your request to{" "}
							<a
								href="mailto:contact@pickfoo.in"
								className="text-primary underline underline-offset-2 hover:no-underline"
							>
								contact@pickfoo.in
							</a>{" "}
							with your Order ID and issue details
						</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">Step 2 — Describe the Issue Clearly</h3>
					<p className="text-muted-foreground mb-3">Provide the following details in your request:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>Your registered mobile number or email address</li>
						<li>Order ID (found in your order confirmation or &apos;My Orders&apos; section)</li>
						<li>A clear description of the issue</li>
						<li>Supporting evidence where applicable (see Section 5)</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">Step 3 — Review by Our Team</h3>
					<p className="text-muted-foreground mb-6">
						Our customer support team will review your request, verify the details against order records, and
						may contact you for additional information if required.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">Step 4 — Resolution</h3>
					<p className="text-muted-foreground">
						Once a decision is made, we will notify you via the app or email. If your refund is approved, it
						will be processed as described in Section 6.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">5. Evidence &amp; Proof Requirements</h2>
					<p className="text-muted-foreground mb-4">
						The type of proof required depends on the nature of the issue:
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.1 Photo or Video Evidence Required</h3>
					<p className="text-muted-foreground mb-3">
						For the following issues, we request photographic or video evidence to help us investigate fairly:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Wrong item delivered (photo of the item received)</li>
						<li>Damaged packaging or spillage (photo of the packaging/food)</li>
						<li>Poor food quality such as undercooked, contaminated, or visibly spoiled food (photo)</li>
					</ul>
					<p className="text-muted-foreground mb-6">
						Please submit evidence at the time of raising your request. Evidence submitted after the initial
						complaint may not be accepted.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.2 Description Sufficient</h3>
					<p className="text-muted-foreground mb-3">
						For the following issues, a clear written description of the problem is generally sufficient:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>Missing items in your order</li>
						<li>Order not delivered</li>
						<li>Significant delivery delay</li>
						<li>Restaurant or Pickfoo-initiated cancellation</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.3 No Evidence Required</h3>
					<p className="text-muted-foreground mb-3">
						For system-confirmed issues such as a failed delivery confirmed by our tracking system or a
						restaurant-side cancellation reflected in our records, no additional evidence will be required from
						the customer.
					</p>
					<p className="text-muted-foreground">
						Submitting fabricated, edited, or misleading evidence is a serious violation of our Terms &amp;
						Conditions and may result in permanent account suspension and legal action.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">6. Refund Method &amp; Processing Time</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.1 Refund Methods</h3>
					<p className="text-muted-foreground mb-3">
						Upon approval, customers may choose how they wish to receive their refund:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>
							<strong className="text-foreground">Pickfoo Wallet Credits:</strong> Refund is credited
							instantly to your Pickfoo Wallet and can be used on your next order
						</li>
						<li>
							<strong className="text-foreground">Original Payment Method:</strong> Refund is returned to
							the debit/credit card, UPI, or bank account used for the original payment
						</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.2 Processing Time</h3>
					<Table
						headers={["Refund Method", "Processing Time"]}
						rows={[
							["Pickfoo Wallet Credits", "Instant upon approval"],
							[
								"Original Payment Method (UPI / Debit / Credit Card)",
								"Instant to 2 business days (subject to bank processing)",
							],
							["Net Banking", "Up to 3 business days"],
						]}
					/>
					<p className="text-muted-foreground mt-3">
						While Pickfoo processes refunds instantly upon approval, the actual credit to your bank account or
						card depends on your bank&apos;s processing timelines. If you do not receive your refund within 5
						business days, please contact your bank before reaching out to us.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">7. Non-Refundable Situations</h2>
					<p className="text-muted-foreground mb-3">Refunds will not be issued in the following circumstances:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>Customer placed the order by mistake and preparation has already begun</li>
						<li>Customer was unavailable at the delivery address despite multiple attempts by the Delivery Partner</li>
						<li>Customer provided an incorrect or incomplete delivery address</li>
						<li>
							Customer disliked the taste or flavour of correctly prepared food (taste is subjective and not a
							defect)
						</li>
						<li>
							Customer requested items not on the menu or made special customisation requests that the
							restaurant cannot accommodate
						</li>
						<li>Refund request raised for the same order more than once</li>
						<li>Issues caused by force majeure events such as extreme weather, natural disasters, or internet outages</li>
						<li>Delivery fees are non-refundable except in cases where the order was not delivered at all</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">8. Partial Refunds</h2>
					<p className="text-muted-foreground mb-3">
						In many situations, a partial refund may be more appropriate than a full refund. Partial refunds
						are typically applied when:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Only some items in the order were affected (e.g., one wrong item out of three)</li>
						<li>The food was delivered but with minor issues that do not warrant a full refund</li>
						<li>The delivery was significantly delayed but the order was eventually received</li>
						<li>Packaging was damaged but the food inside was unaffected</li>
					</ul>
					<p className="text-muted-foreground">
						The partial refund amount is determined at Pickfoo&apos;s discretion based on the value of the
						affected portion of the order and the severity of the issue. Our goal is always to arrive at a
						fair resolution for both the customer and our restaurant partners.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">9. Refunds as Pickfoo Wallet Credits</h2>
					<p className="text-muted-foreground mb-3">
						In some cases, Pickfoo may offer Wallet credits as a goodwill gesture or compensation even where a
						full cash refund may not be applicable. The following terms apply to refund credits:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>Wallet credits issued as refunds do not expire (unless otherwise stated at the time of issue)</li>
						<li>Credits can be used on any future Pickfoo order</li>
						<li>Credits have no cash value and cannot be transferred or withdrawn</li>
						<li>If your account is terminated for policy violations, any unused Wallet credits will be forfeited</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">10. Repeated or Fraudulent Refund Claims</h2>
					<p className="text-muted-foreground mb-3">
						Pickfoo takes refund integrity seriously. We monitor refund patterns across accounts to ensure fair
						usage of our refund process. The following actions may be taken if misuse is detected:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Warning issued to the account</li>
						<li>Refund request declined without further review</li>
						<li>Account suspended or permanently terminated</li>
						<li>Legal action pursued where fraud is suspected</li>
					</ul>
					<p className="text-muted-foreground">
						If you believe your account has been flagged incorrectly, please contact our Grievance Officer at{" "}
						<a
							href="mailto:contact@pickfoo.in"
							className="text-primary underline underline-offset-2 hover:no-underline"
						>
							contact@pickfoo.in
						</a>{" "}
						with your account details and a description of the situation.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">11. Contact &amp; Escalation</h2>
					<p className="text-muted-foreground mb-3">
						If you are not satisfied with the resolution provided by our customer support team, you may
						escalate your concern to our Grievance Officer:
					</p>
					<address className="not-italic text-muted-foreground space-y-1 mb-4">
						<p className="font-semibold text-foreground">Grievance Officer — Pickfoo Private Limited</p>
						<p>Mananthavady, Wayanad, Kerala, India</p>
						<p>
							Email:{" "}
							<a
								href="mailto:contact@pickfoo.in"
								className="text-primary underline underline-offset-2 hover:no-underline"
							>
								contact@pickfoo.in
							</a>
						</p>
					</address>
					<p className="text-muted-foreground mb-4">
						We will acknowledge your escalation within 48 hours and aim to resolve it within 15 business days.
					</p>
					<p className="text-muted-foreground">
						We value your trust in Pickfoo and are committed to making every experience right. Thank you for
						being a Pickfoo customer.
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
				<Link href="/cookie-policy" className="text-primary font-medium hover:underline">
					Cookie Policy
				</Link>
				<Link href="/terms" className="text-primary font-medium hover:underline">
					Terms &amp; Conditions
				</Link>
			</p>
		</div>
	);
}
