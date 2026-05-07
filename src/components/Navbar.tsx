import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { IMAGES } from "../constants";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Services", "Packages", "About", "Team", "Testimonials", "FAQs", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-1 frosted-glass shadow-lg" : "py-6"
    }`}>
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="flex justify-start items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className={`relative transition-all duration-500 bg-white shadow-md border border-navy/10 rounded-2xl flex items-center justify-center hover:scale-105 ${
              isScrolled ? "h-10 px-3 py-1.5" : "h-16 md:h-20 px-4 py-2"
            }`}>
               <img 
                 src={IMAGES.logo} 
                 alt="The Big 3 Logo" 
                 className="h-full w-auto object-contain"
                 referrerPolicy="no-referrer"
               />
            </div>
          </motion.div>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex justify-center items-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm font-semibold tracking-wide hover:text-cyan transition-all duration-300 whitespace-nowrap ${
                    isScrolled ? "text-navy" : "text-white"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Desktop CTA & Mobile Toggle */}
        <div className="flex items-center justify-end gap-6">
          <div className="hidden lg:block">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3PbuuJFyw875ovx3RY7NB70oQdiIHOqTzNQbyKjq78nAbDg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan text-navy-dark font-bold rounded-full text-sm hover:shadow-[0_0_20px_rgba(27,169,232,0.4)] transition-all inline-block whitespace-nowrap"
              id="nav-cta-quote"
            >
              Refresh My Home
            </a>
          </div>

          <button 
            className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-navy" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-navy" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white text-navy flex flex-col p-10 z-40 overflow-hidden"
          >
            <ul className="space-y-8 mb-10">
              {navLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-display font-bold hover:text-cyan transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3PbuuJFyw875ovx3RY7NB70oQdiIHOqTzNQbyKjq78nAbDg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 bg-cyan text-navy font-bold rounded-2xl text-2xl text-center"
            >
              Deep Clean My Home
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
