"use client";
import React from "react";
import UploadCareButton from "./uploadcare-button";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


type Props = {
  onUpload?: any;
  userImage: string;
  onRemove?:any;
};

const ProfilePicture = ({ onUpload, userImage,onRemove }: Props) => {

  const router= useRouter()

  const onProfileRemove=async()=>{

     const res = await onRemove();
     if(res) {
      router.refresh()
     
     }
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col justify-center items-center h-[30vh]">
        {userImage ? <Image src={userImage} alt='profile-picture' width={100} height={100} className="rounded-full"/> : <UploadCareButton />}
      </div>
      <div>
        <Button onClick={onRemove} className="hover:gray-400 hover:text-purple" >Remove</Button>
      </div>
      </div>
    
    </div>
  );
};

export default ProfilePicture;
