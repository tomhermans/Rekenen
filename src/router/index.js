import Vue from "vue";
import Router from "vue-router";
import Optellen from "../components/Optellen";
import Tafels from "../components/Tafels";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/hello"
    },

    {
      path: "/tafels",
      component: Tafels,
      props: route => ({ name: route.query.name })
    },

    {
      path: "/optellen",
      component: Optellen,
      props: route => ({ name: route.query.name })
    }
  ]
});
