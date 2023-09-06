import { fireEvent,render, screen } from '@testing-library/react';

import { ITaskFilterProps } from './ITaskFilterProps';
import TaskFilter from './TaskFilter';

const props: ITaskFilterProps = {
    filterValue: 'all',
    titles: {
        all: 'All',
        completed: 'Completed',
        incomplete: 'Incomplete',
    },
    onChange: jest.fn(),
};

describe('TaskFilter:', () => {
    beforeEach(() => {
        render(
            <TaskFilter {...props} />
        );
    });

    it('renders buttons of filter', () => {
        const filterButtons = screen.getAllByRole('button');
        expect(filterButtons).toHaveLength(3);
    });

    it('calls the onChange function with the correct value when the filter is "incomplete"', () => {
        const incompleteButton = screen.getByText('Incomplete');
        fireEvent.click(incompleteButton);
        expect(props.onChange).toHaveBeenCalledWith('incomplete');
    });

    it('calls the onChange function with the correct value when the filter is "completed"', () => {
        const completedButton = screen.getByText('Completed');
        fireEvent.click(completedButton);
        expect(props.onChange).toHaveBeenCalledWith('completed');
    });
});
