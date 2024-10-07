import { useState } from "react";

export const Formulario = ({ tareas, setTareas }) => {
  const [proyecto, setProyecto] = useState("");
  const [tipoTarea, setTipoTarea] = useState("");
  const [personaAsignada, setPersonaAsignada] = useState("");
  const [storyPoints, setStoryPoints] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [resumen, setResumen] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar que los campos estén llenos
    if (
      [
        proyecto,
        tipoTarea,
        personaAsignada,
        storyPoints,
        prioridad,
        fechaCreacion,
        resumen,
      ].includes("")
    ) {
      setError(true);
      return;
    }

    setError(false);

    // objeto con los datos de la tarea
    const objetoTarea = {
      id: Date.now(),
      proyecto,
      tipoTarea,
      personaAsignada,
      storyPoints,
      prioridad,
      fechaCreacion,
      resumen,
    };

    setTareas([...tareas, objetoTarea]);

    // reiniciar el formulario
    setProyecto("");
    setTipoTarea("");
    setPersonaAsignada("");
    setStoryPoints("");
    setPrioridad("");
    setFechaCreacion("");
    setResumen("");
  };

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
        Agregar Tarea
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-lg rounded-lg p-8 mb-8"
      >
        {error && (
          <p className="bg-red-200 text-red-800 p-3 rounded-lg mb-6 text-center">
            Todos los campos son obligatorios
          </p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="proyecto">
            Proyecto
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="proyecto"
            type="text"
            placeholder="Nombre del proyecto"
            value={proyecto}
            onChange={(e) => setProyecto(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="tipoTarea">
            Tipo de tarea
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="tipoTarea"
            type="text"
            placeholder="Tipo de tarea"
            value={tipoTarea}
            onChange={(e) => setTipoTarea(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="personaAsignada">
            Persona asignada
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="personaAsignada"
            type="text"
            placeholder="Nombre del desarrollador"
            value={personaAsignada}
            onChange={(e) => setPersonaAsignada(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="storyPoints">
            Story Points
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="storyPoints"
            type="number"
            placeholder="Story points"
            value={storyPoints}
            onChange={(e) => setStoryPoints(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="prioridad">
            Prioridad
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="prioridad"
            type="text"
            placeholder="Prioridad de la tarea"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="fechaCreacion">
            Fecha de creación
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="fechaCreacion"
            type="date"
            value={fechaCreacion}
            onChange={(e) => setFechaCreacion(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="resumen">
            Resumen
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            id="resumen"
            placeholder="Resumen de la tarea"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
          />
        </div>

        <button
          className="bg-indigo-600 text-white p-3 rounded-lg w-full hover:bg-indigo-600 transition-all"
          type="submit"
        >
          Agregar tarea
        </button>
      </form>
    </div>
  );
};
