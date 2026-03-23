# Playwright TodoMVC POM Project

## Description
Playwright TodoMVC project with Page Object Model (POM) implementation.  
Includes full workflow tests: add, complete, filter, and delete todos.  
Demonstrates stable test automation with POM structure, assertions, and data-driven testing potential.

## Project Structure
playwright-todo-tests/
├─ pages/ # POM classes (TodoPage.js)
├─ tests/ # Test files
├─ test-data/ # JSON test data
├─ playwright.config.js
├─ package.json
├─ playwright-report/ # HTML reports
├─ test-results/ # Test artifacts (screenshots, videos, traces)

## Test Report
Below is an example of the Playwright HTML report generated after test execution:
![Playwright Report](screenshots/report.png)

## Prerequisites
- Node.js >= 18
- npm
- Playwright installed

```bash
npm install
npx playwright install

Run all tests:
npx playwright test

Run tests in headed mode (for debugging):
npx playwright test --headed

Open HTML report:
npx playwright show-report
