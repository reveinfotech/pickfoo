const API_BASE = (
	process.env.PICKFOO_API_URL || "https://api.pickfoo.in/admin/api/v1"
).replace(/\/$/, "");

export type SiteStats = {
	restaurants: number;
	customers: number;
	ordersDelivered: number;
};

export type BlogPostSummary = {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	coverImageUrl: string;
	coverImageAlt: string;
	author: string;
	tags: string[];
	publishedAt: string | null;
	metaTitle: string;
	metaDescription: string;
	updatedAt?: string;
};

export type BlogPost = BlogPostSummary & { content: string };

export type BlogPostPage = {
	data: BlogPostSummary[];
	page: number;
	totalPages: number;
	total: number;
};

/** Shown if the API is unreachable at build/revalidate time, so the page never renders zeros. */
const FALLBACK_STATS: SiteStats = {
	restaurants: 8,
	customers: 1000,
	ordersDelivered: 500,
};

async function getJson<T>(
	path: string,
	revalidate: number,
	tags: string[],
): Promise<T | null> {
	try {
		const res = await fetch(`${API_BASE}${path}`, {
			next: { revalidate, tags },
			signal: AbortSignal.timeout(8000),
		});
		if (!res.ok) return null;
		const body = (await res.json()) as { success?: boolean } & T;
		return body.success === false ? null : body;
	} catch {
		return null;
	}
}

export async function getSiteStats(): Promise<SiteStats> {
	const body = await getJson<{ data?: Partial<SiteStats> }>(
		"/public/stats",
		300,
		["stats"],
	);
	const data = body?.data;
	if (!data) return FALLBACK_STATS;
	return {
		restaurants: Number(data.restaurants) || FALLBACK_STATS.restaurants,
		customers: Number(data.customers) || FALLBACK_STATS.customers,
		ordersDelivered:
			Number(data.ordersDelivered) || FALLBACK_STATS.ordersDelivered,
	};
}

export async function getBlogPosts(
	page = 1,
	limit = 12,
): Promise<BlogPostPage> {
	const body = await getJson<{
		data?: BlogPostSummary[];
		page?: number;
		totalPages?: number;
		total?: number;
	}>(`/public/blog?page=${page}&limit=${limit}`, 60, ["blog"]);
	return {
		data: body?.data ?? [],
		page: body?.page ?? page,
		totalPages: body?.totalPages ?? 1,
		total: body?.total ?? 0,
	};
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
	const body = await getJson<{ data?: BlogPost }>(
		`/public/blog/${encodeURIComponent(slug)}`,
		60,
		["blog", `blog:${slug}`],
	);
	return body?.data ?? null;
}
