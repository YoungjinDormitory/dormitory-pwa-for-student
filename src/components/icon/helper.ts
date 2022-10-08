import { lazy } from "react";

/**
 * @param {string} iconName - 아이콘 이름을 string 으로 입력해주세요
 * @description -아이콘 로딩 함수입니다.
 */
export default function iconLoader(iconName: string) {
  return lazy(() =>
    import("./").then((module: any) => {
      return {
        default: module[iconName],
      };
    })
  );
}
