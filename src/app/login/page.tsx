"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebaseConfig";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const auth = getAuth(app);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();
      console.log("Token:", token);
      document.cookie = `authToken=${token}; path=/; max-age=3600; Secure; SameSite=Lax`;

      router.push("/timezone/home");
    } catch (error: any) {
      let errorMessage = "An error occurred. Please try again.";
      if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "User not found.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className=" w-[500px] h-[500px] border   flex flex-col items-center justify-center bg-[#7E5F7B]">
        <div className="max-w-md text-center p-8 flex flex-col gap-[50px]">
          <h2 className="text-[32px] font-bold text-white">New to our Shop?</h2>
          <p className="text-[18px] text-white">
            There are advances being made in science and technology every day,
            and a good example this is it.
          </p>
          <a
            href="/register"
            className="py-[8px] px-[16px] text-lg w-full text-[18px] font-medium text-white border-solid border-white border-[1px] rounded-md transition-colors duration-300 ease-in-out "
          >
            Create an account
          </a>
        </div>
      </div>
      <div className=" w-[500px] h-[500px] border bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded flex flex-col gap-[40px] ">
          <h2 className="text-[32px] font-bold text-center ">Welcome Back!</h2>
          <form onSubmit={handleLogin} className=" flex flex-col gap-[30px]">
            <div className="border-b border-gray-300 pb-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="block w-full  py-1 border-none focus:outline-none "
              />
            </div>
            <div className="border-b border-gray-300 pb-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full  py-1 border-none focus:outline-none"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div>
              <button
                type="submit"
                className={`w-full px-4 py-2 text-[18px] font-medium text-blue-700 border-blue-700 border-solid border-[1px] rounded-md transition-colors duration-300 ease-in-out ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                } hover:bg-blue-700 hover:text-white`}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
