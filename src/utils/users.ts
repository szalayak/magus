import { UsersQuery } from "@/API";
import { users } from "@/graphql/queries";
import { User } from "@/store";
import { API } from "aws-amplify";

export const listUsers = async (): Promise<User[]> => {
  const result = (await API.graphql({ query: users })) as {
    data: UsersQuery;
  };
  return (
    result.data.users?.map(
      (u): User => ({
        username: u?.Username,
        name: u?.UserAttributes?.find(a => a?.Name === "name")?.Value,
      })
    ) || []
  );
};
