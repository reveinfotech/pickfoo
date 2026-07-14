import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

type AppDownloadButtonsProps = {
	className?: string;
	size?: "default" | "compact";
};

function AppleIcon({ className }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
			<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
		</svg>
	);
}

function PlayIcon({ className }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden>
			<path fill="#EA4335" d="M3.6 2.1 13.5 12 3.6 21.9c-.4-.2-.6-.6-.6-1V3.1c0-.4.2-.8.6-1z" />
			<path fill="#4285F4" d="m13.5 12 2.6 2.6 4.1-2.3c.7-.4.7-1.5 0-1.9l-4.1-2.3L13.5 12z" />
			<path fill="#FBBC04" d="M13.5 12 3.6 2.1c.2-.1.4-.1.6-.1.3 0 .6.1.9.3L16.1 9.4 13.5 12z" />
			<path fill="#34A853" d="m13.5 12 2.6 2.6-6.4 6.4c-.3.2-.6.3-.9.3-.2 0-.4 0-.6-.1L13.5 12z" />
		</svg>
	);
}

export function AppDownloadButtons({
	className,
	size = "default",
}: AppDownloadButtonsProps) {
	const compact = size === "compact";

	return (
		<div
			className={cn(
				"flex flex-wrap items-center gap-3",
				className,
			)}
		>
			<a
				href={APP_STORE_URL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Download Pickfoo on the App Store"
				className={cn(
					"inline-flex items-center gap-3 rounded-xl bg-black text-white border border-white/10 hover:bg-black/80 transition-colors",
					compact ? "px-3 py-2" : "px-4 py-3",
				)}
			>
				<AppleIcon className={compact ? "w-6 h-6" : "w-8 h-8"} />
				<span className="text-left leading-tight">
					<span className="block text-[10px] uppercase tracking-wide opacity-80">
						Download on the
					</span>
					<span className={cn("block font-semibold", compact ? "text-sm" : "text-base")}>
						App Store
					</span>
				</span>
			</a>
			<a
				href={PLAY_STORE_URL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Get Pickfoo on Google Play"
				className={cn(
					"inline-flex items-center gap-3 rounded-xl bg-black text-white border border-white/10 hover:bg-black/80 transition-colors",
					compact ? "px-3 py-2" : "px-4 py-3",
				)}
			>
				<PlayIcon className={compact ? "w-6 h-6" : "w-8 h-8"} />
				<span className="text-left leading-tight">
					<span className="block text-[10px] uppercase tracking-wide opacity-80">
						Get it on
					</span>
					<span className={cn("block font-semibold", compact ? "text-sm" : "text-base")}>
						Google Play
					</span>
				</span>
			</a>
		</div>
	);
}
