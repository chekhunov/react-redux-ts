import React from 'react'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';


const UserList:  React.FC = () => {
    //достаем данные из состояния
    const {users, error, loading} = useTypedSelector(state => state.user)
    
    return (
        <div>
            
        </div>
    )
}

export default UserList