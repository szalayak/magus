import { API } from "aws-amplify";
import { ActionProps, Identifiable, PageableState } from "../types";
import {
  DefaultActionInputs,
  IdentifiableResult,
  PageableResult,
} from "./types";

export const createDefaultActions = ({
  actions,
  mappingFunction,
}: DefaultActionInputs): ActionProps => {
  return {
    loadFunction: async () => {
      const result = (await API.graphql({
        query: actions.list || "",
      })) as PageableResult;
      return Object.values(result.data)[0] as PageableState;
    },
    getFunction: async (id: string | number) => {
      const result = (await API.graphql({
        query: actions.read || "",
        variables: { id },
      })) as IdentifiableResult;
      return Object.values(result.data)[0] as Identifiable;
    },
    createFunction: async (item: Identifiable) => {
      const result = (await API.graphql({
        query: actions.create || "",
        variables: {
          input: mappingFunction(item),
        },
      })) as IdentifiableResult;
      return Object.values(result.data)[0] as Identifiable;
    },
    updateFunction: async (item: Identifiable) => {
      const result = (await API.graphql({
        query: actions.update || "",
        variables: { input: mappingFunction(item) },
      })) as IdentifiableResult;
      return Object.values(result.data)[0] as Identifiable;
    },
    deleteFunction: async (id: string | number) => {
      await API.graphql({
        query: actions.delete || "",
        variables: { input: { id } },
      });
    },
  };
};
