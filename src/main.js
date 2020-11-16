/*
 * @Author: jinhui.li
 * @Date: 2020-09-15 18:48:31
 * @LastEditors: jinhui.li
 * @LastEditTime: 2020-11-16 16:16:01
 * @Description: 适配乾坤
 */
import './public-path';
import Vue from 'vue'
import App from './App.vue'
import xbb from 'xbb-sdk'

Vue.config.productionTip = false

Vue.prototype.$xbb = xbb

let instance;

function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export const bootstrap = xbb.bootstrap;
export const mount = xbb.mount;
xbb.ready(render);

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  return Promise.resolve();
}
