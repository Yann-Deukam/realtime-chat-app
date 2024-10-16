import {
  Ban,
  ChevronDown,
  ChevronsUp,
  ChevronUp,
  Download,
  LogOut,
} from "lucide-react";
import React from "react";

const Details = () => {
  return (
    <div className="details flex-1">
      <div className="user flex flex-col items-center p-3 gap-1 border-b border-gray-300/20">
        <img src="./avatar.png" alt="avatar" />
        <h2 className="font-bold text-lg">Jane Doe</h2>
        <p className="text-sm text-white/80">Lorem ipsum dolor sit amet.</p>
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
        <button className="flex justify-center items-center">
          <Ban className="mr-2 w-5 h-5" />
          Block user
        </button>
        <button className="logout flex justify-center items-center">
          <LogOut className="mr-2 w-5 h-5" />
          <span> logout</span>
        </button>
      </div>
    </div>
  );
};

export default Details;
