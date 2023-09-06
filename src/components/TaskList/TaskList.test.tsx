import { fireEvent,render, screen } from '@testing-library/react';

import TaskList from './TaskList';
import { TaskListProps } from './TaskListProps';


const props: TaskListProps = {
    tasks: [
        { id: '1', text: 'Task 1', completed: false },
        { id: '2', text: 'Task 2', completed: true },
    ],
    delBtnTitle: 'Delete',
    onToggleTask: jest.fn(),
    onDeleteTask: jest.fn()
} 

describe('TaskList:', () => {
    beforeEach(() => {
        render(
            <TaskList {...props} /> 
        );
    });

    it('renders a list of tasks', () => {
        const taskElements = screen.getAllByRole('listitem');
        expect(taskElements).toHaveLength(props.tasks.length);
    });

    it('marks the task when the checkbox is clicked', () => {
        const checkbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(checkbox);
        expect(props.onToggleTask).toHaveBeenCalledWith(props.tasks[0].id);
    });

    it('calls onDeleteTask when the button is clicked', () => {
        const deleteButton = screen.getAllByRole('button')[1];
        fireEvent.click(deleteButton);
        expect(props.onDeleteTask).toHaveBeenCalledWith(props.tasks[1].id);
    });
}); 