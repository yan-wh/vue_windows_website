<template>
    <div>
        <h1>This is a test page</h1>
        <!-- <h3 v-for="(info, index) in Object.keys(obj)" :key="index">
            {{ info }}: {{ obj[info] }} {{ info === 'city' ? obj.addr.city : '' }}
        </h3> -->

        <!-- <h3 v-for="(info, index) in arr" :key="index">
            {{ info.name }}: {{ info.age }} --city: {{ info.addr.city }}
        </h3> -->

        <!-- <h3>Count: {{ state.count }}</h3> -->
        <!-- <h3>id: {{ object.id }}</h3> -->

        <!-- <child ref="childRef"></child>
        <button @click="changeFamilyList">change</button> -->

        <!-- <div>{{ numArr }}</div>
        <button @click="changeNumArr"></button> -->

        <!-- Button to open/close modal -->

        
        <button onclick="toggleModal()">Open Modal</button>

        <div class="modal modal--visible" id="example-modal"><a onclick="toggleModal" class="modal-overlay close-btn"
                aria-label="Close"></a>
            <div class="modal-content" role="document">
                <div class="modal-header u-flex u-justify-space-between">
                    <div class="modal-title">Modal Dialog</div>
                    <div onclick="toggleModal()" aria-label="Close"><span class="icon" style="cursor: pointer;"><svg
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                                class="u-inline-block fa-times w-2 h-4 fa-wrapper" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                                <path fill="currentColor"
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                                </path>
                            </svg></span></div>
                </div>
                <div class="modal-body">
                    <!-- Some code here -->
                </div>
                <div class="modal-footer u-text-right"><a onclick="toggleModal()" class="u-inline-block mr-1"><button
                            class="btn--sm">Cancel</button></a><a onclick="toggleModal()" class="u-inline-block"><button
                            class="btn-primary btn--sm">Share</button></a></div>
            </div>
        </div>


    </div>
</template>

<script setup>
    import { ref, reactive, onMounted, computed } from 'vue'
    import child from '@/components/child.vue'
    import { storeToRefs, mapState } from 'pinia'
    import { store } from '@/stores/index.js'

    const childRef = ref(null)
    const numArr = reactive([1,2,3])

    const newB = 1
    const object = { id: ref(newB) }
    store.family().getFamilyLIst()

    console.log('counter-count数据:', store.counter().count)
    console.log('my-count数据:', store.my().familyList)

    // const familyList = computed(() => store.family().familyList) // 此方法可行
    // console.log('family--', familyList)

    const familyList = mapState(store.family, ['familyList'])
    console.log('family--', familyList)

    // const { familyList } = storeToRefs(store.family())

    // console.log('family-familyList数据:', store.family().familyList)
    // setTimeout(() => {
    //     console.log('family-familyList数据:', store.family().familyList)
    // }, 1000)
    
    function toggleModal() {
        // Toggle modal visibility
        const modal = document.querySelector('#example-modal');
        modal.classList.toggle("modal--visible");
    }

    function changeNumArr() {
        numArr = [4,5,6]
    }

    function changeFamilyList() {
        console.log('store.my()', store.my())
        store.my().familyList = [{ name: '李四', age: 25 }]
        // store.my().setData([{ name: '张三', age: 25 }])
        setTimeout(() => {
            console.log('my-familyList数据:', store.my().familyList)
        }, 2000)
    }

    const obj = ref({
        name: 'John',
        age: 30,
        addr: {
            city: '贵州',
        }
    })
    const arr = ref([
        {
            name: 'John',
            age: 30,
            addr: {
                city: 'New York',
            }
        },
        {
            name: 'haoge',
            age: 25,
            addr: {
                city: '贵阳',
            }
        }
    ])
    const state = ref({ count: 0 })

    const testObj = {
        name: '张三'
    }
    const testArr = [11, 22, 23]
    onMounted(() => {
        console.log('mounted')

        // console.log('是否包含age属性?', typeof testObj.age?.addr?.ad)
        console.log('是否包含某个元素', testArr.includes(23))

        // setTimeout(() => {
        //     obj.value.addr.city = '杭州'
        // }, 2000);

        // setTimeout(() => {
        //     arr.value = arr.value.filter(item => item.age < 30)

        //     childRef.value.sayHello()

        //     // arr[1].addr.city = '浙江'
        //     // arr.value[1].addr.city = '浙江-'

        //     // arr[arr.length] = {
        //     //     name: '浩哥',
        //     //     age: 26,
        //     //     addr: {
        //     //         city: '重庆',
        //     //     }
        //     // }

        //     // arr.splice(arr.length, 0, {
        //     //     name: '浩哥',
        //     //     age: 26
        //     // })

        //     // let { count } = state.value
        //     // // 不会影响原始的 state
        //     // count++
        // }, 2000);
    })
</script>