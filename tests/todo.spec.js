import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import data from '../test-data/todos.json';

const todos = Object.values(data);

test.beforeEach(async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();
});

for (const todoText of todos) {
  test(`full todo scenario: ${todoText}`, async ({ page }) => {
    const todoPage = new TodoPage(page);

    // Add
    await todoPage.addTodo(todoText);
    await todoPage.expectTodoVisible(todoText);

    // Complete
    await todoPage.completeTodoByText(todoText);

    // Filter Completed
    await todoPage.filterCompleted();
    await todoPage.expectTodoVisible(todoText);

    // Delete
    await todoPage.deleteTodoByText(todoText);

    // Final assert
    await todoPage.expectTodoCount(0);
  });
}
