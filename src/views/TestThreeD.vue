<template>
    <div class="three-d">
      <div id="scene-container">
        <!-- Our <canvas> will be inserted here -->
        <canvas></canvas>
      </div>
      <button class="btn" @click="toNextView">切换到下一个视角</button>
      <button class="btn" @click="toGlobalView">切换到全局视角</button>
    </div>
</template>

<script setup>
    import { main, toNextView } from '../utils/three-js/main';
    import { onMounted } from 'vue';
    onMounted(() => {
      main().catch((err) => {
        console.error(err);
      })
    })
</script>


<style scoped>

.three-d {
  width: 100%; 
  height: 100%; 
  position: fixed;

}

#scene-container {
  /* tell our scene container to take up the full page */
  position: absolute;
  width: 70%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /*
    Set the container's background color to the same as the scene's
    background to prevent flashing on load
  */
  background-color: skyblue;
}

</style>