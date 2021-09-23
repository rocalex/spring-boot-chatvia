import React from "react";

import ChatLayout from "../layouts/ChatLayout";
import LeftSidebarMenu from "../components/LeftSidebarMenu";
import ChatLeftSidebar from "../components/ChatLeftSidebar";
import UserChat from "../components/UserChat";

const Home = () => {
  return (
    <ChatLayout>
      <LeftSidebarMenu />
      <ChatLeftSidebar />
      <UserChat />
    </ChatLayout>
  )
}
export default Home