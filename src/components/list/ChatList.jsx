import { Plus, Minus, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddUser from "../addUser/AddUser";
import { useUserStore } from "../../lib/userStore";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";

const ChatList = () => {
  const [addMode, setAddmode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();
  const { chatId, changeChat } = useChatStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    const userChats = chats.map((item) => {
      const { user, ...rest } = item;
      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === item.chatId
    );

    userChats[chatIndex].isSeen = true;

    const userChatRef = doc(db, "userchats", currentUser.id);

    try {
      await updateDoc(userChatRef, {
        chats: userChats,
      });
      changeChat(chat.chatId, chat.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chatList">
      <div className="search flex items-center gap-2 mb-4">
        <div className="searchBar flex bg-slate-900/70 py-3 px-4 rounded-md ml-4">
          <Search alt="search" className="w-[20px] h-[20px] opacity-20" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent mx-2 outline-none"
          />
        </div>
        {addMode ? (
          <Minus
            className="add w-[48px] h-[48px] bg-slate-900/70 hover:bg-slate-900/90 transition-all ease-in-out p-3 cursor-pointer rounded-md"
            onClick={() => setAddmode(false)}
          />
        ) : (
          <Plus
            className="add w-[48px] h-[48px] bg-slate-900/70 hover:bg-slate-900/90 transition-all ease-in-out p-3 cursor-pointer rounded-md"
            onClick={() => setAddmode(true)}
          />
        )}
      </div>
      <div className="flex-1 h-full overflow-y-auto max-h-full">
        {chats.map((chat) => (
          <div
            className="item"
            key={chat.chatId}
            onClick={() => {
              handleSelect(chat);
            }}
            style={{
              backgroundColor: chat?.isSeen ? "transparent" : "rgb(126 34 206)",
            }}
          >
            <img src={chat.user.avatar || "./avatar.png"} alt="avatar" />
            <div className="texts">
              <span>{chat.user.username}</span>
              <p>{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
