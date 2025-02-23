import "./App.css";
import { useState } from "react";
// import { useCadenas, useConjuntos } from "./hooks";

const App = () => {
  const [text, setText] = useState("");
  // useCadenas();
  // useConjuntos();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-300 to-red-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Escribe algo</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tu texto aquí..."
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <div className="flex justify-between gap-4">
          <button className="flex-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            Aceptar
          </button>
          <button className="flex-1 px-4 py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
