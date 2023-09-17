import {
  fireEvent,
  queryByAttribute,
  render,
  screen,
  within,
} from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import App from "../app/index";
import { localStorageController } from "../shared/lib/local-storage.controller";
import { TodoItemType } from "../shared/types";

describe("App", () => {
  test("app initialization", () => {
    render(<App />);

    screen.debug();
  });

  test("clear local storage", () => {
    localStorageController.setItem("todos", []);
  });
  const setup = () => {
    const utils = render(<App />);
    const getById = queryByAttribute.bind(null, "id");

    const input = getById(utils.container, "input") as HTMLInputElement;
    const submit = getById(utils.container, "submit") as HTMLButtonElement;
    const getTodolist = () =>
      screen
        .getAllByTestId("todo_list")
        .map((item) => within(item).getByTestId("todo_content").textContent);

    return {
      input,
      getTodolist,
      getById,
      submit,
      ...utils,
    };
  };

  describe("test local storage", () => {
    const todo = { id: "1", title: "TEST 1", done: false };
    localStorageController.setItem("todos", [todo]);

    const todos = localStorageController.getItem("todos") as [];

    test("has todo in localstorage", () => {
      expect(todos).toEqual(expect.arrayContaining([todo]));
    });
  });

  test("test input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    expect(input?.value).toBe("23");
  });

  describe("Add Todo item to the list", () => {
    let input, submit, container: unknown;

    beforeEach(() => {
      ({ input, submit, container } = setup());

      fireEvent.change(input, { target: { value: "First" } });
      fireEvent.click(submit);
    });

    test("new todo is appear", () => {
      expect(container as unknown as unknown).toHaveTextContent("First");
    });

    test("new todo in localstorage", () => {
      const todos = localStorageController.getItem("todos") as TodoItemType[];

      expect(todos.at(-1)?.title).toEqual("First");
    });
  });

  describe("Complete task", () => {
    let getById, todos: TodoItemType[], todo: TodoItemType, container: unknown;

    beforeEach(() => {
      ({ container, getById } = setup());

      todos = localStorageController.getItem("todos") as TodoItemType[];

      todo = todos.at(-1) as TodoItemType;

      const todoItem = getById(
        container as HTMLElement,
        todo.id
      ) as HTMLButtonElement;

      const completeTask = getById(todoItem, "complete") as HTMLButtonElement;
      fireEvent.click(completeTask);
    });

    test("task is completed", () => {
      const currentTodo = (
        localStorageController.getItem("todos") as TodoItemType[]
      ).find((i) => i.id === todo.id);
      expect(currentTodo?.done).toEqual(true);
    });
  });

  describe("Delete task", () => {
    let getById, todos: TodoItemType[], todo: TodoItemType, container: unknown;

    beforeEach(() => {
      ({ container, getById } = setup());

      todos = localStorageController.getItem("todos") as TodoItemType[];

      todo = todos.at(0) as TodoItemType;

      const todoItem = getById(
        container as HTMLElement,
        todo.id
      ) as HTMLButtonElement;

      const deleteTask = getById(todoItem, "delete") as HTMLButtonElement;
      fireEvent.click(deleteTask);
    });

    test("task is not in todos", () => {
      expect(todos).not.toEqual(expect.arrayContaining([todo.id]));
    });

    test("todo is not appear", () => {
      expect(container as unknown as unknown).not.toHaveTextContent(todo.title);
    });
  });
});
