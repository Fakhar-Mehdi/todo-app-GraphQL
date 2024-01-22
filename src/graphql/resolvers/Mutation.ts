import { v4 as uuid } from "uuid";
import { tasks } from "../../utils/constants/tasks.js";

export const Mutation = {
  addTask: (parent, { input }, context) => {
    const task = {
      id: uuid(),
      title: input.title,
      date: Date.now(),
      isCompleted: input.isCompleted,
    };
    tasks.push(task);
    return task;
  },
  deleteTask: (parent, { id }, context) => {
    const index = tasks.findIndex((t) => t.id === id);
    return tasks.splice(index, 1)[0];
  },
};
