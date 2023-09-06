import { Box } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { ITaskFilterProps } from "./ITaskFilterProps";


const TaskFilter = ({ filterValue, titles, onChange }: ITaskFilterProps): JSX.Element => {
    const { all, completed, incomplete } = titles;
    return (
        <Box sx={{ mb: 2 }} data-testid='filter'>
            <ToggleButtonGroup
                value={filterValue}
                exclusive
                onChange={(_, value) => onChange(value)}
            >
                <ToggleButton value="all">{all}</ToggleButton>
                <ToggleButton value="incomplete">{incomplete}</ToggleButton>
                <ToggleButton value="completed">{completed}</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
};

export default TaskFilter;