import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface Broker {
  id: number;
  name: string;
  logo: string;
  country: string;
  contact: string;
}

export interface State {
  brokerList: Broker[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      brokerList: [],
    };
  },
  mutations: {
    setList(state, list: Broker[]) {
      state.brokerList = list;
    },
  },
  getters: {
    filterListByCountry(state, country: string) {
      return state.brokerList.filter((broker) => broker.country === country);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
