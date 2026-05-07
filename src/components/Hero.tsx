import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "../constants";
import { useState, useEffect } from "react";
import DropletEffect from "./DropletEffect";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden flex items-center droplet-hover-parent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropletEffect isActive={isHovered} />
      {/* Background with Parallax and Ken Burns */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={IMAGES.hero} 
          alt="Professional pressure washing"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 navy-gradient z-10" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 pt-32 md:pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white text-6xl md:text-8xl mb-6 leading-tight">
              Revive Your Property,<br />
              <span className="text-cyan">Without the Work.</span>
            </h1>

            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd3PbuuJFyw875ovx3RY7NB70oQdiIHOqTzNQbyKjq78nAbDg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan text-navy-dark font-bold rounded-full text-lg shadow-lg hover:shadow-cyan/20 transition-shadow inline-block"
                id="hero-cta-quote"
              >
                Refresh My Home
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
