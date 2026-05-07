import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { FAQS } from "../constants";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl mb-6">Frequently Asked</h2>
          <p className="text-charcoal/60 text-lg">Clear answers to common questions about our washing process.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-3xl border transition-all duration-300 ${
                activeIndex === index ? "border-cyan bg-offwhite/50" : "border-navy/10 hover:border-navy/20"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-8 flex justify-between items-center text-left"
              >
                <span className="text-xl font-bold text-navy">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-6 h-6 text-cyan" />
                ) : (
                  <Plus className="w-6 h-6 text-navy/20" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-charcoal/60 leading-relaxed text-lg pt-2 border-t border-navy/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
