import { defineStore } from 'pinia'
import { Dao, CookieDao } from "../utils"


export const account = defineStore('account', {
    state: () => {
        return {
            // 可切換其他儲存方式
            Dao: new CookieDao(),
            test: ""
        }
    },
    getters: {
        /* 範例 */
        getTest: (state) => {
            let testStr = state.Dao.read<string>("keyName");
            if (testStr !== null || testStr !== "")
                state.test = testStr as string;
            else
                state.test = "";

            return state.test;
        }
    },
    actions: {
        /* 範例 */
        setTest(testVal: string) {
            this.$state.Dao.create("keyName", testVal);
            this.$state.test = testVal;
        },
        clearTest() {
            this.$state.Dao.delete("keyName");
            this.$state.test = "";
        }
    }
})