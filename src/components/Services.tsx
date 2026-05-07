import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { SERVICES } from "../constants";
import DropletEffect from "./DropletEffect";

export const Services = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-cyan rounded-full" />
            <span className="text-cyan font-black tracking-[0.4em] uppercase text-xs">Expertise</span>
            <div className="w-12 h-1 bg-cyan rounded-full" />
          </div>
          <h2 className="text-5xl md:text-6xl text-navy font-display font-black mb-6">Our Core Services</h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Industrial grade power meets white-glove attention to detail. We specialize in the essentials of property maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => !isTouchDevice && setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col h-full overflow-hidden rounded-[32px]"
            >
              <DropletEffect isActive={hoveredId === service.id} />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-8 shadow-xl border-4 border-white bg-offwhite group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Service Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20 shadow-lg">
                  <span className="text-navy font-black text-[10px] uppercase tracking-widest">Service 0{index + 1}</span>
                </div>
              </div>

              <div className="flex-1 px-4">
                <h3 className="text-2xl md:text-3xl font-display font-black text-navy mb-4 group-hover:text-cyan transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed font-light mb-6 text-sm md:text-base">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto px-4 pb-8">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd3PbuuJFyw875ovx3RY7NB70oQdiIHOqTzNQbyKjq78nAbDg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan font-black text-xs md:text-sm uppercase tracking-wider cursor-pointer group/link hover:text-navy transition-colors"
                >
                  <span>Restore My Home</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
