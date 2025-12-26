"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Coffee, Trees, Sprout, Wind } from "lucide-react";

const specialties = [
    {
        title: "Bamboo Rice",
        desc: "A rare and nutritious grain harvested from flowering bamboo groves in the deep forests.",
        icon: <Trees className="w-6 h-6" />
    },
    {
        title: "Highland Coffee",
        desc: "Single-origin Arabica and Robusta beans grown under the shade of massive jungle trees.",
        icon: <Coffee className="w-6 h-6" />
    },
    {
        title: "Pure Spices",
        desc: "The world's finest Black Pepper, Cardamom, and Ginger, sourced from the ancient hills.",
        icon: <Sprout className="w-6 h-6" />
    },
    {
        title: "Hill Honey",
        desc: "Wild honey collected by tribal communities from the heights of the Western Ghats.",
        icon: <Wind className="w-6 h-6" />
    }
];

export default function WayanadPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                {/* Immersive Hero */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549416878-b9ca35c24150?q=80&w=2000')] bg-cover bg-center"
                        ></motion.div>
                    </div>

                    <div className="container mx-auto px-4 relative z-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold uppercase tracking-widest mb-6"
                        >
                            The Heart of the Western Ghats
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl lg:text-8xl font-bold font-outfit text-white mb-8"
                        >
                            Wayanad <span className="text-primary">Special</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
                        >
                            Beyond landscapes, Wayanad is a flavor. A blend of ancient tribal wisdom and the bounty of the rainforest.
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
                </section>

                {/* Culture Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className="text-4xl lg:text-5xl font-bold font-outfit leading-tight">
                                    Taste the <span className="text-primary italic">Wilderness</span> in every bite.
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {specialties.map((item, i) => (
                                        <div key={i} className="p-6 bg-secondary/30 rounded-3xl border border-primary/5">
                                            <div className="text-primary mb-4">{item.icon}</div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1593005510509-d95b268ff990?q=80&w=800"
                                    alt="Wayanad Spices"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Food Journey */}
                <section className="py-24 bg-foreground text-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-6">A Journey through Local Kitchens</h2>
                            <p className="text-lg text-white/60">From the legendary Fish Curry to the aromatic Coffee, we bring you the authentic taste of the hills.</p>
                        </div>

                        <div className="flex flex-nowrap space-x-8 overflow-x-auto pb-8 scrollbar-hide">
                            {[
                                { name: "Malabar Biriyani", img: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=600" },
                                { name: "Traditional Puttu", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600" },
                                { name: "Bamboo Rice Payasam", img: "https://images.unsplash.com/photo-1589113110945-dfc3217ac56d?q=80&w=600" },
                                { name: "Wayanad Coffee", img: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=600" }
                            ].map((food, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="min-w-[300px] aspect-[4/5] rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden relative group"
                                >
                                    <img src={food.img} alt={food.name} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black to-transparent">
                                        <h4 className="text-2xl font-bold font-outfit">{food.name}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
