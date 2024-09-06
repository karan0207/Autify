"use client"
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

type Props = {}

const ProfilePicture = (props: Props) => {
  return (
   <div className="flex flex-col">
    <p className="text-lg text-white">Profile Picture</p>
    <div className="flex flex-col justify-center items-center h-[30vh]">
        <UploadCareButton/>
    </div>
   </div>
  )
}

export default ProfilePicture