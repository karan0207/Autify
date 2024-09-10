"use client";
import React, { useEffect } from "react";
import UploadCareButton from "./uploadcare-button";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { div } from "framer-motion/client";
import { on } from "events";

type Props = {
  onUpload?: any;
  userImage: string|null|undefined;
  onRemove?: any;
};

const ProfilePicture = ({ onUpload, userImage, onRemove }: Props) => {
  const router = useRouter();

  const onProfileRemove = async () => {
    const res = await onRemove();
    if (res) {
      router.refresh();
    }
  };



  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center h-[30vh]">
          {userImage ? (
            <div>
              <Image
                src={userImage}
                alt="profile-picture"
                width={100}
                height={100}
                className="rounded-full"
              />
                <Button
            onClick={onProfileRemove}
            className="hover:gray-400 hover:text-purple"
          >
            Remove
          </Button>
            </div>
          ) : (
            <UploadCareButton 
            onUpload={onUpload}/>
          )}
        </div>
      
      </div>
    </div>
  );
};

export default ProfilePicture;
