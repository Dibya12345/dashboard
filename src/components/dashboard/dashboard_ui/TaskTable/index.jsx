import React from "react";
import TaskRow from "../TaskRows";

export default function TaskTable({ tasks, getPriorityColor }) {
  return (
    <div className="task-table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Customer Name</th>
            <th>Customer Code</th>
            <th>Task ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskRow
              key={index}
              task={task}
              getPriorityColor={getPriorityColor}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
