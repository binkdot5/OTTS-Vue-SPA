<template>
  <div>
    <h5 class="navHeading">{{ theTitle }}</h5>
    <ul class="layout">
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
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  max-width: 900px;
  margin: 0 auto;
  margin-left: 210px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.navHeading {
  text-transform: lowercase;
  font-size: 45px;
  color: #fff;
  position: absolute;
  top: -35px;
  right: 50px;
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    max-width: 375px;
    margin: 0 auto;
  }
  .navHeading {
    font-size: 26px;
    position: absolute;
    top: 10px;
  }
}

// Medium devices (tablets, less than 992px)
@media (min-width: 768px) and (max-width: 991.98px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: 750px;
    margin: 0 auto;
  }
  .navHeading {
    font-size: 26px;
    position: absolute;
    top: 0px;
  }
}

// Large devices (desktops, less than 1200px)
@media (min-width: 992px) and (max-width: 1199.98px) {
  .layout {
    margin: 0 auto;
    margin-left: 40px;
  }
  .navHeading {
    font-size: 26px;
    position: absolute;
    top: 0px;
  }
}
</style>
