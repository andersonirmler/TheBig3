/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Brands } from "./components/Brands";
import { Team } from "./components/Team";
import { Packages } from "./components/Packages";
import { BeforeAfter } from "./components/BeforeAfter";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";
import { Sparkles, Droplets } from "lucide-react";
import { IMAGES } from "./constants";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-32 bg-white overflow-hidden relative">
          {/* Subtle background texture/elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-7/12 relative group"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-cyan/10 rounded-full blur-3xl group-hover:bg-cyan/20 transition-all duration-700" />
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-navy/5 rounded-full blur-3xl group-hover:bg-navy/10 transition-all duration-700" />
                
                {/* Main Image Frame */}
                <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[50px] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white bg-navy-dark group-hover:shadow-[0_48px_100px_-24px_rgba(27,169,232,0.3)] transition-all duration-500">
                  <img 
                    src={IMAGES.allTeam} 
                    alt="The Big 3 Team" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ objectPosition: "center 20%" }}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Since Badge */}
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-lg">
                    <span className="text-navy font-black text-xs uppercase tracking-[0.2em]">Est. 2024</span>
                  </div>
                </div>
                
                {/* Dot Grid Decoration */}
                <div className="absolute -top-10 -right-10 z-0 grid grid-cols-6 gap-3 opacity-10">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-navy" />
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-5/12"
              >
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-12 h-1 bg-cyan rounded-full" />
                  <span className="text-cyan font-black tracking-[0.4em] uppercase text-xs">Our Story</span>
                </div>
                
                <h2 className="text-6xl lg:text-7xl text-navy mb-8 leading-[1.1] font-display font-black tracking-tight">
                  Young. Driven.
                </h2>
                
                <div className="space-y-6 text-charcoal/70 text-xl leading-relaxed max-w-xl">
                  <p className="font-bold text-navy/90">
                    The Big 3 is the #1 youngest and most dedicated pressure washing crew in the nation. We transform your property's exterior by restoring years of lost brilliance, ensuring your home stands out with crystal-clear precision and unmatched curb appeal.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <Packages />
        <BeforeAfter />
        <Brands />
        <Team />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
