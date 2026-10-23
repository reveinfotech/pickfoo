import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { getBlogPost, getBlogPosts } from "@/lib/api";
import { BRAND_NAME, LEGAL_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
import { normalizePostMarkdown } from "@/lib/markdown";
import { formatPostDate } from "../format";

export const revalidate = 60;

export async function generateStaticParams() {
	const { data } = await getBlogPosts(1, 50);
	return data.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = await getBlogPost(slug);
	if (!post) return { title: "Post not found" };

	const title = post.metaTitle || post.title;
	const description = post.metaDescription || post.excerpt;
	const url = absoluteUrl(`/blog/${post.slug}`);
	const images = post.coverImageUrl
		? [{ url: post.coverImageUrl, alt: post.coverImageAlt || post.title }]
		: undefined;

	return {
		title,
		description,
		keywords: post.tags,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			url,
			siteName: BRAND_NAME,
			locale: "en_IN",
			type: "article",
			publishedTime: post.publishedAt ?? undefined,
			modifiedTime: post.updatedAt,
			authors: post.author ? [post.author] : undefined,
			tags: post.tags,
			images,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: images?.map((i) => i.url),
		},
	};
}

export default async function BlogPostPage({ params }: Props) {
	const { slug } = await params;
	const [post, recent] = await Promise.all([
		getBlogPost(slug),
		getBlogPosts(1, 6),
	]);
	if (!post) notFound();
	const recentPosts = recent.data
		.filter((p) => p.slug !== post.slug)
		.slice(0, 5);

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.metaDescription || post.excerpt,
		...(post.coverImageUrl ? { image: [post.coverImageUrl] } : {}),
		datePublished: post.publishedAt,
		dateModified: post.updatedAt ?? post.publishedAt,
		author: { "@type": "Person", name: post.author || "Pickfoo Team" },
		publisher: {
			"@type": "Organization",
			name: LEGAL_NAME,
			logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
		},
		mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
		keywords: post.tags.join(", "),
	};

	const faqs = post.faqs ?? [];
	const faqSchema = faqs.length
		? {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.question,
					acceptedAnswer: { "@type": "Answer", text: f.answer },
				})),
		  }
		: null;

	return (
		<div className="pt-28 pb-20">
			<JsonLd data={faqSchema ? [articleSchema, faqSchema] : [articleSchema]} />
			<div className="container-premium">
				<div className="max-w-6xl mx-auto">
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to the journal
					</Link>

					<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-12 lg:gap-0">
						<article className="lg:pr-12 lg:border-r lg:border-border">
							<h1 className="text-3xl md:text-4xl font-bold font-outfit leading-tight text-primary mb-5">
								{post.title}
							</h1>
							<div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground mb-8">
								<span>Posted on {formatPostDate(post.publishedAt)}</span>
								{post.author ? <span>Posted by {post.author}</span> : null}
							</div>

							{post.coverImageUrl ? (
								<div className="relative aspect-video rounded-3xl overflow-hidden mb-10">
									<Image
										src={post.coverImageUrl}
										alt={post.coverImageAlt || post.title}
										fill
										priority
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 720px"
									/>
								</div>
							) : null}

							<div className="prose prose-invert max-w-none prose-headings:font-outfit prose-p:text-foreground/85 prose-li:text-foreground/85 prose-strong:text-current prose-a:text-primary prose-img:rounded-2xl prose-table:my-0 prose-th:bg-secondary/50 prose-th:px-4 prose-th:py-3 prose-td:px-4 prose-td:py-3 prose-td:text-foreground/85">
								<ReactMarkdown
									remarkPlugins={[remarkGfm]}
									components={{
										table: (props) => (
											<div className="my-8 overflow-x-auto rounded-2xl border border-border">
												<table {...props} />
											</div>
										),
									}}
								>
									{normalizePostMarkdown(post.content)}
								</ReactMarkdown>
							</div>

							{faqs.length ? (
								<section className="mt-14" aria-labelledby="faq-heading">
									<h2
										id="faq-heading"
										className="text-2xl md:text-3xl font-bold font-outfit mb-6"
									>
										Frequently asked questions
									</h2>
									<div className="space-y-3">
										{faqs.map((faq, i) => (
											<details
												key={i}
												className="group rounded-2xl border border-border bg-secondary/30 open:bg-secondary/50 transition-colors"
											>
												<summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
													{faq.question}
													<ChevronDown className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
												</summary>
												<p className="px-5 pb-5 text-foreground/80 leading-relaxed whitespace-pre-line">
													{faq.answer}
												</p>
											</details>
										))}
									</div>
								</section>
							) : null}
						</article>

						<aside className="lg:pl-10">
							<div className="lg:sticky lg:top-28">
								<div className="flex items-center justify-between mb-6">
									<h2 className="text-2xl font-bold font-outfit text-primary">
										Recent blogs
									</h2>
									<Link
										href="/blog"
										className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
									>
										View all
										<ArrowRight className="w-4 h-4" />
									</Link>
								</div>

								{recentPosts.length === 0 ? (
									<p className="text-sm text-muted-foreground">
										More stories coming soon.
									</p>
								) : (
									<ul className="space-y-4">
										{recentPosts.map((p) => (
											<li key={p.id}>
												<Link
													href={`/blog/${p.slug}`}
													className="group flex gap-4 rounded-2xl bg-secondary/30 p-3 transition-colors hover:bg-secondary/60"
												>
													<div className="relative w-24 h-20 shrink-0 overflow-hidden rounded-xl bg-secondary/60">
														{p.coverImageUrl ? (
															<Image
																src={p.coverImageUrl}
																alt={p.coverImageAlt || p.title}
																fill
																className="object-cover"
																sizes="96px"
															/>
														) : null}
													</div>
													<div className="flex min-w-0 flex-col justify-center">
														<p className="font-semibold leading-snug line-clamp-2 group-hover:text-primary">
															{p.title}
														</p>
														<span className="mt-2 inline-flex items-center gap-1 text-sm text-primary">
															Read more
															<ArrowRight className="w-3.5 h-3.5" />
														</span>
													</div>
												</Link>
											</li>
										))}
									</ul>
								)}
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	);
}
