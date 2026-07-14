import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, faqPageSchema, pageSeo, partnerFaqs } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.join);

export default function JoinLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<JsonLd data={faqPageSchema([...partnerFaqs])} />
			{children}
		</>
	);
}
