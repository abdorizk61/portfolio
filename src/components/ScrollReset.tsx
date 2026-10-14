"use client";

import { useEffect } from "react";

/**
 * ScrollReset
 * Ensures scroll position resets to the top on initial page load / navigation
 * and disables browser automatic scroll restoration if necessary.
 */
export function ScrollReset() {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => window.scrollTo(0, 0), 100);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}

