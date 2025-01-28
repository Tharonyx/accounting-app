"use client";

import { useState } from "react";
import { Home, User, Settings, FileText, File, Box, ChevronLeft, ChevronRight } from "lucide-react"; // You can adjust the icons as per your needs
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"; // This is your utility function to handle conditional classnames, adjust if necessary
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Importing avatar component
import { MessageSquare } from "lucide-react";

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
    <div className={`flex flex-col  text-black ${isCollapsed ? "w-16" : "w-64"} h-screen transition-width duration-300 ml-0`}>
      <div className="flex justify-between items-center p-4">
        <div>
          <MessageSquare className="h-6 w-6 text-gray-600" />
        </div>
        <div className="text-xl font-bold">Task</div>
        <div><Badge className="text-white bg-blue-700">2</Badge></div>
      </div>

      {/* Horizontal Line under Task */}
      <div className="border-t border-gray-200 my-2" />

      <div className="flex-grow">
        <ul className="space-y-4 mt-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center p-4 hover:bg-gray-300 rounded-2xl"
              >
                <span className="mr-4">{item.icon}</span>
                {!isCollapsed && <span>{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {!isCollapsed && <span>Username</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
