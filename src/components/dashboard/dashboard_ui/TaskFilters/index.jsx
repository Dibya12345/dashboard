import React from "react";
import { Plus } from "lucide-react";
import { useTaskStore } from "../../../../store/useTaskStore";

export default function TaskFilters() {
  const { filters, setFilter, resetFilters } = useTaskStore();

  return (
    <div className="control-filters">
      <select
        className="filter-select"
        value={filters.owner}
        onChange={(e) => setFilter("owner", e.target.value)}
      >
        <option>Task Owner</option>
      </select>
      <select
        className="filter-select"
        value={filters.customer}
        onChange={(e) => setFilter("customer", e.target.value)}
      >
        <option>Customer Name</option>
      </select>
      <select
        className="filter-select"
        value={filters.status}
        onChange={(e) => setFilter("status", e.target.value)}
      >
        <option>Status</option>
      </select>
      <select
        className="filter-select"
        value={filters.priority}
        onChange={(e) => setFilter("priority", e.target.value)}
      >
        <option>Priority</option>
      </select>
      <select
        className="filter-select"
        value={filters.subject}
        onChange={(e) => setFilter("subject", e.target.value)}
      >
        <option>Subject</option>
      </select>
      <button className="add-filter-btn">
        <Plus size={16} />
      </button>
      <button className="reset-btn" onClick={resetFilters}>
        Reset
      </button>
    </div>
  );
}
