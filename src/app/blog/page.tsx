import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/api";
import { buildPageMetadata, pageSeo } from "@/lib/seo";
import { formatPostDate } from "./format";

export const metadata: Metadata = buildPageMetadata(pageSeo.blog);

export const revalidate = 60;

export default async function BlogPage({
	searchParams,
}: {
	searchParams: Promise<{ page?: string }>;
}) {
	const { page: pageParam } = await searchParams;
	const page = Math.max(1, Number(pageParam) || 1);
	const { data: posts, totalPages } = await getBlogPosts(page);

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

			<section className="container-premium">
				{posts.length === 0 ? (
					<p className="text-center text-muted-foreground py-16">
						New stories are on the way. Check back soon.
					</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{posts.map((post) => (
							<Link
								key={post.id}
								href={`/blog/${post.slug}`}
								className="group flex flex-col rounded-3xl overflow-hidden bg-secondary/30 border-2 border-transparent hover:border-primary transition-all hover:-translate-y-1"
							>
								<div className="relative aspect-16/10 bg-secondary/50">
									{post.coverImageUrl ? (
										<Image
											src={post.coverImageUrl}
											alt={post.coverImageAlt || post.title}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										/>
									) : null}
								</div>
								<div className="flex flex-col flex-1 p-6">
									{post.tags.length ? (
										<p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
											{post.tags.slice(0, 2).join(" · ")}
										</p>
									) : null}
									<h2 className="text-xl font-bold font-outfit mb-3 group-hover:text-primary transition-colors">
										{post.title}
									</h2>
									{post.excerpt ? (
										<p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
											{post.excerpt}
										</p>
									) : null}
									<p className="mt-auto text-sm text-muted-foreground">
										{formatPostDate(post.publishedAt)}
										{post.author ? ` · ${post.author}` : ""}
									</p>
								</div>
							</Link>
						))}
					</div>
				)}

				{totalPages > 1 ? (
					<nav
						className="flex items-center justify-center gap-4 mt-12"
						aria-label="Journal pages"
					>
						{page > 1 ? (
							<Link
								href={page === 2 ? "/blog" : `/blog?page=${page - 1}`}
								className="inline-flex items-center gap-2 rounded-full border px-5 py-2 font-medium hover:border-primary hover:text-primary"
							>
								<ArrowLeft className="w-4 h-4" />
								Newer
							</Link>
						) : null}
						<span className="text-sm text-muted-foreground">
							Page {page} of {totalPages}
						</span>
						{page < totalPages ? (
							<Link
								href={`/blog?page=${page + 1}`}
								className="inline-flex items-center gap-2 rounded-full border px-5 py-2 font-medium hover:border-primary hover:text-primary"
							>
								Older
								<ArrowRight className="w-4 h-4" />
							</Link>
						) : null}
					</nav>
				) : null}
			</section>
		</div>
	);
}
