import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

export const store = createStore({
  modules: {
    cart,
    products
  },
  plugins: [createLogger()]
});

/*
export interface State {
  products: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    asyncGetUserInfo ({ commit }) {
      setTimeout(() => {
        commit("getUserInfo", +new Date() + 'action')
      },2000)
    }
  },
  getters: {
    userInfoGetter (state) {
      return state.userInfo.name
    }
  }
});

export function useStore () {
  return baseUseStore(key)
}
 */
