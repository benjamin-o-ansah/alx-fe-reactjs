import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Functionality', () => {
  
  test('renders initial todos from static array', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('allows users to add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles todo completion status on click', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    // Check initial state (not completed)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    
    // Toggle
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item when the delete button is clicked', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);
    
    expect(todoItem).not.toBeInTheDocument();
  });
});