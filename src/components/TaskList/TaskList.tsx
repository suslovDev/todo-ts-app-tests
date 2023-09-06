import {
    Button,
    Checkbox,
    FormControlLabel,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from '@mui/material';

import { TaskListProps } from "./TaskListProps";

const TaskList = ({ tasks, delBtnTitle, onToggleTask, onDeleteTask }: TaskListProps): JSX.Element => (
    <List>
        {tasks.map((task) => (
            <ListItem key={task.id}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={task.completed} 
                            onChange={() => onToggleTask(task.id)} 
                        />
                    }
                    label={
                        <ListItemText
                            primary={task.text}
                            sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        />
                    }
                />
                <ListItemSecondaryAction>
                    <Button data-testid={`delBtn_${task.id}`} onClick={() => onDeleteTask(task.id)} >{delBtnTitle}</Button>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default TaskList;