import { PayloadAction , createSlice, } from "@reduxjs/toolkit";
import { Todo } from './types';

const initialState : Todo[] = [];
const toDoSlice = createSlice({
    name : 'toDos',
    initialState,
    reducers : {
        addTodo (state,action:PayloadAction<string>){
      state.push({
        id : Date.now(),
        text : action.payload,
        completed : false

      })
      };
    
       toggleComplete = (state,action)  {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    
       deleteTodo = (state,action)  {
        setTodos(todos.filter((todo) => todo.id !== id));
      };
    }
 })

