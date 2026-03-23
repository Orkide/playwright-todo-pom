import { expect, test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import data from '../test-data/todos.json';

test('full todo scenario: add → complete → filter → delete', async ({ page }) => {

  const todoPage = new TodoPage(page);

  // Add
  await todoPage.goto();
  await todoPage.addTodo(data.todo1);
  await todoPage.expectTodoVisible(data.todo1);
  // Complete
  await todoPage.completeTodoByText(data.todo1);
  // Filter Completed
  await todoPage.filterCompleted();
  await todoPage.expectTodoVisible(data.todo1);
  // Delete
  await todoPage.deleteTodoByText(data.todo1);
  // Final assert: there is no item in the list
  await todoPage.expectTodoCount(0);

});
