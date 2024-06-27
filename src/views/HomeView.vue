<template>
  <div class="content-container">
    <div class="text-center content-title-container">
      <p class="content-title text-xl"><b><strong>产品展示</strong></b></p>
    </div>
    <div class="three-d">
      <div id="scene-container">
        <!-- Our <canvas> will be inserted here -->
      </div>
      <!-- <button class="btn" @click="toNextView">切换到下一个视角</button>
      <button class="btn" @click="toGlobalView">切换到全局视角</button> -->
    </div>
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


<style lang="scss" scoped>
.content-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.content-title-container {
  position: relative;

  .content-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.three-d {
  width: 100%; 
  height: 65%; 

  display: flex;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .content-title-container {
    height: 8%;
  }
  #scene-container {
    width: 80%;
    height: 35%;
    background-color: whitesmoke;
  }
}

@media screen and (min-width: 769px) {
  .content-title-container {
    height: 15%;
  }
  #scene-container {
    /* tell our scene container to take up the full page */
    width: 70%;
    height: 100%;
    /*
      Set the container's background color to the same as the scene's
      background to prevent flashing on load
    */
    background-color: whitesmoke;
  }
}

</style>