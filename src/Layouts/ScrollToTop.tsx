// src/hooks/useScrollToTop.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ✅ Hook function
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
}
