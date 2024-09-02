"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/loading";
import { useAuth } from "@/hooks/useAuth";

const Home: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push("/timezone/home");
      } else {
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
