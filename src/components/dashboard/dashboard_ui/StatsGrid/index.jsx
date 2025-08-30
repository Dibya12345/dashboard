import React from "react";

export default function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
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
  );
}
