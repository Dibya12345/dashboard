import "./header.scss";
import { useState } from "react";
import {
  Search,
  Grid3X3,
  Mail,
  Bell,
  HelpCircle,
  Phone,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="page-title">AccountCare</span>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search .." />
        </div>
      </div>

      <div
        className={`header-right ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <button className="header-btn">
          <Grid3X3 size={18} />
          <span className="btn-label">Grid</span>
        </button>
        <button className="header-btn">
          <Mail size={18} />
          <span className="btn-label">Mail</span>
        </button>
        <button className="header-btn">
          <Bell size={18} />
          <span className="btn-label">Notifications</span>
        </button>
        <button className="header-btn">
          <HelpCircle size={18} />
          <span className="btn-label">Help</span>
        </button>
        <button className="header-btn">
          <Phone size={18} />
          <span className="btn-label">Phone</span>
        </button>
        <button className="header-btn">
          <Settings size={18} />
          <span className="btn-label">Settings</span>
        </button>
        <div className="user-avatar">
          <span>S</span>
          <span className="username">Shubhank</span>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}
    </header>
  );
}
