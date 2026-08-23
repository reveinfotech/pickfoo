import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
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
		question: "Does Pickfoo deliver food in Mananthavady?",
		answer:
			"Yes. Mananthavady is where Pickfoo started, and it's still our main service area. We connect restaurants and delivery partners across town so you can order from more than one place at a time.",
	},
	{
		question:
			"What are the best restaurants in Mananthavady available on Pickfoo?",
		answer:
			"Our partner list spans a range of restaurants across town, you'll find the full, current list inside the app, and it grows as more restaurants join.",
	},
	{
		question: "Where can I find good food spots in Mananthavady?",
		answer:
			"Pickfoo brings together a range of food spots in Mananthavady in one place, so you don't need to know every restaurant's number to order from it, just open the app and browse.",
	},
	{
		question: "Why order through Pickfoo instead of calling a restaurant directly?",
		answer:
			"One app shows you several restaurants at once, tracks your order as it moves, and lets you pay digitally, so you're not stuck with a single restaurant's phone line when you're hungry.",
	},
	{
		question: "Which areas of Mananthavady does Pickfoo cover?",
		answer:
			"Pickfoo delivers across Mananthavady town and up to 25 km around it, covering nearby areas as more restaurants and delivery partners join. You'll see exact coverage at checkout in the app.",
	},
	{
		question: "Does Pickfoo deliver outside Mananthavady?",
		answer:
			"Mananthavady came first, and our current range already reaches about 25 km beyond the town itself. From here, we're expanding further across Wayanad, and beyond that over time.",
	},
];

export default function MananthavadyPage() {
	return (
		<>
			<JsonLd data={faqPageSchema(localFaqs)} />
			<div className="pt-28 pb-20">
				<section className="container-premium max-w-4xl mb-20">
					<h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6 leading-tight">
						Food Delivery in{" "}
						<span className="text-primary italic">Mananthavady</span>
					</h1>
					<p className="text-xl text-muted-foreground leading-relaxed mb-8">
						Pickfoo brings online food delivery to Mananthavady the way this town
						actually needs it, order from more than one restaurant, track your
						rider, and pay however suits you.
					</p>
					<div className="flex flex-wrap gap-4">
						<Button asChild size="lg" className="rounded-full h-12 px-8 font-bold">
							<Link href="/app">
								Download the App
								<ArrowRight className="ml-2 w-4 h-4" />
							</Link>
						</Button>
					</div>
				</section>

				<section className="container-premium mb-20">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								icon: <MapPin className="w-6 h-6" />,
								title: "Mananthavady First",
								body: "Our home base and primary service area in Wayanad district, Kerala.",
							},
							{
								icon: <Store className="w-6 h-6" />,
								title: "Restaurants Across Town",
								body: "Some of the best restaurants in Mananthavady are already on Pickfoo, with new ones joining as we grow. Instead of sticking to whichever restaurant you already have a number saved for, you can browse what's actually available across town and decide from there.",
							},
							{
								icon: <MessageCircle className="w-6 h-6" />,
								title: "Beyond WhatsApp Orders",
								body: "Browse more than one restaurant at a time, watch your order status as it happens, and skip the back-and-forth of separate chats for every craving.",
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
					<h2 className="text-3xl font-bold font-outfit mb-4 text-primary">
						The Mananthavady Food Delivery Landscape
					</h2>
					<p className="text-muted-foreground leading-relaxed mb-4">
						Mananthavady hasn&apos;t had a dedicated food delivery platform
						before, restaurants have relied on WhatsApp orders, phone calls, and
						word of mouth. Pickfoo brings all of that into one place: browse
						multiple restaurants, track your order as it moves, and pay
						digitally, all run by a company based right here in Mananthavady.
					</p>
					<p className="text-muted-foreground leading-relaxed">
						Whether you&apos;re looking for a quick weekday order or trying to
						find the best food in Mananthavady for a weekend craving, our
						restaurant list is built to cover it, all from one app, without
						needing to know who delivers where. As more restaurants come on
						board, the range of food spots in Mananthavady available through
						Pickfoo keeps growing too.
					</p>
				</section>

				<section className="container-premium max-w-3xl">
					<h2 className="text-3xl md:text-4xl font-bold font-outfit mb-8 text-center text-primary">
						Frequently Asked Questions
					</h2>
					<FaqAccordion faqs={localFaqs} />
				</section>
			</div>
		</>
	);
}
