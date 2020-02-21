import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../views/movie-list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/movies"
  },
  {
    path: "/movies",
    component: MovieList
  }
];

const router = new VueRouter({
  routes
});

export default router;
