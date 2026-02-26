import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/guitarla-vue/', // ⭐ IMPORTANTE
  plugins: [vue()],
})


//import { defineConfig } from 'vite'
//import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [vue()],
//}) 

//https://github.com/miguel-dev006/guitarla-vue.git