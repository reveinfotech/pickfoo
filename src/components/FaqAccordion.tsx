"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Faq = {
	question: string;
	answer: string;
};

export function FaqAccordion({
	faqs,
	headingLevel = "h3",
}: {
	faqs: readonly Faq[];
	headingLevel?: "h2" | "h3";
}) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const baseId = useId();
	const Heading = headingLevel;

	return (
		<div className="divide-y divide-primary/10 border-y border-primary/10">
			{faqs.map((faq, index) => {
				const isOpen = openIndex === index;
				const panelId = `${baseId}-panel-${index}`;
				const buttonId = `${baseId}-button-${index}`;

				return (
					<div key={faq.question}>
						<Heading className="m-0 text-lg md:text-xl">
							<button
								id={buttonId}
								type="button"
								aria-expanded={isOpen}
								aria-controls={panelId}
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className={cn(
									"flex w-full items-center justify-between gap-4 py-7 text-left font-bold font-outfit transition-colors duration-300 ease-out",
									isOpen ? "text-primary" : "hover:text-primary",
								)}
							>
								<span>{faq.question}</span>
								<ChevronDown
									className={cn(
										"h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
										isOpen && "rotate-180",
									)}
								/>
							</button>
						</Heading>
						<div
							id={panelId}
							role="region"
							aria-labelledby={buttonId}
							aria-hidden={!isOpen}
							inert={!isOpen}
							className={cn(
								"grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
								isOpen
									? "grid-rows-[1fr] opacity-100"
									: "grid-rows-[0fr] opacity-0",
							)}
						>
							<div className="overflow-hidden">
								<p
									className={cn(
										"pb-7 text-muted-foreground leading-relaxed transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
										isOpen ? "translate-y-0" : "-translate-y-1",
									)}
								>
									{faq.answer}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
