import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/api";
import { INDEXABLE_PATHS, SITE_URL } from "@/lib/seo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const lastModified = new Date();

	const staticEntries: MetadataRoute.Sitemap = INDEXABLE_PATHS.map((path) => ({
		url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
		lastModified,
		changeFrequency:
			path === "/" || path === "/mananthavady" || path === "/blog"
				? "weekly"
				: "monthly",
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

	const { data: posts } = await getBlogPosts(1, 100);
	const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
		url: `${SITE_URL}/blog/${post.slug}`,
		lastModified: new Date(post.updatedAt ?? post.publishedAt ?? lastModified),
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	return [...staticEntries, ...postEntries];
}
