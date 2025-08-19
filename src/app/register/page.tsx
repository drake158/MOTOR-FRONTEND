import {Button} from "@/components/atoms/button";
import { RegisterForm } from "@/components/organisms/RegisterForm";

export const metadata = {
  title: "Login / Register",
};

export default function AuthPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Panel Izquierdo */}
      <div className="hidden lg:flex flex-col items-center justify-center p-10 bg-custom-gradient text-white">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-3xl font-bold">Get Started with Us</h1>
          <p className="text-gray-200">
            Complete these easy steps to register your account.
          </p>

          {/* Steps */}
          <div className="space-y-4 mt-10">
            {/* Paso 1 */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black font-bold">
                1
              </span>
              <span>Sign up your account</span>
            </div>

            {/* Paso 2 */}
            <div className="flex items-center gap-3 opacity-50">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-gray-300 font-bold">
                2
              </span>
              <span>Get inspired</span>
            </div>
          </div>
        </div>
      </div>

      {/* Panel Derecho (Formulario) */}
      <div className="flex items-center justify-center bg-dark-bg p-8">
        <div className="w-full max-w-md bg-dark-card p-8 rounded-xl shadow-custom">
          <h2 className="text-2xl font-bold text-white mb-2">Sign Up Account</h2>
          <p className="text-sm text-dark-text-secondary mb-6">
            Enter your personal data to create your account.
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
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}