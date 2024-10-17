import { Edit, MoreHorizontalIcon, Video } from "lucide-react";
import "../../index.css";
import { useUserStore } from "../../lib/userStore";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  return (
    <>
      <div className="userInfo p-[15px] flex items-center justify-between">
        <div className="user flex items-center gap-5">
          <img
            src={currentUser.avatar || "./avatar.png"}
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full object-cover ml-5 mt-3"
          />
          <h2 className="font-bold text-xl">{currentUser.username}</h2>
        </div>
        <div className="icons flex items-center gap-[10px]">
          <MoreHorizontalIcon className="w-[20px] h-[20px] cursor-pointer" />
          <Video className="w-[20px] h-[20px] cursor-pointer" />
          <Edit className="w-[20px] h-[20px] cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
