import "./header.scss";
import {
  Search,
  Grid3X3,
  Mail,
  Bell,
  HelpCircle,
  Phone,
  Settings,
} from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="page-title">AccountCare</span>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search .." />
        </div>
      </div>

      <div className="header-right">
        <button className="header-btn">
          <Grid3X3 size={18} />
        </button>
        <button className="header-btn">
          <Mail size={18} />
        </button>
        <button className="header-btn">
          <Bell size={18} />
        </button>
        <button className="header-btn">
          <HelpCircle size={18} />
        </button>
        <button className="header-btn">
          <Phone size={18} />
        </button>
        <button className="header-btn">
          <Settings size={18} />
        </button>
        <div className="user-avatar">
          <span>S</span>
          <span className="username">Shubhank</span>
        </div>
      </div>
    </header>
  );
}
