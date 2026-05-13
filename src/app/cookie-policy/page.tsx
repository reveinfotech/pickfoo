import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Cookie Policy | pickfoo",
	description:
		"How Pickfoo Private Limited uses cookies, mobile SDKs, and similar technologies on the Pickfoo website and app.",
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
			<table className="w-full min-w-[640px] text-sm text-left">
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

export default function CookiePolicyPage() {
	return (
		<div className="container-premium pt-28 pb-20 max-w-3xl">
			<p className="text-sm text-muted-foreground mb-2">
				PICKFOO PRIVATE LIMITED — For the Pickfoo App &amp; Website
			</p>
			<h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Cookie Policy</h1>
			<p className="text-muted-foreground text-sm mb-10">
				Effective Date: 1 May 2025 &nbsp;|&nbsp; Last Updated: 5 May 2025
			</p>

			<div className="space-y-10 text-foreground/90 leading-relaxed">
				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">1. Introduction</h2>
					<p className="text-muted-foreground mb-3">
						This Cookie Policy explains how Pickfoo Private Limited (&quot;Pickfoo&quot;, &quot;we&quot;,
						&quot;us&quot;, or &quot;our&quot;) uses cookies, mobile SDKs, and similar tracking technologies on
						our website and mobile application (collectively, the &quot;Platform&quot;).
					</p>
					<p className="text-muted-foreground mb-3">
						By using our website, you will be presented with a cookie consent banner that allows you to
						accept or reject non-essential cookies. By continuing to use the Pickfoo mobile app, you
						acknowledge our use of SDKs and analytics tools as described in this Policy.
					</p>
					<p className="text-muted-foreground">
						This Policy should be read alongside our{" "}
						<Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
							Privacy Policy
						</Link>{" "}
						and{" "}
						<Link href="/terms" className="text-primary underline underline-offset-2 hover:no-underline">
							Terms &amp; Conditions
						</Link>
						, which are available on the Pickfoo Platform. If you have any
						questions, please contact us at{" "}
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
					<h2 className="text-xl font-bold font-outfit mb-3">2. What Are Cookies?</h2>
					<p className="text-muted-foreground mb-4">
						Cookies are small text files that are placed on your device (computer, smartphone, or tablet)
						when you visit a website. They are widely used to make websites work efficiently, to remember
						your preferences, and to provide information to website owners about how users interact with
						their sites.
					</p>
					<p className="text-muted-foreground mb-6">
						Cookies are not harmful programs or viruses. They cannot execute code or deliver malware. Most
						cookies contain a unique identifier called a &quot;cookie ID&quot; — an anonymous string of
						characters that identifies your browser or device.
					</p>
					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">2.1 Types of Cookies by Duration</h3>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
						<li>
							<strong className="text-foreground">Session Cookies:</strong> Temporary cookies that exist
							only for the duration of your browsing session and are deleted when you close your browser.
							They are used to keep you logged in and maintain your shopping cart or order state.
						</li>
						<li>
							<strong className="text-foreground">Persistent Cookies:</strong> Cookies that remain on your
							device for a set period or until you manually delete them. They are used to remember your
							preferences across multiple visits.
						</li>
					</ul>
					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">2.2 Types of Cookies by Origin</h3>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>
							<strong className="text-foreground">First-Party Cookies:</strong> Set directly by Pickfoo on
							our domain to support core website functionality and analytics.
						</li>
						<li>
							<strong className="text-foreground">Third-Party Cookies:</strong> Set by external services
							integrated into our Platform (such as Google Analytics or advertising partners) via their own
							domains.
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">3. Mobile SDKs &amp; App Tracking</h2>
					<p className="text-muted-foreground mb-4">
						Unlike websites, mobile applications do not use cookies in the traditional sense. Instead, the
						Pickfoo app uses Software Development Kits (SDKs) — code libraries from third-party providers
						that are embedded within the app to perform similar functions to cookies.
					</p>
					<p className="text-muted-foreground mb-3">
						The Pickfoo app currently uses the following SDKs:
					</p>
					<Table
						headers={["SDK / Service", "Provider", "Purpose"]}
						rows={[
							["Firebase Analytics", "Google LLC", "App usage analytics, user behaviour tracking"],
							["Firebase Crashlytics", "Google LLC", "Crash reporting and app stability monitoring"],
							["Firebase Cloud Messaging (FCM)", "Google LLC", "Sending push notifications to your device"],
							[
								"Google Analytics for Firebase",
								"Google LLC",
								"App performance and conversion tracking",
							],
						]}
					/>
					<p className="text-muted-foreground">
						These SDKs may collect device identifiers (such as the Android Advertising ID or Apple IDFA),
						IP address, app events, and crash logs. You can limit SDK tracking through your device&apos;s
						privacy settings (see Section 6).
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">4. Cookies We Use on Our Website</h2>
					<p className="text-muted-foreground mb-3">
						The table below describes the categories of cookies used on the Pickfoo website, their purpose,
						and whether you can opt out of them:
					</p>
					<Table
						headers={["Cookie Type", "Purpose", "Examples", "Can You Opt Out?"]}
						rows={[
							[
								"Essential / Strictly Necessary",
								"Required for the website to function. Includes session management, login state, and security tokens.",
								"Session ID, CSRF token, login session",
								"No — always active",
							],
							[
								"Functional / Preference",
								"Remembers your preferences such as language, location, and saved addresses to personalise your experience.",
								"Language preference, saved address, theme",
								"Yes — via consent settings",
							],
							[
								"Analytics & Performance",
								"Helps us understand how users interact with the Platform to improve performance and usability.",
								"Google Analytics, Firebase Analytics",
								"Yes — via consent settings",
							],
							[
								"Marketing & Advertising",
								"Used to show you relevant promotions and offers. May track your activity across sessions.",
								"Google Ads, Meta Pixel (if used)",
								"Yes — via consent settings",
							],
							[
								"Third-Party / SDK Tracking (App)",
								"Mobile SDKs used in the Pickfoo app for analytics, crash reporting, and push notifications.",
								"Firebase SDK, Google Analytics for Firebase",
								"Partially — via device settings",
							],
						]}
					/>
					<p className="text-muted-foreground mt-3">
						The specific cookies in use may change as we update our Platform. We will update this Policy
						accordingly whenever material changes are made.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">5. How We Use Cookie &amp; Tracking Data</h2>
					<p className="text-muted-foreground mb-3">
						Information collected through cookies and SDKs is used for the following purposes:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
						<li>To keep you securely logged in to your Pickfoo account during your session</li>
						<li>To remember your delivery addresses, food preferences, and app settings across visits</li>
						<li>
							To understand how users navigate our website and app, which pages are most visited, and where
							users encounter difficulties
						</li>
						<li>To measure the performance of our Platform and identify areas for improvement</li>
						<li>To track the effectiveness of our marketing campaigns and promotions</li>
						<li>To detect and prevent fraudulent activity and security threats</li>
						<li>
							To send you relevant push notifications about your orders and offers (app only, with your
							permission)
						</li>
						<li>To comply with applicable legal and regulatory requirements</li>
					</ul>
					<p className="text-muted-foreground mt-4">
						We do not use cookies or tracking technologies to build profiles for sale to third parties, nor do
						we allow advertisers to place cookies directly on our Platform without your consent.
					</p>
				</section>

				<section id="cookie-settings">
					<h2 className="text-xl font-bold font-outfit mb-3">6. Your Cookie Choices &amp; Controls</h2>

					<h3 className="text-lg font-semibold font-outfit mb-2 mt-6 text-foreground">6.1 Website Cookie Consent Banner</h3>
					<p className="text-muted-foreground mb-3">When you first visit the Pickfoo website, you will be shown a cookie consent banner. You can:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>
							<strong className="text-foreground">Accept all cookies:</strong> Enables all cookie categories
							including functional, analytics, and marketing cookies
						</li>
						<li>
							<strong className="text-foreground">Reject non-essential cookies:</strong> Only strictly
							necessary cookies will be active; all other categories will be disabled
						</li>
						<li>
							<strong className="text-foreground">Customise your preferences:</strong> Choose which specific
							categories of cookies you wish to allow or block
						</li>
					</ul>
					<p className="text-muted-foreground mb-6">
						You can change your cookie preferences at any time by clicking the &quot;Cookie Settings&quot; link
						in the footer of our website. Your preferences will be saved for future visits.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.2 Browser-Level Controls</h3>
					<p className="text-muted-foreground mb-3">
						Most web browsers allow you to manage cookies through their settings. You can typically:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>View the cookies stored on your device</li>
						<li>Delete individual or all cookies</li>
						<li>Block cookies from specific websites or all websites</li>
						<li>Set your browser to notify you when a cookie is being placed</li>
					</ul>
					<p className="text-muted-foreground mb-2 font-medium text-foreground">Here is how to manage cookies in popular browsers:</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
						<li>
							<strong className="text-foreground">Google Chrome:</strong> Settings → Privacy and Security →
							Cookies and other site data
						</li>
						<li>
							<strong className="text-foreground">Mozilla Firefox:</strong> Options → Privacy &amp; Security
							→ Cookies and Site Data
						</li>
						<li>
							<strong className="text-foreground">Safari:</strong> Preferences → Privacy → Manage Website Data
						</li>
						<li>
							<strong className="text-foreground">Microsoft Edge:</strong> Settings → Cookies and Site
							Permissions → Cookies and Site Data
						</li>
					</ul>
					<p className="text-muted-foreground mb-6">
						Please note that disabling essential cookies may prevent parts of the Pickfoo website from
						functioning correctly, including logging in and placing orders.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.3 Mobile App — Device-Level Controls</h3>
					<p className="text-muted-foreground mb-3">
						You can limit tracking by SDKs in the Pickfoo app through your device&apos;s privacy settings:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>
							<strong className="text-foreground">Android:</strong> Settings → Google → Ads → Reset Advertising
							ID or Opt out of Ads Personalisation
						</li>
						<li>
							<strong className="text-foreground">iOS:</strong> Settings → Privacy &amp; Security → Tracking
							→ Disable &apos;Allow Apps to Request to Track&apos;
						</li>
					</ul>
					<p className="text-muted-foreground mb-6">
						You can also manage push notification permissions for the Pickfoo app in your device&apos;s
						notification settings. Turning off notifications will not affect your ability to use the app or
						place orders.
					</p>

					<h3 className="text-lg font-semibold font-outfit mb-2 text-foreground">6.4 Opt-Out of Google Analytics</h3>
					<p className="text-muted-foreground">
						To opt out of Google Analytics tracking across all websites, you can install the Google Analytics
						Opt-out Browser Add-on available at:{" "}
						<a
							href="https://tools.google.com/dlpage/gaoptout"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary underline underline-offset-2 hover:no-underline break-all"
						>
							https://tools.google.com/dlpage/gaoptout
						</a>
						. This add-on prevents Google Analytics JavaScript from sharing information with Google Analytics
						about your website visits.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">7. Third-Party Cookies &amp; Services</h2>
					<p className="text-muted-foreground mb-3">
						Some cookies on our website are set by third-party services that appear on our pages. These third
						parties have their own privacy and cookie policies, which we encourage you to review:
					</p>
					<Table
						headers={["Third Party", "Service", "Privacy Policy"]}
						rows={[
							[
								"Google LLC",
								"Google Analytics, Firebase, Google Maps",
								"https://policies.google.com/privacy",
							],
							[
								"Meta Platforms (if applicable)",
								"Meta Pixel / Facebook Ads",
								"https://www.facebook.com/policy/cookies",
							],
							[
								"Payment Gateway (Razorpay / PayU)",
								"Secure payment processing",
								"https://razorpay.com/privacy / https://payu.in/privacy",
							],
						]}
					/>
					<p className="text-muted-foreground mt-3">
						Pickfoo does not control how these third-party services use their cookies and is not responsible
						for their privacy practices. We recommend reviewing their respective privacy policies before
						interacting with their services.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">8. Cookie Data Retention</h2>
					<p className="text-muted-foreground mb-3">
						The retention period for cookie data depends on the type of cookie:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>
							<strong className="text-foreground">Session cookies:</strong> Deleted automatically when you
							close your browser
						</li>
						<li>
							<strong className="text-foreground">Persistent cookies:</strong> Retained for a period ranging
							from 30 days to 2 years depending on the cookie&apos;s purpose
						</li>
						<li>
							<strong className="text-foreground">Analytics data (Google Analytics / Firebase):</strong>{" "}
							Retained for up to 26 months by default, as per Google&apos;s data retention settings
						</li>
						<li>
							<strong className="text-foreground">Marketing cookies:</strong> Typically retained for up to 90
							days
						</li>
					</ul>
					<p className="text-muted-foreground">
						You can delete cookies stored on your device at any time through your browser or device settings
						as described in Section 6.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">9. Cookies &amp; Children</h2>
					<p className="text-muted-foreground">
						The Pickfoo Platform is not directed at children under the age of 18. We do not knowingly use
						cookies or tracking technologies to collect personal information from minors. If you believe a
						minor is using our Platform, please contact us at{" "}
						<a
							href="mailto:info@pickfoo.in"
							className="text-primary underline underline-offset-2 hover:no-underline"
						>
							info@pickfoo.in
						</a>{" "}
						so that we can take appropriate action.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">10. Changes to This Cookie Policy</h2>
					<p className="text-muted-foreground mb-3">
						We may update this Cookie Policy from time to time to reflect changes in the technologies we use,
						our business practices, or applicable law. When we make material changes, we will:
					</p>
					<ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
						<li>Update the &quot;Last Updated&quot; date at the top of this Policy</li>
						<li>Display a notification on our website or app where appropriate</li>
						<li>
							Reset your cookie consent preferences if the changes materially affect how we use your data, so
							that you can review and re-consent
						</li>
					</ul>
					<p className="text-muted-foreground">
						We encourage you to review this Cookie Policy periodically to stay informed about how we use
						tracking technologies.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-bold font-outfit mb-3">11. Contact Us</h2>
					<p className="text-muted-foreground mb-3">
						If you have any questions, concerns, or requests relating to this Cookie Policy or our use of
						tracking technologies, please contact us:
					</p>
					<address className="not-italic text-muted-foreground space-y-1">
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
					<p className="text-muted-foreground mt-4">
						We are committed to being transparent about our data practices and will respond to all cookie-related
						queries within 10 business days.
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
