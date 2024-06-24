import { defineStore } from 'pinia'

export const useFamilyStore = defineStore('family', {
  state: () => (
    {
      familyList: [] //家庭成员
    }
  ),
  // unistorage: true, // 持久化
  actions: {
    setFamilyLIst(data) {
      
    },
    /**
   * 获取家庭成员
   */
  getFamilyLIst(info) {
      
    }
  }
})