import imageCompression from "browser-image-compression";
import { ChangeEvent, useRef, useState } from "react";

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

/**
 *
 * @description 이미지 input 형식의 데이터를 파싱해서 axios에 보낼 값과 preview값을 리턴해줍니다.
 */
export default function useImageInput() {
  const idenfifyNum = useRef<number>(0);
  const [value, setValue] = useState<Array<File | undefined>>([]);
  const [previewImgArr, setPreviewImgArr] = useState<Array<string | null>>([]);

  /**
   *
   * @param file
   * @description - preview Image 배열에 base64형식의 data uri 값을 넣어줌
   */
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

  /**
   *
   * @param e
   *
   * @description - 파일을 압축해서 value에 담아줍니다.
   */
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const originalImage = files[0];
      const compressedImage = await compressImage(originalImage);

      // 파일의 확장자명과 파일명을 구분해주기 위함.
      const filename = originalImage.name.split(".");
      const newFile = new File(
        [compressedImage!],
        // 파일 이름 결정 연산
        filename[0] + idenfifyNum.current++ + "." + filename[1],
        {
          type: "image/png",
        }
      );
      setValue((prev) => [...prev, newFile]);
      await encodeFileToBase64(compressedImage!);
    }
  };

  /**
   *
   * @param idx
   * @description - idx번째에 있는 이미지를 제거해준다.
   */
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
