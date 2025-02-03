"use client";

import { useState } from "react";
import {
  Home,
  User,
  Settings,
  FileText,
  File,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Dashboard", icon: <Home />, href: "/" },
    { name: "Invoices", icon: <FileText />, href: "/invoices" },
    { name: "Documents", icon: <File />, href: "/documents" },
    { name: "Customers", icon: <User />, href: "/customers" },
    { name: "Settings", icon: <Settings />, href: "/settings" },
  ];

  return (
    <div
      className={`fixed md:relative flex flex-col text-black h-full bg-white shadow-md border-r border-gray-300 transition-all duration-300
        ${isCollapsed ? "w-16" : "w-64"} md:w-64 `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <MessageSquare className="h-6 w-6 text-gray-600" />
        {!isCollapsed && <div className="text-xl font-bold">Task</div>}
        <Badge className="text-white bg-blue-700">2</Badge>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Navigation Menu */}
      <div className="flex-grow mt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg transition-all duration-200"
              >
                <span className="mr-4">{item.icon}</span>
                {!isCollapsed && <span>{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-all md:hidden"
      >
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </button>
    </div>
  );
};

export default Sidebar;
