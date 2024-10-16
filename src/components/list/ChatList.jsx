import { Plus, Minus, Search } from "lucide-react";
import React, { useState } from "react";
import AddUser from "../addUser/AddUser";

const ChatList = () => {
  const [addMode, setAddmode] = useState(false);
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
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello world</p>
          </div>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
