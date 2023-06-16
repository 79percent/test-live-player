import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputPath: 'dist/test-live-player',
  routes: [{ path: '/', component: '@/pages/index' }],
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
