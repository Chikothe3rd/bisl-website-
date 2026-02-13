/**
 * useScroll hook
 * Manages scroll state and listeners
 */

import { useState, useEffect, useCallback } from "react";
import { addScrollListener, isScrolled as checkIsScrolled } from "@/services/scroll";

interface UseScrollOptions {
  threshold?: number;
}

export const useScroll = ({ threshold = 10 }: UseScrollOptions = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set initial state
    setIsScrolled(checkIsScrolled(threshold));

    // Add scroll listener
    const unsubscribe = addScrollListener((scrolled, y) => {
      setIsScrolled(scrolled);
      setScrollY(y);
    }, threshold);

    return unsubscribe;
  }, [threshold]);

  return { isScrolled, scrollY };
};
