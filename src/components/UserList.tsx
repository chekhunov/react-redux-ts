import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';
import { useActions } from '../hooks/useActions';


const UserList:  React.FC = () => {
    //достаем данные из состояния
    const {users, error, loading} = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div>
            {users.map(user => 
                <div key={user.id}>{user.name}</div>)}
        </div>
    )
}

export default UserList
