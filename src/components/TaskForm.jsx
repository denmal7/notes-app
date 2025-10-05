import { useState } from "react";
import { Plus } from "lucide-react";

const TaskForm = ({ addTask }) => {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText("");
    }

    return (
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 p-4 bg-white shadow-md rounded-xl"
        >
            <input 
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                <Plus className="w-4 h-4"/>
                Add
            </button>
        </form>
    );
}

export default TaskForm;