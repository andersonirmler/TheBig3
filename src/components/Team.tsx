import { motion } from "motion/react";
import { Droplets, Sparkles, Wind } from "lucide-react";
import { IMAGES } from "../constants";

const TeamMember = ({ name, specialty, bio, image, icon: Icon, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative h-[650px] w-full lg:w-96 overflow-hidden rounded-[40px] shadow-2xl border-4 border-white"
    >
      {/* Background Image - B&W to Color */}
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        style={{ objectPosition: "center 20%" }}
        referrerPolicy="no-referrer"
      />

      {/* Logo Watermark */}
      <div className="absolute top-8 left-8 z-30 opacity-10 group-hover:opacity-40 transition-opacity duration-500">
        <img src={IMAGES.logo} className="h-10 w-auto invert brightness-0 grayscale" />
      </div>
      
      {/* Navy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/10 to-transparent transition-opacity duration-500 opacity-70 group-hover:opacity-90" />

      {/* Cyan Accent Line */}
      <motion.div 
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        className="absolute bottom-0 left-0 h-2 bg-cyan z-30"
      />

      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
        <div className="flex items-center gap-4 mb-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <motion.div
            whileHover={{ rotate: 180 }}
            className="w-12 h-12 rounded-2xl bg-cyan flex items-center justify-center shadow-lg"
          >
            <Icon className="w-6 h-6 text-navy-dark" />
          </motion.div>
          <span className="text-cyan font-black tracking-[0.4em] uppercase text-[10px]">{specialty}</span>
        </div>
        
        <h3 className="text-white text-5xl mb-6 font-display font-black translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75 tracking-tighter">{name}</h3>
        
        <motion.div
          initial={{ opacity: 0, y: 30, height: 0 }}
          whileHover={{ opacity: 1, y: 0, height: "auto" }}
          className="text-white/60 text-base leading-relaxed overflow-hidden font-light"
        >
          {bio}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Team = () => {
  const members = [
    {
      name: "Alex",
      specialty: "Pressure Washing Lead",
      bio: "Alex is the muscle behind the machine. Specializing in driveways, sidewalks, and concrete surfaces, Alex transforms grime-covered slabs into freshly-poured-looking masterpieces. If it's stained, oiled, or moss-covered — Alex will erase it.",
      image: IMAGES.alex,
      icon: Droplets
    },
    {
      name: "Anderson",
      specialty: "Window Specialist",
      bio: "If you can see through it, Anderson can make it shine. With a sharp eye for streak-free perfection, Anderson handles every window like it's the front of a showroom — whether it's a two-story home or a storefront. Detail-obsessed and ladder-fearless.",
      image: IMAGES.anderson,
      icon: Sparkles
    },
    {
      name: "Landon",
      specialty: "Bin Cleaning Expert",
      bio: "Landon takes on the dirty work nobody else wants. Using high-heat steam and eco-friendly cleaners, he turns funky, foul trash bins into fresh-smelling, debris-free containers. Your nose will thank him.",
      image: IMAGES.landon,
      icon: Wind
    }
  ];

  return (
    <section id="team" className="py-32 bg-offwhite relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Experts</span>
          <h2 className="text-5xl text-navy">Meet The Big 3</h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 relative z-10">
        {members.map((member, i) => (
          <TeamMember key={member.name} {...member} index={i} />
        ))}
      </div>
    </section>
  );
};
