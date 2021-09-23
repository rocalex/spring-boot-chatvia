import React from 'react'

import ChatLayout from "../layouts/ChatLayout";
import LeftSidebarMenu from "../components/LeftSidebarMenu";
import ProfileLeftSidebar from "../components/ProfileLeftSidebar";

const Profile = () => {
  return (
    <ChatLayout>
      <LeftSidebarMenu />
      <ProfileLeftSidebar />
    </ChatLayout>
  )
}

export default Profile