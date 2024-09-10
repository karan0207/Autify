import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  onUpload:any;
}

const UploadcareButton = ({ onUpload }: Props) => {
  const router = useRouter();

  // const handleUpload = async (fileInfo: any) => {
  //   const file = await onUpload(fileInfo.cdnUrl);
  //   if (file) {
  //     router.refresh();
  //   }
  // }

  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="2e6aa673045a674fdf38"
        // onDoneClick={(e)=>handleUpload(e)}
        // onFileUploadSuccess={handleUpload} // Correct event handler for file selection
      />
    </div>
  )
}

export default UploadcareButton;
