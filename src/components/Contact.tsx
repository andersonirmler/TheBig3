import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {

  return (
    <section id="contact" className="py-32 bg-offwhite">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cyan font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Contact Us</span>
              <h2 className="text-5xl text-navy mb-8 leading-tight">Ready to Restore Your Property?</h2>
              <p className="text-charcoal/60 text-lg mb-12">
                Questions? Need an estimate? Reach out and we'll get back to you within 24 hours. Serving the greater Atlanta area.
              </p>

              <div className="space-y-10">
                <a href="tel:7655429725" className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-cyan flex-shrink-0 group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-lg mb-1 group-hover:text-cyan transition-colors">Call or Text</h4>
                    <p className="text-charcoal/40 text-xl font-medium tracking-tight hover:text-cyan transition-colors">(765) 542-9725</p>
                  </div>
                </a>
                <a href="mailto:thebig3business3@gmail.com" className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-cyan flex-shrink-0 group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-lg mb-1 group-hover:text-cyan transition-colors">Email Us</h4>
                    <p className="text-charcoal/40 text-xl font-medium tracking-tight hover:text-cyan transition-colors">thebig3business3@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-cyan flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-lg mb-1">Service Area</h4>
                    <p className="text-charcoal/40 text-xl font-medium tracking-tight">Smyrna • Marietta • Roswell • Alpharetta</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center justify-center min-h-[500px]"
            >
              <div className="mb-10 w-24 h-24 bg-cyan/10 rounded-full flex items-center justify-center border-2 border-cyan/20">
                <Send className="text-cyan w-10 h-10" />
              </div>
              <h3 className="text-4xl text-navy font-display font-black mb-6">Let's Clean Your Home</h3>
              <p className="text-charcoal/60 text-lg mb-12 max-w-sm">
                Get an instant estimate. Our 2-minute cleaning request form gives us everything we need to revive your property.
              </p>
              
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd3PbuuJFyw875ovx3RY7NB70oQdiIHOqTzNQbyKjq78nAbDg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-8 bg-cyan text-navy-dark font-black rounded-3xl text-2xl shadow-[0_20px_50px_rgba(27,169,232,0.3)] transition-all flex items-center justify-center gap-4 group"
              >
                Submit Cleaning Request
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.a>
              
              <div className="mt-12 flex items-center gap-2 text-charcoal/30 text-sm font-bold uppercase tracking-widest">
                <div className="w-8 h-px bg-gray-200" />
                <span>Instant Estimates Available</span>
                <div className="w-8 h-px bg-gray-200" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
