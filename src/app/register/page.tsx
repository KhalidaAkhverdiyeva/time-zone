"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebaseConfig"; // Import the initialized Firebase app

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const auth = getAuth(app);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to login page after successful registration
      router.push("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div>
            <button
              type="submit"
              className={`w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
