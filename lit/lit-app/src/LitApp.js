import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("my-element")
export class LitApp extends LitElement {

  @property() todos = [];
  @property() todoText = '';

  connectedCallback() {
    super.connectedCallback();
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos) || [];
  }

  addTodo(event) {
    event.preventDefault;
    this.todos = [...this.todos, this.todoText];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  render() {
    return html`
      <ul>
        ${this.todos.map(todo => html`<li>${todo}</li>`)}
      </ul>

      <form @submit="${this.addTodo}">
        <input type="text" value="${this.todoText}" @change=${(e) => this.todoText = e.target.value} />
        <input type="submit">
      </form>
    `;
  }
}
