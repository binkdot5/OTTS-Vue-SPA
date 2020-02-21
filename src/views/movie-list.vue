<template>
  <div id="movies">
    <h5 class="navHeading">{{ theTitle }}</h5>
    <ul>
      <movie-list-item
        v-bind:movieSingle="movie"
        v-for="movie in movies"
        v-bind:key="movie.title"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import movieListItem from "./movie-list-item.vue";
export default {
  props: ["theTitle", "movies"],
  components: {
    "movie-list-item": movieListItem
  }
};
</script>

<style lang="scss" scoped>
.navHeading {
  text-transform: lowercase;
  font-size: 45px;
  color: #040404;
  position: absolute;
  top: -35px;
  right: 50px;
}
</style>
