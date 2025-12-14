import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxBackgroundProps {
  children?: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  direction?: "up" | "down" | "left" | "right";
}

export const ParallaxElement = ({ 
  children, 
  className = "", 
  speed = 0.5,
  direction = "up"
}: ParallaxBackgroundProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      setOffset(distanceFromCenter * speed * 0.1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${-offset}px)`;
      case "down":
        return `translateY(${offset}px)`;
      case "left":
        return `translateX(${-offset}px)`;
      case "right":
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`will-change-transform ${className}`}
      style={{ transform: getTransform() }}
    >
      {children}
    </div>
  );
};

interface ParallaxLayerProps {
  children: ReactNode;
  depth?: number; // 0 = foreground, higher = further back
  className?: string;
}

export const ParallaxLayer = ({ 
  children, 
  depth = 1, 
  className = "" 
}: ParallaxLayerProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const offset = scrollY * (depth * 0.1);

  return (
    <div 
      className={`will-change-transform ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
