

import { createSignal, onCleanup } from 'solid-js';

const Estudiantes = () => {
  const [data, setData] = createSignal<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://66369c56415f4e1a5e27d3c5.mockapi.io/api/estudiantes'); // Reemplaza la URL con tu API real
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  onCleanup(() => {
    // Realiza las tareas de limpieza necesarias, como cancelar peticiones o cerrar conexiones.
  });

  fetchData(); // Llama a la función fetchData al cargar el componente.

  return (
    <div>
      <h2>API Example</h2>
      <ul>
        {data().map((estudiante) => (
          <li>{estudiante.name} - {estudiante.apellido}</li>
        ))}
      </ul>
    </div>
  );
};

export default Estudiantes;


 
