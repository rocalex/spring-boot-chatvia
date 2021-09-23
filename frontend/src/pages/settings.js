import React from 'react'

import ChatLayout from "../layouts/ChatLayout";
import LeftSidebarMenu from "../components/LeftSidebarMenu";
import SettingsLeftSidebar from "../components/SettingsLeftSidebar";

const Settings = () => {
  return (
    <ChatLayout>
      <LeftSidebarMenu />
      <SettingsLeftSidebar />
    </ChatLayout>
  )
}

export default Settings