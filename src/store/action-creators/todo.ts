import axios from "axios"
import { type } from "os"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                //ксли успешно то передаем данные которые получили в теле
                dispatch({
                    type: TodoActionTypes.FETCH_TODOS_SUCCESS, 
                    payload: response.data
                })
            }, 500)
        } catch (error) {
            //если ввозникнет ошибка передаем еррор
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR, 
                payload: 'Произошла ошибка при загрузке cписка дел'
            })
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}