import {
  Ban,
  ChevronDown,
  ChevronsUp,
  ChevronUp,
  Download,
  Lock,
  LogOut,
  Unlock,
} from "lucide-react";
import React from "react";
import { auth, db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const Details = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();
  const handleBlock = async () => {
    if (!user) return;
    const userDocRef = doc(db, "users", currentUser.id);
    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="details flex-1">
      <div className="user flex flex-col items-center p-3 gap-1 border-b border-gray-300/20">
        <img src={user?.avatar || "./avatar.png"} alt="avatar" />
        <h2 className="font-bold text-lg">{user?.username}</h2>
        <p className="text-sm text-white/80">{user?.email} </p>
      </div>
      <div className="info p-5 flex flex-col gap-5">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <ChevronDown />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <ChevronDown />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <ChevronUp />
          </div>
          <div className="photos h-52 overflow-y-auto">
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
                  alt="Dramatic black and white desert dunes"
                />
                <span>img_1_2024</span>
              </div>
              <Download className="downloadButton" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
                  alt="Dramatic black and white desert dunes"
                />
                <span>img_1_2024</span>
              </div>
              <Download className="downloadButton" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
                  alt="Dramatic black and white desert dunes"
                />
                <span>img_1_2024</span>
              </div>
              <Download className="downloadButton" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
                  alt="Dramatic black and white desert dunes"
                />
                <span>img_1_2024</span>
              </div>
              <Download className="downloadButton" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
                  alt="Dramatic black and white desert dunes"
                />
                <span>img_1_2024</span>
              </div>
              <Download className="downloadButton" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
                  alt="Dramatic black and white desert dunes"
                />
                <span>img_1_2024</span>
              </div>
              <Download className="downloadButton" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
                  alt="Dramatic black and white desert dunes"
                />
                <span>img_1_2024</span>
              </div>
              <Download className="downloadButton" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/28638986/pexels-photo-28638986.jpeg"
                  alt="Dramatic black and white desert dunes"
                />
                <span>img_1_2024</span>
              </div>
              <Download className="downloadButton" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <ChevronDown />
          </div>
        </div>
        <button
          className="flex justify-center items-center"
          onClick={handleBlock}
        >
          {isCurrentUserBlocked ? (
            <>
              <Ban className="mr-2 w-5 h-5" />
              <span>You are blocked</span>
            </>
          ) : isReceiverBlocked ? (
            <>
              <Unlock className="mr-2 w-5 h-5" />
              <span>Unblock user</span>
            </>
          ) : (
            <>
              <Lock className="mr-2 w-5 h-5" />
              <span>Block user</span>
            </>
          )}
        </button>
        {/* <Ban className="mr-2 w-5 h-5" />
        Block user */}
        <button
          className="logout flex justify-center items-center"
          onClick={() => auth.signOut()}
        >
          <LogOut className="mr-2 w-5 h-5" />
          <span> logout</span>
        </button>
      </div>
    </div>
  );
};

export default Details;
