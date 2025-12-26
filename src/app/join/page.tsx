"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Store, Bike, CheckCircle2, ArrowRight } from "lucide-react";

export default function JoinPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl lg:text-7xl font-bold font-outfit mb-6"
                        >
                            Grow with <span className="text-primary italic">pickfoo</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground leading-relaxed"
                        >
                            Whether you cook amazing food or love the open road, there's a place for you in the pickfoo family.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Restaurant Partner */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 lg:p-16 rounded-[3.5rem] bg-secondary/30 border border-primary/5 hover:border-primary/20 transition-all hover:bg-white hover:shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors"></div>

                            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                                <Store className="w-10 h-10" />
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mb-6">Restaurant Partner</h2>
                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                Reach thousands of new customers in Wayanad. Our platform simplifies orders so you can focus on cooking.
                            </p>

                            <ul className="space-y-4 mb-12">
                                {[
                                    "Low commission rates",
                                    "Free marketing and exposure",
                                    "Weekly payouts",
                                    "Dedicated merchant support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold group">
                                Register Restaurant
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>

                        {/* Delivery Partner */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 lg:p-16 rounded-[3.5rem] bg-foreground text-white border border-white/5 transition-all hover:shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem]"></div>

                            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                                <Bike className="w-10 h-10" />
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mb-6">Delivery Partner</h2>
                            <p className="text-lg text-white/60 mb-10 leading-relaxed">
                                Be your own boss. Enjoy flexible hours, competitive pay, and the joy of delivering smiles across the hills.
                            </p>

                            <ul className="space-y-4 mb-12">
                                {[
                                    "Flexible working hours",
                                    "Attractive delivery bonuses",
                                    "Insurance coverage",
                                    "Weekly earnings dashboard"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" size="lg" className="w-full h-16 rounded-2xl text-lg font-bold border-white/20 text-white hover:bg-white hover:text-black group">
                                Apply to Deliver
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* FAQ Preview */}
                    <div className="mt-32 max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold font-outfit mb-8">Frequently Asked Questions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="p-6 border-b border-primary/10">
                                <p className="font-bold mb-2">What documents do I need?</p>
                                <p className="text-muted-foreground text-sm">For restaurants: FSSAI license, PAN, GST. For delivery: DL, Vehicle RC, Aadhaar.</p>
                            </div>
                            <div className="p-6 border-b border-primary/10">
                                <p className="font-bold mb-2">When do I get paid?</p>
                                <p className="text-muted-foreground text-sm">All partners receive payouts every Monday directly to their bank accounts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
