import type { Metadata } from "next";
import { buildPageMetadata, pageSeo } from "@/lib/seo";
import { Compass, Heart, MapPin, Target, Users } from "lucide-react";

export const metadata: Metadata = buildPageMetadata(pageSeo.about);

const chapters = [
	{
		icon: MapPin,
		title: "Our Story",
		body: "The idea came together in December 2025, not as a big-city business plan, but as friends looking at a real gap in our own town. We spent the months that followed building and testing what online food delivery in Mananthavady should actually look like, something built around how this town runs, not a copy of what works elsewhere. On August 8, 2026, Pickfoo launched here first.",
	},
	{
		icon: Compass,
		title: "Where We're Headed",
		body: "Mananthavady is just the start, and we're not rushing past it. From here, the plan is to grow across Wayanad first, then the rest of Kerala, then further still, one region at a time. The same way we started: by understanding a place properly before we ever show up in it, rather than expanding just to say that we did, or simply to fill a map. ",
	},
	{
		icon: Heart,
		title: "Why It Matters",
		body: "Online food delivery in Wayanad is still new territory in towns like ours, and that gap is the whole reason Pickfoo exists in the first place. We didn't want to sit around waiting for someone else to eventually notice this town. So we built the convenience ourselves, from people who already know the restaurants, the roads, and what actually matters to the people placing the order.",
	},
	{
		icon: Users,
		title: "Made by People From Here",
		body: "Pickfoo is run by a small team of friends, several of us from Mananthavady itself, which means the decisions behind this app aren't made from a distance. We eat at the restaurants we deliver from, we know the roads our riders take every single day, and when something isn't working, we're close enough to notice it ourselves and fix it, not just read about it later.",
	},
];

export default function AboutPage() {
	return (
		<div className="pt-28 pb-20">
			<section className="container-premium max-w-4xl mb-16">
				<h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6 leading-tight text-center text-primary">
					{/* From <span className="text-primary italic">Mananthavady</span>, For Everyone */}
					About Us
				</h1>
				{/* <p className="text-xl text-muted-foreground leading-relaxed">
					Pickfoo started with a simple observation: Mananthavady didn&apos;t have a
					proper food delivery platform. So a group of friends decided to build one.
				</p> */}
			</section>

			<section className="container-premium max-w-4xl space-y-8 mb-16">
				{chapters.map(({ icon: Icon, title, body }) => (
					<div
						key={title}
						className="group p-6 md:p-8 rounded-3xl bg-secondary/30 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/50 hover:shadow-xl hover:shadow-black/50"
					>
						<div className="flex items-center gap-3 mb-3">
							<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
								<Icon className="w-5 h-5" />
							</div>
							<h2 className="text-2xl md:text-3xl font-extrabold font-outfit text-primary italic drop-shadow-[0_2px_12px_rgba(152,227,47,0.45)]">
								{title}
							</h2>
						</div>
						<p className="text-muted-foreground leading-relaxed text-lg">{body}</p>
					</div>
				))}
			</section>

			<section className="container-premium max-w-4xl mb-32">
				<div className="text-center mb-10">
					<p className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-4">
						Mission &amp; vision
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="group relative p-8 lg:p-10 rounded-3xl bg-secondary/40 border-2 border-primary shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/60 hover:shadow-2xl hover:shadow-black/50">
						<div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6 transition-transform duration-300 group-hover:scale-110">
							<Target className="w-7 h-7" />
						</div>
						<h3 className="text-2xl lg:text-3xl font-bold font-outfit mb-4 text-primary">
							Our Mission
						</h3>
						<p className="text-foreground/90 text-lg leading-relaxed">
							Mananthavady never had a food delivery app built for it. So we
							built one. Starting right here, we&apos;re creating a service
							that understands our town, the streets, the people, and the
							food they actually eat.
						</p>
					</div>
					<div className="group relative p-8 lg:p-10 rounded-3xl bg-secondary/40 border-2 border-primary shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/60 hover:shadow-2xl hover:shadow-black/50">
						<div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6 transition-transform duration-300 group-hover:scale-110">
							<Heart className="w-7 h-7" />
						</div>
						<h3 className="text-2xl lg:text-3xl font-bold font-outfit mb-4 text-primary">
							Our Vision
						</h3>
						<p className="text-foreground/90 text-lg leading-relaxed">
							To grow from Mananthavady to every corner of Wayanad, then
							across Kerala, and beyond, while keeping the local warmth that
							makes Pickfoo, Pickfoo.
						</p>
					</div>
				</div>
			</section>

		</div>
	);
}
