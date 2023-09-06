import { render, screen } from '@testing-library/react';

import App from './App';


beforeEach(() => {
  render(<App />);
})

describe("App:", () => {

  it('renders Input', () => {
    const input = screen.getByPlaceholderText(/what needs to be done?/i);
    expect(input).toBeInTheDocument();

  });

  it('renders AddBtn', () => {
    const addTaskButton = screen.getByText(/add/i);
    expect(addTaskButton).toBeInTheDocument();
  });
  
  it('renders Filter', () => {
    const filterElement = screen.getByTestId('filter');
    expect(filterElement ).toBeInTheDocument();
  });

  it('renders ClearBtn', () => {
    const clearTasksButton = screen.getByText(/clear/i);
    expect(clearTasksButton).toBeInTheDocument();
  });
})

