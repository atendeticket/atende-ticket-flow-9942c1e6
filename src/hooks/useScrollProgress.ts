import { useEffect, useState } from "react";

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollProgress, scrollY };
};

export const useElementScrollProgress = (elementRef: React.RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate how far the element has scrolled through the viewport
      const start = windowHeight;
      const end = -elementHeight;
      const current = rect.top;
      const range = start - end;
      const scrolled = start - current;
      
      const elementProgress = Math.max(0, Math.min(1, scrolled / range));
      setProgress(elementProgress);
      setIsInView(rect.top < windowHeight && rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementRef]);

  return { progress, isInView };
};
