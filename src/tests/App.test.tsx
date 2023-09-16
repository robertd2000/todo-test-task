import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import App from "../app/index";
import { localStorageController } from "../shared/lib/local-storage.controller";

describe("App", () => {
  beforeEach(() => {
    localStorageController.setItem("test_todos", []);
  });

  test("app initialization", () => {
    render(<App />);

    screen.debug();
  });

  describe("test local storage", () => {
    const todo = { id: "1", title: "TEST 1", done: false };
    localStorageController.setItem("test_todos", [todo]);

    const todos = localStorageController.getItem("test_todos") as [];

    test("has todo in localstorage", () => {
      expect(todos).toEqual(expect.arrayContaining([todo]));
    });
  });
});
