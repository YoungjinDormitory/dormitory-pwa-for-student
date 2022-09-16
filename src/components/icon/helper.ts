import { lazy } from "react";

export default function iconLoader(iconName: string) {
  return lazy(() =>
    import("./").then((module: any) => {
      return {
        default: module[iconName],
      };
    })
  );
}
