<template>
  <div class="container mx-auto" style="height: 100vh;">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </div>
        <a class="btn btn-ghost text-xl">谱林斯顿门窗</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>
              <RouterLink :to="{ name: 'home' }">home</RouterLink>
            </a></li>
          <li><a>
            <RouterLink :to="{ name: 'about' }">about</RouterLink>
          </a></li>
          <li><a>
            <RouterLink :to="{ name: 'test' }">test</RouterLink>
          </a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="flex-row gap-2 flex">
          <div>
            <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
          </div>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <div>
      <router-view></router-view> <!-- 使用 RouterView 显示当前路由组件 -->
    </div>


    <!-- <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog> -->

  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import useEventChannel from '@/hooks/eventChannel'


const handleChangeTheme = () => {
  const html = document.getElementsByTagName('html')[0]
  const darkTheme = html.dataset.theme

  if (darkTheme === 'dark') {
    html.dataset.theme = 'light'
  } else {
    html.dataset.theme = 'dark'
  }
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
