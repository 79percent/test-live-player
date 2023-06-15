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
});