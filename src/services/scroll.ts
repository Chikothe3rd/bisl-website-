/**
 * Scroll utilities and handlers
 * Reusable scroll-related functionality
 */

export const getScrollThreshold = (threshold: number = 10): number => threshold;

export const isScrolled = (threshold: number = 10): boolean => {
  if (typeof window === "undefined") return false;
  return window.scrollY > threshold;
};

export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export const scrollToTop = (behavior: ScrollBehavior = "smooth"): void => {
  window.scrollTo({ top: 0, behavior });
};

export const addScrollListener = (
  callback: (scrolled: boolean, scrollY: number) => void,
  threshold: number = 10
): (() => void) => {
  const handleScroll = () => {
    const scrolled = isScrolled(threshold);
    callback(scrolled, window.scrollY);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
