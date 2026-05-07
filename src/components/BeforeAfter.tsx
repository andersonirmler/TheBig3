import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { IMAGES } from "../constants";

type Category = "sidewalk" | "trashcan" | "window";

const categories = [
  { id: "sidewalk", name: "Sidewalks & Driveways", image: IMAGES.baSidewalk },
  { id: "trashcan", name: "Trash Cans", image: IMAGES.baTrashcan },
  { id: "window", name: "Windows", image: IMAGES.baWindow },
] as const;

export const BeforeAfter = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("sidewalk");

  const currentImage = categories.find(c => c.id === activeCategory)?.image || IMAGES.baSidewalk;

  return (
    <section id="results" className="py-32 bg-navy-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-4 mb-10">
                <div className="w-16 h-1.5 bg-cyan rounded-full" />
                <span className="text-cyan font-black tracking-[0.4em] uppercase text-xs">Transformations</span>
              </div>
              <h2 className="text-6xl mb-8 leading-tight font-display font-black">
                The <span className="text-cyan italic">Big 3</span> Magic
              </h2>

              {/* Category Selector */}
              <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`group relative flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 ${
                      activeCategory === cat.id 
                        ? "bg-white/10 border-cyan shadow-[0_0_30px_rgba(27,169,232,0.2)]" 
                        : "bg-navy border-white/5 hover:border-white/20"
                    }`}
                  >
                    <span className={`text-lg font-bold tracking-tight ${activeCategory === cat.id ? "text-cyan" : "text-white/40"}`}>
                      {cat.name}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      activeCategory === cat.id ? "bg-cyan" : "bg-white/5"
                    }`}>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeCategory === cat.id ? "text-navy rotate-90" : "text-white/20"}`} />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video rounded-[40px] overflow-hidden border-8 border-white shadow-[0_20px_100px_-20px_rgba(0,0,0,0.8)]"
              >
                <div className="absolute inset-0 bg-navy">
                  <img 
                    src={currentImage} 
                    alt="Before and After comparison" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Labels */}
                <div className="absolute inset-x-0 top-8 px-8 flex justify-between items-start pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-xl text-white/70 font-black px-6 py-2.5 rounded-2xl text-xs uppercase tracking-[0.2em] border border-white/10 shadow-2xl">
                    Before 🗑️
                  </div>
                  <div className="bg-cyan text-navy font-black px-6 py-2.5 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(27,169,232,0.4)]">
                    After ✨
                  </div>
                </div>

                {/* Divider Line Overlay (Visual guide) */}
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/20 backdrop-blur-sm z-10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
