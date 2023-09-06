import { useState } from 'react';
import uniqid from 'uniqid'

import {
    Box,
    Button,
    Card,
    CardContent,
} from '@mui/material';

import { ITask } from '../../types/ITask';
import { TFilterVallue } from '../../types/TFilterValue';
import { AddTask } from '../AddTask';
import { TaskFilter } from '../TaskFilter';
import { TaskList } from '../TaskList';



const TodoList = (): JSX.Element => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [filter, setFilter] = useState<TFilterVallue>('all');

    const handleClearCompleted = (): void => {
        setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
    };

    const handleAddTask = (text: string): void => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: uniqid(), text, completed: false },
        ])
    }

    const handleToggleTask = (id: string): void => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ))
    }

    const handleDeleteTask = (id: string): void => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }



    const filteredTasks =
        filter === 'all'
            ? tasks
            : filter === 'completed'
                ? tasks.filter((task) => task.completed)
                : tasks.filter((task) => !task.completed);


    return (
        <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>
            <Card sx={{ mx: 'auto', maxWidth: 800 }}>
                <CardContent>
                    <AddTask btnTitle='Add' inputPlaceholder='What needs to be done?' onAddTask={handleAddTask} />
                    <TaskList tasks={filteredTasks} delBtnTitle='Delete' onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
                    <Box display='flex' justifyContent='space-between'>
                        <TaskFilter filterValue={filter} titles={{ all: 'All', completed: 'Completed', incomplete: 'Active' }} onChange={setFilter} />
                        <Button onClick={handleClearCompleted} variant="outlined" sx={{ alignSelf: 'flex-end' }} >
                            Clear completed
                        </Button>
                    </Box>

                </CardContent>
            </Card>
        </Box>
    );
};

export default TodoList;