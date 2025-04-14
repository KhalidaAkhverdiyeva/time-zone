"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ElementsPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">UI Elements</h1>

        {/* Buttons Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Buttons</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                Secondary Button
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                Outline Button
              </button>
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-bold">Heading 2</h2>
            <h3 className="text-2xl font-bold">Heading 3</h3>
            <p className="text-base">Regular paragraph text</p>
            <p className="text-sm text-gray-600">Small text</p>
          </div>
        </div>

        {/* Form Elements Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Form Elements</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Text Input"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Checkbox</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="radio" className="mr-2" />
              <label>Radio Button</label>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Basic Card</h3>
              <p className="text-gray-600">Card content goes here</p>
            </div>
            <div className="border rounded-lg p-4 shadow-md">
              <h3 className="font-semibold mb-2">Shadow Card</h3>
              <p className="text-gray-600">Card with shadow effect</p>
            </div>
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="font-semibold mb-2">Colored Card</h3>
              <p className="text-gray-600">Card with background color</p>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Alerts</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-100 text-green-700 rounded">
              Success Alert
            </div>
            <div className="p-4 bg-red-100 text-red-700 rounded">
              Error Alert
            </div>
            <div className="p-4 bg-yellow-100 text-yellow-700 rounded">
              Warning Alert
            </div>
            <div className="p-4 bg-blue-100 text-blue-700 rounded">
              Info Alert
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementsPage;
