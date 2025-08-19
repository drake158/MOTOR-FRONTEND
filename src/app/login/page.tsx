import React from "react";
import { Button } from "@/components/atoms/button";
import { SubmitButton } from "@/components/molecules/SubmitButton";
export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Panel Izquierdo */}
      <div className="hidden lg:flex flex-col items-center justify-center p-10 bg-custom-gradient text-white">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-gray-200">
            Access your account to continue exploring.
          </p>

          {/* Steps */}
          <div className="space-y-4 mt-10">
            {/* Paso 1 */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black font-bold">
                1
              </span>
              <span>Enter your credentials</span>
            </div>

            {/* Paso 2 */}
            <div className="flex items-center gap-3 opacity-50">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-gray-300 font-bold">
                2
              </span>
              <span>Start creating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Panel Derecho (Formulario) */}
      <div className="flex items-center justify-center bg-dark-bg p-8">
        <div className="w-full max-w-md bg-dark-card p-8 rounded-xl shadow-custom">
          <h2 className="text-2xl font-bold text-white mb-2">Log In</h2>
          <p className="text-sm text-dark-text-secondary mb-6">
            Enter your email and password to access your account.
          </p>

          {/* Botones Sociales */}
          <div className="flex gap-4 mb-6">
            <button className="w-1/2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition">
              <span>Google</span>
            </button>
            <button className="w-1/2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition">
              <span>Github</span>
            </button>
          </div>

          {/* Separador */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-400 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Formulario */}
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-dark-surface text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-dark-surface text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Botón principal */}
            <SubmitButton>
              Log In
            </SubmitButton>

            <p className="text-sm text-gray-400 text-center mt-4">
              Don’t have an account?{" "}
              <a href="/register" className="text-purple-400 hover:underline">
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
