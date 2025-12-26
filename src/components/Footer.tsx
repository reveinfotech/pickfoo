import Link from "next/link";
import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/50 pt-20 pb-10 border-t border-primary/10 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                <ShoppingBag className="text-primary-foreground w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold font-outfit tracking-tight text-foreground">
                                pick<span className="text-primary">foo</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Bringing Wayanad's finest flavors to your doorstep. Fast, fresh, and local.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold font-outfit mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/wayanad" className="text-muted-foreground hover:text-primary transition-colors">Wayanad Special</Link></li>
                            <li><Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Our Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold font-outfit mb-6">For Partners</h4>
                        <ul className="space-y-4">
                            <li><Link href="/join" className="text-muted-foreground hover:text-primary transition-colors">Restaurant Partner</Link></li>
                            <li><Link href="/join" className="text-muted-foreground hover:text-primary transition-colors">Delivery Partner</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Merchant Help</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold font-outfit mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li className="text-muted-foreground">Privacy Policy</li>
                            <li className="text-muted-foreground">Terms of Service</li>
                            <li className="text-muted-foreground">Contact Us</li>
                            <li className="text-muted-foreground font-semibold">contact@pickfoo.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-8 text-center text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} pickfoo. All rights reserved. Made for Wayanad.</p>
                </div>
            </div>
        </footer>
    );
}
