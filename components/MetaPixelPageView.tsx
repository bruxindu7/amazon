"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export default function MetaPixelPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      console.log("🔵 PageView enviado:", pathname); // debug
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
