// Tarea.jsx
export const Tarea = ({ tarea, eliminarTarea }) => {
  const { proyecto, tipoTarea, personaAsignada, storyPoints, prioridad, fechaCreacion, resumen } = tarea;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Proyecto: {''}
        <span className="font-normal normal-case">{proyecto}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Tipo de tarea: {''}
        <span className="font-normal normal-case">{tipoTarea}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Persona Asignada: {''}
        <span className="font-normal normal-case">{personaAsignada}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
        <span className="font-normal normal-case">{storyPoints}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
        <span className="font-normal normal-case">{prioridad}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Creación: {''}
        <span className="font-normal normal-case">{fechaCreacion}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
        <span className="font-normal normal-case">{resumen}</span>
      </p>

      <button
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => eliminarTarea(tarea.id)} // Asegúrate de llamar a eliminarTarea aquí
      >
        Eliminar
      </button>
    </div>
  );
};
