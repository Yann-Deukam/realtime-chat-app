import { Edit, MoreHorizontalIcon, Video } from "lucide-react";
import { Plus, Minus, Search } from "lucide-react";
import React, { useState } from "react";
import "../../index.css";

const UserInfo = () => {
  const [addMode, setAddmode] = useState(false);
  return (
    <>
      <div className="userInfo p-[15px] flex items-center justify-between">
        <div className="user flex items-center gap-5">
          <img
            src="./avatar.png"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <h2 className="font-bold">John Doe</h2>
        </div>
        <div className="icons flex items-center gap-[10px]">
          <MoreHorizontalIcon className="w-[20px] h-[20px] cursor-pointer" />
          <Video className="w-[20px] h-[20px] cursor-pointer" />
          <Edit className="w-[20px] h-[20px] cursor-pointer" />
        </div>
      </div>
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
    </>
  );
};

export default UserInfo;
