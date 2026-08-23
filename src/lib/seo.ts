import type { Metadata } from "next";

export const SITE_URL = "https://www.pickfoo.in";
export const SITE_NAME = "Pickfoo";
export const BRAND_NAME = "Pickfoo Mananthavady";
export const LEGAL_NAME = "Pickfoo Private Limited";
export const CONTACT_EMAIL = "contact@pickfoo.in";

export const APP_STORE_URL =
	"https://apps.apple.com/in/app/pickfoo/id6772687742";
export const PLAY_STORE_URL =
	"https://play.google.com/store/apps/details?id=com.pickfoo.store";
/** Smart link: detects iOS/Android and opens the matching store. Use for QR codes. */
export const APP_DOWNLOAD_URL = `${SITE_URL}/app`;

export const ADDRESS = {
	streetAddress: "Mananthavady",
	addressLocality: "Mananthavady",
	addressRegion: "Kerala",
	postalCode: "670645",
	addressCountry: "IN",
} as const;

/** Mananthavady approx. centre — for LocalBusiness geo schema */
export const GEO = {
	latitude: 11.8014,
	longitude: 76.0041,
} as const;

/**
 * Real profile URLs only. Leave empty to hide the icon in the footer.
 */
export const SOCIAL_PROFILES = {
	facebook: "https://www.facebook.com/profile.php?id=61580803826604",
	instagram: "https://www.instagram.com/pickfoo.in/",
	twitter: "",
	linkedin: "https://www.linkedin.com/company/pickfoo",
	youtube: "https://www.youtube.com/@PickfooFoodDelivery",
} as const;

export const SAME_AS = [
	...Object.values(SOCIAL_PROFILES).filter(Boolean),
	APP_STORE_URL,
	PLAY_STORE_URL,
];

export type PageSeo = {
	title: string;
	description: string;
	path: string;
};

export const pageSeo = {
	home: {
		title: "Pickfoo | Online Food Delivery Across Wayanad, Kerala",
		description:
			"Pickfoo brings food delivery to Wayanad, one town at a time. Order from the best restaurants around, tracked live from kitchen to your door.",
		path: "/",
	},
	about: {
		title: "About Pickfoo | Homegrown Food Delivery in Wayanad",
		description:
			"Pickfoo is a food delivery platform built in Wayanad, for Wayanad. Read our story and where we're headed as we grow across the district.",
		path: "/about",
	},
	features: {
		title: "Pickfoo Features | Find the Best Food Spots in Wayanad",
		description:
			"Live tracking, verified restaurants, and doorstep delivery beyond the town centre. See how Pickfoo finds the best food spots in Wayanad for you.",
		path: "/features",
	},
	wayanad: {
		title: "Home Delivery in Wayanad | Best Restaurants | Pickfoo ",
		description:
			"Home delivery in Wayanad from the best restaurants and food in the district. Discover Wayanad's flavours, delivered by Pickfoo.",
		path: "/wayanad",
	},
	join: {
		title: "Restaurant & Delivery Partner in Wayanad, Kerala | Pickfoo ",
		description:
			"Become a restaurant or delivery partner with Pickfoo in Wayanad. Low commission, daily payouts, flexible hours. Apply today.",
		path: "/join",
	},
	mananthavady: {
		title: "Online Food Delivery in Mananthavady, Wayanad | Pickfoo ",
		description:
			"Pickfoo offers home delivery in Mananthavady from the best restaurants in town. Browse, order, and track it all in one app",
		path: "/mananthavady",
	},

	blog: {
		title: "Our Journal | Food Stories & Restaurants in Wayanad",
		description:
			"Stories on the best food spots in Wayanad, what's famous to eat, and the restaurants behind it all, from the Pickfoo journal.",
		path: "/blog",
	},
	contact: {
		title: "Contact Pickfoo | Food Delivery Platform in wayanad ",
		description:
			"Get in touch with Pickfoo, Wayanad's food delivery platform. Reach us for order support, restaurant partnerships, or general questions.",
		path: "/contact",
	},
	app: {
		title: "Download Pickfoo | online delivery in wayanad",
		description:
			"brings food delivery to Wayanad. Order from the best restaurants in Wayanad, Track your order live , from restaurant to your door.",
		path: "/app",
	},
} as const satisfies Record<string, PageSeo>;

export function buildPageMetadata({
	title,
	description,
	path,
}: PageSeo): Metadata {
	const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
	return {
		// Absolute so the root title template does not double-suffix the brand
		title: { absolute: title },
		description,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			url,
			siteName: BRAND_NAME,
			locale: "en_IN",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
	};
}

export function absoluteUrl(path: string): string {
	if (path.startsWith("http")) return path;
	return path === "/" ? SITE_URL : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: LEGAL_NAME,
	alternateName: [SITE_NAME, BRAND_NAME, "Pickfoo Wayanad"],
	url: SITE_URL,
	logo: `${SITE_URL}/logo.png`,
	email: CONTACT_EMAIL,
	address: {
		"@type": "PostalAddress",
		...ADDRESS,
	},
	areaServed: [
		{
			"@type": "City",
			name: "Mananthavady",
		},
		{
			"@type": "AdministrativeArea",
			name: "Wayanad",
		},
	],
	contactPoint: {
		"@type": "ContactPoint",
		email: CONTACT_EMAIL,
		contactType: "customer service",
		areaServed: "IN",
		availableLanguage: ["English", "Malayalam"],
	},
	...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
};

export const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": ["LocalBusiness", "FoodEstablishment"],
	name: BRAND_NAME,
	alternateName: [SITE_NAME, "Pickfoo Wayanad", LEGAL_NAME],
	description:
		"Hyperlocal food delivery in Mananthavady, Wayanad — connecting local restaurants and diners with reliable last-mile delivery.",
	url: SITE_URL,
	logo: `${SITE_URL}/logo.png`,
	image: `${SITE_URL}/logo.png`,
	email: CONTACT_EMAIL,
	address: {
		"@type": "PostalAddress",
		...ADDRESS,
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: GEO.latitude,
		longitude: GEO.longitude,
	},
	areaServed: {
		"@type": "City",
		name: "Mananthavady",
		containedInPlace: {
			"@type": "AdministrativeArea",
			name: "Wayanad District, Kerala",
		},
	},
	priceRange: "₹",
	currenciesAccepted: "INR",
	paymentAccepted: "UPI, Credit Card, Debit Card, Cash",
	...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
};

export const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: BRAND_NAME,
	alternateName: [SITE_NAME, "Pickfoo Wayanad"],
	url: SITE_URL,
	publisher: {
		"@type": "Organization",
		name: LEGAL_NAME,
		url: SITE_URL,
	},
	inLanguage: "en-IN",
};

export function faqPageSchema(
	faqs: { question: string; answer: string }[],
) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}

export const customerFaqs = [
	{
		question: "Is Pickfoo available only in Mananthavady?",
		answer:
			"We launched in Mananthavady first, and that's where we're currently operating. The plan is to expand across Wayanad, then to other districts in Kerala, and beyond. We're taking it one place at a time, making sure we get it right before we show up somewhere new.",
	},
	{
		question: "Which restaurants are on Pickfoo?",
		answer:
			"We work with some of the best restaurants in Mananthavady and across Wayanad, the ones locals actually eat at. From small kitchens that have been around for decades to popular dining spots. We're adding more restaurants every week. You can browse all of them inside the app.",
	},
	{
		question: "How do I track my order?",
		answer:
			"Once you place an order, you can see exactly where it is, from the kitchen to your doorstep. The app shows you live updates, so you know when to expect your food. No calls, no guessing.",
	},
	{
		question: "Do you deliver to homestays and resorts?",
		answer:
			"Yes. If you're staying at a homestay, a resort, or a house off the main road, we still figure out how to get your order to you. We don't stop at the town centre.",
	},
	{
		question: "Is there a delivery fee?",
		answer:
			"Delivery fees vary depending on the restaurant and your location. You'll see the exact fee before you place your order, no surprises at checkout.",
	},
	{
		question: "How do I become a Pickfoo delivery partner?",
		answer:
			"We're always looking for riders to join us. If you're interested, you can sign up through the app or reach out to us directly. Flexible hours, fair payouts, and you get to work in the places you already know.",
	},
	{
		question: "How do I get my restaurant on Pickfoo?",
		answer:
			"If you run a restaurant in Mananthavady or Wayanad and want to be on Pickfoo, we'd love to hear from you. Reach out to us through the app or website, and we'll take it from there.",
	},
	{
		question: "What if something goes wrong with my order?",
		answer:
			"If there's an issue with your order, wrong item, missing item, or anything else, you can reach out to us through the app. We'll sort it out. No hassle.",
	},
	{
		question: "Is Pickfoo available 24 hours?",
		answer:
			"Operating hours depend on the restaurants on the platform. Not all of them are open 24 hours. You'll see each restaurant's availability and timing inside the app before you order.",
	},
] as const;

export const partnerFaqs = [
	{
		question: "What documents do I need to become a restaurant delivery partner in Wayanad? ",
		answer:
			"For restaurants: FSSAI licence, PAN, and GST if applicable. For delivery partners: a driving licence, vehicle RC, and Aadhaar.",
	},
	{
		question: "When do I get paid?",
		answer:
			"Every day , straight to your registered bank account, for both restaurant and delivery partners.",
	},
	{
		question: "How long does it take to go live?",
		answer:
			" Most restaurant partners in Mananthavady are up and running within 24 hours of document verification.",
	},
	{
		question: "Where does Pickfoo operate, and how do I become a delivery partner in Kerala?",
		answer:
			"Pickfoo launched in Mananthavady, Wayanad, with delivery reaching roughly 25 km around town. We're expanding across Wayanad from here, so this is a good time to come on board early.",
	},
] as const;

/** All indexable paths for sitemap */
export const INDEXABLE_PATHS = [
	"/",
	"/features",
	"/wayanad",
	"/mananthavady",
	"/join",
	"/about",
	"/blog",
	"/contact",
	"/app",
	"/support",
	"/privacy",
	"/terms",
	"/cookie-policy",
	"/refund-policy",
	"/delete-account",
] as const;
