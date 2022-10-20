import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: import.meta.env.VITE_USER_POOL_ID,
  ClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool;
