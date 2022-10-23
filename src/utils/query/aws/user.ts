import UserPool from "../../service/UserPool";
import { CognitoUserSession } from "amazon-cognito-identity-js";

export async function changeUserRoom(Value: string) {
  return await new Promise((resolve, reject) => {
    const user = UserPool.getCurrentUser();

    user?.getSession((err: Error | null, session: CognitoUserSession) => {
      if (err) {
        reject(err);
      }
      user.updateAttributes(
        [
          {
            Name: "custom:room_num",
            Value,
          },
        ],
        (err) => {
          if (err) {
            reject(err);
          }
          resolve("value");
        }
      );
    });
  });
}
