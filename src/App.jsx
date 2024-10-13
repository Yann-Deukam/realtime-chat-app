import React from "react";
import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="container w-[180vh] h-[90vh] bg-slate-800/70 border border-white/20 backdrop-blur-lg mt-10 rounded-lg text-white">
          <div className="flex">
            <List />
            <Chat />
            <Details />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
