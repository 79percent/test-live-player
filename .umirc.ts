import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputPath: 'dist/test-live-player',
  routes: [
    // { path: '/', redirect: '/tcPlayer' },
    { path: '/', component: '@/pages/index' },
    { path: '/tcPlayer', component: '@/pages/TCPlayer' },
  ],
  fastRefresh: {},
  history: {
    type: 'hash',
  },
  // devServer: {
  //   proxy: {
  //     '/live': {
  //       target: 'http://42.192.22.24:8080'
  //     }
  //   }
  // }
});
