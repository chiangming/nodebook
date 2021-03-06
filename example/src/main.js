import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// let app = new Vue({
//   render: h => h(App) // eslint-disable-next-line indent
// }).$mount('#app')

// // eslint-disable-next-line eol-last
// console.log(app)

// Vue.component('app', App)

// let app = new Vue({
//   el: '#app',
//   template: '<app><app>'
// })

// eslint-disable-next-line space-before-function-paren
// Vue.component('HelloWorld', function(resolve, reject) {
//   // 这个特殊的 require 语法告诉 webpack
//   // 自动将编译后的代码分割成不同的块，
//   // 这些块将通过 Ajax 请求自动下载。
//   // eslint-disable-next-line space-before-function-paren
//   require(['./components/HelloWorld'], function(res) {
//     debugger
//     resolve(res)
//   })
// })

/**
 * const AsyncComp = () => ({
  // 需要加载的组件。应当是一个 Promise
  component: import('./MyComp.vue'),
  // 加载中应当渲染的组件
  loading: LoadingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染加载中组件前的等待时间。默认：200ms。
  delay: 200,
  // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
  timeout: 3000
})
Vue.component('async-example', AsyncComp)
 */
Vue.component('HelloWorld', () =>
  import ('./components/HelloWorld'))

let app = new Vue({
  el: '#app',
  render: h => h(App)
})

// eslint-disable-next-line eol-last
console.log(app)