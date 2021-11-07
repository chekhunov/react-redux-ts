export interface UserState {
    //опреедляем типы переменных
    users: any[];
    loading: boolean;
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction  {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

// interface UserAction {
//     //опреедляем типы переменных
//     type: string;
//     //может быть любого типа
//     payload?: any;
// }

//обьединяем три разрозненых action которые он может принимать
export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction 
