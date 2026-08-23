import type { Metadata } from "next";
import Link from "next/link";
import {
	Facebook,
	Headphones,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Share2,
	Youtube,
} from "lucide-react";
import { ContactEmail } from "@/components/ContactEmail";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import {
	ADDRESS,
	CONTACT_EMAIL,
	LEGAL_NAME,
	SITE_URL,
	SOCIAL_PROFILES,
	buildPageMetadata,
	pageSeo,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.contact);

const contactPageSchema = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Contact Us | Pickfoo",
	url: `${SITE_URL}/contact`,
	mainEntity: {
		"@type": "Organization",
		name: LEGAL_NAME,
		email: CONTACT_EMAIL,
		address: {
			"@type": "PostalAddress",
			...ADDRESS,
		},
	},
};

const socialLinks = [
	{ href: SOCIAL_PROFILES.instagram, Icon: Instagram, label: "Instagram" },
	{ href: SOCIAL_PROFILES.facebook, Icon: Facebook, label: "Facebook" },
	{ href: SOCIAL_PROFILES.linkedin, Icon: Linkedin, label: "LinkedIn" },
	{ href: SOCIAL_PROFILES.youtube, Icon: Youtube, label: "YouTube" },
];

const channels = [
	{
		icon: Mail,
		title: "Email",
		content: (
			<ContactEmail
				showAddress
				className="text-foreground font-semibold hover:text-primary transition-colors break-all"
			/>
		),
	},
	{
		icon: MapPin,
		title: "Location",
		content: (
			<p className="text-foreground font-semibold leading-snug">
				Mananthavady, Wayanad
				<br />
				Kerala, India {ADDRESS.postalCode}
			</p>
		),
	},
	{
		icon: Headphones,
		title: "App support",
		content: (
			<Link
				href="/support"
				className="text-foreground font-semibold hover:text-primary transition-colors"
			>
				Help &amp; Support
			</Link>
		),
	},
	{
		icon: Share2,
		title: "Social",
		content: (
			<div className="flex gap-2">
				{socialLinks.map(({ href, Icon, label }) => {
					const isLive = Boolean(href);
					return (
						<a
							key={label}
							href={isLive ? href : "#"}
							{...(isLive
								? { target: "_blank", rel: "noopener noreferrer" }
								: undefined)}
							aria-label={label}
							className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
						>
							<Icon className="w-4 h-4" />
						</a>
					);
				})}
			</div>
		),
	},
];

export default function ContactPage() {
	return (
		<div className="pt-28 pb-20">
			<JsonLd data={contactPageSchema} />

			<section className="container-premium max-w-6xl mb-12 md:mb-16">
				<h1 className="text-4xl md:text-6xl font-bold font-outfit text-center leading-tight text-primary">
					Contact Us
				</h1>
			</section>

			<section className="container-premium max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
					<div className="lg:col-span-3 p-6 md:p-10 rounded-3xl bg-secondary/30 border border-primary/10 shadow-lg shadow-black/40">
						<h2 className="text-2xl md:text-3xl font-bold font-outfit text-primary mb-8">
							Send a message
						</h2>
						<ContactForm />
					</div>

					<div className="lg:col-span-2 flex flex-col gap-12 pt-6 md:pt-10">
						{channels.map(({ icon: Icon, title, content }) => (
							<div key={title} className="flex items-center gap-4">
								<div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
									<Icon className="w-5 h-5" />
								</div>
								<div className="min-w-0 space-y-1.5">
									<h2 className="text-xs font-bold font-outfit uppercase tracking-wider text-muted-foreground">
										{title}
									</h2>
									{content}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
