"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
	const { scrollY } = useScroll();
	const [visible, setVisible] = React.useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		setVisible(latest > 400);
	});

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					type="button"
					onClick={scrollToTop}
					aria-label="Scroll to top"
					initial={{ opacity: 0, y: 16, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 16, scale: 0.9 }}
					transition={{ duration: 0.25, ease: "easeOut" }}
					className="fixed bottom-6 right-6 z-50 flex size-12 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				>
					<ArrowUp className="size-5" />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
