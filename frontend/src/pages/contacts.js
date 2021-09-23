import React from "react";
import ChatLayout from "../layouts/ChatLayout";
import LeftSidebarMenu from "../components/LeftSidebarMenu";
import ContactsLeftSidebar from "../components/ContactsLeftSidebar";

const Contacts = () => {
  return (
    <ChatLayout>
      <LeftSidebarMenu/>
      <ContactsLeftSidebar />
    </ChatLayout>
  )
}

export default Contacts