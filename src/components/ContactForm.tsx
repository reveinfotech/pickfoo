"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL } from "@/lib/seo";
import { cn } from "@/lib/utils";

const fieldClass =
	"h-12 rounded-xl border-primary/15 bg-background/60 px-4 text-base md:text-sm focus-visible:border-primary/40";

export function ContactForm() {
	const [mail, setMail] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		setMail(CONTACT_EMAIL);
	}, []);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!mail) return;

		const mailSubject = `Pickfoo — ${subject}`;
		const body = [
			`Name: ${name}`,
			`Email: ${email}`,
			`Subject: ${subject}`,
			"",
			message,
		].join("\n");

		window.location.href = `mailto:${mail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-2">
					<Label htmlFor="contact-name">Name</Label>
					<Input
						id="contact-name"
						name="name"
						required
						autoComplete="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Your name"
						className={fieldClass}
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="contact-email">Email</Label>
					<Input
						id="contact-email"
						name="email"
						type="email"
						required
						autoComplete="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="you@example.com"
						className={fieldClass}
					/>
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="contact-subject">Subject</Label>
				<Input
					id="contact-subject"
					name="subject"
					required
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					placeholder="What is this about?"
					className={fieldClass}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="contact-message">Message</Label>
				<textarea
					id="contact-message"
					name="message"
					required
					rows={6}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="How can we help?"
					className={cn(
						fieldClass,
						"min-h-36 h-auto w-full py-3 resize-y border shadow-xs outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] placeholder:text-muted-foreground",
					)}
				/>
			</div>

			<Button
				type="submit"
				size="lg"
				disabled={!mail}
				className="h-12 px-8 rounded-full font-semibold"
			>
				Send message
				<ArrowRight className="w-4 h-4" />
			</Button>
		</form>
	);
}
