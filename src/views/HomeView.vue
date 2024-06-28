<template>
  <div class="content-container">
    <div class="text-center content-title-container">
      <p class="content-title text-xl"><b><strong>产品展示</strong></b></p>
    </div>
    <div class="three-d">
      <div id="scene-container">
        <span class="loader" style="display: block;"></span>
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
      main()
      .then(() => {
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
      })
      .catch((err) => {
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

  #scene-container {
    position: relative;
    .loader {
      position: absolute;
      top: 50%;
      left: 40%;
      transform: translate(-40%, -50%);
    }
  }
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


// loading
.loader {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  color: #576574;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 100px 0 #576574, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 110px 0 #576574, 100px 0 #576574, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  36% {
    box-shadow: 120px 0 #576574, 110px 0 #576574, 100px 0 #576574, 0px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 130px 0 #576574, 120px 0 #576574, 110px 0 #576574, 100px 0 #576574;
  }
  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #576574, 120px 0 #576574, 110px 0 #576574;
  }
  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 #576574, 120px 0 #576574;
  }
  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 #576574;
  }
  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}
    
</style>