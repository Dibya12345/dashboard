import React from "react";
import { Plus } from "lucide-react";
import { useTaskStore } from "../../../../store/useTaskStore";
import { task_stats } from "../../../../utils";

export default function TaskFilters() {
  const { filters, setFilter, resetFilters, getCurrentData } = useTaskStore();

  const currentData = getCurrentData();

  const uniqueCustomers = [
    "Customer Name",
    ...new Set(currentData.map((task) => task.customer)),
  ];

  const uniquePriorities = [
    "Priority",
    ...new Set(currentData.map((task) => task.priority)),
  ];

  const uniqueStatuses = [
    "Status",
    ...new Set(currentData.map((task) => task.status)),
  ];

  const uniqueTypes = [
    "Type",
    ...new Set(currentData.map((task) => task.type)),
  ];

  return (
    <div className="control-filters">
      <select
        className="filter-select"
        value={filters.owner}
        onChange={(e) =>
          setFilter(
            "owner",
            e.target.value === "Task Owner" ? "" : e.target.value
          )
        }
      >
        <option>Task Owner</option>
      </select>
      <select
        className="filter-select"
        value={filters.customer}
        onChange={(e) =>
          setFilter("customer", e.target.value === "Customer Name" ? "" : e.target.value)
        }
      >
        {/* If there are no customers, show a default option */}
        {uniqueCustomers.length === 0 ? (
          <option>No Customers</option>
        ) : (
          uniqueCustomers.map((customer) => (
            <option key={customer} value={customer}>
              {customer}
            </option>
          ))
        )}
      </select>
      <select
        className="filter-select"
        value={filters.status}
        onChange={(e) =>
          setFilter("status", e.target.value === "Status" ? "" : e.target.value)
        }
      >
        {uniqueStatuses.length === 0 ? (
          <option>No Statuses</option>
        ) : (
          uniqueStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))
        )}
      </select>
      <select
        className="filter-select"
        value={filters.priority}
        onChange={(e) =>
          setFilter("priority", e.target.value === "Priority" ? "" : e.target.value)
        }
      >
        {uniquePriorities.length === 0 ? (
          <option>No Priorities</option>
        ) : (
          uniquePriorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))
        )}
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
