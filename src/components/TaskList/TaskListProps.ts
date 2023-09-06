import { ITask } from "../../types/ITask";

export type TaskListProps = {
    tasks: ITask[];
    delBtnTitle: string;
    onToggleTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
};