"use client";

import { motion } from "framer-motion";
import {
	Compass,
	Home,
	MapPin,
	MapPinned,
	Sparkles,
	Users,
	UtensilsCrossed,
	Zap,
} from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { customerFaqs } from "@/lib/seo";

const features = [
	{
		icon: MapPin,
		title: "Built With the Places We Serve in Mind",
		body: "We didn't build Pickfoo by copying what works elsewhere. We built it by paying attention to how things actually work on the ground, the roads, the weather, the places people order from. That approach stays with us as we grow.",
		color: "bg-blue-500/10 text-blue-500",
	},
	{
		icon: MapPinned,
		title: "See Where Your Order Is",
		body: "No more guessing when your food will show up. Once you place an order, you can watch it move from the kitchen to your doorstep. It's not complicated. It just works.",
		color: "bg-orange-500/10 text-orange-500",
	},
	{
		icon: UtensilsCrossed,
		title: "Only Restaurants We'd Eat From",
		body: "We're picky about who we put on the app. Every restaurant we work with, whether it's one of the best restaurants in Wayanad or a hidden spot in Wayanad, is someone we'd order from ourselves. We check them before they go live.",
		color: "bg-green-500/10 text-green-500",
	},
	{
		icon: Zap,
		title: "Quick Enough for When You're Hungry",
		body: "The app is built to be fast. Browse, pick, order, done. No unnecessary steps, no clutter. Just the food you want, as quickly as we can get it to you.",
		color: "bg-purple-500/10 text-purple-500",
	},
	{
		icon: Home,
		title: "We Go Where You Are",
		body: "If you're staying at a homestay, a resort, or a house off the main road, we still figure out how to get there. We don't stop at the town centre.",
		color: "bg-red-500/10 text-red-500",
	},
	{
		icon: Sparkles,
		title: "Suggestions That Don't Feel Forced",
		body: "The app learns what you like over time, not in a pushy way, just enough to show you things you might enjoy. Especially useful if you're exploring the best food spots in Wayanad and don't know where to start.",
		color: "bg-cyan-500/10 text-cyan-500",
	},
	{
		icon: Compass,
		title: "Built From the Ground Up",
		body: 'Pickfoo wasn\'t built in a city office and dropped somewhere. It was built by people who actually use it, order from it, and deliver through it. The entire experience from restaurant selection to delivery routes makes sense for “online food delivery in Wayanad” because it\'s made with real-world use in mind.',
		color: "bg-yellow-500/10 text-yellow-500",
	},
	{
		icon: Users,
		title: "Run by People Who Get It",
		body: "The team behind Pickfoo is small. Several of us are from the places we serve. So when we make decisions about what features to add, which restaurants to bring on board, how to handle deliveries, we're not guessing. We're going by what we know works.",
		color: "bg-pink-500/10 text-pink-500",
	},
];

export default function FeaturesPage() {
	return (
		<main className="flex-grow pt-32 pb-24">
			<section className="container-premium max-w-3xl mb-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-6"
				>
					How Pickfoo works
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="text-5xl lg:text-6xl font-bold font-outfit mb-6 leading-[1.1]"
				>
					What Pickfoo{" "}
					<span className="text-primary italic">Actually Does</span>.
				</motion.h1>
			</section>

			<section className="container-premium">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.article
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.08 }}
							className="p-8 rounded-[2.5rem] bg-card border border-primary/5 hover:border-primary/20 transition-all hover:shadow-2xl hover:-translate-y-2 group"
						>
							<div
								className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 transition-transform`}
							>
								<feature.icon className="w-8 h-8" />
							</div>
							<h2 className="text-2xl font-bold font-outfit mb-4 group-hover:text-primary transition-colors">
								{feature.title}
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{feature.body}
							</p>
						</motion.article>
					))}
				</div>
			</section>

			<section id="faq" className="container-premium max-w-3xl pt-24 scroll-mt-28">
				<h2 className="text-3xl md:text-4xl font-bold font-outfit mb-8 text-center text-primary">
					Frequently Asked Questions
				</h2>
				<FaqAccordion faqs={customerFaqs} />
			</section>
		</main>
	);
}
