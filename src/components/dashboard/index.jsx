import React, { useState } from "react";
import "./dashboard.scss";
import { tabs, task_stats, getPriorityColor } from "../../utils";
import StatsGrid from "./dashboard_ui/StatsGrid";
import TaskTabs from "./dashboard_ui/TaskTabs";
import TaskFilters from "./dashboard_ui/TaskFilters";
import TaskActions from "./dashboard_ui/TaskActions";
import TaskTable from "./dashboard_ui/TaskTable";
import { useTaskStore } from "../../store/useTaskStore";
import TaskNotFound from "../NotFound";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("All Tasks");
  const { getFilteredTasks } = useTaskStore();
  const filteredTasks = getFilteredTasks();

  return (
    <div className="main-content">
      <div className="dashboard-content">
        {/* Stats */}
        <StatsGrid stats={task_stats} />

        {/* Tasks Section */}
        <div className="task-section">
          {/* Tabs */}
          <TaskTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Controls */}
          <div className="task-controls">
            <TaskFilters />
            <TaskActions />
          </div>

          {/* Table */}
          {filteredTasks.length === 0 ? (
            <TaskNotFound
              searchTerm={"Hello"}
              isSearching={true}
            />
          ) : (
            <TaskTable
              tasks={filteredTasks}
              getPriorityColor={getPriorityColor}
            />
          )}
        </div>
      </div>
    </div>
  );
}
