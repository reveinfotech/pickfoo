import type { Metadata } from "next";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.features);

export default function FeaturesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
