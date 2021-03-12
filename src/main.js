import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN_diOczImJ6aXCycYgFKWhTjRY72KK_A",
  authDomain: "test-firebase-8d7cd.firebaseapp.com",
  projectId: "test-firebase-8d7cd",
  storageBucket: "test-firebase-8d7cd.appspot.com",
  messagingSenderId: "614733014637",
  appId: "1:614733014637:web:125ad0b9e93df3d4964164"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


