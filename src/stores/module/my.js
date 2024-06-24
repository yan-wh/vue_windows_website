// useMyStore.js
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    familyList: []
  }),
  // 可以添加 actions 和 getters 等
  actions: {
    setData(data) {
      this.familyList = data;
    }
  }
});