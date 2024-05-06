
// createSignaldesde solid-js se importa para crear una señal reactiva para el conteo.
import { createSignal } from "solid-js";
import "./Counter.css";

// createSignal(0)crea una señal reactiva nombrada count con un valor inicial de 0.
//El valor que contienen va cambiando. Y en cuanto se actualice el valor de esta signal, 
//todos los elementos que dependen de la misma se verán actualizados también.
//count es una función de acceso que devuelve el valor actual de la señal.
const [count,setCount]= createSignal(0);

const incrementCount = () => {
    setCount(currentCount => currentCount + 1); // Use the callback argument
  };

const decrementCount = () => {
    setCount(currentCount => currentCount - 1); // Use the callback argument
};

export default () => {
  return (
    <div>
      <h1>Contador</h1>
      <p>Valor actual: {count()}</p>
      <button class="increment" onClick={incrementCount}>Incrementar</button>
      <button class="increment" onClick={decrementCount}>Decrementar</button>
    </div>
  );
};

