import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../views/movie-list.vue";
import MovieDetail from "../views/movie-detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/movies"
  },
  {
    path: "/movies",
    component: MovieList
  },
  {
    path: "/movies/:id",
    component: MovieDetail
  }
];

const router = new VueRouter({
  routes
});

export default router;
