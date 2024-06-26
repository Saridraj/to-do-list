import { Router } from 'express';
import { getTodoList,getTodoListById, createTodoList, updateTodoList, deleteTodoList } from '../controller/todolist.controller';

const router = Router();

router.get('/to-do-list', getTodoList);
router.get('/to-do-list/:id', getTodoListById);
router.post('/to-do-list', createTodoList);
router.put('/to-do-list/:id', updateTodoList);
router.delete('/to-do-list/:id', deleteTodoList);

export default router;
