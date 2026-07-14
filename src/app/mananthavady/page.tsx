import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import {
	buildPageMetadata,
	faqPageSchema,
	pageSeo,
} from "@/lib/seo";
import { ArrowRight, MapPin, MessageCircle, Store } from "lucide-react";

export const metadata: Metadata = buildPageMetadata(pageSeo.mananthavady);

const localFaqs = [
	{
		question: "Does Pickfoo deliver in Mananthavady?",
		answer:
			"Yes. Mananthavady is Pickfoo's launch market in Wayanad, Kerala. We connect local restaurants and delivery partners to serve diners across town.",
	},
	{
		question: "Why order on Pickfoo instead of WhatsApp?",
		answer:
			"One app shows multiple restaurants, live tracking, and digital payments — so you are not limited to a single kitchen's phone number when you are hungry.",
	},
	{
		question: "Which areas of Mananthavady do you cover?",
		answer:
			"Service focuses on Mananthavady town and nearby localities as partner restaurants and riders come online. Coverage details appear in the app at checkout.",
	},
];

export default function MananthavadyPage() {
	return (
		<>
			<JsonLd data={faqPageSchema(localFaqs)} />
			<div className="pt-28 pb-20">
				<section className="container-premium max-w-4xl mb-20">
					<p className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-6">
						Launch market
					</p>
					<h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6 leading-tight">
						Food delivery in{" "}
						<span className="text-primary italic">Mananthavady</span>
					</h1>
					<p className="text-xl text-muted-foreground leading-relaxed mb-8">
						Pickfoo Mananthavady is the hyperlocal food delivery platform built for this
						town — not a metro product with a Wayanad sticker. Order from partner
						restaurants, track your rider, and pay the way you prefer.
					</p>
					<div className="flex flex-wrap gap-4">
						<Button asChild size="lg" className="rounded-full h-12 px-8 font-bold">
							<Link href="/#download">
								Download the app
								<ArrowRight className="ml-2 w-4 h-4" />
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8 font-bold border-2">
							<Link href="/faq">Customer FAQ</Link>
						</Button>
					</div>
				</section>

				<section className="container-premium mb-20">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								icon: <MapPin className="w-6 h-6" />,
								title: "Mananthavady first",
								body: "PIN 670645 — our principal place of business and primary service area in Wayanad district, Kerala.",
							},
							{
								icon: <Store className="w-6 h-6" />,
								title: "Local kitchens",
								body: "Café classics, Malabar meals, and Wayanad specials from partners who already cook for this community.",
							},
							{
								icon: <MessageCircle className="w-6 h-6" />,
								title: "Beyond WhatsApp orders",
								body: "Browse more than one restaurant, see status in real time, and avoid juggling separate chats for every craving.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="p-8 rounded-3xl bg-secondary/30 border border-primary/5"
							>
								<div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
									{item.icon}
								</div>
								<h2 className="text-xl font-bold font-outfit mb-3">{item.title}</h2>
								<p className="text-muted-foreground leading-relaxed">{item.body}</p>
							</div>
						))}
					</div>
				</section>

				<section className="container-premium max-w-3xl mb-20">
					<h2 className="text-3xl font-bold font-outfit mb-4">
						The Mananthavady food delivery landscape
					</h2>
					<p className="text-muted-foreground leading-relaxed mb-4">
						National apps like Swiggy and Zomato do not currently operate food delivery
						here. Some restaurants already take WhatsApp or phone orders; lower-profile
						networks may list a few kitchens. Pickfoo&apos;s promise is a dedicated local
						platform: multi-restaurant discovery, tracking, and payouts for partners —
						owned by a company based in Mananthavady.
					</p>
					<p className="text-muted-foreground leading-relaxed mb-4">
						Explore Wayanad&apos;s food culture on our{" "}
						<Link href="/wayanad" className="text-primary underline underline-offset-2">
							Wayanad Special
						</Link>{" "}
						page, or learn about{" "}
						<Link href="/about" className="text-primary underline underline-offset-2">
							Pickfoo Private Limited
						</Link>
						.
					</p>
				</section>

				<section className="container-premium max-w-3xl">
					<h2 className="text-3xl font-bold font-outfit mb-8">Quick answers</h2>
					<div className="space-y-6">
						{localFaqs.map((faq) => (
							<div key={faq.question} className="border-b border-primary/10 pb-6">
								<h3 className="font-bold font-outfit text-lg mb-2">{faq.question}</h3>
								<p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
}
