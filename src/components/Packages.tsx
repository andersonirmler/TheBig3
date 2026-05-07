import { motion } from "motion/react";
import { Check, Calendar, Star, Zap } from "lucide-react";

const packages = [
  {
    name: "One-Time Refresh",
    description: "Perfect for a seasonal reset or special occasion. Pick any single service from our Big 3.",
    price: "Custom",
    interval: "One-Time",
    features: [
      "Any Single 'Big 3' Service",
      "Industrial Grade Cleaning",
      "Eco-Friendly Solutions"
    ],
    highlight: false,
    icon: Zap
  },
  {
    name: "Big 3 Luxury Package",
    description: "Our signature elite service. A total exterior transformation package covering your entire home's most critical surfaces.",
    price: "Best Value",
    interval: "One-Time or Recurring",
    features: [
      "Whole House Window Cleaning (Exterior)",
      "Full Driveway & Sidewalk Wash",
      "All Trash Can Cleaning",
      "ALL 3 Signature Services Included",
      "Schedule Recurring on YOUR Timeline"
    ],
    highlight: true,
    icon: Star
  },
  {
    name: "Quarterly Maintenance",
    description: "Scheduled cleaning every 3 months to keep your property consistently pristine year-round.",
    price: "Member Rate",
    interval: "Every 3 Months",
    features: [
      "Your Choice of Preferred Service",
      "Automatic 3-Month Booking",
      "Priority Scheduling",
      "Locked-In Member Pricing"
    ],
    highlight: false,
    icon: Calendar
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-16 bg-offwhite relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[60%] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 bg-white px-6 py-2 rounded-full border border-gray-100 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-cyan font-black tracking-[0.3em] uppercase text-xs">Choose Your Package</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl text-navy mb-8 font-display font-black tracking-tight"
          >
            Elite Maintenance <span className="text-cyan italic">Plans</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[40px] transition-all duration-500 group ${
                pkg.highlight 
                  ? "bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-2 border-cyan z-10" 
                  : "bg-white/50 hover:bg-white border border-gray-100 hover:shadow-xl"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan text-white px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${pkg.highlight ? 'bg-cyan text-white' : 'bg-offwhite text-navy'}`}>
                  <pkg.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-black text-navy mb-2">{pkg.name}</h3>
                <p className="text-charcoal/50 leading-relaxed font-light text-sm">{pkg.description}</p>
              </div>

              <div className="mt-auto">
                <div className="mb-6">
                  <span className="text-navy font-black text-3xl">{pkg.price}</span>
                  <span className="text-charcoal/40 text-xs ml-2 font-medium uppercase tracking-tighter">/ {pkg.interval}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${pkg.highlight ? 'bg-cyan/10 text-cyan' : 'bg-gray-100 text-gray-400'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-sm ${pkg.highlight ? 'text-navy font-bold' : 'text-charcoal/70'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd3PbuuJFyw875ovx3RY7NB70oQdiIHOqTzNQbyKjq78nAbDg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                    pkg.highlight 
                      ? "bg-navy text-white hover:bg-cyan hover:shadow-cyan/30 hover:shadow-2xl" 
                      : "bg-offwhite text-navy hover:bg-gray-100"
                  }`}
                >
                  Restore My Home
                </a>
              </div>
            </motion.div>
          ))}
        </div>

</div>
    </section>
  );
}
