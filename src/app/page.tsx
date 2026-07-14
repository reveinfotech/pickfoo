"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Zap, ShieldCheck } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-10">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-8"
              >
                <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
                  Mananthavady First
                </motion.div>
                <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold font-outfit leading-[1.1] text-foreground">
                  Satisfy Your <span className="text-primary italic">Cravings</span>, Delivered <span className="underline decoration-primary/30">Fast</span>.
                </motion.h1>
                <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Pickfoo Mananthavady brings local kitchens and Wayanad specials to your door — juicy burgers, crispy fried chicken, bamboo rice, and authentic hill flavours in one app.
                </motion.p>
                <motion.div variants={fadeIn} className="flex md:flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold group">
                    <Link href="/mananthavady">
                      Order in Mananthavady
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-bold border-2">
                    <Link href="/wayanad">Explore Wayanad Food</Link>
                  </Button>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center space-x-6 pt-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden">
                        <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="" width={48} height={48} />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-foreground">Launching in Mananthavady</p>
                    <p className="text-muted-foreground">Built for Wayanad&apos;s hills — not a metro copy-paste app</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20">
                  <Image
                    src="/images/hero-fastfood.png"
                    alt="Fresh meals ready for delivery in Mananthavady with Pickfoo"
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 left-8 bg-card/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <Zap className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Speed Status</p>
                      <p className="font-bold text-foreground text-sm">Lightning Fast</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 right-8 bg-card/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Served Hot In</p>
                      <p className="font-bold text-foreground text-sm">Mananthavady</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions (Quick Highlight) */}
        <section className="py-24 bg-card">
          <div className="container-premium">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold font-outfit mb-6">Why Mananthavady Chooses <span className="text-primary italic">Pickfoo</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Major national food apps do not cover Mananthavady yet. Pickfoo is built for this town — and for the hills around it — so you can order from more than one kitchen without juggling WhatsApp numbers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "No More Waiting",
                  desc: "Hungry after work or after a trek? Our Mananthavady delivery network is tuned for local roads so food arrives hot — not after a metro-length ETA that does not apply here."
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Hot & Fresh",
                  desc: "We prioritise packaging and speed so fries stay crispy and curry stays hot from partner kitchens across Mananthavady to your door."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "Local & Choice",
                  desc: "Craving fried chicken or traditional bamboo rice? Browse multiple restaurants in one place instead of calling a single kitchen on WhatsApp."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 rounded-3xl bg-secondary/30 border border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-outfit mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Variety Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/fresh.png"
                    alt="Food Variety in Wayanad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 order-1 lg:order-2"
              >
                <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
                  Best of Both Worlds
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-outfit leading-tight">
                  Modern Cravings & <span className="text-primary italic">Traditional Roots</span>.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wayanad&apos;s appetite spans café classics and tribal-rooted dishes. Whether you live in Mananthavady or are visiting for the hills, Pickfoo connects you to verified local kitchens — from cheesy pizza to peppery Malabar meals.
                </p>
                <ul className="space-y-4">
                  {[
                    "Partner restaurants across Mananthavady",
                    "Authentic kitchens for visitors and locals",
                    "Live tracking and digital payment options"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-2 group">
                  <Link href="/faq">
                    Read FAQs
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join the Force Section */}
        <section className="md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
          <div className="relative container-premium bg-secondary md:bg-transparent  z-10">
            <div className="py-8 lg:p-16 bg-secondary md:rounded-[3rem] text-white overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-bold font-outfit">
                    Join the Force. <br />
                    <span className="text-primary">Deliver</span> the Joy.
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                    Whether you own a restaurant in Mananthavady or ride a bike across Wayanad&apos;s roads, Pickfoo is your gateway to growing with the town&apos;s own delivery network.
                  </p>
                  <div className="flex justify-center md:justify-start flex-wrap gap-4">
                    <Button asChild className="bg-primary w-full md:w-auto hover:bg-primary/90 text-primary-foreground rounded-full h-14 px-8 text-lg font-bold">
                      <Link href="/join">Become a Partner</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent w-full md:w-auto text-white border-white/20 hover:bg-white/10 rounded-full h-14 px-8 text-lg font-bold">
                      <Link href="/join">Delivery Fleet</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 aspect-video rounded-3xl overflow-hidden shadow-2xl rotate-2"
                  >
                    <Image
                      src="/images/delivery.png"
                      alt="Delivery Partner"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
