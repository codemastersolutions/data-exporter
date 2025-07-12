# Project: File Exporter Library

## Overview:

This library is for exporting data in various file formats, such as excel, csv, json, word, pdf, txt, etc.

## General Instructions:

- Use TypeScript 5+ and Node.js LTS for all development.
- When generating new TypeScript code, please follow the existing coding style.
- Ensure all new functions and classes have JSDoc comments.
- All code should be compatible with TypeScript 5+
- Production build should be compatible with Node.js from 18+ and up.

## Folders structures

- `src` - Source code
- `docs` - Documentation
- `tests` - Tests
- `dist` - Distribution files

## Coding Style:

- Use 2 spaces for indentation.
- Use camelCase to variables and functions.
- Use PascalCase to class, interface, enum, type names.
- Use kebab-case to file an directory names.
- Prefer types over interfaces when possible.
- Always use strict equality (`===` and `!==`).
- Use TypeScript 5+ features when appropriate.
- Use async/await for asynchronous operations.
- Use composition over inheritance.
- Use inverse dependency injection when necessary.
- Use SOLID principles.
- Use ESLint and Prettier for code formatting.
- Use TypeDoc for documentation.
- Use JSDoc for comments.
- Allways generate JSDoc comments for methods and classes

## Regarding Dependencies:

- Avoid introducing new external dependencies unless absolutely necessary.
- If a new dependency is required, please state the reason and justify it.
- Make sure to update the `package.json` file and run `npm install` after adding any new dependencies.
- Make sure all dependencies are up-to-date and have the latest security patches.
- Make sure has 0 vulnerabilities.

## Testing:

- Write comprehensive tests for all new features and bug fixes.
- Test thoroughly and ensure that all tests pass before submitting a pull request.
- Use Vitest for testing.
- Write tests in `tests` folder, with `.test.ts` suffix.

## Code versioning:

- Use git for versioning.
- Create a new branch and commits every new feature or bug fix.
- Use `main` as default branch.

## Script commands

- Install dependecy - `npm install`
- Run tests - `npm test`
- Run lint - `npm run lint`
- Run lint fix - `npm run lint:fix`
- Run build - `npm run build`

# Features and Fixes

- All features are in `automation/features` folder and prefixed with feat-<number>.
- All fixes are in `automation/fix` folder and prefixed with fix-<number>.
- When complete a task in features and fixes, and tests were successful, create a commit and push to branch and mark it as done.
- Create a pull request to merge branch with `main` branch.
- When pull request is merged, delete branch.
- If a task is not completed, create a commit and push to branch and mark it as not done.
