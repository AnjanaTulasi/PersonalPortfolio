import { useEffect, useState } from "react";

const greetings = ["Hello", "Namaste", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "Hi"];

export default function GreetingSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1500); // 1.5 seconds per greeting
    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      key={index} 
      className="text-blue-600 font-bold transition-all duration-500 ease-in-out animate-pulse"
    >
      {greetings[index]}
    </span>
  );
}