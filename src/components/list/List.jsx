import React from "react";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";

const List = () => {
  return (
    <div className="flex-1 h-full">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
