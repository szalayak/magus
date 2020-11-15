import awsExports from "@/aws-exports";
import AWS from "aws-sdk";
import { UsersListType } from "aws-sdk/clients/cognitoidentityserviceprovider";
import { Auth } from "aws-amplify";

export const listUsers = async (): Promise<UsersListType> => {
  const credentials = await Auth.currentCredentials();
  const cognito = new AWS.CognitoIdentityServiceProvider({
    region: awsExports.aws_cognito_region,
    credentials: Auth.essentialCredentials(credentials),
  });
  return new Promise((resolve, reject) => {
    cognito.listUsers(
      {
        UserPoolId: awsExports.aws_user_pools_id,
      },
      (err, data) => {
        if (err) reject(err);
        else resolve(data.Users);
      }
    );
  });
};
