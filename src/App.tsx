import React from 'react'
import PropTypes from 'prop-types'
import UserList from './components/UserList'
import TodoList from './components/TodoList'


const App = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  )
}

App.propTypes = {

}

export default App
