// App.tsx
import React from "react";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">React + Tailwind Counter</h1>
      <Counter />
    </div>
  );
};

export default App;
