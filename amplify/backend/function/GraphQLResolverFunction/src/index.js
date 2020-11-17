/* Amplify Params - DO NOT EDIT
	AUTH_MAGUSA74E493A_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { CognitoIdentityServiceProvider } from "aws-sdk";
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();

/**
 * Get user pool information from environment variables.
 */
const COGNITO_USERPOOL_ID = process.env.AUTH_MYRESOURCENAME_USERPOOLID;
if (!COGNITO_USERPOOL_ID) {
  throw new Error(
    `Function requires environment variable: 'COGNITO_USERPOOL_ID'`
  );
}
const COGNITO_USERNAME_CLAIM_KEY = "cognito:username";

/**
 * Using this as the entry point, you can use a single function to handle many resolvers.
 */
const resolvers = {
  Query: {
    echo: ctx => {
      return ctx.arguments.msg;
    },
    users: async () => {
      const params = {
        UserPoolId: COGNITO_USERPOOL_ID /* required */,
      };
      try {
        const {
          data: { Users: users },
        } = await cognitoIdentityServiceProvider.listUsers(params).promise();
        return users;
      } catch (e) {
        throw new Error(typeof e === "string" ? e : e.message);
      }
    },
    me: async ctx => {
      const params = {
        UserPoolId: COGNITO_USERPOOL_ID /* required */,
        Username:
          ctx.identity.claims[COGNITO_USERNAME_CLAIM_KEY] /* required */,
      };
      try {
        // Read more: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminGetUser-property
        return await cognitoIdentityServiceProvider
          .adminGetUser(params)
          .promise();
      } catch (e) {
        throw new Error(`NOT FOUND`);
      }
    },
  },
};

// event
// {
//   "typeName": "Query", /* Filled dynamically based on @function usage location */
//   "fieldName": "me", /* Filled dynamically based on @function usage location */
//   "arguments": { /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
export async function handler(event) {
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
}
