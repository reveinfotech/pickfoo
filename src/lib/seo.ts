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
 * Update these once social profiles are live.
 */
export const SOCIAL_PROFILES = {
	facebook: "",
	instagram: "",
	twitter: "",
	linkedin: "",
	youtube: "",
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
		title: "Food Delivery in Mananthavady | Pickfoo",
		description:
			"Pickfoo Mananthavady delivers local restaurants and Wayanad flavours to your door. Fast food delivery in Mananthavady, Wayanad — order fresh, track live.",
		path: "/",
	},
	features: {
		title: "Hill Delivery Features | Pickfoo Mananthavady",
		description:
			"Real-time tracking, hill-aware routes, and hyperlocal restaurant partners. See how Pickfoo delivers food across Mananthavady and Wayanad.",
		path: "/features",
	},
	wayanad: {
		title: "Wayanad Flavours & Local Food | Pickfoo",
		description:
			"Bamboo rice, highland coffee, tribal honey, and Malabar kitchens — discover Wayanad's food culture with Pickfoo's local delivery network.",
		path: "/wayanad",
	},
	solutions: {
		title: "Restaurant Partner Solutions | Pickfoo",
		description:
			"Grow your Mananthavady restaurant with Pickfoo: online orders, weekly payouts, menu tools, and dedicated partner support.",
		path: "/solutions",
	},
	join: {
		title: "Join as Restaurant or Delivery Partner | Pickfoo",
		description:
			"Partner with Pickfoo Mananthavady as a restaurant or delivery rider. Flexible hours, weekly payouts, and local support in Wayanad.",
		path: "/join",
	},
	mananthavady: {
		title: "Food Delivery in Mananthavady, Wayanad | Pickfoo",
		description:
			"Pickfoo is Mananthavady's local food delivery app — multi-restaurant ordering, live tracking, and reliable delivery across town. Why call one kitchen when you can choose many?",
		path: "/mananthavady",
	},
	about: {
		title: "About Pickfoo Private Limited | Mananthavady",
		description:
			"Pickfoo Private Limited builds hyperlocal food delivery for Mananthavady, Wayanad. Learn who we are, where we operate, and how we support local kitchens.",
		path: "/about",
	},
	faq: {
		title: "FAQ — Food Delivery in Mananthavady | Pickfoo",
		description:
			"Answers about Pickfoo in Mananthavady: delivery areas, charges, ordering, restaurant partners, and becoming a delivery partner.",
		path: "/faq",
	},
	app: {
		title: "Download Pickfoo App | Mananthavady Food Delivery",
		description:
			"Get the Pickfoo customer app for iOS or Android. Scan the QR or tap to open the App Store or Google Play for food delivery in Mananthavady.",
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
		question: "Does Pickfoo deliver in Mananthavady?",
		answer:
			"Yes. Pickfoo is launching first in Mananthavady, Wayanad, Kerala — with local restaurants and delivery partners serving the town and nearby areas.",
	},
	{
		question: "What are the delivery charges?",
		answer:
			"Delivery charges depend on distance and order value and are shown in the app before you confirm. Launch offers may reduce or waive fees on selected restaurants.",
	},
	{
		question: "How is Pickfoo different from calling a restaurant on WhatsApp?",
		answer:
			"Pickfoo lets you browse multiple Mananthavady restaurants in one place, track your order live, pay digitally, and get reliable delivery — without juggling separate chats and phone calls.",
	},
	{
		question: "Is Swiggy or Zomato available in Mananthavady?",
		answer:
			"Major national aggregators do not currently operate food delivery in Mananthavady. Pickfoo is built as a hyperlocal alternative for this town.",
	},
	{
		question: "How do I become a restaurant partner?",
		answer:
			"Register at restaurant.pickfoo.in with your FSSAI, PAN, and bank details. Most kitchens can go live within 48 hours after verification.",
	},
	{
		question: "How do I become a delivery partner?",
		answer:
			"Apply via the Join Us page. You typically need a valid driving licence, vehicle RC, and Aadhaar. Hours are flexible and payouts are weekly.",
	},
] as const;

export const partnerFaqs = [
	{
		question: "What documents do I need?",
		answer:
			"For restaurants: FSSAI licence, PAN, and GST (if applicable). For delivery partners: driving licence, vehicle RC, and Aadhaar.",
	},
	{
		question: "When do I get paid?",
		answer:
			"All partners receive payouts every Monday directly to their registered bank accounts.",
	},
	{
		question: "How long to go live?",
		answer:
			"Most restaurant partners in Mananthavady can go live within 48 hours after document verification.",
	},
	{
		question: "Where do you operate first?",
		answer:
			"Pickfoo launches in Mananthavady, Wayanad, with phased expansion planned across the district.",
	},
] as const;

/** All indexable paths for sitemap */
export const INDEXABLE_PATHS = [
	"/",
	"/features",
	"/wayanad",
	"/mananthavady",
	"/solutions",
	"/join",
	"/about",
	"/faq",
	"/app",
	"/support",
	"/privacy",
	"/terms",
	"/cookie-policy",
	"/refund-policy",
	"/delete-account",
] as const;
