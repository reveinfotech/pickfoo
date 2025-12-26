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
                  Wayanad's Eats
                </motion.div>
                <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold font-outfit leading-[1.1] text-foreground">
                  Satisfy Your <span className="text-primary italic">Cravings</span>, Delivered <span className="underline decoration-primary/30">Fast</span>.
                </motion.h1>
                <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Juicy burgers, crispy fried chicken, or authentic Wayanad specials. Whether you need a quick bite or a traditional feast, we pick it up for you.
                </motion.p>
                <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold group">
                    Order Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-bold border-2">
                    View Menu
                  </Button>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center space-x-6 pt-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden">
                        <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" width={48} height={48} />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-foreground">500+ Happy Eaters</p>
                    <p className="text-muted-foreground">Satisfying hunger across the hills</p>
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
                    alt="Delicious Fast Food Spread"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 left-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <Zap className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Speed Status</p>
                      <p className="font-bold text-black text-sm">Lightning Fast</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Served Hot In</p>
                      <p className="font-bold text-black text-sm">Wayanad Hills</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions (Quick Highlight) */}
        <section className="py-24 bg-white">
          <div className="container-premium">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold font-outfit mb-6">Why Wayanad Loves <span className="text-primary italic">pickfoo?</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand your cravings. From late-night burgers to authentic lunchtime meals, we deliver happiness across the hills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "No More Waiting",
                  desc: "Hungry? We get it. Our optimized delivery network ensures your food arrives hot & crispy, faster than ever."
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Hot & Fresh",
                  desc: "We prioritize speed and packaging so your fries stay crispy and your curry stays hot, all the way to your door."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "Local & Global",
                  desc: "Craving a bucket of fried chicken? Or traditional Bamboo Rice? We connect you to the best of both worlds."
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
                  Wayanad is changing, and so is our appetite. Whether you're a local craving a cheesy pizza or a tourist looking to taste the authentic spices of the hills, pickfoo delivers it all.
                </p>
                <ul className="space-y-4">
                  {[
                    "Top-rated fast food joints & cafes",
                    "Authentic traditional kitchens for tourists",
                    "Contact-less, hygienic delivery"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="lg" className="rounded-full px-8 border-2 group">
                  Explore Our Menu
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join the Force Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
          <div className="container-premium relative z-10">
            <div className="p-8 lg:p-16 bg-foreground rounded-[3rem] text-white overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-bold font-outfit">
                    Join the Force. <br />
                    <span className="text-primary">Deliver</span> the Joy.
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                    Whether you own a restaurant or have a bike, pickfoo is your gateway to growing with Wayanad's fastest delivery network.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 px-8 text-lg font-bold">
                      Become a Partner
                    </Button>
                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full h-14 px-8 text-lg font-bold">
                      Delivery Fleet
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
