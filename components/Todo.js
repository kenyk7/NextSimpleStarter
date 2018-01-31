import React from 'react';
import { connect } from 'react-redux';

import { addTodo, removeTodo } from '../actions/todo';
import TodoItem from './TodoItem';

class Todo extends React.Component {
  state = {
    text: ''
  };

  addTodos = e => {
    e.preventDefault();

    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  };

  removeTodo = todo => {
    this.props.removeTodo(todo);
  };

  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp">
        <form onSubmit={this.addTodos}>
          <div className="input-group mb-3">
            <input type="text"
            value={this.state.text}
            onInput={e => this.setState({ text: e.target.value })}
            className="form-control"
            placeholder="What must be done?"/>
          </div>
        </form>
        <ul className="list-group">
          {this.props.todos.map((todo, i) => (
            <TodoItem key={i} todo={todo} remove={this.removeTodo} />
          ))}
        </ul>
        <br/>
      </div>
    );
  }
}

export default connect(({ todos }) => ({ todos }), { addTodo, removeTodo })(
  Todo
);
