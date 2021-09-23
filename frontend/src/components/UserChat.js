import React from "react";

import UserChatTopbar from "./UserChatTopbar";
import ChatConversation from "./ChatConversation";
import ChatInput from "./ChatInput";

const UserChat = () => {
  return (
    <div className="user-chat w-100 overflow-hidden">
      <div className="d-lg-flex">
        <div className="w-100 overflow-hidden position-relative">
          <UserChatTopbar />
          <ChatConversation />
          <ChatInput />
        </div>
      </div>
    </div>
  )
}

export default UserChat