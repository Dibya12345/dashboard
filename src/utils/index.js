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
} from "lucide-react";

export const menu_items = [
  { icon: CheckSquare, label: "My Task", isActive: true },
  { icon: Inbox, label: "My Inbox" },
  { icon: Eye, label: "Insight360" },
  { icon: BarChart3, label: "Dashboard" },
  { icon: CreditCard, label: "Payment" },
  { icon: FileText, label: "Contract" },
  { icon: Target, label: "Opportunity" },
  { icon: Settings, label: "Customize" },
  { icon: Heart, label: "Health" },
  { icon: Info, label: "NPS" },
  { icon: Ticket, label: "Tickets" },
];

export const view_items = [
  { label: "Next" },
  { label: "Today's Work" },
  { label: "Ctrl" },
  { label: "Help" },
  { label: "Desktop View" },
];

export const task_stats = [
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

export const tabs = [
  { name: "All Tasks", count: 58 },
  { name: "Completed Tasks" },
  { name: "Pending Tasks", count: 50 },
  { name: "Overdue Tasks", count: 50 },
  { name: "SLA", count: "" },
];

export const task_data = [
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

export const getPriorityColor = (priority) => {
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
