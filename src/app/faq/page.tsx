import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
	buildPageMetadata,
	customerFaqs,
	faqPageSchema,
	pageSeo,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.faq);

export default function FaqPage() {
	return (
		<>
			<JsonLd data={faqPageSchema([...customerFaqs])} />
			<div className="container-premium pt-28 pb-20 max-w-3xl">
				<p className="text-sm text-muted-foreground mb-2">Pickfoo Mananthavady</p>
				<h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
					Frequently asked questions
				</h1>
				<p className="text-muted-foreground leading-relaxed mb-10">
					Direct answers about food delivery in Mananthavady, how Pickfoo works, and how
					to partner with us. For partner onboarding docs, see also{" "}
					<Link href="/join" className="text-primary underline underline-offset-2">
						Join Us
					</Link>
					.
				</p>

				<div className="space-y-8">
					{customerFaqs.map((faq) => (
						<section
							key={faq.question}
							className="border-b border-primary/10 pb-8"
						>
							<h2 className="text-xl font-bold font-outfit mb-3">{faq.question}</h2>
							<p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
						</section>
					))}
				</div>

				<p className="mt-12 text-muted-foreground text-sm">
					Still need help?{" "}
					<Link href="/support" className="text-primary underline underline-offset-2">
						Contact support
					</Link>
					.
				</p>
			</div>
		</>
	);
}
