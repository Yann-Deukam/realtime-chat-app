import React, { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import "./index.css";
import Login from "./components/login/Login";
import Notifications from "./components/notifications/Notifications";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container w-[180vh] h-[90vh] bg-slate-800/70 border border-white/20 backdrop-blur-lg mt-10 rounded-lg text-white overflow-hidden">
        <div className="flex h-full">
          {currentUser ? (
            <>
              <List />
              {chatId && <Chat />}
              {chatId && <Details />}
            </>
          ) : (
            <Login />
          )}
          <Notifications />
        </div>
      </div>
    </div>
  );
}

export default App;
