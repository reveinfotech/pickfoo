import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { AppDownloadButtons } from "@/components/AppDownloadButtons";
import { SOCIAL_PROFILES } from "@/lib/seo";

const socialLinks = [
	{ key: "facebook" as const, href: SOCIAL_PROFILES.facebook, Icon: Facebook, label: "Facebook" },
	{ key: "instagram" as const, href: SOCIAL_PROFILES.instagram, Icon: Instagram, label: "Instagram" },
	{ key: "twitter" as const, href: SOCIAL_PROFILES.twitter, Icon: Twitter, label: "X (Twitter)" },
	{ key: "linkedin" as const, href: SOCIAL_PROFILES.linkedin, Icon: Linkedin, label: "LinkedIn" },
	{ key: "youtube" as const, href: SOCIAL_PROFILES.youtube, Icon: Youtube, label: "YouTube" },
].filter((item) => Boolean(item.href));

export function Footer() {
	return (
		<footer className="bg-secondary/50 pt-20 pb-10 border-t border-primary/10">
			<div className="container-premium">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					<div className="space-y-6">
						<Link href="/" className="flex items-center">
							<Image
								src="/logo.png"
								alt="Pickfoo Mananthavady"
								width={160}
								height={45}
								className="h-12 w-auto object-contain"
							/>
						</Link>
						<p className="text-muted-foreground leading-relaxed">
							Hyperlocal food delivery for Mananthavady and Wayanad — fast, fresh, and local.
						</p>
						<AppDownloadButtons size="compact" />
						{socialLinks.length > 0 && (
							<div className="flex space-x-4">
								{socialLinks.map(({ href, Icon, label }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
									>
										<Icon className="w-5 h-5" />
									</a>
								))}
							</div>
						)}
					</div>

					<div>
						<h4 className="text-lg font-bold font-outfit mb-6">Quick Links</h4>
						<ul className="space-y-4">
							<li>
								<Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/mananthavady"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Mananthavady
								</Link>
							</li>
							<li>
								<Link
									href="/wayanad"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Wayanad Special
								</Link>
							</li>
							<li>
								<Link
									href="/features"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="/solutions"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Our Solutions
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									About
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-bold font-outfit mb-6">For Partners</h4>
						<ul className="space-y-4">
							<li>
								<Link
									href="/join"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Restaurant Partner
								</Link>
							</li>
							<li>
								<Link
									href="/join"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Delivery Partner
								</Link>
							</li>
							<li>
								<Link
									href="/solutions"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Merchant Solutions
								</Link>
							</li>
							<li>
								<a
									href="https://restaurant.pickfoo.in/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Restaurant Portal
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-bold font-outfit mb-6">Support</h4>
						<ul className="space-y-4">
							<li>
								<Link
									href="/faq"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="/support"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Help &amp; Support
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/cookie-policy"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link
									href="/cookie-policy#cookie-settings"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Cookie Settings
								</Link>
							</li>
							<li>
								<Link
									href="/refund-policy"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Refund Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Terms &amp; Conditions
								</Link>
							</li>
							<li>
								<Link
									href="/delete-account"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Delete account
								</Link>
							</li>
							<li>
								<ContactEmail label="Contact Us" />
							</li>
							<li>
								<ContactEmail showAddress className="font-semibold" />
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-primary/10 pt-8 text-center text-muted-foreground text-sm">
					<p>
						© {new Date().getFullYear()} Pickfoo Private Limited. All rights reserved. Made for
						Mananthavady, Wayanad.
					</p>
				</div>
			</div>
		</footer>
	);
}
