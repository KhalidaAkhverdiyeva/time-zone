"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebaseConfig";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const auth = getAuth(app);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/timezone/home");
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="w-[600px] h-[550px] border bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded flex flex-col gap-[40px]">
          <h2 className="text-[32px] font-bold text-center">
            Create an Account
          </h2>
          <form onSubmit={handleRegister} className="flex flex-col gap-[30px]">
            <div className="border-b border-gray-300 pb-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="block w-full py-1 border-none focus:outline-none"
              />
            </div>
            <div className="border-b border-gray-300 pb-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="block w-full py-1 border-none focus:outline-none"
              />
            </div>
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
                className="block w-full py-1 border-none focus:outline-none"
              />
            </div>
            <div className="border-b border-gray-300 pb-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full py-1 border-none focus:outline-none"
              />
            </div>
            <div className="border-b border-gray-300 pb-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="block w-full py-1 border-none focus:outline-none"
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
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" w-[600px] h-[550px] border   flex flex-col items-center justify-center bg-[#7E5F7B]">
        <div className="max-w-md text-center p-8 flex flex-col gap-[50px]">
          <h2 className="text-[32px] font-bold text-white">Register</h2>
          <p className="text-[18px] text-white">
            Join us to explore the latest advancements in science and
            technology.
          </p>
          <a
            href="/login"
            className="py-[8px] px-[16px] text-lg w-full text-[18px] font-medium text-white border-solid border-white border-[1px] rounded-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
