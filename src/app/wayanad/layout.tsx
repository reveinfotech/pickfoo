import type { Metadata } from "next";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.wayanad);

export default function WayanadLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
