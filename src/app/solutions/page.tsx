"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, Rocket, HeartHandshake, ShieldCheck, ArrowRight, Zap } from "lucide-react";

const solutions = [
    {
        icon: <Rocket className="w-10 h-10" />,
        title: "Market Expansion",
        desc: "Scale your restaurant's reach beyond your physical location. Tap into our growing user base in Wayanad."
    },
    {
        icon: <BarChart3 className="w-10 h-10" />,
        title: "Insight Analytics",
        desc: "Understand your customers better with deep data on ordering patterns, peak times, and popular dishes."
    },
    {
        icon: <HeartHandshake className="w-10 h-10" />,
        title: "Partner Support",
        desc: "A dedicated account manager to help you optimize your menu and digital presence on the platform."
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "Seamless Payments",
        desc: "Secure, automated weekly payouts. No more chasing payments or manual accounting hassles."
    }
];

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-6"
                        >
                            For Business
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold font-outfit mb-8"
                        >
                            Modern Solutions for <span className="text-primary italic">Modern Merchants</span>.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground leading-relaxed"
                        >
                            We provide the tools, technology, and logistics. You provide the flavor. Together, we grow Wayanad's culinary economy.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        {solutions.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[3rem] bg-white border border-primary/5 hover:bg-secondary/20 transition-all group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-outfit mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Integration Highlight */}
                    <section className="relative p-12 lg:p-24 bg-foreground rounded-[4rem] text-white overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div className="space-y-8">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground">
                                    <Zap className="w-8 h-8 fill-current" />
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold font-outfit leading-tight">
                                    Lightning Fast <span className="text-primary">Dashboard</span> Integration.
                                </h2>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    Get your kitchen live in less than 48 hours. Our intuitive merchant dashboard allows you to manage menus, track orders, and view performance on any device.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 px-8 font-bold">
                                        Get Started Now
                                    </Button>
                                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full h-14 px-8 font-bold">
                                        View Demo Dashboard
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-video bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl relative">
                                    {/* Mock dashboard element */}
                                    <div className="w-full h-full bg-black/40 rounded-2xl overflow-hidden border border-white/5 p-6 space-y-4">
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="h-4 w-32 bg-white/10 rounded"></div>
                                            <div className="h-8 w-8 bg-primary/20 rounded-full"></div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-32 bg-white/5 rounded-2xl"></div>
                                            <div className="h-32 bg-white/5 rounded-2xl"></div>
                                        </div>
                                        <div className="h-40 bg-white/5 rounded-2xl"></div>
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-xl rotate-6">
                                        +42% Growth
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
