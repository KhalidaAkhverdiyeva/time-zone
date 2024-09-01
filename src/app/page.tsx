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
      setLoading(false);
      router.push("/timezone/home");
    }, 3000);

    return () => {
      console.log("Cleaning up");
      clearTimeout(timeout);
    };
  }, [router]);

  if (loading) {
    // return <Spinner />;
    return null;
  }

  return null;
}
