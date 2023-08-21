import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

interface TodoContextProps{
  todos: string[],
  addTodoGayathri: (text:string)=> void
}

export interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}

export const TodoContext = createContext<TodoContextProps|undefined>(undefined)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const[todos,setTodos]= useState<string[]>([])

  const addTodoGayathri=(text:string)=>{
  setTodos([...todos,text])
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
