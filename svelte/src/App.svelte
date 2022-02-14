<script>
import { onMount } from "svelte";


	let todos = [];
	let todoText = '';

	onMount(() => {
		const existingTodos = localStorage.getItem('todos');
		todos = JSON.parse(existingTodos) || [];
	});

	function addTodo() {
		todos = [...todos, todoText];
		localStorage.setItem('todos', JSON.stringify(todos));
	}
</script>

<main>
	<ul>
		{#each todos as todo}
			<li>{todo}</li>
		{/each}
	</ul>

	<form on:submit|preventDefault={addTodo}>
		<input bind:value={todoText}>
		<input type="submit" value="add todo">
	</form>
</main>

<style>
	
</style>