import { motion } from "motion/react";

const brands = [
  { name: "Ryobi", logo: "https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/images%20(2).png" },
  { name: "Mr. Clean", logo: "https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/mr%20clean.jpg" },
  { name: "Tide", logo: "https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/Tide-logo.png" },
  { name: "Simple Green", logo: "https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/Simple%20green.jpg" },
  { name: "Fabuloso", logo: "https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/12787436_fabuloso_logo.jpg" },
  { name: "Clorox", logo: "https://lfxflfawnyfhrlktpngt.supabase.co/storage/v1/object/public/Images/Clorox-logo.png" }
];

export function Brands() {
  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-cyan/40" />
          <span className="text-cyan font-black tracking-[0.4em] uppercase text-[11px]">Professional Grade</span>
          <div className="w-12 h-px bg-cyan/40" />
        </motion.div>
        <h3 className="text-3xl md:text-5xl text-navy font-display font-black tracking-tight leading-tight">The Tools We <span className="text-cyan italic">Use and Trust</span></h3>
      </div>

      <div className="relative flex group">
        {/* Infinite Moving Marquee */}
        <motion.div 
          className="flex whitespace-nowrap gap-8 md:gap-12 items-center py-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 flex items-center justify-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 rounded-[3rem] p-8 w-[240px] h-[160px] transition-all duration-500 overflow-hidden"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-full max-w-full object-contain pointer-events-none rounded-xl" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
