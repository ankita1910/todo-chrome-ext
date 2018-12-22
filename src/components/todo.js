import React, { Component, Fragment } from 'react'
import { Text } from './text'

class Todo extends Component {

  onChange = (e) => {
    let { onChange } = this.props
    onChange(e.target.value)
  }

  handleKey = (e) => {
    if (e.which === 13) {
      let { onChange } = this.props
      return onChange(null)
    }
  }

  render () {
    let { title, isEditing } = this.props
    return (
      <Fragment>
      {
        isEditing ?
          <Text
            value={title}
            onChange={this.onChange}
            onKeyPress={this.handleKey}
          /> :
          <div>{title}</div>
      }
      </Fragment>
    )
  }
}

export default Todo
