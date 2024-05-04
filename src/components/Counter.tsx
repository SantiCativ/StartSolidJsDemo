// createSignaldesde solid-js se importa para crear una señal reactiva para el conteo.
import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  // createSignal(0)crea una señal reactiva nombrada count con un valor inicial de 0.
  //count es una función de acceso que devuelve el valor actual de la señal.
  const [count, setCount] = createSignal(0);
  //Esta función está destinada a incrementar el countvalor.
  const incrementCount = () => {
    setCount(currentCount => currentCount + 1); // Use the callback argument
  };
  
  return (
    <button class="increment" onClick={incrementCount}>
      Clicks: {count()}
    </button>
  );
}
