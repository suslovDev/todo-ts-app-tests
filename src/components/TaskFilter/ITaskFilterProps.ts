import { TFilterVallue } from "../../types/TFilterValue";

export interface ITaskFilterProps {
    filterValue: TFilterVallue;
    titles: Record<TFilterVallue, string>
    onChange: (value: TFilterVallue) => void;
}