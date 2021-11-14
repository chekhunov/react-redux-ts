import axios from "axios"
import { type } from "os"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                //ксли успешно то передаем данные которые получили в теле
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)
        } catch (error) {
            //если ввозникнет ошибка передаем еррор
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'})
        }
    }
}