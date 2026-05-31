import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms & Conditions | pickfoo",
	description:
		"Terms and Conditions governing use of the Pickfoo app and website by Pickfoo Private Limited.",
	robots: { index: true, follow: true },
};

export default function TermsPage() {
	return (
		<div className="container-premium pt-28 pb-20 max-w-3xl">
			<p className="text-sm text-muted-foreground mb-2">
				PICKFOO PRIVATE LIMITED — Governing Use of the Pickfoo App &amp; Website
			</p>
			<h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Terms &amp; Conditions</h1>
			<p className="text-muted-foreground text-sm mb-10">
				Effective Date: 1 May 2025 &nbsp;|&nbsp; Last Updated: 5 May 2025
			</p>

			<div className="space-y-10 text-foreground/90 leading-relaxed">
				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">1. Introduction &amp; Acceptance</h2>
					<p className="text-muted-foreground mb-3">
						These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you
						and Pickfoo Private Limited (&quot;Pickfoo&quot;, &quot;we&quot;, &quot;us&quot;, or
						&quot;our&quot;), a company incorporated under the laws of India, with its registered office at
						Mananthavady, Wayanad, Kerala.
					</p>
					<p className="text-muted-foreground mb-3">
						By downloading, installing, accessing, or using the Pickfoo mobile application or website
						(collectively, the &quot;Platform&quot;), you confirm that you have read, understood, and agree
						to be bound by these Terms and our{" "}
						<Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
							Privacy Policy
						</Link>
						. If you do not agree to these Terms, you must not use the Platform.
					</p>
					<p className="text-muted-foreground mb-3">These Terms apply to all categories of users of the Platform, including:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Customers placing food orders (&quot;Customers&quot;)</li>
						<li>Restaurant and food business partners listing their menus on Pickfoo (&quot;Restaurant Partners&quot;)</li>
						<li>Delivery personnel fulfilling orders (&quot;Delivery Partners&quot;)</li>
					</ul>
					<p className="text-muted-foreground">
						Pickfoo reserves the right to amend these Terms at any time. Continued use of the Platform after
						any changes constitutes acceptance of the revised Terms. We will notify users of material changes
						via the app or registered email.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">2. Eligibility &amp; Account Registration</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">2.1 Eligibility</h3>
					<p className="text-muted-foreground mb-3">To use the Pickfoo Platform, you must:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>Be at least 18 years of age, or have the consent of a parent or legal guardian</li>
						<li>Be a resident of India</li>
						<li>Have the legal capacity to enter into a binding contract under the Indian Contract Act, 1872</li>
						<li>Not be prohibited from using the Platform under applicable law</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">2.2 Account Registration</h3>
					<p className="text-muted-foreground mb-3">
						You must create an account to place orders or access certain features. When registering, you agree
						to:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Provide accurate, current, and complete information</li>
						<li>Maintain and promptly update your account information</li>
						<li>Keep your login credentials confidential and not share them with any third party</li>
						<li>
							Notify us immediately at{" "}
							<a
								href="mailto:contact@pickfoo.in"
								className="text-primary underline underline-offset-2 hover:no-underline"
							>
								contact@pickfoo.in
							</a>{" "}
							if you suspect unauthorised access to your account
						</li>
					</ul>
					<p className="text-muted-foreground mb-6">
						You are solely responsible for all activity that occurs under your account. Pickfoo shall not be
						liable for any loss or damage arising from your failure to maintain account security.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">2.3 Social Sign-In</h3>
					<p className="text-muted-foreground">
						You may register or log in using third-party social accounts (e.g., Google, Facebook). By doing
						so, you authorise Pickfoo to access certain information from those platforms as permitted by your
						privacy settings on those services. Your use of social sign-in is also governed by the terms of
						the respective third-party platform.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">3. The Pickfoo Platform &amp; Services</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">3.1 Nature of Services</h3>
					<p className="text-muted-foreground mb-6">
						Pickfoo is a technology-enabled food delivery marketplace that connects Customers with Restaurant
						Partners and Delivery Partners. Pickfoo acts as an intermediary platform and is not itself a food
						manufacturer or restaurant. The actual sale of food items is a transaction between the Customer
						and the Restaurant Partner.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">3.2 Service Availability</h3>
					<p className="text-muted-foreground mb-3">
						The Platform and its services are available only in areas where Pickfoo operates. We reserve the
						right to:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>Modify, suspend, or discontinue any part of the Platform at any time without prior notice</li>
						<li>Restrict access to certain features or geographic areas</li>
						<li>Limit the number of orders accepted during peak periods or adverse weather conditions</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">3.3 Restaurant Partner Listings</h3>
					<p className="text-muted-foreground">
						Menu items, prices, availability, preparation times, and restaurant details displayed on the
						Platform are provided by Restaurant Partners. Pickfoo does not independently verify the accuracy of
						all such information. We endeavour to keep listings updated but cannot guarantee that all information
						is current at all times.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">4. Placing Orders</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">4.1 Order Process</h3>
					<p className="text-muted-foreground mb-3">When you place an order on Pickfoo:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>You are making an offer to purchase the selected items from the Restaurant Partner</li>
						<li>The order is confirmed once you receive an in-app or email confirmation</li>
						<li>Pickfoo will transmit your order to the Restaurant Partner for preparation</li>
						<li>A Delivery Partner will be assigned to collect and deliver your order</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">4.2 Minimum Order Value</h3>
					<p className="text-muted-foreground mb-6">
						Each Restaurant Partner may set a minimum order value that must be met before an order can be placed.
						The applicable minimum order value will be displayed on the restaurant&apos;s page prior to
						checkout.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">4.3 Order Accuracy</h3>
					<p className="text-muted-foreground mb-6">
						You are responsible for reviewing your order carefully before confirming it. Once an order is
						confirmed and accepted by the Restaurant Partner, modifications may not be possible. Please contact
						our support team immediately at{" "}
						<a
							href="mailto:contact@pickfoo.in"
							className="text-primary underline underline-offset-2 hover:no-underline"
						>
							contact@pickfoo.in
						</a>{" "}
						if you notice an error.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">4.4 Delivery Time</h3>
					<p className="text-muted-foreground">
						Estimated delivery times displayed on the Platform are indicative only and may vary due to factors
						including but not limited to traffic conditions, weather, order volume, and restaurant preparation
						time. Pickfoo does not guarantee delivery within any specific timeframe.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">5. Delivery</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">5.1 Delivery Fee</h3>
					<p className="text-muted-foreground mb-6">
						A delivery fee is charged on each order. The fee is calculated dynamically based on the distance
						between the restaurant and your delivery address and will be clearly displayed at checkout before you
						confirm your order. The delivery fee is subject to change and may vary based on demand, time of day,
						and location.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.2 Delivery Address</h3>
					<p className="text-muted-foreground mb-6">
						You are responsible for providing a complete, accurate, and accessible delivery address. Pickfoo and
						our Delivery Partners are not liable for failed or delayed deliveries resulting from incorrect or
						incomplete address information provided by you.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.3 Undeliverable Orders</h3>
					<p className="text-muted-foreground mb-3">
						If a Delivery Partner is unable to contact you or locate your address after reasonable attempts, the
						order may be marked as undeliverable. In such cases, refunds will be handled in accordance with our
						Cancellation &amp; Refund Policy in Section 7. Pickfoo reserves the right to recover delivery costs for
						undeliverable orders caused by Customer error.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.4 Contact-Free Delivery</h3>
					<p className="text-muted-foreground">
						Where you select a contact-free or safe drop delivery option, you acknowledge that Pickfoo and the
						Delivery Partner shall not be liable for any loss or damage to the order once it has been left at the
						designated location.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">6. Payments</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">6.1 Accepted Payment Methods</h3>
					<p className="text-muted-foreground mb-3">Pickfoo accepts the following payment methods:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>
							Online payments via debit cards, credit cards, UPI, net banking, and other methods supported by our
							payment gateway partners (including Razorpay or PayU)
						</li>
						<li>Pickfoo Wallet credits earned through promotions, referrals, or refunds</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.2 Payment Processing</h3>
					<p className="text-muted-foreground mb-6">
						All online payments are processed by third-party payment gateway providers. Pickfoo does not store
						your card or bank account details on its servers. By making a payment, you agree to the terms of the
						applicable payment gateway. Pickfoo is not responsible for errors or failures caused by the payment
						gateway.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.3 Pickfoo Wallet</h3>
					<p className="text-muted-foreground mb-3">
						Pickfoo may offer a digital wallet (&quot;Pickfoo Wallet&quot;) to store credits earned through
						promotions, referrals, cashback, or refunds. The following conditions apply to the Wallet:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>Wallet credits have no cash value and cannot be withdrawn or transferred to a bank account</li>
						<li>Credits may have an expiry date, which will be communicated to you at the time of crediting</li>
						<li>Wallet credits can only be used for orders on the Pickfoo Platform</li>
						<li>Pickfoo reserves the right to modify, suspend, or terminate the Wallet feature at any time</li>
						<li>Credits obtained through fraudulent means will be forfeited without notice</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.4 Pricing &amp; Taxes</h3>
					<p className="text-muted-foreground mb-6">
						All prices displayed on the Platform are in Indian Rupees (INR) and are inclusive of applicable taxes
						unless stated otherwise. Pickfoo reserves the right to change prices at any time. The price applicable
						to your order will be the price displayed at the time of checkout.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.5 Failed Transactions</h3>
					<p className="text-muted-foreground">
						If a payment fails after an order is placed, the order will not be confirmed. In rare cases where an
						amount is debited but the order is not confirmed, the amount will be refunded to the original payment
						method within 5–7 business days, subject to the policies of your bank or payment provider.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">7. Cancellation &amp; Refund Policy</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">7.1 Cancellation by Customer</h3>
					<p className="text-muted-foreground mb-6">
						You may cancel an order before it is accepted and preparation has begun by the Restaurant Partner.
						Once a Restaurant Partner has accepted and begun preparing your order, cancellation may not be
						possible. Cancellation eligibility will be indicated in the app at the time of your request.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">7.2 Cancellation by Pickfoo or Restaurant Partner</h3>
					<p className="text-muted-foreground mb-3">
						Pickfoo or a Restaurant Partner may cancel an order in circumstances including:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>The ordered item(s) are unavailable</li>
						<li>The delivery address is outside our serviceable area</li>
						<li>The Restaurant Partner is unable to fulfil the order due to operational reasons</li>
						<li>Suspected fraudulent or invalid order</li>
					</ul>
					<p className="text-muted-foreground mb-6">
						In such cases, you will receive a full refund to your original payment method or Pickfoo Wallet, as
						applicable.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">7.3 Refund Policy</h3>
					<p className="text-muted-foreground mb-3">
						Refunds at Pickfoo are handled on a partial basis depending on the nature of the issue. The following
						guidelines apply:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Wrong item delivered: Partial or full refund, or replacement, at Pickfoo&apos;s discretion</li>
						<li>Missing items in order: Refund for the missing item(s) only</li>
						<li>Poor food quality or packaging issue: Partial refund or Wallet credit, subject to review</li>
						<li>Order not delivered: Full refund to original payment method or Wallet</li>
						<li>Delayed delivery beyond a reasonable threshold: Partial refund or compensation credit, at Pickfoo&apos;s discretion</li>
						<li>Customer change of mind after preparation has begun: No refund applicable</li>
					</ul>
					<p className="text-muted-foreground mb-3">
						All refund requests must be raised within 24 hours of the order delivery time through the app or by
						contacting{" "}
						<a
							href="mailto:contact@pickfoo.in"
							className="text-primary underline underline-offset-2 hover:no-underline"
						>
							contact@pickfoo.in
						</a>
						. Requests submitted after this period may not be considered. Pickfoo&apos;s decision on refunds is
						final. For more detail, see our{" "}
						<Link href="/refund-policy" className="text-primary underline underline-offset-2 hover:no-underline">
							Refund Policy
						</Link>
						.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">7.4 Refund Processing Time</h3>
					<p className="text-muted-foreground">
						Approved refunds will be processed within 5–7 business days to the original payment method, or
						immediately to your Pickfoo Wallet if you choose that option.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">8. Promotional Codes &amp; Loyalty Credits</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">8.1 Promotional Codes</h3>
					<p className="text-muted-foreground mb-3">
						Pickfoo may issue promotional codes (&quot;Promo Codes&quot;) offering discounts or other benefits.
						Promo Codes are subject to the following conditions:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>Each Promo Code is valid for a limited time and may be subject to a minimum order value</li>
						<li>Promo Codes can only be applied at checkout and cannot be applied retrospectively</li>
						<li>Only one Promo Code may be applied per order unless otherwise stated</li>
						<li>Promo Codes are non-transferable and have no cash value</li>
						<li>Pickfoo reserves the right to withdraw or modify any Promo Code at any time without notice</li>
						<li>Any attempt to misuse, duplicate, or fraudulently obtain Promo Codes will result in account suspension</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">8.2 Loyalty Credits &amp; Referral Programme</h3>
					<p className="text-muted-foreground">
						Pickfoo may offer a loyalty or referral programme through which you can earn Wallet credits.
						Participation in any such programme is subject to its specific terms as communicated in the app.
						Pickfoo reserves the right to modify or discontinue the programme at any time. Credits earned through
						referrals will be issued only upon the successful completion of the referred user&apos;s first
						qualifying order.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">9. Restaurant Partner Obligations</h2>
					<p className="text-muted-foreground mb-3">
						Restaurant Partners who list their services on Pickfoo agree to:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>
							Provide accurate and up-to-date menu information, including item descriptions, prices, allergen
							information, and availability
						</li>
						<li>
							Prepare food in accordance with applicable Food Safety and Standards Authority of India (FSSAI)
							regulations and maintain all required licences
						</li>
						<li>Accept and fulfil orders in a timely manner</li>
						<li>Maintain hygiene and food safety standards as required by law</li>
						<li>Not misrepresent the quality, quantity, or nature of food items listed</li>
						<li>Cooperate with Pickfoo in resolving Customer complaints related to their orders</li>
					</ul>
					<p className="text-muted-foreground">
						Pickfoo reserves the right to suspend or remove any Restaurant Partner from the Platform for
						non-compliance with these obligations or our partner agreements.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">10. Delivery Partner Obligations</h2>
					<p className="text-muted-foreground mb-3">Delivery Partners operating on the Pickfoo Platform agree to:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Maintain a valid driving licence, vehicle registration, and insurance as applicable</li>
						<li>Handle all orders with care to ensure food arrives in good condition</li>
						<li>Behave professionally and respectfully towards Customers and Restaurant Partners</li>
						<li>Comply with all applicable traffic laws and road safety regulations</li>
						<li>Not carry additional passengers or goods during an active delivery</li>
						<li>Report any accidents, incidents, or disputes to Pickfoo immediately</li>
					</ul>
					<p className="text-muted-foreground">
						Delivery Partners are independent contractors and not employees of Pickfoo. Pickfoo is not liable for
						the acts or omissions of Delivery Partners beyond what is expressly provided in these Terms.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">11. Prohibited Conduct</h2>
					<p className="text-muted-foreground mb-3">Users of the Platform must not:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Provide false, misleading, or fraudulent information during registration or ordering</li>
						<li>Use the Platform for any unlawful purpose or in violation of applicable Indian law</li>
						<li>Harass, abuse, or threaten Pickfoo staff, Delivery Partners, or Restaurant Partners</li>
						<li>Attempt to gain unauthorised access to the Platform or other users&apos; accounts</li>
						<li>Reverse engineer, copy, or reproduce any part of the Platform without written consent</li>
						<li>Post or transmit any content that is defamatory, obscene, or harmful</li>
						<li>Manipulate ratings, reviews, or feedback through dishonest means</li>
						<li>Use automated tools, bots, or scripts to interact with the Platform</li>
						<li>Exploit promotions or referral programmes in a manner not intended by Pickfoo</li>
					</ul>
					<p className="text-muted-foreground">
						Violation of these prohibitions may result in immediate account suspension, termination, and/or legal
						action as appropriate.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">12. Intellectual Property</h2>
					<p className="text-muted-foreground mb-3">
						All content on the Pickfoo Platform, including but not limited to the Pickfoo name and logo, app
						design, graphics, text, software, and user interface elements, is the exclusive property of Pickfoo
						Private Limited or its licensors and is protected by applicable Indian and international intellectual
						property laws.
					</p>
					<p className="text-muted-foreground mb-3">
						You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the
						Platform solely for personal, non-commercial purposes in accordance with these Terms. You must not:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>Reproduce, distribute, modify, or create derivative works of any Platform content</li>
						<li>Use Pickfoo&apos;s trademarks, logos, or branding without prior written permission</li>
						<li>Frame or mirror any part of the Platform on another website or application</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">13. Limitation of Liability &amp; Disclaimers</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">13.1 Platform &quot;As Is&quot;</h3>
					<p className="text-muted-foreground mb-6">
						The Pickfoo Platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
						warranties of any kind, express or implied, including but not limited to merchantability, fitness for a
						particular purpose, or uninterrupted availability.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">13.2 Limitation of Liability</h3>
					<p className="text-muted-foreground mb-3">
						To the maximum extent permitted by applicable law, Pickfoo shall not be liable for:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Any indirect, incidental, special, consequential, or punitive damages</li>
						<li>Loss of profits, revenue, data, or business opportunities</li>
						<li>Food quality, hygiene, or safety issues arising from Restaurant Partner preparation</li>
						<li>Delays caused by traffic, weather, or other circumstances beyond our control</li>
						<li>Losses arising from unauthorised access to your account due to your failure to maintain security</li>
						<li>Interruptions, errors, or failures in third-party payment services</li>
					</ul>
					<p className="text-muted-foreground mb-6">
						Our total aggregate liability to you for any claim arising out of or in connection with the Platform
						shall not exceed the total amount paid by you for the specific order giving rise to the claim.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">13.3 Indemnification</h3>
					<p className="text-muted-foreground">
						You agree to indemnify, defend, and hold harmless Pickfoo, its directors, employees, agents, and
						partners from and against any claims, liabilities, damages, losses, and expenses (including legal
						fees) arising out of or in connection with your use of the Platform, your violation of these Terms,
						or your violation of any third-party rights.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">14. Grievance Redressal</h2>
					<p className="text-muted-foreground mb-3">
						In accordance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce)
						Rules, 2020, Pickfoo has designated a Grievance Officer to address user complaints:
					</p>
					<address className="not-italic text-muted-foreground space-y-1 mb-3">
						<p className="font-semibold text-foreground">Grievance Officer</p>
						<p>Pickfoo Private Limited</p>
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
					<p className="text-muted-foreground">
						We will acknowledge your grievance within 48 hours and endeavour to resolve it within 30 days of
						receipt.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">15. Governing Law &amp; Dispute Resolution</h2>
					<p className="text-muted-foreground mb-3">
						These Terms shall be governed by and construed in accordance with the laws of India. Any dispute,
						controversy, or claim arising out of or relating to these Terms, the Platform, or any services provided
						by Pickfoo shall first be attempted to be resolved through good-faith negotiation.
					</p>
					<p className="text-muted-foreground">
						If a dispute cannot be resolved through negotiation within 30 days, it shall be subject to the
						exclusive jurisdiction of the courts at Wayanad, Kerala, India.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">16. Termination of Account</h2>
					<p className="text-muted-foreground mb-3">
						Pickfoo reserves the right to suspend or permanently terminate your account and access to the Platform
						at any time, with or without notice, for reasons including but not limited to:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Breach of any provision of these Terms</li>
						<li>Fraudulent activity or misuse of the Platform</li>
						<li>Non-payment or repeated chargebacks</li>
						<li>Conduct that is harmful to other users, partners, or Pickfoo</li>
					</ul>
					<p className="text-muted-foreground">
						You may also delete your account at any time through the app settings or by contacting us at{" "}
						<a
							href="mailto:contact@pickfoo.in"
							className="text-primary underline underline-offset-2 hover:no-underline"
						>
							contact@pickfoo.in
						</a>
						. Upon account deletion, your personal data will be handled in accordance with our{" "}
						<Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
							Privacy Policy
						</Link>
						.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">17. Miscellaneous</h2>
					<ul className="list-disc pl-6 space-y-3 text-muted-foreground">
						<li>
							<strong className="text-foreground">Entire Agreement:</strong> These Terms, together with our{" "}
							<Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
								Privacy Policy
							</Link>
							, constitute the entire agreement between you and Pickfoo regarding your use of the Platform.
						</li>
						<li>
							<strong className="text-foreground">Severability:</strong> If any provision of these Terms is found to
							be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
						</li>
						<li>
							<strong className="text-foreground">Waiver:</strong> Failure by Pickfoo to enforce any right or
							provision of these Terms shall not constitute a waiver of that right or provision.
						</li>
						<li>
							<strong className="text-foreground">Assignment:</strong> You may not assign your rights or
							obligations under these Terms without our prior written consent. Pickfoo may assign its rights
							without restriction.
						</li>
						<li>
							<strong className="text-foreground">Force Majeure:</strong> Pickfoo shall not be liable for any
							failure or delay in performance resulting from causes beyond our reasonable control, including
							natural disasters, government actions, internet outages, or pandemics.
						</li>
						<li>
							<strong className="text-foreground">Language:</strong> These Terms are written in English. In the
							event of any conflict with a translated version, the English version shall prevail.
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">18. Contact Us</h2>
					<p className="text-muted-foreground mb-3">
						For any questions, concerns, or feedback regarding these Terms and Conditions, please reach out to us:
					</p>
					<address className="not-italic text-muted-foreground space-y-1 mb-4">
						<p className="font-semibold text-foreground">Pickfoo Private Limited</p>
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
					<p className="text-muted-foreground">
						By using the Pickfoo Platform, you acknowledge that you have read, understood, and agree to be bound by
						these Terms and Conditions.
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
				<Link href="/refund-policy" className="text-primary font-medium hover:underline">
					Refund Policy
				</Link>
			</p>
		</div>
	);
}
