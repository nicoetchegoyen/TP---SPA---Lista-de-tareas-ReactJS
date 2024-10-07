import { Tarea } from "./Tarea";

export const ListadoTareas = ({ tareas, setTareas }) => {

    const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevasTareas);
  };


  return (
    <div className="md:w-1/2 lg:w-3/5 mx-auto">
      <h2 className="font-semibold text-2xl text-center text-gray-700">
        Listado de Tareas
      </h2>
      <p className="text-gray-600 text-lg mt-2 mb-8 text-center">
        Administra tus {""}
        <span className="font-semibold text-indigo-600">tareas</span> aquí
      </p>

      {tareas.map(tarea => (
        <Tarea 
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={eliminarTarea} 
        />
      ))}
    </div>
  );
};
