import { tasks } from "../../utils/constants/tasks.js";

export const Query = {
  tasks: (parent, { input }, context) => {
    if (!input) return tasks;
    const { page, limit } = input;
    if (page <= 0 || limit <= 0)
      return new Error("page and limit must be greater than 0");
    const start = (page - 1) * limit;
    if (start >= tasks.length)
      return new Error("Page number is larger than the record count");
    const end = start + limit;
    if (end > tasks.length) return tasks.slice(start);
    return tasks.slice(start, end);
  },
  taskById: (parent, { id }, context) => tasks.find((t) => t.id === id),
};
