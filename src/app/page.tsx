"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/loading";
import { useAuth } from "@/hooks/useAuth";

const Home: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("User:", user);

    if (!loading) {
      if (user) {
        console.log("Redirecting to /timezone/home");
        router.push("/timezone/home");
      } else {
        console.log("Redirecting to /login");
        router.push("/login");
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <Spinner />;
  }

  return null;
};

export default Home;
