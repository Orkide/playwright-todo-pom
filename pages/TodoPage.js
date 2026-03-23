import { expect } from '@playwright/test';


export class TodoPage {
    constructor(page) {
        this.page = page;

        this.todoInput = page.locator('.new-todo');
        this.todoItems = page.locator('.todo-list li');
    }

    async goto(){
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async addTodo(text){
        await this.todoInput.fill(text);
        await this.todoInput.press('Enter');
    }

    async completeTodoByText(text) {
        const todo = this.todoItems.filter({ hasText: text });
        await todo.locator('.toggle').click();
    }

    async filterCompleted(){

        const link = this.page.locator('.footer li a').filter({ hasText: 'Completed' });
        await link.click();
    }

    async expectTodoVisible(text){

        const todo = this.todoItems.filter( {hasText: text})
        await expect(todo).toBeVisible();
    }

    async deleteTodoByText(text){
         const todo = this.todoItems.filter({ hasText: text });
         await todo.hover();
         await todo.locator('.destroy').click();
        
    }

    async expectTodoCount(count){
         await expect(this.todoItems).toHaveCount(count);
    }
}