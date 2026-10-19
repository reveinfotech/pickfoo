export function formatPostDate(iso: string | null): string {
	if (!iso) return "";
	return new Date(iso).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "Asia/Kolkata",
	});
}
