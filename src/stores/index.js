// store.js
import { createPinia } from 'pinia';
import { useFamilyStore } from './module/family.js';
import { useCounterStore } from './module/counter.js';
import { useMyStore } from './module/my.js';


const pinia = createPinia();

// 封装一个统一的接口
export const store = {
  family: useFamilyStore,
  counter: useCounterStore,
  my: useMyStore
};

// export const store = useCounterStore

export default pinia;