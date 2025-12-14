import { useEffect, useRef, useState, ReactNode } from "react";

interface StickySectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
  index?: number;
}

const StickySection = ({ 
  children, 
  className = "", 
  bgColor = "bg-background",
  index = 0 
}: StickySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through this section
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      setScrollProgress(progress);
      
      // Determine if section is in sticky state
      setIsSticky(rect.top <= 0 && rect.bottom > windowHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`sticky-section ${bgColor} ${className}`}
      style={{
        "--scroll-progress": scrollProgress,
        "--section-index": index,
        zIndex: 10 + index,
      } as React.CSSProperties}
      data-sticky={isSticky}
    >
      <div 
        className="sticky-content"
        style={{
          opacity: scrollProgress > 0.1 ? 1 : 0.3 + (scrollProgress * 7),
          transform: `scale(${0.95 + (scrollProgress * 0.05)})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default StickySection;
