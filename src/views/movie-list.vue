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
  color: #fff;
  position: absolute;
  top: -35px;
  right: 50px;
}

/* iPhone 6/7/8 Screen Size */
@media only screen and (max-width: 375px) {
  .navHeading {
    font-size: 28px;
    position: absolute;
    top: 0px;
  }
}

/* iPhone 6/7/8 Plus Screen Size */
@media screen and (max-width: 414px) and (min-width: 376px) {
  .navHeading {
    font-size: 28px;
    position: absolute;
    top: 0px;
  }
}

/* Kindle/iPad Portrait */
@media screen and (min-width: 800px) {
  .navHeading {
    font-size: 28px;
    position: absolute;
    top: 0px;
  }
}
</style>
