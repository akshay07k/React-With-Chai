import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "ToDo msg",
            completed: false
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    removeToDo: (id) => {},
    toggleComplete: (id) => {}
})

export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDo.Provider;
