import { fireEvent,render, screen } from '@testing-library/react';

import AddTask from './AddTask';

describe('AddTask:', () => {
    it('adds a task when pressing Enter', () => {
        const onAddTaskMock = jest.fn();
        render(
            <AddTask
                btnTitle="Add"
                inputPlaceholder="Enter test task"
                onAddTask={onAddTaskMock}
            />
        ); 

        const input = screen.getByPlaceholderText(/enter test task/i);
        fireEvent.change(input, { target: { value: 'Very new task' } });
        fireEvent.keyDown(input, { key: 'Enter' });

        expect(onAddTaskMock).toHaveBeenCalledWith('Very new task');
    });
}); 