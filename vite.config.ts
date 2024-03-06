import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssToViewport from 'postcss-px-to-viewport';

// https://vitejs.dev/config/
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // server:{
  //   proxy: {
  //     '/api': {
  //       target: env.VITE_SERVER_URL,
  //       rewrite: (path) => path.replace(/^\/api/, '/'),
  //       changeOrigin: true,
  //     },
  //   },
  // },
  css: {
    postcss: {
      plugins: [
        postCssToViewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          // viewportHeight:1080, // UI设计高度可以不写
          unitPrecision: 5, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vmin', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vmin', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: [], // 指定不转换为视窗单位的类名
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          replace: true, // 是否转换后直接更换属性值
        }),
      ],
    },
  },
})
