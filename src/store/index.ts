import { createStore, Store, useStore as baseUseStore, ActionContext } from 'vuex'
import { InjectionKey } from 'vue'
import getItems from '@/helper/getItems'

type ObjectData = {
  id: number,
  name: string,
  main: {
    [word: string]: string | number | boolean
  }
}

type mapObject = {
  [word: number]: number
}

type State = {
  comparison: {
    items: Array<ObjectData>
    mappingIdIndex: mapObject
    displayItemsId: Array<number>
    defaultItems: number
    userQuery: string
    isShowSearch: boolean
  }
}

export const key: InjectionKey<Store<State>> = Symbol('ts_store')

export function useStore () {
  return baseUseStore(key)
}

export const store = createStore({
  state: {
    comparison: {
      items: [],
      mappingIdIndex: {},
      displayItemsId: [],
      searchItems: {},
      defaultItems: 3,
      userQuery: '',
      isShowSearch: false
    }
  } as State,
  getters: {
    displayItems (state: State):Array<ObjectData|void> {
      const items = state.comparison.items
      const ids = state.comparison.displayItemsId
      const map = state.comparison.mappingIdIndex

      return ids.map((id:number) => { return items[map[id]] })
    },
    filterItemsbyQuery (state: State) {
      const items = state.comparison.items.slice(0)
      const userQuery = state.comparison.userQuery
      const ids = state.comparison.displayItemsId
      const map = state.comparison.mappingIdIndex

      const dispayIndex = ids.map((key) => {
        return map[key]
      })

      const sortedIndexs = Object.values(dispayIndex).sort((a, b) => b - a)
      sortedIndexs.forEach((i) => {
        items.splice(i, 1)
      })

      if (!userQuery) { return items }
      return items.filter((el) => { return el.name.indexOf(userQuery) !== -1 })
    }
  },
  mutations: {
    setItems (state: State, newItems:Array<ObjectData>) {
      state.comparison.items = newItems

      const items = state.comparison.items
      const ids = state.comparison.displayItemsId
      const map = state.comparison.mappingIdIndex
      const defaultItems = state.comparison.defaultItems

      items.forEach((el, i) => {
        map[el.id] = i
      })

      for (let i = 0; i < defaultItems; i++) {
        ids[i] = items[i].id
      }
    },
    setQuery (state: State, userQuery:string) {
      state.comparison.userQuery = userQuery
    },
    changeItemsByID (state: State, obj) {
      const index = obj.oldId
      const newId = obj.newId
      const ids = state.comparison.displayItemsId
      ids[index] = newId
    },
    addDisplayItem (state: State) {
      const items = state.comparison.items
      const ids = state.comparison.displayItemsId
      const map = state.comparison.mappingIdIndex

      const numberDisplay:number = ids.length
      const numberItems:number = items.length

      const lastIndex = map[ids[numberDisplay - 1]]

      if (lastIndex < numberItems) {
        let isIndexFinding = true
        let newIndex = lastIndex

        for (newIndex = lastIndex + 1; isIndexFinding; newIndex++) {
          isIndexFinding = ids.every((el) => { return map[el] === newIndex })
          console.log('store', isIndexFinding, ids, map[newIndex])
        }

        ids.push(items[newIndex].id)
      } else {
        ids.push(0)
      }
    },
    deleteDisplayItem (state: State) {
      const ids = state.comparison.displayItemsId
      ids.pop()
    },
    showSearch (state: State, val:boolean) {
      state.comparison.isShowSearch = val
    }
  },
  actions: {
    async downloadItems (context:ActionContext<State, State>, url:string, header?:object) {
      const items = await getItems(url, header) as Array<ObjectData>
      await new Promise(() => {
        context.commit('setItems', items)
      })
    }
  },
  modules: {
  }
})
