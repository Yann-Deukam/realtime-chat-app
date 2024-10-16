import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../../index.css";
import { Camera, Image, Info, Laugh, Mic, Phone, Video } from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);
  const handleEmoji = (e) => {
    setText((prev) => prev + e.native);
    console.log(e);
  };

  return (
    <div className="flex-[2] chat flex flex-col border-x border-gray-300/20 h-full">
      {/* Top section with user info */}
      <div className="top p-3 flex items-center justify-between border-b border-b-gray-300/20">
        <div className="user flex items-center gap-5">
          <img
            src="./avatar.png"
            alt="avatar"
            className="w-[60px] h-[60px] rounded-full object-cover "
          />
          <div className="texts flex flex-col gap-1">
            <span className="font-bold">Jane Doe</span>
            <p className="text-sm -mt-1 text-gray-300">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="icons flex items-center gap-5">
          <Phone className="w-[20px] h-[20px] cursor-pointer" />
          <Video className="w-[20px] h-[20px] cursor-pointer" />
          <Info className="w-[20px] h-[20px] cursor-pointer" />
        </div>
      </div>

      {/* Center section with scrollable content */}
      <div className="center px-5 flex flex-col gap-5 flex-1 overflow-y-auto">
        {/* Scrollable content */}
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate suscipit, consequuntur a dolore delectus magnam dolorum
              aspernatur perspiciatis provident reprehenderit unde eaque
              recusandae at repellat, odio voluptatibus eius ducimus ipsum?
            </p>
            <span>10:30</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate suscipit, consequuntur a dolore delectus magnam dolorum
              aspernatur perspiciatis provident reprehenderit unde eaque
              recusandae at repellat, odio voluptatibus eius ducimus ipsum?
            </p>
            <span>10:30</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate suscipit, consequuntur a dolore delectus magnam dolorum
              aspernatur perspiciatis provident reprehenderit unde eaque
              recusandae at repellat, odio voluptatibus eius ducimus ipsum?
            </p>
            <span>10:30</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate suscipit, consequuntur a dolore delectus magnam dolorum
              aspernatur perspiciatis provident reprehenderit unde eaque
              recusandae at repellat, odio voluptatibus eius ducimus ipsum?
            </p>
            <span>10:30</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate suscipit, consequuntur a dolore delectus magnam dolorum
              aspernatur perspiciatis provident reprehenderit unde eaque
              recusandae at repellat, odio voluptatibus eius ducimus ipsum?
            </p>
            <span>10:30</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
              alt="Dramatic black and white desert dunes"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate suscipit, consequuntur a dolore delectus magnam dolorum
              aspernatur perspiciatis provident reprehenderit unde eaque
              recusandae at repellat, odio voluptatibus eius ducimus ipsum?
            </p>
            <span>10:30</span>
          </div>
        </div>
        <div ref={endRef} data-testid="end-of-chat-list"></div>
      </div>
      <div className="bottom mt-auto px-5 flex items-center justify-between border-t border-gray-300/20">
        <div className="icons flex items-center">
          <Image />
          <Camera />
          <Mic />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="relative -ml-5 m-5 emoji w-[20px] h-[20px] cursor-pointer">
          <Laugh onClick={() => setOpen((prev) => !prev)} />
          {open && (
            <div className="absolute bottom-full left-0 mb-5">
              <Picker data={data} onEmojiSelect={handleEmoji} />
            </div>
          )}
        </div>
        <button className="sendButton px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-950 transition-all ease-in-out duration-200 text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
