const FENCE = /^\s*(```|~~~)/;
const LIST_ITEM = /^\s*([-*+]|\d+[.)])\s/;
const TABLE_ROW = /^\s*\|/;
const QUOTE = /^\s*>/;

/**
 * Posts are often pasted from Google Docs or Word, where one line break means a
 * new paragraph. Markdown would merge those lines into one block, so split them
 * into paragraphs, keeping lists, tables, quotes and code blocks intact.
 */
export function normalizePostMarkdown(raw: string): string {
	const lines = raw.replace(/\r\n?/g, "\n").split("\n");
	const out: string[] = [];
	let inFence = false;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		out.push(line);
		if (FENCE.test(line)) inFence = !inFence;
		if (inFence) continue;

		const next = lines[i + 1];
		if (next === undefined || !line.trim() || !next.trim()) continue;

		const sameBlock =
			(LIST_ITEM.test(line) || /^\s{2,}\S/.test(line)) &&
			(LIST_ITEM.test(next) || /^\s{2,}\S/.test(next));
		const tableRows = TABLE_ROW.test(line) && TABLE_ROW.test(next);
		const quoteLines = QUOTE.test(line) && QUOTE.test(next);
		const setextUnderline = /^\s*=+\s*$/.test(next);
		if (!sameBlock && !tableRows && !quoteLines && !setextUnderline && !FENCE.test(next)) {
			out.push("");
		}
	}

	return out.join("\n");
}
