import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { IMAGES } from "../constants";

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-32 pb-12 overflow-hidden relative">
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] fill-offwhite rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,30.29,1200,47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md">
                <img src={IMAGES.logo} alt="The Big 3 Logo" className="h-16 w-auto object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
            <p className="text-white/40 mb-8 leading-relaxed max-w-xs">
              Professional exterior cleaning solutions for your home. Family-feel, locally owned, and fully insured.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan hover:text-navy hover:border-cyan transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan hover:text-navy hover:border-cyan transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan hover:text-navy hover:border-cyan transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-cyan transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-cyan transition-colors">Our Team</a></li>
              <li><a href="#testimonials" className="hover:text-cyan transition-colors">Testimonials</a></li>
              <li><a href="#faqs" className="hover:text-cyan transition-colors">FAQs</a></li>
              <li><a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd3PbuuJFyw875ovx3RY7NB70oQdiIHOqTzNQbyKjq78nAbDg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan transition-colors"
              >
                Deep Clean My Home
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-cyan mt-1" />
                <span className="text-white/60">(765) 542-9725</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-cyan mt-1" />
                <span className="text-white/60">thebig3business3@gmail.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-cyan mt-1" />
                <span className="text-white/60">Greater Atlanta Area, GA</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h4 className="text-white font-bold text-lg mb-4">Start Your Clean</h4>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">
              Join 500+ happy homeowners in the Atlanta area.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3PbuuJFyw875ovx3RY7NB70oQdiIHOqTzNQbyKjq78nAbDg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-cyan text-navy font-bold rounded-xl text-sm transition-transform active:scale-95 text-center inline-block"
            >
              Refresh My Property
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs font-medium tracking-widest uppercase">
          <p>© 2026 THE BIG 3 PRESSURE WASHING. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
