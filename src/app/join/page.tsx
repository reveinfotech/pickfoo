"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Store, Bike, CheckCircle2, ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { partnerFaqs } from "@/lib/seo";

export default function JoinPage() {
    return (
        <>

            <main className="flex-grow pt-32 pb-20">
                <div className="container-premium">
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
                       Whether you run a restaurant in Wayanad or know these roads better than anyone, there's a place for you on Pickfoo.

                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Restaurant Partner */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 lg:p-16 rounded-[3.5rem] bg-secondary/30 border border-primary/5 hover:border-primary/20 transition-all hover:bg-card hover:shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors pointer-events-none"></div>

                            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                                <Store className="w-10 h-10" />
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mb-6">Restaurant Partner</h2>
                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                            Reach more customers across Wayanad without having to build and manage your own delivery team. Pickfoo handles the logistics so you can stay focused on the kitchen.
                            </p>

                            <ul className="space-y-4 mb-12">
                                {[
                                    "Low commission rates",
                                    "Free marketing and exposure",
                                    "Daily  payouts",
                                    "Dedicated merchant support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://restaurant.pickfoo.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "w-full h-16 rounded-2xl text-lg font-bold group relative z-50 cursor-pointer"
                                )}
                            >
                                Register Restaurant
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        {/* Delivery Partner */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 lg:p-16 rounded-[3.5rem] bg-secondary text-white border border-white/5 transition-all hover:shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem] pointer-events-none"></div>

                            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                                <Bike className="w-10 h-10" />
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mb-6">Delivery Partner</h2>
                            <p className="text-lg text-white/60 mb-10 leading-relaxed">
                            Set your own hours and earn on your own terms. If you know Wayanad's roads and don't mind the hills, this is built for you.
                            </p>

                            <ul className="space-y-4 mb-12">
                                {[
                                    "Flexible working hours",
                                    "Attractive delivery bonuses",
                                    "Daily earnings dashboard"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" size="lg" className="w-full h-16 rounded-2xl text-lg font-bold bg-transparent border-white/20 text-white hover:bg-primary hover:text-primary-foreground group">
                                Apply to Deliver
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>

                    <section id="faq" className="mt-32 max-w-3xl mx-auto scroll-mt-28">
                        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4 text-center text-primary">
                            Partner FAQs
                        </h2>
                        <FaqAccordion faqs={partnerFaqs} />
                    </section>
                </div>
            </main>

        </>
    );
}
