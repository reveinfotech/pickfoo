"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bell,
  Compass,
  Heart,
  MapPin,
  Package,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headlines = [
  {
    before: "Your favourite meals, delivered to your ",
    highlight: "doorstep.",
    after: "",
  },
  {
    before: "The taste of ",
    highlight: "home",
    after: ", just a tap away.",
  },
  {
    before: "Order from the ",
    highlight: "best spots",
    after: " in town, without the wait.",
  },
];

const stats = [
  { value: 1000, suffix: "+", label: "Happy customers", icon: Users },
  { value: 500, suffix: "+", label: "Orders delivered", icon: ShoppingBag },
  { value: 8, suffix: "+", label: "Restaurants on board", icon: Store },
];

const steps = [
  {
    icon: UtensilsCrossed,
    title: "Find your craving",
    desc: "Browse through restaurants near you. Whether it's something you eat every week or a place you've been meaning to try, take your pick.",
  },
  {
    icon: MapPin,
    title: "Tell us where you are",
    desc: "Add your favourites to the cart, confirm your address, and place the order. That's it. No forms, no fuss.",
  },
  {
    icon: Bell,
    title: "Wait for the knock",
    desc: "Track your order from the restaurant to your door. And when you hear that knock, you know it's time to eat.",
  },
];

const whyPickfoo = [
  {
    icon: Compass,
    title: "We Know Every Street",
    desc: "Not a delivery zone drawn from a city office. Our riders have learned Wayanad's shortcuts, landmarks, and busy-hour routes by actually riding them.",
  },
  {
    icon: Package,
    title: "Food That Travels Well",
    desc: "We pay attention to how food is packed and handled, because what's the point of ordering if it doesn't arrive the way it should?",
  },
  {
    icon: Store,
    title: "Restaurants You Already Know",
    desc: "Some of the best restaurants in Wayanad, the ones your family has ordered from for years, are now just a tap away.",
  },
  {
    icon: Truck,
    title: "Track Your Order",
    desc: "From \"order placed\" to the knock on your door, you can see exactly where your food is. No guesses, no calls.",
  },
  {
    icon: Sparkles,
    title: "Mananthavady's First",
    desc: "The first food delivery platform built here, for here. Not a pin dropped on a map from somewhere else.",
  },
];

function CountUp({
  to,
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${Math.round(value)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, to, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}

function RotatingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <h1
      className="grid overflow-hidden text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-outfit leading-[1.15] text-foreground"
      aria-live="polite"
    >
      {headlines.map((line, i) => (
        <motion.span
          key={line.before + line.highlight}
          className="col-start-1 row-start-1"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 8 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          aria-hidden={i !== index}
        >
          {line.before}
          <span className="text-primary italic">{line.highlight}</span>
          {line.after}
        </motion.span>
      ))}
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden bg-background">
          <Image
            src="/images/hero-fastfood.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />

          <div className="relative z-10 min-h-screen flex items-center pt-20">
            <div className="container-premium w-full py-16 md:py-24">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="mx-auto max-w-4xl text-center space-y-8"
              >
                <motion.div
                  variants={fadeIn}
                  className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider"
                >
                  Home delivery in Wayanad
                </motion.div>
                <motion.div variants={fadeIn}>
                  <RotatingHeadline />
                </motion.div>
                <motion.p
                  variants={fadeIn}
                  className="relative z-10 text-xl sm:text-2xl text-foreground leading-relaxed mx-auto max-w-2xl drop-shadow-md"
                >
                  Home delivery in Wayanad, bringing you food from the
                  restaurants people have trusted for years.
                </motion.p>
                <motion.div
                  variants={fadeIn}
                  className="flex items-center justify-center pt-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full h-14 px-8 text-lg font-bold"
                  >
                    <Link href="/app">Download the App</Link>
                  </Button>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="flex items-center justify-center space-x-6 pt-6"
                >
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden"
                      >
                        <Image
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                          alt=""
                          width={48}
                          height={48}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-left">
                    <p className="font-bold text-foreground">
                      1000+ happy customers
                    </p>
                    <p className="text-foreground/70">
                      Ordering from kitchens they already trust
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Numbers that speak */}
        <section className="py-20">
          <div className="container-premium">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-4">
                Numbers that speak
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold font-outfit">
                Growing with every order
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-3xl bg-secondary/30"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-4xl lg:text-5xl font-bold font-outfit text-primary mb-2 tabular-nums">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-secondary/20">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
                  How it works
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-outfit leading-tight">
                  From craving to{" "}
                  <span className="text-primary italic">knock</span>, in three
                  steps.
                </h2>
                <ol className="space-y-8">
                  {steps.map((step, index) => (
                    <motion.li
                      key={step.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 }}
                      className="flex gap-5"
                    >
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-outfit mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/delivery.png"
                    alt="Pickfoo delivery on the way to your door in Mananthavady"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Pickfoo */}
        <section className="py-24">
          <div className="container-premium">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold font-outfit mb-6">
                Why <span className="text-primary italic">Pickfoo</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {whyPickfoo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-3xl bg-secondary/30 border-2 border-transparent hover:border-primary hover:bg-secondary/50 transition-all hover:-translate-y-1 group lg:col-span-2 ${
                    index === 3 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-outfit mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants now on Pickfoo */}
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
                    alt="Local restaurants now on Pickfoo in Mananthavady"
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
                  Just launched
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-outfit leading-tight">
                  Restaurants Now on{" "}
                  <span className="text-primary italic">Pickfoo</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We just launched in Mananthavady, and some of the best local
                  eateries are already on board. From small kitchens that have
                  been around for decades to the most popular dining spots,
                  we&apos;re just getting started. More restaurants across
                  Wayanad joining every week.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg font-bold group"
                >
                  <Link href="/app">
                    Order from them now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
