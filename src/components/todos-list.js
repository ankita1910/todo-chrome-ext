import React, { Component } from 'react'
import Todo from './todo'

class TodosList extends Component {

  state={
    todosList: ['Eat Sandwiches'],
    isEditing: null
  }

  addTodo = () => {
    let { todosList } = this.state
    let newTodosList = [ ...todosList ]
    newTodosList.push('')
    this.setState({ todosList: newTodosList, isEditing: newTodosList.length - 1 })
  }

  onChange = (index, newTodo) => {
    let { isEditing, todosList } = this.state
    if (!newTodo) {
      this.setState({ isEditing: null })
      return
    }
    let newTodosList = [ ...todosList ]
    newTodosList[index] = newTodo
    this.setState({ todosList: newTodosList })
  }

  render () {
    let { todosList, isEditing } = this.state
    return (
      <div>
        <div className='add-todo' onClick={this.addTodo}>Add</div>
        <div className='todos'>
          {
            todosList.map ((todo, index) => {
              return (
                <Todo
                  key={index}
                  title={todo}
                  isEditing={isEditing === index}
                  onChange={(newTodo) => this.onChange(index, newTodo)}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default TodosList
