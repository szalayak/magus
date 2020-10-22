import { ListDiesQuery } from "@/API";
import { listDies } from "@/graphql/queries";
import { API } from "aws-amplify";
import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import store from "..";

export interface DiceState {
  result: ListDiesQuery;
}

@Module({ namespaced: false, dynamic: true })
export default class DiceModule extends VuexModule implements DiceState {
  public result!: ListDiesQuery;

  @Mutation
  private setResult(result: ListDiesQuery) {
    this.result = result;
  }

  @Action({ rawError: true })
  public async loadDice(): Promise<void> {
    const dice = (await API.graphql({
      query: listDies,
    })) as ListDiesQuery;
    this.context.commit("setResult", dice);
  }
}
