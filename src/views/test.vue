<template>
    <div>
        <h1>This is a test page</h1>
        <!-- <h3 v-for="(info, index) in Object.keys(obj)" :key="index">
            {{ info }}: {{ obj[info] }} {{ info === 'city' ? obj.addr.city : '' }}
        </h3> -->
        <h3 v-for="(info, index) in arr" :key="index">
            {{ info.name }}: {{ info.age }} --city: {{ info.addr.city }}
        </h3>
        <!-- <h3>Count: {{ state.count }}</h3> -->
        <!-- <h3>id: {{ object.id }}</h3> -->
    </div>
</template>

<script setup>
    import { ref, reactive, onMounted } from 'vue'
    const newB = 1
    const object = { id: ref(newB) }

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
    onMounted(() => {
        console.log('mounted')
        // setTimeout(() => {
        //     obj.value.addr.city = '杭州'
        // }, 2000);

        setTimeout(() => {
            arr.value = arr.value.filter(item => item.age < 30)

            // arr[1].addr.city = '浙江'
            // arr.value[1].addr.city = '浙江-'

            // arr[arr.length] = {
            //     name: '浩哥',
            //     age: 26,
            //     addr: {
            //         city: '重庆',
            //     }
            // }

            // arr.splice(arr.length, 0, {
            //     name: '浩哥',
            //     age: 26
            // })

            // let { count } = state.value
            // // 不会影响原始的 state
            // count++
        }, 2000);
    })
</script>