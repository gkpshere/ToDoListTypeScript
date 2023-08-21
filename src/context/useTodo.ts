import { useContext } from 'react'
import { TodoContext } from './TodoContext'

export const useTodo = () => {
  const context= useContext(TodoContext)

  if(!context){
    throw new Error('Not sure when this error will be thrown')
  }
  return context;
}
