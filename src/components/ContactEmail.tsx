"use client";

import { useEffect, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/seo";
import { cn } from "@/lib/utils";

type ContactEmailProps = {
	className?: string;
	label?: string;
	showAddress?: boolean;
	subject?: string;
};

/**
 * Avoids putting a plain mailto + address in the initial HTML source.
 * The real address is assembled after mount.
 */
export function ContactEmail({
	className,
	label = "Contact Us",
	showAddress = false,
	subject,
}: ContactEmailProps) {
	const [href, setHref] = useState<string>("#");
	const [text, setText] = useState(label);

	useEffect(() => {
		const mail = CONTACT_EMAIL;
		const qs = subject
			? `?subject=${encodeURIComponent(subject)}`
			: "";
		setHref(`mailto:${mail}${qs}`);
		if (showAddress) setText(mail);
	}, [showAddress, subject]);

	return (
		<a
			href={href}
			className={cn(
				"text-muted-foreground hover:text-primary transition-colors",
				className,
			)}
			onClick={(e) => {
				if (href === "#") e.preventDefault();
			}}
		>
			{text}
		</a>
	);
}
