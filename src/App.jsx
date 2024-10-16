import React from "react";
import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import "./index.css";
import Login from "./components/login/Login";
import Notifications from "./components/notifications/Notifications";

function App() {
  const user = false;
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container w-[180vh] h-[90vh] bg-slate-800/70 border border-white/20 backdrop-blur-lg mt-10 rounded-lg text-white overflow-hidden">
        <div className="flex h-full">
          {user ? (
            <>
              <List />
              <Chat />
              <Details />
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
