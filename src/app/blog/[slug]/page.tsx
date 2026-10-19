import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { getBlogPost, getBlogPosts } from "@/lib/api";
import { BRAND_NAME, LEGAL_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
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
	const post = await getBlogPost(slug);
	if (!post) notFound();

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

	return (
		<article className="pt-28 pb-20">
			<JsonLd data={[articleSchema]} />
			<div className="container-premium max-w-3xl">
				<Link
					href="/blog"
					className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to the journal
				</Link>

				{post.tags.length ? (
					<p className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
						{post.tags.join(" · ")}
					</p>
				) : null}
				<h1 className="text-4xl md:text-5xl font-bold font-outfit leading-tight mb-6">
					{post.title}
				</h1>
				<p className="text-muted-foreground mb-10">
					{formatPostDate(post.publishedAt)}
					{post.author ? ` · ${post.author}` : ""}
				</p>
			</div>

			{post.coverImageUrl ? (
				<div className="container-premium max-w-5xl mb-12">
					<div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden">
						<Image
							src={post.coverImageUrl}
							alt={post.coverImageAlt || post.title}
							fill
							priority
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 1024px"
						/>
					</div>
				</div>
			) : null}

			<div className="container-premium max-w-3xl">
				<div className="prose prose-lg prose-invert max-w-none prose-headings:font-outfit prose-a:text-primary prose-img:rounded-2xl">
					<ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
				</div>
			</div>
		</article>
	);
}
