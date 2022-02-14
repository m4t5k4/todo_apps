import { State } from '@stencil/core';
import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() todoText = '';
  @State() todos = [];

  componentWillLoad() {
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];
  }

  private addTodo(event) {
    event.preventDefault();
    this.todos = [...this.todos, this.todoText];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  render() {
    return (
      <div>
        <ul>
          {this.todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>

        <form onSubmit={(e) => this.addTodo(e)}>
          <input value={this.todoText} onChange={(e:any) => this.todoText = e.target.value}/>
          <input type="submit" value="add todo"/>
        </form>
      </div>
    );
  }
}
