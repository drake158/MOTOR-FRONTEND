import React from "react";
import { Button } from "@/components/atoms/button";
import { SubmitButton } from "@/components/molecules/SubmitButton"; // Importamos el botón de envío
// Importamos el componente Button para reutilizar estilos y funcionalidad  

export const RegisterForm: React.FC = () => {
    return (
        <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 rounded-lg bg-dark-surface text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 rounded-lg bg-dark-surface text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

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
            <p className="text-xs text-gray-400">
              Must be at least 8 characters.
            </p>

            {/* Botón principal */}
            <SubmitButton>
              Register  
            </SubmitButton>
            
            <p className="text-sm text-gray-400 text-center mt-4">
              Already have an account?{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Log in
              </a>
            </p>
          </form>
    );
}