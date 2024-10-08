"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();

  return pathname !== "/register" &&
    pathname !== "/login" &&
    pathname !== "/" ? (
    <Navbar />
  ) : null;
}
