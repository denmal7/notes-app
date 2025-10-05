import { useState } from "react";
import { CheckCircle2, Circle, Trash2 } from "lucide-react";

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleDoubleClick = () => {
        setEditedText(task.text);
        setEditing(true);
    };

    const handleSave = () => {
        const trimmed = editedText.trim();
        if (trimmed && trimmed !== task.item) {
            editTask(task.id, trimmed);
        }
        setEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSave();
        if (e.key === "Escape") setEditing(false);
    }
  return (
    <li
       className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
       onDoubleClick={handleDoubleClick}
    >
        {/* Left side: Toogle Complete / Edit mode */}
        <div className="flex items-center gap-3 flex-1 text-left">
            <button
              onClick={() => toggleTask(task.id)}
              className="shrink-0"
              aria-label="Toggle complete"
            >
                {task.completed ? (
                    <CheckCircle2  className="w-5 h-5 text-green-500"/>
                ) : (
                    <Circle className="w-5 h-5 text-zinc-400"/>
                )}
            </button>

            {editing ? (
                <input 
                   type="text"
                   value={editedText}
                   onChange={(e) => setEditedText(e.target.value)}
                   onBlur={handleSave}
                   onKeyDown={handleKeyDown}
                   autoFocus
                   className="flex-1 bg-transparent border-b border-blue-500 focus:outline-none text-zinc-800"
                />
            ) : (
                <span
                   className={`text-base cursor-text ${
                    task.completed
                      ? "line-through text-zinc-400"
                      : "text-zinc-800"
                   }`}
                >
                    {task.text}
                </span>
            )}
        </div>
        
        {/* Right side: Delete */}
        <button
          onClick={() => deleteTask(task.id)}
          className="p-2 text-red-500 hover:text-red-700 transition-colors"
          aria-label="Delete Task"
        >
            <Trash2 className="w-5 h-5"/>
        </button>
    </li>
  )
}

export default TaskItem;