import { create } from "zustand";
import { task_data } from "../utils";

export const useTaskStore = create((set, get) => ({
  filters: {
    owner: "",
    customer: "",
    status: "",
    priority: "",
    subject: "",
  },

  getCurrentData: () => {
    return task_data;
  },

  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  resetFilters: () =>
    set({
      filters: {
        owner: "",
        customer: "",
        status: "",
        priority: "",
        subject: "",
      },
    }),

  getFilteredTasks: () => {
    const { filters } = get();
    return task_data.filter((task) => {
      return (
        (filters.owner ? task.owner === filters.owner : true) &&
        (filters.customer ? task.customer === filters.customer : true) &&
        (filters.status ? task.status === filters.status : true) &&
        (filters.priority ? task.priority === filters.priority : true) &&
        (filters.subject
          ? task.title.toLowerCase().includes(filters.subject.toLowerCase())
          : true)
      );
    });
  },
}));
