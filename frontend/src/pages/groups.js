import React from "react";
import ChatLayout from "../layouts/ChatLayout";
import LeftSidebarMenu from "../components/LeftSidebarMenu";
import GroupsLeftSidebar from "../components/GroupsLeftSidebar";

const Groups = () => {
  return (
    <ChatLayout>
      <LeftSidebarMenu />
      <GroupsLeftSidebar />
    </ChatLayout>
  )
}

export default Groups