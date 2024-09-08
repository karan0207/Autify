'use client'
import React from 'react'
import "@uploadcare/react-uploader/core.css"
import { FileUploaderRegular } from '@uploadcare/react-uploader'

type Props = {
    onUpload?:any
}

const UploadCareButton = (props: Props) => {
  return (
  
<FileUploaderRegular
    pubkey="2e6aa673045a674fdf38"
    maxLocalFileSizeBytes={1000000000}
    imgOnly={true}
    sourceList="local, url, camera, dropbox"
    classNameUploader="my-config uc-light"
/>
  )
}

export default UploadCareButton