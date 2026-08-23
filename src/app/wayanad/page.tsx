import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import { faqPageSchema } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import { HeroBackground } from "./HeroBackground";

const localFaqs = [
	{
		question: "What is Wayanad famous for when it comes to food?",
		answer:
			"Wayanad's food culture comes from what grows in the hills around it, estate produce, home-style cooking, and restaurants that have been serving this district for years. It's less about any one dish and more about how deeply the food here is tied to the land.",
	},
	{
		question: "Where can I get Wayanad special food delivered?",
		answer:
			"Pickfoo connects you to restaurants across Wayanad serving the kind of food this district is known for, starting in Mananthavady and growing from there.",
	},
	{
		question: "Does Pickfoo offer home delivery in Wayanad?",
		answer:
			"Yes, starting from Mananthavady and reaching about 25 km around it, with plans to expand further across Wayanad over time.",
	},
	{
		question: "What are the best food spots in Wayanad?",
		answer:
			"They're the kind of places usually found through word of mouth. Pickfoo's restaurant list is our attempt at gathering the ones actually worth ordering from, all in one app.",
	},
	{
		question: "Which are the best restaurants in Wayanad on Pickfoo?",
		answer:
			"The current list is centered on Mananthavady and nearby areas. You'll find the full, up-to-date selection inside the app.",
	},
	{
		question: "Is online food delivery available across all of Wayanad?",
		answer:
			"Not yet across the whole district. Pickfoo launched in Mananthavady and currently covers about 25 km around it. Wider Wayanad coverage is the next stage of our growth.",
	},
];

export default function WayanadPage() {
	return (
		<>
			<JsonLd data={faqPageSchema(localFaqs)} />
			<section className="relative h-[80vh] flex items-center overflow-hidden">
				<HeroBackground />
				<div className="container-premium relative z-20 max-w-4xl pt-20">
					<h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6 leading-tight text-white">
						Online Food Delivery in{" "}
						<span className="text-primary italic">Wayanad</span>
					</h1>
					<p className="text-xl text-white/80 leading-relaxed">
						Wayanad isn&apos;t just known for its hills and greenery, it has a
						food culture that&apos;s been shaped by this land for generations.
						Pickfoo brings that to your door, with online food delivery in
						Wayanad starting right here in Mananthavady.
					</p>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
			</section>

			<div className="pt-20 pb-20">

				<section className="container-premium mb-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<h2 className="text-3xl font-bold font-outfit mb-4 text-primary">
								A Place That Cooks Differently
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-4">
								Ask anyone who&apos;s grown up here and they&apos;ll tell you,
								the food in Wayanad tastes the way it does because of what
								grows around it. Estate-grown spices, hill produce, recipes
								that have been passed down rather than looked up. Restaurants
								across the district cook with what&apos;s actually available
								here, not what&apos;s convenient to ship in.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								That&apos;s the part Pickfoo is trying to get right, not just
								delivering food, but making it easy to actually reach the
								restaurants doing this well, wherever they happen to be in
								town.
							</p>
						</div>
						<div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
							<Image
								src="/images/fresh.png"
								alt="Fresh Wayanad spices and hill produce in a wooden basket"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						</div>
					</div>
				</section>

				<section className="container-premium mb-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden order-2 lg:order-1">
							<Image
								src="/images/hero-fastfood.png"
								alt="A meal looking out over the hills of Wayanad"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						</div>
						<div className="order-1 lg:order-2">
							<h2 className="text-3xl font-bold font-outfit mb-4 text-primary">
								Where to Actually Eat Well in Wayanad
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-4">
								If you&apos;ve ever asked someone &ldquo;where&apos;s good to
								eat around here,&rdquo; you know the answer usually comes from
								a person, not an app, a cousin, a neighbour, someone who&apos;s
								actually tried the place. Pickfoo is trying to be that, just
								in an app: some of the best restaurants in Wayanad and the
								food spots people here actually rate, gathered in one place
								instead of scattered across word of mouth.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								We&apos;re starting in Mananthavady, where we know the
								restaurants and the streets well enough to get it right,
								before spreading further out.
							</p>
						</div>
					</div>
				</section>

				<section className="container-premium mb-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<h2 className="text-3xl font-bold font-outfit mb-4 text-primary">
								Home Delivery in Wayanad, Done Properly
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-4">
								Wayanad&apos;s food has always been worth seeking out, getting
								it delivered has been the hard part. Pickfoo is building
								toward home delivery in Wayanad that actually works here: real
								restaurant listings, order tracking you can see, and no need
								to memorize ten different phone numbers just to eat well.
							</p>
							<p className="text-muted-foreground leading-relaxed mb-6">
								Right now, that means a growing list of restaurants reachable
								through Pickfoo starting from Mananthavady, with delivery
								reaching roughly 25 km around town. As more restaurants and
								delivery partners join, that range keeps expanding across the
								district.
							</p>
							<div className="border-l-2 border-primary pl-5 py-1">
								<p className="text-foreground leading-relaxed mb-4 text-primary">
									Looking for delivery in Mananthavady itself?
								</p>
								<Button asChild size="lg" className="rounded-full h-12 px-8 font-bold">
									<Link href="/app">
										Download the App Now
										<ArrowRight className="ml-2 w-4 h-4" />
									</Link>
								</Button>
							</div>
						</div>
						<div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
							<Image
								src="/images/delivery.png"
								alt="A Pickfoo delivery partner riding through Wayanad"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						</div>
					</div>
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
