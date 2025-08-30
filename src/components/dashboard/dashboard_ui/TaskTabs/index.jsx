import React from "react";

export default function TaskTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="task-tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-btn ${activeTab === tab.name ? "active" : ""}`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name}
          {tab.count && <span className="tab-count">{tab.count}</span>}
        </button>
      ))}
    </div>
  );
}
