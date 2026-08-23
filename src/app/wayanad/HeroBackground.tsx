"use client";

import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE =
	"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000";

export function HeroBackground() {
	const reduceMotion = useReducedMotion();

	return (
		<div className="absolute inset-0 z-0 overflow-hidden">
			<motion.div
				className="absolute inset-0 bg-cover bg-center will-change-transform"
				style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
				initial={reduceMotion ? { scale: 1 } : { scale: 1.12 }}
				animate={{ scale: 1 }}
				transition={
					reduceMotion
						? { duration: 0 }
						: {
								duration: 18,
								repeat: Infinity,
								repeatType: "reverse",
								ease: "linear",
							}
				}
			/>
			<div className="absolute inset-0 bg-black/40 z-10" />
			<div
				aria-hidden
				className="absolute inset-0 z-10 opacity-[0.18] mix-blend-overlay pointer-events-none"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
					backgroundSize: "180px 180px",
				}}
			/>
		</div>
	);
}
