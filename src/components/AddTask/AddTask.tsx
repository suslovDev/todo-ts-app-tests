import { useState } from 'react';

import {
    Box,
    Button,
    Input,
} from '@mui/material';

import { AddTaskProps } from "./AddTaskProps";


const AddTask = ({ btnTitle, inputPlaceholder, onAddTask }: AddTaskProps): JSX.Element => {
    const [newTaskText, setNewTaskText] = useState('');

    const handleAddTask = (): void => {
        onAddTask(newTaskText);
        setNewTaskText(''); 
    };

    const handleEnterDown = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter') {
            handleAddTask();
        } 
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Input
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyDown={handleEnterDown}
                placeholder={inputPlaceholder}
                sx={{ mr: 1 }}
                fullWidth
            />
            <Button onClick={handleAddTask} variant="contained">
                {btnTitle}
            </Button>
        </Box>
    );
};

export default AddTask;