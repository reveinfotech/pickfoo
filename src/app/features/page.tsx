"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Map,
    Clock,
    ShieldCheck,
    Smartphone,
    Mountain,
    ChevronRight,
    TrendingUp,
    Users
} from "lucide-react";

const features = [
    {
        icon: <Map className="w-8 h-8" />,
        title: "AI-Optimized Hill Routes",
        description: "Wayanad's terrain is unique. Our custom algorithms calculate the fastest path through hills and valleys, avoiding traffic and seasonal road closures.",
        color: "bg-blue-500/10 text-blue-500"
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Real-Time Tracking",
        description: "Watch your order move across the map in real-time. Our high-precision GPS ensures you know exactly when your Puttu is arriving.",
        color: "bg-orange-500/10 text-orange-500"
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Hyper-Local Sourcing",
        description: "We don't just deliver; we curate. Every restaurant on pickfoo is verified for quality and local ingredient sourcing.",
        color: "bg-green-500/10 text-green-500"
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Seamless Ordering",
        description: "A clean, minimalist interface designed for speed. Order your favorite meals in less than 3 taps.",
        color: "bg-purple-500/10 text-purple-500"
    },
    {
        icon: <Mountain className="w-8 h-8" />,
        title: "Last-Mile Hill Reach",
        description: "While others stop at the main road, we go the extra mile to reach the remotest homestays and estates.",
        color: "bg-red-500/10 text-red-500"
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Predictive Ordering",
        description: "Our AI learns your preferences and suggests the best local delicacies based on your mood and the weather.",
        color: "bg-cyan-500/10 text-cyan-500"
    }
];

export default function FeaturesPage() {
    return (
        <>

            <main className="flex-grow pt-32 md:pb-20">
                <div className="max-w-3xl mb-16 container-premium">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-6"
                    >
                        Technology meets Tradition
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-6xl font-bold font-outfit mb-6"
                    >
                        Building the Future of <span className="text-primary italic">Hill Delivery</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground leading-relaxed"
                    >
                        Discover how pickfoo is transforming the culinary landscape of Wayanad with cutting-edge technology and a deep love for local flavors.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 container-premium md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-white border border-primary/5 hover:border-primary/20 transition-all hover:shadow-2xl hover:-translate-y-2 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-outfit mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="mt-8 flex items-center text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                Learn more <ChevronRight className="ml-2 w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration Section */}
                <section className="pt-8 mt-16 container-premium bg-primary md:bg-transparent">
                    <div className="relative bg-primary md:rounded-[3rem] text-primary-foreground overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 py-8 md:p-8 lg:p-16 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold font-outfit mb-6">Designed for the Community.</h2>
                                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                                    pickfoo isn't just an app; it's an ecosystem. From supporting local farmers to empowering delivery partners, we're building something that stays in the hills.
                                </p>
                                <div className="flex flex-wrap gap-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">5,000+</p>
                                            <p className="text-sm opacity-70">Community Users</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">150+</p>
                                            <p className="text-sm opacity-70">Merchant Partners</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <blockquote className="text-2xl font-medium italic mb-6">
                                    "pickfoo has completely changed how we think about logistics in Wayanad. It's fast, reliable, and understands our terrain."
                                </blockquote>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary"></div>
                                    <div>
                                        <p className="font-bold text-lg">Rajesh V.</p>
                                        <p className="text-sm opacity-70">Restaurant Owner, Kalpetta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}
