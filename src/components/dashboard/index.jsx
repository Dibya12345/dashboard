import React, { useState } from "react";
import {
  CheckSquare,
  Inbox,
  Eye,
  BarChart3,
  CreditCard,
  FileText,
  Target,
  Settings,
  Heart,
  Info,
  Ticket,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Search,
  Grid3X3,
  Mail,
  Bell,
  HelpCircle,
  Phone,
  Plus,
  Filter,
  List,
  MoreHorizontal,
  Download,
  Calendar,
} from "lucide-react";
import "./dashboard.scss";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("All Tasks");

  const taskStats = [
    { title: "Pending Tasks", count: 60, color: "#2196F3", icon: "⏳" },
    { title: "Overdue Tasks", count: 56, color: "#F44336", icon: "⚠️" },
    { title: "Due For Today", count: 0, color: "#FF9800", icon: "📅" },
    {
      title: "Approaching Breach Tasks",
      count: 1,
      color: "#4CAF50",
      icon: "🔥",
    },
  ];

  const tabs = [
    { name: "All Tasks", count: 58 },
    { name: "Completed Tasks" },
    { name: "Pending Tasks", count: 50 },
    { name: "Overdue Tasks", count: 50 },
    { name: "SLA", count: "" },
  ];

  const taskData = [
    {
      customer: "AVF",
      code: "V3N-1264",
      taskId: "TS-3465",
      title: "test task",
      status: "Canceled",
      priority: "Medium",
      type: "",
      description: "This is a test task by fiza rashid",
      statusColor: "#f44336",
    },
    {
      customer: "AVF",
      code: "V3N-1264",
      taskId: "TS-3468",
      title: "test ticket for account care",
      status: "Completed",
      priority: "Low",
      type: "",
      description: "This is a test ticket",
      statusColor: "#4caf50",
    },
    {
      customer: "AVF",
      code: "V3N-1264",
      taskId: "TS-3479",
      title: "Hello",
      status: "Completed",
      priority: "Medium",
      type: "",
      description: "aassfasdf",
      statusColor: "#4caf50",
    },
    {
      customer: "AVF",
      code: "V3N-1264",
      taskId: "TS-3476",
      title: "StatusInterface",
      status: "Pending",
      priority: "Medium",
      type: "",
      description: "aasdfasf",
      statusColor: "#ff9800",
    },
    {
      customer: "AVF",
      code: "V3N-1264",
      taskId: "TS-3469",
      title: "as test",
      status: "Pending",
      priority: "Critical",
      type: "",
      description: "orld",
      statusColor: "#ff9800",
    },
    {
      customer: "testinvoice",
      code: "testinvoice",
      taskId: "TS-3505",
      title: "Office Maint-Ast : Immediate Action Required",
      status: "Pending",
      priority: "High",
      type: "Health Impact",
      description: "Customer representative has critical health",
      statusColor: "#ff9800",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#f44336";
      case "Critical":
        return "#9c27b0";
      case "Medium":
        return "#ff9800";
      case "Low":
        return "#4caf50";
      default:
        return "#757575";
    }
  };
  return (
    <>
      <div className="main-content">
        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            {taskStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-header">
                  <span className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </span>
                  <span className="stat-title">{stat.title}</span>
                </div>
                <div className="stat-count" style={{ color: stat.color }}>
                  {stat.count}
                </div>
              </div>
            ))}
          </div>

          {/* Task Management Section */}
          <div className="task-section">
            {/* Tabs */}
            <div className="task-tabs">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`tab-btn ${
                    activeTab === tab.name ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                  {tab.count && <span className="tab-count">{tab.count}</span>}
                </button>
              ))}
            </div>

            {/* Task Controls */}
            <div className="task-controls">
              <div className="control-filters">
                <select className="filter-select">
                  <option>Task Owner</option>
                </select>
                <select className="filter-select">
                  <option>Customer Name</option>
                </select>
                <select className="filter-select">
                  <option>Status</option>
                </select>
                <select className="filter-select">
                  <option>Priority</option>
                </select>
                <select className="filter-select">
                  <option>Subject</option>
                </select>
                <button className="add-filter-btn">
                  <Plus size={16} />
                </button>
                <button className="reset-btn">Reset</button>
              </div>

              <div className="control-actions">
                <button className="action-btn primary">
                  <Plus size={16} />
                </button>
                <button className="action-btn">
                  <Bell size={16} />
                </button>
                <button className="action-btn">
                  <List size={16} />
                </button>
                <button className="action-btn">
                  <Download size={16} />
                </button>
              </div>
            </div>

            {/* Task Table */}
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
                  {taskData.map((task, index) => (
                    <tr key={index}>
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
                          style={{
                            backgroundColor: getPriorityColor(task.priority),
                          }}
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
