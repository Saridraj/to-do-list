import fs from 'fs';
import path from 'path';
import { Todo } from '../model/todo';

const filePath = path.resolve('to-do-list.json');

export const readTodoList= (): Todo[] => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data) as Todo[];
    }
    return [];
};

export const writeTodoList = (todoList: Todo[]): void => {
    fs.writeFileSync(filePath, JSON.stringify(todoList, null, 2), 'utf8');
};
