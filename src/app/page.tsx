import { getSiteStats } from "@/lib/api";
import HomeContent from "./HomeContent";

export const revalidate = 300;

export default async function Home() {
	const stats = await getSiteStats();
	return <HomeContent stats={stats} />;
}
