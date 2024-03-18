import { useEffect, useState } from 'react';

const usePreviewImage = (imageFile: File | null) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const reader = new FileReader();

    if (imageFile) {
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };

      reader.readAsDataURL(imageFile);
    }

    return () => {
      reader.abort();
    };
  }, [imageFile]);

  return imageSrc;
};

export default usePreviewImage;
