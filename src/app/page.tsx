"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log("Effect running");
    const timeout = setTimeout(() => {
      console.log("Redirecting");
      setLoading(false); // Hide spinner
      router.push("/timezone/home"); // Perform the redirect
    }, 3000);

    return () => {
      console.log("Cleaning up");
      clearTimeout(timeout);
    };
  }, [router]);

  if (loading) {
    return <Spinner />; // Show spinner during the delay
  }

  // After redirect, this component should not render anything
  return null;
}
