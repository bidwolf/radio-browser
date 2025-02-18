'use client';
import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
  showSidebar: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  showSidebar: false,
  toggleSidebar: () => { },
  closeSidebar: () => { }
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <SidebarContext.Provider value={{ showSidebar, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
