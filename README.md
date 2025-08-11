# Context API Todo App

This is an example Todo app built with React to showcase the use of the **Context API** combined with the **useReducer** pattern for global state management.

---

## Live Demo

Check out the live version of the app deployed on Netlify:

[Context API Todo App](https://context-api-todo-app-jm.netlify.app/)

---

## Features

- **Context API + useReducer:**  
  Centralized task state management with a reducer, exposed via context providers.

- **Custom Hooks:**  
  Convenient custom hooks to consume task state and dispatch actions in components.

- **Global & Local State:**  
  Uses context for global task state, and local React state for UI interactions like editing and input fields.

- **Keyboard Functionality:**  
  - Press **Enter** to add or save tasks.  
  - Press **Escape** to cancel editing or clear inputs.

- **UX Enhancements:**  
  - No layout shifts when toggling edit mode.  
  - Modal feedback on add-task failures (e.g., empty input).  
  - Larger clickable areas and accessible labels.

- **Tests:**  
  Includes both unit tests for the reducer logic and integration tests for the full app using [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

---

## Running the App

\`\`\`
npm install
npm run dev
\`\`\`

Open your browser at \`http://localhost:5173\` .

---

## Running Tests

This project uses [Vitest](https://vitest.dev/) for testing.

Run the full test suite with:

\`\`\`
npx vitest
\`\`\`

---

## Project Inspiration

Modeled after the [React Docs example for updating data via context](https://react.dev/reference/react/useContext#updating-data-passed-via-context), this project demonstrates clean separation of concerns and practical usage of React's state management tools in a real-world style Todo app.

---

## Folder Structure

- \`src/contexts\` — Context providers and reducer logic  
- \`src/hooks\` — Custom hooks for consuming context  
- \`src/components\` — UI components
- \`src/\_\_tests\_\_\` — Unit and integration tests

---

## License

ISC © Joseph Martin
