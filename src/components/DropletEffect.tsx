import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface DropletEffectProps {
  isActive: boolean;
}

const DropletEffect: React.FC<DropletEffectProps> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      // Fade out after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } else {
      setIsVisible(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isActive]);

  useEffect(() => {
    if (!isVisible || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Particle classes
    class Droplet {
      x: number;
      y: number;
      speed: number;
      length: number;
      width: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.speed = 4 + Math.random() * 6; // Faster for big drops
        this.length = 20 + Math.random() * 30; // Longer drops
        this.width = 2 + Math.random() * 2; // Thicker lines
        this.opacity = 0.2 + Math.random() * 0.4;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -40;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Main droplet body
        ctx.beginPath();
        ctx.strokeStyle = `rgba(173, 226, 255, ${this.opacity})`;
        ctx.lineWidth = this.width;
        ctx.lineCap = "round";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();

        // Leading edge glow (the "bead" of the drop)
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity + 0.2})`;
        ctx.arc(this.x, this.y + this.length, this.width * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const droplets: Droplet[] = Array.from({ length: 30 }, () => new Droplet());

    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      droplets.forEach((d) => {
        d.update();
        d.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-1/3 pointer-events-none overflow-hidden z-20"
          style={{ 
            background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)"
          }}
        >
          {/* Steam/Mist Wisps */}
          <div className="absolute inset-0 opacity-20">
            <div className="steam-wisp w-48 h-48 bg-white/20 blur-3xl absolute -bottom-24 left-1/4 animate-pulse" />
            <div className="steam-wisp w-64 h-64 bg-white/10 blur-3xl absolute -bottom-32 left-2/3 animate-pulse delay-700" />
          </div>
          
          <canvas ref={canvasRef} className="w-full h-full block" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropletEffect;
