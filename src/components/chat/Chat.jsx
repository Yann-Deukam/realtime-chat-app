import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../../index.css";
import { Camera, Image, Info, Laugh, Mic, Phone, Video } from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";

const Chat = () => {
  const [chat, setChat] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const { chatId, user } = useChatStore();
  const { currentUser } = useUserStore();

  const endRef = useRef(null);

  // Function to handle emoji selection
  const handleEmoji = (e) => {
    setText((prev) => prev + e.native);
    console.log(e);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  // const handleSend = async () => {
  //   if (text === "") return;
  //   let imgUrl = null;
  //   try {
  //     if (img.file) {
  //       imgUrl = await upload(img.file);
  //     }
  //     await updateDoc(doc(db, "chats", chatId), {
  //       messages: arrayUnion({
  //         senderId: currentUser.id,
  //         text,
  //         createdAt: new Date(),
  //         ...(imgUrl && { img: imgUrl }),
  //       }),
  //     });

  //     const userIDs = [currentUser.id, user.id];
  //     userIDs.forEach(async (id) => {
  //       const userChatRef = doc(db, "userchats", id);
  //       const userChatSnapshot = await getDoc(userChatRef);

  //       if (userChatSnapshot.exists()) {
  //         const userChatsData = userChatSnapshot.data();

  //         const chatIndex = userChatsData.chats.findIndex(
  //           (c) => c.chatId === chatId
  //         );

  //         userChatsData.chats(chatIndex).lastMessage = text;
  //         userChatsData.chats(chatIndex).isSeen =
  //           id === currentUser.id ? true : false;
  //         userChatsData.chats(chatIndex).updateAt = Date.now();

  //         await updateDoc(userChatRef, {
  //           chats: userChatsData.chats,
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   setImg({
  //     file: null,
  //     url: "",
  //   });

  //   setText("");
  // };

  // Scroll to the last message when the component loads
  // useEffect(() => {
  //   if (endRef.current) {
  //     endRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [text]); // Assuming you have a state for messages

  const handleSend = async () => {
    if (text === "") return;
    let imgUrl = null;

    try {
      // Upload the image if one exists
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      // Update the main "chats" collection with the new message
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      // Update "userchats" collection for both users
      const userIDs = [currentUser.id, user.id];
      userIDs.forEach(async (id) => {
        const userChatRef = doc(db, "userchats", id);
        const userChatSnapshot = await getDoc(userChatRef);

        if (userChatSnapshot.exists()) {
          const userChatsData = userChatSnapshot.data();

          const updatedChats = userChatsData.chats.map((c) =>
            c.chatId === chatId
              ? {
                  ...c,
                  lastMessage: text,
                  isSeen: id === currentUser.id,
                  updateAt: Date.now(),
                }
              : c
          );

          // Update Firestore with new chat data
          await updateDoc(userChatRef, {
            chats: updatedChats,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }

    // Reset the image and text inputs
    setImg({
      file: null,
      url: "",
    });
    setText("");
  };

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);
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
      <div className="center mt-5 px-5 flex flex-col gap-5 h-full flex-1 overflow-y-auto">
        {/* Messages */}
        {chat?.messages?.map((message) => (
          <div
            className={
              message.senderId === currentUser?.id
                ? "message own"
                : "message other"
            }
            key={message?.createdAt}
          >
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              {/* <span>10:30</span> */}
            </div>
          </div>
        ))}
        {img.url && (
          <div className="message own">
            <div className="texts">
              <img src={img.url} />
            </div>
          </div>
        )}
        <div ref={endRef} data-testid="end-of-chat-list"></div>
      </div>

      {/* Bottom section with input and icons */}
      <div className="bottom mt-auto px-5 flex items-center justify-between border-t border-gray-300/20">
        <div className="icons flex items-center">
          <label htmlFor="file">
            <Image className="cursor-pointer" />
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleImg}
          />
          <Camera className="cursor-pointer" />
          <Mic className="cursor-pointer" />
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
        <button
          className="sendButton px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-950 transition-all ease-in-out duration-200 text-white"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
