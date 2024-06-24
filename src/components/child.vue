<template>
    <div>
        子页面
    </div>
</template>

<script setup>
    function sayHello() {
        console.log('hello from child.vue');
    }
    defineExpose({
        sayHello
    })
</script>
