import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ConfirmModal from "./components/ConfirmModal";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);


  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // --- CRUD Functions ---
  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // --- Clear All Tasks ----
  const clearAllTasks = () => {
    setTasks([]);
  };


  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-400 to-indigo-500 text-zinc-800">
      <Header />

      <section className="pt-24 max-w-xl mx-auto px-4 space-y-6">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />

        {/* Clear All Button */}
        {tasks.length > 0 && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
            >
              Clear All Tasks
            </button>
          </div>
        )}
      </section>

      {/* Confirmation Modal */}
      <ConfirmModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={clearAllTasks}
        message="Are you sure you want to delete all tasks?"
      />
    </main>
  );
};

export default App;
