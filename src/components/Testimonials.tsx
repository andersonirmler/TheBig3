import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl mb-6">What Our Customers Say</h2>
        <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
          Over 500+ homes served with a commitment to quality and professionalism.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-8 px-4 py-8 whitespace-nowrap group-hover:[animation-play-state:paused]"
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div 
              key={i}
              className="w-[450px] bg-offwhite p-10 rounded-3xl flex flex-col justify-between shadow-sm border border-navy/5 hover:border-cyan/30 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan text-cyan" />
                  ))}
                </div>
                <p className="text-charcoal text-xl italic font-light leading-relaxed whitespace-normal mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{t.name}</h4>
                  <p className="text-charcoal/40 text-sm tracking-wide">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

       {/* Trust Badges */}
       <div className="container mx-auto px-6 mt-20 flex flex-wrap justify-center items-center gap-12 md:gap-24">
          <img 
            src="https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/Google-Review-Symbol.png" 
            alt="Google Reviews" 
            className="h-20 md:h-32 w-auto object-contain rounded-2xl"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/Nextdoor-logo-green.png" 
            alt="Nextdoor" 
            className="h-20 md:h-32 w-auto object-contain rounded-2xl"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/images%20(2)%20(1).png" 
            alt="Trust Badge 1" 
            className="h-20 md:h-32 w-auto object-contain rounded-2xl"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/images%20(3).png" 
            alt="Trust Badge 2" 
            className="h-20 md:h-32 w-auto object-contain rounded-2xl"
            referrerPolicy="no-referrer"
          />
       </div>
    </section>
  );
};
