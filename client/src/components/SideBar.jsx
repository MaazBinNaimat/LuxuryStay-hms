import {
  LayoutDashboard,
  BedDouble,
  CalendarCheck,
  Users,
  Wrench,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="px-6 py-5">
          <span className="text-xl font-bold text-blue-600">LuxuryStay</span>
        </div>

        {/* Nav */}
        <nav className="px-4 mt-2 space-y-1">
          <SidebarItem to="/" icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarItem to="/rooms" icon={<BedDouble size={18} />} label="Rooms" />
          <SidebarItem to="/reservations" icon={<CalendarCheck size={18} />} label="Reservations" />
          <SidebarItem to="/staff" icon={<Users size={18} />} label="Staff" />
          <SidebarItem to="/housekeeping" icon={<Wrench size={18} />} label="Housekeeping" />
          <SidebarItem to="/reports" icon={<FileText size={18} />} label="Reports" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-1 border-t">
        <SidebarItem to="/settings" icon={<Settings size={18} />} label="Settings" />
        <SidebarItem to="/logout" icon={<LogOut size={18} />} label="Logout" />
      </div>
    </div>
  );
}

function SidebarItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
