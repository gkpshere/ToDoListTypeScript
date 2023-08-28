import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
    <Toaster position="bottom-right" />
    <AddTodo />
    <TodoList />
  </div>
  )
}

export default App
