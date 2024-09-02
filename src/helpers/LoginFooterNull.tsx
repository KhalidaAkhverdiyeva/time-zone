"use client";

import { usePathname } from "next/navigation";
import Footer from "../components/Footer";

export default function ClientFooter() {
  const pathname = usePathname();

  return pathname !== "/register" && pathname !== "/login" ? <Footer /> : null;
}
