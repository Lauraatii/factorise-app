import React, { createContext, useContext, useReducer } from 'react';
import { Task } from '../types/task';

type TaskAction =
  | { type: 'ADD_TASK'; payload: Omit<Task, 'id' | 'createdAt'> }
  | { type: 'SORT_TASKS'; payload: 'newest' | 'oldest'  };

interface TaskContextValue {
  tasks: Task[]; 
  dispatch: React.Dispatch<TaskAction>; // Dispatch function for actions
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

/**
 * Reducer function for task state management
 * Handles adding new tasks and sorting tasks by date
 */
const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {
        ...action.payload,
        id: Date.now().toString(), // Generate unique ID for the new task
        createdAt: Date.now() // Add timestamp for sorting
      }];
      
    case 'SORT_TASKS':
      return [...state].sort((a, b) => {
        // Sort tasks based on the selected criteria
        return action.payload === 'newest' 
          ? b.createdAt - a.createdAt 
          : a.createdAt - b.createdAt;
      });
      
    default:
      return state; // Return current state if action type is not recognized
  }
};

/**
 * Task provider component for global state management
 * Wraps the application to provide task state and dispatch function
 */
export const TaskProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []); 
  
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children} 
    </TaskContext.Provider>
  );
};

/**
 * Custom hook for accessing task context
 * Throws error if used outside TaskProvider
 */
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider'); 
  }
  return context; 
};
