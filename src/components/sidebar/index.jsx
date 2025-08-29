import React, { useState } from "react";
import { Eye, ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import "./sidebar.scss";
import { menu_items, view_items } from "../../utils";

const Sidebar = () => {
  const [isViewsExpanded, setIsViewsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("My Task");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setIsViewsExpanded(false);
    }
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Header */}
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            {!isCollapsed && (
              <img
                src="https://dexkor.com/wp-content/uploads/2025/07/Frame-3.png"
                alt="dexkor"
              />
            )}
          </div>
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menu_items.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.label;

            return (
              <li key={index} className="nav-item">
                <button
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={() => handleItemClick(item.label)}
                  title={isCollapsed ? item.label : ""}
                >
                  <IconComponent className="nav-icon" size={18} />
                  {!isCollapsed && (
                    <span className="nav-text">{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Views Section */}
        {!isCollapsed && (
          <div className="views-section">
            <button
              className="views-toggle"
              onClick={() => setIsViewsExpanded(!isViewsExpanded)}
            >
              <Eye className="nav-icon" size={18} />
              <span className="nav-text">Views</span>
              {isViewsExpanded ? (
                <ChevronDown className="chevron" size={14} />
              ) : (
                <ChevronRight className="chevron" size={14} />
              )}
            </button>

            {isViewsExpanded && (
              <ul className="views-list">
                {view_items.map((item, index) => (
                  <li key={index} className="view-item">
                    <button
                      className="view-link"
                      onClick={() => handleItemClick(item.label)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
