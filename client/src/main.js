import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import mixins from './mixins'

//import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mixin(mixins).mount('#app')

window.Kakao.init("1a0aee2f9feb0e9f3eab46facabdf215");

