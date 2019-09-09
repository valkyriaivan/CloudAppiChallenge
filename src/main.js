import Vue from "vue";
import App from "./App";
import Toasted from "vue-toasted";
import VueRouter from "vue-router";
import UserList from "./components/UserList";
import UserCreation from "./components/UserCreation";
import SearchUserById from "./components/SearchUserById";
import EditUser from "./components/EditUser";
require("./css/main.css");

Vue.use(Toasted);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: UserList
    },
    {
      path: "/create",
      component: UserCreation
    },
    {
      path: "/search",
      component: SearchUserById
    },
    {
      path: "/edit/:id",
      component: EditUser
    },
    {
      path: "/edit",
      component: EditUser
    }
  ]
});
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
