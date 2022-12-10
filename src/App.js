import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {useEffect, useState} from "react";



function App() {
  const [ todos, setTodos ] = useState([]);
  const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then( response => response.json())
  //       .then(setTodos)
  // }, []);

  useEffect(() => {
      const uncompleted = todos.filter( todo => !todo.completed );
      setNoneCompletedItemsCount(uncompleted.length);
  }, [todos])

  const appTitle = 'TodosApp';


  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now(), title, completed: false }])
    setTodos(newTodos);
    // todos = [ ...todos, { id: Date.now(), title, completed: false } ]
  }

  const removeTodo = (todoToRemove) => {
    const newTodos1 = todos.filter( currentTodo => currentTodo.id !== todoToRemove.id );
    setTodos(newTodos1);
  }

  const markAsCompleted = () => {
    
  }

  const clearAllCompletedItems = () => {
    const newTodos2 = todos.filter( currentTodo => !currentTodo.completed );
    setTodos(newTodos2);
  }

  const toggleAllItems = (checkedValue) => {
    const newtodos3 = todos.map( todo => ({ ...todo, completed: checkedValue }));
    // todos = todos.map( todo => Object.assign({}, todo, {completed: checkedValue}));
    setTodos(newtodos3);
  }

  return (
      <section className="todoapp">
        <Header title={appTitle}
                onAddItem={addTodo}
                text="What needs to be done?"  />
        <Main items={todos}
              onToggleAll={toggleAllItems}
              destroy={removeTodo}
              markAsCompleted={markAsCompleted}
        />
        <Footer
            itemLeftCount={noneCompletedItemsCount}
            onClearCompleted={clearAllCompletedItems}/>
      </section>
  )
}

export default App;