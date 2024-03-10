import axios from 'axios';
import imageCompression from 'browser-image-compression';
import { HTTPError } from 'error/HTTPError';

type ImageCompressionOptions = Parameters<typeof imageCompression>['1'];

type ImageUrl = string;

type ImageUploadResponse = {
  imageUrl: ImageUrl;
};

const convertImageFileToUrl = async (
  imageFile: File,
  compressionOptions?: ImageCompressionOptions,
): Promise<ImageUrl> => {
  const formData = new FormData();
  const compressedImageFile = await imageCompression(imageFile, {
    maxSizeMB: 0.2,
    ...compressionOptions,
  });
  formData.append('file', compressedImageFile);

  try {
    const response = await axios<ImageUploadResponse>(
      `${process.env.REACT_APP_TREE_API_URL}v1/images/upload`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/formdata',
        },
        data: formData,
      },
    );

    return response.data.imageUrl;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new HTTPError('사진을 등록하던 도중 오류가 발생했습니다.', error.status);
    }

    throw new Error('사진을 등록하던 도중 알 수 없는 오류가 발생했습니다.');
  }
};

export default convertImageFileToUrl;
