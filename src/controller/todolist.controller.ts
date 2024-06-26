import { Request, Response } from 'express';
import { Todo } from '../model/todo';
import { readTodoList, writeTodoList } from '../utils/jsonfile.util';

let todoList: Todo[] = readTodoList();
let id=  todoList.length>0? todoList[todoList.length-1].id :1;

export const getTodoList = (req: Request,res: Response) => {
    res.json(todoList);
};

export const getTodoListById = (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = todoList.find(t => t.id === parseInt(id));
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};

export const createTodoList = (req: Request, res: Response) => {
    const { title } = req.body;
    const newTodo: Todo = {
        id: id++,
        title,
        listStatus: false,
        createdAt: Date(),
        updatedAt: Date()
    };
    todoList.push(newTodo);
    writeTodoList(todoList);
    res.status(201).json(newTodo);
};

export const updateTodoList = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title,  listStatus } = req.body;

    const todo = todoList.find(t => t.id === parseInt(id));
    if (todo) {
        todo.title = title ?? todo.title;
        todo. listStatus =  listStatus ?? todo.listStatus;
        todo.updatedAt= Date();
        writeTodoList(todoList);
        res.json(todo);
    } else {
        res.status(404).json({ message: 'not found' });
    }
};

export const deleteTodoList = (req: Request, res: Response) => {
    const { id } = req.params;
    todoList = todoList.filter(t => t.id !== parseInt(id));
    writeTodoList(todoList);
    res.status(204).send();
};
