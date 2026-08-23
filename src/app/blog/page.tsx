import type { Metadata } from "next";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.blog);

export default function BlogPage() {
	return (
		<div className="pt-28 pb-20">
			<section className="container-premium max-w-4xl mb-16">
				<h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6 leading-tight text-primary">
					Our Journal
				</h1>
				<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
					Stories on the best food spots in Wayanad, what&apos;s actually worth
					eating here, and a few things we&apos;ve picked up along the way.
				</p>
			</section>
		</div>
	);
}
