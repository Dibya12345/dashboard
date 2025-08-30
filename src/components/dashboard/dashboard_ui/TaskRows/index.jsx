import React from "react";
import { MoreHorizontal } from "lucide-react";

export default function TaskRow({ task, getPriorityColor }) {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{task.customer}</td>
      <td>{task.code}</td>
      <td className="task-id">{task.taskId}</td>
      <td>{task.title}</td>
      <td>
        <span
          className="status-badge"
          style={{ backgroundColor: task.statusColor }}
        >
          {task.status}
        </span>
      </td>
      <td>
        <span
          className="priority-badge"
          style={{ backgroundColor: getPriorityColor(task.priority) }}
        >
          {task.priority}
        </span>
      </td>
      <td>{task.type}</td>
      <td className="description">{task.description}</td>
      <td>
        <button className="action-menu">
          <MoreHorizontal size={16} />
        </button>
      </td>
    </tr>
  );
}
