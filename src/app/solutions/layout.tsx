import type { Metadata } from "next";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.solutions);

export default function SolutionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
