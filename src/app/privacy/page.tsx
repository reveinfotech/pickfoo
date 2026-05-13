import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Privacy Policy | pickfoo",
	description:
		"How Pickfoo Private Limited collects, uses, stores, and protects your personal information on the Pickfoo app, website, and related services.",
	robots: { index: true, follow: true },
};

export default function PrivacyPage() {
	return (
		<div className="container-premium pt-28 pb-20 max-w-3xl">
			<p className="text-sm text-muted-foreground mb-2">
				PICKFOO PRIVATE LIMITED — For the Pickfoo App &amp; Website
			</p>
			<h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Privacy Policy</h1>
			<p className="text-muted-foreground text-sm mb-10">
				Effective Date: 1 May 2025 &nbsp;|&nbsp; Last Updated: 5 May 2025
			</p>

			<div className="space-y-10 text-foreground/90 leading-relaxed">
				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">1. Introduction</h2>
					<p className="text-muted-foreground mb-3">
						Welcome to Pickfoo, a food delivery platform operated by Pickfoo Private Limited
						(&quot;Pickfoo&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company incorporated in India with its
						principal place of business at Mananthavady, Wayanad, Kerala.
					</p>
					<p className="text-muted-foreground mb-3">
						This Privacy Policy explains how we collect, use, store, share, and protect your personal
						information when you use the Pickfoo mobile application, website (collectively, the
						&quot;Platform&quot;), or any related services. By accessing or using our Platform, you agree to the
						practices described in this Policy.
					</p>
					<p className="text-muted-foreground mb-3">
						This Policy applies to all users of our Platform including customers placing orders, restaurant
						partners, and delivery personnel operating within India. It should be read together with our{" "}
						<Link href="/terms" className="text-primary underline underline-offset-2 hover:no-underline">
							Terms &amp; Conditions
						</Link>{" "}
						and{" "}
						<Link href="/cookie-policy" className="text-primary underline underline-offset-2 hover:no-underline">
							Cookie Policy
						</Link>
						.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">2. Information We Collect</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-4 text-foreground">2.1 Information You Provide Directly</h3>
					<p className="text-muted-foreground mb-3">
						When you register, place an order, or communicate with us, we may collect:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>Full name and contact details (email address, phone number)</li>
						<li>Delivery addresses and saved locations</li>
						<li>
							Payment information (processed securely via third-party payment gateways such as Razorpay or PayU;
							we do not store card details on our servers)
						</li>
						<li>Account credentials including passwords (stored in encrypted form)</li>
						<li>
							Social sign-in data when you log in via Google, Facebook, or other social platforms (as permitted
							by those platforms)
						</li>
						<li>Order history, preferences, and feedback/reviews</li>
						<li>Communications with our customer support team</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">2.2 Information Collected Automatically</h3>
					<p className="text-muted-foreground mb-3">When you use our Platform, we automatically collect:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>Device information (device model, operating system, unique device identifiers)</li>
						<li>IP address and network information</li>
						<li>App usage data (pages visited, features used, time spent, clicks)</li>
						<li>Log data and crash reports</li>
						<li>
							Real-time location data (GPS coordinates), with your permission, to enable delivery services, show
							nearby restaurants, and provide accurate ETAs
						</li>
						<li>
							<strong className="text-foreground">Microphone / voice search (app):</strong> if you enable optional
							voice search and grant microphone permission, audio is processed so your speech can be converted to
							text for in-app search. You can decline permission and use text search instead. Speech recognition
							may be performed by your device or platform services; we treat transcribed text like other search
							queries.
						</li>
						<li>Cookies and similar tracking technologies on our website (see Section 9)</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">2.3 Information from Third Parties</h3>
					<p className="text-muted-foreground mb-3">We may receive information about you from:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>Payment processors confirming transaction status</li>
						<li>Social media platforms when you use social login features</li>
						<li>Analytics providers such as Firebase and Google Analytics</li>
						<li>Restaurant partners regarding order status and fulfilment</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">3. How We Use Your Information</h2>
					<p className="text-muted-foreground mb-3">We use your personal data for the following purposes:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>To create and manage your Pickfoo account</li>
						<li>To process, fulfil, and track your food orders</li>
						<li>To facilitate secure payment processing</li>
						<li>To provide real-time delivery tracking and estimated arrival times</li>
						<li>To communicate order confirmations, status updates, and support responses</li>
						<li>
							To send promotional offers, discounts, and recommendations via SMS, email, push notifications, and
							WhatsApp (you may opt out at any time)
						</li>
						<li>To personalise your experience, including showing relevant restaurants and offers (including voice-derived search text where you use voice search)</li>
						<li>To detect and prevent fraud, unauthorised access, and abuse</li>
						<li>To analyse usage patterns and improve our Platform through Firebase, Google Analytics, and similar tools</li>
						<li>To comply with legal obligations under applicable Indian law</li>
						<li>
							To resolve disputes and enforce our{" "}
							<Link href="/terms" className="text-primary underline underline-offset-2 hover:no-underline">
								Terms &amp; Conditions
							</Link>
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">4. Legal Basis for Processing</h2>
					<p className="text-muted-foreground mb-3">
						Under applicable Indian data protection law (including the Information Technology Act, 2000 and the
						Digital Personal Data Protection Act, 2023, to the extent notified), we process your personal data on
						the following grounds:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>
							<strong className="text-foreground">Contractual necessity:</strong> To provide the services you have
							requested
						</li>
						<li>
							<strong className="text-foreground">Legitimate interests:</strong> For fraud prevention, service
							improvement, and security
						</li>
						<li>
							<strong className="text-foreground">Consent:</strong> For marketing communications, location tracking,
							and optional features such as microphone access for voice search (which you may withdraw at any
							time)
						</li>
						<li>
							<strong className="text-foreground">Legal obligation:</strong> Where required by applicable law or
							regulatory authority
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">5. Sharing of Your Information</h2>
					<p className="text-muted-foreground mb-4">We do not sell your personal data. We may share your information with:</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.1 Service Providers &amp; Partners</h3>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>
							<strong className="text-foreground">Restaurant partners:</strong> Name, phone number, and order details
							to fulfil your order
						</li>
						<li>
							<strong className="text-foreground">Delivery personnel:</strong> Name, delivery address, and phone
							number to complete delivery
						</li>
						<li>
							<strong className="text-foreground">Payment gateways (e.g., Razorpay, PayU):</strong> For secure
							payment processing
						</li>
						<li>
							<strong className="text-foreground">Cloud and hosting providers:</strong> For secure storage and
							platform infrastructure
						</li>
						<li>
							<strong className="text-foreground">Analytics providers:</strong> Firebase (Google) and Google Analytics
							for usage analytics
						</li>
						<li>
							<strong className="text-foreground">Communication platforms:</strong> For SMS, email, push
							notifications, and WhatsApp messages
						</li>
					</ul>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.2 Legal &amp; Regulatory Disclosures</h3>
					<p className="text-muted-foreground mb-6">
						We may disclose your information to government authorities, law enforcement, or courts where required
						to comply with applicable law, respond to legal process, or protect the rights and safety of Pickfoo,
						its users, or the public.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">5.3 Business Transfers</h3>
					<p className="text-muted-foreground">
						In the event of a merger, acquisition, restructuring, or sale of assets, your personal data may be
						transferred to the successor entity, subject to the same privacy protections.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">6. Location Data</h2>
					<p className="text-muted-foreground mb-3">Our Platform uses your device&apos;s location services to:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Show you nearby restaurants and delivery availability</li>
						<li>Calculate accurate delivery times and routes</li>
						<li>Enable real-time order tracking for you and our delivery partners</li>
					</ul>
					<p className="text-muted-foreground mb-3">
						We request access to your location only when you use the app and only with your explicit permission.
						You can revoke location access at any time through your device settings; however, this may limit
						certain features of the Platform. We do not share your precise location with third parties other than
						delivery partners during an active order.
					</p>
					<p className="text-muted-foreground">
						<strong className="text-foreground">Voice search:</strong> If you use optional voice search, microphone
						access is requested only for that feature; you may use text search without it. Audio may be processed on
						your device or by platform speech services; we use transcribed text like other search queries (see
						Sections 2.2, 3, 4, and 10).
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">7. Data Retention</h2>
					<p className="text-muted-foreground mb-3">
						We retain your personal data only for as long as necessary to fulfil the purposes set out in this
						Policy, or as required by applicable law. Specifically:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>
							<strong className="text-foreground">Account data:</strong> Retained for the duration of your account
							and for a reasonable period thereafter
						</li>
						<li>
							<strong className="text-foreground">Order data:</strong> Retained for a minimum of 3 years for legal
							and tax compliance
						</li>
						<li>
							<strong className="text-foreground">Payment transaction records:</strong> Retained as required by
							Indian financial regulations
						</li>
						<li>
							<strong className="text-foreground">Analytics data:</strong> Typically retained for up to 26 months
						</li>
					</ul>
					<p className="text-muted-foreground">
						When personal data is no longer required, we delete or anonymise it in a secure manner.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">8. Data Security</h2>
					<p className="text-muted-foreground mb-3">
						We implement industry-standard technical and organisational measures to protect your personal data,
						including:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Encryption of data in transit using TLS/HTTPS</li>
						<li>Encrypted storage of passwords and sensitive credentials</li>
						<li>Secure, access-controlled server environments</li>
						<li>Regular security audits and vulnerability assessments</li>
						<li>Restricted employee access to personal data on a need-to-know basis</li>
					</ul>
					<p className="text-muted-foreground">
						While we take all reasonable precautions, no method of electronic transmission or storage is 100%
						secure. If you become aware of any security breach, please contact us immediately at{" "}
						<a
							href="mailto:info@pickfoo.in"
							className="text-primary underline underline-offset-2 hover:no-underline"
						>
							info@pickfoo.in
						</a>
						.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">9. Cookies &amp; Tracking Technologies</h2>
					<p className="text-muted-foreground mb-3">
						Our website uses cookies and similar technologies to enhance your browsing experience. We use:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>
							<strong className="text-foreground">Essential cookies:</strong> Required for the website to function
							correctly (e.g., session management)
						</li>
						<li>
							<strong className="text-foreground">Analytics cookies:</strong> To understand how users interact with
							our website (Google Analytics)
						</li>
						<li>
							<strong className="text-foreground">Preference cookies:</strong> To remember your settings and
							preferences
						</li>
					</ul>
					<p className="text-muted-foreground mb-3">
						You can manage or disable cookies through your browser settings. Disabling certain cookies may affect
						the functionality of our website. Our mobile application uses Firebase SDKs for analytics and crash
						reporting, which may collect device identifiers. For more detail, see our{" "}
						<Link href="/cookie-policy" className="text-primary underline underline-offset-2 hover:no-underline">
							Cookie Policy
						</Link>
						.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">10. Your Rights</h2>
					<p className="text-muted-foreground mb-3">
						As a user, you have the following rights with respect to your personal data:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>
							<strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about
							you
						</li>
						<li>
							<strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete
							data
						</li>
						<li>
							<strong className="text-foreground">Deletion:</strong> Request deletion of your personal data (subject to
							legal obligations)
						</li>
						<li>
							<strong className="text-foreground">Withdrawal of consent:</strong> Withdraw consent for location
							tracking, marketing communications, or optional features such as microphone access, at any time
							through your account settings or by contacting us
						</li>
						<li>
							<strong className="text-foreground">Opt-out of marketing:</strong> Unsubscribe from SMS, email, push
							notifications, or WhatsApp communications via the unsubscribe link in messages or through app
							settings
						</li>
						<li>
							<strong className="text-foreground">Data portability:</strong> Request your data in a structured,
							commonly used format, where technically feasible
						</li>
					</ul>
					<p className="text-muted-foreground">
						To exercise any of these rights, please contact our Data Protection Officer at{" "}
						<a
							href="mailto:info@pickfoo.in"
							className="text-primary underline underline-offset-2 hover:no-underline"
						>
							info@pickfoo.in
						</a>
						. We will respond to your request within 30 days.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">11. Children&apos;s Privacy</h2>
					<p className="text-muted-foreground">
						Our Platform is not directed to individuals under the age of 18. We do not knowingly collect personal
						data from minors. If we become aware that a minor has provided us with personal information, we will
						delete such data promptly. If you believe we have inadvertently collected information from a minor,
						please contact us at{" "}
						<a
							href="mailto:info@pickfoo.in"
							className="text-primary underline underline-offset-2 hover:no-underline"
						>
							info@pickfoo.in
						</a>
						.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">12. Third-Party Links &amp; Services</h2>
					<p className="text-muted-foreground">
						Our Platform may contain links to third-party websites or services. This Privacy Policy does not apply
						to those external services. We encourage you to review the privacy policies of any third-party services
						you access through our Platform. We are not responsible for the privacy practices or content of
						third-party sites.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">13. Changes to This Privacy Policy</h2>
					<p className="text-muted-foreground mb-3">
						We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or
						applicable law. When we make material changes, we will:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Update the &quot;Last Updated&quot; date at the top of this Policy</li>
						<li>Notify you via a prominent notice on our app or website, or by email where appropriate</li>
					</ul>
					<p className="text-muted-foreground">
						Your continued use of our Platform after the effective date of any updated Policy constitutes your
						acceptance of the revised terms. We encourage you to review this Policy periodically.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">14. Contact Us</h2>
					<p className="text-muted-foreground mb-3">
						If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
						please contact our Data Protection Officer:
					</p>
					<address className="not-italic text-muted-foreground space-y-1 mb-3">
						<p className="font-semibold text-foreground">Pickfoo Private Limited</p>
						<p>Mananthavady, Wayanad, Kerala, India</p>
						<p>
							Email:{" "}
							<a
								href="mailto:info@pickfoo.in"
								className="text-primary underline underline-offset-2 hover:no-underline"
							>
								info@pickfoo.in
							</a>
						</p>
					</address>
					<p className="text-muted-foreground">
						We are committed to resolving any privacy concerns promptly and transparently.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">15. App store listings</h2>
					<p className="text-muted-foreground">
						For Google Play and other app stores, provide the public URL of this Privacy Policy on your production
						domain (for example,{" "}
						<code className="text-foreground bg-muted px-1.5 py-0.5 rounded text-sm">
							https://your-domain/privacy
						</code>
						). Ensure your store &quot;Data safety&quot; declarations and permissions (including microphone, if you
						offer voice search) match what the app actually collects.
					</p>
				</section>
			</div>

			<p className="mt-12 text-muted-foreground text-sm flex flex-wrap gap-x-4 gap-y-2">
				<Link href="/" className="text-primary font-medium hover:underline">
					← Back to home
				</Link>
				<Link href="/cookie-policy" className="text-primary font-medium hover:underline">
					Cookie Policy
				</Link>
				<Link href="/refund-policy" className="text-primary font-medium hover:underline">
					Refund Policy
				</Link>
				<Link href="/terms" className="text-primary font-medium hover:underline">
					Terms &amp; Conditions
				</Link>
			</p>
		</div>
	);
}
