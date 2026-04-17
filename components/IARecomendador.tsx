"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function IARecomendador() {
  const [texto, setTexto] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const recomendar = () => {
    const t = texto.toLowerCase();

    if (t.includes("chocolate")) {
      setRespuesta("🍫 Nutella con plátano");
    } 
    else if (t.includes("fruta")) {
      setRespuesta("🍓 Fresa con crema");
    } 
    else if (t.includes("salado")) {
      setRespuesta("🧀 Jamón y queso");
    } 
    else {
      setRespuesta("🥞 Crepa clásica a tu gusto");
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center space-y-6">

      {/* Icono bonito */}
      <div className="text-5xl">
        🤖💗
      </div>

      {/* Título */}
      <h2 className="text-3xl font-bold text-pink-600">
        Tu recomendador de crepas
      </h2>

      <p className="text-gray-500">
        Dime qué se te antoja y te doy una idea deliciosa 💕
      </p>

      {/* Input */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          className="w-full sm:w-96 border border-pink-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          type="text"
          placeholder="Ej: chocolate, fruta, algo dulce..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <Button 
          onClick={recomendar}
          className="bg-pink-500 hover:bg-pink-600 text-white"
        >
          Recomendar
        </Button>
      </div>

      {/* Respuesta */}
      {respuesta && (
        <div className="bg-pink-100 text-pink-700 font-semibold py-4 px-6 rounded-lg inline-block">
          {respuesta}
        </div>
      )}

    </div>
  );
}