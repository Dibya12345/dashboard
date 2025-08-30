import React from "react";
import { Plus, Bell, List, Download } from "lucide-react";

export default function TaskActions() {
  return (
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
  );
}
