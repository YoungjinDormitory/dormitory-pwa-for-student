import imageCompression from "browser-image-compression";
import { ChangeEvent, useState } from "react";

export default function useImageInput() {
  const [value, setValue] = useState<Array<File | undefined>>([]);
  const [previewImgArr, setPreviewImgArr] = useState<Array<string | null>>([]);

  const compressImage = async (image: File) => {
    try {
      const options = {
        maxSizeMb: 1,
        maxWidthOrHeight: 300,
      };
      return await imageCompression(image, options);
    } catch (e) {
      console.log(e);
    }
  };

  const encodeFileToBase64 = (file: File) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setPreviewImgArr((prev) => [...prev, reader.result as string]);
        resolve(undefined);
      };
    });
  };

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const originalImage = files[0];
      const compressedImage = await compressImage(originalImage);
      setValue((prev) => [...prev, compressedImage]);
      await encodeFileToBase64(compressedImage!);
    }
  };

  const removeImageItem = (idx: number) => {
    setValue((prev) => {
      let newArr = prev;
      newArr.splice(idx, 1);
      return [...newArr];
    });

    setPreviewImgArr((prev) => {
      let newArr = prev;
      newArr.splice(idx, 1);
      return [...newArr];
    });
  };

  return { value, previewImgArr, removeImageItem, onChange };
}
