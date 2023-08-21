import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

interface TodoContextProps{
  todos: Todo[],
  addTodoGayathri: (text:string)=> void
}

export interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}

export const TodoContext = createContext<TodoContextProps|undefined>(undefined)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const[todos,setTodos]= useState<Todo[]>([])

  const addTodoGayathri=(text:string)=>{
    const newTodo:Todo={
      id:nanoid(),
      text,
      status:'undone'
    }
  setTodos([...todos,newTodo])
  }

  const value:TodoContextProps={
todos,
addTodoGayathri
  }

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  )
}
