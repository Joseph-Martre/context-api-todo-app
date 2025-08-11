import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";

describe("Todo App integration", () => {
  it("can add, edit, toggle, and delete a task", () => {
    render(<App />);

    // Add a task
    const input = screen.getByPlaceholderText(/add task/i);
    fireEvent.change(input, { target: { value: "My first task" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getByDisplayValue(/my first task/i)).toBeInTheDocument();

    // Edit the task
    const editButton = screen.getAllByText(/edit/i)[0];
    fireEvent.click(editButton);
    const editable = screen.getByDisplayValue(/my first task/i);
    fireEvent.change(editable, { target: { value: "Updated task" } });
    fireEvent.keyDown(editable, { key: "Enter" });

    expect(screen.getByDisplayValue(/updated task/i)).toBeInTheDocument();

    // Toggle complete
    const checkbox = screen.getAllByRole("checkbox")[0];
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // Delete
    const deleteButton = screen.getAllByText(/delete/i)[0];

    fireEvent.click(deleteButton);
    expect(screen.queryByDisplayValue(/updated task/i)).not.toBeInTheDocument();
  });
});
