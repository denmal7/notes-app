import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
    const [filter, setFilter] = useState("all");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    });

  return (
    <section className="space-y-4">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3">
            {["all", "completed", "pending"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition
                    ${
                        filter === type
                          ? "bg-blue-600 text-white"
                          : "bg-zinc-200 text-zinc-700 hover:bg-blue-100"

                    }`}
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
            ))}
        </div>

        {/* Task List */}
        {filteredTasks.length === 0 ? (
            <p>
                {filter === "all" ? "No tasks yet." : `No ${filter} tasks.`}
            </p>
        ) : (
            <ul className="space-y-2">
                {filteredTasks.map((task) => (
                    <TaskItem 
                      key={task.id}
                      task={task}
                      toggleTask={toggleTask}
                      deleteTask={deleteTask}
                      editTask={editTask}
                    />
                ))}
            </ul>
        )}

    </section>
  )
}

export default TaskList