import type { MetadataRoute } from "next";
import { INDEXABLE_PATHS, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return INDEXABLE_PATHS.map((path) => ({
		url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
		lastModified,
		changeFrequency: path === "/" || path === "/mananthavady" ? "weekly" : "monthly",
		priority:
			path === "/"
				? 1
				: path === "/mananthavady" || path === "/wayanad"
					? 0.9
					: path.startsWith("/privacy") ||
						  path.startsWith("/terms") ||
						  path.startsWith("/cookie") ||
						  path.startsWith("/refund") ||
						  path.startsWith("/delete")
						? 0.3
						: 0.7,
	}));
}
